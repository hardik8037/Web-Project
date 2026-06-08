/* ═══════════════════════════════════════════════════
   BOTZO.IO — PRICING MODULES PAGE
   ═══════════════════════════════════════════════════ */

import { createFAQ } from '../sections/FAQ.js';
import { createFinalCTA } from '../sections/FinalCTA.js';

const PLANS = {
  platform: [
    { name: 'Starter', desc: 'Perfect for small businesses getting started with automation.', price: { inr: { monthly: '4,999', yearly: '3,999' }, usd: { monthly: '59', yearly: '49' } }, features: ['Official WhatsApp API access', '1,000 Free Contacts/mo', 'Unified Shared Inbox (3 Agents)', 'Basic Keyword Auto-Responders', 'Simple Broadcast Campaigns'] },
    { name: 'Growth', desc: 'For growing businesses that need more power and flexibility.', popular: true, price: { inr: { monthly: '9,999', yearly: '7,999' }, usd: { monthly: '119', yearly: '99' } }, features: ['Everything in Starter', '5,000 Contacts/mo', 'Shared Inbox (10 Agents)', 'Visual Workflow Builder', 'Instagram & FB Comment Auto-Replies'] },
    { name: 'Professional', desc: 'Enterprise-grade automation for scaling operations.', price: { inr: { monthly: '19,999', yearly: '15,999' }, usd: { monthly: '249', yearly: '199' } }, features: ['Everything in Growth', '15,000 Contacts/mo', 'Unlimited Agents', 'Advanced CRM & Lead Pipelines', 'In-Chat Checkout & Payments'] },
    { name: 'Enterprise', desc: 'Tailored solutions for large-scale enterprise needs.', isEnterprise: true, price: 'Custom', features: ['Custom Pricing', 'Dedicated Account Manager', 'Priority Support', 'Custom Integrations', 'Advanced Automations', 'White Label Options'] },
  ],
  marketing: [
    { name: 'Basic Marketing', desc: 'Essential marketing for building online presence.', price: { inr: { monthly: '25,000', yearly: '20,000' }, usd: { monthly: '299', yearly: '249' } }, features: ['Social Media Posts (12/mo)', 'Basic SEO Audit', 'Meta Ad Setup (Ad spend not incl.)', 'Monthly Performance Report'] },
    { name: 'Growth Marketing', desc: 'Comprehensive marketing to accelerate growth.', popular: true, price: { inr: { monthly: '50,000', yearly: '40,000' }, usd: { monthly: '599', yearly: '499' } }, features: ['Social Media Posts (24/mo)', 'Full SEO Keywords Optimization', 'Meta & Google Ads Management', 'Weekly Funnel Optimization'] },
    { name: 'Performance Marketing', desc: 'High-impact marketing with measurable ROI.', price: { inr: { monthly: '90,000', yearly: '72,000' }, usd: { monthly: '1,099', yearly: '899' } }, features: ['Custom Creative Design', 'Advanced E-commerce Retargeting', 'High-volume Lead Campaigns', 'Bi-weekly Analytics Review'] },
    { name: 'Enterprise', desc: 'Full-scale marketing operations for enterprises.', isEnterprise: true, price: 'Custom', features: ['Custom Pricing', 'Dedicated Account Manager', 'Priority Support', 'Custom Integrations', 'Advanced Automations', 'White Label Options'] },
  ],
  webdev: [
    { name: 'Business Website', desc: 'High-converting single-page or simple website.', price: { inr: '35,000', usd: '449' }, features: ['Single Page Responsive Layout', 'Futuristic UI/UX Styles', 'Contact/Lead Capture Form', 'Vite & Tailwind Architecture', 'Optional Maintenance Plan'] },
    { name: 'Corporate Website', desc: 'Professional multi-page business website.', popular: true, price: { inr: '75,000', usd: '899' }, features: ['Up to 8 Custom Pages', 'Interactive Animations (GSAP)', 'CMS Content Management Integration', 'SEO-friendly Semantic Markup', 'Optional AMC Package'] },
    { name: 'Ecommerce Website', desc: 'Full-featured online store with payments.', price: { inr: '1,50,000', usd: '1,799' }, features: ['Full Store Catalog & Cart', 'Secure Checkout Payment Hooks', 'Customer Order Dashboard', 'Custom Admin Panel'] },
    { name: 'Enterprise', desc: 'Custom web applications and platforms.', isEnterprise: true, price: 'Custom', features: ['Custom Pricing', 'Dedicated Account Manager', 'Priority Support', 'Custom Integrations', 'Advanced Automations', 'White Label Options'] },
  ],
  appdev: [
    { name: 'Android App', desc: 'Minimum viable product to validate your idea.', price: { inr: '1,50,000', usd: '1,799' }, features: ['Single Platform (Android)', 'Core Features Flow Builder', 'Firebase Backend Architecture', 'Standard UI Component Layout', 'Optional App Support Package'] },
    { name: 'iOS App', desc: 'Minimum viable product to validate your idea.', price: { inr: '1,50,000', usd: '1,799' }, features: ['Single Platform (iOS)', 'Core Features Flow Builder', 'Firebase Backend Architecture', 'Standard UI Component Layout', 'Optional App Support Package'] },
    { name: 'Cross-Platform App', desc: 'Feature-rich app for growing startups.', popular: true, price: { inr: '3,00,000', usd: '3,599' }, features: ['Dual Platform (Android & iOS)', 'Flutter Cross-platform Build', 'Third-party API Integrations', 'Custom UI/UX Micro-motions', 'Optional Maintenance Plan'] },
    { name: 'Enterprise', desc: 'Enterprise-grade mobile solutions.', isEnterprise: true, price: 'Custom', features: ['Custom Pricing', 'Dedicated Account Manager', 'Priority Support', 'Custom Integrations', 'Advanced Automations', 'White Label Options'] },
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
          <span class="text-overline"><span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--color-primary); margin-right:8px; box-shadow: 0 0 10px var(--color-primary);"></span>FAIR & TRANSPARENT PRICING</span>
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
                  Yearly
                  <span class="pricing-savings-badge">Save 20%</span>
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
            <button class="pricing-tab-btn" data-module="appdev">Mobile App Development</button>
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

  // Initial render
  setTimeout(() => {
    // Init indicators
    const activeCurrency = container.querySelector('.currency-toggle-container .active');
    const activeBilling = container.querySelector('.billing-toggle-container .active');
    if(activeCurrency) updateToggleIndicator(activeCurrency);
    if(activeBilling) updateToggleIndicator(activeBilling);
    
    // Add CSS transition to grid for smooth opacity fades
    grid.style.transition = 'opacity 0.2s ease-in-out';
    renderGrid();
  }, 50);

  // Append FAQ & Final CTA
  container.appendChild(createFAQ());
  container.appendChild(createFinalCTA());

  return container;
}
