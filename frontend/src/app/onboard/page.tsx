//app/onboard/page.tsx
'use client';

import { useState } from 'react';

export default function OnboardingPage() {
  const [bio, setBio] = useState('');
  const [form, setForm] = useState({
    name: '',
    role: '',
    interests: '',
  });

  const autofill = async () => {
    const prompt = `Extract the person's name, role, and top 2 interests from this intro: "${bio}". Return in JSON with keys: name, role, interests.`;

    const res = await fetch('http://localhost:3000/openai/suggest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    try {
      const parsed = JSON.parse(data.response);
      setForm(parsed);
    } catch {
      alert('Could not parse AI response. Try again.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">AI Onboarding Form</h1>
      <textarea
        className="w-full border p-2 mb-4"
        rows={4}
        placeholder="Paste your bio or introduction here..."
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button
        onClick={autofill}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Auto-fill with AI
      </button>

      <div className="mt-6 space-y-3">
        <input
          className="w-full border p-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border p-2"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <input
          className="w-full border p-2"
          placeholder="Interests"
          value={form.interests}
          onChange={(e) => setForm({ ...form, interests: e.target.value })}
        />
      </div>
    </div>
  );
}
