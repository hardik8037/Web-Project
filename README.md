# Botzo.io — Enterprise Business Automation Ecosystem

Botzo is the leading WhatsApp API & business automation platform. This repository contains the source code for the high-performance, cinematic marketing frontend.

## 🚀 Performance & Architecture

This platform is built with a hyper-optimized architecture designed for maximum performance, SEO compliance, and visual fidelity.

- **Vanilla JS + Vite**: No heavy UI frameworks (like React/Vue) to ensure zero virtual DOM overhead and lightning-fast main-thread execution.
- **GSAP**: Industry-standard scroll-driven animations and route transitions.
- **Three.js**: Custom WebGL `AtmosphereEngine` for interactive, cinematic background particle systems (fully deferred from the critical rendering path).
- **Lenis**: Buttery smooth scroll physics natively synchronized with GSAP's global ticker to prevent scroll jank.
- **Custom SPA Router**: A lightweight client-side router that manages dynamic component mounting, SEO schema injection, and GSAP-driven page transitions.

## 📂 Project Structure

```text
/
├── public/                 # Static assets, fonts, icons, sitemap
├── scripts/                # Build scripts (e.g., sitemap generator)
├── src/
│   ├── analytics/          # Custom tracking and data-layer scripts
│   ├── components/         # Reusable UI components (Navbar, Footer, Shadcn-style widgets)
│   ├── config/             # Global configuration, SEO settings
│   ├── data/               # Static route data (Services, Solutions, Pricing)
│   ├── js/                 # Core systems (Router, Three.js Engine, Animation Controllers)
│   ├── pages/              # Main page controllers (Home, Platform, Contact, etc.)
│   ├── sections/           # Modular page sections (Hero, Features, Testimonials)
│   └── styles/             # Modular CSS (globals, layout, typography)
├── index.html              # Main application entry and CSP shell
└── vite.config.js          # Vite build and chunking configuration
```

## 🛠️ Setup & Development

**Requirements**: Node.js 18+

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```
   *Note: The production build automatically executes `scripts/generate-sitemap.js` and optimizes chunks to keep `index.js` as small as possible.*

## 🔒 Security

This application implements an incredibly strict **Content Security Policy (CSP)**. 
- **Zero `unsafe-inline`**: No inline JS execution is permitted. All event handlers are bound via `addEventListener` or mapped to pure CSS pseudo-classes.
- **Zero `unsafe-eval`**: The app relies exclusively on AST parsing.
- See `SECURITY.md` for full details.

## 🎨 Design System

We use a custom, ultra-lightweight CSS architecture inspired by modern utility classes but strictly scoped to avoid bloating.
- Variables and design tokens are managed in `src/styles/globals.css`.
- Interactive elements leverage hardware-accelerated CSS transitions (`transform`, `opacity`) instead of JavaScript where possible to reduce main-thread workload.
