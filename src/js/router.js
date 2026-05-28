/* ═══════════════════════════════════════════════════
   BOTZO.IO — CLIENT-SIDE ROUTER
   Smooth cinematic transitions, state-management,
   and dynamic background visual mood shifts.
   ═══════════════════════════════════════════════════ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { initScrollAnimations } from './animations.js';

// Import pages
import { createHome } from '../pages/Home.js';
import { createPlatform } from '../pages/Platform.js';
import { createServices } from '../pages/Services.js';
import { createSolutions } from '../pages/Solutions.js';
import { createPricing } from '../pages/Pricing.js';
import { createResources } from '../pages/Resources.js';
import { createAbout } from '../pages/About.js';
import { createContact } from '../pages/Contact.js';
import { createBookDemo } from '../pages/BookDemo.js';

const ROUTES = {
  '/': { title: 'Botzo.io — Business Automation Ecosystem', builder: createHome, mood: 'default' },
  '/platform': { title: 'AI Automation Platform | Botzo.io', builder: createPlatform, mood: 'platform' },
  '/services': { title: 'Digital Agency & Development Services | Botzo.io', builder: createServices, mood: 'services' },
  '/solutions': { title: 'Industry-Specific Solutions | Botzo.io', builder: createSolutions, mood: 'solutions' },
  '/pricing': { title: 'Plans & Pricing | Botzo.io', builder: createPricing, mood: 'pricing' },
  '/resources': { title: 'Resources, Docs & Blog | Botzo.io', builder: createResources, mood: 'resources' },
  '/about': { title: 'About Our Vision | Botzo.io', builder: createAbout, mood: 'about' },
  '/contact': { title: 'Contact Sales & Support | Botzo.io', builder: createContact, mood: 'contact' },
  '/demo': { title: 'Schedule a Consultation | Botzo.io', builder: createBookDemo, mood: 'demo' },
};

export class Router {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.error(`Router container '${containerSelector}' not found!`);
      return;
    }

    this.currentPath = null;
    this.isTransitioning = false;

    this.init();
  }

  init() {
    // Intercept browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname, false);
    });

    // Intercept click events globally for local routing links
    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Handle relative route links starting with /
      if (href.startsWith('/') && !href.startsWith('//')) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          e.preventDefault();
          this.navigateTo(url.pathname);
        }
      }
      // Handle anchor links on the homepage specifically
      else if (href.startsWith('#')) {
        if (href === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        // If we are not on the homepage, redirect to home page and then scroll to anchor
        if (window.location.pathname !== '/') {
          e.preventDefault();
          this.navigateTo('/' + href);
        }
      }
    });

    // Initial page load routing
    this.handleRoute(window.location.pathname, false);
  }

  navigateTo(path) {
    if (this.isTransitioning || path === this.currentPath) return;
    this.handleRoute(path, true);
  }

  handleRoute(path, shouldPushState = true) {
    // Normalize path (strip trailing slashes except for root)
    let cleanPath = path;
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    // Handle incoming anchor redirects (e.g. /#platform -> home page path '/' then scroll to '#platform')
    let hash = '';
    if (cleanPath.includes('#')) {
      const parts = cleanPath.split('#');
      cleanPath = parts[0] || '/';
      hash = '#' + parts[1];
    }

    const routeConfig = ROUTES[cleanPath] || ROUTES['/']; // Fallback to Home

    if (shouldPushState) {
      window.history.pushState({}, '', cleanPath + hash);
    }

    this.currentPath = cleanPath;
    document.title = routeConfig.title;

    this.transitionPage(routeConfig, hash);
  }

  transitionPage(routeConfig, hash) {
    this.isTransitioning = true;

    // Shift navbar active state links if any
    this.updateNavbarActiveLink();

    // 1. Cinematic Fade Out of dynamic content container
    gsap.to(this.container, {
      opacity: 0,
      y: -15,
      duration: 0.45,
      ease: 'power2.inOut',
      onComplete: () => {
        // 2. Clear old contents and compile the new page component
        this.container.innerHTML = '';
        const pageElement = routeConfig.builder();
        this.container.appendChild(pageElement);

        // 3. Reset scroll position to top (unless scrolling to hash)
        if (!hash) {
          window.scrollTo(0, 0);
        }

        // 4. Update the Three.js Atmosphere engine mood dynamically
        this.evolveAtmosphereMood(routeConfig.mood);

        // 5. Scan new elements for Mouse Parallax and refresh ScrollTrigger
        setTimeout(() => {
          if (window.mouseParallax && typeof window.mouseParallax.scan === 'function') {
            window.mouseParallax.scan();
          }

          // Clear all existing ScrollTriggers to avoid memory leaks
          ScrollTrigger.getAll().forEach(trigger => {
            // Keep navbar trigger active
            if (trigger.vars.trigger !== '#navbar') {
              trigger.kill();
            }
          });

          // Re-initialize dynamic scroll-trigger animations
          if (typeof initScrollAnimations === 'function') {
            initScrollAnimations();
          }

          ScrollTrigger.refresh();

          // Scroll to hash element if specified
          if (hash && hash !== '#') {
            try {
              const targetEl = document.querySelector(hash);
              if (targetEl) {
                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                const top = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            } catch (err) {
              console.warn(`Failed to scroll to selector: ${hash}`, err);
            }
          }
        }, 100);

        // 6. Cinematic Fade In of the page contents
        gsap.fromTo(this.container,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              this.isTransitioning = false;
            }
          }
        );
      }
    });
  }

  evolveAtmosphereMood(mood) {
    const engine = window.atmosphere;
    if (!engine) return;

    // Shift colors, speed, particle size, camera focus based on the page's mood
    let config = {
      particleColor: '#B84DFF',
      particleSpeedMultiplier: 1.0,
      cameraZ: 6.0,
      orbOpacityMultiplier: 1.0,
    };

    switch (mood) {
      case 'platform':
        config.particleColor = '#9C27FF';
        config.particleSpeedMultiplier = 0.8;
        config.cameraZ = 5.2; // Move camera closer
        break;
      case 'services':
        config.particleColor = '#00E676'; // Emerald secondary
        config.particleSpeedMultiplier = 1.3;
        config.cameraZ = 6.5; // Zoom out
        break;
      case 'solutions':
        config.particleColor = '#36C5F0'; // Cyan solutions
        config.particleSpeedMultiplier = 1.1;
        config.cameraZ = 5.8;
        break;
      case 'pricing':
        config.particleColor = '#B84DFF';
        config.particleSpeedMultiplier = 0.7;
        config.cameraZ = 6.2;
        break;
      case 'resources':
        config.particleColor = '#7B1FA2';
        config.particleSpeedMultiplier = 0.9;
        config.cameraZ = 6.0;
        break;
      case 'contact':
      case 'demo':
        config.particleColor = '#F3E8FF'; // Bright holographic look
        config.particleSpeedMultiplier = 1.4;
        config.cameraZ = 4.8; // Immersive close-up
        break;
      default:
        // default home
        config.particleColor = '#B84DFF';
        config.particleSpeedMultiplier = 1.0;
        config.cameraZ = 6.0;
        break;
    }

    // Apply mood variables smoothly via GSAP
    if (engine.particles && engine.particles.material) {
      const uniforms = engine.particles.material.uniforms;
      // We can animate color or size variables
      const targetColor = new THREE.Color(config.particleColor);
      gsap.to(engine.particles.material.color || targetColor, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 2.0,
        ease: 'power2.out',
        onUpdate: () => {
          // Force update in custom shader if needed
        }
      });
    }

    // Animate camera position target smoothly
    gsap.to(engine.camera.position, {
      z: config.cameraZ - (engine.scroll.y * 0.0012), // preserve scroll offset formula
      duration: 1.8,
      ease: 'power2.out'
    });
  }

  updateNavbarActiveLink() {
    const links = document.querySelectorAll('.botzo-pill-link, .mobile-nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === this.currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
