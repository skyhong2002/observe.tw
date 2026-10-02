import { PROJECTS } from './projects.js';

export { PROJECTS };

export const CHAPTERS = [
  {
    id: 'world',
    no: '01',
    title: '觀測世界',
    short: '把公開資訊收進同一個地方',
    lede: '把散落在各平台、各種語言的公開資訊收進同一個地方，保留原文與出處，讓人能比較、能訂閱。',
    ids: ['harmonica', 'chumei', 'mayor2026', 'tag', 'rep0rter', 'youtube'],
  },
  {
    id: 'self',
    no: '02',
    title: '觀測自己',
    short: '同一套方法，轉向自己',
    lede: '同一套方法轉向自己：看了什麼、逛了哪裡、說過什麼話。資料留在自己手上，只公開想公開的部分。',
    ids: ['urtube', 'myzilla', 'infovore', 'plaud', 'blog'],
  },
  {
    id: 'together',
    no: '03',
    title: '一起思考',
    short: '幫人把想法說出來、聽見彼此',
    lede: '不只記錄，也幫人把想法說出來，聽見彼此沒說出口的共識。',
    ids: ['omni', 'weave', 'stancelab'],
  },
  {
    id: 'backstage',
    no: '04',
    title: '幕後與其他',
    short: '維運面板與社團小工具',
    lede: '讓上面這些持續運轉的維運面板，以及為社團攤位做的小工具。',
    ids: ['status', 'encore'],
  },
];

export const TAGS = [
  ['meeting', '會議工具'], ['ai', 'AI 應用'], ['news', '新聞媒體'], ['politics', '選舉政治'],
  ['civic', '公民科技'], ['social', '社群貼文'], ['youtube', 'YouTube'], ['lifelog', '個人數位足跡'],
  ['research', '研究'], ['harmonica', '口琴'], ['campus', '校園'], ['selfhost', '自架維運'],
];
export const TAG_LABEL = Object.fromEntries(TAGS);

export const byId = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));
export const chapterOf = Object.fromEntries(CHAPTERS.flatMap((c) => c.ids.map((id) => [id, c])));

const GH = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';

export function fmt(n) {
  if (typeof n !== 'number') return n;
  if (n >= 1e8) return `${(n / 1e8).toFixed(1)} 億`;
  return n.toLocaleString('en-US');
}

export function since(p) {
  const [y, m] = p.label.since.split('-');
  return `${y}.${m}`;
}

export function logoHTML(p, cls = 'logo') {
  if (p.logo) return `<img class="${cls}${p.boxed ? ' boxed' : ''}" src="/${p.logo}" alt="">`;
  return `<span class="${cls} mono" aria-hidden="true">${p.name.slice(0, 1)}</span>`;
}

export function linksHTML(p) {
  const visit = p.url ? `<a class="visit" href="${p.url}" target="_blank" rel="noopener">${p.visit} ↗</a>` : '';
  let repo = '';
  if (p.repoUrl) repo = `<a class="repo" href="${p.repoUrl}" target="_blank" rel="noopener">${GH}${p.repo}</a>`;
  else if (p.repo) repo = `<span class="repo">${GH}${p.repo}</span>`;
  return `<div class="links">${visit}${repo}</div>`;
}

export function shotHTML(p, lazy = true) {
  const href = p.url || p.repoUrl;
  const bar = '<div class="shot-bar"><span></span><span></span><span></span></div>';
  if (p.shot) {
    return `<a class="shot" href="${href}" target="_blank" rel="noopener" aria-label="${p.name} 網站">${bar}<img src="/assets/${p.shot}" alt="${p.name} 截圖" width="1280" height="800"${lazy ? ' loading="lazy"' : ''}></a>`;
  }
  return `<a class="shot placeholder" href="${href}" target="_blank" rel="noopener" aria-label="${p.name}">${bar}<div class="ph"><img src="/${p.logo}" alt="" width="72" height="72"><span>${p.ph}</span></div></a>`;
}

export function tagsHTML(p) {
  return `<div class="tags">${p.tags.map((t) => `<button type="button" data-tag="${t}">${TAG_LABEL[t]}</button>`).join('')}</div>`;
}

