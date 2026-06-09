
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
          <div class="omni-channel active"><span style="color:#25D366">●</span> WhatsApp <span class="badge-omni">2</span></div>
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
          <div class="chat-scroll-wrapper">
            <div class="chat-body-glass" id="omni-chat-feed">
              <div class="chat-msg incoming delay-0">Hi, is the Pro plan available for annual billing?</div>
              
              <div class="chat-typing type-1"><span></span><span></span><span></span></div>
              <div class="chat-msg outgoing delay-1">Yes Sarah! You get 2 months free on the annual plan.</div>
              
              <div class="chat-msg incoming delay-2">Great! How do I upgrade my account?</div>
              
              <div class="chat-typing type-2"><span></span><span></span><span></span></div>
              <div class="chat-msg outgoing delay-3">I've just sent a secure checkout link to your email. Let me know if you need help!</div>
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
        <div class="voice-agent-header">
          <div class="agent-avatar premium-gradient-bg"></div>
          <div class="agent-details">
            <div class="agent-name">Sarah <span class="badge-sales">Sales AI</span></div>
            <div class="agent-status"><span class="pulse-dot"></span> Live Call · 02:14</div>
          </div>
          <div class="agent-sentiment">Sentiment: <span class="sentiment-val">Positive</span></div>
        </div>
        
        <div class="voice-equalizer-container">
          <div class="equalizer-bar eq-1"></div>
          <div class="equalizer-bar eq-2"></div>
          <div class="equalizer-bar eq-3"></div>
          <div class="equalizer-bar eq-4"></div>
          <div class="equalizer-bar eq-5"></div>
          <div class="equalizer-bar eq-6"></div>
          <div class="equalizer-bar eq-7"></div>
        </div>

        <div class="voice-transcript-thread">
          <div class="chat-bubble bot"><div class="chat-av bot-av"></div><div class="chat-txt">"Hi there, I see you're interested in the Enterprise plan."</div></div>
          <div class="chat-bubble human delay-1"><div class="chat-txt">"Yes, does it include custom integrations?"</div><div class="chat-av hum-av"></div></div>
          <div class="chat-bubble bot delay-2"><div class="chat-av bot-av"></div><div class="chat-txt typing-pulse">"Absolutely. Let me connect you with..."</div></div>
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
        <div class="studio-top-bar">
          <div class="studio-prompt-input">
            <span class="prompt-icon">✨</span>
            <span class="prompt-text typing-text-fast">A minimalist luxury skincare jar floating over crystal water...</span>
          </div>
          <div class="studio-params">
            <span class="param-pill">1:1 Square</span>
            <span class="param-pill">Studio Lighting</span>
          </div>
        </div>
        
        <div class="studio-main-stage interactive-stage">
          <div class="generated-image-wrapper floating-art">
            <div class="art-bg-glow soft-glow"></div>
            <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80" alt="Generated Cosmetic Jar" class="generated-img-main" />
            <div class="sparkles">✨</div>
          </div>
          <div class="studio-wireframe-grid"></div>
          <div class="studio-scan-beam"></div>
        </div>

        <div class="studio-variants">
          <div class="variant-thumb thumb-1"><img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=200&q=80" alt="Thumb 1" /></div>
          <div class="variant-thumb thumb-2"><img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=200&q=80" alt="Thumb 2" /></div>
          <div class="variant-thumb thumb-3"><img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=200&q=80" alt="Thumb 3" /></div>
          <div class="variant-thumb thumb-4"><img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=200&q=80" alt="Thumb 4" /></div>
        </div>
      </div>
    `
  }
];

import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const sidebarHTML = PLATFORM_TABS.map((tab, i) => `
    <button class="feature-tab-btn ${i === 0 ? 'active' : ''}" data-tab-id="${tab.id}">
      <span class="tab-icon">${tab.icon}</span>
      <div class="tab-content-text">
        <div class="tab-title">${tab.title}</div>
        <div class="tab-desc">${tab.desc}</div>
      </div>
    </button>
  `).join('');

  const panesHTML = PLATFORM_TABS.map((tab, i) => `
    <div class="feature-tab-pane ${i === 0 ? 'active' : ''}" id="pane-${tab.id}">
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
        <span class="text-overline">Automation Ecosystem</span>
        <h2 class="heading-section">The Complete Business<br><span class="text-gradient">Growth Platform</span></h2>
        <p class="text-body-lg">Everything you need to automate communication, manage leads, and scale operations — built for enterprise performance.</p>
      </div>

      <div class="platform-interactive-layout reveal">
        <div class="feature-menu-sidebar">
          ${sidebarHTML}
        </div>
        <div class="feature-content-display">
          ${panesHTML}
        </div>
      </div>
    </div>
  `;

  // Initialize Scroll-Spy & Click Interaction
  setTimeout(() => {
    const btns = section.querySelectorAll('.feature-tab-btn');
    const panes = section.querySelectorAll('.feature-tab-pane');

    const switchTab = (id) => {
      btns.forEach(btn => btn.classList.toggle('active', btn.dataset.tabId === id));
      panes.forEach(pane => pane.classList.toggle('active', pane.id === 'pane-' + id));
    };

    // Click handler fallback
    btns.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tabId));
    });

    // Pinned Scroll-Spy Setup (Desktop Only)
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (!isMobile) {
      const layoutElement = section.querySelector('.platform-interactive-layout');
      
      ScrollTrigger.create({
        trigger: layoutElement,
        start: 'top 20%',
        end: '+=2500', // Total scroll distance required to view all features
        pin: true,
        scrub: 1, // Add 1s of smoothing to the scrub so it doesn't feel forced/abrupt
        snap: {
          snapTo: 1 / (btns.length - 1), // Snap smoothly to the nearest feature tab
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: "power1.inOut"
        },
        onUpdate: (self) => {
          // self.progress goes from 0 to 1
          const totalTabs = btns.length;
          let activeIndex = Math.floor(self.progress * totalTabs);
          // Ensure it doesn't overshoot
          if (activeIndex >= totalTabs) activeIndex = totalTabs - 1;
          
          const targetBtn = btns[activeIndex];
          if (targetBtn && !targetBtn.classList.contains('active')) {
             switchTab(targetBtn.dataset.tabId);
          }
        }
      });
    }
  }, 0);

  return section;
}
