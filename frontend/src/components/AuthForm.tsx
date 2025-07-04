'use client';

import { useState } from 'react';
import { registerUser, loginUser } from '@/services/auth';
import { useRouter } from 'next/navigation';

interface Props {
  mode: 'register' | 'login';
}

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isRegister = mode === 'register';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isRegister) {
        const res = await registerUser(form);
        document.cookie = 'token=12345'; // 🧠 Simulated login token
        router.push('/profile');
      } else {
        const res = await loginUser({ email: form.email, password: form.password });
        document.cookie = 'token=12345'; // 🧠 Simulated login token
        router.push('/profile');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 bg-white p-8 shadow-lg rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {isRegister ? 'Create an Account' : 'Log In'}
      </h2>

      {isRegister && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="w-full border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
        className="w-full border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white font-semibold w-full py-3 rounded hover:bg-blue-700 transition duration-200"
      >
        {loading ? 'Please wait...' : isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  );
}
