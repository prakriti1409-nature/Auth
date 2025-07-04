// pages/api/follow.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { celebId } = req.body;
  // Call your Nest.js backend to save follow
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/follow`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ celebId })
  });
  return res.json({ ok: true });
}
