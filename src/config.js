const required = [
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_FROM_NUMBER",
  "OPENAI_API_KEY"
];

function getBoolean(value, defaultValue = false) {
  if (value === undefined) return defaultValue;
  return ["1", "true", "yes", "on"].includes(String(value).toLowerCase());
}

function getConfig() {
  const missing = required.filter((key) => !process.env[key]);

  return {
    app: {
      port: Number(process.env.PORT || 3000),
      publicBaseUrl: process.env.PUBLIC_BASE_URL || ""
    },
    twilio: {
      accountSid: process.env.TWILIO_ACCOUNT_SID || "",
      authToken: process.env.TWILIO_AUTH_TOKEN || "",
      fromNumber: process.env.TWILIO_FROM_NUMBER || "",
      verifySignature: getBoolean(process.env.VERIFY_TWILIO_SIGNATURE, true)
    },
    openai: {
      apiKey: process.env.OPENAI_API_KEY || "",
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      systemPrompt:
        process.env.OPENAI_SYSTEM_PROMPT ||
        "You are SmartReply, a concise and helpful SMS assistant for small businesses. Keep replies short, friendly, and actionable."
    },
    missing
  };
}

module.exports = {
  getConfig
};
