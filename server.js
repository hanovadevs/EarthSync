import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.API_PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173', 'https://www.earthsyncessential.com'],
  methods: ['POST'],
}));
app.use(express.json({ limit: '10kb' }));

// Simple in-memory rate limiter
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 15; // max requests per window

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { start: now, count: 1 });
    return next();
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' });
  }

  entry.count++;
  return next();
}

// System prompt
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

// Chat endpoint
app.post('/api/chat', rateLimit, async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Chat service is not configured. Please contact support.' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request. Messages are required.' });
  }

  // Sanitize messages — only keep role and content
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

    res.json({ reply });
  } catch (error) {
    console.error('Claude API error:', error.message);

    if (error.status === 401) {
      return res.status(500).json({ error: 'Chat service authentication failed. Please contact support.' });
    }
    if (error.status === 429) {
      return res.status(429).json({ error: 'Our chat service is experiencing high demand. Please try again shortly.' });
    }

    res.status(500).json({ error: 'Something went wrong. Please try again or contact us directly.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`\n⚡ EarthSync API server running on http://localhost:${PORT}`);
  console.log(`   Claude API key: ${process.env.ANTHROPIC_API_KEY ? '✓ configured' : '✗ missing — set ANTHROPIC_API_KEY in .env.local'}\n`);
});
