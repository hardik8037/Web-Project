/* ═══════════════════════════════════════════════════
   LIVE CHATBOT & CRM DEMO SECTION
   ═══════════════════════════════════════════════════ */

export function createLiveDemo() {
  const section = document.createElement('section');
  section.id = 'live-demo';
  section.className = 'section demo-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="text-overline">Interactive Experience</span>
        <h2 class="heading-section">See the Magic <span class="text-gradient">In Action</span></h2>
        <p class="text-body-lg">Click the quick replies in the chatbot and watch the CRM dashboard react in real-time.</p>
      </div>

      <div class="demo-layout">
        <!-- Phone Mockup -->
        <div class="demo-phone-wrapper reveal-left">
          <div class="phone-mockup">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <div class="wa-header">
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  <div>
                    <div style="font-size:0.8rem;font-weight:600;">Botzo.io</div>
                    <div style="font-size:0.6rem;color:var(--color-green);">● Online</div>
                  </div>
                </div>
              </div>
              <div class="wa-chat-area" id="chat-messages"></div>
              <div class="wa-quick-replies" id="quick-replies"></div>
            </div>
          </div>
          <div class="phone-glow"></div>
        </div>

        <!-- CRM Dashboard -->
        <div class="demo-crm-wrapper reveal-right">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">CRM Dashboard</span>
            </div>
            <div class="dashboard-content">
              <!-- KPIs -->
              <div class="demo-kpis">
                <div class="kpi-card">
                  <div class="kpi-value" id="kpi-leads">127</div>
                  <div class="kpi-label">Total Leads</div>
                  <div class="kpi-change kpi-change-positive">+12% ↑</div>
                </div>
                <div class="kpi-card">
                  <div class="kpi-value" id="kpi-response">1.2s</div>
                  <div class="kpi-label">Avg Response</div>
                  <div class="kpi-change kpi-change-positive">−40% ↓</div>
                </div>
                <div class="kpi-card">
                  <div class="kpi-value" id="kpi-conversion">23%</div>
                  <div class="kpi-label">Conversion</div>
                  <div class="kpi-change kpi-change-positive">+8% ↑</div>
                </div>
              </div>

              <!-- Pipeline -->
              <div class="demo-pipeline" id="crm-pipeline">
                <div class="pipeline-column" data-stage="new">
                  <div class="pipeline-stage">New Leads</div>
                  <div class="pipeline-cards">
                    <div class="pipeline-card">
                      <div class="pipeline-card-name">Suresh Kumar</div>
                      <div class="pipeline-card-value">WhatsApp · ₹50K</div>
                    </div>
                  </div>
                </div>
                <div class="pipeline-column" data-stage="interested">
                  <div class="pipeline-stage" style="border-color:var(--color-primary);">Interested</div>
                  <div class="pipeline-cards"></div>
                </div>
                <div class="pipeline-column" data-stage="qualified">
                  <div class="pipeline-stage" style="border-color:var(--color-green);">Qualified</div>
                  <div class="pipeline-cards"></div>
                </div>
              </div>

              <!-- Activity Feed -->
              <div class="demo-activity">
                <div style="font-size:0.72rem;font-weight:600;color:var(--color-white-text);margin-bottom:0.5rem;">Activity Feed</div>
                <div id="activity-feed">
                  <div class="activity-item">
                    <div class="activity-dot"></div>
                    <div class="activity-content">
                      <span class="activity-text">Suresh Kumar added via WhatsApp</span>
                      <span class="activity-time">3m ago</span>
                    </div>
                  </div>
                  <div class="activity-item">
                    <div class="activity-dot"></div>
                    <div class="activity-content">
                      <span class="activity-text">Auto-reply sent to Meera</span>
                      <span class="activity-time">5m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
