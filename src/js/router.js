/* ═══════════════════════════════════════════════════
   BOTZO.IO — CLIENT-SIDE ROUTER
   Smooth cinematic transitions, state-management,
   and dynamic background visual mood shifts.
   ═══════════════════════════════════════════════════ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScrollAnimations } from './animations.js';
import { SEO_CONFIG } from '../config/seo.js';
import { Analytics } from '../analytics/analytics.js';

// Import detail page system data (Lightweight, keep static)
import { PLATFORM_PAGES } from '../data/platformPages.js';
import { SERVICE_PAGES } from '../data/servicePages.js';
import { SOLUTION_PAGES } from '../data/solutionPages.js';
import { AEO_DEFINITIONS } from '../data/aeoData.js';

const ROUTES = {
  '/': { title: 'Botzo.io — Business Automation Ecosystem', builder: () => import('../pages/Home.js').then(m => m.createHome()), mood: 'default' },
  '/platform': { title: 'Automation Platform | Botzo.io', builder: () => import('../pages/Platform.js').then(m => m.createPlatform()), mood: 'platform' },
  '/services': { title: 'Digital Agency & Development Services | Botzo.io', builder: () => import('../pages/Services.js').then(m => m.createServices()), mood: 'services' },
  '/solutions': { title: 'Industry-Specific Solutions | Botzo.io', builder: () => import('../pages/Solutions.js').then(m => m.createSolutions()), mood: 'solutions' },
  '/pricing': { title: 'Plans & Pricing | Botzo.io', builder: () => import('../pages/Pricing.js').then(m => m.createPricingPage()), mood: 'pricing' },
  '/resources': { title: 'Resources Hub | Botzo.io', builder: () => import('../pages/Resources.js').then(m => m.createResources()), mood: 'resources' },
  '/blog': { title: 'Insights & Tutorials Blog | Botzo.io', builder: () => import('../pages/Blog.js').then(m => m.createBlog()), mood: 'resources' },
  '/about': { title: 'About Our Vision | Botzo.io', builder: () => import('../pages/About.js').then(m => m.createAbout()), mood: 'about' },
  '/contact': { title: 'Contact Sales & Support | Botzo.io', builder: () => import('../pages/Contact.js').then(m => m.createContact()), mood: 'contact' },
  '/demo': { title: 'Schedule a Consultation | Botzo.io', builder: () => import('../pages/BookDemo.js').then(m => m.createBookDemo()), mood: 'demo' },
  '/privacy': { title: 'Privacy Policy | Botzo.io', builder: () => import('../pages/Privacy.js').then(m => m.createPrivacy()), mood: 'default' },
  '/terms': { title: 'Terms of Service | Botzo.io', builder: () => import('../pages/Terms.js').then(m => m.createTerms()), mood: 'default' },
  '/security': { title: 'Data Security | Botzo.io', builder: () => import('../pages/Security.js').then(m => m.createSecurity()), mood: 'default' },
};

/**
 * Resolve dynamic detail page routes: /platform/:slug, /services/:slug, /solutions/:slug
 */
function resolveDynamicRoute(path) {
  const segments = path.split('/').filter(Boolean);
  if (segments.length !== 2) return null;

  const [category, slug] = segments;
  let pageData = null;
  let mood = 'default';

  switch (category) {
    case 'platform':
      pageData = PLATFORM_PAGES[slug];
      mood = 'platform';
      break;
    case 'services':
      pageData = SERVICE_PAGES[slug];
      mood = 'services';
      break;
    case 'solutions':
      pageData = SOLUTION_PAGES[slug];
      mood = 'solutions';
      break;
    default:
      return null;
  }

  if (!pageData) return null;

  // Augment page data with centralized AEO/GEO semantic payloads
  if (AEO_DEFINITIONS[slug]) {
    pageData = { ...pageData, ...AEO_DEFINITIONS[slug] };
  }

  return {
    title: `${pageData.title} | Botzo.io`,
    builder: () => import('../pages/DetailPage.js').then(m => m.createDetailPage(pageData)),
    mood,
  };
}

