/* ═══════════════════════════════════════════════════
   BOTZO.IO — PRICING PAGE
   ═══════════════════════════════════════════════════ */

import { createPricing } from '../sections/Pricing.js';
import { createFAQ } from '../sections/FAQ.js';
import { createFinalCTA } from '../sections/FinalCTA.js';

function createDivider() {
  const div = document.createElement('div');
  div.className = 'section-divider';
  return div;
}

export function createPricingPage() {
  const page = document.createElement('div');
  page.className = 'pricing-page';

  page.appendChild(createPricing());
  page.appendChild(createDivider());
  page.appendChild(createFAQ());
  page.appendChild(createFinalCTA());

  return page;
}
