'use client';

import { useState } from 'react';

export default function CelebrityOnboardingPage() {
  const [input, setInput] = useState('');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const autofillProfile = async () => {
    setLoading(true);
    setProfile(null);

    try {
      const res = await fetch('http://localhost:3000/openai/fill-celebrity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: input }),
      });

      const data = await res.json();
      setProfile(data?.profile);
    } catch (err) {
      console.error('AI Error:', err);
      alert('Failed to fetch celebrity profile from AI.');
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    setSaving(true);
    try {
      await fetch('http://localhost:3000/celebrities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      alert('Saved successfully!');
    } catch (err) {
      alert('Failed to save.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎤 Celebrity Onboarding</h1>

      <textarea
        className="w-full border p-2 mb-4 rounded"
        rows={4}
        placeholder='e.g. "Punjabi singer who performed at Coachella"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={autofillProfile}
        disabled={loading}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        {loading ? 'Filling...' : 'AI Auto-Fill'}
      </button>

      {profile && (
        <div className="mt-6 bg-gray-50 p-4 border rounded space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">⭐ Profile</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Profession:</strong> {profile.profession}</p>
          <p><strong>Genre:</strong> {profile.genre}</p>
          <p><strong>Country:</strong> {profile.country}</p>
          <p><strong>Fanbase:</strong> {profile.fanbase}</p>
          <p><strong>Instagram:</strong> {profile.socials?.Instagram}</p>
          <p><strong>YouTube:</strong> {profile.socials?.YouTube}</p>
          <p><strong>Spotify:</strong> {profile.socials?.Spotify}</p>
          <p><strong>Setlist/Topics:</strong> {profile.sampleSetlist}</p>

          <button
            onClick={saveProfile}
            disabled={saving}
            className="bg-green-600 mt-4 text-white px-4 py-2 rounded"
          >
            {saving ? 'Saving...' : 'Save to Platform'}
          </button>
        </div>
      )}
    </div>
  );
}
