/**
 * sw.js — Service Worker for MedMaster PWA offline support.
 *
 * Caches the core static shell (HTML/CSS/JS + the question bank) so the app
 * can load and be used offline. Note: live features that require a network
 * connection (auth, cloud sync, multiplayer, daily leaderboard) will not
 * function offline — only the locally-cached static assets are served.
 */

const CACHE_NAME = 'medmaster-cache-v1';
const CACHE_URLS = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'multiplayer.js',
  'questions.js',
];

// ─── Install: pre-cache the app shell ───────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate: clean up old caches ──────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ─── Fetch: cache-first for same-origin static assets, network otherwise ──
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests for our own origin — let everything else
  // (Supabase API calls, realtime websockets, CDN scripts) go straight to
  // the network so live features keep working normally when online.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((networkResponse) => {
          // Opportunistically cache newly-seen same-origin GET responses.
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
          return networkResponse;
        })
        .catch(() => cached); // Offline and not cached — nothing more we can do.
    })
  );
});
