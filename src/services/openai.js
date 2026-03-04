const OpenAI = require("openai");
const { getConfig } = require("../config");

let client;

function getClient() {
  const config = getConfig();
  if (!config.openai.apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  if (!client) {
    client = new OpenAI({ apiKey: config.openai.apiKey });
  }

  return client;
}

async function generateReply({ from, incomingText }) {
  const config = getConfig();
  const response = await getClient().responses.create({
    model: config.openai.model,
    input: [
      {
        role: "system",
        content: config.openai.systemPrompt
      },
      {
        role: "user",
        content: `Sender: ${from}\nMessage: ${incomingText}`
      }
    ],
    max_output_tokens: 180,
    temperature: 0.6
  });

  const text = response.output_text && response.output_text.trim();

  if (!text) {
    throw new Error("OpenAI returned an empty response");
  }

  return text;
}

module.exports = {
  generateReply
};
