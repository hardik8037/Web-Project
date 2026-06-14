/* ═══════════════════════════════════════════════════
   TESTIMONIALS CAROUSEL
   ═══════════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    quote: "Botzo.io completely transformed how we handle customer communication. Our response time dropped from 4 hours to under 30 seconds. The WhatsApp automation alone has 3x'd our lead conversion rate.",
    name: 'Rajesh Gupta',
    title: 'CEO, GreenMart India',
    rating: 5,
    image: 'R',
    color: '#25D366',
  },
  {
    quote: "The workflow automation is incredibly powerful. We automated our entire appointment booking system and saved 20+ hours per week. The CRM integration made our team 10x more productive.",
    name: 'Priya Sharma',
    title: 'COO, HealthFirst Clinics',
    rating: 5,
    image: 'P',
    color: '#0088FF',
  },
  {
    quote: "We tried 5 different platforms before Botzo.io. Nothing comes close to the combination of WhatsApp API, omnichannel inbox, and the digital marketing services. It's like having an entire tech team.",
    name: 'Amit Patel',
    title: 'Founder, TechStart Solutions',
    rating: 5,
    image: 'A',
    color: '#9C27FF',
  },
  {
    quote: "The bulk campaign feature helped us reach 50,000 customers during Diwali season with a 34% open rate. The ROI from Botzo.io's automation paid for itself in the first month.",
    name: 'Sneha Reddy',
    title: 'Marketing Head, FashionHub',
    rating: 5,
    image: 'S',
    color: '#FF6B35',
  },
  {
    quote: "From web development to WhatsApp automation — Botzo.io handled everything. The quality of work is premium, and the support team is incredibly responsive. Highly recommended!",
    name: 'Vikram Singh',
    title: 'Director, Royal Properties',
    rating: 5,
    image: 'V',
    color: '#F9AB00',
  },
];

export function createTestimonials() {
  const section = document.createElement('section');
  section.id = 'testimonials';
  section.className = 'section testimonials-section';

  const cardsHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card glass-card-strong ${i === 0 ? 'active' : ''}" data-index="${i}">
      <div class="testimonial-stars">
        ${'★'.repeat(t.rating)}
      </div>
      <blockquote class="testimonial-quote">"${t.quote}"</blockquote>
      <div class="testimonial-author">
        <div class="testimonial-avatar" style="background:${t.color};">${t.image}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-title">${t.title}</div>
        </div>
      </div>
    </div>
  `).join('');

  const dotsHTML = TESTIMONIALS.map((_, i) => `
    <button class="testimonial-dot ${i === 0 ? 'active' : ''}" data-dot="${i}" aria-label="Go to testimonial ${i + 1}"></button>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <span class="text-overline">Testimonials</span>
        <h2 class="heading-section">Loved by <span class="text-gradient">50,000+ Businesses</span></h2>
        <p class="text-body-lg">See what our customers have to say about their transformation with Botzo.io.</p>
      </div>

      <div class="testimonials-carousel reveal-scale">
        <div class="testimonials-track" id="testimonials-track">
          ${cardsHTML}
        </div>
        <div class="testimonials-controls">
          <button class="testimonial-arrow testimonial-prev" aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 15l-5-5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="testimonial-dots">
            ${dotsHTML}
          </div>
          <button class="testimonial-arrow testimonial-next" aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => initTestimonialCarousel(section), 0);
  return section;
}

function initTestimonialCarousel(section) {
  const cards = section.querySelectorAll('.testimonial-card');
  const dots = section.querySelectorAll('.testimonial-dot');
  const prev = section.querySelector('.testimonial-prev');
  const next = section.querySelector('.testimonial-next');
  let current = 0;
  let interval;

  function goTo(index) {
    cards.forEach(c => c.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    current = (index + cards.length) % cards.length;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAutoplay() {
    interval = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  prev?.addEventListener('click', () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
  next?.addEventListener('click', () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });
  dots.forEach(dot => {
    dot.addEventListener('click', () => { stopAutoplay(); goTo(+dot.dataset.dot); startAutoplay(); });
  });

  startAutoplay();
}
