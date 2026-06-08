/* ═══════════════════════════════════════════════════
   BOTZO.IO — CONTACT & SALES INQUIRIES PAGE
   ═══════════════════════════════════════════════════ */

export function createContact() {
  const container = document.createElement('div');
  container.className = 'page contact-page';

  container.innerHTML = `
    <!-- Contact Hero -->
    <section class="section page-hero contact-hero" style="padding-bottom: 0;">
      <div class="container-wide">
        <div class="section-header" style="max-width: 680px; margin: 0 auto;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary-light); margin-bottom: 1.5rem;">
            <span class="badge-dot"></span>GLOBAL SUPPORT
          </div>
          <h1 class="heading-hero" style="font-size: 4rem; line-height: 1; font-weight: 800; letter-spacing: -1px; margin: 0 0 1rem 0;">
            Connect With Our<br><span class="text-gradient">Automation Experts</span>
          </h1>
          <p class="text-body-lg" style="margin: 0 0 1.5rem 0; font-weight: 400; opacity: 0.9;">
            Have questions about official API verification, pricing packages, or custom engineering? Submit an inquiry and get feedback in minutes.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section (Ecosystem Layer) -->
    <section class="section contact-form-section hero-ecosystem" style="padding: 0 0 6rem; margin-top: 8rem;">
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
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // --- ⚙️ WEBHOOK CONFIGURATION ---
        // Replace this URL with your Make.com, Zapier, or custom webhook URL
        const WEBHOOK_URL = 'https://your-webhook-url.com/endpoint'; 
        
        // 1. Gather form data
        const inputs = form.querySelectorAll('input, select, textarea');
        const formData = {
          type: 'Sales Inquiry',
          source: 'Contact Page',
          submittedAt: new Date().toISOString()
        };
        
        inputs.forEach(input => {
          const label = input.previousElementSibling ? input.previousElementSibling.innerText : input.tagName;
          formData[label] = input.value;
        });

        // 2. UI Loading State
        submitBtn.innerHTML = '<span style="display:inline-block; width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite;"></span> Sending...';
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.8';

        try {
          // 3. Send Data to Webhook
          /* 
          // Uncomment this block when you have added your real webhook URL above!
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          
          if (!response.ok) throw new Error('Webhook failed');
          */

          // Simulate network delay for demo (Remove this when using real webhook)
          await new Promise(resolve => setTimeout(resolve, 1200));

          // 4. Success UI
          alert('Thank you! Your sales inquiry has been logged. Our automation consultants will contact you shortly.');
          form.reset();
        } catch (error) {
          console.error('Error sending webhook:', error);
          alert('Something went wrong sending your inquiry. Please try again or contact us via WhatsApp.');
        } finally {
          // Reset Button
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.pointerEvents = 'auto';
          submitBtn.style.opacity = '1';
        }
      });
    }
  }, 100);

  return container;
}
