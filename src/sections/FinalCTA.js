/* ═══════════════════════════════════════════════════
   FINAL CTA SECTION
   ═══════════════════════════════════════════════════ */

export function createFinalCTA() {
  const section = document.createElement('section');
  section.id = 'demo';
  section.className = 'section cta-section';

  section.innerHTML = `
    <div class="cta-ambient">
      <div class="cta-orb cta-orb-1"></div>
      <div class="cta-orb cta-orb-2"></div>
      <div class="cta-orb cta-orb-3"></div>
    </div>

    <div class="container cta-container">
      <div class="cta-content reveal-scale">
        <div class="cta-card">
          <span class="text-overline" style="color:var(--color-primary-light); letter-spacing: 3px;">GET STARTED TODAY</span>
          <h2 class="heading-hero" style="max-width:700px;margin:0 auto 1rem;">
            Ready to Transform<br><span class="text-gradient">Your Business?</span>
          </h2>
          <p class="text-body-lg" style="max-width:520px;margin:0 auto 2.5rem; opacity: 0.75;">
            Join 50,000+ businesses automating their growth with Botzo.io. Start your free trial today — no credit card required.
          </p>
          <div class="cta-buttons">
            <a href="/demo" class="btn btn-primary btn-lg cta-btn-glow">
              Book a Free Demo
              <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20Botzo.io" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp Us
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="cta-trust">
            <div class="cta-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Free 14-Day Trial</span>
            </div>
            <div class="cta-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>No Credit Card</span>
            </div>
            <div class="cta-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Setup in 5 Min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
