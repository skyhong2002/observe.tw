# observe.tw 🔭

observe.tw 的入口頁，介紹觀測站群與最近在做的個人工具。

純靜態 HTML，透過既有的 GitHub Pages workflow 部署。中英文首頁使用同一份專案資料，保留既有星鳥版型。

## 觀測站一覽

| 網址 | 說明 | 專案 |
|---|---|---|
| [tag.observe.tw](https://tag.observe.tw) | 新文易數 — 同一件事，各家怎麼說 | [skyhong2002/tag.observe.tw](https://github.com/skyhong2002/tag.observe.tw) |
| [youtube.observe.tw](https://youtube.observe.tw) | 有影儀表板 — 同一件事，各台怎麼說 | [skyhong2002/youtube-board](https://github.com/skyhong2002/youtube-board) |
| [weblog.tw](https://weblog.tw) | 部落格觀察 — 每一種生活，各自怎麼寫 | [skyhong2002/blog-observe-tw](https://github.com/skyhong2002/blog-observe-tw) |
| [rep0rter.observe.tw](https://rep0rter.observe.tw) | rep0rter — 公民科技社群的 AI 記者 | [rep0rter/rep0rter](https://github.com/rep0rter/rep0rter) |
| [site.observe.tw](https://site.observe.tw) | 網站雷達 — 臺灣網站每月流量排行與網站技術 | [skyhong2002/traffic.observe.tw](https://github.com/skyhong2002/traffic.observe.tw) |
| [urtube.observe.tw](https://urtube.observe.tw) | urtube — 從真實的觀看紀錄，理解自己、找到同好 | [skyhong2002/urtube.observe.tw](https://github.com/skyhong2002/urtube.observe.tw) |
| [myzilla.observe.tw](https://myzilla.observe.tw) | MyZilla — 我的個人入口 · 瀏覽回顧 | [skyhong2002/MyZilla](https://github.com/skyhong2002/MyZilla) |
| [harmonica.observe.tw](https://harmonica.observe.tw) | 口琴觀測站 — Harmonica Observatory · 世界各地的口琴活動、演奏者與樂譜 | [skyhong2002/harmonica-observatory](https://github.com/skyhong2002/harmonica-observatory) |
| [chumei.observe.tw](https://chumei.observe.tw) | 竹梅活動觀測站 — 清大 × 陽明交大校園活動貼文河道 | [skyhong2002/chumei](https://github.com/skyhong2002/chumei) |
| [mayor2026.observe.tw](https://mayor2026.observe.tw) | 2026 市長官方來源觀測站 — 全臺縣市首長候選人的官方發文時間軸 | [skyhong2002/mayor2026](https://github.com/skyhong2002/mayor2026) |
| [plaud.observe.tw](https://plaud.observe.tw) | localplaud — 自架的 Plaud 錄音處理流程 | [skyhong2002/localplaud](https://github.com/skyhong2002/localplaud) |

## 更多專案

| 網址／平台 | 說明 | 專案 |
|---|---|---|
| Android · Web | PocketLog — 你的日常，有跡可循 | [skyhong2002/PocketLog](https://github.com/skyhong2002/PocketLog) |
| [afterimage.skyhong.tw](https://afterimage.skyhong.tw) | AfterImage — 殘影 · 移開視線後，仍留下的畫面 | [skyhong2002/afterimage](https://github.com/skyhong2002/afterimage) |
| [skyhong.tw](https://skyhong.tw) | Skychopath. — 個人部落格 | [skyhong2002/skychopath-theme](https://github.com/skyhong2002/skychopath-theme) |
| [weave.nycu.ai](https://weave.nycu.ai) | Weave In — Keep the thread. Weave everyone in. | [JacobLinCool/Weave-In](https://github.com/JacobLinCool/Weave-In) |
| [infovore.skyhong.tw](https://infovore.skyhong.tw) | infovore — 生活年輪 | [skyhong2002/infovore](https://github.com/skyhong2002/infovore) |
| [status.skyhong.tw](https://status.skyhong.tw) | Sky Status — 自架服務的公開維運儀表板 | [skyhong2002/status.skyhong.tw](https://github.com/skyhong2002/status.skyhong.tw) |
| [skyhong2002.github.io/harpscore](https://skyhong2002.github.io/harpscore/) | HarpScore — 讓 agent 認真編口琴譜，把簡譜寫清楚 | [skyhong2002/harpscore](https://github.com/skyhong2002/harpscore) |

PocketLog 目前沒有公開服務網址；按鈕連到開源 repo。OmniObserve 與 StanceLab 保留在專案資料中，維持首頁隱藏。

## 更新內容

- 繁中專案介紹：`demo/projects.js`；英文：`demo/projects.en.js`。
- 每個專案三張功能截圖：`demo/screenshots.js`；拍攝來源與示範資料說明：`.github/SCREENSHOTS.md`。全部以 1600 × 1000（16:10）瀏覽器畫面重拍並輸出 AVIF。預設手動切換，支援箭頭、圓點、左右鍵與手機滑動；附近圖片預載，解碼後才切換並保留舊圖淡入，避免載入空白。
- 執行 `node scripts/build-home.mjs && node scripts/build-en.mjs`，同步首頁、主題數量、導覽及本 README。
- 執行 `node scripts/pulse.mjs` 更新 demo 使用的公開讀數。部署 workflow 每小時取得新讀數，失敗的項目保留上次數值並標為過期。
- `demo/5`、`demo/6`、`demo/7` 是歷史版型快照，不隨本次內容更新重建。

## 授權

[MIT](LICENSE)
