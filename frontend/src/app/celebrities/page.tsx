'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CelebritiesPage() {
  const [celebs, setCelebs] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/celebrity')
      .then((res) => res.json())
      .then(setCelebs);
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🌟 All Celebrities</h1>
      <div className="grid grid-cols-1 gap-4">
        {celebs.map((celeb) => (
          <Link
            key={celeb.id}
            href={`/celebrities/${celeb.id}`}
            className="block p-4 bg-white border rounded shadow hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{celeb.name}</h2>
            <p>{celeb.profession} · {celeb.genre} · {celeb.country}</p>
            <p className="text-sm text-gray-500">Fanbase: {celeb.fanbase}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
