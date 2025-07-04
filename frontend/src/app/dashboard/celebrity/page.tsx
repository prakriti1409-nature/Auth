'use client';

import { useEffect, useState } from 'react';

export default function CelebrityDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const celebId = 1; // Replace with dynamic logic or session in real case

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch(`http://localhost:3000/celebrities/dashboard/${celebId}`);
      const data = await res.json();
      setStats(data);
      setLoading(false);
    };
    fetchStats();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading dashboard...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">📊 Celebrity Dashboard</h1>
      <p><strong>Name:</strong> {stats.name}</p>
      <p><strong>Fans:</strong> {stats.fans}</p>
      <p><strong>Profile Views:</strong> {stats.views}</p>
    </div>
  );
}