export function pulseHTML(p, pulse) {
  const r = pulse?.items?.[p.id];
  if (!p.pulse) return '';
  const value = r && r.value != null ? fmt(r.value) : '—';
  return `<div class="pulse" data-pulse="${p.id}"><span class="pulse-dot"></span><b>${value}</b><span>${p.pulse.label}</span></div>`;
}

/** The museum-style object label. */
export function labelHTML(p, pulse) {
  const l = p.label;
  return `<dl class="plaque">
    <div><dt>觀測對象</dt><dd>${l.subject}</dd></div>
    <div><dt>頻率</dt><dd>${l.cadence}</dd></div>
    <div><dt>始於</dt><dd>${since(p)}</dd></div>
    <div><dt>產出</dt><dd>${l.outputs.join(' · ')}</dd></div>
  </dl>${pulseHTML(p, pulse)}`;
}

/** Full project section, in the same shape as the current home page. */
export function entryHTML(p, { flip = false, pulse = null, plaque = true } = {}) {
  return `<section class="site${flip ? ' flip' : ''}" id="${p.id}" data-tags="${p.tags.join(' ')}">
  <div class="info">
    <div class="site-head">
      ${logoHTML(p)}
      <div class="site-head-text">
        <span class="domain"><span class="dot${p.private ? ' private' : ''}"></span>${p.domain}</span>
        <h2>${p.name}</h2>
      </div>
    </div>
    <p class="sub">${p.sub}</p>
    ${tagsHTML(p)}
    ${plaque ? labelHTML(p, pulse) : ''}
    <p class="desc">${p.desc}</p>
    <ul class="feats">${p.feats.map(([b, t]) => `<li><b>${b}</b> — ${t}</li>`).join('')}</ul>
    ${linksHTML(p)}
  </div>
  ${shotHTML(p)}
</section>`;
}

export async function loadPulse() {
  try {
    const res = await fetch('/pulse.json', { cache: 'no-cache' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export function agoText(iso) {
  if (!iso) return '';
  const min = Math.round((Date.now() - new Date(iso)) / 60000);
  if (min < 1) return '剛剛';
  if (min < 60) return `${min} 分鐘前`;
  const h = Math.round(min / 60);
  return h < 48 ? `${h} 小時前` : `${Math.round(h / 24)} 天前`;
}

/**
 * Tag filtering shared by demos that show full sections. `groups` are
 * containers (chapters) that hide themselves when none of their sites match.
 */
export function wireFilter({ topics, sites, groups = [], onApply }) {
  const buttons = [...topics.querySelectorAll('button')];
  function apply(tag) {
    let shown = 0;
    for (const site of sites) {
      const match = !tag || site.dataset.tags.split(' ').includes(tag);
      site.hidden = !match;
      if (match) site.classList.toggle('flip', shown++ % 2 === 1);
    }
    for (const g of groups) g.hidden = !g.querySelector('.site:not([hidden])');
    for (const b of buttons) b.setAttribute('aria-pressed', String(b.dataset.tag === tag));
    const url = new URL(location.href);
    tag ? url.searchParams.set('tag', tag) : url.searchParams.delete('tag');
    history.replaceState(null, '', url);
    onApply?.(tag);
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.topics button, .tags button');
    if (!b) return;
    const fromTopics = topics.contains(b);
    apply(fromTopics && b.getAttribute('aria-pressed') === 'true' ? '' : b.dataset.tag);
    if (!fromTopics) topics.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });
  const initial = new URL(location.href).searchParams.get('tag');
  if (initial && TAG_LABEL[initial]) apply(initial);
  return apply;
}

export function topicsHTML() {
  const count = (t) => PROJECTS.filter((p) => p.tags.includes(t)).length;
  return `<div class="topics" role="group" aria-label="依主題篩選">
    <button type="button" data-tag="" aria-pressed="true">全部 <span>${PROJECTS.length}</span></button>
    ${TAGS.map(([k, v]) => `<button type="button" data-tag="${k}" aria-pressed="false">${v} <span>${count(k)}</span></button>`).join('')}
  </div>`;
}

export const DEMO_NAV = `<nav class="demo-nav"><a href="/demo/">← 所有 demo</a><a href="/">目前的首頁</a></nav>`;
