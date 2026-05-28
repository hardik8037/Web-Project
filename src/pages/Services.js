/* ═══════════════════════════════════════════════════
   BOTZO.IO — DIGITAL SERVICES DIVISION PAGE
   ═══════════════════════════════════════════════════ */

import { createFinalCTA } from '../sections/FinalCTA.js';

export function createServices() {
  const container = document.createElement('div');
  container.className = 'page services-page';

  container.innerHTML = `
    <!-- Services Hero Section -->
    <section class="section page-hero services-hero">
      <div class="container">
        <div class="section-header">
          <span class="text-overline">Design & Development Division</span>
          <h1 class="heading-hero">Futuristic Agency &<br><span class="text-gradient" style="background: linear-gradient(135deg, #00E676 0%, #B84DFF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Digital Services</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto;">
            We design, build, and market high-performance digital products. Scale your business online with our award-winning web design, mobile engineering, and performance marketing services.
          </p>
          <div class="hero-actions">
            <a href="/contact" class="btn btn-primary" style="background: linear-gradient(135deg, #00E676 0%, #00b0ff 100%); border: none;">Start a Project</a>
            <a href="/solutions" class="btn btn-ghost">View Solutions</a>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Agency Verticals Section -->
    <section class="section services-verticals" style="padding: 6rem 0;">
      <div class="container">
        <div class="services-grid">
          
          <!-- Marketing card -->
          <div class="glass-card-strong service-vertical-card" style="border-color: rgba(0, 230, 118, 0.15);">
            <div class="service-card-icon" style="background: rgba(0, 230, 118, 0.1); color: #00E676;">📈</div>
            <h3 class="heading-subsection" style="margin-bottom: 1rem;">Digital Marketing</h3>
            <p class="text-body" style="font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">
              Grow your audience and drive measurable conversions. Our performance marketing strategies combine SEO optimization, social campaigns, and data-driven lead generation.
            </p>
            <ul class="service-card-features">
              <li>🚀 SEO & Content Strategy</li>
              <li>🎯 Performance & PPC Campaigns</li>
              <li>📱 Social Media Management</li>
              <li>📊 Advanced Data Analytics</li>
            </ul>
          </div>

          <!-- Web Development card -->
          <div class="glass-card-strong service-vertical-card" style="border-color: rgba(184, 77, 255, 0.15);">
            <div class="service-card-icon" style="background: rgba(184, 77, 255, 0.1); color: #B84DFF;">💻</div>
            <h3 class="heading-subsection" style="margin-bottom: 1rem;">Web Development</h3>
            <p class="text-body" style="font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">
              Build lightweight, lightning-fast web architectures. We construct high-end landing pages, dynamic business applications, and scalable e-commerce systems tailored to your brand.
            </p>
            <ul class="service-card-features">
              <li>⚡ Static Landing Pages</li>
              <li>🏢 Custom Corporate Sites</li>
              <li>🛍️ E-commerce Architectures</li>
              <li>💻 React / NextJS Integrations</li>
            </ul>
          </div>

          <!-- Mobile App Development card -->
          <div class="glass-card-strong service-vertical-card" style="border-color: rgba(54, 197, 240, 0.15);">
            <div class="service-card-icon" style="background: rgba(54, 197, 240, 0.1); color: #36C5F0;">📱</div>
            <h3 class="heading-subsection" style="margin-bottom: 1rem;">Mobile App Dev</h3>
            <p class="text-body" style="font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">
              Bring your ideas to the palm of your customer's hand. We develop cross-platform native iOS and Android apps with beautiful micro-interactions and smooth API integrations.
            </p>
            <ul class="service-card-features">
              <li>🍏 Native iOS Applications</li>
              <li>🤖 Android Mobile Engineering</li>
              <li>🔄 Cross-Platform Flutter/React Native</li>
              <li>✨ Fluid UI/UX Prototyping</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Live Performance Showcase Mockup -->
    <section class="section services-showcase" style="padding: 6rem 0;">
      <div class="container">
        <div class="services-showcase-grid">
          <div>
            <span class="text-overline">Proven Performance</span>
            <h2 class="heading-section" style="margin-bottom: 1.5rem;">SaaS Analytics &<br><span class="text-gradient" style="background: linear-gradient(135deg, #00E676 0%, #36c5f0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Growth Dashboards</span></h2>
            <p class="text-body" style="margin-bottom: 2rem;">
              We don't just build; we optimize. Take a look at a real campaign metrics profile. We design integrated SEO tracking models and social media marketing automation nodes that keep your lead funnel filled 24/7.
            </p>
            <div class="showcase-stats">
              <div>
                <div class="showcase-stat-value" style="color: #00E676;">+240%</div>
                <div class="showcase-stat-label">Organic Search Growth</div>
              </div>
              <div>
                <div class="showcase-stat-value" style="color: #B84DFF;">4.2x</div>
                <div class="showcase-stat-label">Avg. Campaign ROAS</div>
              </div>
            </div>
          </div>
          <div class="glass-card-strong" style="padding: 2rem; border-radius: var(--radius-xl); overflow: hidden;">
            <div class="analytics-chart-header">
              <strong>Search Traffic Analysis</strong>
              <span class="analytics-badge" style="color: #00E676; background: rgba(0,230,118,0.1);">Live Report</span>
            </div>
            <div class="chart-bars">
              <div class="chart-bar" style="height: 30%;"></div>
              <div class="chart-bar" style="height: 45%;"></div>
              <div class="chart-bar" style="height: 38%;"></div>
              <div class="chart-bar" style="height: 60%;"></div>
              <div class="chart-bar highlight" style="height: 78%; background: linear-gradient(to top, rgba(0,230,118,0.2), #00E676);"></div>
              <div class="chart-bar highlight" style="height: 95%; background: linear-gradient(to top, rgba(0,230,118,0.2), #00E676);"></div>
            </div>
            <div class="chart-labels">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Append Final CTA
  container.appendChild(createFinalCTA());

  return container;
}
