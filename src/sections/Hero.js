/* ═══════════════════════════════════════════════════
   CINEMATIC HERO SECTION
   ═══════════════════════════════════════════════════ */

export function createHero() {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero-section';
  section.innerHTML = `
    <!-- Three.js Canvas Container -->
    <div id="hero-particles" class="hero-particles-container"></div>

    <!-- Ambient Gradient Overlays -->
    <div class="hero-ambient">
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-text-block">
        <div class="hero-overline">
          <span class="overline-badge">
            <span class="overline-dot"></span>
            AI-Powered Business Automation
          </span>
        </div>

        <h1 class="heading-hero hero-title">
          Automate Everything.<br>
          <span class="text-gradient">Communicate Everywhere.</span><br>
          Grow Without Limits.
        </h1>

        <p class="text-body-lg hero-subtitle">
          The complete business automation ecosystem — WhatsApp API, omnichannel messaging, CRM, workflow automation, and full-stack digital services. All in one platform.
        </p>

        <div class="hero-cta-group">
          <a href="#demo" class="btn btn-primary btn-lg">
            Start Free Trial
            <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#demo" class="btn btn-ghost btn-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/>
              <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
            </svg>
            Watch Demo
          </a>
        </div>
      </div>

      <!-- Floating Dashboard Visuals -->
      <div class="hero-dashboards">
        <!-- Main Dashboard -->
        <div class="hero-dashboard hero-dashboard-main float">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.7rem;color:var(--color-dim-text);">Botzo.io Dashboard</span>
            </div>
            <div class="dashboard-content">
              <div class="mini-stats-row">
                <div class="mini-stat">
                  <div class="mini-stat-value" style="color:var(--color-green);">1,247</div>
                  <div class="mini-stat-label">Active Chats</div>
                </div>
                <div class="mini-stat">
                  <div class="mini-stat-value" style="color:var(--color-primary-light);">₹4.2L</div>
                  <div class="mini-stat-label">Revenue Today</div>
                </div>
                <div class="mini-stat">
                  <div class="mini-stat-value" style="color:#0088FF;">98.7%</div>
                  <div class="mini-stat-label">CSAT Score</div>
                </div>
              </div>
              <div class="mini-chart">
                <div class="mini-chart-header">
                  <span style="font-size:0.72rem;font-weight:600;color:var(--color-white-text);">Message Volume</span>
                  <span style="font-size:0.65rem;color:var(--color-green);">+24.5%</span>
                </div>
                <svg viewBox="0 0 200 50" class="mini-chart-svg">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#9C27FF" stop-opacity="0.3"/>
                      <stop offset="100%" stop-color="#9C27FF" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 45 L20 38 L40 42 L60 30 L80 35 L100 22 L120 28 L140 15 L160 20 L180 10 L200 5" fill="none" stroke="#9C27FF" stroke-width="2"/>
                  <path d="M0 45 L20 38 L40 42 L60 30 L80 35 L100 22 L120 28 L140 15 L160 20 L180 10 L200 5 L200 50 L0 50 Z" fill="url(#chartGrad)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- WhatsApp Chat Float -->
        <div class="hero-dashboard hero-dashboard-chat float-delayed">
          <div class="dashboard-frame" style="max-width:220px;">
            <div class="dashboard-titlebar" style="padding:0.5rem 0.75rem;">
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <div style="width:24px;height:24px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.609.609l4.458-1.495A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.29 0-4.403-.762-6.102-2.048l-.427-.324-2.636.884.884-2.636-.324-.427A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                </div>
                <span style="font-size:0.72rem;font-weight:600;">WhatsApp</span>
              </div>
            </div>
            <div class="dashboard-content" style="padding:0.75rem;">
              <div style="display:flex;flex-direction:column;gap:0.4rem;">
                <div class="chat-bubble chat-bubble-bot" style="font-size:0.75rem;">Hi! 👋 Welcome to Botzo. How can I help?</div>
                <div class="chat-bubble chat-bubble-outgoing" style="font-size:0.75rem;">I need pricing info</div>
                <div class="chat-bubble chat-bubble-bot" style="font-size:0.75rem;">Great! Plans start at ₹999/mo 🚀</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CRM Mini Card -->
        <div class="hero-dashboard hero-dashboard-crm float-slow">
          <div class="glass-card-strong" style="padding:1rem;max-width:180px;">
            <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-primary-light);font-weight:600;margin-bottom:0.5rem;">CRM Pipeline</div>
            <div class="pipeline-card" style="margin-bottom:0.35rem;">
              <div class="pipeline-card-name">Acme Corp</div>
              <div class="pipeline-card-value">₹2.5L · <span style="color:var(--color-green)">Qualified</span></div>
            </div>
            <div class="pipeline-card">
              <div class="pipeline-card-name">TechStart Inc</div>
              <div class="pipeline-card-value">₹1.8L · <span style="color:var(--color-orange)">Proposal</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Bar -->
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-value counter-value" data-target="50000" data-suffix="+">50,000+</div>
          <div class="stat-label">Businesses Trust Us</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-value counter-value" data-target="10" data-suffix="M+">10M+</div>
          <div class="stat-label">Messages per Day</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-value">99.9%</div>
          <div class="stat-label">Platform Uptime</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-value counter-value" data-target="150" data-suffix="+">150+</div>
          <div class="stat-label">Integrations</div>
        </div>
      </div>
    </div>
  `;
  return section;
}
