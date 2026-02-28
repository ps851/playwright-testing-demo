import { test, expect } from '@playwright/test';

/**
 * REST API Tests
 * Tests CRUD operations on the JSONPlaceholder API
 * @site https://jsonplaceholder.typicode.com
 */
test.describe('API Tests', () => {

  test('GET - should return list of users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
  });

  test('GET - should return single post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
  });

  test('POST - should create a new post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: { title: 'Test Post', body: 'Test content', userId: 1 }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('Test Post');
  });

  test('PUT - should update a post', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: { title: 'Updated Post', body: 'Updated content', userId: 1 }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('Updated Post');
  });

  test('DELETE - should delete a post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
  });

});