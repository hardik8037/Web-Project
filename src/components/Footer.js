/* ═══════════════════════════════════════════════════
   BOTZO.IO PREMIUM FOOTER
   ═══════════════════════════════════════════════════ */
import { sanitizeHTML } from '../utils/sanitize.js';

export function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.className = 'footer-section';
  footer.innerHTML = `
    <div class="footer-glow"></div>
    <div class="container-wide">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="botzo-nav-logo footer-logo" aria-label="Botzo.io">
            <img src="/assets/images/logo.png" alt="Botzo.io" width="188" height="44" class="botzo-logo-img footer-logo-img" loading="lazy" decoding="async" />
          </a>
          <p class="footer-tagline">The complete business automation ecosystem. Automate communication, scale operations, grow revenue.</p>
        </div>

        <div class="footer-columns">
          <div class="footer-col">
            <h4 class="footer-col-title">Platform</h4>
            <ul class="footer-links">
              <li><a href="/platform/whatsapp-api">WhatsApp API</a></li>
              <li><a href="/platform/instagram-automation">Instagram Automation</a></li>
              <li><a href="/platform/facebook-automation">Facebook Automation</a></li>
              <li><a href="/platform/rcs-messaging">RCS Messaging</a></li>
              <li><a href="/platform/team-inbox">Team Inbox</a></li>
              <li><a href="/platform/workflow-automation">Workflow Builder</a></li>
              <li><a href="/platform/crm">CRM</a></li>
              <li><a href="/platform/bulk-campaigns">Bulk Campaigns</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links">
              <li><a href="/services/digital-marketing">Digital Marketing</a></li>
              <li><a href="/services/seo">SEO Services</a></li>
              <li><a href="/services/performance-marketing">Performance Marketing</a></li>
              <li><a href="/services/social-media-marketing">Social Media</a></li>
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/ecommerce-development">Ecommerce Development</a></li>
              <li><a href="/services/mobile-app-development">App Development</a></li>
              <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Solutions</h4>
            <ul class="footer-links">
              <li><a href="/solutions/real-estate">Real Estate</a></li>
              <li><a href="/solutions/healthcare">Healthcare</a></li>
              <li><a href="/solutions/ecommerce">Ecommerce</a></li>
              <li><a href="/solutions/restaurants">Restaurants</a></li>
              <li><a href="/solutions/education">Education</a></li>
              <li><a href="/solutions/textile">Textile Industry</a></li>
              <li><a href="/solutions/jewellery">Jewellery</a></li>
              <li><a href="/solutions/events">Event Management</a></li>
              <li><a href="/solutions/automotive">Automotive</a></li>
              <li><a href="/solutions/travel">Travel & Tourism</a></li>
              <li><a href="/solutions/fitness">Fitness & Wellness</a></li>
              <li><a href="/solutions/finance">Banking & Finance</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/demo">Book a Demo</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="footer-newsletter reveal">
        <div class="newsletter-content">
          <div class="newsletter-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M22 7l-10 6L2 7"/></svg>
          </div>
          <div>
            <h4 class="heading-card" style="margin-bottom: 0.25rem;">Stay ahead with Botzo.io</h4>
            <p class="text-body" style="opacity: 0.6; font-size: 0.82rem;">Get automation tips, product updates, and growth strategies.</p>
          </div>
        </div>
        <form class="newsletter-form" id="footer-newsletter-form">
          <div class="newsletter-input-group">
            <input type="email" id="footer-newsletter-email" class="glass-input" placeholder="Enter your email" required aria-label="Email for newsletter">
            <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
          </div>
          <div class="newsletter-success" style="display:none;">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#25D366"/><path d="M6 10l3 3 5-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Thanks for subscribing!</span>
          </div>
        </form>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="footer-copyright">© ${new Date().getFullYear()} Botzo.io — All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="/privacy">Privacy</a>
          <span class="footer-divider">·</span>
          <a href="/terms">Terms</a>
          <span class="footer-divider">·</span>
          <a href="/security">Security</a>
          <span class="footer-divider">·</span>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
        </div>
      </div>
    </div>
  `;

  // Attach webhook logic to newsletter form
  const form = footer.querySelector('#footer-newsletter-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = form.querySelector('#footer-newsletter-email');
      const email = emailInput ? sanitizeHTML(emailInput.value.trim()) : '';
      const successMsg = form.querySelector('.newsletter-success');
      const inputGroup = form.querySelector('.newsletter-input-group');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!email) return;

      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span style="display:inline-block; width:14px; height:14px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite;"></span>';
      submitBtn.style.pointerEvents = 'none';

      try {
        const WEBHOOK_URL = 'https://webhooks.1automations.com/webhook/6a4aba916f1a8bf9dd888ba2';
        
        const payload = {
          type: 'Newsletter Subscription',
          source: 'Global Footer',
          email: email,
          submittedAt: new Date().toISOString()
        };

        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Webhook failed');

        inputGroup.style.display = 'none';
        successMsg.style.display = 'flex';
      } catch (err) {
        console.error('Newsletter error:', err);
        submitBtn.innerHTML = originalText;
        submitBtn.style.pointerEvents = 'auto';
        // Fallback to success UI anyway so user feels confident
        inputGroup.style.display = 'none';
        successMsg.style.display = 'flex';
      }
    });
  }

  return footer;
}
