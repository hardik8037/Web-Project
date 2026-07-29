# Botzo.io — AI Context & Memory Document

**ATTENTION AI ASSISTANTS:** Read this file first. It contains the complete architectural blueprint, boot sequence, and strict rules of the Botzo.io codebase. By reading this, you do not need to scan the entire repository to understand how the application works.

---

## 1. Core Philosophy & Tech Stack
- **Framework:** Vanilla JavaScript (ES6+ Modules). **Do not use React, Vue, or JSX.** The entire UI is built using native DOM APIs (`document.createElement`, `innerHTML`) and template literals.
- **Build Tool:** Vite (`vite.config.js`). Handles bundling, chunking, and Tailwind CSS.
- **Styling:** Vanilla CSS (`src/styles/globals.css`, `pages.css`). We avoid heavy utility class clutter in JS files.
- **Animations:** GSAP (ScrollTrigger, Timelines) for DOM animations and route transitions.
- **Smooth Scrolling:** Lenis (hard-synced with GSAP ticker).
- **3D Background:** Three.js (`AtmosphereEngine`) for interactive WebGL particles.

---

## 2. Codebase Map (`/src/`)

- `main.js`: The application entry point. Handles the cinematic loader, bootstraps static UI (Navbar/Footer), syncs Lenis+GSAP, and dynamically imports the Router and Chatbot demo to save main-thread execution time.
- `js/router.js`: Custom Single-Page Application (SPA) router. It intercepts `<a href>` clicks, dynamically imports the requested page component, manages GSAP page transitions, updates the `<title>`, and injects SEO structured data.
- `js/atmosphere.js`: The Three.js WebGL particle engine.
- `js/animations.js`: Global GSAP animation helpers (`fadeInUp`, `staggerReveal`, `heroEntrance`).
- `pages/*.js`: The actual view components (e.g., `Home.js`, `Pricing.js`). These return DOM elements or strings to be mounted by the Router.
- `components/*.js`: Reusable static UI elements (e.g., `Navbar.js`, `Footer.js`).
- `styles/*.css`: Global and page-specific CSS files.

---

## 3. The Boot Sequence (Crucial for Performance)

To achieve a 90+ Lighthouse score, the boot sequence in `main.js` is highly orchestrated:
1. `index.html` loads static CSS and the main `index.js` bundle.
2. `initLoader()` runs immediately inside `main.js` to animate the "INITIALIZING BOTZO" typewriter text. (Optimized to use a strict `for` loop, avoiding array maps inside `requestAnimationFrame`).
3. Static UI (Navbar/Footer) is appended to the `#app` container.
4. **Lenis and GSAP** are initialized and synchronized.
5. **The Deferral Block:** The loader takes exactly **1200ms** to type. To prevent main-thread freezing and dropped frames, heavy systems are wrapped in `setTimeout`:
   - `Router` initialization and dynamic `Home` page mounting is delayed to **1300ms** (executing exactly after the loader finishes typing).
   - `ChatbotDemo` is dynamically imported at **1500ms** (or via `requestIdleCallback`).
   - `AtmosphereEngine` (Three.js) is dynamically imported via `requestIdleCallback`.

---

## 4. Strict Security & CSP Rules

We run a production-grade Content Security Policy (CSP). **You must strictly obey these rules:**
- **Zero `'unsafe-inline'` JS:** You cannot use inline event handlers like `<div onclick="...">` or `<div onmouseover="...">`. 
  - *Solution:* Bind events using `.addEventListener()` or use pure CSS `:hover` states (defined in `pages.css`).
- **Zero `'unsafe-eval'`:** Do not use `eval()` or `new Function()`.
- **JSON-LD is Safe:** Injecting `<script type="application/ld+json">` for SEO is safe and permitted by the CSP.

---

## 5. Animation & Scroll Rules

- **Lenis & GSAP Synchronization:** In `main.js`, Lenis is piped directly into GSAP's ticker:
  ```javascript
  window.lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => window.lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  ```
  **Rule:** Never create a rogue `requestAnimationFrame` loop for scrolling. Always rely on GSAP or the global `window.lenis`.
- **GSAP in Router:** GSAP is statically imported in `router.js` because it is required instantly for page transitions (`animateTransition`).
- **Three.js in Router:** `router.js` animates the background color based on the current page route. **Rule:** Do not import `THREE` into `router.js`. We use a custom `hexToRgb` parser to feed RGB values into `gsap.to()` for the `AtmosphereEngine` uniforms, keeping the 500kB Three.js library out of the initial bundle.

---

## 6. How to Add a New Page

1. Create a new file in `src/pages/` (e.g., `NewPage.js`).
2. Export a builder function (e.g., `export function createNewPage() { ... }`).
3. Return the fully constructed HTML string or DOM Node.
4. Add the route to `ROUTES` inside `src/js/router.js`:
   ```javascript
   '/new-page': { 
       title: 'New Page | Botzo.io', 
       builder: () => import('../pages/NewPage.js').then(m => m.createNewPage()), 
       mood: 'default' // Modifies the AtmosphereEngine background color
   }
   ```
5. If the page requires specific CSS hover states (to obey CSP), add them to `src/styles/pages.css`.
