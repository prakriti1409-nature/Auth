// app/celebrities/[id]/page.tsx
import { notFound } from 'next/navigation';

export default async function CelebrityProfile({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/celebrity/${params.id}`);
  
  if (!res.ok) return notFound();

  const celeb = await res.json();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{celeb.name}</h1>
      <p><strong>Profession:</strong> {celeb.profession}</p>
      <p><strong>Genre:</strong> {celeb.genre}</p>
      <p><strong>Country:</strong> {celeb.country}</p>
      <p><strong>Fanbase:</strong> {celeb.fanbase}</p>

      <h2 className="mt-4 font-semibold">🎧 Socials:</h2>
      <ul className="list-disc list-inside">
        <li>Instagram: {celeb.socials?.Instagram}</li>
        <li>YouTube: {celeb.socials?.YouTube}</li>
        <li>Spotify: {celeb.socials?.Spotify}</li>
      </ul>

      <h2 className="mt-4 font-semibold">🎤 Setlist / Topics:</h2>
      <p className="whitespace-pre-wrap">{celeb.sampleSetlist}</p>
    </div>
  );
}
