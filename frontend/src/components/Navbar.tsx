'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-800">
        🛡️ AuthApp
      </Link>

      <div className="space-x-4">
        {user ? (
          <>
            <span className="text-gray-600">👤 {user.name || user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
