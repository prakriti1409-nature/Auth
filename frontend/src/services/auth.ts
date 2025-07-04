// src/services/auth.ts

import api from '@/lib/api';

export interface AuthResponse {
  id: number;
  name: string;
  email: string;
  // add more fields if needed
}

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await api.post('/auth/register', data);
  return res.data;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await api.post('/auth/login', data);
  return res.data;
};

export const getProfile = async (): Promise<AuthResponse> => {
  const res = await api.get('/auth/profile'); // or /users/me depending on your NestJS route
  return res.data;
};
