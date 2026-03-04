const MAX_MESSAGES = 200;
const messages = [];

function addMessage(entry) {
  messages.unshift({
    id: entry.id,
    from: entry.from,
    to: entry.to,
    incomingText: entry.incomingText,
    aiReply: entry.aiReply,
    status: entry.status,
    error: entry.error || null,
    createdAt: entry.createdAt || new Date().toISOString()
  });

  if (messages.length > MAX_MESSAGES) {
    messages.length = MAX_MESSAGES;
  }

  return messages[0];
}

function listMessages(limit = 50) {
  return messages.slice(0, Math.max(1, Math.min(Number(limit) || 50, MAX_MESSAGES)));
}

module.exports = {
  addMessage,
  listMessages
};
