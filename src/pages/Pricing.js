/* ═══════════════════════════════════════════════════
   BOTZO.IO — PRICING MODULES PAGE
   ═══════════════════════════════════════════════════ */

import { createFAQ } from '../sections/FAQ.js';
import { createFinalCTA } from '../sections/FinalCTA.js';

const PLANS = {
  platform: [
    { name: 'Starter', desc: 'Perfect for small businesses getting started with automation.', price: { inr: { monthly: '999', yearly: '799' }, usd: { monthly: '12', yearly: '9' } }, features: ['1 WhatsApp Number', '500 Conversations/mo', 'Basic Chatbot', 'Contact Management', 'Email Support', '2 Team Members'] },
    { name: 'Growth', desc: 'For growing businesses that need more power and flexibility.', popular: true, price: { inr: { monthly: '2,999', yearly: '2,399' }, usd: { monthly: '35', yearly: '28' } }, features: ['2 WhatsApp Numbers', '5,000 Conversations/mo', 'Advanced Chatbot + AI', 'CRM + Pipeline', 'Workflow Builder', 'Bulk Campaigns', 'Instagram + Facebook', '5 Team Members', 'Priority Support'] },
    { name: 'Professional', desc: 'Enterprise-grade automation for scaling operations.', price: { inr: { monthly: '7,999', yearly: '6,399' }, usd: { monthly: '95', yearly: '76' } }, features: ['5 WhatsApp Numbers', 'Unlimited Conversations', 'AI Chatbot + NLP', 'Advanced CRM', 'Omnichannel Inbox', 'Custom Workflows', 'API Access', 'RCS Messaging', '15 Team Members', 'Dedicated Manager'] },
    { name: 'Enterprise', desc: 'Tailored solutions for large-scale enterprise needs.', isEnterprise: true, price: 'Custom', features: ['Unlimited Numbers', 'Unlimited Conversations', 'Custom AI Models', 'White-label Solution', 'Custom Integrations', 'SLA Guarantee', 'On-premise Option', 'Unlimited Team', '24/7 Priority Support'] },
  ],
  marketing: [
    { name: 'Basic', desc: 'Essential marketing for building online presence.', price: { inr: { monthly: '15,000', yearly: '12,000' }, usd: { monthly: '179', yearly: '149' } }, features: ['SEO Audit & Strategy', 'Social Media (2 platforms)', '10 Content Pieces/mo', 'Monthly Reporting', 'Google Business Setup'] },
    { name: 'Growth', desc: 'Comprehensive marketing to accelerate growth.', popular: true, price: { inr: { monthly: '35,000', yearly: '28,000' }, usd: { monthly: '419', yearly: '339' } }, features: ['Full SEO Optimization', 'Social Media (4 platforms)', '25 Content Pieces/mo', 'Google + Meta Ads', 'Lead Generation', 'Email Marketing', 'Weekly Reporting', 'Dedicated Strategist'] },
    { name: 'Performance', desc: 'High-impact marketing with measurable ROI.', price: { inr: { monthly: '75,000', yearly: '60,000' }, usd: { monthly: '899', yearly: '719' } }, features: ['Advanced SEO + Content', 'All Social Platforms', 'Performance Ads (PPC)', 'Conversion Optimization', 'Marketing Automation', 'A/B Testing', 'Real-time Dashboard', 'Bi-weekly Strategy Calls'] },
    { name: 'Enterprise', desc: 'Full-scale marketing operations for enterprises.', isEnterprise: true, price: 'Custom', features: ['Custom Strategy', 'Multi-brand Management', 'International SEO', 'Custom Attribution', 'Dedicated Team', 'Executive Reporting'] },
  ],
  webdev: [
    { name: 'Landing Page', desc: 'High-converting single-page website.', price: { inr: '25,000', usd: '299' }, features: ['1-Page Design', 'Mobile Responsive', 'SEO Optimized', 'Contact Form', 'SSL & Hosting Setup', '5-Day Delivery'] },
    { name: 'Business', desc: 'Professional multi-page business website.', popular: true, price: { inr: '60,000', usd: '719' }, features: ['Up to 8 Pages', 'Custom UI/UX Design', 'CMS Integration', 'Blog Setup', 'Analytics Integration', 'Speed Optimization', '15-Day Delivery'] },
    { name: 'Ecommerce', desc: 'Full-featured online store with payments.', price: { inr: '1,20,000', usd: '1,439' }, features: ['Shopify/WooCommerce', 'Up to 500 Products', 'Payment Gateway', 'Inventory System', 'Order Management', 'Custom Theme', '30-Day Delivery'] },
    { name: 'Enterprise', desc: 'Custom web applications and platforms.', isEnterprise: true, price: 'Custom', features: ['React/Next.js/Vue', 'Custom Backend', 'API Development', 'Scalable Architecture', 'CI/CD Pipeline', 'Dedicated Team'] },
  ],
  appdev: [
    { name: 'MVP', desc: 'Minimum viable product to validate your idea.', price: { inr: '80,000', usd: '959' }, features: ['Core Features Only', 'Single Platform', 'Basic UI Design', 'API Integration', 'Testing & QA', '30-Day Delivery'] },
    { name: 'Startup', desc: 'Feature-rich app for growing startups.', popular: true, price: { inr: '2,50,000', usd: '2,999' }, features: ['Cross-Platform (iOS + Android)', 'Custom UI/UX Design', 'Push Notifications', 'User Auth & Profiles', 'Admin Dashboard', 'App Store Deployment', '60-Day Delivery'] },
    { name: 'Business', desc: 'Comprehensive business application.', price: { inr: '5,00,000', usd: '5,999' }, features: ['Native iOS + Android', 'Advanced Features', 'Payment Integration', 'Real-time Chat', 'Analytics Dashboard', 'Third-party APIs', 'Maintenance Plan', '90-Day Delivery'] },
    { name: 'Enterprise', desc: 'Enterprise-grade mobile solutions.', isEnterprise: true, price: 'Custom', features: ['Custom Architecture', 'Microservices Backend', 'Enterprise Security', 'Offline Mode', 'Custom Integrations', 'Dedicated Team', 'SLA & Support'] },
  ],
};

