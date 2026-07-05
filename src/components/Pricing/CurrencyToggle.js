export function renderCurrencyToggle(activeCurrency) {
  return `
    <div class="toggle-group-ent">
      <div class="toggle-label-ent">Currency</div>
      <div class="toggle-pill-container-ent">
        <button class="toggle-pill-btn-ent ${activeCurrency === 'INR' ? 'active' : ''}" data-currency="INR">₹ INR</button>
        <button class="toggle-pill-btn-ent ${activeCurrency === 'USD' ? 'active' : ''}" data-currency="USD">$ USD</button>
        <div class="toggle-pill-indicator-ent"></div>
      </div>
    </div>
  `;
}
