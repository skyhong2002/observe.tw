# 根站 SEO / HTTPS 維運紀錄

放在 `.github/` 是因為 `actions/upload-pages-artifact` 會排除這個目錄，這份筆記不會出現在 observe.tw 上。

## GSC-20261023

### 已完成（Codex，`4be95fd`）

- `index.html`、`en/index.html` 各自 HTTPS canonical，保留雙向 `zh-Hant` / `en` hreflang
- `robots.txt`：`Allow: /`，`Sitemap: https://observe.tw/sitemap.xml`
- `sitemap.xml`：2 個 URL — `https://observe.tw/`、`https://observe.tw/en/`
- Google 於 2026-10-23 讀取 Sitemap 成功（GSC 由 Codex 負責）

### 未完成：`http://observe.tw/` 直接回 200，沒有轉到 HTTPS

**根因**：observe.tw apex 在 Cloudflare 上是 proxied（橘雲），A 記錄解析到 Cloudflare（`104.21.43.121`、`172.67.179.16`），不是 GitHub Pages 的 `185.199.108–111.153`。GitHub 只在網域直接指向它時才會簽 Let's Encrypt 憑證，所以：

- Pages API：`https_enforced: false`，沒有 `https_certificate`；`PUT https_enforced=true` 回 404 “The certificate does not exist yet”
- 直連 origin（`--resolve observe.tw:443:185.199.108.153`）拿到的是 `CN=*.github.io`，不含 observe.tw
- 訪客看到的 HTTPS 是 Cloudflare edge 憑證（Google Trust Services WE1，SAN 含 `observe.tw`）
- 所以 Cloudflare SSL 模式只可能是 Flexible 或 Full（非 strict）；Full (strict) 會 526
- 其他子網域的 HTTP→HTTPS 是各自 origin 做的（Vercel 308 等），zone 層級沒有開 Always Use HTTPS

在 GitHub 端無解，除非把 apex 改成 DNS only——那會改動整個站的 edge 行為，不值得。正確做法是在 Cloudflare 加一條**只比對 apex** 的轉址規則。

### 要在 Cloudflare 做的設定（需登入，Codex 協調 UI）

Cloudflare dashboard → observe.tw zone → **Rules → Redirect Rules → Create rule**（Single Redirect）

| 欄位 | 值 |
|---|---|
| Rule name | `observe.tw apex HTTP → HTTPS` |
| If incoming requests match | Custom filter expression |
| Expression | `(http.host eq "observe.tw" and not ssl)` |
| Then — Type | Dynamic |
| Expression | `concat("https://observe.tw", http.request.uri.path)` |
| Status code | 301 |
| Preserve query string | ✅ 勾選 |
| 位置 | 放第一條 |

用 Wildcard pattern 模式也可以，等效：Request URL `http://observe.tw/*` → Target URL `https://observe.tw/${1}`，301，勾 Preserve query string。

**不要做的事**

- 不要開 zone 層級的 Always Use HTTPS、也不要用 `*.observe.tw` 這種廣域規則——會蓋過子網域自己的行為
- 不要開帶 `includeSubDomains` 的 HSTS
- 不要動 SSL/TLS 模式、不要把 apex 改成 DNS only
- apex 維持 proxied 的期間，**不要在 GitHub 開 Enforce HTTPS**：若 SSL 模式是 Flexible，Cloudflare 以 HTTP 回源，GitHub 再轉 HTTPS 就會無限迴圈（目前因為沒有憑證也開不了）

**為什麼不會迴圈**：規則只比對 `not ssl`；HTTPS 請求不進規則，回源到 GitHub 時 GitHub 也不轉址（`https_enforced=false`）。

### 驗證（規則存好後，通常幾秒內生效）

```sh
curl -sI http://observe.tw/                  # 301, location: https://observe.tw/
curl -sI 'http://observe.tw/en/?a=1&b=2'     # 301, location: https://observe.tw/en/?a=1&b=2
curl -sI http://observe.tw/sitemap.xml       # 301, location: https://observe.tw/sitemap.xml
curl -sI https://observe.tw/                 # 200，沒有 location
curl -sI https://observe.tw/en/              # 200
curl -sIL http://observe.tw/ | grep -c '^HTTP'   # 2（一次轉址就到）
curl -sI http://harmonica.observe.tw/        # 子網域行為不變（308 from origin）
```

### 站群連結可抓取性（2026-10-23 17:00 左右，Googlebot UA）

200：blog、chumei、harmonica、mayor2026、myzilla、rep0rter、stancelab、youtube、tag、infovore.skyhong.tw、status.skyhong.tw、skyhong.tw、weave.nycu.ai、observe.tw/、observe.tw/en/

- `plaud.observe.tw` 回 401：私人服務，本來就需要登入；入口頁只寫功能介紹並標「私人服務 · 需要登入」，沒有任何錄音內容
- `omni.observe.tw`（`140.110.146.224`，非 Cloudflare）與 `urtube.observe.tw`（Cloudflare）連線逾時：origin 問題，屬於各自專案
- `tag`、`status` 第一次抓到 503 / 404，重試即 200，判斷是暫時性

公開／私人邊界：`pulse.json` 只有各站的公開總數；MyZilla、urtube、localplaud 的區塊只有功能說明，沒有個人資料。
