function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

function renderConfig(config) {
  const ul = document.getElementById("configList");
  const missing = config.missing || [];

  ul.innerHTML = "";

  const rows = [
    `OpenAI model: ${config.openaiModel || "n/a"}`,
    `Twilio signature validation: ${config.twilioSignatureValidation ? "ON" : "OFF"}`,
    `PUBLIC_BASE_URL set: ${config.publicBaseUrlConfigured ? "YES" : "NO"}`,
    missing.length
      ? `Missing environment variables: ${missing.join(", ")}`
      : "All required environment variables are present"
  ];

  rows.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function renderHealth(health) {
  const target = document.getElementById("health");
  target.innerHTML = `
    <div>Status: <strong>${escapeHtml(health.status || "unknown")}</strong></div>
    <div>Uptime: ${escapeHtml(String(health.uptimeSeconds || 0))}s</div>
    <div>Time: ${escapeHtml(health.timestamp || "-")}</div>
  `;
}

function renderMessages(items) {
  const wrapper = document.getElementById("messages");
  if (!items.length) {
    wrapper.innerHTML = "<p class=\"muted\">No messages yet.</p>";
    return;
  }

  wrapper.innerHTML = items
    .map((item) => {
      const error = item.error
        ? `<div class=\"mono muted\">Error: ${escapeHtml(item.error)}</div>`
        : "";

      return `
      <article class="message-item">
        <div class="message-head mono">
          <span>${escapeHtml(item.createdAt || "")}</span>
          <span>status: ${escapeHtml(item.status || "unknown")}</span>
        </div>
        <div class="message-body">
          <div><strong>From:</strong> ${escapeHtml(item.from || "")}</div>
          <div><strong>Incoming:</strong> ${escapeHtml(item.incomingText || "")}</div>
          <div><strong>Reply:</strong> ${escapeHtml(item.aiReply || "")}</div>
          ${error}
        </div>
      </article>
    `;
    })
    .join("");
}

async function refreshAll() {
  const [health, config, messages] = await Promise.all([
    fetchJson("/api/health"),
    fetchJson("/api/config"),
    fetchJson("/api/messages?limit=50")
  ]);

  renderHealth(health);
  renderConfig(config);
  renderMessages(messages.items || []);
}

async function initManualForm() {
  const form = document.getElementById("manualForm");
  const result = document.getElementById("manualResult");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const payload = {
      to: String(formData.get("to") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    if (!payload.to || !payload.message) {
      result.textContent = "Both fields are required.";
      return;
    }

    result.textContent = "Sending...";

    try {
      const data = await fetchJson("/api/manual-reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      result.textContent = `Message sent. SID: ${data.sid || "n/a"}`;
      form.reset();
      await refreshAll();
    } catch (error) {
      result.textContent = error.message;
    }
  });
}

function renderWebhookHint() {
  const webhookUrl = `${window.location.origin}/api/twilio/webhook`;
  document.getElementById("webhookUrl").textContent = webhookUrl;
  document.getElementById("webhookHint").textContent = `Use this as your Twilio incoming webhook URL: ${webhookUrl}`;
}

async function bootstrap() {
  renderWebhookHint();

  try {
    await refreshAll();
  } catch (error) {
    const health = document.getElementById("health");
    health.textContent = `Failed to load dashboard data: ${error.message}`;
  }

  await initManualForm();

  document.getElementById("refreshBtn").addEventListener("click", async () => {
    await refreshAll();
  });

  setInterval(refreshAll, 12000);
}

bootstrap();
