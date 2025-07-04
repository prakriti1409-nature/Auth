// src/app/page.tsx

'use client';

export default function HomePage() {
  return (
    <div style={{ padding: 40 }}>
      <h1 className="text-3xl font-bold mb-4">🎉 Welcome to the Auth + AI App</h1>
      <p className="mb-2">
        🔐 Go to <a href="/register" className="text-blue-600 underline">Register</a> or <a href="/login" className="text-blue-600 underline">Login</a>
      </p>
      <p className="mb-2">
        🌟 Try <a href="/onboard" className="text-green-600 underline">AI Onboarding</a>
      </p>
      <p className="mb-2">
        🎤 Discover <a href="/celebrities" className="text-purple-600 underline">Celebrities</a>
      </p>
    </div>
  );
}
