import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { SCREENSHOTS } from '../demo/screenshots.js';
import { EN } from '../demo/projects.en.js';

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const versions = new Map();
async function asset(src) {
  if (!versions.has(src)) versions.set(src, createHash('sha256').update(await readFile(new URL(`../assets/${src}`, import.meta.url))).digest('hex').slice(0, 12));
  return `/assets/${esc(src)}?v=${versions.get(src)}`;
}

export async function renderGallery(p, lang = 'zh') {
  const english = lang === 'en';
  const name = english ? EN[p.id]?.name ?? p.name : p.name;
  const shots = SCREENSHOTS[p.id];
  if (!shots?.length) throw new Error(`Missing gallery: ${p.id}`);
  const labels = shots.map((s) => english ? s.en : s.label);
  const caption = english ? EN[p.id]?.shotCaption : p.shotCaption;
  if (p.shotCaption && !caption) throw new Error(`Missing gallery caption: ${p.id}/${lang}`);
  const slides = await Promise.all(shots.map(async (s, i) => {
    const src = await asset(s.src);
    return `      <a class="gallery-slide" id="${p.id}-shot-${i + 1}" href="${esc(s.url)}" target="_blank" rel="noopener" data-label="${esc(labels[i])}" aria-label="${esc(`${name} · ${labels[i]}`)}"${i ? ' hidden' : ''}>
        <img ${i ? 'data-src' : 'src'}="${src}" alt="${esc(english ? `${name}: ${labels[i]}` : `${name}：${labels[i]}截圖`)}" width="${s.width}" height="${s.width * 5 / 8}" loading="lazy" decoding="async" draggable="false">
      </a>`;
  }));
  return `<!-- gallery:${p.id} -->
  <div class="shot gallery" role="region" aria-roledescription="${english ? 'carousel' : '圖片輪播'}" aria-label="${esc(name)} ${english ? 'screenshots' : '功能截圖'}">
    <div class="shot-bar"><i></i><i></i><i></i><span class="gallery-label">${esc(labels[0])}</span><span class="gallery-count" aria-hidden="true">1 / ${shots.length}</span></div>
    <div class="gallery-stage">
${slides.join('\n')}
      <div class="gallery-controls" hidden>
        <button type="button" class="gallery-arrow gallery-prev" aria-label="${english ? 'Previous screenshot' : '上一張截圖'}">‹</button>
        <button type="button" class="gallery-arrow gallery-next" aria-label="${english ? 'Next screenshot' : '下一張截圖'}">›</button>
        <div class="gallery-dots" role="group" aria-label="${english ? 'Choose a screenshot' : '選擇截圖'}">
${shots.map((s, i) => `          <button type="button" data-slide="${i}" aria-controls="${p.id}-shot-${i + 1}" aria-label="${esc(`${i + 1}. ${labels[i]}`)}" aria-pressed="${i === 0}"><span></span></button>`).join('\n')}
        </div>
      </div>
    </div>${caption ? `\n    <span class="shot-caption">${esc(caption)}</span>` : ''}
    <span class="gallery-status sr-only" aria-live="polite" aria-atomic="true"></span>
  </div>
  <!-- /gallery:${p.id} -->`;
}
