# Ridwan Poly Wizard — Portfolio Website

A multi-page static site for a 3D product design & character art portfolio.
No build step required — open `index.html` in a browser, or deploy the folder as-is
to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## File structure

```
ridwan-poly-wizard/
├── index.html                 Homepage
├── work.html                  Full project archive with category filter
├── case-study-orbit.html      Case study — Product Design template
├── case-study-kestrel.html    Case study — Character Art template
├── about.html                 Bio, software, skills, résumé link
├── contact.html                Contact links + form
├── css/
│   └── style.css              Shared design system (colors, type, components)
├── js/
│   ├── main.js                Site-wide: mobile nav, active link, hero cube, contact form
│   └── work.js                Work page category filter + URL deep-linking
├── assets/
│   ├── images/                Put real renders, turntable stills, wireframes here
│   └── videos/                Put real turntable/loop clips (.mp4/.webm) here
└── README.md
```

## What to customize first

1. **Swap placeholder art.** Every `.card-media` / `.compare-media` / `.view-media`
   div currently shows a wireframe-icon placeholder on a gradient background
   (classes `render-a` … `render-f`). Replace the inner `<svg>` with a real
   `<img src="assets/images/your-render.jpg" alt="...">` or a `<video>` tag.
2. **Real case studies.** `case-study-orbit.html` and `case-study-kestrel.html`
   are full templates — one for a product, one for a character. Duplicate
   whichever fits your next project and rename the file (keep it in the root
   folder, and add a `<a class="card" ...>` entry for it in `work.html`).
3. **Real-time viewer.** In each case study's "Interact" block, replace the
   placeholder `.viewer-embed` div with a real Sketchfab or Marmoset Viewer
   `<iframe>` embed code.
4. **Contact form.** `contact.html`'s form currently just resets and shows a
   thank-you message on submit (see `js/main.js`). Point it at a real backend —
   Formspree, Netlify Forms, or your own endpoint — by adding an `action` and
   `method` to the `<form>` tag, or replacing the JS handler with a `fetch()` call.
5. **Résumé PDF.** The "Download résumé" buttons are placeholder links (`href="#"`).
   Add your PDF to `assets/` and point the `href` at it.
6. **Brand/name/email.** Search the project for `Ridwan Poly Wizard` and
   `hello@ridwanpolywizard.com` if you want to adjust display name or contact
   details further — they're consistent across all six HTML files.

## Design system reference (css/style.css)

- **Colors** — CSS custom properties at the top of the file (`--bg`, `--accent`,
  etc.). Change once, applies everywhere.
- **Type** — Space Grotesk (display/headings), Inter (body), JetBrains Mono
  (technical labels — polycounts, materials, camera views).
- **Components** — `.card`, `.view-card`, `.compare-card`, `.material-row`,
  `.filter-btn`, `.btn` etc. are reused across pages; edit once in `style.css`.

## Adding a new project card

Copy this block into `work.html`'s `#workGrid`, set `data-cat` to `product` or
`character`, and point `href` at your case study file:

```html
<a class="card" data-cat="product" href="case-study-yourproject.html">
  <div class="card-media render-a">
    <span class="card-tag">Product</span>
    <span class="card-view mono">View project →</span>
    <img src="assets/images/yourproject-thumb.jpg" alt="Your Project name">
  </div>
  <div class="card-body"><h3>Your Project Name</h3><span>2026 · Hard-surface</span></div>
</a>
```

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid,
CSS custom properties, and `aspect-ratio` — no IE11 support.
