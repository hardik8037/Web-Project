
import { gsap } from 'gsap';

/* ═══════════════════════════════════════════════════
   AI AUTOMATION PLATFORM — REDESIGNED DASHBOARDS
   ═══════════════════════════════════════════════════ */

const PLATFORM_TABS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp API',
    icon: '💬',
    title: 'WhatsApp Business API',
    desc: 'Send & receive messages at scale with verified business profile, templates, and automated responses.',
    dashboard: `
      <div class="dash-new dash-whatsapp-analytics">
        <div class="dash-analytics-header">
          <div class="dash-metric">
            <span class="dash-metric-label">Messages Sent</span>
            <span class="dash-metric-val">124.5K</span>
            <span class="dash-metric-change positive">+12.4%</span>
          </div>
          <div class="dash-metric">
            <span class="dash-metric-label">Open Rate</span>
            <span class="dash-metric-val">94.2%</span>
            <span class="dash-metric-change positive">+2.1%</span>
          </div>
          <div class="dash-metric">
            <span class="dash-metric-label">Conversions</span>
            <span class="dash-metric-val">8,402</span>
            <span class="dash-metric-change positive">+18.5%</span>
          </div>
        </div>
        <div class="dash-chart-container">
          <!-- Animated Bar Chart Mockup -->
          <div class="dash-chart-bar" style="height: 40%"></div>
          <div class="dash-chart-bar" style="height: 60%"></div>
          <div class="dash-chart-bar" style="height: 45%"></div>
          <div class="dash-chart-bar" style="height: 80%"></div>
          <div class="dash-chart-bar" style="height: 65%"></div>
          <div class="dash-chart-bar" style="height: 95%"></div>
          <div class="dash-chart-bar" style="height: 75%"></div>
          <div class="dash-chart-line"></div>
        </div>
        <div class="dash-live-status">
          <span class="status-dot pulsing"></span> Live Campaign Routing Active
        </div>
      </div>
    `
  },
  {
    id: 'omnichannel',
    label: 'Omnichannel',
    icon: '🔗',
    title: 'Unified Communication',
    desc: 'Unify WhatsApp, Instagram, Facebook, RCS, and more into a single conversation stream.',
    dashboard: `
      <div class="dash-new dash-omni-ui">
        <div class="dash-omni-sidebar">
          <div class="omni-channel active"><span style="color:#25D366">●</span> WhatsApp</div>
          <div class="omni-channel"><span style="color:#E4405F">●</span> Instagram</div>
          <div class="omni-channel"><span style="color:#1877F2">●</span> Messenger</div>
          <div class="omni-channel"><span style="color:#0088FF">●</span> RCS</div>
        </div>
        <div class="dash-omni-chat">
          <div class="chat-header-glass">
            <div class="chat-avatar gradient-1">SJ</div>
            <div>
              <div class="chat-name">Sarah Jenkins</div>
              <div class="chat-source">via Instagram DM</div>
            </div>
          </div>
          <div class="chat-body-glass">
            <div class="chat-msg incoming delay-1">Hi, is the Pro plan available for annual billing?</div>
            <div class="chat-msg outgoing delay-2">Yes Sarah! You get 2 months free on the annual plan.</div>
            <div class="chat-typing delay-3">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: '⚡',
    title: 'Visual Workflow Builder',
    desc: 'Build powerful automation flows with drag-and-drop — no coding required.',
    dashboard: `
      <div class="dash-new dash-workflow-ui">
        <div class="workflow-canvas-grid">
          <div class="wf-node wf-trigger pulse-node">
            <div class="wf-icon">🎯</div>
            <span>Lead Captured</span>
          </div>
          <div class="wf-line">
            <div class="wf-dot-move"></div>
          </div>
          <div class="wf-node wf-ai pulse-node delay-1">
            <div class="wf-icon">⚖️</div>
            <span>Condition: Score > 80</span>
          </div>
          <div class="wf-split">
            <div class="wf-branch">
              <div class="wf-line vertical"></div>
              <div class="wf-line horizontal left">
                <div class="wf-dot-move"></div>
              </div>
              <div class="wf-node wf-action pulse-node delay-2">
                <div class="wf-icon">📅</div>
                <span>Book Demo</span>
              </div>
              <div class="wf-line">
                <div class="wf-dot-move delay-3"></div>
              </div>
              <div class="wf-node wf-action pulse-node delay-3">
                <div class="wf-icon">🔄</div>
                <span>Sync to CRM</span>
              </div>
            </div>
            <div class="wf-branch">
              <div class="wf-line vertical"></div>
              <div class="wf-line horizontal right">
                <div class="wf-dot-move"></div>
              </div>
              <div class="wf-node wf-action pulse-node delay-2">
                <div class="wf-icon">📧</div>
                <span>Nurture Email 1</span>
              </div>
              <div class="wf-line">
                <div class="wf-dot-move delay-3"></div>
              </div>
              <div class="wf-node wf-action pulse-node delay-3" style="border-style: dashed; opacity: 0.8;">
                <div class="wf-icon">⏳</div>
                <span>Wait 3 Days</span>
              </div>
              <div class="wf-line">
                <div class="wf-dot-move delay-4"></div>
              </div>
              <div class="wf-node wf-action pulse-node delay-4">
                <div class="wf-icon">📧</div>
                <span>Nurture Email 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'voice_ai',
    label: 'Voice AI',
    icon: '🎙️',
    title: 'Conversational Voice AI',
    desc: 'Deploy human-like AI voice agents to handle inbound calls, qualify leads, and schedule appointments 24/7.',
    dashboard: `
      <div class="dash-new dash-voice-ui">
        <div class="voice-center">
          <div class="voice-orb">
            <div class="voice-ring ring-1"></div>
            <div class="voice-ring ring-2"></div>
            <div class="voice-ring ring-3"></div>
            <div class="voice-mic-icon">🎙️</div>
          </div>
          <div class="voice-status">AI Agent Listening...</div>
        </div>
        <div class="voice-transcript-box">
          <div class="v-line bot">"Hi there, I see you're interested in the Enterprise plan."</div>
          <div class="v-line human delay-1">"Yes, does it include custom integrations?"</div>
          <div class="v-line bot delay-2">"Absolutely. Let me connect you with our solutions engineer."</div>
        </div>
      </div>
    `
  },
  {
    id: 'ai_studio',
    label: 'AI Studio',
    icon: '✨',
    title: 'AI Product Photography',
    desc: 'Generate studio-quality product lifestyle images instantly using advanced generative AI.',
    dashboard: `
      <div class="dash-new dash-studio-ui">
        <div class="studio-prompt-bar">
          <span class="prompt-icon">✨</span>
          <span class="prompt-text typing-text">A sleek perfume bottle on a neon cyberpunk podium...</span>
        </div>
        <div class="studio-generation-area">
          <div class="studio-skeleton">
            <div class="scan-line"></div>
          </div>
          <div class="studio-result-grid hidden">
            <div class="s-img img-1"></div>
            <div class="s-img img-2"></div>
            <div class="s-img img-3"></div>
            <div class="s-img img-4"></div>
          </div>
        </div>
      </div>
    `
  }
];

