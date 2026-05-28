/* ═══════════════════════════════════════════════════
   DIGITAL SERVICES DIVISION
   ═══════════════════════════════════════════════════ */

export function createDigitalServices() {
  const section = document.createElement('section');
  section.id = 'services';
  section.className = 'section services-section';

  section.innerHTML = `
    <!-- Ecosystem Transition -->
    <div class="ecosystem-transition">
      <div class="ecosystem-wave"></div>
    </div>

    <div class="container">
      <div class="section-header">
        <span class="text-overline">Digital Services Division</span>
        <h2 class="heading-section">Beyond Automation —<br><span class="text-gradient">Full Digital Transformation</span></h2>
        <p class="text-body-lg">Complete digital services to grow your online presence, from marketing strategy to custom development.</p>
      </div>

      <!-- Digital Marketing -->
      <div class="service-block reveal">
        <div class="service-block-content">
          <div class="service-badge" style="--badge-color: #FF6B35;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Digital Marketing
          </div>
          <h3 class="heading-subsection">Drive Growth with<br>Data-Driven Marketing</h3>
          <p class="text-body">SEO, performance marketing, social media strategy, and conversion optimization — all backed by real-time analytics and measurable ROI.</p>
          <div class="service-features">
            <span class="service-feature-tag">SEO & Content</span>
            <span class="service-feature-tag">Google & Meta Ads</span>
            <span class="service-feature-tag">Social Media</span>
            <span class="service-feature-tag">Lead Generation</span>
            <span class="service-feature-tag">Analytics & ROI</span>
          </div>
          <a href="/services/digital-marketing" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Explore Marketing →</a>
        </div>
        <div class="service-block-visual">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">Marketing Analytics</span>
            </div>
            <div class="dashboard-content">
              <div class="seo-dashboard">
                <div class="seo-metric-row">
                  <div class="kpi-card">
                    <div class="kpi-value" style="font-size:1.2rem;color:var(--color-green);">247%</div>
                    <div class="kpi-label">Organic Growth</div>
                  </div>
                  <div class="kpi-card">
                    <div class="kpi-value" style="font-size:1.2rem;">₹2.4L</div>
                    <div class="kpi-label">Revenue from Ads</div>
                  </div>
                  <div class="kpi-card">
                    <div class="kpi-value" style="font-size:1.2rem;color:var(--color-primary-light);">4.2x</div>
                    <div class="kpi-label">ROAS</div>
                  </div>
                </div>
                <div class="seo-chart-area">
                  <div style="font-size:0.72rem;font-weight:600;margin-bottom:0.5rem;">Traffic Growth — 6 Months</div>
                  <svg viewBox="0 0 240 60" class="seo-chart" style="width:100%;height:60px;">
                    <defs>
                      <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.3"/>
                        <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0 55 L40 48 L80 42 L120 30 L160 20 L200 12 L240 5" fill="none" stroke="#FF6B35" stroke-width="2"/>
                    <path d="M0 55 L40 48 L80 42 L120 30 L160 20 L200 12 L240 5 L240 60 L0 60 Z" fill="url(#seoGrad)"/>
                  </svg>
                </div>
                <div class="seo-keywords">
                  <div class="seo-keyword"><span class="seo-keyword-pos" style="color:var(--color-green);">#1</span> "whatsapp automation"</div>
                  <div class="seo-keyword"><span class="seo-keyword-pos" style="color:var(--color-green);">#3</span> "business chatbot india"</div>
                  <div class="seo-keyword"><span class="seo-keyword-pos" style="color:var(--color-orange);">#7</span> "crm for small business"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider" style="margin:4rem auto;"></div>

      <!-- Web Development -->
      <div class="service-block service-block-reverse reveal">
        <div class="service-block-content">
          <div class="service-badge" style="--badge-color: #0088FF;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0088FF" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            Web Development
          </div>
          <h3 class="heading-subsection">Premium Websites That<br>Convert & Perform</h3>
          <p class="text-body">From stunning landing pages to enterprise ecommerce platforms — built with modern tech, optimized for speed, and designed to convert.</p>
          <div class="service-features">
            <span class="service-feature-tag">React & Next.js</span>
            <span class="service-feature-tag">WordPress</span>
            <span class="service-feature-tag">Shopify</span>
            <span class="service-feature-tag">Ecommerce</span>
            <span class="service-feature-tag">UI/UX Design</span>
          </div>
          <a href="/services/website-development" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Explore Web Dev →</a>
        </div>
        <div class="service-block-visual">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">Website Preview</span>
            </div>
            <div class="dashboard-content web-preview-content">
              <div class="web-preview">
                <div class="web-preview-nav">
                  <div style="font-size:0.7rem;font-weight:700;color:var(--color-primary-light);">YourBrand</div>
                  <div style="display:flex;gap:0.8rem;font-size:0.6rem;color:var(--color-dim-text);">
                    <span>Home</span><span>Products</span><span>About</span>
                  </div>
                </div>
                <div class="web-preview-hero">
                  <div style="font-size:0.95rem;font-weight:700;line-height:1.2;">Premium<br><span style="color:var(--color-primary-light);">Digital Experience</span></div>
                  <div style="font-size:0.6rem;color:var(--color-muted-text);margin-top:0.3rem;">Built with Next.js & TailwindCSS</div>
                  <div style="display:flex;gap:0.4rem;margin-top:0.5rem;">
                    <div style="padding:0.25rem 0.6rem;background:var(--color-primary);border-radius:4px;font-size:0.55rem;color:#fff;">Get Started</div>
                    <div style="padding:0.25rem 0.6rem;border:1px solid rgba(255,255,255,0.15);border-radius:4px;font-size:0.55rem;">Learn More</div>
                  </div>
                </div>
                <div class="web-preview-cards">
                  <div class="web-preview-card" style="background:rgba(156,39,255,0.08);"></div>
                  <div class="web-preview-card" style="background:rgba(0,136,255,0.08);"></div>
                  <div class="web-preview-card" style="background:rgba(37,211,102,0.08);"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider" style="margin:4rem auto;"></div>

      <!-- App Development -->
      <div class="service-block reveal">
        <div class="service-block-content">
          <div class="service-badge" style="--badge-color: #25D366;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
            App Development
          </div>
          <h3 class="heading-subsection">Cross-Platform Apps<br>Built for Scale</h3>
          <p class="text-body">Native iOS, Android, and cross-platform apps — from MVP to enterprise-grade solutions with beautiful UI and robust backends.</p>
          <div class="service-features">
            <span class="service-feature-tag">React Native</span>
            <span class="service-feature-tag">Flutter</span>
            <span class="service-feature-tag">iOS & Android</span>
            <span class="service-feature-tag">API Integration</span>
            <span class="service-feature-tag">App Store Deploy</span>
          </div>
          <a href="/services/app-development" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Explore App Dev →</a>
        </div>
        <div class="service-block-visual">
          <div class="app-preview-wrapper">
            <div class="app-phone app-phone-1">
              <div class="phone-mockup" style="width:180px;height:360px;border-radius:24px;padding:5px;">
                <div class="phone-notch" style="width:50px;height:16px;border-radius:0 0 10px 10px;margin-bottom:4px;"></div>
                <div class="phone-screen" style="border-radius:19px;">
                  <div style="padding:0.6rem;">
                    <div style="font-size:0.65rem;font-weight:700;margin-bottom:0.4rem;">Dashboard</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.3rem;margin-bottom:0.4rem;">
                      <div style="padding:0.35rem;background:rgba(156,39,255,0.1);border-radius:6px;text-align:center;">
                        <div style="font-size:0.8rem;font-weight:700;">₹45K</div>
                        <div style="font-size:0.5rem;color:var(--color-dim-text);">Revenue</div>
                      </div>
                      <div style="padding:0.35rem;background:rgba(37,211,102,0.1);border-radius:6px;text-align:center;">
                        <div style="font-size:0.8rem;font-weight:700;">284</div>
                        <div style="font-size:0.5rem;color:var(--color-dim-text);">Orders</div>
                      </div>
                    </div>
                    <div style="height:40px;background:rgba(255,255,255,0.03);border-radius:6px;margin-bottom:0.3rem;"></div>
                    <div style="height:30px;background:rgba(255,255,255,0.03);border-radius:6px;margin-bottom:0.3rem;"></div>
                    <div style="height:30px;background:rgba(255,255,255,0.03);border-radius:6px;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-phone app-phone-2">
              <div class="phone-mockup" style="width:180px;height:360px;border-radius:24px;padding:5px;">
                <div class="phone-notch" style="width:50px;height:16px;border-radius:0 0 10px 10px;margin-bottom:4px;"></div>
                <div class="phone-screen" style="border-radius:19px;">
                  <div style="padding:0.6rem;">
                    <div style="font-size:0.65rem;font-weight:700;margin-bottom:0.4rem;">Messages</div>
                    <div class="chat-bubble chat-bubble-incoming" style="font-size:0.6rem;padding:0.4rem 0.6rem;margin-bottom:0.2rem;">Hi! Need help? 👋</div>
                    <div class="chat-bubble chat-bubble-outgoing" style="font-size:0.6rem;padding:0.4rem 0.6rem;margin-bottom:0.2rem;">Yes, order status?</div>
                    <div class="chat-bubble chat-bubble-incoming" style="font-size:0.6rem;padding:0.4rem 0.6rem;">Your order #2847 is out for delivery! 📦</div>
                    <div style="margin-top:0.5rem;display:flex;gap:0.2rem;">
                      <div style="flex:1;height:28px;background:rgba(255,255,255,0.04);border-radius:14px;"></div>
                      <div style="width:28px;height:28px;background:var(--color-primary);border-radius:50%;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-badges">
              <div class="app-badge-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-white-text)"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                App Store
              </div>
              <div class="app-badge-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-white-text)"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.098l2.651 1.535c.9.524.9 1.188 0 1.712l-2.651 1.535-2.535-2.535 2.535-2.247zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/></svg>
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
