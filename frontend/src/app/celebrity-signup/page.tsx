'use client';

import { useState } from 'react';

type Celebrity = {
  name: string;
  profession?: string;
  imageUrl?: string;
};

export default function CelebritySignup() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Celebrity[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setSuggestions([]);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/celebrity/suggest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query }),
      });

      const data = await res.json();
      setSuggestions(data.suggestions);
    } catch (err) {
      console.error('Suggestion failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-8 shadow rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">🎤 Celebrity Onboarding</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded"
            placeholder="e.g., Punjabi singer from India who performed at Coachella"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Suggest Celebrities'}
          </button>
        </form>

        {suggestions.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Suggested Matches:</h2>
            <div className="grid gap-4">
              {suggestions.map((celeb, i) => (
                <div
                  key={i}
                  className="p-4 border rounded shadow bg-gray-50 hover:bg-gray-100 transition"
                >
                  <p className="font-bold">{celeb.name}</p>
                  <p className="text-sm text-gray-600">{celeb.profession || 'Celebrity'}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
