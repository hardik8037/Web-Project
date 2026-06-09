import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ═══════════════════════════════════════════════════
   REUSABLE ANIMATION FUNCTIONS
   ═══════════════════════════════════════════════════ */

export function fadeInUp(elements, options = {}) {
  if (prefersReducedMotion) return;
  const {
    delay = 0,
    duration = 0.9,
    stagger = 0.12,
    y = 50,
    ease = 'power3.out',
    trigger = null,
  } = options;

  const config = {
    y: 0,
    opacity: 1,
    duration,
    delay,
    stagger,
    ease,
  };

  if (trigger) {
    gsap.from(elements, {
      y,
      opacity: 0,
      ...config,
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    });
  } else {
    gsap.from(elements, { y, opacity: 0, ...config });
  }
}

export function fadeInLeft(elements, options = {}) {
  if (prefersReducedMotion) return;
  const { delay = 0, duration = 0.9, x = -60, trigger = null } = options;

  gsap.from(elements, {
    x,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out',
    scrollTrigger: trigger
      ? { trigger, start: 'top 85%', toggleActions: 'play none none none' }
      : undefined,
  });
}

export function fadeInRight(elements, options = {}) {
  if (prefersReducedMotion) return;
  const { delay = 0, duration = 0.9, x = 60, trigger = null } = options;

  gsap.from(elements, {
    x,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out',
    scrollTrigger: trigger
      ? { trigger, start: 'top 85%', toggleActions: 'play none none none' }
      : undefined,
  });
}

export function scaleIn(elements, options = {}) {
  if (prefersReducedMotion) return;
  const { delay = 0, duration = 0.8, stagger = 0.1, trigger = null } = options;

  gsap.from(elements, {
    scale: 0.85,
    opacity: 0,
    duration,
    delay,
    stagger,
    ease: 'power3.out',
    scrollTrigger: trigger
      ? { trigger, start: 'top 85%', toggleActions: 'play none none none' }
      : undefined,
  });
}

export function staggerReveal(elements, options = {}) {
  if (prefersReducedMotion) return;
  const { stagger = 0.15, duration = 0.8, trigger = null, y = 40 } = options;

  gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: 'power3.out',
    scrollTrigger: trigger
      ? { trigger, start: 'top 85%', toggleActions: 'play none none none' }
      : undefined,
  });
}

export function counterAnimate(element, target, options = {}) {
  if (prefersReducedMotion) {
    element.textContent = target;
    return;
  }

  const { duration = 2, prefix = '', suffix = '', trigger = null } = options;
  const obj = { value: 0 };

  const config = {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = prefix + Math.round(obj.value).toLocaleString('en-IN') + suffix;
    },
  };

  if (trigger) {
    gsap.to(obj, {
      ...config,
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  } else {
    gsap.to(obj, config);
  }
}

export function parallaxFloat(element, options = {}) {
  if (prefersReducedMotion) return;
  const { y = 30, duration = 1, trigger = null } = options;

  gsap.to(element, {
    y: -y,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
}

export function morphTransition(fromElements, toElements, options = {}) {
  if (prefersReducedMotion) return;
  const { trigger = null, duration = 1.2 } = options;

  const tl = gsap.timeline({
    scrollTrigger: trigger
      ? {
          trigger,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        }
      : undefined,
  });

  tl.to(fromElements, {
    opacity: 0,
    x: -30,
    filter: 'blur(4px)',
    stagger: 0.05,
    duration: duration * 0.5,
    ease: 'power2.in',
  });

  tl.from(
    toElements,
    {
      opacity: 0,
      x: 30,
      filter: 'blur(4px)',
      stagger: 0.05,
      duration: duration * 0.5,
      ease: 'power2.out',
    },
    '-=0.2'
  );

  return tl;
}

/* ═══════════════════════════════════════════════════
   NAVBAR SCROLL ANIMATION
   ═══════════════════════════════════════════════════ */

export function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      if (self.direction === 1 && self.scroll() > 80) {
        navbar.classList.add('nav-scrolled');
      }
      if (self.scroll() <= 80) {
        navbar.classList.remove('nav-scrolled');
      }
    },
  });
}

/* ═══════════════════════════════════════════════════
   HERO ENTRANCE TIMELINE
   ═══════════════════════════════════════════════════ */

