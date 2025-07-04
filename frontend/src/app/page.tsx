'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">🎉 Welcome to the Auth + AI App</h1>
        <ul className="space-y-4 text-center">
          <li>
            🔐 <Link href="/register" className="text-blue-600 hover:underline">Register</Link>
          </li>
          <li>
            🔓 <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          </li>
          <li>
            👤 <Link href="/onboard" className="text-green-600 hover:underline">User Onboarding (AI)</Link>
          </li>
          <li>
            🎤 <Link href="/celebrities" className="text-purple-600 hover:underline">Celebrity Onboarding</Link>
          </li>
          <li>
            📄 <Link href="/celebrities/list" className="text-indigo-600 hover:underline">View All Celebrities</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
