# Thant Htet Oo — Portfolio

A single-page portfolio for **Thant Htet Oo**, showcasing roles in SOC (Security Operations Center) and Cloud Engineering. Built with vanilla HTML, CSS, and JavaScript, styled with Tailwind CSS.

---

## About

This portfolio highlights:

- **Security Operations** — SOC Analyst experience, SIEM (Splunk, Wazuh), incident response
- **Cloud & DevOps** — AWS, Kubernetes (CKA, CKAD), Terraform, Docker
- **Data & Code** — Python, SQL, automation, and data-driven security

Sections include a hero with typewriter intro, skills tabs, project cards, certification timeline, and a custom cursor (desktop). The site is responsive, accessibility-minded, and suitable for GitHub Pages or any static host.

---

## Tech stack

- **HTML5** — Semantic markup, one main page
- **Tailwind CSS** — Utility-first styling (built locally, no CDN in production)
- **Vanilla JavaScript** — No frameworks; small scripts per feature
- **Font Awesome** — Icons
- **Google Fonts** — Inter, JetBrains Mono

---

## Project structure

Website files to push to GitHub for publishing:

```
├── index.html
├── css/
│   ├── tailwind.css
│   └── custom.css
├── js/
│   ├── mobile-menu.js
│   ├── nav-scroll.js
│   ├── back-to-top.js
│   ├── section-reveal.js
│   ├── tryhackme.js
│   ├── cursor.js
│   ├── typewriter.js
│   └── tabs.js
└── README.md
```

---

## Features

- **Custom cursor** — Indigo dot and ring on desktop (hidden when "Reduce motion" is on).
- **Typewriter hero** — Animated intro lines in a terminal-style block.
- **Section reveal** — Sections fade/slide in on scroll (respects reduced motion).
- **Active nav** — Current section highlighted in the navbar while scrolling.
- **Back to top** — Button appears after scrolling one viewport height.
- **TryHackMe badge** — Toggle badge in the project card; lazy-loaded iframe with loading state.
- **Skills tabs** — Switch between Security, Cloud/DevOps, and Data/Code.
- **Responsive** — Mobile menu, touch-friendly, works on small screens.
- **Accessibility** — Skip link, focus styles, ARIA where needed, reduced-motion support.

---

## License

This project is for portfolio use. Content and design are personal. Reuse or adapt as you like; attribution is appreciated but not required.
