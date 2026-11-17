# 專案截圖來源

每個專案三張，共 51 張。輪播預設手動，支援箭頭、圓點、左右鍵與手機滑動；每張附雙語功能名稱並連回對應頁面。保留原本左右交錯、圖片向外延伸的版型。

留白較多的介面使用 1080 × 675；內容較密集的使用 1440 × 900（含口琴與選舉觀測站）。全部輸出為同尺寸 WebP，比例 16:10。公開頁面拍攝於 2026-11-17，必要時捲到功能內容，避免只拍到頁首。

MyZilla：在暫存 checkout `12a0aaa5dfc730d049aaeea8fe791586a63d0978` 執行原有前端與 `docs/design-review/tools/seed.mjs`，使用獨立 SQLite 與合成資料；未讀取正式資料。localplaud：官方唯讀 demo，合成資料。PocketLog：沿用 repo 中實際 production web UI 的驗證截圖，合成資料，非本輪重拍。Weave In 補圖為公開產品頁的代理分工與白板示意，未模擬實際會議。

資料與功能名稱維護在 `demo/screenshots.js`。

| 專案 | 功能畫面 | 來源 | 寬度 | 日期／來源備註 |
| --- | --- | --- | --- | --- |
| tag | 新聞焦點與熱門關鍵字 | https://tag.observe.tw/ | 1080px | 2026-11-17  |
| tag | 同題不同標與事件脈絡 | https://tag.observe.tw/eve/914/ | 1080px | 2026-11-17  |
| tag | 媒體報導關係 | https://tag.observe.tw/similarity/ | 1080px | 2026-11-17  |
| youtube | 熱門關鍵字與頻道動態 | https://youtube.observe.tw/ | 1080px | 2026-11-17  |
| youtube | 直播熱度排行 | https://youtube.observe.tw/live/current?or=1,2,12,13,14,81 | 1080px | 2026-11-17  |
| youtube | 每日議題與各台觀點 | https://youtube.observe.tw/ai/days | 1080px | 2026-11-17  |
| blogs | 共同話題與部落格引用 | https://weblog.tw/ | 1080px | 2026-11-17  |
| blogs | 文章中的引用段落 | https://weblog.tw/mentions/ | 1080px | 2026-11-17  |
| blogs | 部落格引用關係圖 | https://weblog.tw/relations/ | 1080px | 2026-11-17  |
| rep0rter | 多語社群報導 | https://rep0rter.observe.tw/index.html?lang=ZH | 1440px | 2026-11-17  |
| rep0rter | 報導與原始來源 | https://rep0rter.observe.tw/posts/337/index.html?lang=EN | 1440px | 2026-11-17  |
| rep0rter | 英文社群報導 | https://rep0rter.observe.tw/index.html?lang=EN | 1440px | 2026-11-17  |
| site | 網站流量排行與月份比較 | https://site.observe.tw/#to=202610&from=202609 | 1080px | 2026-11-17  |
| site | 標籤流量概況 | https://site.observe.tw/tag/ | 1080px | 2026-11-17  |
| site | 網站技術分布 | https://site.observe.tw/tech/ | 1080px | 2026-11-17  |
| urtube | 公開成員的觀看回顧 | https://urtube.observe.tw/skyhong.tw?lang=zh | 1080px | 2026-11-17  |
| urtube | 觀看節奏與注意力趨勢 | https://urtube.observe.tw/skyhong.tw/insights?range=365d&sort=duration | 1080px | 2026-11-17  |
| urtube | 私人觀看回顧介紹 | https://urtube.observe.tw/ | 1080px | 2026-11-17  |
| myzilla | 收藏、網摘與個人入口 | https://myzilla.observe.tw/ | 1080px | 2026-11-17 MyZilla 12a0aaa5 · isolated synthetic fixture · home |
| myzilla | 瀏覽回顧與停留時間 | https://myzilla.observe.tw/ | 1080px | 2026-11-17 MyZilla 12a0aaa5 · isolated synthetic fixture · overview |
| myzilla | 主題選集與推薦理由 | https://myzilla.observe.tw/ | 1080px | 2026-11-17 MyZilla 12a0aaa5 · isolated synthetic fixture · collections |
| harmonica | 口琴圈動態與活動 | https://harmonica.observe.tw/ | 1440px | 2026-11-17  |
| harmonica | 全球口琴活動 | https://harmonica.observe.tw/events/?lang=zh-Hant | 1440px | 2026-11-17  |
| harmonica | 比賽曲目與樂譜索引 | https://harmonica.observe.tw/scores/?lang=zh-Hant | 1440px | 2026-11-17  |
| chumei | 校園公開貼文河道 | https://chumei.observe.tw/ | 1440px | 2026-11-17  |
| chumei | 兩校活動日曆 | https://chumei.observe.tw/calendar/ | 1440px | 2026-11-17  |
| chumei | 活動時間與地點 | https://chumei.observe.tw/events/ | 1440px | 2026-11-17  |
| mayor2026 | 候選人官方發文時間軸 | https://mayor2026.observe.tw/ | 1440px | 2026-11-17  |
| mayor2026 | 候選人議題光譜 | https://mayor2026.observe.tw/spectrum/ | 1440px | 2026-11-17  |
| mayor2026 | 同縣市候選人政見比較 | https://mayor2026.observe.tw/compare/taipei/ | 1440px | 2026-11-17  |
| plaud | 錄音檔案庫 | https://skyhong2002.github.io/localplaud/demo/ | 1080px | 2026-11-17  |
| plaud | 錄音摘要與行動項目 | https://skyhong2002.github.io/localplaud/demo/file/904813b8118c1515cb314263?return_to=%2F | 1080px | 2026-11-17  |
| plaud | 講者分離與逐字稿 | https://skyhong2002.github.io/localplaud/demo/file/904813b8118c1515cb314263?view=corrected&revision=2&tab=transcript&return_to=%2F | 1080px | 2026-11-17  |
| pocketlog | 每日活動卡片 | https://github.com/skyhong2002/PocketLog | 1440px | 2026-11-15 7603f9a8 · docs/ux/screenshots/web-desktop-default-grid.png |
| pocketlog | 活動來源與脈絡 | https://github.com/skyhong2002/PocketLog | 1440px | 2026-11-15 08e23efb · docs/ux/screenshots/web-content-source-desktop.png |
| pocketlog | 活動細節與分類 | https://github.com/skyhong2002/PocketLog | 1440px | 2026-11-15 08e23efb · docs/ux/screenshots/web-desktop-activity-inspector.png |
| afterimage | 桌布視覺畫廊 | https://afterimage.skyhong.tw/ | 1440px | 2026-11-17  |
| afterimage | 依作品瀏覽視覺收藏 | https://afterimage.skyhong.tw/ | 1440px | 2026-11-17  |
| afterimage | 畫面細節與延伸聯想 | https://afterimage.skyhong.tw/#99f52f81bb15 | 1440px | 2026-11-17  |
| blog | 個人部落格首頁 | https://skyhong.tw/ | 1080px | 2026-11-17  |
| blog | 長文與專案紀錄 | https://skyhong.tw/tag/articles/ | 1080px | 2026-11-17  |
| blog | 現在正在做的事 | https://skyhong.tw/now | 1080px | 2026-11-17  |
| weave | 會議入口與產品介紹 | https://weave.nycu.ai/ | 1440px | 2026-11-17  |
| weave | Omni、Muse 與 Codex 分工介紹 | https://weave.nycu.ai/#agents | 1440px | 2026-11-17  |
| weave | 共享白板操作示意 | https://weave.nycu.ai/#whiteboard | 1440px | 2026-11-17  |
| infovore | 跨平台生活概覽 | https://infovore.skyhong.tw/ | 1080px | 2026-11-17  |
| infovore | 時間分布與年度回顧 | https://infovore.skyhong.tw/stats | 1080px | 2026-11-17  |
| infovore | 正在進行的作品 | https://infovore.skyhong.tw/now | 1080px | 2026-11-17  |
| status | 自架服務即時狀態 | https://status.skyhong.tw/ | 1080px | 2026-11-17  |
| status | 各服務可用性歷史 | https://status.skyhong.tw/#products | 1080px | 2026-11-17  |
| status | 憑證與網域到期監看 | https://status.skyhong.tw/#certificates | 1080px | 2026-11-17  |
