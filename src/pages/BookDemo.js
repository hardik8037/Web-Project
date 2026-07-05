/* ═══════════════════════════════════════════════════
   BOTZO.IO — BOOK DEMO PAGE
   ═══════════════════════════════════════════════════ */
import { createFinalCTA } from '../sections/FinalCTA.js';
import { sanitizeHTML } from '../utils/sanitize.js';

export function createBookDemo() {
  const container = document.createElement('div');
  container.className = 'page demo-booking-page';

  // Generate 5 dynamic dates starting from today
  const daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let datesHTML = '';
  const today = new Date();
  
  for (let i = 0; i < 6; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayName = daysArr[d.getDay()];
    const dateNum = d.getDate();
    // Default to today (i === 0) as active
    const activeClass = i === 0 ? 'active' : ''; 
    
    const fullDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    datesHTML += `
      <button class="date-slot-btn ${activeClass}" data-date="${fullDate}">
        <span class="date-slot-day">${dayName}</span>
        <span class="date-slot-num">${dateNum}</span>
      </button>
    `;
  }

  container.innerHTML = `
    <!-- Booking Hero -->
    <section class="section page-hero booking-hero" style="padding-bottom: 0;">
      <div class="container-wide">
        <div class="section-header booking-section-header">
          <div class="detail-hero-badge" style="--badge-color: var(--color-green); margin-bottom: 1.2rem;">
            <span class="badge-dot"></span>LIVE DEMO
          </div>
          <h1 class="heading-hero booking-hero-heading">
            Book a Free <span style="white-space: nowrap;">1-on-1</span><br><span class="text-gradient" style="white-space: nowrap;">Automation Call</span>
          </h1>
          <p class="text-body-lg booking-hero-desc">
            Meet with our engineering architects to design your custom business flows, official WhatsApp templates, and CRM integration setup.
          </p>
        </div>
      </div>
    </section>

    <!-- Calendar Mockup Section -->
    <section class="section calendar-booking-section" style="padding: 0 0 5rem; margin-top: 2rem;">
      <div class="container-wide">
        <div class="booking-card premium-glass-card">
          
          <!-- Left Meeting Info -->
          <div class="booking-info-sidebar">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                <div class="booking-icon-wrapper" style="margin: 0; background: rgba(139, 92, 246, 0.15); color: #c084fc;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
              <h3 class="booking-title" style="margin-bottom: 0;">Technical Scoping Call</h3>
            </div>
            <div class="booking-meta">
              <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 30 Min</span>
              <span class="meta-divider">•</span>
              <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg> Zoom/Meet</span>
            </div>
            <p class="booking-description">
              Our tech consultants will analyze your current lead capture flow, suggest custom WhatsApp templates, and walk you through workflow builders live.
            </p>
            <div class="booking-benefits" style="flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 1.25rem; margin-top: 2.5rem;">
              <div style="display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); transition: background 0.3s ease, transform 0.3s ease;">
                <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(139, 92, 246, 0.15); display: flex; align-items: center; justify-content: center; color: #c084fc; flex-shrink: 0; border: 1px solid rgba(139, 92, 246, 0.2);">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h5 style="color: #fff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.3rem;">Live Automation Build</h5>
                  <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin: 0; line-height: 1.4;">Watch our experts build WhatsApp bots in real-time tailored to your business.</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); transition: background 0.3s ease, transform 0.3s ease;">
                <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(236, 72, 153, 0.15); display: flex; align-items: center; justify-content: center; color: #ec4899; flex-shrink: 0; border: 1px solid rgba(236, 72, 153, 0.2);">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h5 style="color: #fff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.3rem;">Tailored Workflows</h5>
                  <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin: 0; line-height: 1.4;">Custom flows mapped directly to your existing CRM and sales funnels.</p>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.02); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); transition: background 0.3s ease, transform 0.3s ease;">
                <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(59, 130, 246, 0.15); display: flex; align-items: center; justify-content: center; color: #60a5fa; flex-shrink: 0; border: 1px solid rgba(59, 130, 246, 0.2);">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                </div>
                <div>
                  <h5 style="color: #fff; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.3rem;">Seamless Integration</h5>
                  <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin: 0; line-height: 1.4;">Learn how we seamlessly connect with your entire existing tool stack.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Calendar Mock -->
          <div class="booking-selection-area">
            <h4 class="booking-step-title">Select Appointment Date & Time</h4>
            
            <!-- Dynamic Dates Grid -->
            <div class="date-slots-container">
              ${datesHTML}
            </div>

            <div class="booking-form-group" style="margin-bottom: 2rem;">
              <select id="booking-time-select" aria-label="Select Appointment Time" class="glass-input booking-input-field" style="width: 100%; cursor: pointer; appearance: none; background-image: url('data:image/svg+xml;utf8,<svg width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'white\\' stroke-width=\\'2\\' xmlns=\\'http://www.w3.org/2000/svg\\'><path d=\\'M6 9l6 6 6-6\\'/></svg>'); background-repeat: no-repeat; background-position: right 1rem center;">
                <!-- Populated via JS -->
              </select>
              <style>
                #booking-time-select option { background: #1a0b2e; color: #fff; padding: 10px; font-weight: 500; }
                #booking-time-select option:disabled { color: rgba(255,255,255,0.3); background: #0d0618; }
              </style>
            </div>

            <div class="booking-form-row">
              <div class="booking-form-group">
                <label class="booking-label">First Name</label>
                <input type="text" id="booking-firstname" required minlength="2" maxlength="50" pattern="[a-zA-Z\\s\\-]+" class="glass-input booking-input-field" placeholder="John">
              </div>
              <div class="booking-form-group">
                <label class="booking-label">Last Name</label>
                <input type="text" id="booking-lastname" required minlength="2" maxlength="50" pattern="[a-zA-Z\\s\\-]+" class="glass-input booking-input-field" placeholder="Doe">
              </div>
            </div>

            <!-- Phone Number Input -->
            <div class="booking-form-group">
              <label for="booking-phone" class="booking-label">WhatsApp Number</label>
              <div class="booking-phone-wrapper">
                
                <!-- Custom Country Select -->
                <div class="booking-country-select" id="custom-country-select">
                  <div id="country-selected" class="glass-input booking-input-field country-select-trigger" aria-label="Selected Country Code" role="button" tabindex="0" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.85rem 0.6rem;">
                    <span id="selected-flag" style="font-size: 1.1rem;">🇮🇳</span>
                    <span style="font-size: 0.6rem; opacity: 0.7;">▼</span>
                    <input type="text" id="country-search" value="+91" data-code="+91" class="country-search-input" aria-label="Search Country Code" style="background: transparent; border: none; color: #fff; width: 50px; font-size: 0.95rem; padding: 0; outline: none; flex: 1;">
                  </div>
                  <div id="country-options-list" class="country-options-dropdown" data-lenis-prevent="true">
                    <!-- Generated via JS -->
                  </div>
                </div>

                <input type="tel" id="booking-phone" required minlength="10" maxlength="15" pattern="[0-9]+" class="glass-input booking-input-field phone-input-field" placeholder="0000000000">
              </div>
            </div>

            <div class="booking-form-group">
              <label class="booking-label">Business Email</label>
              <input type="email" id="booking-email" required maxlength="100" class="glass-input booking-input-field" placeholder="john@company.com">
            </div>

            <div class="booking-form-group" style="margin-bottom: 1.5rem;">
              <label class="booking-label">What would you like to discuss? (Optional)</label>
              <textarea id="booking-brief" maxlength="500" class="glass-input booking-input-field" placeholder="Tell us briefly about your use case..." rows="3" style="resize: vertical;"></textarea>
            </div>

            <div id="booking-error-msg" style="color: #ff4d4d; font-size: 0.85rem; margin-bottom: 1rem; display: none;"></div>
            <div class="booking-form-group" style="margin-top: 1rem;">
              <button id="confirm-booking-btn" class="btn btn-primary btn-booking-submit" style="cursor: pointer; position: relative; z-index: 10;">Confirm Appointment Slot</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;

  // Bind interactive date/time slot selection
  setTimeout(() => {
    // Custom Country Select Logic
    const selectSelected = container.querySelector('#country-selected');
    const searchInput = container.querySelector('#country-search');
    const selectOptionsList = container.querySelector('#country-options-list');
    
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
        optionsHTML += `<div class="custom-select-option" data-value="${c.code}" data-flag="${c.flag}" data-name="${c.name.toLowerCase()}" style="padding: 0.6rem 1rem; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; font-size: 0.85rem; transition: background 0.2s; display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 1.2rem;">${c.flag}</span>
          <span style="font-weight: 500;">${c.name}</span>
          <span style="color: rgba(255,255,255,0.4); margin-left: auto;">${c.code}</span>
        </div>`;
      });
      selectOptionsList.innerHTML = optionsHTML;

      // Search and Filter Logic
      searchInput.addEventListener('focus', () => {
        // Reset all options to visible when opening
        const allOpts = container.querySelectorAll('.custom-select-option');
        allOpts.forEach(o => o.style.display = 'flex');
        selectOptionsList.style.display = 'block';
        searchInput.select();
      });

      const options = container.querySelectorAll('.custom-select-option');
      
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        options.forEach(opt => {
          const code = opt.dataset.value.toLowerCase();
          const name = opt.dataset.name;
          if (code.includes(val) || name.includes(val)) {
            opt.style.display = 'flex';
          } else {
            opt.style.display = 'none';
          }
        });
      });

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          searchInput.value = opt.dataset.value;
          searchInput.dataset.code = opt.dataset.value;
          container.querySelector('#selected-flag').textContent = opt.dataset.flag;
          selectOptionsList.style.display = 'none';
          // Reset all options to visible for next open
          options.forEach(o => o.style.display = 'flex');
        });
        opt.addEventListener('mouseenter', () => opt.style.background = 'rgba(156, 39, 255, 0.2)');
        opt.addEventListener('mouseleave', () => opt.style.background = 'transparent');
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#custom-country-select')) {
          if (selectOptionsList) selectOptionsList.style.display = 'none';
        }
      });
    }

    function updateTimeSlots() {
      const timeSelect = container.querySelector('#booking-time-select');
      const activeDateBtn = container.querySelector('.date-slot-btn.active');
      if (!timeSelect || !activeDateBtn) return;

      const selectedDateParts = activeDateBtn.dataset.date.split('-');
      const selectedYear = parseInt(selectedDateParts[0]);
      const selectedMonth = parseInt(selectedDateParts[1]) - 1;
      const selectedDay = parseInt(selectedDateParts[2]);

      const now = new Date();
      const isToday = (now.getFullYear() === selectedYear && now.getMonth() === selectedMonth && now.getDate() === selectedDay);

      const slots = [
        { time: '10:30 AM', hour24: 10, min: 30 },
        { time: '12:00 PM', hour24: 12, min: 0 },
        { time: '01:30 PM', hour24: 13, min: 30 },
        { time: '03:00 PM', hour24: 15, min: 0 },
        { time: '04:30 PM', hour24: 16, min: 30 },
        { time: '06:00 PM', hour24: 18, min: 0 },
        { time: '07:00 PM', hour24: 19, min: 0 }
      ];

      const dateDay = activeDateBtn.querySelector('.date-slot-day').textContent;
      const dateNum = activeDateBtn.querySelector('.date-slot-num').textContent;
      const dateKey = `${dateDay}, ${dateNum}`;

      const bookings = JSON.parse(localStorage.getItem('botzo_bookings') || '{}');

      let optionsHTML = '';
      let firstAvailableFound = false;

      slots.forEach(slot => {
        let disabled = false;
        let label = slot.time;

        if (isToday) {
          if (now.getHours() > slot.hour24 || (now.getHours() === slot.hour24 && now.getMinutes() >= slot.min)) {
            disabled = true;
            label += ' (Passed)';
          }
        }

        const slotKey = `${dateKey}_${slot.time}`;
        if (bookings[slotKey] >= 2) {
          disabled = true;
          label += ' (Full)';
        }

        if (disabled) {
          optionsHTML += `<option value="${slot.time}" disabled>${label}</option>`;
        } else {
          const selected = !firstAvailableFound ? 'selected' : '';
          optionsHTML += `<option value="${slot.time}" ${selected}>${label}</option>`;
          firstAvailableFound = true;
        }
      });

      if (!firstAvailableFound) {
        optionsHTML = `<option value="" disabled selected>No slots available</option>` + optionsHTML;
      }

      timeSelect.innerHTML = optionsHTML;
    }

    // Date slot selection
    const dateSlots = container.querySelectorAll('.date-slot-btn');
    dateSlots.forEach(slot => {
      slot.addEventListener('click', () => {
        dateSlots.forEach(s => s.classList.remove('active'));
        slot.classList.add('active');
        updateTimeSlots();
      });
    });

    // Call initially
    updateTimeSlots();


    // Confirm booking and Validation
    const confirmBtn = container.querySelector('#confirm-booking-btn');

    if (confirmBtn) {
      confirmBtn.addEventListener('click', async () => {
        const errorMsg = container.querySelector('#booking-error-msg');
        errorMsg.style.display = 'none';

        const firstName = sanitizeHTML(container.querySelector('#booking-firstname').value.trim());
        const lastName = sanitizeHTML(container.querySelector('#booking-lastname').value.trim());
        const email = sanitizeHTML(container.querySelector('#booking-email').value.trim());
        const phone = sanitizeHTML(container.querySelector('#booking-phone').value.trim());
        const brief = sanitizeHTML(container.querySelector('#booking-brief').value.trim());
        const countryCode = container.querySelector('#country-search').dataset.code || '+91';

        const activeDate = container.querySelector('.date-slot-btn.active');
        const dateDay = activeDate ? activeDate.querySelector('.date-slot-day')?.textContent : '';
        const dateNum = activeDate ? activeDate.querySelector('.date-slot-num')?.textContent : '';
        const timeSelect = container.querySelector('#booking-time-select');
        let timeText = timeSelect ? timeSelect.value : '';

        // Basic JS Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!firstName || firstName.length < 2 || firstName.length > 50) {
          errorMsg.textContent = 'Please enter a valid first name.';
          errorMsg.style.display = 'block';
          return;
        }
        if (!lastName || lastName.length < 2 || lastName.length > 50) {
          errorMsg.textContent = 'Please enter a valid last name.';
          errorMsg.style.display = 'block';
          return;
        }
        if (!phone || phone.length < 10 || phone.length > 15 || !/^[0-9]+$/.test(phone)) {
          errorMsg.textContent = 'Please enter a valid WhatsApp number (at least 10 digits, no spaces or dashes).';
          errorMsg.style.display = 'block';
          return;
        }
        if (!email || !emailRegex.test(email)) {
          errorMsg.textContent = 'Please enter a valid business email address.';
          errorMsg.style.display = 'block';
          return;
        }
        // Removed brief length validation so users can type 'ok' if they want.
        if (!timeText) {
          errorMsg.textContent = 'Please select a valid time slot. All slots for this day might be full or passed.';
          errorMsg.style.display = 'block';
          return;
        }

        // --- ⚙️ WEBHOOK CONFIGURATION ---
        // Replace this URL with your Make.com, Zapier, or custom webhook URL
        const WEBHOOK_URL = 'https://webhooks.1automations.com/webhook/6a4aba916f1a8bf9dd888ba2'; 
        
        // 1. Gather Booking Data & Save to LocalStorage
        const dateKey = `${dateDay}, ${dateNum}`;
        const slotKey = `${dateKey}_${timeText}`;
        const bookings = JSON.parse(localStorage.getItem('botzo_bookings') || '{}');
        bookings[slotKey] = (bookings[slotKey] || 0) + 1;
        localStorage.setItem('botzo_bookings', JSON.stringify(bookings));

        const bookingData = {
          type: 'Demo Booking',
          source: 'Book Demo Page',
          firstName: firstName,
          lastName: lastName,
          email: email,
          brief: brief,
          date: `${dateDay}, ${dateNum}`,
          time: timeText,
          whatsapp_number: `${countryCode}${phone}`,
          submittedAt: new Date().toISOString()
        };

        // 2. UI Loading State
        const originalBtnText = confirmBtn.innerHTML;
        confirmBtn.innerHTML = '<span style="display:inline-block; width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite;"></span> Scheduling...';
        confirmBtn.style.pointerEvents = 'none';
        confirmBtn.style.opacity = '0.8';

        try {
          // 3. Send Data to Webhook
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
          });
          
          if (!response.ok) throw new Error('Webhook failed');

          // 4. Success Modal
          const overlay = document.createElement('div');
          overlay.id = 'booking-confirm-overlay';
          overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(8px);z-index:9999;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.3s ease;';

          overlay.innerHTML = `
            <div style="background: linear-gradient(145deg, #1a0b2e, #0d0618); border: 1px solid rgba(156,39,255,0.25); border-radius: 20px; padding: 3rem 2.5rem; max-width: 440px; width: 90%; text-align: center; box-shadow: 0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(156,39,255,0.1); transform: scale(0.85); transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); position: relative;" id="booking-modal-card">
              
              <!-- Success Icon -->
              <div style="width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary), var(--color-green)); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; box-shadow: 0 8px 30px rgba(156,39,255,0.3);">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" style="stroke-dasharray: 24; stroke-dashoffset: 24; animation: checkDraw 0.5s ease 0.3s forwards;"/>
                </svg>
              </div>

              <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: #fff;">Booking Confirmed!</h3>
              <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 2rem; line-height: 1.6;">Your demo session has been scheduled. We'll send a confirmation to your WhatsApp.</p>

              <!-- Booking Details -->
              <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem; margin-bottom: 2rem; text-align: left;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.8rem;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(156,39,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">📅</div>
                  <div>
                    <div style="font-size: 0.7rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;">Date</div>
                    <div style="font-size: 0.9rem; font-weight: 600; color: #fff;">${dateDay}, ${dateNum}</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.8rem;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(156,39,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">⏰</div>
                  <div>
                    <div style="font-size: 0.7rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;">Time</div>
                    <div style="font-size: 0.9rem; font-weight: 600; color: #fff;">${timeText}</div>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(156,39,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">📱</div>
                  <div>
                    <div style="font-size: 0.7rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.5px;">WhatsApp</div>
                    <div style="font-size: 0.9rem; font-weight: 600; color: #fff;">${countryCode} ${phone}</div>
                  </div>
                </div>
              </div>

              <button id="close-booking-modal" class="btn btn-primary" style="width: 100%; text-align: center; font-weight: 700;">Done</button>
            </div>
          `;

          document.body.appendChild(overlay);

          // Add checkmark animation keyframe
          const style = document.createElement('style');
          style.textContent = `@keyframes checkDraw { to { stroke-dashoffset: 0; } }`;
          document.head.appendChild(style);

          // Animate in
          requestAnimationFrame(() => {
            overlay.style.opacity = '1';
            overlay.querySelector('#booking-modal-card').style.transform = 'scale(1)';
          });

          // Close modal
          const closeModal = () => {
            overlay.style.opacity = '0';
            overlay.querySelector('#booking-modal-card').style.transform = 'scale(0.85)';
            setTimeout(() => { 
              overlay.remove(); style.remove(); 
              // Refresh time slots to reflect new booking
              updateTimeSlots();
            }, 300);
          };

          overlay.querySelector('#close-booking-modal').addEventListener('click', closeModal);
          overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

        } catch (error) {
          console.error('Error sending booking data:', error);
          errorMsg.innerText = 'Something went wrong scheduling your demo. Please try again or reach out on WhatsApp.';
          errorMsg.style.display = 'block';
        } finally {
          // Reset Button
          confirmBtn.innerHTML = originalBtnText;
          confirmBtn.style.pointerEvents = 'auto';
          confirmBtn.style.opacity = '1';
        }
      });
    }
  }, 100);

  return container;
}
