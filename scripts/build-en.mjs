// Builds en/index.html from index.html, taking each project's English copy
// from demo/projects.en.js. Run after editing either file:
//   node scripts/build-en.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { PROJECTS } from '../demo/projects.js';
import { EN } from '../demo/projects.en.js';

const TAGS = {
  會議工具: 'Meetings', 'AI 應用': 'AI', 新聞媒體: 'News', 選舉政治: 'Elections', 公民科技: 'Civic tech',
  社群貼文: 'Social posts', YouTube: 'YouTube', 個人數位足跡: 'Life-logging', 研究: 'Research',
  口琴: 'Harmonica', 校園: 'Campus', 自架維運: 'Self-hosting',
};

let html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

function swap(from, to, { all = false } = {}) {
  const n = html.split(from).length - 1;
  if (n === 0 || (!all && n > 1)) throw new Error(`expected one match for: ${from.slice(0, 60)} (found ${n})`);
  html = html.split(from).join(to);
}

// Each project section.
for (const p of PROJECTS) {
  const e = EN[p.id] ?? {};
  const name = e.name ?? p.name;
  const re = new RegExp(`<section class="site[^"]*" id="${p.id}"[\\s\\S]*?</section>`);
  const [section] = html.match(re);
  let s = section
    .replace(`<h2>${p.name}</h2>`, `<h2>${name}</h2>`)
    .replace(/alt="[^"]*logo"/, `alt="${name} logo"`)
    .replace(/<p class="sub">[\s\S]*?<\/p>/, `<p class="sub">${e.sub ?? p.sub}</p>`)
    .replace(/<p class="desc">[\s\S]*?<\/p>/, `<p class="desc">\n      ${e.desc ?? p.desc}\n    </p>`)
    .replace(/<ul class="feats">[\s\S]*?<\/ul>/, () => `<ul class="feats">\n${(e.feats ?? p.feats)
      .map(([b, t]) => `      <li><b>${b}</b> — ${t}</li>`).join('\n')}\n    </ul>`)
    .replace('前往網站 ↗', 'Visit site ↗')
    .replace('登入使用 ↗', `${e.visit ?? 'Sign in'} ↗`)
    .replace(/(<button type="button" data-tag="\w+">)([^<]+)(<\/button>)/g, (_, a, label, b) => a + TAGS[label] + b)
    .replace(/(<a class="shot[^"]*"[^>]*aria-label=")[^"]*"/, `$1${name} website"`)
    .replace(/alt="[^"]*截圖"/, `alt="Screenshot of ${name}"`);
  if (e.ph) s = s.replace(/(<div class="ph">[\s\S]*?<span>)[^<]*(<\/span>)/, `$1${e.ph}$2`);
  html = html.replace(section, s);
}

// Page chrome.
swap('<html lang="zh-Hant-TW">', '<html lang="en">');
swap('<title>observe.tw — 觀測站群</title>', '<title>observe.tw — a cluster of observatories</title>');
html = html.replace(/<meta name="description" content="[^"]*">/,
  '<meta name="description" content="observe.tw is a collection of automated observatories: public sites that gather and organize harmonica events, campus activities, election candidates’ official posts, news tags, civic-tech communities, YouTube data, meeting research and personal digital footprints.">');
html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="observe.tw — a cluster of observatories">');
html = html.replace(/<meta property="og:description" content="[^"]*">/,
  '<meta property="og:description" content="Automated observatories that keep collecting, organizing and publishing things worth keeping a record of.">');
swap('<a class="lang-switch" href="/en/" hreflang="en" lang="en">English</a>',
  '<a class="lang-switch" href="/" hreflang="zh-Hant" lang="zh-Hant">中文</a>');
html = html.replace(/<p class="tagline">[\s\S]*?<\/p>/,
  '<p class="tagline">\n      A collection of <b>observatories</b> — each subdomain is a small automated system that keeps\n      collecting, organizing and publishing something worth keeping a record of.\n    </p>');
swap('aria-label="依主題篩選"', 'aria-label="Filter by topic"');
swap('aria-label="專案"', 'aria-label="Projects"');
swap('全部 <span>', 'All <span>');
html = html.replace(/(<div class="topics"[\s\S]*?<\/div>)/, (block) =>
  block.replace(/(aria-pressed="false">)([^<]+?) (<span>)/g, (_, a, label, b) => `${a}${TAGS[label]} ${b}`));
swap('<h2>更多專案</h2>', '<h2>More projects</h2>');
swap('<p>不在 observe.tw 底下，但同樣是最近在做的東西。</p>', '<p>Not under observe.tw, but also things I’ve been building lately.</p>');
swap('這一頁本身也是開源的：', 'This page is open source too: ');
swap('skyhong2002/youtube-board（私有）', 'skyhong2002/youtube-board (private)');
html = html.replace(/src="assets\//g, 'src="/assets/');

// Anything still in Chinese that isn't a deliberate language name is a miss.
const allowed = ['繁體中文', '日本語', '中文'];
const leftovers = html.split('\n').filter((line) => {
  let rest = line;
  for (const w of allowed) rest = rest.split(w).join('');
  return /[一-鿿]/.test(rest);
});
if (leftovers.length) {
  console.error(leftovers.join('\n'));
  throw new Error(`${leftovers.length} untranslated line(s)`);
}

await mkdir(new URL('../en/', import.meta.url), { recursive: true });
await writeFile(new URL('../en/index.html', import.meta.url), html);
console.log('wrote en/index.html');
