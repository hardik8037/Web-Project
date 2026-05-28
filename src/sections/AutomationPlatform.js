/* ═══════════════════════════════════════════════════
   AI AUTOMATION PLATFORM — CSS-RECREATED DASHBOARDS
   Inspired by real Botzo.io platform, branded correctly
   ═══════════════════════════════════════════════════ */

const PLATFORM_TABS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp API',
    icon: '💬',
    title: 'Official WhatsApp Business API',
    desc: 'Send & receive messages at scale with verified business profile, templates, and automated responses.',
    dashboard: `
      <div class="dash-whatsapp">
        <div class="dash-sidebar">
          <div class="dash-sidebar-header">
            <span style="font-weight:600;font-size:0.8rem;">Conversations</span>
            <span class="status-badge status-badge-active">247 active</span>
          </div>
          <div class="dash-contact active">
            <div class="dash-avatar" style="background:#25D366;">R</div>
            <div class="dash-contact-info">
              <div class="dash-contact-name">Rahul Sharma</div>
              <div class="dash-contact-msg">Thanks for the quick response!</div>
            </div>
            <div class="dash-contact-time">2m</div>
          </div>
          <div class="dash-contact">
            <div class="dash-avatar" style="background:#9C27FF;">P</div>
            <div class="dash-contact-info">
              <div class="dash-contact-name">Priya Patel</div>
              <div class="dash-contact-msg">I'd like to book an appointment</div>
            </div>
            <div class="dash-contact-time">5m</div>
          </div>
          <div class="dash-contact">
            <div class="dash-avatar" style="background:#0088FF;">A</div>
            <div class="dash-contact-info">
              <div class="dash-contact-name">Amit Singh</div>
              <div class="dash-contact-msg">What are your pricing plans?</div>
            </div>
            <div class="dash-contact-time">12m</div>
          </div>
        </div>
        <div class="dash-chat-main">
          <div class="dash-chat-header">
            <div class="dash-avatar" style="background:#25D366;width:28px;height:28px;font-size:0.65rem;">R</div>
            <div>
              <div style="font-size:0.78rem;font-weight:600;">Rahul Sharma</div>
              <div style="font-size:0.65rem;color:var(--color-green);">Online</div>
            </div>
          </div>
          <div class="dash-chat-body">
            <div class="chat-bubble chat-bubble-incoming" style="font-size:0.78rem;">Hi, I saw your ad on Instagram. Can you tell me more about your services?</div>
            <div class="chat-bubble chat-bubble-outgoing" style="font-size:0.78rem;">Hello Rahul! 👋 Of course! We offer complete business automation including WhatsApp API, CRM, and workflow builder.</div>
            <div class="chat-bubble chat-bubble-incoming" style="font-size:0.78rem;">Thanks for the quick response! What's the pricing?</div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'omnichannel',
    label: 'Omnichannel',
    icon: '🔗',
    title: 'Omnichannel Communication Hub',
    desc: 'Unify WhatsApp, Instagram, Facebook, RCS, and more into a single conversation stream.',
    dashboard: `
      <div class="dash-omni">
        <div class="dash-omni-channels">
          <div class="dash-omni-channel active" style="--ch-color:#25D366;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
            <span>WhatsApp</span>
            <span class="dash-omni-count">142</span>
          </div>
          <div class="dash-omni-channel" style="--ch-color:#E4405F;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4405F"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#E4405F" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="#E4405F" stroke-width="2"/></svg>
            <span>Instagram</span>
            <span class="dash-omni-count">58</span>
          </div>
          <div class="dash-omni-channel" style="--ch-color:#1877F2;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span>Facebook</span>
            <span class="dash-omni-count">34</span>
          </div>
          <div class="dash-omni-channel" style="--ch-color:#0088FF;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0088FF"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="#0088FF" stroke-width="1.5"/><path d="M3 7l9 6 9-6" fill="none" stroke="#0088FF" stroke-width="1.5"/></svg>
            <span>RCS</span>
            <span class="dash-omni-count">21</span>
          </div>
        </div>
        <div class="dash-omni-feed">
          <div class="dash-omni-msg">
            <div class="dash-avatar" style="background:#25D366;width:24px;height:24px;font-size:0.55rem;">R</div>
            <div class="dash-omni-msg-content">
              <div class="dash-omni-msg-header">
                <span class="dash-omni-msg-name">Rahul via WhatsApp</span>
                <span class="dash-omni-msg-time">2m ago</span>
              </div>
              <div class="dash-omni-msg-text">I need pricing info for the Growth plan</div>
            </div>
          </div>
          <div class="dash-omni-msg">
            <div class="dash-avatar" style="background:#E4405F;width:24px;height:24px;font-size:0.55rem;">S</div>
            <div class="dash-omni-msg-content">
              <div class="dash-omni-msg-header">
                <span class="dash-omni-msg-name">Sneha via Instagram</span>
                <span class="dash-omni-msg-time">5m ago</span>
              </div>
              <div class="dash-omni-msg-text">Love your product! Can I get a demo?</div>
            </div>
          </div>
          <div class="dash-omni-msg">
            <div class="dash-avatar" style="background:#1877F2;width:24px;height:24px;font-size:0.55rem;">V</div>
            <div class="dash-omni-msg-content">
              <div class="dash-omni-msg-header">
                <span class="dash-omni-msg-name">Vikram via Facebook</span>
                <span class="dash-omni-msg-time">8m ago</span>
              </div>
              <div class="dash-omni-msg-text">How do I integrate with Shopify?</div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'inbox',
    label: 'Team Inbox',
    icon: '📥',
    title: 'Unified Team Inbox',
    desc: 'Assign conversations, collaborate with team members, use canned responses, and never miss a lead.',
    dashboard: `
      <div class="dash-inbox">
        <div class="dash-inbox-toolbar">
          <div class="dash-inbox-filter active">All <span class="dash-inbox-badge">255</span></div>
          <div class="dash-inbox-filter">Unassigned <span class="dash-inbox-badge">23</span></div>
          <div class="dash-inbox-filter">My Chats <span class="dash-inbox-badge">12</span></div>
        </div>
        <div class="dash-inbox-list">
          <div class="dash-inbox-item priority-high">
            <div class="dash-avatar" style="background:var(--color-red);width:28px;height:28px;font-size:0.6rem;">A</div>
            <div class="dash-inbox-item-content">
              <div class="dash-inbox-item-top">
                <span class="dash-inbox-item-name">Arjun Mehta</span>
                <span class="status-badge status-badge-pending">Urgent</span>
              </div>
              <div class="dash-inbox-item-msg">Payment issue — needs immediate help</div>
              <div class="dash-inbox-item-meta">
                <span>👤 Assigned: Priya</span>
                <span>🏷️ Billing</span>
              </div>
            </div>
          </div>
          <div class="dash-inbox-item">
            <div class="dash-avatar" style="background:#25D366;width:28px;height:28px;font-size:0.6rem;">M</div>
            <div class="dash-inbox-item-content">
              <div class="dash-inbox-item-top">
                <span class="dash-inbox-item-name">Meera Joshi</span>
                <span class="status-badge status-badge-active">Active</span>
              </div>
              <div class="dash-inbox-item-msg">Interested in Enterprise plan features</div>
              <div class="dash-inbox-item-meta">
                <span>👤 Assigned: Raj</span>
                <span>🏷️ Sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'pipeline',
    label: 'Pipeline',
    icon: '📋',
    title: 'Lead Pipeline Board',
    desc: 'Manage leads with a visual Kanban board. Track every prospect from first contact to conversion.',
    dashboard: `
      <div class="dash-pipeline-board">
        <div class="pipeline-kanban">
          <div class="kanban-col">
            <div class="kanban-col-header" style="border-top-color:#25D366;">
              <span class="kanban-col-title">New</span>
              <span class="kanban-col-count">87</span>
            </div>
            <div class="kanban-card">
              <div class="kanban-card-phone">Vikram Enterprises</div>
              <div class="kanban-card-meta">
                <span>📅 Today, 3:00 PM</span>
                <span>💬 WhatsApp</span>
              </div>
              <div class="kanban-card-note">Interested in Growth plan — wants live demo</div>
              <div class="kanban-card-actions">
                <button class="kanban-btn kanban-btn-move">Move Chat</button>
                <button class="kanban-btn kanban-btn-open">Open Chat</button>
              </div>
            </div>
            <div class="kanban-card">
              <div class="kanban-card-phone">Ananya Reddy</div>
              <div class="kanban-card-meta">
                <span>📅 Yesterday</span>
                <span>📸 Instagram</span>
              </div>
              <div class="kanban-card-note">Asked about API integration for Shopify</div>
              <div class="kanban-card-actions">
                <button class="kanban-btn kanban-btn-move">Move Chat</button>
                <button class="kanban-btn kanban-btn-open">Open Chat</button>
              </div>
            </div>
          </div>
          <div class="kanban-col">
            <div class="kanban-col-header" style="border-top-color:#FF6B35;">
              <span class="kanban-col-title">Follow Up</span>
              <span class="kanban-col-count">22</span>
            </div>
            <div class="kanban-card">
              <div class="kanban-card-phone">Rohit Malhotra</div>
              <div class="kanban-card-meta">
                <span>📅 Tomorrow, 11 AM</span>
              </div>
              <div class="kanban-card-note">Requested pricing comparison — follow up scheduled</div>
              <div class="kanban-card-actions">
                <button class="kanban-btn kanban-btn-move">Move Chat</button>
                <button class="kanban-btn kanban-btn-open">Open Chat</button>
              </div>
            </div>
          </div>
          <div class="kanban-col">
            <div class="kanban-col-header" style="border-top-color:#0088FF;">
              <span class="kanban-col-title">Demo Scheduled</span>
              <span class="kanban-col-count">14</span>
            </div>
            <div class="kanban-card">
              <div class="kanban-card-phone">Sunita Pharma Ltd</div>
              <div class="kanban-card-meta">
                <span>📅 Wed, 4:30 PM</span>
              </div>
              <div class="kanban-card-note">Enterprise plan demo — 3 team members joining</div>
              <div class="kanban-card-actions">
                <button class="kanban-btn kanban-btn-move">Move Chat</button>
                <button class="kanban-btn kanban-btn-open">Open Chat</button>
              </div>
            </div>
          </div>
          <div class="kanban-col">
            <div class="kanban-col-header" style="border-top-color:#9C27FF;">
              <span class="kanban-col-title">Qualified</span>
              <span class="kanban-col-count">18</span>
            </div>
            <div class="kanban-card">
              <div class="kanban-card-phone">Deepak Auto Group</div>
              <div class="kanban-card-meta">
                <span>📅 Closing soon</span>
              </div>
              <div class="kanban-card-note">Ready to onboard — sending proposal today</div>
              <div class="kanban-card-actions">
                <button class="kanban-btn kanban-btn-move">Move Chat</button>
                <button class="kanban-btn kanban-btn-open">Open Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: '⚡',
    title: 'Visual Workflow Builder',
    desc: 'Build powerful automation flows with drag-and-drop — no coding required.',
    dashboard: `
      <div class="dash-workflow">
        <div class="workflow-canvas">
          <div class="workflow-node workflow-node-trigger">
            <div class="workflow-node-icon">📩</div>
            <div class="workflow-node-label">New Message</div>
            <div class="workflow-node-type">Trigger</div>
          </div>
          <div class="workflow-connector workflow-connector-animated"></div>
          <div class="workflow-node workflow-node-condition">
            <div class="workflow-node-icon">🤖</div>
            <div class="workflow-node-label">Trained AI Bot</div>
            <div class="workflow-node-type">AI Agent</div>
          </div>
          <div class="workflow-connector workflow-connector-animated"></div>
          <div class="workflow-node workflow-node-condition" style="border-color:rgba(0,136,255,0.3);background:rgba(0,136,255,0.06);">
            <div class="workflow-node-icon">❓</div>
            <div class="workflow-node-label">Send Question</div>
            <div class="workflow-node-type">Collect Data</div>
          </div>
          <div class="workflow-branch">
            <div class="workflow-branch-yes">
              <div class="workflow-connector-short workflow-connector-animated"></div>
              <div class="workflow-node workflow-node-action" style="border-color:rgba(37,211,102,0.3);">
                <div class="workflow-node-icon">⏳</div>
                <div class="workflow-node-label">Smart Wait</div>
                <div class="workflow-node-type">Delay</div>
              </div>
            </div>
            <div class="workflow-branch-no">
              <div class="workflow-connector-short workflow-connector-animated"></div>
              <div class="workflow-node workflow-node-action" style="border-color:rgba(0,136,255,0.3);">
                <div class="workflow-node-icon">💬</div>
                <div class="workflow-node-label">Send Reply</div>
                <div class="workflow-node-type">Action</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    icon: '📢',
    title: 'Bulk Campaign Engine',
    desc: 'Launch WhatsApp & RCS campaigns to thousands with templates, scheduling, and analytics.',
    dashboard: `
      <div class="dash-campaign">
        <div class="dash-campaign-header">
          <div>
            <div style="font-size:0.78rem;font-weight:600;color:var(--color-white-text);">Diwali Sale Campaign</div>
            <div style="font-size:0.65rem;color:var(--color-green);">● Live — Sending</div>
          </div>
          <div class="status-badge status-badge-active">WhatsApp</div>
        </div>
        <div class="dash-campaign-stats">
          <div class="kpi-card">
            <div class="kpi-value" style="font-size:1.3rem;">24,500</div>
            <div class="kpi-label">Sent</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-value" style="font-size:1.3rem;color:var(--color-green);">22,180</div>
            <div class="kpi-label">Delivered</div>
            <div class="kpi-change kpi-change-positive">90.5%</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-value" style="font-size:1.3rem;color:var(--color-primary-light);">8,450</div>
            <div class="kpi-label">Read</div>
            <div class="kpi-change kpi-change-positive">34.5%</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-value" style="font-size:1.3rem;color:var(--color-blue);">2,890</div>
            <div class="kpi-label">Clicked</div>
            <div class="kpi-change kpi-change-positive">11.8%</div>
          </div>
        </div>
        <div class="dash-campaign-bar">
          <div class="dash-campaign-bar-fill" style="width:90.5%;background:var(--color-green);"></div>
          <div class="dash-campaign-bar-fill" style="width:34.5%;background:var(--color-primary-light);"></div>
          <div class="dash-campaign-bar-fill" style="width:11.8%;background:var(--color-blue);"></div>
        </div>
      </div>
    `,
  },
];

export function createAutomationPlatform() {
  const section = document.createElement('section');
  section.id = 'platform';
  section.className = 'section platform-section';

  const tabsHTML = PLATFORM_TABS.map((tab, i) => `
    <button class="platform-tab ${i === 0 ? 'active' : ''}" data-tab="${tab.id}">
      <span class="platform-tab-icon">${tab.icon}</span>
      <span class="platform-tab-label">${tab.label}</span>
    </button>
  `).join('');

  const TAB_SLUG_MAP = {
    'whatsapp': '/platform/whatsapp-api',
    'omnichannel': '/platform/team-inbox',
    'inbox': '/platform/team-inbox',
    'pipeline': '/platform/crm',
    'workflows': '/platform/workflow-automation',
    'campaigns': '/platform/bulk-campaigns'
  };

  const panelsHTML = PLATFORM_TABS.map((tab, i) => {
    const targetUrl = TAB_SLUG_MAP[tab.id] || '/platform';
    return `
    <div class="platform-panel ${i === 0 ? 'active' : ''}" data-panel="${tab.id}">
      <div class="platform-panel-info">
        <h3 class="heading-subsection">${tab.title}</h3>
        <p class="text-body">${tab.desc}</p>
        <a href="${targetUrl}" class="btn btn-glass btn-sm" style="margin-top:1rem;">
          Learn More
          <svg class="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div class="platform-panel-dashboard">
        <div class="dashboard-frame">
          <div class="dashboard-titlebar">
            <span class="dashboard-dot dashboard-dot-red"></span>
            <span class="dashboard-dot dashboard-dot-yellow"></span>
            <span class="dashboard-dot dashboard-dot-green"></span>
            <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">Botzo.io / ${tab.label}</span>
          </div>
          <div class="dashboard-content">
            ${tab.dashboard}
          </div>
        </div>
      </div>
    </div>
  `; }).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="text-overline">AI Automation Platform</span>
        <h2 class="heading-section">The Complete Business<br><span class="text-gradient">Automation Ecosystem</span></h2>
        <p class="text-body-lg">Everything you need to automate communication, manage leads, and scale operations — built for enterprise performance.</p>
      </div>

      <div class="platform-tabs-container reveal">
        <div class="platform-tabs-scroll">
          ${tabsHTML}
        </div>
      </div>

      <div class="platform-panels reveal-scale">
        ${panelsHTML}
      </div>
    </div>
  `;

  // Tab switching
  setTimeout(() => initPlatformTabs(section), 0);
  return section;
}

function initPlatformTabs(section) {
  const tabs = section.querySelectorAll('.platform-tab');
  const panels = section.querySelectorAll('.platform-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(panel => {
        if (panel.dataset.panel === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}
