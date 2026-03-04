# SmartReply MVP

SmartReply is a lightweight SaaS MVP that auto-replies to SMS messages.

Flow:
1. Twilio webhook receives incoming SMS.
2. Backend sends message context to OpenAI.
3. OpenAI generates a reply.
4. Reply is sent back via Twilio SMS API.
5. Dashboard shows health, config checks, and recent message activity.

## Stack
- Node.js
- Express
- Twilio SMS API
- OpenAI API
- Simple HTML/CSS/JS dashboard
- Vercel deployment

## Project Structure

```
.
├── api/
│   └── index.js
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── src/
│   ├── services/
│   │   ├── openai.js
│   │   └── twilio.js
│   ├── store/
│   │   └── messages.js
│   ├── app.js
│   ├── config.js
│   └── server.js
├── .env.example
├── package.json
└── vercel.json
```

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env
   ```
3. Fill real Twilio/OpenAI values in `.env`.
4. Run:
   ```bash
   npm run dev
   ```
5. Open dashboard:
   - [http://localhost:3000](http://localhost:3000)

## Twilio SMS Configuration

In Twilio Console for your SMS-enabled number:
- Set incoming webhook method to `POST`.
- Set URL to:
  - Local: `https://<your-ngrok-domain>/api/twilio/webhook`
  - Vercel: `https://<your-domain>/api/twilio/webhook`

If signature validation is enabled (`VERIFY_TWILIO_SIGNATURE=true`), set `PUBLIC_BASE_URL` to the exact public URL base (for example `https://smartreply.vercel.app`) so signature checks match.

## Vercel Deployment

1. Push code to GitHub.
2. Import repository in Vercel.
3. Add environment variables from `.env.example` in Vercel project settings.
4. Deploy.
5. Update Twilio webhook URL to your Vercel domain.

## API Endpoints

- `GET /api/health` - service status
- `GET /api/config` - config + missing env check
- `GET /api/messages` - recent in-memory message log
- `POST /api/manual-reply` - send manual SMS
- `POST /api/twilio/webhook` - Twilio incoming webhook endpoint

## Notes for MVP

- Message history is in-memory (not persistent across restarts/serverless cold starts).
- Add a database (Postgres/Supabase/Firebase) for production persistence.
- Add auth and multi-tenant support before production use.
