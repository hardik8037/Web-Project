export function renderBillingToggle(activeBilling) {
  return `
    <div class="toggle-group-ent" id="billing-toggle-wrapper">
      <div class="toggle-label-ent">Billing Cycle</div>
      <div class="toggle-pill-container-ent">
        <button class="toggle-pill-btn-ent ${activeBilling === 'monthly' ? 'active' : ''}" data-billing="monthly">Monthly</button>
        <button class="toggle-pill-btn-ent ${activeBilling === 'yearly' ? 'active' : ''}" data-billing="yearly">
          Annual <span class="pricing-savings-badge-ent">-10%</span>
        </button>
        <div class="toggle-pill-indicator-ent"></div>
      </div>
    </div>
  `;
}
