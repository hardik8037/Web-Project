/* ═══════════════════════════════════════════════════
   BOTZO.IO — BOOK DEMO PAGE
   ═══════════════════════════════════════════════════ */

export function createBookDemo() {
  const container = document.createElement('div');
  container.className = 'page demo-booking-page';

  container.innerHTML = `
    <!-- Booking Hero -->
    <section class="section page-hero booking-hero">
      <div class="container container-wide">
        <div class="section-header">
          <span class="text-overline">Schedule Live Consultation</span>
          <h1 class="heading-hero">Book a Free 1-on-1<br><span class="text-gradient">Automation Call</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto;">
            Meet with our engineering architects to design your custom business flows, official WhatsApp templates, and CRM integration setup.
          </p>
        </div>
      </div>
    </section>

    <!-- Calendar Mockup Section -->
    <section class="section calendar-booking-section" style="padding: 0 0 6rem;">
      <div class="container">
        <div class="booking-card glass-card-strong" style="border-color: rgba(184, 77, 255, 0.15);">
          
          <!-- Left Meeting Info -->
          <div class="booking-info">
            <div class="booking-icon">📅</div>
            <h3 class="heading-subsection" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Technical Scoping Call</h3>
            <div class="booking-details">
              <span>⏱️ 30 Minutes</span>
              <span>•</span>
              <span>🎥 Zoom/Google Meet</span>
            </div>
            <p class="text-body" style="font-size: 0.85rem; line-height: 1.6; opacity: 0.8;">
              Our tech consultants will analyze your current lead capture flow, suggest custom WhatsApp templates, and walk you through workflow builders live.
            </p>
          </div>

          <!-- Right Calendar Mock -->
          <div>
            <h4 style="font-size: 0.95rem; font-weight: bold; margin-bottom: 1.2rem;">Select Appointment Date & Time</h4>
            <!-- Simple Mock Dates Grid -->
            <div class="date-slots-grid">
              <button class="date-slot-btn">
                <span class="date-slot-day">Mon</span>
                <span class="date-slot-num">25</span>
              </button>
              <button class="date-slot-btn active">
                <span class="date-slot-day">Tue</span>
                <span class="date-slot-num">26</span>
              </button>
              <button class="date-slot-btn">
                <span class="date-slot-day">Wed</span>
                <span class="date-slot-num">27</span>
              </button>
              <button class="date-slot-btn">
                <span class="date-slot-day">Thu</span>
                <span class="date-slot-num">28</span>
              </button>
              <button class="date-slot-btn">
                <span class="date-slot-day">Fri</span>
                <span class="date-slot-num">29</span>
              </button>
            </div>

            <!-- Time Slots list -->
            <div class="time-slots">
              <button class="time-slot-btn">10:30 AM - 11:00 AM</button>
              <button class="time-slot-btn">02:00 PM - 02:30 PM</button>
              <button class="time-slot-btn active">04:30 PM - 05:00 PM (Selected)</button>
            </div>

            <button id="confirm-booking-btn" class="btn btn-primary" style="width: 100%; text-align: center;">Confirm Appointment Slot</button>
          </div>

        </div>
      </div>
    </section>
  `;

  // Bind interactive date/time slot selection
  setTimeout(() => {
    // Date slot selection
    const dateSlots = container.querySelectorAll('.date-slot-btn');
    dateSlots.forEach(slot => {
      slot.addEventListener('click', () => {
        dateSlots.forEach(s => s.classList.remove('active'));
        slot.classList.add('active');
      });
    });

    // Time slot selection
    const timeSlots = container.querySelectorAll('.time-slot-btn');
    timeSlots.forEach(slot => {
      slot.addEventListener('click', () => {
        timeSlots.forEach(s => {
          s.classList.remove('active');
          s.textContent = s.textContent.replace(' (Selected)', '');
        });
        slot.classList.add('active');
        if (!slot.textContent.includes('(Selected)')) {
          slot.textContent += ' (Selected)';
        }
      });
    });

    // Confirm booking
    const confirmBtn = container.querySelector('#confirm-booking-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        alert('Meeting Scheduled! Check your inbox for the Google Meet invitations and calendar slot confirmation.');
      });
    }
  }, 100);

  return container;
}
