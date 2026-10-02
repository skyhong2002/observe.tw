import { PROJECTS as ZH_PROJECTS } from './projects.js';
import { EN } from './projects.en.js';

/** Page language: Traditional Chinese by default, English with ?lang=en. */
export const LANG = new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'zh';
export const t = (zh, en) => (LANG === 'en' ? en : zh);

export const PROJECTS = ZH_PROJECTS.map((p) => {
  if (LANG !== 'en' || !EN[p.id]) return p;
  const { label, pulseLabel, ...rest } = EN[p.id];
  return {
    ...p,
    visit: 'Visit site',
    ...rest,
    label: { ...p.label, ...label },
    pulse: p.pulse && { ...p.pulse, label: pulseLabel ?? p.pulse.label },
  };
});

/** Keep the current language when linking to another page. */
export function href(path) {
  if (LANG !== 'en') return path;
  const [base, hash] = path.split('#');
  return `${base}${base.includes('?') ? '&' : '?'}lang=en${hash ? `#${hash}` : ''}`;
}

// Static markup carries its English copy in data-en; swap it in once.
document.documentElement.lang = t('zh-Hant-TW', 'en');
if (LANG === 'en') {
  for (const el of document.querySelectorAll('[data-en]')) el.innerHTML = el.dataset.en;
  for (const el of document.querySelectorAll('[data-aria-en]')) el.setAttribute('aria-label', el.dataset.ariaEn);
}

export const CHAPTERS = [
  {
    id: 'world',
    no: '01',
    title: t('觀測世界', 'Observing the world'),
    short: t('把公開資訊收進同一個地方', 'Public information, gathered in one place'),
    lede: t('把散落在各平台、各種語言的公開資訊收進同一個地方，保留原文與出處，讓人能比較、能訂閱。', 'Public information scattered across platforms and languages, gathered in one place — original text and sources intact, ready to compare and subscribe to.'),
    ids: ['harmonica', 'chumei', 'mayor2026', 'tag', 'rep0rter', 'youtube'],
  },
  {
    id: 'self',
    no: '02',
    title: t('觀測自己', 'Observing myself'),
    short: t('同一套方法，轉向自己', 'The same methods, turned inward'),
    lede: t('同一套方法轉向自己：看了什麼、逛了哪裡、說過什麼話。資料留在自己手上，只公開想公開的部分。', 'The same methods turned on myself: what I watched, where I browsed, what I said. The data stays with me; only what I choose is public.'),
    ids: ['urtube', 'myzilla', 'infovore', 'plaud', 'blog'],
  },
  {
    id: 'together',
    no: '03',
    title: t('一起思考', 'Thinking together'),
    short: t('幫人把想法說出來、聽見彼此', 'Helping people speak up and hear each other'),
    lede: t('不只記錄，也幫人把想法說出來，聽見彼此沒說出口的共識。', 'Not just recording — helping people put their thoughts into words and hear the agreement nobody has said out loud.'),
    ids: ['omni', 'weave', 'stancelab'],
  },
  {
    id: 'backstage',
    no: '04',
    title: t('幕後與其他', 'Backstage and more'),
    short: t('維運面板與社團小工具', 'Ops dashboards and club tools'),
    lede: t('讓上面這些持續運轉的維運面板，以及為社團攤位做的小工具。', 'The dashboard that keeps everything above running, and a small tool built for a club booth.'),
    ids: ['status', 'encore'],
  },
];

export const TAGS = [
  ['meeting', t('會議工具', 'Meetings')], ['ai', t('AI 應用', 'AI')], ['news', t('新聞媒體', 'News')],
  ['politics', t('選舉政治', 'Elections')], ['civic', t('公民科技', 'Civic tech')], ['social', t('社群貼文', 'Social posts')],
  ['youtube', 'YouTube'], ['lifelog', t('個人數位足跡', 'Life-logging')], ['research', t('研究', 'Research')],
  ['harmonica', t('口琴', 'Harmonica')], ['campus', t('校園', 'Campus')], ['selfhost', t('自架維運', 'Self-hosting')],
];
export const TAG_LABEL = Object.fromEntries(TAGS);

export const byId = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));
export const chapterOf = Object.fromEntries(CHAPTERS.flatMap((c) => c.ids.map((id) => [id, c])));

const GH = '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';

export function fmt(n) {
  if (typeof n !== 'number') return n;
  if (n >= 1e8) return LANG === 'en' ? `${(n / 1e9).toFixed(2)}B` : `${(n / 1e8).toFixed(1)} 億`;
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
    return `<a class="shot" href="${href}" target="_blank" rel="noopener" aria-label="${t(`${p.name} 網站`, `${p.name} website`)}">${bar}<img src="/assets/${p.shot}" alt="${t(`${p.name} 截圖`, `Screenshot of ${p.name}`)}" width="1280" height="800"${lazy ? ' loading="lazy"' : ''}></a>`;
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
    <div><dt>${t('觀測對象', 'Observes')}</dt><dd>${l.subject}</dd></div>
    <div><dt>${t('頻率', 'Cadence')}</dt><dd>${l.cadence}</dd></div>
    <div><dt>${t('始於', 'Since')}</dt><dd>${since(p)}</dd></div>
    <div><dt>${t('產出', 'Outputs')}</dt><dd>${l.outputs.join(' · ')}</dd></div>
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
  if (min < 1) return t('剛剛', 'just now');
  if (min < 60) return t(`${min} 分鐘前`, `${min} min ago`);
  const h = Math.round(min / 60);
  if (h < 48) return t(`${h} 小時前`, `${h} h ago`);
  return t(`${Math.round(h / 24)} 天前`, `${Math.round(h / 24)} days ago`);
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
  return `<div class="topics" role="group" aria-label="${t('依主題篩選', 'Filter by topic')}">
    <button type="button" data-tag="" aria-pressed="true">${t('全部', 'All')} <span>${PROJECTS.length}</span></button>
    ${TAGS.map(([k, v]) => `<button type="button" data-tag="${k}" aria-pressed="false">${v} <span>${count(k)}</span></button>`).join('')}
  </div>`;
}

function langSwitchHref() {
  const url = new URL(location.href);
  LANG === 'en' ? url.searchParams.delete('lang') : url.searchParams.set('lang', 'en');
  return url.pathname + url.search + url.hash;
}

export const DEMO_NAV = `<nav class="demo-nav">
  <a href="${href('/demo/')}">${t('← 所有 demo', '← All demos')}</a>
  <a href="${t('/', '/en/')}">${t('目前的首頁', 'Current home page')}</a>
  <a class="lang" href="${langSwitchHref()}" hreflang="${t('en', 'zh-Hant')}" lang="${t('en', 'zh-Hant')}">${t('English', '中文')}</a>
</nav>`;
