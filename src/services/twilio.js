const twilio = require("twilio");
const { getConfig } = require("../config");

let client;

function getClient() {
  const config = getConfig();
  if (!config.twilio.accountSid || !config.twilio.authToken) {
    throw new Error("Twilio credentials are not set");
  }

  if (!client) {
    client = twilio(config.twilio.accountSid, config.twilio.authToken);
  }

  return client;
}

function getWebhookUrl(req) {
  const config = getConfig();
  if (config.app.publicBaseUrl) {
    const normalizedBase = config.app.publicBaseUrl.replace(/\/+$/, "");
    return `${normalizedBase}${req.originalUrl}`;
  }

  const proto = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.headers["x-forwarded-host"] || req.get("host");
  return `${proto}://${host}${req.originalUrl}`;
}

function isValidTwilioRequest(req) {
  const config = getConfig();
  if (!config.twilio.verifySignature) {
    return true;
  }

  const signature = req.header("x-twilio-signature");
  if (!signature) {
    return false;
  }

  const url = getWebhookUrl(req);
  return twilio.validateRequest(config.twilio.authToken, signature, url, req.body);
}

async function sendMessage({ to, body }) {
  const config = getConfig();
  if (!config.twilio.fromNumber) {
    throw new Error("TWILIO_FROM_NUMBER is not set");
  }

  return getClient().messages.create({
    from: config.twilio.fromNumber,
    to,
    body
  });
}

module.exports = {
  isValidTwilioRequest,
  sendMessage
};
