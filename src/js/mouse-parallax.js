/* ═══════════════════════════════════════════════════
   BOTZO.IO — MOUSE PARALLAX & INTERACTIVE DEPTH
   Lightweight cursor-reactive system for dashboard tilt,
   parallax layers, and holographic hover effects.
   ═══════════════════════════════════════════════════ */

export class MouseParallax {
  constructor() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return; // Skip on mobile

    this.mouse = { x: 0.5, y: 0.5, smoothX: 0.5, smoothY: 0.5 };
    this.isActive = true;
    this.elements = [];
    this.tiltElements = [];
    this.holoElements = [];

    this.bindEvents();
    this.scan();
    this.animate();

    // Re-scan when new content is added
    this._observer = new MutationObserver(() => this.scan());
    this._observer.observe(document.getElementById('app') || document.body, {
      childList: true,
      subtree: true,
    });
  }

  scan() {
    // Parallax depth layers
    this.elements = Array.from(document.querySelectorAll('[data-depth]')).map(el => ({
      el,
      depth: parseFloat(el.dataset.depth) || 1,
    }));

    // Dashboard tilt targets
    this.tiltElements = Array.from(document.querySelectorAll(
      '.dashboard-frame, .hero-dashboard, .glass-card-strong, .glass-card'
    ));

    // Holographic hover targets
    this.holoElements = Array.from(document.querySelectorAll(
      '.dashboard-frame, .pricing-card, .service-card, .feature-card, .glass-card-strong'
    ));

    // Add holographic gradient overlay to eligible elements
    this.holoElements.forEach(el => {
      if (!el.querySelector('.holo-gradient')) {
        const holo = document.createElement('div');
        holo.className = 'holo-gradient';
        holo.style.cssText = `
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(156, 39, 255, 0.06),
            transparent 40%
          );
          z-index: 1;
        `;
        el.style.position = el.style.position || 'relative';
        el.appendChild(holo);
      }
    });
  }

  bindEvents() {
    this._onMouseMove = (e) => {
      this.mouse.x = e.clientX / window.innerWidth;
      this.mouse.y = e.clientY / window.innerHeight;
    };

    this._onVisibility = () => {
      this.isActive = !document.hidden;
    };

    window.addEventListener('mousemove', this._onMouseMove, { passive: true });
    document.addEventListener('visibilitychange', this._onVisibility);
  }

  animate() {
    if (!this.isActive) {
      requestAnimationFrame(() => this.animate());
      return;
    }

    // Smooth lerp
    this.mouse.smoothX += (this.mouse.x - this.mouse.smoothX) * 0.06;
    this.mouse.smoothY += (this.mouse.y - this.mouse.smoothY) * 0.06;

    const centerX = this.mouse.smoothX - 0.5; // -0.5 to 0.5
    const centerY = this.mouse.smoothY - 0.5;

    // === Parallax depth layers ===
    this.elements.forEach(({ el, depth }) => {
      const rect = el.getBoundingClientRect();
      // Only animate elements in viewport
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;

      const moveX = centerX * depth * 20;
      const moveY = centerY * depth * 15;
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // === Dashboard tilt ===
    this.tiltElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -50 || rect.top > window.innerHeight + 50) return;

      // Tilt amount based on element center vs mouse
      const elCenterX = (rect.left + rect.width / 2) / window.innerWidth;
      const elCenterY = (rect.top + rect.height / 2) / window.innerHeight;

      const distX = this.mouse.smoothX - elCenterX;
      const distY = this.mouse.smoothY - elCenterY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      // Only tilt if mouse is reasonably close
      if (dist < 0.6) {
        const intensity = (1 - dist / 0.6) * 2.5;
        const rotateY = distX * intensity;
        const rotateX = -distY * intensity;
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else {
        el.style.transform = '';
      }
    });

    // === Holographic hover gradient ===
    this.holoElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const holo = el.querySelector('.holo-gradient');
      if (!holo) return;

      const mouseX = this.mouse.smoothX * window.innerWidth;
      const mouseY = this.mouse.smoothY * window.innerHeight;

      // Check if mouse is near the element
      const isNear = mouseX > rect.left - 50 && mouseX < rect.right + 50 &&
                     mouseY > rect.top - 50 && mouseY < rect.bottom + 50;

      if (isNear) {
        const localX = ((mouseX - rect.left) / rect.width) * 100;
        const localY = ((mouseY - rect.top) / rect.height) * 100;
        holo.style.setProperty('--mouse-x', `${localX}%`);
        holo.style.setProperty('--mouse-y', `${localY}%`);
        holo.style.opacity = '1';
      } else {
        holo.style.opacity = '0';
      }
    });

    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.isActive = false;
    window.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('visibilitychange', this._onVisibility);
    if (this._observer) this._observer.disconnect();
  }
}