export class Router {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.error(`Router container '${containerSelector}' not found!`);
      return;
    }

    // Set scroll restoration to manual so the browser does not scroll back to the previous middle position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
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

    const isNotFound = !ROUTES[cleanPath] && !resolveDynamicRoute(cleanPath);
    const routeConfig = isNotFound 
      ? { title: 'Page Not Found | Botzo.io', builder: () => import('../pages/NotFound.js').then(m => m.createNotFound()), mood: 'default', isNotFound: true }
      : (ROUTES[cleanPath] || resolveDynamicRoute(cleanPath));

    if (shouldPushState) {
      window.history.pushState({}, '', cleanPath + hash);
    }

    this.currentPath = cleanPath;
    this.updateSEO(cleanPath, routeConfig);

    // Track SPA Page View
    Analytics.trackPage(cleanPath, routeConfig.title);

    this.transitionPage(routeConfig, hash);
  }

  transitionPage(routeConfig, hash) {
    this.isTransitioning = true;

    // Shift navbar active state links if any
    this.updateNavbarActiveLink();

    const runTransition = () => {
      // 1. Cinematic Fade Out of dynamic content container
      gsap.to(this.container, {
        opacity: 0,
        y: -15,
        duration: 0.45,
        ease: 'power2.inOut',
        onComplete: async () => {
          // Clear all existing ScrollTriggers first (to prevent scroll adjustments when elements are removed)
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.trigger !== '#navbar') {
              trigger.kill();
            }
          });

          // 2. Clear old contents and compile the new page component
          this.container.innerHTML = '';
          const pageElement = await routeConfig.builder();
          this.container.appendChild(pageElement);

          // 3. Reset scroll position to top immediately
          if (!hash) {
            window.scrollTo(0, 0);
          }

          // 4. Update the Three.js Atmosphere engine mood dynamically
          this.evolveAtmosphereMood(routeConfig.mood);

          // 5. Scan new elements for Mouse Parallax and refresh ScrollTrigger
          requestAnimationFrame(() => {
            if (window.mouseParallax && typeof window.mouseParallax.scan === 'function') {
              window.mouseParallax.scan();
            }

            // Re-initialize dynamic scroll-trigger animations
            if (typeof initScrollAnimations === 'function') {
              initScrollAnimations();
            }

            // Defer ScrollTrigger refresh and hash scrolling to avoid main-thread locking
            setTimeout(() => {
              ScrollTrigger.refresh();

              if (!hash) {
                window.scrollTo(0, 0);
              } else if (hash && hash !== '#') {
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
            }, 50);
          });

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
                gsap.set(this.container, { clearProps: 'transform' });
              }
            }
          );
        }
      });
    };

    // If the user is scrolled down, smoothly scroll to top first, then execute transition
    if (window.scrollY > 60 && !hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Schedule page swap once smooth scroll is near completion (approx 450ms)
      setTimeout(runTransition, 450);
    } else {
      runTransition();
    }
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
      
      // Parse hex to RGB (0-1 range) to avoid importing THREE
      const hex = config.particleColor;
      const targetColor = {
        r: parseInt(hex.slice(1, 3), 16) / 255,
        g: parseInt(hex.slice(3, 5), 16) / 255,
        b: parseInt(hex.slice(5, 7), 16) / 255
      };

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

  updateSEO(path, routeConfig) {
    const seo = SEO_CONFIG[path] || {
      title: routeConfig.title || 'Botzo.io',
      description: 'Botzo.io Business Automation',
      canonical: `https://botzo.io${path === '/' ? '' : path}`,
      ogTitle: routeConfig.title || 'Botzo.io',
      ogDescription: 'Botzo.io Business Automation',
      ogImage: 'https://botzo.io/assets/images/og-image.png',
      twitterTitle: routeConfig.title || 'Botzo.io',
      twitterDescription: 'Botzo.io Business Automation',
      schemaType: 'WebSite'
    };

    document.title = seo.title;
    
    const updateMeta = (selector, attribute, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property')) {
          el.setAttribute('property', selector.match(/"([^"]+)"/)[1]);
        } else {
          el.setAttribute('name', selector.match(/"([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    updateMeta('meta[name="description"]', 'content', seo.description);
    if (seo.keywords) updateMeta('meta[name="keywords"]', 'content', seo.keywords);
    
    // Override robots for 404
    if (routeConfig.isNotFound) {
      updateMeta('meta[name="robots"]', 'content', 'noindex, nofollow');
    } else if (seo.robots) {
      updateMeta('meta[name="robots"]', 'content', seo.robots);
    }

    // Dynamic hreflang for International SEO Readiness
    let hreflang = document.querySelector('link[hreflang="x-default"]');
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hreflang);
    }
    hreflang.setAttribute('href', seo.canonical);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonical);

    updateMeta('meta[property="og:title"]', 'content', seo.ogTitle);
    updateMeta('meta[property="og:description"]', 'content', seo.ogDescription);
    updateMeta('meta[property="og:url"]', 'content', seo.canonical);
    updateMeta('meta[property="og:image"]', 'content', seo.ogImage);

    updateMeta('meta[name="twitter:title"]', 'content', seo.twitterTitle);
    updateMeta('meta[name="twitter:description"]', 'content', seo.twitterDescription);
    if (seo.twitterImage) updateMeta('meta[name="twitter:image"]', 'content', seo.twitterImage);

    this.injectStructuredData(seo);
  }

  injectStructuredData(seo) {
    let script = document.getElementById('seo-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemas = [];

    // Base WebPage schema for all routes
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": seo.schemaType === 'WebSite' ? 'WebSite' : "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical
    };
    schemas.push(webPageSchema);

    if (seo.schemaType === 'Organization') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Botzo.io",
        "url": "https://botzo.io/",
        "logo": "https://botzo.io/assets/images/logo.png",
        "description": seo.aiDescription || seo.description,
        "sameAs": [
          "https://www.linkedin.com/company/botzo",
          "https://twitter.com/botzo_io",
          "https://www.instagram.com/botzo.io"
        ]
      });
    } else if (seo.schemaType === 'SoftwareApplication') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": seo.title.split('|')[0].trim(),
        "description": seo.aeoDefinition || seo.aiDescription || seo.description,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "8432"
        },
        "provider": {
          "@type": "Organization",
          "name": "Botzo.io",
          "url": "https://botzo.io/"
        },
        "url": seo.canonical
      });
    } else if (seo.schemaType === 'Service') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": seo.title.split('|')[0].trim(),
        "description": seo.aeoDefinition || seo.aiDescription || seo.description,
        "provider": {
          "@type": "Organization",
          "name": "Botzo.io",
          "url": "https://botzo.io/"
        },
        "url": seo.canonical
      });
    }

    // Phase 7: Automatically inject AEO Definition as a DefinedTerm schema for LLMs
    if (seo.aeoEntity && seo.aeoDefinition) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": seo.aeoEntity,
        "description": seo.aeoDefinition,
        "inDefinedTermSet": "https://botzo.io"
      });
    }

    if (seo.schemaType === 'FAQ' || (seo.faqs && seo.faqs.length > 0)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (seo.faqs || []).map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      });
    }

    if (seo.schemaType === 'Article' || seo.schemaType === 'BlogPosting') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": seo.schemaType,
        "headline": seo.title,
        "description": seo.description,
        "image": seo.ogImage,
        "author": {
          "@type": "Organization",
          "name": "Botzo.io"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Botzo.io",
          "logo": {
            "@type": "ImageObject",
            "url": "https://botzo.io/assets/images/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": seo.canonical
        }
      });
    }

    // Dynamic Breadcrumbs based on canonical URL depth
    const pathParts = new URL(seo.canonical).pathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      const breadcrumbElements = [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://botzo.io/"
      }];
      
      let currentPath = "https://botzo.io";
      pathParts.forEach((part, index) => {
        currentPath += `/${part}`;
        let partName = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
        if (index === pathParts.length - 1 && seo.breadcrumb && seo.breadcrumb !== 'Home') {
          partName = seo.breadcrumb;
        }
        breadcrumbElements.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": partName,
          "item": currentPath
        });
      });

      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbElements
      });
    }

    script.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
  }
}
