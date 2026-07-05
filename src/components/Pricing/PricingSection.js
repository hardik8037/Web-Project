import pricingData from '../../config/pricing/index.js';
import { renderPricingTabs } from './PricingTabs.js';
import { renderBillingToggle } from './BillingToggle.js';
import { renderCurrencyToggle } from './CurrencyToggle.js';
import { renderPricingCards } from './PricingCards.js';
import { renderComparisonTable } from './ComparisonTable.js';

export function createPricingSection() {
  const section = document.createElement('section');
  section.id = 'pricing';
  section.className = 'section pricing-section-enterprise';

  // Initial State
  const state = {
    category: 'automation',
    billing: 'monthly',
    currency: 'INR'
  };

  function render() {
    const activeData = pricingData[state.category];
    
    section.innerHTML = `
      <div class="container-wide">
        <div class="section-header reveal">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary); margin-bottom: 1.2rem;">
            <span class="badge-dot"></span>PRICING
          </div>
          <h2 class="heading-section">Simple, Transparent<br><span class="text-gradient">Pricing for Everyone</span></h2>
          <p class="text-body-lg">Choose the right plan for your business. Start free, scale as you grow.</p>
        </div>

        ${renderPricingTabs(pricingData, state.category)}

        <div class="pricing-toggles-panel-ent reveal">
          ${renderCurrencyToggle(state.currency)}
          <div class="toggle-divider-ent" id="billing-divider" style="display: ${(state.category === 'automation' || state.category === 'digitalMarketing') ? 'block' : 'none'}"></div>
          <div id="billing-container" style="display: ${(state.category === 'automation' || state.category === 'digitalMarketing') ? 'block' : 'none'}">
            ${renderBillingToggle(state.billing)}
          </div>
        </div>

        <div id="pricing-content-area">
          ${renderPricingCards(activeData.plans, state.billing, state.currency)}
          ${renderComparisonTable(activeData.features, activeData.plans, activeData.includedFeatures, activeData.customSolutionBox)}
        </div>
        
        <div class="pricing-note reveal" id="pricing-note" style="display: ${state.category === 'automation' ? 'block' : 'none'}">
          <p class="text-caption" style="text-align:center;margin-top:2rem;">All plans include 7-day free trial. No credit card required. Cancel anytime.</p>
        </div>
      </div>
    `;

    bindEvents();
    
    // Animate toggle indicator after render
    setTimeout(() => {
      const activeToggles = section.querySelectorAll('.toggle-pill-btn-ent.active');
      activeToggles.forEach(btn => updateToggleIndicator(btn));
    }, 50);
  }

  function updateToggleIndicator(btn) {
    const container = btn.closest('.toggle-pill-container-ent');
    if (!container) return;
    const indicator = container.querySelector('.toggle-pill-indicator-ent');
    if (indicator && btn) {
      indicator.style.width = `${btn.offsetWidth}px`;
      indicator.style.left = `${btn.offsetLeft}px`;
    }
  }

  function bindEvents() {
    // Category Tabs
    section.querySelectorAll('.pricing-cat-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        state.category = e.target.dataset.cat;
        
        // Re-render only the content area to prevent full DOM reflow
        const contentArea = section.querySelector('#pricing-content-area');
        const activeData = pricingData[state.category];
        contentArea.innerHTML = `
          ${renderPricingCards(activeData.plans, state.billing, state.currency)}
          ${renderComparisonTable(activeData.features, activeData.plans, activeData.includedFeatures, activeData.customSolutionBox)}
        `;
        
        // Show/hide billing toggle
        const showBilling = state.category === 'automation' || state.category === 'digitalMarketing';
        const billingDivider = section.querySelector('#billing-divider');
        const billingContainer = section.querySelector('#billing-container');
        if (billingDivider) billingDivider.style.display = showBilling ? 'block' : 'none';
        if (billingContainer) billingContainer.style.display = showBilling ? 'block' : 'none';
        
        // Show/hide note
        const showNote = state.category === 'automation';
        const pricingNote = section.querySelector('#pricing-note');
        if (pricingNote) pricingNote.style.display = showNote ? 'block' : 'none';
        
        // Update tab active state visually
        section.querySelectorAll('.pricing-cat-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
      });
    });

    // Currency Toggle
    section.querySelectorAll('.toggle-pill-btn-ent[data-currency]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        state.currency = e.currentTarget.dataset.currency;
        
        // Update toggle visually
        const siblings = btn.parentElement.querySelectorAll('.toggle-pill-btn-ent');
        siblings.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        updateToggleIndicator(btn);

        // Update pricing cards values only (avoid destroying DOM)
        updatePricingValuesInDOM();
      });
    });

    // Billing Toggle
    section.querySelectorAll('.toggle-pill-btn-ent[data-billing]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        state.billing = e.currentTarget.dataset.billing;
        
        // Update toggle visually
        const siblings = btn.parentElement.querySelectorAll('.toggle-pill-btn-ent');
        siblings.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        updateToggleIndicator(btn);

        // Update pricing cards values only
        updatePricingValuesInDOM();
      });
    });
  }

  function updatePricingValuesInDOM() {
    const activeData = pricingData[state.category];
    const cards = section.querySelectorAll('.pricing-card-ent');
    
    activeData.plans.forEach((plan, index) => {
      const card = cards[index];
      if (!card) return;
      
      const pricingDataObj = plan.pricing[state.currency][state.billing];
      const isCustom = plan.isCustom;
      const currencySymbol = state.currency === 'INR' ? '₹' : '$';
      const displayPrice = isCustom ? pricingDataObj.price : `${currencySymbol}${pricingDataObj.price}`;
      
      const valContainer = card.querySelector('.pricing-price-value-ent');
      const periodContainer = card.querySelector('.pricing-price-period-ent');
      
      // Animate out
      valContainer.style.opacity = '0';
      valContainer.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        valContainer.innerHTML = displayPrice;
        periodContainer.innerHTML = pricingDataObj.period;
        
        const priceContainer = card.querySelector('.pricing-price-container-ent');
        let wasEl = card.querySelector('.pricing-was-price-ent');
        
        if (pricingDataObj.was) {
          if (!wasEl) {
            wasEl = document.createElement('div');
            wasEl.className = 'pricing-was-price-ent';
            priceContainer.appendChild(wasEl);
          }
          wasEl.innerHTML = pricingDataObj.was;
        } else if (wasEl) {
          wasEl.remove();
        }
        
        // Animate in
        valContainer.style.transition = 'all 0.3s ease';
        valContainer.style.opacity = '1';
        valContainer.style.transform = 'translateY(0)';
      }, 150);
    });
  }

  // Initial render
  render();
  
  window.addEventListener('resize', () => {
    const activeToggles = section.querySelectorAll('.toggle-pill-btn-ent.active');
    activeToggles.forEach(btn => updateToggleIndicator(btn));
  });

  return section;
}
