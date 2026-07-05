export function renderPricingCards(plans, billing, currency) {
  return `
    <div class="pricing-grid-ent pricing-anim-fade-in" id="pricing-cards-container">
      ${plans.map(plan => {
        const pricingData = plan.pricing[currency][billing];
        const isCustom = plan.isCustom;
        const currencySymbol = currency === 'INR' ? '₹' : '$';
        const displayPrice = isCustom ? pricingData.price : `${currencySymbol}${pricingData.price}`;
        const wasPrice = pricingData.was ? `<div class="pricing-was-price-ent">${pricingData.was}</div>` : '';
        
        return `
          <div class="pricing-card-ent ${plan.popular ? 'popular' : ''}">
            ${plan.popular ? `<div class="pricing-badge-ent">Most popular</div>` : ''}
            
            <h3 class="pricing-name-ent">${plan.name}</h3>
            <p class="pricing-desc-ent">${plan.desc}</p>
            
            <div class="pricing-price-container-ent">
              <div>
                <span class="pricing-price-value-ent pricing-anim-slide-up" style="display:inline-block;">${displayPrice}</span><span class="pricing-price-period-ent">${pricingData.period}</span>
              </div>
              ${wasPrice}
            </div>
            <div class="pricing-card-divider-ent"></div>
            
            <div style="margin-top: auto;">
              <a href="${isCustom ? '/contact' : '/demo'}" class="pricing-btn-ent ${plan.popular ? 'primary' : ''}">
                ${plan.cta}
              </a>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
