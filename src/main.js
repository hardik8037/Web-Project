/* ═══════════════════════════════════════════════════
   BOTZO.IO — MAIN APPLICATION ENTRY
   ═══════════════════════════════════════════════════ */

import './styles/globals.css';

// Components
import { createNavbar } from './components/Navbar.js';
import { createFooter } from './components/Footer.js';

// Sections
import { createHero } from './sections/Hero.js';
import { createIntegrations } from './sections/Integrations.js';
import { createAutomationPlatform } from './sections/AutomationPlatform.js';
import { createLiveDemo } from './sections/LiveDemo.js';
import { createProblemSolution } from './sections/ProblemSolution.js';
import { createDigitalServices } from './sections/DigitalServices.js';
import { createPricing } from './sections/Pricing.js';
import { createUseCases } from './sections/UseCases.js';
import { createTestimonials } from './sections/Testimonials.js';
import { createFAQ } from './sections/FAQ.js';
import { createFinalCTA } from './sections/FinalCTA.js';

// JS Systems
import { heroEntrance, initNavbarScroll, initScrollAnimations } from './js/animations.js';
import { AtmosphereEngine } from './js/atmosphere.js';
import { MouseParallax } from './js/mouse-parallax.js';
import { ChatbotDemo } from './js/chatbot-demo.js';

/* ═══════════════════════════════════════════════════
   APP INITIALIZATION
   ═══════════════════════════════════════════════════ */

function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Build the page
  app.appendChild(createNavbar());

  const main = document.createElement('main');
  main.id = 'main-content';

  main.appendChild(createHero());
  main.appendChild(createDivider());
  main.appendChild(createIntegrations());
  main.appendChild(createDivider());
  main.appendChild(createAutomationPlatform());
  main.appendChild(createDivider());
  main.appendChild(createLiveDemo());
  main.appendChild(createDivider());
  main.appendChild(createProblemSolution());
  main.appendChild(createDivider());
  main.appendChild(createDigitalServices());
  main.appendChild(createDivider());
  main.appendChild(createPricing());
  main.appendChild(createDivider());
  main.appendChild(createUseCases());
  main.appendChild(createDivider());
  main.appendChild(createTestimonials());
  main.appendChild(createDivider());
  main.appendChild(createFAQ());
  main.appendChild(createFinalCTA());

  app.appendChild(main);
  app.appendChild(createFooter());

  // Initialize systems after DOM is populated
  requestAnimationFrame(() => {
    // Hide loader
    hideLoader();

    // Initialize animations
    heroEntrance();
    initNavbarScroll();

    // Delay scroll animations to avoid initial layout thrashing
    setTimeout(() => {
      initScrollAnimations();
    }, 500);

    // Initialize global cinematic systems
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      try {
        window.atmosphere = new AtmosphereEngine();
        window.mouseParallax = new MouseParallax();
      } catch (e) {
        console.warn('Cinematic systems initialization skipped:', e.message);
      }
    }

    // Initialize floating background grid element inside app container
    const grid = document.createElement('div');
    grid.className = 'floating-grid';
    app.appendChild(grid);

    // Initialize chatbot demo
    new ChatbotDemo();

    // Smooth scroll for anchor links
    initSmoothScroll();
  });
}

function createDivider() {
  const div = document.createElement('div');
  div.className = 'section-divider';
  return div;
}

function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('loaded');
    setTimeout(() => loader.remove(), 800);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════
   START
   ═══════════════════════════════════════════════════ */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
