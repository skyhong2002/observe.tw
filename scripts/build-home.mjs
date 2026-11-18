// Refresh the existing home-page sections from the shared project copy.
// Layout, fonts and page behavior stay in index.html.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { PROJECTS } from '../demo/projects.js';
import { renderGallery } from './render-gallery.mjs';

const main = ['tag', 'youtube', 'blogs', 'rep0rter', 'site', 'urtube', 'myzilla', 'harmonica', 'chumei', 'mayor2026', 'plaud'];
const more = ['pocketlog', 'afterimage', 'blog', 'weave', 'infovore', 'status', 'harpscore'];
const projects = [...main, ...more].map((id) => {
  const p = PROJECTS.find((p) => p.id === id && !p.hidden);
  if (!p) throw new Error(`Missing visible project: ${id}`);
  return p;
});
const galleries = Object.fromEntries(await Promise.all(projects.map(async (p) => [p.id, await renderGallery(p)])));
const tags = {
  meeting: '會議工具', ai: 'AI 應用', news: '新聞媒體', politics: '選舉政治', civic: '公民科技',
  social: '社群貼文', youtube: 'YouTube', lifelog: '個人數位足跡', harmonica: '口琴',
  campus: '校園', selfhost: '自架維運', blog: '部落格',
};
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
let html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const gh = html.match(/<svg width="14"[\s\S]*?<\/svg>/)[0];
function logo(p, size = 56) {
  return p.logo
    ? `<img class="logo${p.boxed ? ' boxed' : ''}" src="${esc(p.logo)}" alt="${esc(p.name)} logo" width="${size}" height="${size}">`
    : `<span class="logo mono" aria-hidden="true">${esc(p.name.slice(0, 1))}</span>`;
}
function section(p, index) {
  return `<section class="site${index % 2 ? ' flip' : ''}" id="${p.id}" data-tags="${p.tags.join(' ')}">
  <div class="info">
    <div class="site-head">
      ${logo(p)}
      <div class="site-head-text">
        <span class="domain"><span class="dot${p.private ? ' private' : ''}"></span>${esc(p.domain)}</span>
        <h2>${esc(p.name)}</h2>
      </div>
    </div>
    <p class="sub">${p.sub}</p>
    <div class="tags">${p.tags.map((tag) => `<button type="button" data-tag="${tag}">${tags[tag]}</button>`).join('')}</div>
    <p class="desc">
      ${p.desc}
    </p>
    <ul class="feats">
${p.feats.map(([title, text]) => `      <li><b>${title}</b> — ${text}</li>`).join('\n')}
    </ul>
    <div class="links">
      ${p.url ? `<a class="visit" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.visit)} ↗</a>` : `<a class="visit" href="${esc(p.repoUrl)}" target="_blank" rel="noopener">查看專案 ↗</a>`}
      ${p.repoUrl ? `<a class="repo" href="${esc(p.repoUrl)}" target="_blank" rel="noopener">${gh}${esc(p.repo)}</a>` : `<span class="repo">${gh}${esc(p.repo)}（私人）</span>`}
    </div>
  </div>
  ${galleries[p.id]}
</section>`;
}

const divider = `<section class="more" id="more">
  <h2>更多專案</h2>
  <p>不在 observe.tw 底下，但同樣是最近在做的東西。</p>
</section>`;
html = html.replace(/<section class="site[\s\S]*?(?=<p class="note">)/,
  projects.map((p, i) => `${i === main.length ? divider + '\n\n' : ''}${section(p, i)}`).join('\n\n') + '\n\n');
html = html.replace(/<div class="topics"[\s\S]*?<\/div>/, `<div class="topics" role="group" aria-label="依主題篩選">
      <button type="button" data-tag="" aria-pressed="true">全部 <span>${projects.length}</span></button>
${Object.entries(tags).map(([tag, label]) => `      <button type="button" data-tag="${tag}" aria-pressed="false">${label} <span>${projects.filter((p) => p.tags.includes(tag)).length}</span></button>`).join('\n')}
    </div>`);
html = html.replace(/<nav class="toc"[\s\S]*?<\/nav>/, `<nav class="toc" aria-label="專案">
${projects.map((p) => `      <a href="#${p.id}">${p.id}</a>`).join('\n')}
    </nav>`);
const galleryVersion = createHash('sha256').update(await readFile(new URL('./gallery.js', import.meta.url))).digest('hex').slice(0, 12);
html = html.replace(/\n<script[^>]*src="\/scripts\/gallery\.js[^>]*><\/script>/, '');
html = html.replace('</body>', `<script defer src="/scripts/gallery.js?v=${galleryVersion}"></script>\n</body>`);
await writeFile(new URL('../index.html', import.meta.url), html);

const row = (id) => {
  const p = projects.find((p) => p.id === id);
  return `| ${p.url ? `[${p.domain}](${p.url})` : p.domain} | ${p.name} — ${p.sub} | ${p.repoUrl ? `[${p.repo}](${p.repoUrl})` : `${p.repo}（私人）`} |`;
};
const readme = `# observe.tw 🔭

observe.tw 的入口頁，介紹觀測站群與最近在做的個人工具。

純靜態 HTML，透過既有的 GitHub Pages workflow 部署。中英文首頁使用同一份專案資料，保留既有星鳥版型。

## 觀測站一覽

| 網址 | 說明 | 專案 |
|---|---|---|
${main.map(row).join('\n')}

## 更多專案

| 網址／平台 | 說明 | 專案 |
|---|---|---|
${more.map(row).join('\n')}

PocketLog 目前沒有公開服務網址；按鈕連到開源 repo。OmniObserve 與 StanceLab 保留在專案資料中，維持首頁隱藏。

## 更新內容

- 繁中專案介紹：\`demo/projects.js\`；英文：\`demo/projects.en.js\`。
- 每個專案三張功能截圖：\`demo/screenshots.js\`；拍攝來源與示範資料說明：\`.github/SCREENSHOTS.md\`。全部以 1600 × 1000（16:10）瀏覽器畫面重拍並輸出 AVIF。預設手動切換，支援箭頭、圓點、左右鍵與手機滑動；附近圖片預載，解碼後才切換並保留舊圖淡入，避免載入空白。
- 執行 \`node scripts/build-home.mjs && node scripts/build-en.mjs\`，同步首頁、主題數量、導覽及本 README。
- 執行 \`node scripts/pulse.mjs\` 更新 demo 使用的公開讀數。部署 workflow 每小時取得新讀數，失敗的項目保留上次數值並標為過期。
- \`demo/5\`、\`demo/6\`、\`demo/7\` 是歷史版型快照，不隨本次內容更新重建。

## 授權

[MIT](LICENSE)
`;
await writeFile(new URL('../README.md', import.meta.url), readme);
console.log(`wrote index.html and README.md (${projects.length} projects)`);
