# Building the portfolio

## Project structure

- **index.html** – Page structure and content (no inline CSS or JS).
- **css/tailwind.css** – Built Tailwind utilities (run `npm run build` to generate).
- **css/custom.css** – Custom styles (cursor, scrollbar, section reveal, etc.).
- **js/** – Scripts split by feature:
  - `mobile-menu.js` – Mobile nav toggle
  - `nav-scroll.js` – Active nav link on scroll
  - `back-to-top.js` – Back-to-top button
  - `section-reveal.js` – Scroll-in animations
  - `tryhackme.js` – TryHackMe badge toggle and loading
  - `cursor.js` – Custom cursor
  - `typewriter.js` – Hero typewriter effect
  - `tabs.js` – Skills tabs (Security / Cloud / Data)
- **tailwind.config.js** – Tailwind theme (colors, fonts, animations).
- **src/input.css** – Tailwind source (directives only).

---

Tailwind CSS is built locally (no CDN in production). You need **Node.js** installed.

## One-time setup

1. Install [Node.js](https://nodejs.org/) (LTS) if you don’t have it.
2. In the project folder, install dependencies and build CSS:

```bash
npm install
npm run build
```

This creates `css/tailwind.css`. The console warning from the Tailwind CDN will be gone.

## After changing styles or HTML

Run again so Tailwind picks up any new classes:

```bash
npm run build
```

## Deploying (e.g. GitHub Pages)

1. Run `npm run build` so `css/tailwind.css` exists.
2. Commit and push `css/tailwind.css` along with the rest of the site (or add a CI step to run `npm run build` and deploy the output).
