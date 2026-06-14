/* ═══════════════════════════════════════════════════
   BOTZO.IO — BOOK DEMO PAGE
   ═══════════════════════════════════════════════════ */

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
      <div class="container">
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
      <div class="container">
        <div class="booking-card premium-glass-card">
          
          <!-- Left Meeting Info -->
          <div class="booking-info-sidebar">
            <div class="booking-icon-wrapper">
              <span class="booking-icon">📅</span>
            </div>
            <h3 class="booking-title">Technical Scoping Call</h3>
            <div class="booking-meta">
              <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 30 Min</span>
              <span class="meta-divider">•</span>
              <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg> Zoom/Meet</span>
            </div>
            <p class="booking-description">
              Our tech consultants will analyze your current lead capture flow, suggest custom WhatsApp templates, and walk you through workflow builders live.
            </p>
          </div>

          <!-- Right Calendar Mock -->
          <div class="booking-selection-area">
            <h4 class="booking-step-title">Select Appointment Date & Time</h4>
            
            <!-- Dynamic Dates Grid -->
            <div class="date-slots-container">
              ${datesHTML}
            </div>

            <!-- Time Slots Dropdown -->
            <div class="booking-form-group" style="margin-bottom: 2rem;">
              <select id="booking-time-select" class="glass-input booking-input-field" style="width: 100%; cursor: pointer; appearance: none; background-image: url('data:image/svg+xml;utf8,<svg width=\\'12\\' height=\\'12\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'white\\' stroke-width=\\'2\\' xmlns=\\'http://www.w3.org/2000/svg\\'><path d=\\'M6 9l6 6 6-6\\'/></svg>'); background-repeat: no-repeat; background-position: right 1rem center;">
                <!-- Populated via JS -->
              </select>
              <style>
                #booking-time-select option { background: #1a0b2e; color: #fff; padding: 10px; font-weight: 500; }
                #booking-time-select option:disabled { color: rgba(255,255,255,0.3); background: #0d0618; }
              </style>
            </div>

            <!-- Phone Number Input -->
            <div class="booking-form-group">
              <label class="booking-label">WhatsApp Number</label>
              <div class="booking-phone-wrapper">
                
                <!-- Custom Country Select -->
                <div class="booking-country-select" id="custom-country-select">
                  <div id="country-selected" class="glass-input booking-input-field country-select-trigger">
                    <input type="text" id="country-search" value="+91 (IN)" data-code="+91" class="country-search-input">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="country-select-icon"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  <div id="country-options-list" class="country-options-dropdown">
                    <!-- Generated via JS -->
                  </div>
                </div>

                <input type="tel" id="booking-phone" class="glass-input booking-input-field phone-input-field" placeholder="00000 00000">
              </div>
            </div>

            <button id="confirm-booking-btn" class="btn btn-primary btn-booking-submit">Confirm Appointment Slot</button>
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
        { code: '+1', name: 'US/CA' }, { code: '+7', name: 'RU/KZ' }, { code: '+20', name: 'EG' },
        { code: '+27', name: 'ZA' }, { code: '+30', name: 'GR' }, { code: '+31', name: 'NL' },
        { code: '+32', name: 'BE' }, { code: '+33', name: 'FR' }, { code: '+34', name: 'ES' },
        { code: '+36', name: 'HU' }, { code: '+39', name: 'IT' }, { code: '+40', name: 'RO' },
        { code: '+41', name: 'CH' }, { code: '+43', name: 'AT' }, { code: '+44', name: 'UK' },
        { code: '+45', name: 'DK' }, { code: '+46', name: 'SE' }, { code: '+47', name: 'NO' },
        { code: '+48', name: 'PL' }, { code: '+49', name: 'DE' }, { code: '+51', name: 'PE' },
        { code: '+52', name: 'MX' }, { code: '+53', name: 'CU' }, { code: '+54', name: 'AR' },
        { code: '+55', name: 'BR' }, { code: '+56', name: 'CL' }, { code: '+57', name: 'CO' },
        { code: '+58', name: 'VE' }, { code: '+60', name: 'MY' }, { code: '+61', name: 'AU' },
        { code: '+62', name: 'ID' }, { code: '+63', name: 'PH' }, { code: '+64', name: 'NZ' },
        { code: '+65', name: 'SG' }, { code: '+66', name: 'TH' }, { code: '+81', name: 'JP' },
        { code: '+82', name: 'KR' }, { code: '+84', name: 'VN' }, { code: '+86', name: 'CN' },
        { code: '+90', name: 'TR' }, { code: '+91', name: 'IN' }, { code: '+92', name: 'PK' },
        { code: '+93', name: 'AF' }, { code: '+94', name: 'LK' }, { code: '+95', name: 'MM' },
        { code: '+971', name: 'UAE' }, { code: '+972', name: 'IL' }, { code: '+973', name: 'BH' },
        { code: '+974', name: 'QA' }
      ];

      let optionsHTML = '';
      countries.forEach(c => {
        optionsHTML += `<div class="custom-select-option" data-value="${c.code}" style="padding: 0.6rem 1rem; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); color: #fff; font-size: 0.85rem; transition: background 0.2s;">${c.code} (${c.name})</div>`;
      });
      selectOptionsList.innerHTML = optionsHTML;

      // Search and Filter Logic
      searchInput.addEventListener('focus', () => {
        // Reset all options to visible when opening
        const allOpts = container.querySelectorAll('.custom-select-option');
        allOpts.forEach(o => o.style.display = 'block');
        selectOptionsList.style.display = 'block';
        searchInput.select();
      });

      const options = container.querySelectorAll('.custom-select-option');
      
      searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        options.forEach(opt => {
          if (opt.textContent.toLowerCase().includes(val)) {
            opt.style.display = 'block';
          } else {
            opt.style.display = 'none';
          }
        });
      });

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          searchInput.value = opt.textContent;
          searchInput.dataset.code = opt.dataset.value;
          selectOptionsList.style.display = 'none';
          // Reset all options to visible for next open
          options.forEach(o => o.style.display = 'block');
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
    const phoneInput = container.querySelector('#booking-phone');
    
    // Basic phone validation rules
    const phoneRules = {
      '+91': { min: 10, max: 10 },
      '+1': { min: 10, max: 10 },
      '+44': { min: 10, max: 11 },
      '+61': { min: 9, max: 9 },
      '+971': { min: 9, max: 9 },
      'default': { min: 7, max: 15 }
    };

    if (confirmBtn) {
      confirmBtn.addEventListener('click', async () => {
        if (phoneInput && searchInput) {
          const num = phoneInput.value.replace(/\D/g, ''); // strip non-digits
          const code = searchInput.dataset.code || '+91';
          const rule = phoneRules[code] || phoneRules['default'];

          if (!num) {
            alert('Please enter your WhatsApp Number.');
            phoneInput.focus();
            return;
          }
          
          if (num.length < rule.min || num.length > rule.max) {
            const lengthMsg = rule.min === rule.max ? `${rule.min}` : `${rule.min} to ${rule.max}`;
            alert(`Invalid phone number length for ${code}. Expected ${lengthMsg} digits, but got ${num.length}.`);
            phoneInput.focus();
            return;
          }
        }

        // Get selected date
        const activeDate = container.querySelector('.date-slot-btn.active');
        const dateDay = activeDate ? activeDate.querySelector('.date-slot-day')?.textContent : '';
        const dateNum = activeDate ? activeDate.querySelector('.date-slot-num')?.textContent : '';

        // Get selected time
        const timeSelect = container.querySelector('#booking-time-select');
        let timeText = timeSelect ? timeSelect.value : '';

        if (!timeText) {
          alert('Please select a valid time slot. All slots for this day might be full or passed.');
          return;
        }

        // Get phone
        const countryCode = searchInput ? searchInput.dataset.code : '+91';
        const phoneNum = phoneInput ? phoneInput.value : '';

        // --- ⚙️ WEBHOOK CONFIGURATION ---
        // Replace this URL with your Make.com, Zapier, or custom webhook URL
        const WEBHOOK_URL = 'https://your-webhook-url.com/endpoint'; 
        
        // 1. Gather Booking Data & Save to LocalStorage
        const dateKey = `${dateDay}, ${dateNum}`;
        const slotKey = `${dateKey}_${timeText}`;
        const bookings = JSON.parse(localStorage.getItem('botzo_bookings') || '{}');
        bookings[slotKey] = (bookings[slotKey] || 0) + 1;
        localStorage.setItem('botzo_bookings', JSON.stringify(bookings));

        const bookingData = {
          type: 'Demo Booking',
          source: 'Book Demo Page',
          date: `${dateDay}, ${dateNum}`,
          time: timeText,
          whatsapp_number: `${countryCode}${phoneNum}`, // Concatenated together
          submittedAt: new Date().toISOString()
        };

        // 2. UI Loading State
        const originalBtnText = confirmBtn.innerHTML;
        confirmBtn.innerHTML = '<span style="display:inline-block; width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 1s linear infinite;"></span> Scheduling...';
        confirmBtn.style.pointerEvents = 'none';
        confirmBtn.style.opacity = '0.8';

        try {
          // 3. Send Data to Webhook
          /* 
          // Uncomment this block when you have added your real webhook URL above!
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
          });
          
          if (!response.ok) throw new Error('Webhook failed');
          */

          // Simulate network delay for demo
          await new Promise(resolve => setTimeout(resolve, 1500));

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
                    <div style="font-size: 0.9rem; font-weight: 600; color: #fff;">${countryCode} ${phoneNum}</div>
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
          alert('Something went wrong scheduling your demo. Please try again or reach out on WhatsApp.');
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
