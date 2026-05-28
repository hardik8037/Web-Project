/* ═══════════════════════════════════════════════════
   LIVE CHATBOT & CRM DEMO SECTION
   Authentic WhatsApp-style interactive experience.
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
        <!-- Phone Mockup — Authentic WhatsApp -->
        <div class="demo-phone-wrapper reveal-left">
          <div class="phone-mockup wa-phone">
            <div class="phone-notch"></div>
            <div class="phone-screen wa-screen">
              <!-- WhatsApp Header Bar -->
              <div class="wa-topbar">
                <div class="wa-topbar-left">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                  <div class="wa-avatar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  </div>
                  <div class="wa-contact-info">
                    <div class="wa-contact-name">Botzo.io</div>
                    <div class="wa-contact-status">online</div>
                  </div>
                </div>
                <div class="wa-topbar-right">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#aaa"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                </div>
              </div>

              <!-- Chat Messages Area (WhatsApp wallpaper) -->
              <div class="wa-chat-body" id="chat-messages">
                <!-- Messages injected by ChatbotDemo JS -->
              </div>

              <!-- Quick Replies Footer -->
              <div class="wa-quick-footer" id="quick-replies">
                <!-- Quick reply buttons injected by ChatbotDemo JS -->
              </div>

              <!-- WhatsApp Input Bar -->
              <div class="wa-input-bar">
                <div class="wa-input-capsule">
                  <div class="wa-input-icons-left">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  </div>
                  <div class="wa-input-field">Type a message</div>
                  <div class="wa-input-icons-right">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8696a0" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                  </div>
                </div>
                <div class="wa-mic-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
                </div>
              </div>
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
