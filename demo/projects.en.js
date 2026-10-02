// English copy for PROJECTS, keyed by id. Anything missing falls back to the
// Traditional Chinese original in projects.js.
export const EN = {
  harmonica: {
    name: 'Harmonica Observatory',
    sub: 'Harmonica events, players and sheet music from around the world',
    desc: 'A directory of the harmonica world that started in Taiwan and grew global: events, student clubs, ensembles, players, teaching studios, contest pieces and sheet-music sources. Public posts scattered across platforms and languages are gathered in one place, with the original text and links kept intact. The interface speaks <b>繁體中文, English, 日本語 and 한국어</b>.',
    feats: [
      ['24-hour Stories wall', 'Instagram Stories from the harmonica scene'],
      ['Public event calendar', 'events worldwide and online in their original time zones, with Google Calendar and ICS feeds'],
      ['Source directory and score index', 'filter by country and region; contest pieces by school year and ensemble type'],
      ['Open submissions and data API', 'add or correct sources, plus an RSS feed and public API'],
    ],
    label: { subject: 'Harmonica events, players and 362 sources worldwide', cadence: 'Every 30 min', outputs: ['Web', 'API', 'RSS', 'ICS'] },
    pulseLabel: 'harmonica posts',
  },
  chumei: {
    name: 'Chumei Campus Events',
    sub: 'One feed for campus events at NTHU and NYCU',
    desc: 'Collects public posts from clubs and offices at <b>National Tsing Hua University and National Yang Ming Chiao Tung University</b> — Instagram, Facebook, Threads, X and campus notices. An LLM pulls out each event’s name, time and place, and the result is a feed you can filter by <b>campus, platform, event type and organizer</b>.',
    feats: [
      ['Event list and calendar', 'orientation, recruiting, performances and talks at a glance'],
      ['Stories wall', 'the last 24 hours of Instagram Stories from both schools’ clubs'],
      ['Subscribe anywhere', 'Telegram alerts, RSS and ICS calendars'],
    ],
    label: { subject: '470+ clubs and offices at NTHU and NYCU', cadence: 'Every 3 hours', outputs: ['Web', 'RSS', 'ICS', 'Telegram', 'MCP'] },
    pulseLabel: 'campus events',
  },
  mayor2026: {
    name: 'Mayor 2026 Observatory',
    sub: 'A timeline of what the mayoral candidates post',
    desc: 'Collects the <b>official public posts of mayoral candidates</b> in Taiwan’s six special municipalities — Taipei, New Taipei, Taoyuan, Taichung, Tainan and Kaohsiung. It follows 13 candidates and more than 5,700 posts, merges every platform into one timeline, and classifies each post by issue.',
    feats: [
      ['Six-city overview', 'candidates and posting volume, city by city'],
      ['Issue picker and spectrum', 'what each candidate talks about, and how much'],
      ['Original vs. reply', 'separates a candidate’s own posts from responses to others'],
    ],
    label: { subject: '13 mayoral candidates in six cities', cadence: 'Every 6 hours', outputs: ['Web', 'API', 'RSS'] },
    pulseLabel: 'candidate posts',
  },
  tag: {
    name: 'News Tags',
    sub: 'One story, every outlet’s headline',
    desc: 'Crawls about <b>100 Taiwanese news outlets</b> every 9 to 60 minutes and turns their tags, events and issues into data you can compare: the last 24 hours of coverage split by pan-blue and pan-green outlets, the issues heating up, and how each outlet headlines the same story.',
    feats: [
      ['Headlines side by side', 'blue- and green-leaning headlines on the same political story'],
      ['Keyword ranking and events', 'tag scores and momentum; tags that spike together are grouped into events and archived hourly'],
      ['Open API and RSS', 'no key, CORS enabled, with an OpenAPI spec and event and tag feeds'],
    ],
    label: { subject: 'About 100 Taiwanese news outlets', cadence: 'Every 9–60 min', outputs: ['Web', 'API', 'RSS'] },
    pulseLabel: 'stories · last 24 h',
  },
  rep0rter: {
    sub: 'An AI reporter for the civic-tech community',
    desc: 'Every hour it reads the public workspaces of civic-tech communities such as <b>g0v, Code for Korea and Code for Japan</b> — Slack, GitHub, Mastodon, RSS and public Notion — picks out the progress worth knowing about, and writes it up as short news stories.',
    feats: [
      ['Four languages', '繁體中文, English, 日本語 and 한국어, each story with cards linking its sources'],
      ['Editorial rules', 'scoring and de-duplication; bots, CI noise and people who opt out are left out'],
      ['Published everywhere', 'the website, RSS, a Telegram channel and Threads'],
    ],
    label: { subject: 'g0v and civic tech in Japan and Korea', cadence: 'Hourly', outputs: ['Web', 'RSS', 'Telegram', 'Threads'] },
    pulseLabel: 'stories published',
  },
  youtube: {
    repo: 'skyhong2002/youtube-board (private)',
    sub: 'A live dashboard of Taiwanese YouTube',
    desc: 'Turns public YouTube channels, livestreams, videos, keywords and topic groups into a <b>live data dashboard</b>: more than 1,100 channels in 8 categories (news, TV networks, the political spectrum and more), together drawing over <b>1.4 billion views a week</b>.',
    feats: [
      ['Live now', 'current livestream rankings, recurring streams, daily and period charts'],
      ['Keyword tracking', 'videos, word clouds and trends for people, events and phrases'],
      ['AI summaries', 'daily, hourly and per-event digests of what channels are saying'],
      ['Mayoral reports', 'candidates and local political keywords by city'],
    ],
    label: { subject: '1,100+ public YouTube channels', cadence: 'Every 1–9 min', outputs: ['Web', 'API'] },
    pulseLabel: 'views this week',
  },
  urtube: {
    desc: 'A private <b>archive of your YouTube attention</b>: it syncs cross-device watch history from Google My Activity every day, measures real watch time with a Chrome extension, and adds progress, channels and AI topic labels — so you can see where your attention goes over time.',
    feats: [
      ['Every source, one timeline', 'nothing sampled, nothing expires'],
      ['Private by construction', 'a separate database per account, encrypted search terms, dashboards private by default'],
      ['Watch yourself change', 'attention shifts, channel momentum and comparisons with friends'],
    ],
    label: { subject: 'My own YouTube watch history', cadence: 'Daily sync · live via extension', outputs: ['Web', 'API', 'Chrome extension'] },
    pulseLabel: 'videos watched · my last year',
  },
  omni: {
    sub: 'Meeting facilitation that surfaces hidden agreement',
    desc: 'A research platform from the HAIX lab at NYCU. Participants leave Idea Blocks through a private voice back channel; the system finds <b>similar ideas nobody has said out loud yet</b> across participants and nudges them anonymously, so latent agreement can surface in the open discussion.',
    feats: [
      ['Front and back channel', 'video call, live transcription and private thoughts side by side'],
      ['Anonymous similarity nudges', 'learn that someone thinks like you, without revealing who or what'],
      ['Research tooling', 'task templates, a meeting-link generator and a researcher monitor'],
    ],
    label: { subject: 'The unspoken ideas in an online meeting', cadence: 'Live, during meetings', outputs: ['Web', 'API', 'CSV'] },
  },
  stancelab: {
    sub: 'Turn a first reaction into a stance worth discussing',
    desc: 'Write down a rough opinion and how sure you are, then take it apart with AI: an <b>interviewer</b> clarifies, a <b>mentor</b> organizes, a <b>devil’s advocate</b> pushes back. A notebook on the side collects useful fragments until it all comes together as a draft you can post.',
    feats: [
      ['Three roles or one partner', 'compare a multi-role setup with a plain chatbot'],
      ['Bring your own key', 'OpenRouter or OpenCode Go, with a demo mode when you have none'],
      ['Export and resume', 'export the draft as text, or the whole session as JSON to import later'],
    ],
    label: { subject: 'One person’s first reaction', cadence: 'On demand', outputs: ['Web', 'TXT', 'JSON'] },
  },
  myzilla: {
    sub: 'My personal portal · browsing in review',
    desc: 'A remake of MyZilla, the 2000s personal portal — bookmarks, clippings, multi-site search, movies and moods — plus a <b>full review of your browsing history</b>. The raw history stays on my own server and is never published.',
    feats: [
      ['Browsing review', 'top sites, full-text search over visits, and foreground time measured by the extension'],
      ['Insights and weekly AI review', 'an interest map and exploration paths, with the last 7 days summarized daily'],
      ['Accounts and friends', 'invite-only private accounts; interests are compared only when both sides agree'],
    ],
    label: { subject: 'My browsing history and foreground time', cadence: 'Recorded live · daily AI review', outputs: ['Web', 'Chrome / Firefox extension'] },
  },
  plaud: {
    sub: 'A self-hosted pipeline for Plaud recordings',
    desc: 'Keep using the Plaud recorder and its official upload, but run <b>transcription, speaker diarization, summaries, search and Q&amp;A</b> on my own machines — the raw audio comes back through Plaud’s Open API, and everything derived from it stays with me.',
    feats: [
      ['The full pipeline', 'transcode, transcribe, align, diarize and correct, then notes, chapters and mind maps'],
      ['Ask across recordings', 'question one recording or the whole library, with playable citations'],
      ['Runs on my hardware', 'deployed on the lab’s GPU host, with swappable local ASR and models'],
    ],
    label: { subject: 'Every recording from my Plaud', cadence: 'Every 5 min', outputs: ['Web', 'API', 'SRT', 'Markdown'] },
    visit: 'Sign in',
    ph: 'Private service · sign-in required',
  },
  weave: {
    desc: 'Browser meetings that push back on groupthink: up to eight people share video, screens, live captions and a whiteboard, no account needed. <b>Finalist at the 2026 Sea × OpenAI Codex Hackathon Taiwan (top 5 of 30)</b>.',
    feats: [
      ['Muse', 'a private assistant for each person — type, dictate or talk in real time'],
      ['Omni', 'a shared facilitator that notices early convergence, drift or uneven airtime, and speaks only with consent'],
      ['WebMCP', 'outside agents such as Codex can read the meeting context and work the whiteboard'],
    ],
    label: { subject: 'Online meetings of up to 8 people', cadence: 'Live, during meetings', outputs: ['Web', 'WebMCP'] },
  },
  blog: {
    sub: 'Personal blog',
    desc: 'Reflections, projects and whatever I’m obsessed with lately. Self-hosted <b>Ghost</b> with a theme maintained on top of the official Source theme; my changes live in separate partials and styles, so upstream updates merge cleanly.',
    feats: [
      ['Articles', 'long-form reflections, project write-ups and notes'],
      ['Fragments', 'short pieces and passing thoughts'],
      ['Now', 'what I’m working on and thinking about right now'],
    ],
    label: { subject: 'Reflections, projects and obsessions', cadence: 'Whenever I write', outputs: ['Web', 'RSS'] },
  },
  infovore: {
    sub: 'The rings of a life',
    desc: 'Everything I play, watch, read, listen to and attend — from Backloggd, Kitsu, stats.fm, Simkl, Goodreads, YouTube and more — normalized into one dataset in SQLite, so an upstream outage never leaves the page blank.',
    feats: [
      ['Public timeline', 'a de-duplicated activity log with RSS and a JSON API'],
      ['Status cards', 'SVG, PNG and WebP cards rendered live by Satori, ready to embed in a GitHub README'],
      ['Wrapped and MCP', 'a yearly recap, and an MCP endpoint AI tools can query'],
    ],
    label: { subject: 'Games, shows, books, music and health', cadence: 'Hourly', outputs: ['Web', 'API', 'RSS', 'MCP', 'Cards'] },
    pulseLabel: 'life-log entries',
  },
  status: {
    sub: 'A public operations dashboard for my self-hosted services',
    desc: 'Watches the public endpoints, Docker state and remote hosts behind everything I self-host, and keeps 90 days of availability history. Keys stay on the server and never reach the browser.',
    feats: [
      ['Availability history', 'segmented uptime bars, response times and 7-, 30- and 90-day figures'],
      ['Expiry watch', 'TLS certificates and domain registrations (RDAP, with WHOIS for .tw)'],
      ['Alerts and usage', 'Discord down and recovery alerts, heartbeats, OpenAI usage and Prometheus metrics'],
    ],
    label: { subject: 'Self-hosted services, Docker and hosts', cadence: 'Every minute', outputs: ['Web', 'API', 'RSS', 'Prometheus'] },
    pulseLabel: 'public services up',
  },
  encore: {
    sub: 'A song-request system for the harmonica club’s booth',
    desc: 'Built for the club fair booth: visitors scan a QR code to vote for songs, the big screen plays the music video, the speaker plays the backing track and an earpiece carries the original vocal as a guide — <b>three streams in sync</b>. It all runs on a phone hotspot’s local network, no internet needed.',
    feats: [
      ['Three streams in sync', 'the backing track is the master clock, the video re-syncs every second, and the vocal guide has a ±500 ms offset'],
      ['Live requests', 'the audience votes from their phones; drop new files in and rescan'],
      ['Performer console', 'A–B loops and pitch-preserving slow-down, all on keyboard shortcuts'],
    ],
    label: { subject: 'Song requests and performance at a club booth', cadence: 'Live, on site', outputs: ['LAN site', 'Console', 'Big screen'] },
    ph: 'Runs on a local network · no public URL',
  },
};
