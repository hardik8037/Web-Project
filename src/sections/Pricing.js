/* ═══════════════════════════════════════════════════
   PRICING SECTION — 4 SERVICE TABS
   ═══════════════════════════════════════════════════ */

const PRICING_DATA = {
  automation: {
    label: 'Automation Platform',
    plans: [
      {
        name: 'Starter',
        price: '₹999',
        period: '/mo',
        desc: 'Perfect for small businesses getting started with automation.',
        features: ['1 WhatsApp Number', '500 Conversations/mo', 'Basic Chatbot', 'Contact Management', 'Email Support', '2 Team Members'],
        cta: 'Start Free Trial',
        popular: false,
      },
      {
        name: 'Growth',
        price: '₹2,999',
        period: '/mo',
        desc: 'For growing businesses that need more power and flexibility.',
        features: ['2 WhatsApp Numbers', '5,000 Conversations/mo', 'Advanced Chatbot + AI', 'CRM + Pipeline', 'Workflow Builder', 'Bulk Campaigns', 'Instagram + Facebook', '5 Team Members', 'Priority Support'],
        cta: 'Start Free Trial',
        popular: true,
      },
      {
        name: 'Professional',
        price: '₹7,999',
        period: '/mo',
        desc: 'Enterprise-grade automation for scaling operations.',
        features: ['5 WhatsApp Numbers', 'Unlimited Conversations', 'AI Chatbot + NLP', 'Advanced CRM', 'Omnichannel Inbox', 'Custom Workflows', 'API Access', 'RCS Messaging', '15 Team Members', 'Dedicated Manager'],
        cta: 'Start Free Trial',
        popular: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Tailored solutions for large-scale enterprise needs.',
        features: ['Unlimited Numbers', 'Unlimited Conversations', 'Custom AI Models', 'White-label Solution', 'Custom Integrations', 'SLA Guarantee', 'On-premise Option', 'Unlimited Team', '24/7 Priority Support'],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
  },
  marketing: {
    label: 'Digital Marketing',
    plans: [
      {
        name: 'Basic',
        price: '₹15,000',
        period: '/mo',
        desc: 'Essential marketing for building online presence.',
        features: ['SEO Audit & Strategy', 'Social Media (2 platforms)', '10 Content Pieces/mo', 'Monthly Reporting', 'Google Business Setup'],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Growth',
        price: '₹35,000',
        period: '/mo',
        desc: 'Comprehensive marketing to accelerate growth.',
        features: ['Full SEO Optimization', 'Social Media (4 platforms)', '25 Content Pieces/mo', 'Google + Meta Ads', 'Lead Generation', 'Email Marketing', 'Weekly Reporting', 'Dedicated Strategist'],
        cta: 'Get Started',
        popular: true,
      },
      {
        name: 'Performance',
        price: '₹75,000',
        period: '/mo',
        desc: 'High-impact marketing with measurable ROI.',
        features: ['Advanced SEO + Content', 'All Social Platforms', 'Performance Ads (PPC)', 'Conversion Optimization', 'Marketing Automation', 'A/B Testing', 'Real-time Dashboard', 'Bi-weekly Strategy Calls'],
        cta: 'Get Started',
        popular: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Full-scale marketing operations for enterprises.',
        features: ['Custom Strategy', 'Multi-brand Management', 'International SEO', 'Custom Attribution', 'Dedicated Team', 'Executive Reporting'],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
  },
  webdev: {
    label: 'Web Development',
    plans: [
      {
        name: 'Landing Page',
        price: '₹25,000',
        period: '+',
        desc: 'High-converting single-page website.',
        features: ['1-Page Design', 'Mobile Responsive', 'SEO Optimized', 'Contact Form', 'SSL & Hosting Setup', '5-Day Delivery'],
        cta: 'Get Quote',
        popular: false,
      },
      {
        name: 'Business',
        price: '₹60,000',
        period: '+',
        desc: 'Professional multi-page business website.',
        features: ['Up to 8 Pages', 'Custom UI/UX Design', 'CMS Integration', 'Blog Setup', 'Analytics Integration', 'Speed Optimization', '15-Day Delivery'],
        cta: 'Get Quote',
        popular: true,
      },
      {
        name: 'Ecommerce',
        price: '₹1,20,000',
        period: '+',
        desc: 'Full-featured online store with payments.',
        features: ['Shopify/WooCommerce', 'Up to 500 Products', 'Payment Gateway', 'Inventory System', 'Order Management', 'Custom Theme', '30-Day Delivery'],
        cta: 'Get Quote',
        popular: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Custom web applications and platforms.',
        features: ['React/Next.js/Vue', 'Custom Backend', 'API Development', 'Scalable Architecture', 'CI/CD Pipeline', 'Dedicated Team'],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
  },
  appdev: {
    label: 'App Development',
    plans: [
      {
        name: 'MVP',
        price: '₹80,000',
        period: '+',
        desc: 'Minimum viable product to validate your idea.',
        features: ['Core Features Only', 'Single Platform', 'Basic UI Design', 'API Integration', 'Testing & QA', '30-Day Delivery'],
        cta: 'Get Quote',
        popular: false,
      },
      {
        name: 'Startup',
        price: '₹2,50,000',
        period: '+',
        desc: 'Feature-rich app for growing startups.',
        features: ['Cross-Platform (iOS + Android)', 'Custom UI/UX Design', 'Push Notifications', 'User Auth & Profiles', 'Admin Dashboard', 'App Store Deployment', '60-Day Delivery'],
        cta: 'Get Quote',
        popular: true,
      },
      {
        name: 'Business',
        price: '₹5,00,000',
        period: '+',
        desc: 'Comprehensive business application.',
        features: ['Native iOS + Android', 'Advanced Features', 'Payment Integration', 'Real-time Chat', 'Analytics Dashboard', 'Third-party APIs', 'Maintenance Plan', '90-Day Delivery'],
        cta: 'Get Quote',
        popular: false,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Enterprise-grade mobile solutions.',
        features: ['Custom Architecture', 'Microservices Backend', 'Enterprise Security', 'Offline Mode', 'Custom Integrations', 'Dedicated Team', 'SLA & Support'],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
  },
};

function createPricingCard(plan) {
  return `
    <div class="pricing-card ${plan.popular ? 'pricing-card-popular' : ''}">
      ${plan.popular ? '<div class="pricing-badge">Most Popular</div>' : ''}
      <div style="margin-bottom:1.5rem;">
        <h4 class="heading-card" style="margin-bottom:0.4rem;">${plan.name}</h4>
        <p class="text-caption" style="min-height:2.5rem;">${plan.desc}</p>
      </div>
      <div style="margin-bottom:1.5rem;">
        <span class="pricing-price">${plan.price}</span>
        <span class="pricing-period">${plan.period}</span>
      </div>
      <a href="/demo" class="btn ${plan.popular ? 'btn-primary' : 'btn-ghost'}" style="width:100%;margin-bottom:1.5rem;">${plan.cta}</a>
      <ul class="pricing-features">
        ${plan.features.map(f => `
          <li>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="var(--color-primary-light)" stroke-width="1.2"/><path d="M5.5 8l2 2 3-3.5" stroke="var(--color-primary-light)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${f}
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

export function createPricing() {
  const section = document.createElement('section');
  section.id = 'pricing';
  section.className = 'section pricing-section';

  const tabKeys = Object.keys(PRICING_DATA);
  const tabsHTML = tabKeys.map((key, i) => `
    <button class="pricing-tab-btn ${i === 0 ? 'active' : ''}" data-pricing-tab="${key}">
      ${PRICING_DATA[key].label}
    </button>
  `).join('');

  const panelsHTML = tabKeys.map((key, i) => `
    <div class="pricing-panel ${i === 0 ? 'active' : ''}" data-pricing-panel="${key}">
      <div class="pricing-grid">
        ${PRICING_DATA[key].plans.map(plan => createPricingCard(plan)).join('')}
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container-wide">
      <div class="section-header">
        <span class="text-overline">Pricing</span>
        <h2 class="heading-section">Simple, Transparent<br><span class="text-gradient">Pricing for Everyone</span></h2>
        <p class="text-body-lg">Choose the right plan for your business. Start free, scale as you grow.</p>
      </div>

      <!-- Combined Toggles Panel (Adaptive) -->
      <div style="text-align: center;">
        <div class="pricing-toggles-panel glass-card-strong reveal">
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
      </div>

      <div class="reveal" style="text-align: center;">
        <div class="pricing-tabs-wrapper">
          ${tabsHTML}
        </div>
      </div>

      <div class="pricing-panels reveal-scale">
        ${panelsHTML}
      </div>

      <div class="pricing-note reveal">
        <p class="text-caption" style="text-align:center;margin-top:2rem;">All plans include 14-day free trial. No credit card required. Cancel anytime.</p>
      </div>
    </div>
  `;

  // Tab switching
  setTimeout(() => initPricingTabs(section), 0);
  return section;
}

function initPricingTabs(section) {
  const tabs = section.querySelectorAll('.pricing-tab-btn');
  const panels = section.querySelectorAll('.pricing-panel');
  const toggleBtns = section.querySelectorAll('.toggle-pill-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.pricingTab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.pricingPanel === targetId);
      });

      // Show billing cycle only for Automation & Marketing
      const billingDivider = section.querySelector('#billing-divider');
      const billingToggle = section.querySelector('#billing-toggle-wrapper');
      if (billingDivider && billingToggle) {
        if (targetId === 'automation' || targetId === 'marketing') {
          billingDivider.style.display = ''; // Reset to CSS default (block/inline)
          billingToggle.style.display = 'flex'; // It's a flex container
        } else {
          billingDivider.style.display = 'none';
          billingToggle.style.display = 'none';
        }
      }
    });
  });

  // Toggle Indicator Math function
  function updateToggleIndicator(btn) {
    const container = btn.parentElement;
    const indicator = container.querySelector('.toggle-pill-indicator');
    if (indicator && btn) {
      indicator.style.width = `${btn.offsetWidth}px`;
      indicator.style.left = `${btn.offsetLeft}px`;
    }
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Find siblings in the same pill container
      const siblings = btn.parentElement.querySelectorAll('.toggle-pill-btn');
      siblings.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      updateToggleIndicator(btn);
    });
  });

  // Initial sync
  setTimeout(() => {
    const activeToggles = section.querySelectorAll('.toggle-pill-btn.active');
    activeToggles.forEach(btn => updateToggleIndicator(btn));
  }, 50);

  window.addEventListener('resize', () => {
    const activeToggles = section.querySelectorAll('.toggle-pill-btn.active');
    activeToggles.forEach(btn => updateToggleIndicator(btn));
  });
}
