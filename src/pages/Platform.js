/* ═══════════════════════════════════════════════════
   BOTZO.IO — PLATFORM FEATURES PAGE
   ═══════════════════════════════════════════════════ */

import { createFinalCTA } from '../sections/FinalCTA.js';

export function createPlatform() {
  const container = document.createElement('div');
  container.className = 'page platform-page';

  container.innerHTML = `
    <!-- Platform Hero Section -->
    <section class="section page-hero platform-hero-section">
      <div class="container container-wide">
        <div class="section-header">
          <span class="text-overline">The Engine of Growth</span>
          <h1 class="heading-hero">AI-Driven Business<br><span class="text-gradient">Automation Platform</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto 2rem;">
            A unified ecosystem designed to automate your customer communication, optimize marketing campaigns, collect payments, and manage leads in one centralized place.
          </p>
          <div class="hero-actions">
            <a href="/demo" class="btn btn-primary">Book Technical Demo</a>
            <a href="/pricing" class="btn btn-ghost">View Pricing Plans</a>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Interactive Feature Deep Dive -->
    <section class="section platform-features-deep" style="padding: 6rem 0;">
      <div class="container container-wide">
        <div class="section-header" style="margin-bottom: 4rem;">
          <span class="text-overline">Deep Dive</span>
          <h2 class="heading-section">Explore Botzo's <span class="text-gradient">Capabilities</span></h2>
          <p class="text-body">Click through our operational features to see what happens behind the scenes.</p>
        </div>

        <div class="platform-interactive-layout">
          <!-- Left Navigation Menu -->
          <div class="feature-menu-sidebar">
            <button class="feature-tab-btn active" data-feature="whatsapp">
              <span class="tab-icon">💬</span>
              <div>
                <div class="tab-title">WhatsApp API</div>
                <div class="tab-desc">Official business integrations</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="socials">
              <span class="tab-icon">📸</span>
              <div>
                <div class="tab-title">Instagram & Facebook</div>
                <div class="tab-desc">Auto DMs & comment replies</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="rcs">
              <span class="tab-icon">📱</span>
              <div>
                <div class="tab-title">RCS Messaging</div>
                <div class="tab-desc">Rich Android messaging</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="inbox">
              <span class="tab-icon">📥</span>
              <div>
                <div class="tab-title">Unified Team Inbox</div>
                <div class="tab-desc">Collaborative chat agent view</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="workflows">
              <span class="tab-icon">⚡</span>
              <div>
                <div class="tab-title">Workflow Builder</div>
                <div class="tab-desc">No-code automation logic</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="crm">
              <span class="tab-icon">📊</span>
              <div>
                <div class="tab-title">Central CRM & Campaigns</div>
                <div class="tab-desc">Lead pipelines & broadcasts</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="payments">
              <span class="tab-icon">🎫</span>
              <div>
                <div class="tab-title">Commerce & Tickets</div>
                <div class="tab-desc">In-chat checkouts & QR tickets</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="voice-ai">
              <span class="tab-icon">🎙️</span>
              <div>
                <div class="tab-title">Voice AI</div>
                <div class="tab-desc">Human-like voice calling</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="ai-studio">
              <span class="tab-icon">📸</span>
              <div>
                <div class="tab-title">AI Studio</div>
                <div class="tab-desc">On-model product photos</div>
              </div>
            </button>
            <button class="feature-tab-btn" data-feature="ai-bot">
              <span class="tab-icon">🤖</span>
              <div>
                <div class="tab-title">AI Bot</div>
                <div class="tab-desc">Autonomous support agents</div>
              </div>
            </button>
          </div>

          <!-- Right Content Display Area -->
          <div class="feature-content-display glass-card-strong">
            <div class="feature-tab-pane active" id="pane-whatsapp">
              <h3 style="color: #25D366;">WhatsApp Business API Ecosystem</h3>
              <p class="text-body">
                Tap into the world's most popular messaging channel. Botzo enables interactive CTA buttons, automated business templates, bulk newsletters with high open-rates, and multi-agent customer support on a single phone number.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/whatsapp-api" class="btn btn-glass btn-sm">Explore WhatsApp API &rarr;</a>
              </div>
              <div class="whatsapp-mockup glass-card">
                <div class="mockup-header">
                  <div class="status-dot"></div>
                  <strong style="font-size: 0.9rem;">Botzo Support</strong>
                </div>
                <div class="msg-bubbles">
                  <div class="msg-bubble incoming">
                    Hello! We've automated your order tracking. Here is your tracking link: <strong>botzo.io/track/876</strong>
                  </div>
                  <div class="msg-bubble outgoing">
                    Awesome! Thank you for the quick update. 🙏
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-socials">
              <h3 style="color: #E4405F;">Instagram & Facebook Automation</h3>
              <p class="text-body">
                Never miss an inquiry on social channels. Automate responses to Instagram Direct Messages, Messenger chats, and comment mentions. Instantly convert interest into leads by auto-sending links to your product or booking pages whenever a user comments on your post.
              </p>
              <div style="display: flex; gap: 1rem; margin: 1rem 0 1.5rem;">
                <a href="/platform/instagram-automation" class="btn btn-glass btn-sm">Instagram Automation &rarr;</a>
                <a href="/platform/facebook-automation" class="btn btn-glass btn-sm">Facebook Automation &rarr;</a>
              </div>
              <div class="glass-card" style="padding: 1.5rem; border-radius: var(--radius-lg); border-color: rgba(228, 64, 95, 0.2);">
                <div class="social-flow">
                  <div class="social-flow-step" style="background: rgba(228, 64, 95, 0.1); color: #E4405F;">IG Mention Trigger</div>
                  <span class="workflow-arrow">➔</span>
                  <div class="social-flow-step" style="background: rgba(156, 39, 255, 0.1); color: var(--color-primary-light);">Send Automated DM Link</div>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-rcs">
              <h3 style="color: #36C5F0;">RCS (Rich Communication Services)</h3>
              <p class="text-body">
                Upgrade traditional SMS to rich, brand-verified mobile cards. Reach Android users natively with dynamic carousels, custom suggestion buttons, calendar booking slot interactions, and verified sender profiles directly inside their messaging app.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/rcs-messaging" class="btn btn-glass btn-sm">Explore RCS Messaging &rarr;</a>
              </div>
              <div class="rcs-preview glass-card" style="border-color: rgba(54, 197, 240, 0.25);">
                <div class="rcs-carousel-placeholder">[ Product Carousel Card ]</div>
                <div style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.3rem;">Confirm Appointment Slot</div>
                <div style="font-size: 0.72rem; opacity: 0.6; margin-bottom: 0.8rem;">Click slots to reserve automatically.</div>
                <div class="rcs-slot-btns">
                  <button class="rcs-slot-btn">10:00 AM</button>
                  <button class="rcs-slot-btn">02:30 PM</button>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-inbox">
              <h3 style="color: #9C27FF;">Unified Agent Collaboration Inbox</h3>
              <p class="text-body">
                Equip your customer support representatives with a shared, multi-channel dashboard. Consolidate messages from WhatsApp, Instagram, Facebook, and RCS into a unified feed. Assign conversations, tag items, write internal comments, and coordinate resolution instantly.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/team-inbox" class="btn btn-glass btn-sm">Explore Team Inbox &rarr;</a>
              </div>
              <div class="inbox-mockup glass-card">
                <div class="inbox-header">
                  <strong>Active Tickets (4)</strong>
                  <span style="opacity: 0.5;">Assigned to Me</span>
                </div>
                <div class="inbox-ticket active">
                  <span>📲 #1289 - Rahul (WhatsApp)</span>
                  <span style="color:#B84DFF; font-weight:bold;">Pending Reply</span>
                </div>
                <div class="inbox-ticket">
                  <span>📸 #1288 - Sneha (Instagram)</span>
                  <span style="opacity: 0.5;">Assigned: Agent B</span>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-workflows">
              <h3 style="color: #B84DFF;">Visual Workflow Builder</h3>
              <p class="text-body">
                Design sophisticated communication logic without writing a single line of code. Connect triggers (e.g. New Order, Comment Mention) with structured actions (e.g. delay 5 minutes, send receipt, branch on user reply, tag lead) inside our node editor.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/workflow-automation" class="btn btn-glass btn-sm">Explore Workflow Builder &rarr;</a>
              </div>
              <div class="workflow-nodes">
                <div class="workflow-node" style="background: rgba(156, 39, 255, 0.15); border: 1px solid rgba(156, 39, 255, 0.3);">
                  🔔 Trigger<br><span class="node-label">New WhatsApp Message</span>
                </div>
                <span class="workflow-arrow">➔</span>
                <div class="workflow-node" style="background: rgba(0, 136, 255, 0.1); border: 1px solid rgba(0, 136, 255, 0.3);">
                  🤖 Trained AI Bot<br><span class="node-label">Process & Respond</span>
                </div>
                <span class="workflow-arrow">➔</span>
                <div class="workflow-node" style="background: rgba(0, 230, 118, 0.15); border: 1px solid rgba(0, 230, 118, 0.3);">
                  ⏳ Smart Wait<br><span class="node-label">Delay Before Follow-up</span>
                </div>
              </div>
              <div class="glass-card" style="padding: 1rem; border-radius: var(--radius-lg); margin-top: 1rem; border-color: rgba(255, 107, 53, 0.2);">
                <div style="font-size:0.72rem;font-weight:600;color:var(--color-orange);margin-bottom:0.5rem;">Webhook Automation</div>
                <div class="social-flow">
                  <div class="social-flow-step" style="background: rgba(255, 107, 53, 0.1); color: #FF6B35;">Webhook Trigger</div>
                  <span class="workflow-arrow">➔</span>
                  <div class="social-flow-step" style="background: rgba(156, 39, 255, 0.1); color: var(--color-primary-light);">Router Logic</div>
                  <span class="workflow-arrow">➔</span>
                  <div class="social-flow-step" style="background: rgba(37, 211, 102, 0.1); color: #25D366;">CRM Update</div>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-crm">
              <h3 style="color: #F5F5F7;">Centralized CRM & Broadcasting</h3>
              <p class="text-body">
                Say goodbye to scattered customer profiles. Botzo gathers user demographics, conversation history, activity tags, and order status inside a unified CRM pipeline. Trigger bulk campaign broadcasts to targeted segments on WhatsApp or RCS, fully tracked with delivery and read receipt stats.
              </p>
              <div style="display: flex; gap: 1rem; margin: 1rem 0 1.5rem;">
                <a href="/platform/crm" class="btn btn-glass btn-sm">Centralized CRM &rarr;</a>
                <a href="/platform/bulk-campaigns" class="btn btn-glass btn-sm">Bulk Campaigns &rarr;</a>
              </div>
              <div class="glass-card" style="padding: 1.5rem; border-radius: var(--radius-lg);">
                <div style="font-size:0.72rem;font-weight:600;color:var(--color-white-text);margin-bottom:0.8rem;">Campaign Quick Report</div>
                <div class="crm-stats-grid">
                  <div class="crm-stat-item">
                    <div class="crm-stat-label">Delivered</div>
                    <div class="crm-stat-value" style="color: #25D366;">98.4%</div>
                  </div>
                  <div class="crm-stat-item">
                    <div class="crm-stat-label">Read Rate</div>
                    <div class="crm-stat-value" style="color: #B84DFF;">89.2%</div>
                  </div>
                  <div class="crm-stat-item">
                    <div class="crm-stat-label">Replied</div>
                    <div class="crm-stat-value" style="color: #0088FF;">41.6%</div>
                  </div>
                  <div class="crm-stat-item">
                    <div class="crm-stat-label">Failed</div>
                    <div class="crm-stat-value" style="color: var(--color-red);">1.2%</div>
                  </div>
                </div>
              </div>
              <div class="glass-card" style="padding: 1rem; border-radius: var(--radius-lg); margin-top: 1rem;">
                <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-primary-light);font-weight:600;margin-bottom:0.5rem;">Lead Pipeline</div>
                <div style="display:flex;gap:0.5rem;">
                  <div style="flex:1;padding:0.4rem;background:rgba(37,211,102,0.06);border-radius:6px;border-top:2px solid #25D366;">
                    <div style="font-size:0.6rem;font-weight:600;">New</div>
                    <div style="font-size:0.9rem;font-weight:700;">87</div>
                  </div>
                  <div style="flex:1;padding:0.4rem;background:rgba(255,107,53,0.06);border-radius:6px;border-top:2px solid #FF6B35;">
                    <div style="font-size:0.6rem;font-weight:600;">Callback</div>
                    <div style="font-size:0.9rem;font-weight:700;">22</div>
                  </div>
                  <div style="flex:1;padding:0.4rem;background:rgba(156,39,255,0.06);border-radius:6px;border-top:2px solid #9C27FF;">
                    <div style="font-size:0.6rem;font-weight:600;">Quality</div>
                    <div style="font-size:0.9rem;font-weight:700;">18</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-payments">
              <h3 style="color: #00E676;">In-Chat Commerce & QR Ticketing</h3>
              <p class="text-body">
                Drive conversions by letting users pay directly inside their chat window. Securely integrate Razorpay, Stripe, or WhatsApp Pay. Generate dynamic QR entry tickets and confirmation slips for flights, events, cinemas, or store pick-ups, automatically delivered to their WhatsApp thread.
              </p>
              <div style="display: flex; gap: 1rem; margin: 1rem 0 1.5rem;">
                <a href="/platform/payment-integration" class="btn btn-glass btn-sm">Payment Integration &rarr;</a>
                <a href="/platform/qr-ticketing" class="btn btn-glass btn-sm">QR Ticketing &rarr;</a>
              </div>
              <div class="qr-mockup glass-card" style="border-color: rgba(0, 230, 118, 0.2);">
                <div class="qr-code-display">
                  <div class="qr-code-pattern"></div>
                </div>
                <div style="font-weight: bold; font-size: 0.82rem;">BOTZO CONFERENCE 2026</div>
                <div style="font-size: 0.72rem; opacity: 0.6;">Entry Pass - Verified</div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-voice-ai">
              <h3 style="color: #00F2FE;">Voice AI Calling</h3>
              <p class="text-body">
                Deploy human-like, low-latency AI voice agents that handle support calls, automate outbound lead qualification, and process bookings. Senses customer sentiment in real time, and immediately updates your CRM system with detailed summary transcripts.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/voice-ai" class="btn btn-glass btn-sm">Explore Voice AI &rarr;</a>
              </div>
              <div class="voice-call-mockup glass-card">
                <div class="voice-call-header">
                  <div class="voice-call-avatar">🗣️</div>
                  <div>
                    <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-white-text);">Inbound Call #VC-7182</div>
                    <div style="font-size: 0.65rem; color: var(--color-green);">Active Call — 1m 45s</div>
                  </div>
                </div>
                <div class="voice-waveform-container" style="margin-top: 1rem;">
                  <span class="voice-waveform-bar active" style="height: 10px; animation-delay: 0.1s;"></span>
                  <span class="voice-waveform-bar active" style="height: 22px; animation-delay: 0.3s;"></span>
                  <span class="voice-waveform-bar active" style="height: 16px; animation-delay: 0.2s;"></span>
                  <span class="voice-waveform-bar active" style="height: 32px; animation-delay: 0.4s;"></span>
                  <span class="voice-waveform-bar active" style="height: 12px; animation-delay: 0.15s;"></span>
                  <span class="voice-waveform-bar active" style="height: 25px; animation-delay: 0.35s;"></span>
                  <span class="voice-waveform-bar active" style="height: 18px; animation-delay: 0.25s;"></span>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-ai-studio">
              <h3 style="color: #FF416C;">AI Studio Fashion Photos</h3>
              <p class="text-body">
                Transform flat-lay product photos into professional on-model catalog shots instantly. Upload your garment images, select model demographics and poses, customize backgrounds, and download production-ready 4K visual assets.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/ai-studio" class="btn btn-glass btn-sm">Explore AI Studio &rarr;</a>
              </div>
              <div class="studio-fashion-mockup glass-card">
                <div class="studio-fashion-preview-split">
                  <div class="preview-split-box">
                    <div class="split-box-label">Product Flat-Lay</div>
                    <div class="split-box-graphic">👕</div>
                  </div>
                  <div class="preview-split-arrow">➔</div>
                  <div class="preview-split-box highlighted">
                    <div class="split-box-label">On-Model Render</div>
                    <div class="split-box-graphic">🧑‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="feature-tab-pane" id="pane-ai-bot">
              <h3 style="color: #8A2BE2;">Autonomous AI Support Bot</h3>
              <p class="text-body">
                Deploy autonomous support bots capable of solving complex multi-step user inquiries, checking order status via API, and processing refunds or bookings. Gracefully hands off to human agents when finding complex corner cases.
              </p>
              <div style="margin: 1rem 0 1.5rem;">
                <a href="/platform/ai-bot" class="btn btn-glass btn-sm">Explore AI Bot &rarr;</a>
              </div>
              <div class="bot-reasoning-mockup glass-card">
                <div style="font-size: 0.72rem; font-weight: 600; color: var(--color-white-text); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.3rem;">
                  <span class="status-dot green"></span> Autonomous Reasoning Log
                </div>
                <div class="reasoning-step-log">
                  <div>🔍 Intent: Refund Request for order #9021</div>
                  <div>⚙️ Call: Shopify API check -> Paid & Delivered</div>
                  <div>⚖️ Policy: Within 15 days -> Eligible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Bind click listener for interactive tab pane swapping
  setTimeout(() => {
    const tabButtons = container.querySelectorAll('.feature-tab-btn');
    const panes = container.querySelectorAll('.feature-tab-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const feature = btn.getAttribute('data-feature');

        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        panes.forEach(pane => pane.classList.remove('active'));
        
        const targetPane = container.querySelector(`#pane-${feature}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }, 100);

  // Append Final CTA
  container.appendChild(createFinalCTA());

  return container;
}
