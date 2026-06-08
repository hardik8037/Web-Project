/* ═══════════════════════════════════════════════════
   BOTZO.IO PREMIUM FOOTER
   ═══════════════════════════════════════════════════ */

export function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.className = 'footer-section';
  footer.innerHTML = `
    <div class="footer-glow"></div>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="/" class="botzo-nav-logo footer-logo" aria-label="Botzo.io">
            <img src="/assets/images/logo.png" alt="Botzo.io" class="botzo-logo-img footer-logo-img" />
          </a>
          <p class="footer-tagline">The complete business automation ecosystem. Automate communication, scale operations, grow revenue.</p>
          <div class="footer-socials">
            <a href="#" class="social-link" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.47 2H3.53A1.45 1.45 0 0 0 2 3.47v17.06A1.45 1.45 0 0 0 3.47 22h17.06A1.45 1.45 0 0 0 22 20.53V3.47A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3v9M6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12M18.91 18.74h-3v-4.38c0-1.05 0-2.38-1.44-2.38-1.44 0-1.67 1.13-1.67 2.3v4.46h-3v-9h2.9v1.23h.04a3.2 3.2 0 0 1 2.85-1.56c3.05 0 3.62 2 3.62 4.62v4.71"/></svg></a>
            <a href="#" class="social-link" aria-label="Twitter/X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" class="social-link" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" class="social-link" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" class="social-link" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>

        <div class="footer-columns">
          <div class="footer-col">
            <h4 class="footer-col-title">Platform</h4>
            <ul class="footer-links">
              <li><a href="/platform">WhatsApp API</a></li>
              <li><a href="/platform">Instagram Automation</a></li>
              <li><a href="/platform">Facebook Automation</a></li>
              <li><a href="/platform">RCS Messaging</a></li>
              <li><a href="/platform">Team Inbox</a></li>
              <li><a href="/platform">Workflow Builder</a></li>
              <li><a href="/platform">CRM</a></li>
              <li><a href="/platform">Bulk Campaigns</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links">
              <li><a href="/services">Digital Marketing</a></li>
              <li><a href="/services">SEO Services</a></li>
              <li><a href="/services">Performance Marketing</a></li>
              <li><a href="/services">Social Media</a></li>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">App Development</a></li>
              <li><a href="/services">UI/UX Design</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Solutions</h4>
            <ul class="footer-links">
              <li><a href="/solutions">Real Estate</a></li>
              <li><a href="/solutions">Healthcare</a></li>
              <li><a href="/solutions">Ecommerce</a></li>
              <li><a href="/solutions">Restaurants</a></li>
              <li><a href="/solutions">Education</a></li>
              <li><a href="/solutions">Event Management</a></li>
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
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
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
        <form class="newsletter-form" onsubmit="event.preventDefault(); this.querySelector('.newsletter-success').style.display='flex'; this.querySelector('.newsletter-input-group').style.display='none';">
          <div class="newsletter-input-group">
            <input type="email" class="glass-input" placeholder="Enter your email" required aria-label="Email for newsletter">
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
          <a href="#">Privacy</a>
          <span class="footer-divider">·</span>
          <a href="#">Terms</a>
          <span class="footer-divider">·</span>
          <a href="#">Security</a>
          <span class="footer-divider">·</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  `;

  return footer;
}
