/* ═══════════════════════════════════════════════════
   BOTZO.IO — CONTACT & SALES INQUIRIES PAGE
   ═══════════════════════════════════════════════════ */

import { sanitizeHTML } from '../utils/sanitize.js';
import { apiClient } from '../api/client.js';

export function createContact() {
  const container = document.createElement('div');
  container.className = 'page contact-page';

  container.innerHTML = `
    <!-- Contact Hero -->
    <section class="section page-hero contact-hero" style="padding-bottom: 0;">
      <div class="container-wide">
        <div class="section-header" style="max-width: 680px; margin: 0 auto;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary-light); margin-bottom: 1.5rem;">
            <span class="badge-dot"></span>GET IN TOUCH
          </div>
          <h1 class="heading-hero" style="margin-bottom: 1.5rem;">
            Connect With Our<br><span class="text-gradient">Automation Experts</span>
          </h1>
          <p class="text-body-lg" style="margin: 0 0 1.5rem 0; font-weight: 400; opacity: 0.9;">
            Have questions about official API verification, pricing packages, or custom engineering? Submit an inquiry and get feedback in minutes.
          </p>
        </div>
    <!-- Contact Form Section -->
    <section class="section contact-form-section no-tilt" style="padding: 0 0 6rem; margin-top: 8rem; position: relative; z-index: 1;">
      <div class="container-standard">
        <div class="contact-layout">
          <!-- Quick Channels Sidebar -->
          <div class="contact-sidebar" style="display: flex; flex-direction: column; gap: 1.25rem;">
            
            <div class="glass-card-strong contact-channel-card" style="border: 1px solid rgba(37, 211, 102, 0.3); border-top: 1px solid rgba(37, 211, 102, 0.6); background: linear-gradient(145deg, rgba(20, 30, 24, 0.9), rgba(10, 15, 12, 0.95)); box-shadow: 0 10px 30px rgba(0,0,0,0.4), 0 0 30px rgba(37, 211, 102, 0.05); padding: clamp(1rem, 4vw, 1.25rem); border-radius: 20px; position: relative; text-align: center; transition: transform 0.3s ease; transform: translateZ(0); will-change: transform;">
              <div style="position: absolute; top: 10px; left: 50%; transform: translate(-50%, 0) translateZ(0); width: 80px; height: 80px; background: rgba(37, 211, 102, 0.15); filter: blur(30px); border-radius: 50%; pointer-events: none; will-change: filter;"></div>
              
              <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #25D366, #128C7E); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3); border: 2px solid rgba(255,255,255,0.1);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
              <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; letter-spacing: -0.3px;">Chat on WhatsApp</h3>
              <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8); margin-bottom: 1.5rem; line-height: 1.5;">Get instant technical & sales support right on your phone.</p>
              
              <a href="https://wa.me/919979100352" target="_blank" rel="noopener noreferrer" style="box-sizing: border-box; background: linear-gradient(135deg, #25D366, #1DA851); border:none; color:#fff; font-weight:700; font-size: 0.95rem; padding: 0.85rem; width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); display: inline-block; text-align: center; text-decoration: none; transition: all 0.3s ease;">
                Start Conversation
              </a>
            </div>
            
            <div class="glass-card contact-info-card" style="padding: clamp(1rem, 4vw, 1.25rem); border-radius: 20px; display: flex; flex-direction: column; gap: 1rem; background: linear-gradient(145deg, rgba(20, 20, 28, 0.9), rgba(10, 10, 14, 0.95)); border: 1px solid rgba(255,255,255,0.06); box-shadow: 0 10px 30px rgba(0,0,0,0.3); text-align: left;">
              <div style="display: flex; align-items: center; gap: 1rem; text-align: left;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(156, 39, 255, 0.15); border: 1px solid rgba(156, 39, 255, 0.25); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">📧</div>
                <div>
                  <div style="font-size: 0.75rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px; font-weight: 600;">Email Us</div>
                  <strong style="font-family: 'Outfit', sans-serif; font-size: 1.05rem; color: #fff; font-weight: 600; letter-spacing: 0.5px;">sales@botzo.io</strong>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(156, 39, 255, 0.15); border: 1px solid rgba(156, 39, 255, 0.25); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">📞</div>
                <div>
                  <div style="font-size: 0.75rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px; font-weight: 600;">Call Us</div>
                  <strong style="font-family: 'Outfit', sans-serif; font-size: 1.05rem; color: #fff; font-weight: 600; letter-spacing: 0.5px;">+91 97273 72130</strong>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(156, 39, 255, 0.15); border: 1px solid rgba(156, 39, 255, 0.25); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">📍</div>
                <div>
                  <div style="font-size: 0.75rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px; font-weight: 600;">Location</div>
                  <strong style="font-family: 'Outfit', sans-serif; font-size: 1.05rem; color: #fff; font-weight: 600; letter-spacing: 0.5px;">Surat, Gujarat, India</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Glassmorphic Form -->
          <div class="glass-card-strong contact-form-card" style="border: 1px solid rgba(156, 39, 255, 0.2); border-top: 1px solid rgba(156, 39, 255, 0.5); border-radius: 24px; padding: clamp(1.5rem, 5vw, 3rem) clamp(0.75rem, 3vw, 2.5rem); background: linear-gradient(145deg, rgba(20, 15, 30, 0.95), rgba(10, 8, 16, 0.98)); box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 50px rgba(156, 39, 255, 0.08); position: relative; transform: translateZ(0); will-change: transform;">
            
            <div style="position: absolute; top: 10px; right: 10px; width: 250px; height: 250px; background: rgba(156, 39, 255, 0.1); filter: blur(80px); border-radius: 50%; pointer-events: none; transform: translateZ(0); will-change: filter;"></div>

            <div id="contact-form-wrapper" style="position: relative; z-index: 2;">
              <h3 class="heading-subsection" style="font-family: 'Outfit', sans-serif; margin-bottom: 0.5rem; font-size: clamp(1.6rem, 5vw, 2.2rem); font-weight: 700; color: #fff; letter-spacing: -0.5px;">Submit Sales Inquiry</h3>
              <p style="color: rgba(255,255,255,0.8); font-size: clamp(0.9rem, 4vw, 1.05rem); margin-bottom: 2.5rem; line-height: 1.6;">Fill out the details below and an automation expert will review your requirements.</p>
              
              <style>
                .premium-form-input {
                  width: 100%;
                  background: rgba(255,255,255,0.04);
                  border: 1px solid rgba(255,255,255,0.15);
                  border-radius: 12px;
                  padding: 1.1rem 1.25rem;
                  color: #fff;
                  font-size: 1rem;
                  transition: all 0.3s ease;
                  font-family: inherit;
                  box-sizing: border-box;
                }
                .premium-form-input:focus {
                  outline: none;
                  border-color: rgba(156, 39, 255, 0.6);
                  background: rgba(156, 39, 255, 0.08);
                  box-shadow: 0 0 0 4px rgba(156, 39, 255, 0.15);
                }
                .premium-form-input::placeholder {
                  color: rgba(255,255,255,0.4);
                }
                .premium-form-label {
                  display: block;
                  font-family: 'Outfit', sans-serif;
                  font-size: 0.95rem;
                  font-weight: 600;
                  color: #fff;
                  opacity: 0.9;
                  margin-bottom: 0.6rem;
                  letter-spacing: 0.3px;
                  text-align: left;
                }
                .premium-form-group {
                  margin-bottom: 0;
                }
                @media (max-width: 768px) {
                  .contact-form-section .container-standard {
                    padding: 0 0.5rem !important;
                  }
                  .contact-form-card {
                    padding: 1.5rem 1rem !important;
                    border-radius: 16px !important;
                  }
                  .contact-channel-card, .contact-info-card {
                    padding: 1rem !important;
                  }
                }
              </style>

              <form id="contact-form" class="contact-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
                <!-- Honeypot Field (Abuse Prevention Phase 13) -->
                <input type="text" name="botzo_inquiry" id="contact_bot_trap" style="display:none !important;" tabindex="-1" autocomplete="off">
                
                <div class="contact-form-row" style="display: flex; flex-direction: column; gap: 1.5rem;">
                  <div class="premium-form-group">
                    <label for="contact-name" class="premium-form-label">Full Name</label>
                    <input type="text" id="contact-name" required minlength="2" maxlength="50" pattern="[a-zA-Z\\s\\-]+" title="Name must contain only letters, spaces, and hyphens" class="premium-form-input" placeholder="e.g. John Doe">
                  </div>
                  
                  <div class="premium-form-group">
                    <label for="contact-phone" class="premium-form-label">WhatsApp Number</label>
                    <div style="display: flex; gap: 0.5rem; position: relative;">
                      <div class="booking-country-select" id="custom-country-select" style="position: relative; width: 110px; flex-shrink: 0;">
                        <div id="country-selected" class="premium-form-input" style="display: flex; align-items: center; justify-content: space-between; gap: 0.4rem; padding: 1rem 0.6rem; cursor: pointer;">
                          <span id="selected-flag" style="font-size: 1.1rem;">🇮🇳</span>
                          <span style="font-size: 0.6rem; opacity: 0.7;">▼</span>
                          <input type="text" id="country-search" value="+91" data-code="+91" aria-label="Search Country Code" style="background: transparent; border: none; color: #fff; width: 50px; font-size: 0.95rem; padding: 0; outline: none; flex: 1; min-width: 0;">
                        </div>
                        <div id="country-options-list" class="country-options-dropdown" data-lenis-prevent="true" style="display: none; position: absolute; top: calc(100% + 5px); left: 0; width: 260px; max-height: 250px; overflow-y: auto; background: rgba(20, 15, 30, 0.98); backdrop-filter: blur(20px); border: 1px solid rgba(156, 39, 255, 0.3); border-radius: 12px; z-index: 100; box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 20px rgba(156, 39, 255, 0.1);">
                          <!-- Generated via JS -->
                        </div>
                      </div>
                      <input type="tel" id="contact-phone" required minlength="10" maxlength="15" pattern="[0-9]+" class="premium-form-input" placeholder="0000000000">
                    </div>
                  </div>

                  <div class="premium-form-group">
                    <label for="contact-email" class="premium-form-label">Business Email</label>
                    <input type="email" id="contact-email" required maxlength="100" class="premium-form-input" placeholder="e.g. john@company.com">
                  </div>
                </div>
                
                <div class="premium-form-group">
                  <label class="premium-form-label">Select Ecosystem Interest</label>
                  <div id="interest-custom-select" style="position: relative;">
                    <div id="interest-selected" class="premium-form-input" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; user-select: none;">
                      <span id="interest-selected-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 90%;">AI Automation Platform (WhatsApp API, CRM, Inbox)</span>
                      <span style="font-size: 0.7rem; opacity: 0.7; pointer-events: none;">▼</span>
                    </div>
                    <input type="hidden" id="contact-interest" value="platform">
                    
                    <div id="interest-options-list" style="display: none; position: absolute; top: calc(100% + 5px); left: 0; width: 100%; background: rgba(20, 15, 30, 0.98); backdrop-filter: blur(20px); border: 1px solid rgba(156, 39, 255, 0.3); border-radius: 12px; z-index: 100; box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 20px rgba(156, 39, 255, 0.1); overflow: hidden;">
                      <div class="interest-option" data-value="platform" style="padding: 1rem 1.25rem; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; font-size: 0.95rem; transition: all 0.2s;">
                        AI Automation Platform (WhatsApp API, CRM, Inbox)
                      </div>
                      <div class="interest-option" data-value="services" style="padding: 1rem 1.25rem; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; font-size: 0.95rem; transition: all 0.2s;">
                        Digital Agency Services (SEO, Web/App Dev)
                      </div>
                      <div class="interest-option" data-value="both" style="padding: 1rem 1.25rem; cursor: pointer; color: #fff; font-size: 0.95rem; transition: all 0.2s;">
                        Both (Platform + Custom Agency Services)
                      </div>
                    </div>
                  </div>
                </div>

                <div class="premium-form-group">
                  <label for="contact-message" class="premium-form-label">Message</label>
                  <textarea id="contact-message" required minlength="10" maxlength="1000" rows="5" class="premium-form-input" placeholder="Tell us about your automation requirements..."></textarea>
                </div>

                <div id="contact-error-msg" style="color: #ff4d4d; font-size: 0.85rem; display: none;"></div>
                <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1.2rem; font-size: 1.05rem; font-weight: 700; border-radius: 12px; background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light)); box-shadow: 0 10px 25px rgba(156, 39, 255, 0.3);">Send Inquiry</button>
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

  // Bind submit simulation and dropdown logic
  setTimeout(() => {
    // 🌍 Country Code Dropdown Logic
    const selectSelected = container.querySelector('#country-selected');
    const selectOptionsList = container.querySelector('#country-options-list');
    const searchInput = container.querySelector('#country-search');
    const selectedFlag = container.querySelector('#selected-flag');
    
    if (selectSelected && selectOptionsList && searchInput) {
      const countries = [
        { code: '+1', name: 'United States', flag: '🇺🇸' },
        { code: '+1', name: 'Canada', flag: '🇨🇦' },
        { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
        { code: '+61', name: 'Australia', flag: '🇦🇺' },
        { code: '+91', name: 'India', flag: '🇮🇳' },
        { code: '+504', name: 'Honduras', flag: '🇭🇳' },
        { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
        { code: '+36', name: 'Hungary', flag: '🇭🇺' },
        { code: '+354', name: 'Iceland', flag: '🇮🇸' },
        { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
        { code: '+353', name: 'Ireland', flag: '🇮🇪' },
        { code: '+972', name: 'Israel', flag: '🇮🇱' },
        { code: '+39', name: 'Italy', flag: '🇮🇹' },
        { code: '+81', name: 'Japan', flag: '🇯🇵' },
        { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
        { code: '+52', name: 'Mexico', flag: '🇲🇽' },
        { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
        { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
        { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
        { code: '+47', name: 'Norway', flag: '🇳🇴' },
        { code: '+63', name: 'Philippines', flag: '🇵🇭' },
        { code: '+48', name: 'Poland', flag: '🇵🇱' },
        { code: '+351', name: 'Portugal', flag: '🇵🇹' },
        { code: '+65', name: 'Singapore', flag: '🇸🇬' },
        { code: '+27', name: 'South Africa', flag: '🇿🇦' },
        { code: '+34', name: 'Spain', flag: '🇪🇸' },
        { code: '+46', name: 'Sweden', flag: '🇸🇪' },
        { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
        { code: '+971', name: 'UAE', flag: '🇦🇪' }
      ];

      let optionsHTML = '';
      countries.forEach(c => {
        optionsHTML += `<div class="custom-select-option" data-value="${c.code}" data-flag="${c.flag}" data-name="${c.name.toLowerCase()}" style="padding: 0.8rem 1.2rem; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; font-size: 0.9rem; transition: all 0.2s; display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 1.2rem;">${c.flag}</span>
          <span style="font-weight: 500;">${c.name}</span>
          <span style="color: rgba(255,255,255,0.3); margin-left: auto;">${c.code}</span>
        </div>`;
      });
      selectOptionsList.innerHTML = optionsHTML;

      // Add hover effect via JS since inline styles don't support pseudo-classes
      const styleTag = document.createElement('style');
      styleTag.innerHTML = `
        .custom-select-option:hover {
          background: rgba(156, 39, 255, 0.15);
          color: var(--color-primary-light);
        }
        .country-options-dropdown::-webkit-scrollbar {
          width: 6px;
        }
        .country-options-dropdown::-webkit-scrollbar-thumb {
          background: rgba(156, 39, 255, 0.3);
          border-radius: 6px;
        }
      `;
      document.head.appendChild(styleTag);

      searchInput.addEventListener('focus', () => {
        const allOpts = container.querySelectorAll('.custom-select-option');
        allOpts.forEach(o => o.style.display = 'flex');
        selectOptionsList.style.display = 'block';
        searchInput.select();
      });

      selectSelected.addEventListener('click', (e) => {
        if (e.target === searchInput && selectOptionsList.style.display === 'block') return;
        if (selectOptionsList.style.display === 'block') {
          selectOptionsList.style.display = 'none';
          searchInput.blur();
        } else {
          searchInput.focus();
        }
      });

      const options = container.querySelectorAll('.custom-select-option');
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        options.forEach(opt => {
          const name = opt.getAttribute('data-name');
          const code = opt.getAttribute('data-value');
          if (name.includes(val) || code.includes(val)) {
            opt.style.display = 'flex';
          } else {
            opt.style.display = 'none';
          }
        });
      });

      options.forEach(opt => {
        opt.addEventListener('click', (e) => {
          const val = opt.getAttribute('data-value');
          const flag = opt.getAttribute('data-flag');
          searchInput.value = val;
          searchInput.setAttribute('data-code', val);
          selectedFlag.textContent = flag;
          selectOptionsList.style.display = 'none';
          e.stopPropagation();
        });
      });

      document.addEventListener('click', (e) => {
        if (!container.querySelector('#custom-country-select').contains(e.target)) {
          selectOptionsList.style.display = 'none';
          if (searchInput.value.trim() === '') {
            searchInput.value = searchInput.getAttribute('data-code');
          }
        }
      });
    }

    // 🌍 Ecosystem Interest Dropdown Logic
    const interestSelected = container.querySelector('#interest-selected');
    const interestOptionsList = container.querySelector('#interest-options-list');
    const interestSelectedText = container.querySelector('#interest-selected-text');
    const contactInterestInput = container.querySelector('#contact-interest');
    
    if (interestSelected && interestOptionsList && contactInterestInput) {
      interestSelected.addEventListener('click', (e) => {
        interestOptionsList.style.display = interestOptionsList.style.display === 'block' ? 'none' : 'block';
        e.stopPropagation();
      });

      const intOptions = container.querySelectorAll('.interest-option');
      intOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
          const val = opt.getAttribute('data-value');
          const text = opt.textContent.trim();
          contactInterestInput.value = val;
          interestSelectedText.textContent = text;
          interestOptionsList.style.display = 'none';
          e.stopPropagation();
        });
      });

      document.addEventListener('click', (e) => {
        if (!container.querySelector('#interest-custom-select').contains(e.target)) {
          interestOptionsList.style.display = 'none';
        }
      });
      
      const styleTag2 = document.createElement('style');
      styleTag2.innerHTML = `
        .interest-option:hover {
          background: rgba(156, 39, 255, 0.15);
          color: var(--color-primary-light);
        }
      `;
      document.head.appendChild(styleTag2);
    }

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
        const honeypot = container.querySelector('#contact_bot_trap');

        // Abuse Prevention Phase 13: Honeypot Check
        if (honeypot && honeypot.value !== '') {
          console.warn('Bot detected.');
          return;
        }

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
          // Centralized sanitization
          val = sanitizeHTML(val);
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
          // 3. Send Data to API Gateway (which proxies to webhook)
          await apiClient.submitInquiry(formData);

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
