/* ═══════════════════════════════════════════════════
   BOTZO.IO — CONTACT & SALES INQUIRIES PAGE
   ═══════════════════════════════════════════════════ */

export function createContact() {
  const container = document.createElement('div');
  container.className = 'page contact-page';

  container.innerHTML = `
    <!-- Contact Hero -->
    <section class="section page-hero contact-hero">
      <div class="container container-wide">
        <div class="section-header">
          <span class="text-overline">Get In Touch</span>
          <h1 class="heading-hero">Connect With Our<br><span class="text-gradient">Automation Experts</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto;">
            Have questions about official API verification, pricing packages, or custom engineering? Submit an inquiry and get feedback in minutes.
          </p>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Contact Form Section -->
    <section class="section contact-form-section" style="padding: 6rem 0;">
      <div class="container">
        <div class="contact-layout">
          <!-- Quick Channels Sidebar -->
          <div class="contact-sidebar">
            <div class="glass-card-strong contact-channel-card">
              <span class="contact-channel-icon">💬</span>
              <strong class="contact-channel-name">Chat on WhatsApp</strong>
              <span class="contact-channel-desc">Instant support channel</span>
              <a href="https://wa.me/911234567890" target="_blank" class="btn btn-primary" style="background:#25D366; border:none; color:#000; font-weight:bold; font-size: 0.8rem; width: 100%; text-align: center; display: block;">Open WhatsApp Chat</a>
            </div>
            
            <div class="glass-card contact-info-card">
              📧 <strong>sales@botzo.io</strong><br>
              📞 <strong>+91 (0) 123 456 789</strong><br>
              📍 Mumbai, Maharashtra, India
            </div>
          </div>

          <!-- Glassmorphic Form -->
          <div class="glass-card-strong contact-form-card" style="border-color: rgba(184, 77, 255, 0.15);">
            <h3 class="heading-subsection" style="margin-bottom: 1.5rem; font-size: 1.3rem;">Submit Sales Inquiry</h3>
            <form id="contact-form" class="contact-form">
              <div class="contact-form-row">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" required class="form-input" placeholder="e.g. John Doe">
                </div>
                <div class="form-group">
                  <label>Business Email</label>
                  <input type="email" required class="form-input" placeholder="e.g. john@company.com">
                </div>
              </div>
              
              <div class="form-group">
                <label>Select Ecosystem Interest</label>
                <select class="form-select">
                  <option value="platform">AI Automation Platform (WhatsApp API, CRM, Inbox)</option>
                  <option value="services">Digital Agency Services (SEO, Web/App Dev)</option>
                  <option value="both">Both (Platform + Custom Agency Services)</option>
                </select>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea required rows="4" class="form-textarea" placeholder="Tell us about your automation requirements..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Bind submit simulation
  setTimeout(() => {
    const form = container.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your sales inquiry has been logged. Our automation consultants will contact you shortly.');
        form.reset();
      });
    }
  }, 100);

  return container;
}
