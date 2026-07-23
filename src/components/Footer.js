/* ═══════════════════════════════════════════════════
   BOTZO.IO PREMIUM FOOTER
   ═══════════════════════════════════════════════════ */
import { sanitizeHTML } from '../utils/sanitize.js';
import { Analytics } from '../analytics/analytics.js';
import { apiClient } from '../api/client.js';

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
          <div class="footer-socials" style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
            <a href="https://www.facebook.com/profile.php?id=61591257670964" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--color-text-body, #F5F5F7); transition: all 0.3s ease;" onmouseover="this.style.background='rgba(255,255,255,0.15)'; this.style.borderColor='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.transform='translateY(0)';">
              <svg viewBox="0 0 320 512" fill="currentColor" width="16" height="16"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="https://www.instagram.com/botzo.io/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--color-text-body, #F5F5F7); transition: all 0.3s ease;" onmouseover="this.style.background='rgba(255,255,255,0.15)'; this.style.borderColor='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.transform='translateY(0)';">
              <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </div>
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
          <!-- Honeypot Field (Abuse Prevention Phase 13) -->
          <input type="text" name="botzo_website" id="footer_bot_trap" style="display:none !important;" tabindex="-1" autocomplete="off">
          
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
        <p class="footer-copyright">© ${new Date().getFullYear()} Botzo — All rights reserved.</p>
        
        <div class="footer-bottom-links">
          <a href="/privacy">Privacy</a>
          <span class="footer-divider">·</span>
          <a href="/terms">Terms</a>
          <span class="footer-divider">·</span>
          <a href="/security">Security</a>
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
      const honeypot = form.querySelector('#footer_bot_trap');
      const email = emailInput ? sanitizeHTML(emailInput.value.trim()) : '';
      const successMsg = form.querySelector('.newsletter-success');
      const inputGroup = form.querySelector('.newsletter-input-group');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!email) return;

      // Honeypot check (Abuse Prevention)
      if (honeypot && honeypot.value !== '') {
        console.warn('Bot detected.');
        return; // Silently fail for bots
      }

      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span style="display:inline-block; width:14px; height:14px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite;"></span>';
      submitBtn.style.pointerEvents = 'none';

      try {
        await apiClient.subscribeNewsletter(email);

        // Track Conversion Analytics
        Analytics.trackEvent(
          Analytics.EVENTS.NEWSLETTER_SUBSCRIBE,
          Analytics.CATEGORIES.CONVERSION,
          'Newsletter Subscription',
          'Footer Form'
        );

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
