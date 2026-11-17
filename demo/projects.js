// Shared project data for the /demo layouts and scripts/pulse.mjs.
export const PROJECTS = [
  {
    "id": "harmonica",
    "tags": [
      "social",
      "harmonica"
    ],
    "name": "口琴觀測站",
    "domain": "harmonica.observe.tw",
    "private": false,
    "logo": "assets/harmonica-logo.svg",
    "boxed": false,
    "sub": "Harmonica Observatory · 世界各地的口琴活動、演奏者與樂譜",
    "desc": "從臺灣出發、擴展到全世界的口琴資訊目錄：活動、學生社團、樂團、演奏者、教學工作室、比賽指定曲與樂譜來源。散落在各社群平台與各種語言的公開資訊集中在一起，並保留原文與原始連結。介面支援<b>繁體中文、English、日本語、한국어</b>。",
    "feats": [
      [
        "近 24 小時限動牆",
        "追蹤口琴圈 Instagram Stories 動態"
      ],
      [
        "公開活動日曆",
        "各國與線上活動，保留原始時區，Google Calendar 與 ICS 訂閱"
      ],
      [
        "來源名錄與樂譜索引",
        "依國家、區域篩選，比賽曲目可依學年與編制查詢"
      ],
      [
        "開放投稿與資料 API",
        "補充或更正來源，附 RSS feed 與公開 API"
      ]
    ],
    "url": "https://harmonica.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/harmonica-observatory",
    "repoUrl": "https://github.com/skyhong2002/harmonica-observatory",
    "shot": "shot-harmonica.webp",
    "shotWidth": 1440,
    "ph": null,
    "label": {
      "since": "2026-06",
      "subject": "全球口琴活動、演奏者與樂譜來源",
      "cadence": "每 30 分鐘",
      "outputs": [
        "網站",
        "API",
        "RSS",
        "ICS"
      ]
    },
    "commits": 285
    ,"pulse": { "url": "https://harmonica.observe.tw/api/v1/catalog", "label": "則口琴貼文", "pick": (b) => JSON.parse(b).stats.posts }
  },
  {
    "id": "chumei",
    "tags": [
      "social",
      "campus"
    ],
    "name": "竹梅活動觀測站",
    "domain": "chumei.observe.tw",
    "private": false,
    "logo": "assets/chumei-logo.png",
    "boxed": false,
    "sub": "清大 × 陽明交大校園活動貼文河道",
    "desc": "自動彙整<b>清華大學與陽明交通大學</b>的社團與校方公開貼文 ——Instagram、Facebook、Threads、X 與校園公告，經 LLM 抽取活動名稱、時間與地點，整理成可依<b>校區、平台、活動類型與主辦單位</b>篩選的河道。",
    "feats": [
      [
        "活動列表與日曆",
        "迎新、招生、演出、講座一目瞭然"
      ],
      [
        "限動牆",
        "兩校社團近 24 小時的 Instagram Stories"
      ],
      [
        "多管道訂閱",
        "Telegram 推播、RSS 與 ICS 行事曆"
      ]
    ],
    "url": "https://chumei.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/chumei",
    "repoUrl": "https://github.com/skyhong2002/chumei",
    "shot": "shot-chumei.webp",
    "shotWidth": 1440,
    "ph": null,
    "label": {
      "since": "2026-08",
      "subject": "清大、陽明交大 470+ 個社團與單位",
      "cadence": "每 3 小時",
      "outputs": [
        "網站",
        "RSS",
        "ICS",
        "Telegram",
        "MCP"
      ]
    },
    "commits": 411
    ,"pulse": { "url": "https://chumei.observe.tw/api/events.json", "label": "場校園活動", "pick": (b) => JSON.parse(b).events.length }
  },
  {
    "id": "mayor2026",
    "tags": [
      "politics",
      "social",
      "civic"
    ],
    "name": "2026 市長官方來源觀測站",
    "domain": "mayor2026.observe.tw",
    "private": false,
    "logo": "assets/mayor2026-logo.svg",
    "boxed": false,
    "sub": "全臺縣市首長候選人的官方發文時間軸",
    "desc": "收錄全臺<b>縣市首長候選人的官方公開發文</b>，跨 Facebook、Instagram、Threads、X、YouTube、Podcast 與官網整理成單一時間軸，並以議題分類比較候選人關注的主題。",
    "feats": [
      [
        "全臺縣市總覽",
        "依縣市查看候選人、陣營與官方來源"
      ],
      [
        "議題選擇器與議題光譜",
        "看每位候選人談什麼、談多少"
      ],
      [
        "原始來源與抓取狀態",
        "保留原始貼文連結，公開收錄與更新狀態"
      ]
    ],
    "url": "https://mayor2026.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/mayor2026",
    "repoUrl": "https://github.com/skyhong2002/mayor2026",
    "shot": "shot-mayor2026.webp",
    "shotWidth": 1440,
    "ph": null,
    "label": {
      "since": "2026-07",
      "subject": "全臺縣市首長候選人的官方公開發文",
      "cadence": "每 6 小時",
      "outputs": [
        "網站",
        "API",
        "RSS"
      ]
    },
    "commits": 77
    ,"pulse": { "url": "https://mayor2026.observe.tw/api/status.json", "label": "則候選人發文", "pick": (b) => JSON.parse(b).metrics.totalPosts }
  },
  {
    "id": "tag",
    "tags": [
      "news",
      "politics"
    ],
    "name": "新文易數",
    "domain": "tag.observe.tw",
    "private": false,
    "logo": "assets/tag-logo.svg",
    "boxed": false,
    "sub": "同一件事，各家怎麼說",
    "desc": "收集<b>臺灣與部分國際新聞來源</b>的公開文章，把標籤、事件、議題、媒體與署名整理成可以比較的資料：正在升溫的關鍵字、同一件事在各家的標題寫法，以及報導之間的內文相似與明示引用關係。",
    "feats": [
      [
        "同題不同標與事件時間線",
        "各家標題並排，追蹤事件前後的延續關係"
      ],
      [
        "媒體關係與記者動態",
        "比較內文相似、共同署名與明示引用，附原始文章證據"
      ],
      [
        "追蹤、公開 API 與即時看板",
        "追蹤標籤、媒體、記者與事件，提供私人 RSS、開放 API 與輪播看板"
      ]
    ],
    "url": "https://tag.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/tag.observe.tw",
    "repoUrl": "https://github.com/skyhong2002/tag.observe.tw",
    "shot": "shot-tag.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2026-10",
      "subject": "臺灣與部分國際新聞來源",
      "cadence": "每 9–60 分鐘",
      "outputs": [
        "網站",
        "API",
        "RSS"
      ]
    },
    "commits": 757
    ,"pulse": { "url": "https://tag.observe.tw/api/v1/media-stats", "label": "則新聞 · 過去 24 小時", "pick": (b) => JSON.parse(b).totals.last24h }
  },
  {
    "id": "site",
    "tags": [
      "news",
      "blog"
    ],
    "name": "網站雷達",
    "domain": "site.observe.tw",
    "private": false,
    "logo": "assets/site-logo.svg",
    "boxed": false,
    "sub": "臺灣網站每月流量排行與網站技術",
    "desc": "彙整 GeneHong 的「Similar Web」試算表與網站流量資料，追蹤<b>臺灣網站的每月 Similarweb 造訪估算</b>、自然搜尋與 AI 導流占比，並提供 Cloudflare Radar 與 Chrome UX Report 熱門度級距。新文易數、部落格觀察的流量數字也從這裡讀取。",
    "feats": [
      [
        "網站流量排行",
        "依標籤與來源篩選，任選兩個月份比較，可下載 CSV"
      ],
      [
        "標籤概況",
        "跨月份的標籤彙整與排名軌跡，網站標籤開放投票"
      ],
      [
        "網站技術",
        "以 Wappalyzer 規則偵測各網站首頁用了哪些技術"
      ]
    ],
    "url": "https://site.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/traffic.observe.tw",
    "repoUrl": "https://github.com/skyhong2002/traffic.observe.tw",
    "shot": "shot-site.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2026-10",
      "subject": "臺灣網站的流量、熱門度與網站技術",
      "cadence": "每小時",
      "outputs": [
        "網站",
        "API",
        "CSV"
      ]
    },
    "commits": 55
  },
  {
    "id": "blogs",
    "tags": [
      "blog"
    ],
    "name": "部落格觀察",
    "domain": "weblog.tw",
    "private": false,
    "logo": "assets/blogs-logo.svg",
    "boxed": false,
    "sub": "每一種生活，各自怎麼寫",
    "desc": "新文易數的姊妹站，把同一套方法用在<b>獨立部落格</b>：從公開的 RSS、Atom 與 sitemap 收錄文章，找出部落格之間在正文裡互相引用的段落，以及近期大家都在寫的共同話題。",
    "feats": [
      [
        "正文引用與關係圖",
        "近 90 天文章裡寫到其他部落格的句子，連成全站關係圖"
      ],
      [
        "共同話題排行",
        "近 30 天多個部落格同時在寫的詞，依熱度與參與站數排序"
      ],
      [
        "追蹤與個人 RSS",
        "登入追蹤喜歡的部落格，匯出個人 RSS 與 OPML"
      ],
      [
        "自動探索新站",
        "每週探索候選部落格，RSS 與首頁身分核對通過才收錄"
      ]
    ],
    "url": "https://weblog.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/blog-observe-tw",
    "repoUrl": "https://github.com/skyhong2002/blog-observe-tw",
    "shot": "shot-blogs.webp",
    "shotWidth": 1080,
    "shotUrl": "https://weblog.tw/",
    "shotCaption": "共同話題 · 文章引用 · 關係圖",
    "ph": null,
    "label": {
      "since": "2026-10",
      "subject": "獨立部落格的文章、引用與共同話題",
      "cadence": "每小時",
      "outputs": [
        "網站",
        "API",
        "RSS",
        "OPML"
      ]
    },
    "commits": 262
    ,"pulse": { "url": "https://weblog.tw/", "label": "篇部落格文章", "pick": (b) => Number(b.replace(/<[^>]*>/g, ' ').match(/已收錄\s*(\d+)\s*篇文章/)[1]) }
  },
  {
    "id": "rep0rter",
    "tags": [
      "news",
      "civic",
      "ai"
    ],
    "name": "rep0rter",
    "domain": "rep0rter.observe.tw",
    "private": false,
    "logo": "assets/rep0rter-logo.png",
    "boxed": false,
    "sub": "公民科技社群的 AI 記者",
    "desc": "每小時讀過 <b>g0v、Code for Korea、Code for Japan</b> 等公民科技社群的公開協作空間 ——Slack、GitHub、Mastodon、RSS 與公開 Notion，挑出值得關注的進展，寫成短篇報導。",
    "feats": [
      [
        "四種語言",
        "繁體中文、English、日本語、한국어，每篇都附原始來源卡片"
      ],
      [
        "編輯規則",
        "評分、去重，排除機器人、CI 雜訊與選擇退出的人"
      ],
      [
        "多管道發布",
        "網站、RSS、Telegram 頻道與 Threads"
      ]
    ],
    "url": "https://rep0rter.observe.tw",
    "visit": "前往網站",
    "repo": "rep0rter/rep0rter",
    "repoUrl": "https://github.com/rep0rter/rep0rter",
    "shot": "shot-rep0rter.webp",
    "shotWidth": 1440,
    "ph": null,
    "label": {
      "since": "2024-02",
      "subject": "g0v 與日韓公民科技社群",
      "cadence": "每小時",
      "outputs": [
        "網站",
        "RSS",
        "Telegram",
        "Threads"
      ]
    },
    "commits": 238
    ,"pulse": { "url": "https://rep0rter.observe.tw/", "label": "篇報導 · 首頁", "pick": (b) => Number(b.match(/Show (\d+) stories/)[1]) }
  },
  {
    "id": "youtube",
    "tags": [
      "youtube",
      "news",
      "politics"
    ],
    "name": "有影儀表板",
    "domain": "youtube.observe.tw",
    "private": false,
    "logo": "assets/youtube-logo.svg",
    "boxed": false,
    "sub": "同一件事，各台怎麼說",
    "desc": "觀測<b>三千多個公開 YouTube 頻道、百萬支以上影片</b>：新聞台、電視台與政治頻道正在直播什麼、哪些議題在升溫，並以新文易數的新聞標籤比對影片標題，看各台怎麼談同一件事。",
    "feats": [
      [
        "直播熱度與電視牆",
        "目前直播排行、同時在線人數與多台並排的直播電視牆"
      ],
      [
        "熱門標籤與文字雲",
        "以新文易數的新聞標籤比對影片標題與說明，依頻道加權熱度排序"
      ],
      [
        "議題與事件時間軸",
        "AI 整理每日議題與事件脈絡，附引用影片可回頭核對"
      ],
      [
        "選戰報表",
        "縣市候選人與地方政治關鍵字"
      ]
    ],
    "url": "https://youtube.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/youtube-board",
    "repoUrl": "https://github.com/skyhong2002/youtube-board",
    "shot": "shot-youtube.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2026-05",
      "subject": "三千多個公開 YouTube 頻道",
      "cadence": "每 1–9 分鐘",
      "outputs": [
        "網站",
        "API",
        "RSS"
      ]
    },
    "commits": 361
    ,"pulse": { "url": "https://youtube.observe.tw/api/v1/home", "label": "次觀看 · 本週", "pick": (b) => JSON.parse(b).data.summary.weeklyViews }
  },
  {
    "id": "urtube",
    "tags": [
      "youtube",
      "lifelog"
    ],
    "name": "urtube",
    "domain": "urtube.observe.tw",
    "private": false,
    "logo": "assets/urtube-logo.svg",
    "boxed": false,
    "sub": "從真實的觀看紀錄，理解自己、找到同好",
    "desc": "將 YouTube 觀看紀錄整理成私人的<b>興趣與注意力檔案</b>：透過 Chrome 擴充功能或 Google Takeout ZIP 匯入，回顧觀看時間、頻道與 AI 興趣主題，再依自己的選擇開啟同好探索與分享。",
    "feats": [
      [
        "匯入與長期回顧",
        "擴充功能同步或 Takeout 匯入，回看不同時期的喜好與關注"
      ],
      [
        "同好探索與 Blend",
        "以共同主題與頻道找到同好，接受好友邀請後比較彼此興趣"
      ],
      [
        "自己控制分享",
        "新帳號預設私人、同好探索預設關閉，可匯出或刪除資料"
      ]
    ],
    "url": "https://urtube.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/urtube.observe.tw",
    "repoUrl": "https://github.com/skyhong2002/urtube.observe.tw",
    "shot": "shot-urtube.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2026-08",
      "subject": "自己授權匯入的 YouTube 觀看紀錄",
      "cadence": "擴充功能同步 · Takeout 匯入",
      "outputs": [
        "網站",
        "API",
        "Chrome 擴充"
      ]
    },
    "commits": 320
    ,"pulse": { "url": "https://urtube.observe.tw/u/skyhong.tw/summary.json", "label": "次觀看 · 我的近一年", "pick": (b) => JSON.parse(b).stats.watchEvents }
  },
  {
    "id": "omni",
    "hidden": true,
    "tags": [
      "meeting",
      "research",
      "ai"
    ],
    "name": "OmniObserve",
    "domain": "omni.observe.tw",
    "private": false,
    "logo": null,
    "boxed": false,
    "sub": "揭露隱藏共識的線上會議引導",
    "desc": "陽明交大 HAIX 實驗室的研究平台。參與者透過私人語音輸入（back channel）留下 Idea Blocks，系統跨參與者偵測<b>相似但沒說出口的想法</b>，以匿名提示推播，讓潛在共識浮上公開討論。",
    "feats": [
      [
        "Front–back channel",
        "視訊會議、即時語音辨識與私人想法並行"
      ],
      [
        "匿名相似提示",
        "知道有人跟自己想得一樣，但不揭露身份與內容"
      ],
      [
        "研究工具",
        "任務範本、會議連結產生器與研究者監看介面"
      ]
    ],
    "url": "https://omni.observe.tw",
    "visit": "前往網站",
    "repo": "nycu-haix/omniobserve",
    "repoUrl": "https://github.com/nycu-haix/omniobserve",
    "shot": "shot-omni.webp",
    "ph": null,
    "label": {
      "since": "2026-04",
      "subject": "線上會議裡沒說出口的想法",
      "cadence": "會議中即時",
      "outputs": [
        "網站",
        "API",
        "CSV"
      ]
    },
    "commits": 781
  },
  {
    "id": "stancelab",
    "hidden": true,
    "tags": [
      "ai",
      "research",
      "civic"
    ],
    "name": "StanceLab",
    "domain": "stancelab.observe.tw",
    "private": false,
    "logo": null,
    "boxed": false,
    "sub": "把第一反應整理成可討論的立場",
    "desc": "寫下粗略的意見與信心程度，再和 AI 一起把它拆開：<b>訪談者</b>釐清、<b>導師</b>整理、<b>反方</b>挑戰，旁邊的記事本隨時收集有用的片段，最後收斂成可以發出去的草稿。",
    "feats": [
      [
        "三種角色或單一夥伴",
        "可比較多角色與一般聊天機器人的差異"
      ],
      [
        "自帶金鑰",
        "OpenRouter／OpenCode Go，無金鑰時有示範模式"
      ],
      [
        "匯出與續寫",
        "草稿匯出文字，整段 session 可匯出 JSON 再匯入"
      ]
    ],
    "url": "https://stancelab.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/StanceLab",
    "repoUrl": "https://github.com/skyhong2002/StanceLab",
    "shot": "shot-stancelab.webp",
    "ph": null,
    "label": {
      "since": "2026-03",
      "subject": "一個人的第一反應",
      "cadence": "按需",
      "outputs": [
        "網站",
        "TXT",
        "JSON"
      ]
    },
    "commits": 39
  },
  {
    "id": "myzilla",
    "tags": [
      "lifelog"
    ],
    "name": "MyZilla",
    "domain": "myzilla.observe.tw",
    "private": false,
    "logo": "assets/myzilla-logo.svg",
    "boxed": false,
    "sub": "我的個人入口 · 瀏覽回顧",
    "desc": "把 2000 年代的 MyZilla 個人入口重新做一次 —— 網址收藏、網摘、多站搜尋、電影與心情，再加上<b>完整的瀏覽歷史回顧</b>。原始歷史只保留在自己的伺服器，不會公開。",
    "feats": [
      [
        "瀏覽回顧",
        "常訪網站、瀏覽歷史全文搜尋，以及擴充功能量測的前景停留時間"
      ],
      [
        "主題選集與洞察",
        "整理個人興趣，挑選連結、加上推薦理由，發布可撤銷的分享快照"
      ],
      [
        "帳號與朋友",
        "邀請制私人帳號，雙方同意後才比較興趣分類"
      ]
    ],
    "url": "https://myzilla.observe.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/MyZilla",
    "repoUrl": "https://github.com/skyhong2002/MyZilla",
    "shot": "shot-myzilla.webp",
    "shotWidth": 1080,
    "shotCaption": "實際介面 · 合成示範資料",
    "ph": null,
    "label": {
      "since": "2026-09",
      "subject": "自己的瀏覽歷史與前景時間",
      "cadence": "即時記錄 · 每日 AI 回顧",
      "outputs": [
        "網站",
        "Chrome／Firefox 擴充"
      ]
    },
    "commits": 25
  },
  {
    "id": "plaud",
    "tags": [
      "ai",
      "lifelog",
      "selfhost"
    ],
    "name": "localplaud",
    "domain": "plaud.observe.tw",
    "private": true,
    "logo": "assets/localplaud-logo.svg",
    "boxed": false,
    "sub": "自架的 Plaud 錄音處理流程",
    "desc": "繼續用實體 Plaud 錄音筆與官方上傳，但<b>轉錄、講者分離、摘要、搜尋與問答</b>全部改在自己的機器上跑 —— 透過官方 Open API 拉回原始音檔，之後的衍生資料都由自己保管。",
    "feats": [
      [
        "完整處理流程",
        "轉檔、轉錄、對齊、講者分離、校正，產生筆記、章節與心智圖"
      ],
      [
        "跨錄音 Ask",
        "對單一錄音或整個資料庫提問，回答附可播放的引用片段"
      ],
      [
        "自有硬體推論",
        "部署在實驗室 GPU 主機，可插拔的本地 ASR 與模型"
      ]
    ],
    "url": "https://plaud.observe.tw",
    "visit": "登入使用",
    "repo": "skyhong2002/localplaud",
    "repoUrl": "https://github.com/skyhong2002/localplaud",
    "shot": "shot-plaud.webp",
    "shotWidth": 1080,
    "shotUrl": "https://skyhong2002.github.io/localplaud/demo/",
    "shotCaption": "實際介面 · 合成示範資料",
    "ph": "私人服務 · 需要登入",
    "label": {
      "since": "2026-07",
      "subject": "Plaud 錄音筆的每一段錄音",
      "cadence": "每 5 分鐘",
      "outputs": [
        "網站",
        "API",
        "SRT",
        "Markdown"
      ]
    },
    "commits": 524
  },
  {
    "id": "weave",
    "tags": [
      "meeting",
      "ai"
    ],
    "name": "Weave In",
    "domain": "weave.nycu.ai",
    "private": false,
    "logo": "assets/weave-logo.svg",
    "boxed": false,
    "sub": "Keep the thread. Weave everyone in.",
    "desc": "對抗團體迷思的瀏覽器會議：最多八人共享視訊、螢幕、即時字幕與白板，不需要帳號。<b>2026 Sea × OpenAI Codex Hackathon Taiwan 決賽入圍（Top 5/30）</b>。",
    "feats": [
      [
        "Muse",
        "每個人的私人助理，可打字、口述或即時語音對話"
      ],
      [
        "Omni",
        "共享引導者，察覺過早收斂、偏題或發言不均，經同意才開口"
      ],
      [
        "WebMCP",
        "Codex 等外部代理可讀取會議脈絡、操作白板"
      ]
    ],
    "url": "https://weave.nycu.ai",
    "visit": "前往網站",
    "repo": "JacobLinCool/Weave-In",
    "repoUrl": "https://github.com/JacobLinCool/Weave-In",
    "shot": "shot-weave.webp",
    "shotWidth": 1440,
    "ph": null,
    "label": {
      "since": "2026-09",
      "subject": "最多 8 人的線上會議",
      "cadence": "會議中即時",
      "outputs": [
        "網站",
        "WebMCP"
      ]
    },
    "commits": 100
  },
  {
    "id": "blog",
    "tags": [
      "blog",
      "lifelog",
      "selfhost"
    ],
    "name": "Skychopath.",
    "domain": "skyhong.tw",
    "private": false,
    "logo": "assets/blog-logo.png",
    "boxed": false,
    "sub": "個人部落格",
    "desc": "寫反思、專案與各種著迷的事。自架 <b>Ghost</b>，主題以官方 Source 為基底自行維護，個人修改集中在獨立的 partials 與樣式，官方更新可以直接合併。",
    "feats": [
      [
        "Articles",
        "長文：反思、專案紀錄與心得"
      ],
      [
        "Fragments",
        "短篇與零碎的想法"
      ],
      [
        "Now",
        "現在正在做、在想的事"
      ]
    ],
    "url": "https://skyhong.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/skychopath-theme",
    "repoUrl": "https://github.com/skyhong2002/skychopath-theme",
    "shot": "shot-blog.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2025-03",
      "subject": "反思、專案與各種著迷的事",
      "cadence": "不定期",
      "outputs": [
        "網站",
        "RSS"
      ]
    },
    "commits": 3
  },
  {
    "id": "infovore",
    "tags": [
      "lifelog"
    ],
    "name": "infovore",
    "domain": "infovore.skyhong.tw",
    "private": false,
    "logo": "assets/infovore-logo.png",
    "boxed": false,
    "sub": "生活年輪",
    "desc": "彙整玩過、看過、讀過、聽過與參加過的東西，也串起<b>Dayflow 電腦活動、AI 代理工作、健康與地點紀錄</b>。從 Backloggd、Kitsu、stats.fm、Simkl、Hardcover、urtube 等來源整理到 SQLite，依平台呈現更新狀態與自己的生活節奏。",
    "feats": [
      [
        "公開時間軸與 Now",
        "跨平台的近期活動、正在進行的作品，附 RSS 與 JSON API"
      ],
      [
        "時間與年度回顧",
        "依平台回顧投入的時間，標明估算與重疊的計算方式"
      ],
      [
        "分享卡片與 MCP",
        "可嵌入的 SVG／PNG／WebP 卡片，以及給 AI 工具查詢的 MCP 端點"
      ]
    ],
    "url": "https://infovore.skyhong.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/infovore",
    "repoUrl": "https://github.com/skyhong2002/infovore",
    "shot": "shot-infovore.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2026-07",
      "subject": "媒體、電腦活動、AI 工作、健康與地點",
      "cadence": "每小時",
      "outputs": [
        "網站",
        "API",
        "RSS",
        "MCP",
        "卡片"
      ]
    },
    "commits": 160
    ,"pulse": { "url": "https://infovore.skyhong.tw/api/activities.json?limit=1", "label": "筆生活紀錄", "pick": (b) => JSON.parse(b).total }
  },
  {
    "id": "status",
    "tags": [
      "selfhost"
    ],
    "name": "Sky Status",
    "domain": "status.skyhong.tw",
    "private": false,
    "logo": "assets/status-logo.svg",
    "boxed": false,
    "sub": "自架服務的公開維運儀表板",
    "desc": "監看所有自架服務的公開端點、Docker 狀態與遠端主機，保留 90 天的可用性歷史；金鑰只留在伺服器端，從不送到瀏覽器。",
    "feats": [
      [
        "可用性歷史",
        "分段 uptime 長條、回應時間與 7／30／90 天統計"
      ],
      [
        "到期監看",
        "TLS 憑證與網域到期（RDAP，.tw 走 WHOIS）"
      ],
      [
        "告警與用量",
        "Discord 斷線／恢復通知、心跳檢查、OpenAI 用量與 Prometheus 指標"
      ]
    ],
    "url": "https://status.skyhong.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/status.skyhong.tw",
    "repoUrl": "https://github.com/skyhong2002/status.skyhong.tw",
    "shot": "shot-status.webp",
    "shotWidth": 1080,
    "ph": null,
    "label": {
      "since": "2026-07",
      "subject": "自架服務、Docker 與主機",
      "cadence": "每分鐘",
      "outputs": [
        "網站",
        "API",
        "RSS",
        "Prometheus"
      ]
    },
    "commits": 60
    ,"pulse": { "url": "https://status.skyhong.tw/metrics", "label": "個公開服務正常", "pick": (b) => (b.match(/^sky_up\{kind="target"[^}]*\} 1$/gm) || []).length }
  },
  {
    "id": "pocketlog",
    "tags": [
      "ai",
      "lifelog",
      "selfhost"
    ],
    "name": "PocketLog",
    "domain": "Android · Web",
    "private": true,
    "logo": "assets/pocketlog-logo.svg",
    "boxed": false,
    "sub": "你的日常，有跡可循",
    "desc": "自架的<b>Android 與 web 私人活動日誌</b>：在明確同意後記錄使用中的 App 與選擇開啟的畫面脈絡，整理成可以回顧、分類與修正的時間軸。資料由自己的伺服器保管，AI 分析需要自行設定供應商並開啟。",
    "feats": [
      [
        "手機與網頁回顧",
        "日／週活動卡片、分類修正、每日反思與專注計時"
      ],
      [
        "選擇要記錄的脈絡",
        "App 活動、文字與選用截圖，各自有同意流程、排除與暫停設定"
      ],
      [
        "開發中的私人日誌",
        "Android 14 以上，支援加密離線佇列；尚無穩定版，實機耗電仍待完整驗證"
      ]
    ],
    "url": null,
    "visit": "查看專案",
    "repo": "skyhong2002/PocketLog",
    "repoUrl": "https://github.com/skyhong2002/PocketLog",
    "shot": "shot-pocketlog.webp",
    "shotWidth": 1440,
    "shotCaption": "實際 web 介面 · 合成示範資料",
    "ph": "Android · Web 私人日誌 · 開發中",
    "label": {
      "since": "2026-11",
      "subject": "手機活動與每日脈絡",
      "cadence": "選擇開啟後持續記錄",
      "outputs": [
        "Android",
        "Web",
        "API",
        "JSON"
      ]
    }
  },
  {
    "id": "afterimage",
    "tags": [
      "lifelog"
    ],
    "name": "AfterImage",
    "domain": "afterimage.skyhong.tw",
    "private": false,
    "logo": null,
    "boxed": false,
    "sub": "殘影 · 移開視線後，仍留下的畫面",
    "desc": "把多年收藏的桌面與手機桌布整理成<b>可搜尋的視覺記憶庫</b>，保留檔名裡的個人註解，依作品、情緒與裝置瀏覽，再沿著相似畫面、同作品或相近色調繼續聯想。公開畫廊不顯示個人照片。",
    "feats": [
      [
        "作品與情緒篩選",
        "桌面、手機分開瀏覽，保留原始圖片與主要色彩"
      ],
      [
        "沿著畫面聯想",
        "相似畫面、同作品、同情緒與相近色調，留下這次瀏覽的思緒軌跡"
      ],
      [
        "連回生活中的作品",
        "結合 infovore 找到近期作品的桌布缺口，登入後可搜尋來源與收藏新圖"
      ]
    ],
    "url": "https://afterimage.skyhong.tw",
    "visit": "前往網站",
    "repo": "skyhong2002/afterimage",
    "repoUrl": "https://github.com/skyhong2002/afterimage",
    "shot": "shot-afterimage.webp",
    "shotWidth": 1440,
    "ph": "殘影 · 公開桌布畫廊",
    "label": {
      "since": "2026-11",
      "subject": "桌布收藏與視覺記憶",
      "cadence": "隨收藏更新",
      "outputs": [
        "Web",
        "API"
      ]
    }
  }
];
