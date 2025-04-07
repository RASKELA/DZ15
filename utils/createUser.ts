import { request } from '@playwright/test';

export async function createUser() {
  const api = await request.newContext();
  await api.post('https://qauto.forstudy.space/api/auth/signup', {
    data: {
      name: 'User',
      lastName: 'Test',
      email: 'user@example.com',
      password: '123456',
      repeatPassword: '123456',
    },
  });
}