export function heroEntrance() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const tl = gsap.timeline({ delay: 0.3 });

  // Navbar
  tl.from('#navbar', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });

  // Hero content
  tl.from(
    '.hero-overline',
    { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' },
    '-=0.3'
  );

  tl.from(
    '.hero-title',
    { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out' },
    '-=0.5'
  );

  tl.from(
    '.hero-subtitle',
    { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' },
    '-=0.6'
  );

  tl.from(
    '.hero-cta-group',
    { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' },
    '-=0.5'
  );

  // Stats bar
  tl.from(
    '.hero-stats .stat-item',
    { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
    '-=0.3'
  );

  // Floating dashboards
  tl.from(
    '.hero-dashboard',
    {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
    },
    '-=0.8'
  );

  return tl;
}

/* ═══════════════════════════════════════════════════
   INITIALIZE ALL SCROLL ANIMATIONS
   ═══════════════════════════════════════════════════ */

export function initScrollAnimations() {
  if (prefersReducedMotion) return;

  // Fade in up for section headers — with immediate play for elements already in viewport
  gsap.utils.toArray('.section-header').forEach((header) => {
    const children = header.children;
    const st = ScrollTrigger.create({
      trigger: header,
      start: 'top 92%',
      onEnter: () => {
        fadeInUp(children, { stagger: 0.1 });
      },
    });
    // If already past trigger on init, show immediately
    if (st.progress > 0) {
      gsap.set(children, { y: 0, opacity: 1 });
    }
  });

  // Reveal elements — with immediate play for elements already in viewport
  gsap.utils.toArray('.reveal').forEach((el) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      onEnter: () => {
        gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      },
    });
    // If already past trigger on init, reveal immediately
    if (st.progress > 0) {
      gsap.set(el, { y: 0, opacity: 1 });
    }
  });

  gsap.utils.toArray('.reveal-left').forEach((el) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      onEnter: () => {
        gsap.to(el, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      },
    });
    if (st.progress > 0) {
      gsap.set(el, { x: 0, opacity: 1 });
    }
  });

  gsap.utils.toArray('.reveal-right').forEach((el) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      onEnter: () => {
        gsap.to(el, { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
      },
    });
    if (st.progress > 0) {
      gsap.set(el, { x: 0, opacity: 1 });
    }
  });

  gsap.utils.toArray('.reveal-scale').forEach((el) => {
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      onEnter: () => {
        gsap.to(el, { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' });
      },
    });
    if (st.progress > 0) {
      gsap.set(el, { scale: 1, opacity: 1 });
    }
  });

  // Section dividers
  gsap.utils.toArray('.section-divider').forEach((divider) => {
    gsap.from(divider, {
      scaleX: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: divider,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  // 1. Dynamic Section Glow Intensity Modulation on Scroll
  gsap.utils.toArray('.section').forEach((sec) => {
    gsap.fromTo(sec, 
      { '--glow-opacity': 0.05 },
      {
        '--glow-opacity': 0.22,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top bottom',
          end: 'top center+=100',
          scrub: true,
        }
      }
    );
  });

  // 2. Volumetric Light Beam Sweep on Scroll Entry
  gsap.utils.toArray('.section').forEach((sec) => {
    // Avoid double creation and skip CTA section where custom glows are already dense
    if (!sec.querySelector('.light-beam') && !sec.classList.contains('cta-section')) {
      const beam = document.createElement('div');
      beam.className = 'light-beam';
      sec.appendChild(beam);

      gsap.fromTo(beam,
        { x: '-100%' },
        {
          x: '200%',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sec,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        }
      );
    }
  });

  // 3. Dimensional Dashboard & Card Perspective Tilt on Scroll
  gsap.utils.toArray('.dashboard-frame, .hero-dashboard, .glass-card-strong').forEach((card) => {
    gsap.fromTo(card,
      { rotationX: 4, rotationY: -2, y: 15 },
      {
        rotationX: -4,
        rotationY: 2,
        y: -15,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    );
  });

  // 4. Parallax Depth System for [data-scroll-speed]
  gsap.utils.toArray('[data-scroll-speed]').forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-scroll-speed')) || 1;
    const yShift = (1 - speed) * 120; // positive or negative based on speed ratio
    gsap.fromTo(el,
      { y: 0 },
      {
        y: yShift,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  });

  // 5. Counter Number Roll-Up
  gsap.utils.toArray('.industry-card-metric, .stat-value, .stat-number').forEach(el => {
    const rawText = el.textContent.trim();
    // Match numbers including decimals
    const numMatch = rawText.match(/([\d,.]+)/);
    if (!numMatch) return;

    const numStr = numMatch[1].replace(/,/g, '');
    const isFloat = numStr.includes('.');
    const decimals = isFloat ? numStr.split('.')[1].length : 0;
    const target = parseFloat(numStr);
    
    if (isNaN(target) || target <= 0) return;

    const prefix = rawText.substring(0, rawText.indexOf(numMatch[1]));
    const suffix = rawText.substring(rawText.indexOf(numMatch[1]) + numMatch[1].length);

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          // Reduced delay from 1.2s to 0.2s for much faster, smoother response
          delay: el.closest('.hero-section, .page-hero') ? 0.2 : 0, 
          ease: 'power3.out',
          onUpdate: () => {
            let currentVal = isFloat ? obj.value.toFixed(decimals) : Math.round(obj.value);
            // Re-apply Indian comma formatting for large integers
            if (!isFloat && currentVal >= 1000) {
              currentVal = Number(currentVal).toLocaleString('en-IN');
            }
            el.textContent = prefix + currentVal + suffix;
          }
        });
      }
    });
  });
}

export { gsap, ScrollTrigger };
