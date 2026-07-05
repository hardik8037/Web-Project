export function renderPricingTabs(categories, activeCategory) {
  return `
    <div class="pricing-category-tabs reveal">
      ${Object.values(categories).map(cat => `
        <button class="pricing-cat-tab ${cat.id === activeCategory ? 'active' : ''}" data-cat="${cat.id}">
          ${cat.category}
        </button>
      `).join('')}
    </div>
  `;
}
