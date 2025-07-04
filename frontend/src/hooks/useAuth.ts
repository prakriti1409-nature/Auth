'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/auth/profile');

        if (res.status === 401) {
          router.replace('/login'); // safer redirect
          return;
        }

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error('Failed to fetch profile', err);
        router.replace('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  return { user, loading };
};
