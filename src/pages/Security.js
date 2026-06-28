/* ═══════════════════════════════════════════════════
   BOTZO.IO — SECURITY POLICY
   ═══════════════════════════════════════════════════ */

export function createSecurity() {
  const container = document.createElement('div');
  container.className = 'page legal-page';

  container.innerHTML = `
    <!-- Cinematic Hero -->
    <section class="section page-hero" style="position: relative; overflow: hidden; padding-bottom: 3rem;">
      <div class="container-standard">
        <div class="section-header" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-green); margin-bottom: 1.5rem; justify-content: center;">
            <span class="badge-dot"></span>LEGAL
          </div>
          <h1 class="heading-hero" style="font-size: 3rem;">
            Data <span class="text-gradient" style="background: linear-gradient(135deg, #00E676 0%, #00B0FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Security</span>
          </h1>
          <p class="text-body-lg" style="margin: 0; font-weight: 400; opacity: 0.9;">
            Enterprise-grade infrastructure designed to protect your business and your customers' data.
          </p>
        </div>
      </div>
      <div class="about-hero-blur" style="position: absolute; width: 400px; height: 400px; top: 0; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(0, 230, 118, 0.15) 0%, transparent 70%); pointer-events: none; z-index: -1;"></div>
    </section>

    <div class="section-divider"></div>

    <section class="section" style="padding: 4rem 0 8rem 0;">
      <div class="container-standard" style="max-width: 800px; margin: 0 auto;">
        <div class="glass-card-strong" style="padding: 3rem; border-radius: var(--radius-xl); text-align: left;">
          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">1. Infrastructure Security</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">Botzo.io is hosted on Amazon Web Services (AWS) using highly secure and isolated VPCs. Our infrastructure is continuously monitored for vulnerabilities, and we deploy automated scaling to prevent DDoS attacks.</p>
          
          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">2. Data Encryption</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">All data in transit is encrypted using TLS 1.2 or higher. Data at rest, including database backups and customer communications, is secured with AES-256 encryption.</p>

          <h2 style="color: var(--color-white-text); margin-bottom: 1rem;">3. Compliance and Auditing</h2>
          <p style="color: var(--color-dim-text); line-height: 1.7; margin-bottom: 2rem;">We adhere strictly to GDPR and SOC 2 compliance standards. Regular third-party security audits and penetration tests are conducted to ensure our defenses remain impenetrable.</p>

          <p style="color: var(--color-green); font-weight: 600; margin-top: 3rem;">Last Updated: ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  `;

  return container;
}
