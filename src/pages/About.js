/* ═══════════════════════════════════════════════════
   BOTZO.IO — ABOUT OUR VISION & INFRASTRUCTURE
   A futuristic storytelling narrative of scale.
   ═══════════════════════════════════════════════════ */

export function createAbout() {
  const container = document.createElement('div');
  container.className = 'page about-page';

  container.innerHTML = `
    <!-- Cinematic Hero -->
    <section class="section page-hero about-hero" style="position: relative; overflow: hidden;">
      <div class="container-wide">
        <div class="section-header" style="max-width: 680px; margin: 0 auto;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary-light); margin-bottom: 1.5rem;">
            <span class="badge-dot"></span>THE COMMUNICATION GRID
          </div>
          <h1 class="heading-hero" style="font-size: 4rem; line-height: 1; font-weight: 800; letter-spacing: -1px; margin: 0 0 1rem 0;">
            The Architecture of<br><span class="text-gradient">Intelligent Dialog</span>
          </h1>
          <p class="text-body-lg" style="margin: 0; font-weight: 400; opacity: 0.9;">
            We build high-capacity, low-latency business communication pipelines. Botzo.io resolves conversational friction, enabling real-time client automation at a global scale.
          </p>
          <div class="hero-actions">
            <a href="/contact" class="btn btn-primary">Connect With Us</a>
            <a href="/platform" class="btn btn-ghost">View Capabilities</a>
          </div>
        </div>
        
        <!-- About Ecosystem layer -->
        <div class="hero-ecosystem">
          <div class="glass-card-strong" style="width: 800px; height: 250px; border-radius: 24px; position: relative; background: linear-gradient(180deg, rgba(184,77,255,0.05) 0%, transparent 100%); border-top: 1px solid rgba(184,77,255,0.3); display: flex; justify-content: center; align-items: flex-start; padding-top: 2rem;">
            <div style="display: flex; gap: 2rem; align-items: center;">
               <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(184,77,255,0.1); border: 1px solid rgba(184,77,255,0.3); display: flex; justify-content: center; align-items: center;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
               <div style="width: 100px; height: 2px; background: linear-gradient(90deg, rgba(184,77,255,0.5), transparent);"></div>
               <div style="width: 120px; height: 120px; border-radius: 50%; background: rgba(0,230,118,0.1); border: 1px solid rgba(0,230,118,0.3); display: flex; justify-content: center; align-items: center;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div>
               <div style="width: 100px; height: 2px; background: linear-gradient(270deg, rgba(0,176,255,0.5), transparent);"></div>
               <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(0,176,255,0.1); border: 1px solid rgba(0,176,255,0.3); display: flex; justify-content: center; align-items: center;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-hero-blur" style="position: absolute; width: 400px; height: 400px; top: -10%; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(184, 77, 255, 0.15) 0%, transparent 70%); pointer-events: none; z-index: -1;"></div>
    </section>

    <div class="section-divider"></div>

    <!-- Futuristic Narrative & Operational Philosophy -->
    <section class="section about-narrative-section" style="padding: 6rem 0;">
      <div class="container">
        <div class="about-philosophy-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;">
          
          <div class="reveal-left" style="text-align: left;">
            <span class="text-overline" style="color: var(--color-primary-light);">Operational Philosophy</span>
            <h2 class="heading-section" style="font-size: 2.2rem; margin: 0.5rem 0 1.5rem 0; line-height: 1.2;">
              Communication is<br><span class="text-gradient">Core Infrastructure</span>
            </h2>
            <p class="text-body" style="margin-bottom: 1.5rem; line-height: 1.75; font-size: 0.95rem;">
              At Botzo.io, we reject lag. Modern clients do not wait. We build lightweight, carrier-grade messaging integrations that resolve thousands of concurrent queries in sub-second timelines.
            </p>
            <p class="text-body" style="line-height: 1.75; font-size: 0.95rem; opacity: 0.85;">
              Our ecosystem seamlessly merges AI automation pipelines with high-performance digital marketing, custom web architectures, and client-side database synchronization. We provide a single, unified communications cockpit for the enterprise.
            </p>
          </div>

          <!-- Layered visual display card representing scale -->
          <div class="glass-card-strong reveal-right" style="padding: 3rem; border-radius: var(--radius-xl); border-color: rgba(184, 77, 255, 0.12); position: relative; overflow: hidden; background: rgba(15, 12, 20, 0.4);">
            <div class="about-network-glow" style="position: absolute; width: 250px; height: 250px; top: -50px; right: -50px; background: radial-gradient(circle, rgba(0, 176, 255, 0.12) 0%, transparent 70%); pointer-events: none; z-index:-1;"></div>
            
            <h3 class="heading-subsection" style="margin-bottom: 1.5rem; font-size: 1.15rem; font-weight: 700; color: var(--color-white-text); display: flex; align-items: center; gap: 0.5rem;">
              <span>🛡️</span> System Capabilities
            </h3>
            
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <span style="font-size: 1.25rem; color: #00E676;">✓</span>
                <div>
                  <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--color-white-text); margin-bottom: 0.15rem;">Elastic Load Scaler</h4>
                  <p style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.4; margin: 0;">Dynamically scales server threads during campaign notification spikes.</p>
                </div>
              </div>
              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <span style="font-size: 1.25rem; color: #00E676;">✓</span>
                <div>
                  <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--color-white-text); margin-bottom: 0.15rem;">End-to-End Data Safeguards</h4>
                  <p style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.4; margin: 0;">Secure tokenization policies ensure customer chat histories are fully guarded.</p>
                </div>
              </div>
              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <span style="font-size: 1.25rem; color: #00E676;">✓</span>
                <div>
                  <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--color-white-text); margin-bottom: 0.15rem;">Carrier-Grade Gateway</h4>
                  <p style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.4; margin: 0;">Direct nodes into Meta and carrier routing frameworks bypass latency limits.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Impact Scale Metrics -->
    <section class="section about-stats-section" style="padding: 6rem 0; position: relative;">
      <div class="container">
        <div class="section-header" style="margin-bottom: 4.5rem; text-align: center;">
          <span class="text-overline" style="color: var(--color-green);">Infrastructure Scale</span>
          <h2 class="heading-section" style="font-size: 2.5rem; margin: 0.5rem 0 0 0;">Numbers Confirming<br><span class="text-gradient" style="background: linear-gradient(135deg, #00E676 0%, #00B0FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Our Reliability</span></h2>
        </div>
        
        <div class="about-stats-row" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
          <div class="about-stat-card glass-card-strong reveal">
            <div class="about-stat-value" style="font-size: 2.5rem; font-weight: 800; font-family: var(--font-heading); color: var(--color-primary-light); margin-bottom: 0.35rem;">50M+</div>
            <div class="about-stat-label" style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.3;">Monthly Messages Processed</div>
          </div>
          <div class="about-stat-card glass-card-strong reveal">
            <div class="about-stat-value" style="font-size: 2.5rem; font-weight: 800; font-family: var(--font-heading); color: #00B0FF; margin-bottom: 0.35rem;">99.99%</div>
            <div class="about-stat-label" style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.3;">API Uptime Reliability SLA</div>
          </div>
          <div class="about-stat-card glass-card-strong reveal">
            <div class="about-stat-value" style="font-size: 2.5rem; font-weight: 800; font-family: var(--font-heading); color: #00E676; margin-bottom: 0.35rem;">2,500+</div>
            <div class="about-stat-label" style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.3;">Business Client Networks</div>
          </div>
          <div class="about-stat-card glass-card-strong reveal">
            <div class="about-stat-value" style="font-size: 2.5rem; font-weight: 800; font-family: var(--font-heading); color: #FFD600; margin-bottom: 0.35rem;">&lt; 800ms</div>
            <div class="about-stat-label" style="font-size: 0.8rem; color: var(--color-muted-text); line-height: 1.3;">Median Message Latency</div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Futuristic Company Narrative Timeline -->
    <section class="section about-timeline-section" style="padding: 6rem 0;">
      <div class="container" style="max-width: 900px;">
        <div class="section-header" style="margin-bottom: 5rem; text-align: center;">
          <span class="text-overline">Evolution Roadmap</span>
          <h2 class="heading-section" style="font-size: 2.5rem; margin: 0.5rem 0 0 0;">The Botzo.io <span class="text-gradient">Roadmap</span></h2>
        </div>
        
        <div class="about-timeline" style="position: relative;">
          
          <div class="timeline-item reveal" style="display: flex; justify-content: flex-start; margin-bottom: 3.5rem; position: relative;">
            <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--color-primary-light); border: 3px solid var(--color-dark-bg); box-shadow: 0 0 10px rgba(156, 39, 255, 0.4);"></div>
            <div class="timeline-content glass-card-strong" style="width: 44%; padding: 1.5rem 2rem; border-radius: 16px; border-color: rgba(255,255,255,0.06); text-align: right; margin-right: auto;">
              <div class="timeline-year" style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-light); font-family: var(--font-heading); margin-bottom: 0.25rem;">2021</div>
              <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-white-text); margin: 0 0 0.5rem 0;">Chatbot Prototype Launched</h4>
              <p style="font-size: 0.78rem; color: var(--color-muted-text); line-height: 1.5; margin: 0;">Created the initial auto-reply engine as an experimental API handler, testing conversational logic limits.</p>
            </div>
          </div>

          <div class="timeline-item reveal" style="display: flex; justify-content: flex-end; margin-bottom: 3.5rem; position: relative;">
            <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: #00B0FF; border: 3px solid var(--color-dark-bg); box-shadow: 0 0 10px rgba(0, 176, 255, 0.4);"></div>
            <div class="timeline-content glass-card-strong" style="width: 44%; padding: 1.5rem 2rem; border-radius: 16px; border-color: rgba(255,255,255,0.06); text-align: left; margin-left: auto;">
              <div class="timeline-year" style="font-size: 1.25rem; font-weight: 800; color: #00B0FF; font-family: var(--font-heading); margin-bottom: 0.25rem;">2022</div>
              <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-white-text); margin: 0 0 0.5rem 0;">Official WhatsApp API Node</h4>
              <p style="font-size: 0.78rem; color: var(--color-muted-text); line-height: 1.5; margin: 0;">Registered as an official Meta Business Solution Provider, launching bulk campaigns and the Team Inbox cockpit.</p>
            </div>
          </div>

          <div class="timeline-item reveal" style="display: flex; justify-content: flex-start; margin-bottom: 3.5rem; position: relative;">
            <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: #00E676; border: 3px solid var(--color-dark-bg); box-shadow: 0 0 10px rgba(0, 230, 118, 0.4);"></div>
            <div class="timeline-content glass-card-strong" style="width: 44%; padding: 1.5rem 2rem; border-radius: 16px; border-color: rgba(255,255,255,0.06); text-align: right; margin-right: auto;">
              <div class="timeline-year" style="font-size: 1.25rem; font-weight: 800; color: #00E676; font-family: var(--font-heading); margin-bottom: 0.25rem;">2023</div>
              <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-white-text); margin: 0 0 0.5rem 0;">Omnichannel Flow Orchestrator</h4>
              <p style="font-size: 0.78rem; color: var(--color-muted-text); line-height: 1.5; margin: 0;">Connected Instagram DM, Facebook, and RCS Messaging. Deployed our no-code visual workflow automation builder.</p>
            </div>
          </div>

          <div class="timeline-item reveal" style="display: flex; justify-content: flex-end; margin-bottom: 3.5rem; position: relative;">
            <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: #FFD600; border: 3px solid var(--color-dark-bg); box-shadow: 0 0 10px rgba(255, 214, 0, 0.4);"></div>
            <div class="timeline-content glass-card-strong" style="width: 44%; padding: 1.5rem 2rem; border-radius: 16px; border-color: rgba(255,255,255,0.06); text-align: left; margin-left: auto;">
              <div class="timeline-year" style="font-size: 1.25rem; font-weight: 800; color: #FFD600; font-family: var(--font-heading); margin-bottom: 0.25rem;">2024</div>
              <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-white-text); margin: 0 0 0.5rem 0;">Commerce & Transaction Support</h4>
              <p style="font-size: 0.78rem; color: var(--color-muted-text); line-height: 1.5; margin: 0;">Integrated in-chat payments, automated Stripe webhooks, and launched dynamic QR entry check-in systems.</p>
            </div>
          </div>

          <div class="timeline-item reveal" style="display: flex; justify-content: flex-start; margin-bottom: 1rem; position: relative;">
            <div class="timeline-dot" style="position: absolute; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; border-radius: 50%; background: var(--color-primary-light); border: 3px solid var(--color-dark-bg); box-shadow: 0 0 10px rgba(156, 39, 255, 0.4);"></div>
            <div class="timeline-content glass-card-strong" style="width: 44%; padding: 1.5rem 2rem; border-radius: 16px; border-color: rgba(255,255,255,0.06); text-align: right; margin-right: auto;">
              <div class="timeline-year" style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary-light); font-family: var(--font-heading); margin-bottom: 0.25rem;">2025</div>
              <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-white-text); margin: 0 0 0.5rem 0;">AI Intelligent Scale Layer</h4>
              <p style="font-size: 0.78rem; color: var(--color-muted-text); line-height: 1.5; margin: 0;">Deployed NLP intent recognition and auto-routing models. Crossed 50 million monthly messages processed.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  return container;
}
