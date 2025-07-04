'use client';

import { useAuth } from '@/hooks/useAuth';

const ProfilePage = () => {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      window.location.href = '/login';
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">👤 Profile</h1>
        <div className="space-y-3 text-gray-700 mb-4">
          <p><span className="font-semibold">ID:</span> {user?.id}</p>
          <p><span className="font-semibold">Name:</span> {user?.name}</p>
          <p><span className="font-semibold">Email:</span> {user?.email}</p>
        </div>

        {/* 🔓 Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