export function createAutomationPlatform() {
  const section = document.createElement('section');
  section.id = 'platform';
  section.className = 'section platform-section';

  const TAB_SLUG_MAP = {
    'whatsapp': '/platform/whatsapp-api',
    'omnichannel': '/platform/team-inbox',
    'workflows': '/platform/workflow-automation',
    'voice_ai': '/platform/voice-ai',
    'ai_studio': '/platform/ai-studio'
  };

  const tabsHTML = PLATFORM_TABS.map((tab, i) => {
    const targetUrl = TAB_SLUG_MAP[tab.id] || '/platform';
    return `
    <div class="platform-card-tab ${i === 0 ? 'active' : ''}" data-tab="${tab.id}">
      <div class="platform-card-header">
        <span class="platform-card-icon">${tab.icon}</span>
        <h3 class="platform-card-title">${tab.title}</h3>
      </div>
      <div class="platform-card-body">
        <p class="platform-card-desc">${tab.desc}</p>
        <a href="${targetUrl}" class="btn btn-glass btn-sm" style="margin-top:1rem;">
          Learn More
          <svg class="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div class="tab-progress-bar"></div>
      <div class="platform-card-glow"></div>
    </div>
  `;}).join('');

  const dashboardsHTML = PLATFORM_TABS.map((tab, i) => `
    <div class="platform-dashboard-view ${i === 0 ? 'active' : ''}" data-panel="${tab.id}">
      <div class="dashboard-frame premium-glass">
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
  `).join('');

  section.innerHTML = `
    <div class="container container-wide">
      <div class="section-header">
        <span class="text-overline">AI Automation Platform</span>
        <h2 class="heading-section">The Complete Business<br><span class="text-gradient">Automation Ecosystem</span></h2>
        <p class="text-body-lg">Everything you need to automate communication, manage leads, and scale operations — built for enterprise performance.</p>
      </div>

      <div class="platform-grid reveal">
        <div class="platform-tabs-list">
          ${tabsHTML}
        </div>
        <div class="platform-showcase">
          <div class="platform-showcase-inner">
            ${dashboardsHTML}
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => initPlatformTabs(section), 0);
  return section;
}

function initPlatformTabs(section) {
  const tabs = section.querySelectorAll('.platform-card-tab');
  const panels = section.querySelectorAll('.platform-dashboard-view');
  let currentIndex = 0;

  const AUTOPLAY_DELAY = 10; // seconds
  let progressTween = null;

  function switchTab(index, userInitiated = false) {
    if (index < 0 || index >= tabs.length) return;
    
    // Stop the previous progress bar animation
    if (progressTween) progressTween.kill();
    
    tabs.forEach(t => {
      t.classList.remove('active');
      const progress = t.querySelector('.tab-progress-bar');
      if (progress) gsap.set(progress, { width: '0%' });
    });

    const activeTab = tabs[index];
    activeTab.classList.add('active');
    
    const activeProgress = activeTab.querySelector('.tab-progress-bar');
    if (activeProgress) {
      // Start a new progress bar animation
      progressTween = gsap.to(activeProgress, { 
        width: '100%', 
        duration: AUTOPLAY_DELAY, 
        ease: 'none',
        onComplete: () => {
          // When progress finishes, strictly trigger the next tab
          let nextIndex = (currentIndex + 1) % tabs.length;
          switchTab(nextIndex);
        }
      });
    }

    if (window.innerWidth <= 1024 && userInitiated) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    const targetId = activeTab.dataset.tab;

    panels.forEach(panel => {
      if (panel.dataset.panel === targetId) {
        panel.classList.add('active');
        const dashboard = panel.querySelector('.dashboard-content');
        
        // Main Dashboard Fade In
        gsap.fromTo(dashboard, 
          { scale: 0.95, opacity: 0, y: 15 }, 
          { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        );
        
        // Micro-Animations Routing
        if (targetId === 'whatsapp') {
          gsap.fromTo(panel.querySelectorAll('.dash-chart-bar'), 
            { scaleY: 0, transformOrigin: "bottom" },
            { scaleY: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.2 }
          );
        } else if (targetId === 'omnichannel') {
          gsap.fromTo(panel.querySelectorAll('.chat-msg'),
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.3, ease: 'power2.out', delay: 0.3 }
          );
        } else if (targetId === 'workflows') {
          gsap.fromTo(panel.querySelectorAll('.wf-node'),
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.5)', delay: 0.2 }
          );
        } else if (targetId === 'voice_ai') {
          gsap.fromTo(panel.querySelectorAll('.v-line'),
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.8, ease: 'power2.out', delay: 0.5 }
          );
        } else if (targetId === 'ai_studio') {
          const skel = panel.querySelector('.studio-skeleton');
          const grid = panel.querySelector('.studio-result-grid');
          gsap.set(skel, { display: 'block', opacity: 1 });
          gsap.set(grid, { display: 'none', opacity: 0 });
          
          gsap.to(skel, { opacity: 0, duration: 0.3, delay: 2.5, onComplete: () => {
            gsap.set(skel, { display: 'none' });
            gsap.set(grid, { display: 'grid' });
            gsap.to(grid, { opacity: 1, duration: 0.5 });
            gsap.fromTo(grid.querySelectorAll('.s-img'), 
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' }
            );
          }});
        }

      } else {
        panel.classList.remove('active');
      }
    });
    
    currentIndex = index;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => switchTab(index, true));
    
    // Hover Glow Effect
    tab.addEventListener('mousemove', (e) => {
      const rect = tab.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const glow = tab.querySelector('.platform-card-glow');
      if(glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(156, 39, 255, 0.15) 0%, transparent 60%)`;
    });
    tab.addEventListener('mouseleave', () => {
      const glow = tab.querySelector('.platform-card-glow');
      if(glow) glow.style.background = 'transparent';
    });
  });

  const showcase = section.querySelector('.platform-grid');
  // Hover logic removed to prevent auto-play from pausing

  // Initialize first tab (this automatically starts the progress tween)
  switchTab(0);
}
