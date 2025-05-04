import { test, expect } from '@playwright/test'

test.describe('Content routes', () => {
    test.beforeAll(async () => {
        process.env.CONTENT_ROOT = './tests/fixtures/content'
    })

    test('valid URL returns 200', async ({ request }) => {
        // Hit the preview server on port 3001
        const response = await request.get('http://localhost:3001/test-page')
        expect(response.status()).toBe(200)
    })

    test('valid URL returns 200 and contains fixture HTML', async ({ request }) => {
        // Hit the preview server on port 3001
        const r = await request.get('http://localhost:3001/test-page')
        expect(r.status()).toBe(200)
        expect(await r.text()).toContain('Hello from fixtures')
    })

    test('invalid URL returns 200 but show 404 error', async ({ request }) => {
        const response = await request.get('http://localhost:3001/non-existent')
        expect(response.status()).toBe(200)
        const body = await response.text()
        expect(body).toContain('404')
        expect(body).toContain('This page could not be found.')
    })
})
