/* ═══════════════════════════════════════════════════
   BOTZO.IO PREMIUM NAVBAR — CENTERED PILL DESIGN
   ═══════════════════════════════════════════════════ */

export function createNavbar() {
  const nav = document.createElement('header');
  nav.id = 'navbar';
  nav.setAttribute('role', 'banner');

  nav.innerHTML = `
    <div class="botzo-nav">
      <!-- Logo -->
      <a href="/" class="botzo-nav-logo" aria-label="Botzo.io Home">
        <img src="/assets/images/logo.png" alt="Botzo.io" class="botzo-logo-img" />
      </a>

      <!-- Center Pill Navigation -->
      <nav class="botzo-nav-pill" aria-label="Main navigation">
        
        <!-- Platform Dropdown -->
        <div class="nav-dropdown">
          <button class="botzo-pill-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Platform <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mega-menu mega-menu-platform" role="menu">
            <div class="mega-menu-inner">
              <div class="mega-menu-section">
                <div class="mega-menu-label">Communication</div>
                <a href="/platform/whatsapp-api" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">💬</span>
                  <div>
                    <div class="mega-item-title">WhatsApp API</div>
                    <div class="mega-item-desc">Official Business API integration</div>
                  </div>
                </a>
                <a href="/platform/instagram-automation" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📸</span>
                  <div>
                    <div class="mega-item-title">Instagram Automation</div>
                    <div class="mega-item-desc">DM & comment automation</div>
                  </div>
                </a>
                <a href="/platform/facebook-automation" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📘</span>
                  <div>
                    <div class="mega-item-title">Facebook Automation</div>
                    <div class="mega-item-desc">Messenger & lead gen flows</div>
                  </div>
                </a>
                <a href="/platform/rcs-messaging" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📱</span>
                  <div>
                    <div class="mega-item-title">RCS Messaging</div>
                    <div class="mega-item-desc">Rich messaging on Android</div>
                  </div>
                </a>
              </div>
              <div class="mega-menu-section">
                <div class="mega-menu-label">Productivity</div>
                <a href="/platform/team-inbox" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📥</span>
                  <div>
                    <div class="mega-item-title">Unified Team Inbox</div>
                    <div class="mega-item-desc">All channels in one place</div>
                  </div>
                </a>
                <a href="/platform/workflow-automation" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">⚡</span>
                  <div>
                    <div class="mega-item-title">Workflow Automation</div>
                    <div class="mega-item-desc">Visual flow builder</div>
                  </div>
                </a>
                <a href="/platform/crm" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📊</span>
                  <div>
                    <div class="mega-item-title">Centralized CRM</div>
                    <div class="mega-item-desc">Unified customer data</div>
                  </div>
                </a>
                <a href="/platform/bulk-campaigns" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📢</span>
                  <div>
                    <div class="mega-item-title">Bulk Campaigns</div>
                    <div class="mega-item-desc">WhatsApp & RCS campaigns</div>
                  </div>
                </a>
              </div>
              <div class="mega-menu-section">
                <div class="mega-menu-label">Commerce</div>
                <a href="/platform/appointment-booking" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📅</span>
                  <div>
                    <div class="mega-item-title">Appointment Booking</div>
                    <div class="mega-item-desc">Automated scheduling</div>
                  </div>
                </a>
                <a href="/platform/payment-integration" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">💳</span>
                  <div>
                    <div class="mega-item-title">Payment Integration</div>
                    <div class="mega-item-desc">In-chat payments</div>
                  </div>
                </a>
                <a href="/platform/qr-ticketing" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">🎫</span>
                  <div>
                    <div class="mega-item-title">Dynamic QR Ticketing</div>
                    <div class="mega-item-desc">Event & entry management</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Services Dropdown (New!) -->
        <div class="nav-dropdown">
          <button class="botzo-pill-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Services <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mega-menu mega-menu-services" role="menu">
            <div class="mega-menu-inner">
              <div class="mega-menu-section">
                <div class="mega-menu-label">Digital Marketing</div>
                <a href="/services/digital-marketing" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📈</span>
                  <div>
                    <div class="mega-item-title">Digital Marketing</div>
                    <div class="mega-item-desc">Comprehensive growth campaigns</div>
                  </div>
                </a>
                <a href="/services/seo" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">🔍</span>
                  <div>
                    <div class="mega-item-title">SEO Services</div>
                    <div class="mega-item-desc">Search engine visibility optimization</div>
                  </div>
                </a>
                <a href="/services/performance-marketing" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">🎯</span>
                  <div>
                    <div class="mega-item-title">Performance Marketing</div>
                    <div class="mega-item-desc">Meta & Google PPC growth strategy</div>
                  </div>
                </a>
                <a href="/services/social-media-marketing" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">👥</span>
                  <div>
                    <div class="mega-item-title">Social Media Marketing</div>
                    <div class="mega-item-desc">Instagram & FB brand styling</div>
                  </div>
                </a>
              </div>
              <div class="mega-menu-section">
                <div class="mega-menu-label">Web & App Engineering</div>
                <a href="/services/website-development" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">💻</span>
                  <div>
                    <div class="mega-item-title">Website Development</div>
                    <div class="mega-item-desc">Landing pages & corporate sites</div>
                  </div>
                </a>
                <a href="/services/ecommerce-development" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">🛒</span>
                  <div>
                    <div class="mega-item-title">Ecommerce Development</div>
                    <div class="mega-item-desc">Cart, pay & catalog setups</div>
                  </div>
                </a>
                <a href="/services/mobile-app-development" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📱</span>
                  <div>
                    <div class="mega-item-title">Mobile App Development</div>
                    <div class="mega-item-desc">Native iOS & Android development</div>
                  </div>
                </a>
                <a href="/services/ui-ux-design" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">✨</span>
                  <div>
                    <div class="mega-item-title">UI/UX Design</div>
                    <div class="mega-item-desc">Premium SaaS micro-interactions</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Solutions Dropdown -->
        <div class="nav-dropdown">
          <button class="botzo-pill-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Solutions <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mega-menu mega-menu-solutions" role="menu">
            <div class="mega-menu-inner mega-menu-grid-small">
              <a href="/solutions/real-estate" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🏠</span>
                <div><div class="mega-item-title">Real Estate</div></div>
              </a>
              <a href="/solutions/healthcare" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🏥</span>
                <div><div class="mega-item-title">Healthcare</div></div>
              </a>
              <a href="/solutions/ecommerce" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🛍️</span>
                <div><div class="mega-item-title">Ecommerce</div></div>
              </a>
              <a href="/solutions/restaurants" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🍽️</span>
                <div><div class="mega-item-title">Restaurants</div></div>
              </a>
              <a href="/solutions/education" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🎓</span>
                <div><div class="mega-item-title">Education</div></div>
              </a>
              <a href="/solutions/textile" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🧵</span>
                <div><div class="mega-item-title">Textile Industry</div></div>
              </a>
              <a href="/solutions/jewellery" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">💎</span>
                <div><div class="mega-item-title">Jewellery</div></div>
              </a>
              <a href="/solutions/events" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🎪</span>
                <div><div class="mega-item-title">Event Management</div></div>
              </a>
              <a href="/solutions/automotive" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🚗</span>
                <div><div class="mega-item-title">Automotive</div></div>
              </a>
              <a href="/solutions/travel" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">✈️</span>
                <div><div class="mega-item-title">Travel & Tourism</div></div>
              </a>
              <a href="/solutions/fitness" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">💪</span>
                <div><div class="mega-item-title">Fitness & Wellness</div></div>
              </a>
              <a href="/solutions/finance" class="mega-menu-item" role="menuitem">
                <span class="mega-icon">🏦</span>
                <div><div class="mega-item-title">Banking & Finance</div></div>
              </a>
            </div>
          </div>
        </div>

        <a href="/pricing" class="botzo-pill-link">Pricing</a>
        
        <!-- Resources Dropdown -->
        <div class="nav-dropdown">
          <button class="botzo-pill-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Resources <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mega-menu mega-menu-resources" role="menu">
            <div class="mega-menu-inner" style="grid-template-columns: 1fr; width: 320px; min-width: 320px;">
              <div class="mega-menu-section" style="border: none; padding: 0;">
                <a href="/blog" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">📝</span>
                  <div>
                    <div class="mega-item-title">Blog</div>
                    <div class="mega-item-desc">Insights, tutorials & growth strategies</div>
                  </div>
                </a>
                <a href="/about" class="mega-menu-item" role="menuitem">
                  <span class="mega-icon">🏢</span>
                  <div>
                    <div class="mega-item-title">About Us</div>
                    <div class="mega-item-desc">Our mission, vision & platform story</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Right Actions -->
      <div class="botzo-nav-actions">
        <a href="/contact" class="botzo-nav-login">Log In</a>
        <a href="/demo" class="botzo-nav-cta">Book Demo</a>
      </div>

      <!-- Mobile Hamburger -->
      <button class="hamburger show-mobile" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer-content">
        <a href="/" class="mobile-nav-link">Home</a>
        
        <!-- Mobile Platform -->
        <div class="mobile-nav-group">
          <button class="mobile-nav-link mobile-nav-group-trigger">Platform <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="mobile-nav-submenu">
            <a href="/platform" class="mobile-submenu-link">WhatsApp API</a>
            <a href="/platform" class="mobile-submenu-link">Instagram Automation</a>
            <a href="/platform" class="mobile-submenu-link">Facebook Automation</a>
            <a href="/platform" class="mobile-submenu-link">RCS Messaging</a>
            <a href="/platform" class="mobile-submenu-link">Unified Team Inbox</a>
            <a href="/platform" class="mobile-submenu-link">Workflow Automation</a>
            <a href="/platform" class="mobile-submenu-link">CRM</a>
            <a href="/platform" class="mobile-submenu-link">Bulk Campaigns</a>
          </div>
        </div>

        <!-- Mobile Services -->
        <div class="mobile-nav-group">
          <button class="mobile-nav-link mobile-nav-group-trigger">Services <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="mobile-nav-submenu">
            <a href="/services" class="mobile-submenu-link">Digital Marketing</a>
            <a href="/services" class="mobile-submenu-link">SEO Services</a>
            <a href="/services" class="mobile-submenu-link">Website Development</a>
            <a href="/services" class="mobile-submenu-link">Mobile App Dev</a>
          </div>
        </div>

        <!-- Mobile Solutions -->
        <div class="mobile-nav-group">
          <button class="mobile-nav-link mobile-nav-group-trigger">Solutions <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="mobile-nav-submenu">
            <a href="/solutions" class="mobile-submenu-link">Real Estate</a>
            <a href="/solutions" class="mobile-submenu-link">Healthcare</a>
            <a href="/solutions" class="mobile-submenu-link">Ecommerce</a>
            <a href="/solutions" class="mobile-submenu-link">Restaurants</a>
            <a href="/solutions" class="mobile-submenu-link">Education</a>
          </div>
        </div>

        <a href="/pricing" class="mobile-nav-link">Pricing</a>
        
        <!-- Mobile Resources -->
        <div class="mobile-nav-group">
          <button class="mobile-nav-link mobile-nav-group-trigger">Resources <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <div class="mobile-nav-submenu">
            <a href="/blog" class="mobile-submenu-link">Blog</a>
            <a href="/about" class="mobile-submenu-link">About Us</a>
          </div>
        </div>

        <a href="/contact" class="mobile-nav-link">Log In</a>
        <div class="mobile-drawer-cta">
          <a href="/demo" class="btn btn-primary btn-lg" style="width:100%;">Book a Demo</a>
        </div>
      </div>
    </div>
  `;

  initNavbarInteractions(nav);
  return nav;
}

function initNavbarInteractions(nav) {
  // Mega-menu hover
  const dropdowns = nav.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    const menu = dropdown.querySelector('.mega-menu');
    let timeout;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.querySelector('.mega-menu')?.classList.remove('open');
          d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });
      menu.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    });

    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        menu.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }, 200);
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = menu.classList.toggle('open');
        trigger.setAttribute('aria-expanded', isOpen.toString());
      }
    });
  });

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 30;
    nav.classList.toggle('nav-scrolled', scrolled);
    lastScroll = window.scrollY;
  });

  // Mobile hamburger
  const hamburger = nav.querySelector('#hamburger-btn');
  const drawer = nav.querySelector('#mobile-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      drawer.setAttribute('aria-hidden', (!isOpen).toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    const groupTriggers = drawer.querySelectorAll('.mobile-nav-group-trigger');
    groupTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        trigger.closest('.mobile-nav-group').classList.toggle('open');
      });
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }
}
