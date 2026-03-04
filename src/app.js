const express = require("express");
const path = require("path");
const crypto = require("crypto");
const { getConfig } = require("./config");
const { generateReply } = require("./services/openai");
const { isValidTwilioRequest, sendMessage } = require("./services/twilio");
const { addMessage, listMessages } = require("./store/messages");

const config = getConfig();
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.get("/api/config", (req, res) => {
  res.json({
    missing: config.missing,
    openaiModel: config.openai.model,
    twilioSignatureValidation: config.twilio.verifySignature,
    publicBaseUrlConfigured: Boolean(config.app.publicBaseUrl)
  });
});

app.get("/api/messages", (req, res) => {
  res.json({
    items: listMessages(req.query.limit),
    total: listMessages(200).length
  });
});

app.post("/api/manual-reply", async (req, res) => {
  const { to, message } = req.body || {};

  if (!to || !message) {
    return res.status(400).json({ error: "Both 'to' and 'message' are required." });
  }

  try {
    const sent = await sendMessage({ to, body: message });

    addMessage({
      id: sent.sid || crypto.randomUUID(),
      from: config.twilio.fromNumber,
      to,
      incomingText: "(manual send)",
      aiReply: message,
      status: "manual_sent"
    });

    return res.json({ ok: true, sid: sent.sid });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to send message",
      details: error.message
    });
  }
});

app.post("/api/twilio/webhook", express.urlencoded({ extended: false }), async (req, res) => {
  if (!isValidTwilioRequest(req)) {
    return res.status(401).send("Invalid Twilio signature");
  }

  const incomingText = String(req.body.Body || "").trim();
  const from = req.body.From;
  const to = req.body.To;
  const sid = req.body.MessageSid || crypto.randomUUID();

  if (!from) {
    return res.status(400).send("Missing sender");
  }

  if (!incomingText) {
    addMessage({
      id: sid,
      from,
      to,
      incomingText: "",
      aiReply: "",
      status: "ignored_empty"
    });
    return res.status(200).send("Ignored empty message");
  }

  try {
    const aiReply = await generateReply({ from, incomingText });
    const twilioResult = await sendMessage({
      to: from,
      body: aiReply
    });

    addMessage({
      id: sid,
      from,
      to,
      incomingText,
      aiReply,
      status: twilioResult.status || "sent"
    });

    return res.status(200).send("Reply sent");
  } catch (error) {
    const fallback = "Thanks for your message. Our team will get back to you shortly.";

    try {
      await sendMessage({
        to: from,
        body: fallback
      });

      addMessage({
        id: sid,
        from,
        to,
        incomingText,
        aiReply: fallback,
        status: "fallback_sent",
        error: error.message
      });

      return res.status(200).send("Fallback reply sent");
    } catch (fallbackError) {
      addMessage({
        id: sid,
        from,
        to,
        incomingText,
        aiReply: "",
        status: "failed",
        error: `${error.message} | fallback: ${fallbackError.message}`
      });

      return res.status(500).send("Failed to process message");
    }
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
