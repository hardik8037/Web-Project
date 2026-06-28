/* ═══════════════════════════════════════════════════
   BOTZO.IO — MAIN APPLICATION ENTRY
   Multi-page dynamic mounting and cinematic core.
   ═══════════════════════════════════════════════════ */

import './styles/globals.css';

// Components
import { createNavbar } from './components/Navbar.js';
import { createFooter } from './components/Footer.js';
import { initUI } from './components/ui/index.js';

// JS Systems
import { initNavbarScroll } from './js/animations.js';
import { AtmosphereEngine } from './js/atmosphere.js';
import { MouseParallax } from './js/mouse-parallax.js';
import { ChatbotDemo } from './js/chatbot-demo.js';
import { Router } from './js/router.js';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/* ═══════════════════════════════════════════════════
   APP INITIALIZATION
   ═══════════════════════════════════════════════════ */

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // 1. Mount static Navbar
  app.appendChild(createNavbar());

  // 2. Mount dynamic Page Container (swapped by Router)
  const pageContainer = document.createElement('div');
  pageContainer.id = 'page-container';
  pageContainer.style.width = '100%';
  pageContainer.style.minHeight = '100vh';
  app.appendChild(pageContainer);

  // 3. Mount static Footer
  app.appendChild(createFooter());

  // Initialize systems after DOM is mounted
  requestAnimationFrame(() => {
    // Complete the progress bar fill to 100%, then fade and remove loader
    const loaderBarFill = document.getElementById('loader-bar-fill');
    if (loaderBarFill) {
      loaderBarFill.style.width = '100%';
      setTimeout(hideLoader, 550);
    } else {
      hideLoader();
    }

    // Init scroll state handler for navigation styling
    initNavbarScroll();

    // Initialize Lenis Smooth Scrolling
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      window.lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        smoothTouch: false,
      });

      function raf(time) {
        window.lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Initialize global Three.js and Mouse Parallax systems
    if (!reduceMotion) {
      try {
        window.atmosphere = new AtmosphereEngine();
        window.mouseParallax = new MouseParallax();
      } catch (e) {
        console.warn('Cinematic systems initialization skipped:', e.message);
      }
    }

    // Append floating background grid element inside app wrapper
    const grid = document.createElement('div');
    grid.className = 'floating-grid';
    app.appendChild(grid);

    // Initialize interactive chatbot demo handler globally
    new ChatbotDemo();

    // Initialize Custom Router to handle client-side navigation
    window.router = new Router('#page-container');

    // Initialize Shadcn-style Vanilla UI Components
    initUI();
  });
}

function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('loaded');
    setTimeout(() => loader.remove(), 800);
  }
}

/* ═══════════════════════════════════════════════════
   START
   ═══════════════════════════════════════════════════ */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
