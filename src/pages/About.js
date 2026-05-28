/* ═══════════════════════════════════════════════════
   BOTZO.IO — ABOUT US PAGE
   ═══════════════════════════════════════════════════ */

export function createAbout() {
  const container = document.createElement('div');
  container.className = 'page about-page';

  container.innerHTML = `
    <!-- About Hero -->
    <section class="section page-hero about-hero">
      <div class="container">
        <div class="section-header">
          <span class="text-overline">Our Vision</span>
          <h1 class="heading-hero">Pioneering the Future of<br><span class="text-gradient">Business Automation</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto;">
            We believe that business operations should be frictionless, communication should be instant, and marketing should adapt automatically.
          </p>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Core Philosophy -->
    <section class="section about-philosophy" style="padding: 6rem 0;">
      <div class="container">
        <div class="about-philosophy-grid">
          <div>
            <span class="text-overline">Core Principles</span>
            <h2 class="heading-section" style="margin-bottom: 1.5rem;">Engineering the Next Era of<br><span class="text-gradient">Conversational SaaS</span></h2>
            <p class="text-body" style="margin-bottom: 1.5rem;">
              Botzo.io started as a simple WhatsApp integration and has grown into a multi-channel operational hub. Our engineering team builds lightweight, reliable messaging integrations that handle millions of requests every day.
            </p>
            <p class="text-body">
              By combining our robust AI Automation Platform with elite custom Web/App Development and Performance Marketing services, we provide a unified growth engine for modern enterprises.
            </p>
          </div>
          <div class="glass-card-strong" style="padding: 2.5rem; border-radius: var(--radius-xl); border-color: rgba(184, 77, 255, 0.15);">
            <h3 class="heading-subsection" style="margin-bottom: 1.2rem; font-size: 1.25rem;">Our Core Commitments</h3>
            <ul class="about-commitments">
              <li>⚡ <strong>99.9% API Uptime</strong> — Fast and uninterrupted message deliveries.</li>
              <li>🔒 <strong>Enterprise Encryption</strong> — High compliance client data protection.</li>
              <li>🤖 <strong>Continual AI Growth</strong> — Upgrading natural language understanding algorithms.</li>
              <li>🌐 <strong>Omnichannel First</strong> — Unified communication across every platform.</li>
              <li>🚀 <strong>Growth-Driven Design</strong> — Every product decision is optimized for customer ROI.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Stats Section -->
    <section class="section about-stats-section" style="padding: 6rem 0;">
      <div class="container">
        <div class="section-header" style="margin-bottom: 3rem;">
          <span class="text-overline">Impact Metrics</span>
          <h2 class="heading-section">Numbers That Speak<br><span class="text-gradient">For Themselves</span></h2>
        </div>
        <div class="about-stats-row">
          <div class="about-stat-card glass-card-strong">
            <div class="about-stat-value">50M+</div>
            <div class="about-stat-label">Messages Processed Monthly</div>
          </div>
          <div class="about-stat-card glass-card-strong">
            <div class="about-stat-value">2,500+</div>
            <div class="about-stat-label">Active Business Clients</div>
          </div>
          <div class="about-stat-card glass-card-strong">
            <div class="about-stat-value">99.9%</div>
            <div class="about-stat-label">Platform Uptime SLA</div>
          </div>
          <div class="about-stat-card glass-card-strong">
            <div class="about-stat-value">8+</div>
            <div class="about-stat-label">Industries Served</div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Timeline Section -->
    <section class="section about-timeline-section" style="padding: 6rem 0;">
      <div class="container">
        <div class="section-header" style="margin-bottom: 4rem;">
          <span class="text-overline">Our Journey</span>
          <h2 class="heading-section">The Botzo.io <span class="text-gradient">Timeline</span></h2>
        </div>
        <div class="about-timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <div class="timeline-year">2021</div>
              <div class="timeline-title">The Spark — WhatsApp Chatbot MVP</div>
              <div class="timeline-desc">Built the first auto-reply system for a single client. 200 messages per day. One developer, one dream.</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <div class="timeline-year">2022</div>
              <div class="timeline-title">Official WhatsApp API Partnership</div>
              <div class="timeline-desc">Became a registered WhatsApp Business Solution Provider. Launched bulk messaging, team inbox, and CRM modules.</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <div class="timeline-year">2023</div>
              <div class="timeline-title">Omnichannel Expansion</div>
              <div class="timeline-desc">Integrated Instagram, Facebook, and RCS. Launched the visual workflow builder and no-code automation engine.</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <div class="timeline-year">2024</div>
              <div class="timeline-title">Digital Agency & Commerce Launch</div>
              <div class="timeline-desc">Expanded into performance marketing, web development, and mobile app engineering. Added in-chat payments and QR ticketing.</div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
              <div class="timeline-year">2025</div>
              <div class="timeline-title">AI Intelligence Layer</div>
              <div class="timeline-desc">Deployed NLP-powered intent recognition, smart auto-routing, and predictive campaign analytics. Crossed 50M monthly messages.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
