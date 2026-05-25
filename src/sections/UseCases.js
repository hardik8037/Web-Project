/* ═══════════════════════════════════════════════════
   INDUSTRY USE CASES
   ═══════════════════════════════════════════════════ */

const USE_CASES = [
  {
    icon: '🏠',
    title: 'Real Estate',
    pain: 'Slow lead response and scattered inquiries across platforms',
    solution: 'Instant property matching, automated follow-ups, virtual tour scheduling',
    metric: '40% more bookings',
    color: '#FF6B35',
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    pain: 'Missed appointments and manual patient coordination',
    solution: 'Automated appointment booking, reminders, prescription alerts',
    metric: '60% fewer no-shows',
    color: '#0088FF',
  },
  {
    icon: '🛍️',
    title: 'Ecommerce',
    pain: 'Cart abandonment and poor post-purchase engagement',
    solution: 'Automated cart recovery, order updates, upselling via WhatsApp',
    metric: '35% cart recovery',
    color: '#25D366',
  },
  {
    icon: '🍽️',
    title: 'Restaurants',
    pain: 'Phone-based reservations and manual order management',
    solution: 'WhatsApp ordering, table reservations, loyalty programs',
    metric: '50% faster orders',
    color: '#FF3B5C',
  },
  {
    icon: '🎓',
    title: 'Education',
    pain: 'Enrollment inquiries get lost in email and phone queues',
    solution: 'AI-powered admission assistant, fee reminders, parent communication',
    metric: '2x enrollment rate',
    color: '#9C27FF',
  },
  {
    icon: '🧵',
    title: 'Textile Industry',
    pain: 'Catalog sharing via phone and manual B2B communication',
    solution: 'WhatsApp catalog, bulk price lists, automated order processing',
    metric: '45% faster B2B cycles',
    color: '#E4405F',
  },
  {
    icon: '💎',
    title: 'Jewellery',
    pain: 'High-touch sales with no digital follow-up system',
    solution: 'Personalized product recommendations, event invites, payment links',
    metric: '30% repeat customers',
    color: '#F9AB00',
  },
  {
    icon: '🎪',
    title: 'Event Management',
    pain: 'Manual ticketing and scattered attendee communication',
    solution: 'Dynamic QR ticketing, event reminders, feedback collection',
    metric: '70% operational savings',
    color: '#635BFF',
  },
];

export function createUseCases() {
  const section = document.createElement('section');
  section.id = 'solutions';
  section.className = 'section usecases-section';

  const cardsHTML = USE_CASES.map(uc => `
    <div class="usecase-card glass-card" style="--uc-color: ${uc.color}">
      <div class="usecase-icon">${uc.icon}</div>
      <h4 class="heading-card">${uc.title}</h4>
      <div class="usecase-pain">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="var(--color-red)" stroke-width="1.2" opacity="0.6"/><path d="M6 6l4 4M10 6l-4 4" stroke="var(--color-red)" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/></svg>
        <span>${uc.pain}</span>
      </div>
      <div class="usecase-solution">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="var(--color-green)" stroke-width="1.2"/><path d="M5.5 8l2 2 3-3.5" stroke="var(--color-green)" stroke-width="1.2" stroke-linecap="round"/></svg>
        <span>${uc.solution}</span>
      </div>
      <div class="usecase-metric" style="color:${uc.color};">${uc.metric}</div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="text-overline">Industry Solutions</span>
        <h2 class="heading-section">Built for <span class="text-gradient">Every Industry</span></h2>
        <p class="text-body-lg">See how businesses across industries are transforming with Botzo.io automation.</p>
      </div>
    </div>
    <div class="usecases-scroll-container">
      <div class="usecases-track" id="usecases-track">
        ${cardsHTML}
      </div>
    </div>
  `;

  // Enable drag scroll
  setTimeout(() => initDragScroll(section), 0);
  return section;
}

function initDragScroll(section) {
  const track = section.querySelector('#usecases-track');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.classList.add('grabbing');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('grabbing');
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('grabbing');
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
}
