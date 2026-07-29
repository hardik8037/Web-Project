# Architecture Overview

This document outlines the core architectural decisions behind the Botzo.io frontend.

## 1. Core Stack

- **Framework**: Vanilla JavaScript (ES6+ Module Architecture)
- **Bundler**: Vite
- **Animations**: GSAP (GreenSock) & Lenis (Smooth Scrolling)
- **3D Engine**: Three.js

## 2. Why Vanilla JS?

We actively chose to avoid React, Vue, or Svelte.
- **Zero Virtual DOM**: By avoiding virtual DOM diffing, we drastically reduce memory consumption and main-thread execution time.
- **Direct DOM Manipulation**: GSAP and Three.js rely heavily on direct DOM and Canvas manipulation. Using Vanilla JS removes the abstraction layer, allowing animations to run perfectly in sync with the browser's render pipeline.

## 3. The Custom Router (`src/js/router.js`)

Because this is a Single Page Application (SPA) without a framework, we built a custom client-side router.
- **Route Interception**: It intercepts all `<a href="...">` clicks locally and prevents standard page reloads.
- **Dynamic Imports**: Pages (e.g., `Home.js`, `Pricing.js`) are loaded via asynchronous dynamic imports (`await import(...)`), enabling route-level code splitting.
- **Cinematic Transitions**: The router orchestrates GSAP `fromTo` transitions between route mounts, ensuring seamless fading and DOM replacement.
- **Mood Shifts**: The router communicates with the `AtmosphereEngine` to shift the 3D particle colors dynamically based on the current page context.

## 4. The 3D Render Pipeline (`src/js/atmosphere.js`)

The `AtmosphereEngine` powers the background WebGL visuals.
- **Deferred Parsing**: Three.js is a massive library (~500kB). It is strictly excluded from the initial main bundle. It is dynamically imported via `requestIdleCallback` after the main application UI has painted, guaranteeing a lightning-fast Largest Contentful Paint (LCP).
- **Visibility Optimization**: The WebGL animation loop automatically pauses when the browser tab is hidden (`document.hidden`) to save battery and CPU.

## 5. Scroll Synchronization

We use **Lenis** for smooth scroll physics and **GSAP ScrollTrigger** for scroll-driven animations.
To prevent layout thrashing and scroll jank, Lenis is tightly coupled into the GSAP ticker:
```javascript
window.lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => window.lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```
This forces both libraries to share a single, unified `requestAnimationFrame` render loop.
