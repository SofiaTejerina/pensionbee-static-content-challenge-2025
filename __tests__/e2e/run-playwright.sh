#!/usr/bin/env bash
set -euo pipefail

echo "[fixtures] cleaning old pages…"
rm -rf content/test-page

echo "[fixtures] copying __tests__/e2e/fixtures/content → content/"
cp -R __tests__/e2e/fixtures/content/* content/

echo "[next] building…"
npm run build

echo "[next] starting preview on :3001…"
npm run start -- -p 3001 &
SERVER_PID=$!

echo "[wait] waiting for http://127.0.0.1:3001"
npx wait-on http://127.0.0.1:3001

echo "[playwright] running tests…"
npx playwright test
TEST_EXIT=$?

echo "[cleanup] killing Next.js (PID $SERVER_PID)"
kill $SERVER_PID

echo "[cleanup] removing test fixtures from content/"
rm -rf content/test-page

exit $TEST_EXIT