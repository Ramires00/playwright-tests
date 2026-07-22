import { test, expect } from '@playwright/test';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

test('GET lista de posts deve retornar status 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status()).toBe(200);
});

test('GET em um post específico', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  const body: Post = await response.json();

  expect(body.userId).toBe(1);
});