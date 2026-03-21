# Heemal Syangbo — Portfolio

Premium dark glassmorphism portfolio built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Output is in `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). After you have a live URL, you can add `<meta property="og:url" content="https://your-domain.com/" />` in `index.html` for richer link previews.

## Customize your content

### 1. Identity & links — `src/data/personal.js`

- `name`, `initials`, `headline`, `location`, `phone`
- `summary` and `heroIntro` (résumé-style summary + shorter hero copy)
- `education` and `priorEducation` (George Brown + earlier degree)
- `email`, `github`, `linkedin` (full URLs)
- `resumeUrl` — path under `public/`, e.g. `/documents/resume.pdf`
- `profileImage` — place a square JPG/PNG/WebP in `public/images/` and point to it (e.g. `/images/profile.jpg`)

### 2. Skills — `src/data/skills.js`

Adjust category titles, `items` (`name` + `level` percentage), and `alsoExperienced` pill tags.

### 3. Projects — `src/data/projects.js`

- Replace `image` URLs with screenshots in `public/images/projects/` for faster loads and a more personal look.
- Each project uses `links.cta` (e.g. `#contact` or a live demo URL) and `links.github` (profile or specific repo).

### 4. Timeline — `src/data/timeline.js`

Edit entries to match your academics and **verified** activities. Keep wording honest (student, capstone, coursework).

### 5. Resources & capstone — `src/data/resources.js`

- Point `href` fields for downloads to files in `public/documents/` (create the folder and add PDFs).
- Replace modal placeholder copy with your real bio, philosophy, volunteer work, and awards.

### 6. Résumé & PDFs — `public/documents/`

Add files such as:

- `resume.pdf`
- `cover-letter-template.pdf`
- `certificates-placeholder.pdf` (rename as needed)
- `capstone/*.pdf` (optional; then wire capstone cards to those paths in `resources.js`)

If a file is missing, the browser may show a 404 when downloading—add the PDF before shipping.

### 7. Favicon & branding

- Replace `public/favicon.svg` if you want a custom mark.
- Update `<title>` and meta description in `index.html` if needed.

### 8. Images from your reference screenshots

You can copy your exported screenshots into `public/images/` and reference them from project data or the hero profile path.

## Accessibility

- Skip link to main content is in `App.jsx`.
- Interactive controls use `aria-label` where text is visual-only.
- Modal closes on Escape and locks background scroll.

## Structure

```
src/
  components/     # Navbar, FloatingNav, Footer, Modal, Background, etc.
  sections/       # Hero, About, Skills, Projects, Experience, Resources, Contact
  data/           # personal, skills, projects, timeline, resources
  hooks/          # useActiveSection (scroll spy)
  App.jsx
  main.jsx
  index.css
public/
  images/
  documents/
```

## Notes

- External project images use Unsplash placeholders; swap for your own assets before job applications.
- Percentages in the skills section are self-assessment—tune to reflect your comfort level honestly.
