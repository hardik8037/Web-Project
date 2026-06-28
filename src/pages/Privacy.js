/* ═══════════════════════════════════════════════════
   BOTZO.IO — PRIVACY POLICY
   ═══════════════════════════════════════════════════ */

export function createPrivacy() {
  const container = document.createElement('div');
  container.className = 'page legal-page';

  container.innerHTML = `
    <!-- Cinematic Hero -->
    <section class="section page-hero" style="position: relative; overflow: hidden; padding-bottom: 3rem;">
      <div class="container-standard">
        <div class="section-header" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary-light); margin-bottom: 1.5rem; justify-content: center;">
            <span class="badge-dot"></span>LEGAL
          </div>
          <h1 class="heading-hero" style="font-size: 3rem;">
            Privacy <span class="text-gradient">Policy</span>
          </h1>
          <p class="text-body-lg" style="margin: 0; font-weight: 400; opacity: 0.9;">
            Your data security and privacy are our top priorities. Learn how we handle, protect, and process your information.
          </p>
        </div>
      </div>
      <div class="about-hero-blur" style="position: absolute; width: 400px; height: 400px; top: 0; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(184, 77, 255, 0.15) 0%, transparent 70%); pointer-events: none; z-index: -1;"></div>
    </section>

    <div class="section-divider"></div>

    <section class="section" style="padding: 4rem 0 8rem 0;">
      <div class="container-standard" style="max-width: 800px; margin: 0 auto;">
        <div class="glass-card-strong" style="padding: 3rem; border-radius: var(--radius-xl); text-align: left;">
          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">1. Information We Collect</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">We collect information to provide better services to our users. This includes basic account information such as your name, email address, and phone number, as well as operational data required to deliver our automation services.</p>
          
          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">2. How We Use Information</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">Your information is used strictly to provide, maintain, and improve Botzo.io services. We do not sell your personal data to third parties. Data is processed to facilitate messaging APIs, CRM functionality, and automated workflows.</p>

          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">3. Data Security</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">We implement enterprise-grade security protocols, including end-to-end encryption for API keys and secure data storage, to ensure your information is protected against unauthorized access.</p>

          <p style="color: var(--color-primary-light); font-weight: 600; margin-top: 3rem;">Last Updated: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  `;

  return container;
}
