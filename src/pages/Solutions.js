/* ═══════════════════════════════════════════════════
   BOTZO.IO — SOLUTIONS PAGE
   ═══════════════════════════════════════════════════ */

import { createFinalCTA } from '../sections/FinalCTA.js';

const INDUSTRIES = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: '🏠',
    desc: 'Automate property lead routing, schedule site visits via WhatsApp, send interactive property catalogs, and gather agent feedback instantly.',
    metric: '+180% Tour Bookings',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    desc: 'Send automated appointment booking links, dispatch prescription refilling reminders, manage outpatient updates, and secure health consultations.',
    metric: '-60% Appointment No-Shows',
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    icon: '🛍️',
    desc: 'Recover abandoned checkout carts with discounts, deliver real-time shipping receipts, handle return tickets, and launch customized upsell broadcasts.',
    metric: '22% Cart Recovery Rate',
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    icon: '🍽️',
    desc: 'Implement instant WhatsApp table reservations, dispatch dynamic digital menus, collect delivery orders, and send loyalty points alerts.',
    metric: '+35% Direct Orders',
  },
  {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    desc: 'Coordinate admissions guidance, dispatch automatic payment reminders to parents, answer course FAQs, and handle student enrollment.',
    metric: '85% Query Resolution Speed',
  },
  {
    id: 'textile',
    name: 'Textile Industry',
    icon: '🧵',
    desc: 'Deliver wholesale catalogs, organize agent distribution, gather bulk order requirements, and streamline shipment logistics.',
    metric: '40% Fast Order Cycles',
  },
  {
    id: 'jewellery',
    name: 'Jewellery',
    icon: '💎',
    desc: 'Dispatch high-end collection launches, invite VIP clients to store previews, and send secure invoice checkouts directly on chat.',
    metric: '3.5x Client Engagement',
  },
  {
    id: 'events',
    name: 'Event Management',
    icon: '🎪',
    desc: 'Generate dynamic QR entrance tickets, send schedule updates, register attendees, and request post-event feedback automatically.',
    metric: '99.8% Scanner Efficiency',
  },
];

export function createSolutions() {
  const container = document.createElement('div');
  container.className = 'page solutions-page';

  const cardsHTML = INDUSTRIES.map(ind => `
    <div class="glass-card-strong industry-solution-card" data-industry="${ind.id}">
      <div class="industry-card-icon">${ind.icon}</div>
      <h3 class="heading-subsection" style="margin-bottom: 0.8rem; font-size: 1.2rem;">${ind.name}</h3>
      <p class="text-body" style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.5rem; opacity: 0.85;">
        ${ind.desc}
      </p>
      <div class="industry-card-metric">${ind.metric}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Solutions Hero -->
    <section class="section page-hero solutions-hero">
      <div class="container">
        <div class="section-header">
          <span class="text-overline">Industry Vertical Blueprints</span>
          <h1 class="heading-hero">Engineered for Your<br><span class="text-gradient" style="background: linear-gradient(135deg, #36C5F0 0%, #B84DFF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Specific Industry</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto;">
            Whether you run an ecommerce store, distribute wholesale textiles, manage real estate property tours, or organize events, Botzo provides dedicated operational templates.
          </p>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Industry Grid -->
    <section class="section solutions-grid-section" style="padding: 6rem 0;">
      <div class="container">
        <div class="solutions-grid">
          ${cardsHTML}
        </div>
      </div>
    </section>
  `;

  // Append Final CTA
  container.appendChild(createFinalCTA());

  return container;
}
