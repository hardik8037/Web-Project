/* ═══════════════════════════════════════════════════
   CINEMATIC HERO SECTION
   CSS-recreated platform UI panels (no screenshots)
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

    <div class="container-wide hero-content">
      <div class="hero-text-block">
        <div class="hero-overline">
          <span class="overline-badge">
            <span class="overline-dot"></span>
            AI-Powered Business Automation
          </span>
        </div>

        <h1 class="heading-hero hero-title">
          Automate Everything.<br class="hide-mobile">
          <span class="text-gradient">Communicate Everywhere.</span><br class="hide-mobile">
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

      <!-- ═══ CINEMATIC CSS-RECREATED DASHBOARDS ═══ -->
      <div class="hero-dashboards">
        <!-- Main Dashboard — Analytics Overview -->
        <div class="hero-dashboard hero-dashboard-main float">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.7rem;color:var(--color-dim-text);">Botzo.io Dashboard</span>
            </div>
            <div class="dashboard-content">
              <!-- Sidebar Quick Links -->
              <div class="hero-dash-layout">
                <div class="hero-dash-sidebar">
                  <div class="hero-dash-sidebar-item active">
                    <span class="hero-dash-sidebar-icon">📊</span>
                    <span>Dashboard</span>
                  </div>
                  <div class="hero-dash-sidebar-item">
                    <span class="hero-dash-sidebar-icon">💬</span>
                    <span>Chats</span>
                  </div>
                  <div class="hero-dash-sidebar-item">
                    <span class="hero-dash-sidebar-icon">📋</span>
                    <span>Contacts</span>
                  </div>
                  <div class="hero-dash-sidebar-item">
                    <span class="hero-dash-sidebar-icon">📢</span>
                    <span>Campaigns</span>
                  </div>
                  <div class="hero-dash-sidebar-item">
                    <span class="hero-dash-sidebar-icon">🤖</span>
                    <span>Bots</span>
                  </div>
                </div>
                <div class="hero-dash-main">
                  <!-- Top Stats Row -->
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
                  <!-- Contacts Chart -->
                  <div class="mini-chart">
                    <div class="mini-chart-header">
                      <span style="font-size:0.72rem;font-weight:600;color:var(--color-white-text);">Contacts Overview</span>
                      <span style="font-size:0.65rem;color:var(--color-green);">+24.5%</span>
                    </div>
                    <svg viewBox="0 0 200 50" class="mini-chart-svg">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#25D366" stop-opacity="0.3"/>
                          <stop offset="100%" stop-color="#25D366" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0 45 L20 38 L40 42 L60 30 L80 35 L100 22 L120 28 L140 15 L160 20 L180 10 L200 5" fill="none" stroke="#25D366" stroke-width="2"/>
                      <path d="M0 45 L20 38 L40 42 L60 30 L80 35 L100 22 L120 28 L140 15 L160 20 L180 10 L200 5 L200 50 L0 50 Z" fill="url(#chartGrad)"/>
                    </svg>
                  </div>
                  <!-- Subscription Badge -->
                  <div class="hero-dash-subscription">
                    <span class="hero-dash-plan-badge">Growth Plan</span>
                    <span style="font-size:0.6rem;color:var(--color-dim-text);">Active · 28 days left</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- WhatsApp Inbox Float — Conversation List -->
        <div class="hero-dashboard hero-dashboard-chat float-delayed">
          <div class="dashboard-frame" style="max-width:230px;">
            <div class="dashboard-titlebar" style="padding:0.5rem 0.75rem;">
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <div style="width:22px;height:22px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </div>
                <span style="font-size:0.72rem;font-weight:600;">Chats</span>
                <span class="status-badge status-badge-active" style="margin-left:auto;font-size:0.55rem;">247</span>
              </div>
            </div>
            <div class="dashboard-content" style="padding:0.5rem 0.6rem;">
              <!-- Chat list items -->
              <div class="hero-chat-item active">
                <div class="dash-avatar" style="background:#25D366;width:26px;height:26px;font-size:0.55rem;">R</div>
                <div style="flex:1;min-width:0;">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:0.7rem;font-weight:600;color:var(--color-white-text);">Rahul Sharma</span>
                    <span style="font-size:0.55rem;color:var(--color-green);">2m</span>
                  </div>
                  <div style="font-size:0.6rem;color:var(--color-dim-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Thanks for the quick response! 🙏</div>
                </div>
              </div>
              <div class="hero-chat-item">
                <div class="dash-avatar" style="background:#9C27FF;width:26px;height:26px;font-size:0.55rem;">P</div>
                <div style="flex:1;min-width:0;">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:0.7rem;font-weight:600;color:var(--color-white-text);">Priya Patel</span>
                    <span style="font-size:0.55rem;color:var(--color-dim-text);">5m</span>
                  </div>
                  <div style="font-size:0.6rem;color:var(--color-dim-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">I'd like to book an appointment</div>
                </div>
              </div>
              <div class="hero-chat-item">
                <div class="dash-avatar" style="background:#0088FF;width:26px;height:26px;font-size:0.55rem;">A</div>
                <div style="flex:1;min-width:0;">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:0.7rem;font-weight:600;color:var(--color-white-text);">Amit Singh</span>
                    <span style="font-size:0.55rem;color:var(--color-dim-text);">12m</span>
                  </div>
                  <div style="font-size:0.6rem;color:var(--color-dim-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">What are your pricing plans?</div>
                </div>
              </div>
              <div class="hero-chat-item">
                <div class="dash-avatar" style="background:#FF6B35;width:26px;height:26px;font-size:0.55rem;">N</div>
                <div style="flex:1;min-width:0;">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:0.7rem;font-weight:600;color:var(--color-white-text);">Neha Gupta</span>
                    <span style="font-size:0.55rem;color:var(--color-dim-text);">18m</span>
                  </div>
                  <div style="font-size:0.6rem;color:var(--color-dim-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Can I get a demo of the platform?</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pipeline Mini Card -->
        <div class="hero-dashboard hero-dashboard-crm float-slow">
          <div class="glass-card-strong" style="padding:0.8rem;max-width:195px;">
            <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-primary-light);font-weight:600;margin-bottom:0.4rem;display:flex;align-items:center;justify-content:space-between;">
              <span>Lead Pipeline</span>
              <span style="color:var(--color-green);text-transform:none;letter-spacing:0;">87 new</span>
            </div>
            <div class="pipeline-card" style="margin-bottom:0.3rem;">
              <div class="pipeline-card-name">Vikram Enterprises</div>
              <div class="pipeline-card-value">New · <span style="color:var(--color-green)">Growth Plan</span></div>
            </div>
            <div class="pipeline-card" style="margin-bottom:0.3rem;">
              <div class="pipeline-card-name">Rohit Malhotra</div>
              <div class="pipeline-card-value">Follow Up · <span style="color:var(--color-orange)">Tomorrow</span></div>
            </div>
            <div class="pipeline-card">
              <div class="pipeline-card-name">Deepak Auto Group</div>
              <div class="pipeline-card-value">Qualified · <span style="color:var(--color-primary-light)">Proposal</span></div>
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
          <div class="stat-value counter-value" data-target="500" data-suffix="+">500+</div>
          <div class="stat-label">Integrations</div>
        </div>
      </div>
    </div>
  `;
  return section;
}
