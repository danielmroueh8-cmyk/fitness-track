# Fitness & Nutrition Tracker

A personal nutrition, training and body-progress tracker. Plain HTML, CSS and
JavaScript — no build step, no framework, no backend.

Installable to a phone home screen and fully usable with no internet connection.

## Running it

**Online:** open the GitHub Pages URL for this repo.

**Locally:** open `index.html` in a browser. Everything works except offline
mode, which needs `https://` or `localhost` (browsers block service workers on
`file://`).

## Where your data is stored

**On your device, in your browser. Nothing is uploaded anywhere. This repo
contains the app only — never your data.**

| Storage | What lives there |
|---|---|
| `localStorage` | Food database, food log, daily tracker, body measurements, workout history, goals, favourites |
| `IndexedDB` (`FitnessTrackerPhotos`) | Progress photos |

Browser storage is tied to **one site address, in one browser, on one device**.
There is no sync. Consequences worth understanding:

- Your phone and your laptop keep **completely separate** sets of data.
- Opening the app from a file on disk and opening it from the GitHub Pages URL
  are two different addresses, so they have **separate** data.
- Clearing your browser's site data erases everything.

## Backups — read this part

The **⬇** and **⬆** buttons in the top-right of the Dashboard are the only way
to move or protect your data.

- **⬇ Export** downloads a `.json` file containing everything, photos included.
- **⬆ Import** restores such a file. It **replaces everything** currently
  stored — it is not a merge.

Recommended habit:

1. Pick **one** device as your source of truth (probably your phone).
2. Export from it about once a week, and keep the file somewhere safe.
3. Only import onto another device when you accept that the device's existing
   data will be wiped.

On iPhone, Safari can evict a website's storage after roughly 7 days without a
visit. Adding the app to your home screen and opening it from that icon greatly
reduces that risk, but exporting regularly is still the real safety net.

## Offline behaviour

`sw.js` caches the app files so it loads with no signal — useful in a gym
basement. Chart.js is cached on first online load; if it isn't available the
app still works and simply omits the graphs.

## Making changes

After editing `index.html`, `script.js` or `style.css`, bump `CACHE_VERSION` in
`sw.js` (`v1` → `v2`, and so on). Otherwise phones that already installed the
app may keep serving the old cached files.

## Files

| File | Purpose |
|---|---|
| `index.html` | All six pages in one document |
| `script.js` | All application logic |
| `style.css` | All styling |
| `manifest.json` | Home screen name, icons, colours, shortcuts |
| `sw.js` | Service worker — offline caching |
| `icons/` | App icons |
