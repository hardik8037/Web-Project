export function renderComparisonTable(features, plans, includedFeatures = [], customSolutionBox = null) {
  if (!features || features.length === 0) return '';

  let includedHtml = '';
  if (includedFeatures && includedFeatures.length > 0) {
    includedHtml = `
      <div class="pricing-included-box-ent pricing-anim-fade-in">
        <h4 class="included-title-ent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #00E676; margin-right: 8px;">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Included in all plans
        </h4>
        <div class="included-grid-ent">
          ${includedFeatures.map(feat => `
            <div class="included-item-ent">
              <span class="included-check-ent">✓</span> ${feat}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  let customSolutionHtml = '';
  if (customSolutionBox) {
    customSolutionHtml = `
      <div class="pricing-custom-solution-box-ent pricing-anim-fade-in">
        <h4 class="custom-solution-title-ent">${customSolutionBox.title}</h4>
        <p class="custom-solution-desc-ent">${customSolutionBox.description}</p>
      </div>
    `;
  }

  return `
    <div class="comparison-table-wrapper-ent pricing-anim-fade-in" id="comparison-table-container">
      <table class="comparison-table-ent">
        <thead>
          <tr>
            <th></th>
            ${plans.map((plan, i) => `
              <th class="${plan.popular ? 'col-popular-ent' : ''}">
                <div style="font-weight: 600; color: #fff; margin-bottom: 0.2rem;">${plan.name}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          ${features.map(section => `
            <tr>
              <td class="comparison-section-header-ent">
                ${section.section}
              </td>
              <td colspan="${plans.length}" class="comparison-section-empty-ent"></td>
            </tr>
            ${section.items.map(item => `
              <tr>
                <td>${item.name}</td>
                ${item.values.map((val, i) => {
                  const isPopular = plans[i].popular;
                  let displayVal = val;
                  if (val === '✓') displayVal = '<span class="tick-ent">✓</span>';
                  else if (val === '—') displayVal = '<span class="dash-ent">—</span>';
                  else if (val === '✕') displayVal = '<span class="cross-ent">✕</span>';
                  else if (val === 'Basic') displayVal = '<span class="pricing-pill-ent pill-basic-ent">Basic</span>';
                  else if (val === 'Advanced') displayVal = '<span class="pricing-pill-ent pill-advanced-ent">Advanced</span>';
                  else if (val === 'Premium') displayVal = '<span class="pricing-pill-ent pill-premium-ent">Premium</span>';
                  else if (val === 'Optional') displayVal = '<span class="pricing-pill-ent pill-optional-ent">Optional</span>';
                  
                  return `
                    <td class="${isPopular ? 'col-popular-ent' : ''}">
                      ${displayVal}
                    </td>
                  `;
                }).join('')}
              </tr>
            `).join('')}
          `).join('')}
        </tbody>
      </table>
      ${includedHtml}
      ${customSolutionHtml}
    </div>
  `;
}
