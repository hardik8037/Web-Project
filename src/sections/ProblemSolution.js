/* ═══════════════════════════════════════════════════
   PROBLEM → SOLUTION TRANSFORMATION SECTION
   ═══════════════════════════════════════════════════ */

export function createProblemSolution() {
  const section = document.createElement('section');
  section.id = 'transformation';
  section.className = 'section transform-section';

  section.innerHTML = `
    <div class="container-wide">
      <div class="section-header">
        <span class="text-overline">Transformation</span>
        <h2 class="heading-section">From Chaos <span class="text-gradient">to Control</span></h2>
        <p class="text-body-lg">See how businesses transform their operations with Botzo.io's automation ecosystem.</p>
      </div>

      <div class="transform-grid">
        <!-- BEFORE: Problems -->
        <div class="transform-col transform-before reveal-left">
          <div class="transform-label transform-label-before">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--color-red)" stroke-width="1.5"/><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="var(--color-red)" stroke-width="1.5" stroke-linecap="round"/></svg>
            Without Botzo.io
          </div>
          
          <div class="transform-card transform-card-problem">
            <div class="transform-card-icon">📵</div>
            <div class="transform-card-content">
              <h4>Missed Leads & Slow Replies</h4>
              <p>Customers wait hours or days for responses. 67% of leads go cold within the first 5 minutes.</p>
            </div>
            <div class="transform-metric-bad">67% leads lost</div>
          </div>

          <div class="transform-card transform-card-problem">
            <div class="transform-card-icon">🔀</div>
            <div class="transform-card-content">
              <h4>Scattered Communication</h4>
              <p>Messages spread across WhatsApp, Instagram, Facebook, email — nothing centralized.</p>
            </div>
            <div class="transform-metric-bad">5+ platforms</div>
          </div>

          <div class="transform-card transform-card-problem">
            <div class="transform-card-icon">⏱️</div>
            <div class="transform-card-content">
              <h4>Manual Repetitive Workflows</h4>
              <p>Team spends 70% of time on repetitive tasks — copy-paste responses, manual data entry.</p>
            </div>
            <div class="transform-metric-bad">70% time wasted</div>
          </div>

          <div class="transform-card transform-card-problem">
            <div class="transform-card-icon">📉</div>
            <div class="transform-card-content">
              <h4>No Visibility or Analytics</h4>
              <p>Zero insight into conversion rates, response times, or campaign performance.</p>
            </div>
            <div class="transform-metric-bad">0% visibility</div>
          </div>
        </div>

        <!-- CENTER DIVIDER -->
        <div class="transform-divider">
          <div class="transform-divider-line"></div>
          <div class="transform-divider-icon pulse-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="var(--color-primary-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="transform-divider-line"></div>
        </div>

        <!-- AFTER: Solutions -->
        <div class="transform-col transform-after reveal-right">
          <div class="transform-label transform-label-after">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--color-green)" stroke-width="1.5"/><path d="M5 8l2.5 2.5L11 6" stroke="var(--color-green)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            With Botzo.io
          </div>
          
          <div class="transform-card transform-card-solution">
            <div class="transform-card-icon">⚡</div>
            <div class="transform-card-content">
              <h4>Instant AI-Powered Responses</h4>
              <p>Automated chatbot responds in under 2 seconds, 24/7. Never miss a lead again.</p>
            </div>
            <div class="transform-metric-good">87% faster response</div>
          </div>

          <div class="transform-card transform-card-solution">
            <div class="transform-card-icon">🎯</div>
            <div class="transform-card-content">
              <h4>Centralized Communication Hub</h4>
              <p>All channels in one unified inbox. One platform, one team, one conversation thread.</p>
            </div>
            <div class="transform-metric-good">1 unified platform</div>
          </div>

          <div class="transform-card transform-card-solution">
            <div class="transform-card-icon">🤖</div>
            <div class="transform-card-content">
              <h4>Automated Workflow Engine</h4>
              <p>Build visual workflows that handle repetitive tasks automatically. Free your team to focus on growth.</p>
            </div>
            <div class="transform-metric-good">3x productivity</div>
          </div>

          <div class="transform-card transform-card-solution">
            <div class="transform-card-icon">📊</div>
            <div class="transform-card-content">
              <h4>Real-Time Analytics Dashboard</h4>
              <p>Track every metric — conversion rates, response times, campaign ROI — all in real-time.</p>
            </div>
            <div class="transform-metric-good">360° visibility</div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
