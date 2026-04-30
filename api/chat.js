import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are EarthSync Essentials' customer assistant. You help customers understand our grounding products made with 10% pure silver. Answer questions about product benefits, the science of grounding and earthing, shipping, and returns. Keep answers concise, warm, and helpful. Never discuss competitors. If you're unsure about something, direct the customer to contact us directly.

Additional context about our products:
- We sell premium grounding/earthing sheets woven with 10% pure silver fibers
- Our sheets connect to the ground port of a standard wall outlet via a grounding cord
- Available in both white and grey, in multiple bed sizes (Twin, Full, Queen, King)
- Each sheet includes a built-in safety resistor for protection
- Benefits include: reduced inflammation, improved sleep, faster recovery, stress reduction
- We offer free shipping on all US orders
- 30-day satisfaction guarantee with easy returns
- Our website is www.earthsyncessential.com
- For direct support, customers can reach us via the Contact page on our website`;

// Simple in-memory rate limiter for serverless
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 15;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.earthsyncessential.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set');
    return res.status(500).json({ error: 'Chat service is not configured. Please contact support.' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request. Messages are required.' });
  }

  // Sanitize messages
  const sanitizedMessages = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user',
    content: String(msg.content).slice(0, 2000),
  }));

  try {
    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: sanitizedMessages,
    });

    const reply = response.content?.[0]?.text || 'I apologize, I was unable to generate a response. Please try again.';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Claude API error:', error.message);

    if (error.status === 401) {
      return res.status(500).json({ error: 'Chat service authentication failed. Please contact support.' });
    }
    if (error.status === 429) {
      return res.status(429).json({ error: 'Our chat service is experiencing high demand. Please try again shortly.' });
    }

    return res.status(500).json({ error: 'Something went wrong. Please try again or contact us directly.' });
  }
}
