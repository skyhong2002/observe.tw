// Fetches one live reading per project and writes pulse.json for the demos.
// A reading that fails keeps its last published value, marked stale.
import { writeFile } from 'node:fs/promises';
import { PROJECTS } from '../demo/projects.js';

const previous = await fetch('https://observe.tw/pulse.json')
  .then((r) => (r.ok ? r.json() : null))
  .catch(() => null);

const items = {};
await Promise.all(PROJECTS.filter((p) => p.pulse).map(async (p) => {
  const { url, pick, timeout = 30_000 } = p.pulse;
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'observe.tw-pulse (+https://observe.tw)' },
      signal: AbortSignal.timeout(timeout),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = await res.text();
    const value = pick(body);
    if (typeof value !== 'number' || !Number.isFinite(value)) throw new Error(`not a number: ${value}`);
    items[p.id] = { value, at: new Date().toISOString() };
    console.log(`${p.id}: ${value}`);
  } catch (err) {
    const last = previous?.items?.[p.id];
    if (last) items[p.id] = { ...last, stale: true };
    console.warn(`${p.id}: ${err.message}${last ? ' (kept last value)' : ''}`);
  }
}));

await writeFile('pulse.json', JSON.stringify({ updated: new Date().toISOString(), items }, null, 1) + '\n');
