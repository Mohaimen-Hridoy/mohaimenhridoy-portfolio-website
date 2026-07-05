# Mohaimen Hridoy — Portfolio

A modern, responsive portfolio website for showcasing backend development projects, skills, and experience.

## Features

- Dark / light theme with system preference detection
- Fully responsive mobile navigation
- Scroll reveal animations
- Contact links (email, LinkedIn, GitHub)
- SEO meta tags and Open Graph support
- Deployable to Vercel, Netlify, or GitHub Pages

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The production build outputs to the `dist/` folder.

## Customize

1. **Personal info** — Edit `index.html` (name, bio, links, projects)
2. **Contact form** — Sign up at [Formspree](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in the contact form action URL
3. **Email & social links** — Update GitHub, LinkedIn, and email URLs in the contact section
4. **Resume** — Add your CV as `public/resume.pdf` for the download button
5. **Project links** — Update `href="#"` on project GitHub/demo buttons with real URLs

## Deploy

### Vercel (recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — click Deploy

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) ? Add new site ? Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

Or drag-and-drop the `dist` folder after running `npm run build`.

### GitHub Pages

1. Update `base` in `vite.config.js` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && npx gh-pages -d dist"
   ```
3. Run `npm run deploy`

## Project Structure

```
portfolio/
??? index.html          # Main page
??? src/
?   ??? styles/main.css # All styles
?   ??? scripts/main.js # Interactivity
??? public/
?   ??? favicon.svg
?   ??? robots.txt
??? vite.config.js
??? package.json
```

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- [Vite](https://vitejs.dev) for dev server and production builds
