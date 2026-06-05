/* ═══════════════════════════════════════════════════
   BOTZO.IO — PRICING MODULES PAGE
   ═══════════════════════════════════════════════════ */

import { createFAQ } from '../sections/FAQ.js';
import { createFinalCTA } from '../sections/FinalCTA.js';

const PLANS = {
  platform: [
    { name: 'Starter', price: '₹4,999', period: '/month', features: ['Official WhatsApp API access', '1,000 Free Contacts/mo', 'Unified Shared Inbox (3 Agents)', 'Basic Keyword Auto-Responders', 'Simple Broadcast Campaigns'] },
    { name: 'Growth', price: '₹9,999', period: '/month', popular: true, features: ['Everything in Starter', '5,000 Contacts/mo', 'Shared Inbox (10 Agents)', 'Visual Workflow Builder', 'Instagram & FB Comment Auto-Replies'] },
    { name: 'Professional', price: '₹19,999', period: '/month', features: ['Everything in Growth', '15,000 Contacts/mo', 'Unlimited Agents', 'Advanced CRM & Lead Pipelines', 'In-Chat Checkout & Payments'] },
    { name: 'Enterprise', price: 'Custom', period: '', features: ['Custom Contact Limits', 'Dedicated Cloud Hosting', 'API Webhooks & SDKs', 'Custom Agent QR Ticketing', '24/7 Priority SLA Manager'] },
  ],
  marketing: [
    { name: 'Basic Marketing', price: '₹25,000', period: '/month', features: ['Social Media Posts (12/mo)', 'Basic SEO Audit', 'Meta Ad Setup (Ad spend not incl.)', 'Monthly Performance Report'] },
    { name: 'Growth Marketing', price: '₹50,000', period: '/month', popular: true, features: ['Social Media Posts (24/mo)', 'Full SEO Keywords Optimization', 'Meta & Google Ads Management', 'Weekly Funnel Optimization'] },
    { name: 'Performance Marketing', price: '₹90,000', period: '/month', features: ['Custom Creative Design', 'Advanced E-commerce Retargeting', 'High-volume Lead Campaigns', 'Bi-weekly Analytics Review'] },
    { name: 'Enterprise Marketing', price: 'Custom', period: '', features: ['Omni-Channel Scale Plan', 'Conversion Rate Audit (CRO)', 'Dedicated Marketing Strategist', 'Custom Creative Production'] },
  ],
  webdev: [
    { name: 'Landing Page', price: '₹15,000', period: 'one-time', features: ['Single Page Responsive Layout', 'Futuristic UI/UX Styles', 'Contact/Lead Capture Form', 'Vite & Tailwind Architecture'] },
    { name: 'Business Website', price: '₹35,000', period: 'one-time', popular: true, features: ['Up to 8 Custom Pages', 'Interactive Animations (GSAP)', 'CMS Content Management Integration', 'SEO-friendly Semantic Markup'] },
    { name: 'Ecommerce Website', price: '₹75,000', period: 'one-time', features: ['Full Store Catalog & Cart', 'Secure Checkout Payment Hooks', 'Customer Order Dashboard', 'Custom Admin Panel'] },
    { name: 'Custom Enterprise', price: 'Custom', period: '', features: ['Bespoke Web Applications', 'Custom Back-end API Integration', 'Dedicated Node Cluster Setup', 'Custom Animation Transitions'] },
  ],
  appdev: [
    { name: 'MVP App', price: '₹1,50,000', period: 'one-time', features: ['Single Platform (Android or iOS)', 'Core Features Flow Builder', 'Firebase Backend Architecture', 'Standard UI Component Layout'] },
    { name: 'Startup App', price: '₹3,00,000', period: 'one-time', popular: true, features: ['Dual Platform (Android & iOS)', 'Flutter Cross-platform Build', 'Third-party API Integrations', 'Custom UI/UX Micro-motions'] },
    { name: 'Business App', price: '₹5,50,000', period: 'one-time', features: ['Advanced Feature Set', 'Custom Node/Python Backend', 'Push Notification Schedules', 'In-App Payment Gateway'] },
    { name: 'Enterprise App', price: 'Custom', period: '', features: ['Bespoke Mobile Architecture', 'High-volume Transaction Scalability', 'Advanced Biometric Security', 'SLA Technical Support contract'] },
  ],
};

export function createPricing() {
  const container = document.createElement('div');
  container.className = 'page pricing-page';

  container.innerHTML = `
    <!-- Pricing Hero -->
    <section class="section page-hero pricing-hero">
      <div class="container container-wide">
        <div class="section-header">
          <span class="text-overline">Fair & Scalable Plans</span>
          <h1 class="heading-hero">Choose Your Journey to<br><span class="text-gradient">Automation & Growth</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto 2rem;">
            Select a service category below to view dedicated plan structures. Scale up or adjust anytime.
          </p>

          <!-- Module Selector Tabs -->
          <div class="pricing-tabs-wrapper">
            <button class="pricing-tab-btn active" data-module="platform">AI Automation Platform</button>
            <button class="pricing-tab-btn" data-module="marketing">Digital Marketing</button>
            <button class="pricing-tab-btn" data-module="webdev">Web Development</button>
            <button class="pricing-tab-btn" data-module="appdev">Mobile App Dev</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Columns Container -->
    <section class="section pricing-cards-section" style="padding: 1rem 0 6rem;">
      <div class="container">
        <div class="pricing-grid" id="pricing-grid">
          <!-- Loaded dynamically via JS below -->
        </div>
      </div>
    </section>
  `;

  // Render function for cards
  const grid = container.querySelector('#pricing-grid');
  function renderModule(moduleName) {
    const plans = PLANS[moduleName];
    grid.innerHTML = plans.map(plan => `
      <div class="pricing-card ${plan.popular ? 'pricing-card-popular' : ''} glass-card-strong">
        ${plan.popular ? '<div class="pricing-badge">Popular</div>' : ''}
        <div class="pricing-card-header">
          <div class="pricing-card-name">${plan.name}</div>
          <div class="pricing-price-row">
            <span class="pricing-price">${plan.price}</span>
            <span class="pricing-period">${plan.period}</span>
          </div>
        </div>
        
        <ul class="pricing-features">
          ${plan.features.map(f => `
            <li class="pricing-feature-item">
              <svg class="pricing-feature-check" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5l-7.5 7.5-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <a href="/contact" class="btn ${plan.popular ? 'btn-primary' : 'btn-ghost'} pricing-cta">Get Started</a>
      </div>
    `).join('');

    // Re-bind mouse parallax effects
    if (window.mouseParallax && typeof window.mouseParallax.scan === 'function') {
      window.mouseParallax.scan();
    }
  }

  // Bind tab click listener
  const buttons = container.querySelectorAll('.pricing-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const module = btn.getAttribute('data-module');
      renderModule(module);
    });
  });

  // Initial render
  setTimeout(() => {
    renderModule('platform');
  }, 50);

  // Append FAQ & Final CTA to make page rich and complete
  container.appendChild(createFAQ());
  container.appendChild(createFinalCTA());

  return container;
}
