/* ═══════════════════════════════════════════════════
   BOTZO.IO — TERMS OF SERVICE
   ═══════════════════════════════════════════════════ */

export function createTerms() {
  const container = document.createElement('div');
  container.className = 'page legal-page';

  container.innerHTML = `
    <!-- Cinematic Hero -->
    <section class="section page-hero" style="position: relative; overflow: hidden; padding-bottom: 3rem;">
      <div class="container-standard">
        <div class="section-header" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-blue); margin-bottom: 1.5rem; justify-content: center;">
            <span class="badge-dot"></span>LEGAL
          </div>
          <h1 class="heading-hero" style="font-size: 3rem;">
            Terms of <span class="text-gradient" style="background: linear-gradient(135deg, #00B0FF 0%, #00E676 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Service</span>
          </h1>
          <p class="text-body-lg" style="margin: 0; font-weight: 400; opacity: 0.9;">
            The rules and guidelines for using the Botzo.io platform and services.
          </p>
        </div>
      </div>
      <div class="about-hero-blur" style="position: absolute; width: 400px; height: 400px; top: 0; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(0, 176, 255, 0.15) 0%, transparent 70%); pointer-events: none; z-index: -1;"></div>
    </section>

    <div class="section-divider"></div>

    <section class="section" style="padding: 4rem 0 8rem 0;">
      <div class="container-standard" style="max-width: 800px; margin: 0 auto;">
        <div class="glass-card-strong" style="padding: 3rem; border-radius: var(--radius-xl); text-align: left;">
          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">1. Acceptance of Terms</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">By accessing and using Botzo.io, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.</p>
          
          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">2. Use License</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">Permission is granted to temporarily access the materials and platform provided by Botzo.io for personal, non-commercial, or internal business operations only. You may not modify, reverse engineer, or resell the platform.</p>

          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">3. API Usage and Limitations</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">When utilizing the Botzo.io APIs (including WhatsApp, Instagram, etc.), you must comply with the respective platform's terms of service. Spam, abuse, or unauthorized bulk messaging will result in immediate termination of your account.</p>

          <p style="color: var(--color-blue); font-weight: 600; margin-top: 3rem;">Last Updated: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  `;

  return container;
}