export function createPricing() {
  const container = document.createElement('div');
  container.className = 'page pricing-page';

  // Global state
  let currentModule = 'platform';
  let currency = 'inr';
  let billing = 'monthly';

  container.innerHTML = `
    <!-- Pricing Hero -->
    <section class="section page-hero pricing-hero" style="padding-bottom: 0;">
      <div class="container-wide">
        <div class="section-header pricing-header-override" style="max-width: 900px; margin-bottom: 2rem;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary); margin-bottom: 1.5rem;">
            <span class="badge-dot"></span>
            <span class="badge-text">FAIR & TRANSPARENT PRICING</span>
          </div>
          <h1 class="heading-hero">Choose the Perfect Plan<br>to <span class="text-gradient">Scale Your Business</span></h1>
          <p class="text-body-lg" style="max-width: 600px; margin: 0 auto 3rem; color: rgba(255, 255, 255, 0.7);">
            Powerful automation, marketing, and development solutions built to grow with your business.
          </p>

          <!-- Combined Toggles Panel -->
          <div class="pricing-toggles-panel glass-card-strong">
            <div class="toggle-group">
              <div class="toggle-label">Currency</div>
              <!-- Currency Toggle -->
              <div class="toggle-pill-container currency-toggle-container">
                <button class="toggle-pill-btn active" data-currency="inr">INR (₹)</button>
                <button class="toggle-pill-btn" data-currency="usd">USD ($)</button>
                <div class="toggle-pill-indicator"></div>
              </div>
            </div>

            <div class="toggle-divider" id="billing-divider"></div>

            <div class="toggle-group" id="billing-toggle-wrapper">
              <div class="toggle-label">Billing Cycle</div>
              <!-- Billing Toggle -->
              <div class="toggle-pill-container billing-toggle-container">
                <button class="toggle-pill-btn active" data-billing="monthly">Monthly</button>
                <button class="toggle-pill-btn" data-billing="yearly">
                  Yearly <span class="pricing-savings-badge">
                    <span class="badge-desktop">Save 20%</span>
                    <span class="badge-mobile">-20%</span>
                  </span>
                </button>
                <div class="toggle-pill-indicator"></div>
              </div>
            </div>
          </div>

          <!-- Module Selector Tabs -->
          <div class="pricing-tabs-wrapper">
            <button class="pricing-tab-btn active" data-module="platform">Automation Platform</button>
            <button class="pricing-tab-btn" data-module="marketing">Digital Marketing</button>
            <button class="pricing-tab-btn" data-module="webdev">Web Development</button>
            <button class="pricing-tab-btn" data-module="appdev">App Development</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Columns Container -->
    <section class="section pricing-cards-section hero-ecosystem" style="padding: 0 0 4rem; margin-top: 0;">
      <div class="container-wide">
        <div class="pricing-grid" id="pricing-grid">
          <!-- Loaded dynamically via JS below -->
        </div>
      </div>
    </section>
  `;

  const grid = container.querySelector('#pricing-grid');
  const billingWrapper = container.querySelector('#billing-toggle-wrapper');
  const billingDivider = container.querySelector('#billing-divider');

  function renderGrid() {
    const plans = PLANS[currentModule];
    const isProjectBased = currentModule === 'webdev' || currentModule === 'appdev';
    
    // Manage Billing Toggle visibility
    if (isProjectBased) {
      if(billingWrapper) billingWrapper.style.display = 'none';
      if(billingDivider) billingDivider.style.display = 'none';
    } else {
      if(billingWrapper) billingWrapper.style.display = 'flex';
      if(billingDivider) billingDivider.style.display = 'block';
    }

    grid.innerHTML = plans.map(plan => {
      let priceDisplay = '';
      let periodDisplay = '';

      if (plan.isEnterprise) {
        priceDisplay = 'Custom';
        periodDisplay = '';
      } else {
        const symbol = currency === 'inr' ? '₹' : '$';
        if (isProjectBased) {
          priceDisplay = symbol + plan.price[currency];
          periodDisplay = '';
        } else {
          priceDisplay = symbol + plan.price[currency][billing];
          periodDisplay = billing === 'monthly' ? '/mo' : '/mo, billed yearly';
        }
      }

      const cardClass = plan.isEnterprise ? 'pricing-card-enterprise' : (plan.popular ? 'pricing-card-popular' : '');
      const btnClass = plan.isEnterprise ? 'btn-ghost' : (plan.popular ? 'btn-primary' : 'btn-ghost');
      const ctaText = plan.isEnterprise ? 'Contact Sales' : 'Get Started';
      const startingText = (isProjectBased && !plan.isEnterprise) ? '<div class="pricing-starting-from">Starting From</div>' : '';

      return `
      <div class="pricing-card ${cardClass} glass-card-strong">
        ${plan.popular ? '<div class="pricing-badge">Most Popular</div>' : ''}
        <div style="margin-bottom:1.5rem;">
          <h4 class="heading-card" style="margin-bottom:0.4rem;">${plan.name}</h4>
          <p class="text-caption" style="min-height:2.5rem;">${plan.desc}</p>
        </div>
        <div style="margin-bottom:1.5rem;">
          <span class="pricing-price">${priceDisplay}</span>
          ${periodDisplay ? `<span class="pricing-period">${periodDisplay}</span>` : ''}
        </div>
        <a href="/contact" class="btn ${btnClass}" style="width:100%;margin-bottom:1.5rem;">${ctaText}</a>
        
        <ul class="pricing-features">
          ${plan.features.map(f => `
            <li>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-right: 0.6rem; margin-top: 2px;"><circle cx="8" cy="8" r="6" stroke="var(--color-primary-light)" stroke-width="1.2"/><path d="M5.5 8l2 2 3-3.5" stroke="var(--color-primary-light)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              ${f}
            </li>
          `).join('')}
        </ul>
      </div>
    `}).join('');

    // Re-bind mouse parallax effects if they exist
    if (window.mouseParallax && typeof window.mouseParallax.scan === 'function') {
      window.mouseParallax.scan();
    }
  }

  // Bind Module Tabs
  const moduleBtns = container.querySelectorAll('.pricing-tab-btn');
  moduleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moduleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModule = btn.getAttribute('data-module');
      // Adding a subtle fade out/in effect for smoother transition
      grid.style.opacity = '0';
      setTimeout(() => {
        renderGrid();
        grid.style.opacity = '1';
        // Re-measure toggles
        const activeCurrency = container.querySelector('.currency-toggle-container .active');
        const activeBilling = container.querySelector('.billing-toggle-container .active');
        if(activeCurrency) updateToggleIndicator(activeCurrency);
        if(activeBilling) updateToggleIndicator(activeBilling);
      }, 150);
    });
  });

  // Toggle Indicator Math function
  function updateToggleIndicator(btn) {
    const container = btn.parentElement;
    const indicator = container.querySelector('.toggle-pill-indicator');
    if(indicator && btn) {
      indicator.style.width = `${btn.offsetWidth}px`;
      indicator.style.left = `${btn.offsetLeft}px`;
    }
  }

  // Bind Currency Toggle
  const currencyBtns = container.querySelectorAll('.currency-toggle-container .toggle-pill-btn');
  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateToggleIndicator(btn);
      currency = btn.getAttribute('data-currency');
      renderGrid();
    });
  });

  // Bind Billing Toggle
  const billingBtns = container.querySelectorAll('.billing-toggle-container .toggle-pill-btn');
  billingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      billingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateToggleIndicator(btn);
      billing = btn.getAttribute('data-billing');
      renderGrid();
    });
  });

  // Initial render & Indicator Fixes
  const syncIndicators = () => {
    const activeCurrency = container.querySelector('.currency-toggle-container .active');
    const activeBilling = container.querySelector('.billing-toggle-container .active');
    if(activeCurrency) updateToggleIndicator(activeCurrency);
    if(activeBilling) updateToggleIndicator(activeBilling);
  };

  setTimeout(() => {
    syncIndicators();
    // Add CSS transition to grid for smooth opacity fades
    grid.style.transition = 'opacity 0.2s ease-in-out';
    renderGrid();
  }, 50);

  // Recalculate indicators after fonts load and on window resize
  if (document.fonts) {
    document.fonts.ready.then(syncIndicators);
  }
  window.addEventListener('resize', syncIndicators);

  // Append FAQ & Final CTA
  container.appendChild(createFAQ());
  container.appendChild(createFinalCTA());

  return container;
}
