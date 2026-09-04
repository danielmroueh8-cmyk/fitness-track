/* =====================================================
   FITNESS & NUTRITION TRACKER - SERVICE WORKER

   Makes the app work with no internet connection.

   IMPORTANT: this caches the APP (html/css/js/icons).
   It does NOT touch your data. Your logs, workouts and
   photos live in localStorage + IndexedDB and are never
   cleared by anything in this file.

   After editing index.html / script.js / style.css,
   bump CACHE_VERSION below so phones pick up the change.
===================================================== */

const CACHE_VERSION = "v5";
const SHELL_CACHE   = `fitness-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `fitness-runtime-${CACHE_VERSION}`;

// Relative URLs resolve against the location of this file,
// so the app works at any path (e.g. /fitness-tracker/ on GitHub Pages).
const SHELL_ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png",
    "./icons/apple-touch-icon.png"
];


// =====================================================
// INSTALL - PRECACHE THE APP SHELL
// =====================================================

self.addEventListener("install", event => {

    event.waitUntil((async () => {

        const cache = await caches.open(SHELL_CACHE);

        // addAll() fails the whole install if any single file 404s,
        // so cache them one by one and tolerate individual misses.
        await Promise.all(
            SHELL_ASSETS.map(async url => {
                try {
                    await cache.add(new Request(url, { cache: "reload" }));
                } catch (err) {
                    console.warn("[sw] could not precache", url, err);
                }
            })
        );

        await self.skipWaiting();
    })());
});


// =====================================================
// ACTIVATE - DROP OLD CACHES
// =====================================================

self.addEventListener("activate", event => {

    event.waitUntil((async () => {

        const keep = [SHELL_CACHE, RUNTIME_CACHE];
        const names = await caches.keys();

        await Promise.all(
            names
                .filter(name => name.startsWith("fitness-") && !keep.includes(name))
                .map(name => caches.delete(name))
        );

        if (self.registration.navigationPreload) {
            await self.registration.navigationPreload.disable();
        }

        await self.clients.claim();
    })());
});


// =====================================================
// FETCH
// =====================================================

self.addEventListener("fetch", event => {

    const request = event.request;

    // Only ever touch GETs. Never interfere with anything else.
    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // Ignore non-http(s) schemes (extensions, blob:, data:, etc.)
    if (url.protocol !== "http:" && url.protocol !== "https:") return;

    const sameOrigin = url.origin === self.location.origin;

    // ---- Page loads: serve the cached shell instantly, refresh behind ----
    if (request.mode === "navigate") {
        event.respondWith(handleNavigate(request));
        return;
    }

    // ---- Same-origin assets: stale-while-revalidate ----
    if (sameOrigin) {
        event.respondWith(staleWhileRevalidate(request, SHELL_CACHE));
        return;
    }

    // ---- Cross-origin (Chart.js CDN): cache-first ----
    event.respondWith(cacheFirst(request, RUNTIME_CACHE));
});


async function handleNavigate(request) {

    const cache = await caches.open(SHELL_CACHE);

    const cached =
        (await cache.match(request, { ignoreSearch: true })) ||
        (await cache.match("./index.html")) ||
        (await cache.match("./"));

    const network = fetch(request)
        .then(response => {
            if (response && response.ok) {
                cache.put("./index.html", response.clone());
            }
            return response;
        })
        .catch(() => null);

    // Offline-first: if we have it cached, show it now.
    if (cached) {
        network.catch(() => {});
        return cached;
    }

    const response = await network;

    return response || new Response(
        "<h1>Offline</h1><p>Open this page once while connected so it can be saved for offline use.</p>",
        { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
}


async function staleWhileRevalidate(request, cacheName) {

    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);

    const network = fetch(request)
        .then(response => {
            if (response && response.ok) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => null);

    if (cached) {
        network.catch(() => {});
        return cached;
    }

    const response = await network;

    return response || Response.error();
}


async function cacheFirst(request, cacheName) {

    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);

    if (cached) return cached;

    try {
        const response = await fetch(request);

        // Opaque responses (type "opaque", status 0) are normal for
        // cross-origin <script> and are still safe to cache and replay.
        if (response && (response.ok || response.type === "opaque")) {
            cache.put(request, response.clone());
        }

        return response;

    } catch {
        return Response.error();
    }
}


// =====================================================
// MESSAGES FROM THE PAGE
// =====================================================

self.addEventListener("message", event => {
    if (event.data === "SKIP_WAITING") {
        self.skipWaiting();
    }
});
