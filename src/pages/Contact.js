/* ═══════════════════════════════════════════════════
   BOTZO.IO — CONTACT & SALES INQUIRIES PAGE
   ═══════════════════════════════════════════════════ */

import { sanitizeHTML } from '../utils/sanitize.js';

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
          <h1 class="heading-hero">
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
      <div class="container-standard">
        <div class="contact-layout">
          <!-- Quick Channels Sidebar -->
          <div class="contact-sidebar">
            <div class="glass-card-strong contact-channel-card">
              <span class="contact-channel-icon">💬</span>
              <strong class="contact-channel-name">Chat on WhatsApp</strong>
              <span class="contact-channel-desc">Instant support channel</span>
              <a href="https://wa.me/919727372130" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:#25D366; border:none; color:#000; font-weight:bold; font-size: 0.8rem; width: 100%; text-align: center; display: block;">Open WhatsApp Chat</a>
            </div>
            
            <div class="glass-card contact-info-card">
              📧 <strong>sales@botzo.io</strong><br>
              📞 <strong>+91 97273 72130</strong><br>
              📍 Mumbai, Maharashtra, India
            </div>
          </div>

          <!-- Glassmorphic Form -->
          <div class="glass-card-strong contact-form-card" style="border-color: rgba(184, 77, 255, 0.15); position: relative; overflow: hidden;">
            <div id="contact-form-wrapper">
              <h3 class="heading-subsection" style="margin-bottom: 1.5rem; font-size: 1.3rem;">Submit Sales Inquiry</h3>
              <form id="contact-form" class="contact-form">
                <div class="contact-form-row">
                  <div class="form-group">
                    <label for="contact-name">Full Name</label>
                    <input type="text" id="contact-name" required minlength="2" maxlength="50" pattern="[a-zA-Z\\s\\-]+" title="Name must contain only letters, spaces, and hyphens" class="form-input" placeholder="e.g. John Doe">
                  </div>
                  <div class="form-group">
                    <label for="contact-email">Business Email</label>
                    <input type="email" id="contact-email" required maxlength="100" class="form-input" placeholder="e.g. john@company.com">
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="contact-interest">Select Ecosystem Interest</label>
                  <select id="contact-interest" class="form-select">
                    <option value="platform">AI Automation Platform (WhatsApp API, CRM, Inbox)</option>
                    <option value="services">Digital Agency Services (SEO, Web/App Dev)</option>
                    <option value="both">Both (Platform + Custom Agency Services)</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="contact-message">Message</label>
                  <textarea id="contact-message" required minlength="10" maxlength="1000" rows="4" class="form-textarea" placeholder="Tell us about your automation requirements..."></textarea>
                </div>

                <div id="contact-error-msg" style="color: #ff4d4d; font-size: 0.85rem; margin-bottom: 1rem; display: none;"></div>
                <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Send Message</button>
              </form>
            </div>
            
            <!-- Success State -->
            <div id="contact-success-state" style="display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 4rem 1rem; animation: fadeUp 0.5s ease forwards;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(37, 211, 102, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h4 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #fff;">Inquiry Received</h4>
              <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem; margin-bottom: 2rem;">Thank you for reaching out! Our consultants will contact you shortly.</p>
              <button class="btn btn-ghost" id="contact-reset-btn">Submit Another Inquiry</button>
            </div>
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
        const errorMsg = container.querySelector('#contact-error-msg');
        const originalBtnText = submitBtn.innerHTML;
        const formWrapper = container.querySelector('#contact-form-wrapper');
        const successState = container.querySelector('#contact-success-state');
        const resetBtn = container.querySelector('#contact-reset-btn');
        
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
          const label = input.previousElementSibling ? input.previousElementSibling.innerText : input.id;
          let val = input.value.trim();
          // Basic sanitization
          val = val.replace(/[<>]/g, '');
          formData[label] = val;
        });

        // 2. JS Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData['Business Email'])) {
          errorMsg.textContent = 'Please enter a valid email address.';
          errorMsg.style.display = 'block';
          return;
        }
        if (formData['Full Name'].length < 2 || formData['Full Name'].length > 50) {
          errorMsg.textContent = 'Name must be between 2 and 50 characters.';
          errorMsg.style.display = 'block';
          return;
        }
        if (formData['Message'].length < 10) {
          errorMsg.textContent = 'Message must be at least 10 characters long.';
          errorMsg.style.display = 'block';
          return;
        }

        // 3. UI Loading State
        errorMsg.style.display = 'none';
        submitBtn.innerHTML = '<span style="display:inline-block; width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite; margin-right: 8px;"></span> Sending...';
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.8';

        try {
          // 3. Send Data to Webhook (Uncomment for production)
          /* 
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          if (!response.ok) throw new Error('Webhook failed');
          */

          // Simulate network delay
          await new Promise(resolve => setTimeout(resolve, 1200));

          // 4. Success UI
          formWrapper.style.display = 'none';
          successState.style.display = 'flex';
          form.reset();

          resetBtn.onclick = () => {
            successState.style.display = 'none';
            formWrapper.style.display = 'block';
          };
          
        } catch (error) {
          console.error('Error sending webhook:', error);
          errorMsg.innerText = 'Something went wrong. Please try again or contact us via WhatsApp.';
          errorMsg.style.display = 'block';
        } finally {
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.pointerEvents = 'auto';
          submitBtn.style.opacity = '1';
        }
      });
    }
  }, 100);

  return container;
}
