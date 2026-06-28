/* ═══════════════════════════════════════════════════
   BOTZO.IO — ABOUT OUR VISION & INFRASTRUCTURE
   A cinematic, high-performance storytelling narrative.
   ═══════════════════════════════════════════════════ */

export function createAbout() {
  const container = document.createElement('div');
  container.className = 'page about-page';

  container.innerHTML = `
    <style>
      /* --- Bespoke Styles for About Redesign --- */
      .about-genesis-hero {
        position: relative;
        min-height: 85vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
      }
      
      .genesis-grid-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: 
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 60px 60px;
        background-position: center;
        z-index: 0;
        transform: perspective(500px) rotateX(60deg) translateY(-100px) scale(2);
        opacity: 0.4;
      }

      .genesis-glow {
        position: absolute;
        width: 60vw;
        height: 60vw;
        background: radial-gradient(circle, rgba(156, 39, 255, 0.15) 0%, rgba(0, 176, 255, 0.05) 40%, transparent 70%);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        pointer-events: none;
      }

      .about-bento-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: 240px;
        gap: 1.5rem;
        margin-top: 3rem;
      }
      
      .bento-card {
        border-radius: 24px;
        padding: 2.5rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(15, 12, 20, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }
      
      .bento-card:hover {
        transform: translateY(-5px);
        border-color: rgba(156, 39, 255, 0.3);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 40px rgba(156, 39, 255, 0.1);
      }

      .bento-large { grid-column: span 8; grid-row: span 2; }
      .bento-tall { grid-column: span 4; grid-row: span 2; }
      .bento-wide { grid-column: span 8; grid-row: span 1; }
      .bento-square { grid-column: span 4; grid-row: span 1; }

      @media (max-width: 1024px) {
        .about-bento-grid {
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(200px, auto);
        }
        .bento-large, .bento-tall, .bento-wide, .bento-square { grid-column: span 2; grid-row: span 1; }
      }
      @media (max-width: 640px) {
        .about-bento-grid { grid-template-columns: 1fr; }
        .bento-large, .bento-tall, .bento-wide, .bento-square { grid-column: 1; }
        .bento-card { padding: 1.5rem; }
      }

      .about-timeline-modern {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
        padding-left: 2rem;
        margin-top: 4rem;
      }
      
      .timeline-spine {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: rgba(255,255,255,0.05);
        border-radius: 4px;
      }

      .timeline-progress {
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 0%;
        background: linear-gradient(180deg, var(--color-primary-light), var(--color-blue));
        border-radius: 4px;
        box-shadow: 0 0 15px var(--color-primary-light);
        transition: height 0.3s ease-out;
      }

      .timeline-node {
        position: relative;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        width: 100%;
        transition: all 0.4s ease;
      }
      
      .timeline-node::before {
        content: '';
        position: absolute;
        left: -37px;
        top: 32px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--color-dark-bg);
        border: 3px solid rgba(255,255,255,0.2);
        transition: all 0.4s ease;
        z-index: 2;
      }

      .timeline-node:hover, .timeline-node.active {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(156, 39, 255, 0.2);
      }
      
      .timeline-node:hover::before, .timeline-node.active::before {
        border-color: var(--color-primary-light);
        box-shadow: 0 0 15px var(--color-primary-light);
      }

    </style>

    <!-- 1. The Genesis Hero -->
    <section class="about-genesis-hero">
      <div class="genesis-glow"></div>
      <div class="genesis-grid-bg"></div>
      
      <div class="container-standard" style="position: relative; z-index: 1;">
        <div class="detail-hero-badge reveal" style="--badge-color: var(--color-primary-light); margin: 0 auto 2rem auto;">
          <span class="badge-dot"></span>THE COMMUNICATION GRID
        </div>
        <h1 class="heading-hero reveal" style="font-size: clamp(3rem, 6vw, 5.5rem); line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.02em;">
          Building the Engine of<br>
          <span class="text-gradient">Modern Communication.</span>
        </h1>
        <p class="text-body-lg reveal" style="max-width: 650px; margin: 0 auto 3rem auto; color: var(--color-muted-text); font-size: 1.2rem;">
          We build high-capacity, low-latency business communication pipelines that resolve conversational friction at a global scale.
        </p>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- 2. The Mission Statement -->
    <section class="section" style="padding: 8rem 0; background: linear-gradient(180deg, transparent, rgba(156, 39, 255, 0.02) 50%, transparent);">
      <div class="container-standard" style="max-width: 900px; text-align: center;">
        <h2 class="reveal" style="font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 500; line-height: 1.3; color: var(--color-white-text); font-family: var(--font-heading);">
          The world communicates in real-time. Businesses were stuck in the inbox era. <span style="color: var(--color-primary-light); font-weight: 700;">We changed that.</span>
        </h2>
      </div>
    </section>

    <!-- 3. Global Infrastructure Bento Box -->
    <section class="section" style="padding: 4rem 0;">
      <div class="container-standard">
        <div class="section-header">
          <span class="text-overline" style="color: var(--color-blue);">Global Infrastructure</span>
          <h2 class="heading-section">Scale Without Limits</h2>
        </div>
        
        <div class="about-bento-grid">
          
          <!-- Bento Large: Map / Core Metric -->
          <div class="bento-card bento-large reveal">
            <div style="position: absolute; top: 0; right: 0; width: 70%; height: 100%; background: radial-gradient(circle at top right, rgba(156,39,255,0.1) 0%, transparent 70%); pointer-events: none;"></div>
            <div>
              <div style="font-size: 4rem; font-weight: 800; color: var(--color-primary-light); line-height: 1;">50M+</div>
              <h3 style="font-size: 1.5rem; color: #fff; margin: 0.5rem 0;">Monthly Messages Processed</h3>
              <p style="color: var(--color-muted-text); max-width: 400px; margin-top: 1rem;">Our elastic load balancers dynamically scale server threads during massive campaign notification spikes across global regions.</p>
            </div>
            <div style="display: flex; gap: 1rem; align-items: flex-end;">
               <div style="height: 40px; width: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative;"><div style="position:absolute; bottom:0; width:100%; height: 60%; background: var(--color-primary-light); border-radius: 4px;"></div></div>
               <div style="height: 60px; width: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative;"><div style="position:absolute; bottom:0; width:100%; height: 80%; background: var(--color-primary-light); border-radius: 4px;"></div></div>
               <div style="height: 50px; width: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative;"><div style="position:absolute; bottom:0; width:100%; height: 40%; background: var(--color-primary-light); border-radius: 4px;"></div></div>
               <div style="height: 80px; width: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative;"><div style="position:absolute; bottom:0; width:100%; height: 90%; background: var(--color-primary-light); border-radius: 4px;"></div></div>
               <div style="height: 45px; width: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; position: relative;"><div style="position:absolute; bottom:0; width:100%; height: 70%; background: var(--color-primary-light); border-radius: 4px;"></div></div>
            </div>
          </div>

          <!-- Bento Square: Latency -->
          <div class="bento-card bento-square reveal">
            <div style="font-size: 2.5rem; font-weight: 800; color: #00E676;">&lt; 800ms</div>
            <div>
              <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Median Latency</h3>
              <p style="color: var(--color-muted-text); font-size: 0.85rem;">Direct nodes into carrier routing frameworks bypass standard limits.</p>
            </div>
          </div>

          <!-- Bento Square: SLA -->
          <div class="bento-card bento-square reveal">
            <div style="font-size: 2.5rem; font-weight: 800; color: #00B0FF;">99.99%</div>
            <div>
              <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 0.5rem;">Uptime SLA</h3>
              <p style="color: var(--color-muted-text); font-size: 0.85rem;">Multi-region failover and redundant database architectures.</p>
            </div>
          </div>

          <!-- Bento Wide: Trust -->
          <div class="bento-card bento-wide reveal" style="flex-direction: row; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: #FFD600;">2,500+</div>
              <h3 style="font-size: 1.25rem; color: #fff; margin: 0.5rem 0;">Enterprise Clients</h3>
            </div>
            <div style="text-align: right; max-width: 300px;">
              <p style="color: var(--color-muted-text); font-size: 0.9rem;">From innovative startups to global enterprise networks relying on our infrastructure.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- 4. Engineering DNA (Core Values) -->
    <section class="section" style="padding: 6rem 0;">
      <div class="container-standard">
        <div class="section-header" style="text-align: center;">
          <span class="text-overline" style="color: #00E676;">Our DNA</span>
          <h2 class="heading-section">Built by Engineers,<br>For Scale.</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 4rem;">
          <div class="glass-card reveal" style="padding: 2.5rem;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">⚡</div>
            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 1rem;">Zero-Latency Focus</h4>
            <p style="color: var(--color-muted-text); font-size: 0.9rem; line-height: 1.6;">We reject lag. Every microservice is optimized to reduce conversational friction between businesses and clients to absolute zero.</p>
          </div>
          <div class="glass-card reveal" style="padding: 2.5rem;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🔒</div>
            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 1rem;">Ironclad Tokenization</h4>
            <p style="color: var(--color-muted-text); font-size: 0.9rem; line-height: 1.6;">Customer data is sacred. End-to-end tokenization and strict VPC perimeters ensure chat histories are mathematically guarded.</p>
          </div>
          <div class="glass-card reveal" style="padding: 2.5rem;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🧠</div>
            <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 1rem;">Algorithmic Empathy</h4>
            <p style="color: var(--color-muted-text); font-size: 0.9rem; line-height: 1.6;">We blend natural language processing with rigid deterministic logic to create AI flows that actually solve user problems.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Dynamic Evolution Timeline -->
    <section class="section" style="padding: 8rem 0; background: rgba(15, 12, 20, 0.4); border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container-standard" style="max-width: 800px;">
        <div class="section-header">
          <span class="text-overline" style="color: var(--color-primary-light);">Evolution</span>
          <h2 class="heading-section">The Botzo Roadmap</h2>
        </div>
        
        <div class="about-timeline-modern" id="roadmap-timeline">
          <div class="timeline-spine"></div>
          <div class="timeline-progress" id="timeline-progress-bar"></div>
          
          <div class="timeline-node reveal">
            <span style="font-size: 0.85rem; color: var(--color-primary-light); font-weight: 700; letter-spacing: 1px;">2021</span>
            <h3 style="font-size: 1.4rem; color: #fff; margin: 0.5rem 0;">Chatbot Prototype Launched</h3>
            <p style="color: var(--color-muted-text); margin: 0; line-height: 1.6;">Created the initial auto-reply engine as an experimental API handler, testing the extreme limits of conversational logic trees.</p>
          </div>
          
          <div class="timeline-node reveal">
            <span style="font-size: 0.85rem; color: #00B0FF; font-weight: 700; letter-spacing: 1px;">2022</span>
            <h3 style="font-size: 1.4rem; color: #fff; margin: 0.5rem 0;">Official Meta BSP Node</h3>
            <p style="color: var(--color-muted-text); margin: 0; line-height: 1.6;">Registered as an official Meta Business Solution Provider, launching bulk campaigns and our unified Team Inbox cockpit.</p>
          </div>
          
          <div class="timeline-node reveal">
            <span style="font-size: 0.85rem; color: #00E676; font-weight: 700; letter-spacing: 1px;">2023</span>
            <h3 style="font-size: 1.4rem; color: #fff; margin: 0.5rem 0;">Omnichannel Flow Orchestrator</h3>
            <p style="color: var(--color-muted-text); margin: 0; line-height: 1.6;">Connected Instagram DM, Facebook, and RCS Messaging into a single backend. Deployed our flagship no-code visual workflow builder.</p>
          </div>
          
          <div class="timeline-node reveal">
            <span style="font-size: 0.85rem; color: #FFD600; font-weight: 700; letter-spacing: 1px;">2024</span>
            <h3 style="font-size: 1.4rem; color: #fff; margin: 0.5rem 0;">Commerce & Payments Layer</h3>
            <p style="color: var(--color-muted-text); margin: 0; line-height: 1.6;">Integrated in-chat payments, automated Stripe webhooks, and launched dynamic QR entry check-in systems for events.</p>
          </div>
          
          <div class="timeline-node reveal">
            <span style="font-size: 0.85rem; color: var(--color-primary-light); font-weight: 700; letter-spacing: 1px;">2025 & BEYOND</span>
            <h3 style="font-size: 1.4rem; color: #fff; margin: 0.5rem 0;">AI Intelligent Scale Layer</h3>
            <p style="color: var(--color-muted-text); margin: 0; line-height: 1.6;">Deploying deep NLP intent recognition models and dynamic agent routing. Scaling to support over 100 million transactions monthly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Final CTA -->
    <section class="section" style="padding: 8rem 0; text-align: center; position: relative;">
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80vw; height: 300px; background: radial-gradient(ellipse, rgba(156, 39, 255, 0.1) 0%, transparent 60%); pointer-events: none; z-index: -1;"></div>
      <div class="container-standard">
        <h2 class="heading-section reveal" style="font-size: clamp(2rem, 5vw, 4rem); margin-bottom: 1.5rem;">Join the Grid.</h2>
        <p class="text-body-lg reveal" style="max-width: 500px; margin: 0 auto 2.5rem auto; color: var(--color-muted-text);">
          Ready to scale your business communication? Our infrastructure is primed.
        </p>
        <div class="hero-actions reveal" style="justify-content: center;">
          <a href="/contact" class="btn btn-primary">Talk to Engineering</a>
          <a href="/book-demo" class="btn btn-ghost">Schedule Demo</a>
        </div>
      </div>
    </section>
  `;

  // Bind dynamic scroll logic for the timeline pipeline
  setTimeout(() => {
    const timeline = container.querySelector('#roadmap-timeline');
    const progressBar = container.querySelector('#timeline-progress-bar');
    const nodes = container.querySelectorAll('.timeline-node');
    
    if (timeline && progressBar) {
      window.addEventListener('scroll', () => {
        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the timeline is scrolled past the middle of the screen
        const scrollPosition = (viewportHeight / 2) - rect.top;
        const totalHeight = rect.height;
        
        let percentage = (scrollPosition / totalHeight) * 100;
        percentage = Math.max(0, Math.min(percentage, 100)); // clamp between 0 and 100
        
        progressBar.style.height = `${percentage}%`;
        
        // Highlight nodes as the progress bar passes them
        nodes.forEach(node => {
          const nodeRect = node.getBoundingClientRect();
          if (nodeRect.top < (viewportHeight / 2) + 50) {
            node.classList.add('active');
          } else {
            node.classList.remove('active');
          }
        });
      }, { passive: true });
    }
  }, 100);

  return container;
}
