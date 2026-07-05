import { createFinalCTA } from '../sections/FinalCTA.js';

export function createAbout() {
  const container = document.createElement('div');
  container.className = 'page about-page';

  container.innerHTML = `
    <style>
      /* --- Unified Command Center Dashboard --- */
      .unified-dashboard {
        position: relative;
        width: 100%;
        max-width: 550px;
        margin: 0 auto;
        background: linear-gradient(135deg, rgba(20, 20, 28, 0.7) 0%, rgba(10, 10, 14, 0.9) 100%);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        box-shadow: 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
        animation: float-soft 8s ease-in-out infinite;
        overflow: hidden;
      }
      
      .ud-titlebar {
        display: flex;
        align-items: center;
        padding: 1rem 1.5rem;
        background: rgba(0,0,0,0.3);
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      .ud-dots {
        display: flex;
        gap: 6px;
      }
      .ud-dot {
        width: 10px; height: 10px; border-radius: 50%;
      }
      .ud-title {
        margin-left: auto;
        font-family: monospace;
        font-size: 0.75rem;
        color: var(--color-dim-text);
        letter-spacing: 1px;
      }
      
      .ud-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: rgba(255,255,255,0.05);
      }
      .ud-cell {
        background: rgba(15, 12, 20, 0.8);
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .ud-cell.full {
        grid-column: 1 / -1;
      }
      
      @keyframes float-soft {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }

      .pulse-dot-green {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #00E676;
        border-radius: 50%;
        box-shadow: 0 0 10px #00E676;
        animation: pulse-glow 2s infinite;
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 1; box-shadow: 0 0 12px #00E676; }
        50% { opacity: 0.5; box-shadow: 0 0 4px #00E676; }
      }
      
      .about-hero-split {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 2rem;
        align-items: center;
        min-height: 85vh;
      }
      .ud-stat-status { font-size: 1.5rem; }
      .ud-stat-primary { font-size: 2.8rem; }
      .ud-stat-secondary { font-size: 2.5rem; }

      .impact-metrics-container { margin-top: -3rem; position: relative; z-index: 5; }
      .metric-card { padding: 2.5rem; text-align: center; border-radius: 24px; }
      .metric-number { font-size: 3.5rem; font-weight: 800; line-height: 1; margin-bottom: 0.5rem; }

      @media (max-width: 992px) {
        .about-hero-split {
          grid-template-columns: 1fr;
          text-align: left;
        }
        .unified-dashboard {
          margin-top: 2rem;
        }
        .ud-grid {
          grid-template-columns: 1fr;
        }
        .ud-cell {
          padding: 1rem;
          border-right: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .ud-cell:last-child {
          border-bottom: none;
        }
        .ud-stat-status { font-size: 1.2rem; margin-bottom: 1.2rem !important; }
        .ud-stat-primary { font-size: 2rem; }
        .ud-stat-secondary { font-size: 1.8rem; }
        .impact-metrics-container { margin-top: 2rem; }
        .metric-card { padding: 1.5rem; }
        .metric-number { font-size: 2.5rem; }
        
        /* Mobile Section Spacing */
        .section:not(.page-hero) { padding: 3.5rem 0 !important; }
        .hero-ecosystem { padding: 3.5rem 0 !important; }
        .section-divider { margin-top: 3rem !important; }
        
        /* Mobile DNA Cards */
        .dna-card { padding: 1.5rem !important; }
        
        /* Mobile Timeline */
        .laser-timeline-container { padding-left: 2.5rem; margin-top: 2rem; }
        .laser-node { padding: 1.5rem; margin-bottom: 2.5rem; transform: translateX(0) !important; }
        .laser-node.active { transform: translateX(5px) !important; }
        .laser-node::before { left: -3.05rem; top: 1.5rem; width: 14px; height: 14px; }
      }

      /* Background Grid Floor */
      .grid-floor {
        position: absolute;
        bottom: -20%;
        left: -50%;
        width: 200%;
        height: 100%;
        background-image: 
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 60px 60px;
        transform: perspective(600px) rotateX(75deg);
        pointer-events: none;
        z-index: 0;
        mask-image: radial-gradient(circle at center top, black 0%, transparent 60%);
        -webkit-mask-image: radial-gradient(circle at center top, black 0%, transparent 60%);
      }

      /* Marquee */
      .marquee-container {
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        padding: 4rem 0;
        background: linear-gradient(90deg, transparent, rgba(139,92,246,0.05), transparent);
        border-top: 1px solid rgba(255,255,255,0.05);
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      .marquee-content {
        display: inline-block;
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: -0.02em;
        color: rgba(255,255,255,0.1);
        animation: marquee 30s linear infinite;
      }
      .marquee-content span {
        -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        color: transparent;
      }
      .marquee-content strong {
        color: var(--color-primary-light);
        -webkit-text-stroke: 0;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      /* Bento Hover Pulses */
      .dna-card {
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease;
      }
      .dna-card:hover {
        transform: translateY(-8px) scale(1.02);
      }
      .dna-icon-wrap {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        background: rgba(255,255,255,0.05);
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
      }
      .dna-card:hover .dna-icon-wrap {
        background: var(--hover-color, rgba(139, 92, 246, 0.2));
        box-shadow: 0 0 20px var(--hover-color, rgba(139, 92, 246, 0.4));
      }

      /* Futuristic Timeline */
      .laser-timeline-container {
        position: relative;
        padding-left: 4rem;
        margin-top: 4rem;
      }
      .laser-spine {
        position: absolute;
        top: 0; left: 0; bottom: 0;
        width: 4px;
        background: rgba(255,255,255,0.05);
        border-radius: 4px;
      }
      .laser-progress {
        position: absolute;
        top: 0; left: 0; width: 4px; height: 0%;
        background: linear-gradient(180deg, transparent, var(--color-primary-light), #00E676);
        box-shadow: 0 0 20px var(--color-primary-light), 0 0 10px #00E676;
        border-radius: 4px;
        transition: height 0.1s linear;
      }
      .laser-node {
        position: relative;
        margin-bottom: 5rem;
        padding: 3rem;
        background: linear-gradient(135deg, rgba(15,12,20,0.9) 0%, rgba(5,5,10,0.95) 100%);
        border-radius: 12px;
        border: 1px solid rgba(255,255,255,0.05);
        border-left: 3px solid rgba(255,255,255,0.1);
        transition: all 0.5s ease;
        overflow: hidden;
      }
      /* Node Tech Accents */
      .laser-node::before {
        content: '';
        position: absolute;
        left: -4.6rem;
        top: 3.5rem;
        width: 18px;
        height: 18px;
        background: var(--color-dark-bg);
        border: 3px solid rgba(255,255,255,0.2);
        border-radius: 50%;
        transition: all 0.4s ease;
        z-index: 2;
      }
      .laser-node::after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, var(--node-color, rgba(255,255,255,0.1)), transparent);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      .laser-node.active {
        border-left-color: var(--node-color, var(--color-primary-light));
        box-shadow: 30px 30px 60px rgba(0,0,0,0.8), inset 20px 0 60px rgba(0,0,0,0.5);
        transform: translateX(10px);
      }
      .laser-node.active::before {
        background: var(--node-color, var(--color-primary-light));
        border-color: var(--node-color, var(--color-primary-light));
        box-shadow: 0 0 20px var(--node-color, var(--color-primary-light));
        transform: scale(1.2);
      }
      .laser-node.active::after {
        opacity: 1;
      }
      .node-header-ui {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .status-pill {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 0.2rem 0.6rem;
        border-radius: 12px;
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.5);
      }
      .laser-node.active .status-pill {
        background: var(--node-color-dim, rgba(139,92,246,0.1));
        color: var(--node-color, var(--color-primary-light));
        box-shadow: 0 0 10px var(--node-color-dim, rgba(139,92,246,0.2));
      }
    </style>

    <!-- 1. The Vision Hero -->
    <section class="section page-hero" style="padding-bottom: 2rem; position: relative; overflow: hidden;">
      <div class="grid-floor"></div>
      <div style="position: absolute; top: -20%; right: -10%; width: 60vw; height: 60vw; background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 60%); pointer-events: none; z-index: 0;"></div>
      
      <div class="container-wide about-hero-split" style="position: relative; z-index: 1;">
        <!-- Left: Typography -->
        <div class="hero-text-block" style="max-width: 600px; text-align: left;">
          <div class="detail-hero-badge reveal" style="--badge-color: #00E676; margin-bottom: 1.5rem; justify-content: flex-start;">
            <span class="badge-dot"></span>THE COMPANY
          </div>
          <h1 class="heading-hero reveal" style="margin-bottom: 1.5rem;">
            Engineering the <br>
            <span class="text-gradient">Conversational Internet.</span>
          </h1>
          <p class="text-body-lg reveal" style="font-size: 1.15rem; color: #A1A1AA; margin-bottom: 2.5rem; max-width: 90%;">
            We are a collective of distributed systems engineers and AI researchers building the low-latency infrastructure that powers real-time business communication across the globe.
          </p>
          <div class="hero-actions reveal" style="justify-content: flex-start;">
            <button id="btn-explore-dna" class="btn btn-primary">Explore Our DNA</button>
          </div>
        </div>

        <!-- Right: Unified Command Center Dashboard -->
        <div class="reveal" style="display: flex; justify-content: center; align-items: center;">
          
          <div class="unified-dashboard">
            <!-- Titlebar -->
            <div class="ud-titlebar">
              <div class="ud-dots">
                <div class="ud-dot" style="background: #FF5F56;"></div>
                <div class="ud-dot" style="background: #FFBD2E;"></div>
                <div class="ud-dot" style="background: #27C93F;"></div>
              </div>
              <div class="ud-title">BOTZO.IO - COMMAND CENTER</div>
            </div>

            <!-- Bento Grid Content -->
            <div class="ud-grid">
              
              <!-- Top Row: Full Width Network Status -->
              <div class="ud-cell full" style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                  <span style="font-size: 0.8rem; color: var(--color-dim-text); text-transform: uppercase; letter-spacing: 1px;">Network Status</span>
                  <span class="pulse-dot-green"></span>
                </div>
                <div class="ud-stat-status" style="font-weight: 600; color: #fff; margin-bottom: 2rem;">All Systems Operational</div>
                
                <!-- Fake Load Bars -->
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--color-dim-text); margin-bottom: 0.4rem;">
                      <span>EU-Central</span>
                      <span style="color: #00E676;">99.99%</span>
                    </div>
                    <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                      <div style="width: 100%; height: 100%; background: #00E676; box-shadow: 0 0 10px #00E676;"></div>
                    </div>
                  </div>
                  <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--color-dim-text); margin-bottom: 0.4rem;">
                      <span>AP-South</span>
                      <span style="color: #00E676;">99.99%</span>
                    </div>
                    <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;">
                      <div style="width: 98%; height: 100%; background: #00E676; box-shadow: 0 0 10px #00E676;"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Bottom Left: Latency -->
              <div class="ud-cell" style="border-right: 1px solid rgba(255,255,255,0.05);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                  <span style="font-size: 0.75rem; color: #B84DFF; text-transform: uppercase;">API Latency</span>
                </div>
                <div style="display: flex; align-items: baseline; gap: 0.5rem;">
                  <div class="ud-stat-primary" style="font-weight: 700; color: #fff; line-height: 1;">12</div>
                  <div style="font-size: 1.2rem; color: #B84DFF;">ms</div>
                </div>
                <div style="font-size: 0.75rem; color: var(--color-dim-text); margin-top: 0.5rem;">Global Avg</div>
              </div>

              <!-- Bottom Right: Connections -->
              <div class="ud-cell">
                <div style="font-size: 0.75rem; color: var(--color-dim-text); margin-bottom: 1.5rem; text-transform: uppercase;">Total Connections</div>
                <div class="ud-stat-secondary" style="font-weight: 700; color: #fff; line-height: 1;">142<span style="color: var(--color-dim-text);">.8M</span></div>
                <div style="font-size: 0.8rem; color: #00E676; margin-top: 0.8rem; display: flex; align-items: center; gap: 0.4rem;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  +24% this week
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. The Impact Metrics & Marquee -->
    <section class="section" style="padding: 0;">
      <!-- Giant Scrolling Marquee -->
      <div class="marquee-container reveal">
        <div class="marquee-content">
          THE WORLD COMMUNICATES IN REAL-TIME. <span>BUSINESSES WERE STUCK IN THE INBOX ERA.</span> <strong>WE CHANGED THAT.</strong> &nbsp;&nbsp;&nbsp; THE WORLD COMMUNICATES IN REAL-TIME. <span>BUSINESSES WERE STUCK IN THE INBOX ERA.</span> <strong>WE CHANGED THAT.</strong>
        </div>
      </div>

      <!-- Glowing Metric Counters -->
      <div class="container-wide impact-metrics-container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          
          <div class="glass-card-strong glow-border reveal metric-card">
            <div class="metric-number counter" style="color: #00B0FF;" data-target="50" data-suffix="M+">0</div>
            <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Monthly API Requests</h3>
            <p style="color: var(--color-dim-text); font-size: 0.9rem; margin: 0;">Elastic autoscaling ensures zero downtime during enterprise campaign spikes.</p>
          </div>
          
          <div class="glass-card-strong glow-border reveal metric-card">
            <div class="metric-number counter" style="color: #00E676;" data-target="800" data-suffix="ms" data-prefix="< ">0</div>
            <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Median Network Latency</h3>
            <p style="color: var(--color-dim-text); font-size: 0.9rem; margin: 0;">Direct nodes into carrier routing frameworks bypass standard limitations.</p>
          </div>
          
          <div class="glass-card-strong glow-border reveal metric-card">
            <div class="metric-number counter" style="color: #FFD600;" data-target="99" data-suffix=".99%">0</div>
            <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Uptime SLA Guarantee</h3>
            <p style="color: var(--color-dim-text); font-size: 0.9rem; margin: 0;">Multi-region failover and redundant database architectures across AWS.</p>
          </div>

        </div>
      </div>
    </section>

    <div class="section-divider" style="margin-top: 6rem;"></div>

    <!-- 3. Engineering DNA -->
    <section id="dna" class="section hero-ecosystem" style="padding: 6rem 0; position: relative;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(0,230,118,0.03) 0%, transparent 70%); pointer-events: none;"></div>
      
      <div class="container-wide" style="position: relative; z-index: 1;">
        <div class="section-header" style="text-align: center;">
          <span class="text-overline" style="color: #00E676;">Platform Principles</span>
          <h2 class="heading-section">Built by Engineers, <span class="text-gradient" style="background: linear-gradient(135deg, #00E676, #00B0FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">For Scale.</span></h2>
          <p class="text-body-lg" style="margin: 0 auto;">We don't do brittle workarounds. Everything is architected for maximum durability.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-top: 4rem;">
          
          <div class="glass-card-strong dna-card reveal" style="padding: 2.5rem; border-radius: 24px;" style="--hover-color: rgba(0,230,118,0.2);">
            <div class="dna-icon-wrap" style="color: #00E676;">⚡</div>
            <h4 style="font-size: 1.3rem; color: #fff; margin-bottom: 1rem;">Zero-Latency Focus</h4>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 0.95rem;">
              We reject lag. Every microservice is optimized to reduce conversational friction between businesses and clients to absolute zero. Redis caching at the edge ensures immediate context retrieval.
            </p>
          </div>
          
          <div class="glass-card-strong dna-card reveal" style="padding: 2.5rem; border-radius: 24px;" style="--hover-color: rgba(0,176,255,0.2);">
            <div class="dna-icon-wrap" style="color: #00B0FF;">🔒</div>
            <h4 style="font-size: 1.3rem; color: #fff; margin-bottom: 1rem;">Ironclad Tokenization</h4>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 0.95rem;">
              Customer data is sacred. End-to-end tokenization and strict VPC perimeters ensure chat histories are mathematically guarded. We are SOC2 and GDPR compliant by default.
            </p>
          </div>
          
          <div class="glass-card-strong dna-card reveal" style="padding: 2.5rem; border-radius: 24px;" style="--hover-color: rgba(184,77,255,0.2);">
            <div class="dna-icon-wrap" style="color: #B84DFF;">🧠</div>
            <h4 style="font-size: 1.3rem; color: #fff; margin-bottom: 1rem;">Algorithmic Empathy</h4>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 0.95rem;">
              We blend natural language processing with rigid deterministic logic to create AI flows that actually solve user problems, preventing the dreaded "I didn't understand that" loops.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. Futuristic Timeline -->
    <section class="section" style="padding: 6rem 0; background: rgba(10, 10, 14, 0.4); border-top: 1px solid rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.03); position: relative; overflow: hidden;">
      <div class="grid-floor" style="top: 0; bottom: auto; transform: perspective(600px) rotateX(-75deg); mask-image: linear-gradient(180deg, black 0%, transparent 100%); -webkit-mask-image: linear-gradient(180deg, black 0%, transparent 100%);"></div>
      <div class="container-standard" style="max-width: 900px; position: relative; z-index: 1;">
        <div class="section-header">
          <span class="text-overline" style="color: var(--color-primary-light);">The Journey</span>
          <h2 class="heading-section">Evolution of the Grid</h2>
        </div>
        
        <div class="laser-timeline-container" id="roadmap-timeline">
          <div class="laser-spine"></div>
          <div class="laser-progress" id="timeline-progress-bar"></div>
          
          <div class="laser-node reveal" style="--node-color: var(--color-primary-light); --node-color-dim: rgba(139, 92, 246, 0.1);">
            <div class="node-header-ui">
              <span style="font-family: monospace; color: rgba(255,255,255,0.4); font-size: 0.75rem;">SYS.LOG.2021</span>
              <span class="status-pill">PHASE I</span>
            </div>
            <h3 style="font-size: 1.5rem; color: #fff; margin: 0.5rem 0 1rem 0;">Chatbot Prototype Engine</h3>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 1rem; margin: 0;">
              Created the initial auto-reply engine as an experimental API handler, testing the extreme limits of conversational logic trees on scalable cloud functions.
            </p>
          </div>
          
          <div class="laser-node reveal" style="--node-color: #00B0FF; --node-color-dim: rgba(0, 176, 255, 0.1);">
            <div class="node-header-ui">
              <span style="font-family: monospace; color: rgba(255,255,255,0.4); font-size: 0.75rem;">META.API.2022</span>
              <span class="status-pill">PHASE II</span>
            </div>
            <h3 style="font-size: 1.5rem; color: #fff; margin: 0.5rem 0 1rem 0;">Official Meta Integration Node</h3>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 1rem; margin: 0;">
              Registered as an official Meta Business Solution Provider, bypassing third-party limits to launch bulk campaigns and our unified Team Inbox cockpit.
            </p>
          </div>
          
          <div class="laser-node reveal" style="--node-color: #00E676; --node-color-dim: rgba(0, 230, 118, 0.1);">
            <div class="node-header-ui">
              <span style="font-family: monospace; color: rgba(255,255,255,0.4); font-size: 0.75rem;">OMNI.SYNC.2023</span>
              <span class="status-pill">PHASE III</span>
            </div>
            <h3 style="font-size: 1.5rem; color: #fff; margin: 0.5rem 0 1rem 0;">Omnichannel Orchestrator</h3>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 1rem; margin: 0;">
              Connected Instagram DM, Facebook, and RCS Messaging into a single backend. Deployed our flagship no-code visual workflow builder to thousands of users.
            </p>
          </div>
          
          <div class="laser-node reveal" style="--node-color: #FFD600; --node-color-dim: rgba(255, 214, 0, 0.1);">
            <div class="node-header-ui">
              <span style="font-family: monospace; color: rgba(255,255,255,0.4); font-size: 0.75rem;">COMM.PAY.2024</span>
              <span class="status-pill">PHASE IV</span>
            </div>
            <h3 style="font-size: 1.5rem; color: #fff; margin: 0.5rem 0 1rem 0;">Commerce & Payments Layer</h3>
            <p style="color: var(--color-muted-text); line-height: 1.6; font-size: 1rem; margin: 0;">
              Integrated in-chat payments (Razorpay/Stripe), automated webhooks, and launched dynamic QR entry check-in systems for massive offline events.
            </p>
          </div>
          
          <div class="laser-node reveal" style="--node-color: #FF0055; --node-color-dim: rgba(255, 0, 85, 0.1); margin-bottom: 0;">
            <div class="node-header-ui">
              <span style="font-family: monospace; color: rgba(255,255,255,0.4); font-size: 0.75rem;">AI.CORE.2025</span>
              <span class="status-pill">CURRENT</span>
            </div>
            <h3 style="font-size: 1.5rem; color: #fff; margin: 0.5rem 0 1rem 0;">AI Intelligent Scale Layer</h3>
            <p style="color: var(--color-white-text); line-height: 1.6; font-size: 1rem; margin: 0;">
              Deploying deep NLP intent recognition models, voice AI, and dynamic agent routing. Scaling infrastructure to support over 100 million transactions monthly with zero latency drop.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Bind counter animation logic
  setTimeout(() => {
    const counters = container.querySelectorAll('.counter');
    const animateCounters = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseFloat(target.getAttribute('data-target'));
          const suffix = target.getAttribute('data-suffix') || '';
          const prefix = target.getAttribute('data-prefix') || '';
          const duration = 2000;
          let startTimestamp = null;
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = (easeOutQuart * endValue).toFixed(endValue % 1 !== 0 ? 1 : 0);
            
            target.innerText = prefix + current + suffix;
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              target.innerText = prefix + endValue + suffix;
            }
          };
          
          window.requestAnimationFrame(step);
          observer.unobserve(target);
        }
      });
    };
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(animateCounters, { threshold: 0.5 });
      counters.forEach(counter => observer.observe(counter));
    }
  }, 100);

  // Bind dynamic scroll logic for the laser timeline
  setTimeout(() => {
    const timeline = container.querySelector('#roadmap-timeline');
    const progressBar = container.querySelector('#timeline-progress-bar');
    const nodes = container.querySelectorAll('.laser-node');
    
    if (timeline && progressBar) {
      let ticking = false;
      const onScroll = () => {
        if (!document.contains(timeline)) {
          window.removeEventListener('scroll', onScroll);
          return;
        }
        
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (!document.contains(timeline)) {
              ticking = false;
              return;
            }
            
            const rect = timeline.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate how much of the timeline is scrolled past the middle of the screen
            const scrollPosition = (viewportHeight / 2) - rect.top;
            const totalHeight = rect.height;
            
            let percentage = (scrollPosition / totalHeight) * 100;
            percentage = Math.max(0, Math.min(percentage, 100)); // clamp between 0 and 100
            
            progressBar.style.height = percentage + '%';
            
            // Highlight nodes as the progress bar passes them
            nodes.forEach((node) => {
              const nodeRect = node.getBoundingClientRect();
              const activationPoint = (viewportHeight / 2) + 80; // slightly below center
              
              if (nodeRect.top < activationPoint) {
                node.classList.add('active');
              } else {
                node.classList.remove('active');
              }
            });
            
            ticking = false;
          });
          ticking = true;
        }
      };
      
      window.addEventListener('scroll', onScroll, { passive: true });
      // Trigger once on load
      setTimeout(onScroll, 300);
      
      // Smooth scroll for DNA CTA
      const exploreBtn = container.querySelector('#btn-explore-dna');
      const dnaSection = container.querySelector('#dna');
      if (exploreBtn && dnaSection) {
        exploreBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
          const top = dnaSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
          window.scrollTo({ top, behavior: 'smooth' });
        });
      }
    }
  }, 100);

  // Append Final CTA
  container.appendChild(createFinalCTA());

  return container;
}
