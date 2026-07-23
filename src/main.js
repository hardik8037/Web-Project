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
// AtmosphereEngine is dynamically imported to defer Three.js parsing
import { MouseParallax } from './js/mouse-parallax.js';
import { ChatbotDemo } from './js/chatbot-demo.js';
import { Router } from './js/router.js';
import { Analytics } from './analytics/analytics.js';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/* ═══════════════════════════════════════════════════
   CINEMATIC LOADER INITIALIZATION (CSP Compliant)
   ═══════════════════════════════════════════════════ */
const initLoader = () => {
  const textToType = "INITIALIZING BOTZO";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  const el = document.getElementById('loader-typewriter-text');
  
  if (el) {
    let start = null;
    const duration = 1200; // Exact milliseconds to finish
    
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;
      const currentLen = Math.floor(progress * textToType.length);
      
      if (progress < 1) {
        el.innerText = textToType.split('').map((letter, index) => {
          if(index < currentLen) return letter;
          if(letter === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        requestAnimationFrame(animate);
      } else {
        el.innerText = textToType;
      }
    };
    requestAnimationFrame(animate);
  }
};
// Fire loader animation immediately as script parses
initLoader();

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
    // Cinematic Typewriter wait (21 chars * 60ms + 500ms reading time = ~1800ms)
    const typeWriterEl = document.getElementById('loader-typewriter-text');
    if (typeWriterEl) {
      setTimeout(hideLoader, 1800);
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
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        window.lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Initialize Analytics Engine after critical rendering
    setTimeout(() => {
      Analytics.initialize();
    }, 500);
    
    // Global Link Tracker (Automatic Tracking for Outbound & Internal Links)
    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      
      const linkText = link.textContent.trim() || href;

      if (href.startsWith('http') && !href.includes(window.location.host)) {
        Analytics.trackOutboundLink(href);
      } else if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me')) {
        Analytics.trackOutboundLink(href);
      } else if (href.startsWith('/') || href.includes(window.location.host)) {
        // Track internal navigation
        if (linkText.toLowerCase().includes('demo')) {
           Analytics.trackEvent(Analytics.EVENTS.BOOK_DEMO, Analytics.CATEGORIES.CONVERSION, 'Navigation CTA Click', linkText);
        } else {
           Analytics.trackEvent(Analytics.EVENTS.NAVIGATION_CLICK, Analytics.CATEGORIES.NAVIGATION, 'Internal Link Click', linkText, { destination: href });
        }
      }
    });

    // Fire initial scroll check for navbar
    window.dispatchEvent(new Event('scroll'));

    // Initialize global Three.js and MouseParallax systems AFTER initial paint (TBT Optimization)
    if (!reduceMotion) {
      const initCinematicSystems = () => {
        try {
          window.mouseParallax = new MouseParallax();
          
          // Dynamically import AtmosphereEngine so Three.js isn't in the initial JS graph
          import('./js/atmosphere.js')
            .then(({ AtmosphereEngine }) => {
              window.atmosphere = new AtmosphereEngine();
            })
            .catch(err => console.warn('Failed to load AtmosphereEngine:', err));
            
        } catch (e) {
          console.warn('Cinematic systems initialization skipped:', e.message);
        }
      };

      // Defer heavy WebGL compilation until the main thread is idle
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(initCinematicSystems, { timeout: 2000 });
      } else {
        setTimeout(initCinematicSystems, 100);
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
    loader.classList.add('loaded'); // Triggers the opacity fade-out
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
