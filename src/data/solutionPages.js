/* ═══════════════════════════════════════════════════
   SOLUTION / USE CASE DETAIL PAGES DATA
   12 industry pages — 8 original + 4 new
   ═══════════════════════════════════════════════════ */

export const SOLUTION_PAGES = {
  'real-estate': {
    slug: 'real-estate', category: 'solutions', title: 'Real Estate',
    overline: 'Industry Solution', heroTitle: 'Real Estate', heroHighlight: 'Automation Suite',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'Automate property lead routing, site visit scheduling, virtual tour sharing, and agent follow-ups. Convert enquiries into site visits and closures 3x faster.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    featuresOverline: 'Built for Realtors',
    featuresTitle: 'Property Sales <span class="text-gradient">Automation</span>',
    features: [
      { icon: '🏠', title: 'Instant Lead Routing', desc: 'New property enquiries from MagicBricks, 99acres, or your website auto-routed to the right agent based on area, budget, or property type.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📅', title: 'Site Visit Booking', desc: 'Let prospects book site visits directly through WhatsApp with available time slots. Auto-reminders reduce no-shows by 60%.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📸', title: 'Property Catalogs', desc: 'Send interactive property brochures with images, floor plans, pricing, and amenities directly in the chat window.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🔄', title: 'Follow-Up Sequences', desc: 'Automated follow-up messages after site visits, price drops, or new listings matching the prospect\'s criteria.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📊', title: 'Agent Performance', desc: 'Track each agent\'s response time, site visits conducted, closures, and pipeline value in real-time dashboards.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🤖', title: 'AI Property Matcher', desc: 'AI chatbot asks buyer preferences and instantly recommends matching properties from your listing database.', iconBg: 'rgba(184,77,255,0.1)', iconColor: '#B84DFF' },
    ],
    demo: `
      <div class="dash-whatsapp">
        <div class="dash-chat-main" style="width:100%;">
          <div class="dash-chat-header"><div class="dash-avatar" style="background:#FF6B35;width:28px;height:28px;font-size:0.65rem;">P</div><div><div style="font-size:0.78rem;font-weight:600;">PropStar Realty Bot</div><div style="font-size:0.65rem;color:var(--color-green);">Verified ✅</div></div></div>
          <div class="dash-chat-body">
            <div class="chat-bubble chat-bubble-incoming">Hi, I'm looking for a 3BHK in Whitefield under 1.2 Cr</div>
            <div class="chat-bubble chat-bubble-outgoing">Great choice! 🏠 I found 4 matching properties in Whitefield:<br><br>1️⃣ <strong>Brigade Orchards</strong> — 3BHK, 1650 sqft, ₹1.05 Cr<br>2️⃣ <strong>Prestige Lakeside</strong> — 3BHK, 1800 sqft, ₹1.18 Cr<br><br>Would you like to schedule a site visit?</div>
            <div class="chat-bubble chat-bubble-incoming">Yes, Brigade Orchards on Saturday</div>
            <div class="chat-bubble chat-bubble-outgoing">✅ Site visit booked!<br>📅 Saturday, 11:00 AM<br>📍 Brigade Orchards, Whitefield<br>👤 Agent: Ravi Kumar<br><br>You'll receive a reminder 2 hours before. See you there!</div>
          </div>
        </div>
      </div>
    `,
    demoOverline: 'Live Chat Flow',
    demoTitle: 'Property Enquiry <span class="text-gradient">Automation</span>',
    demoDesc: 'Watch how a property enquiry is handled automatically — from matching to site visit booking in under 60 seconds.',
    steps: [
      { number: '01', title: 'List Properties', desc: 'Upload your property catalog with images, floor plans, pricing, and location details.' },
      { number: '02', title: 'Connect Portals', desc: 'Integrate with 99acres, MagicBricks, and Housing.com for automatic lead capture.' },
      { number: '03', title: 'Auto-Engage', desc: 'AI bot qualifies leads, shares matching properties, and books site visits automatically.' },
      { number: '04', title: 'Close Deals', desc: 'Track pipeline, automate follow-ups, and close deals faster with CRM integration.' },
    ],
    benefits: [
      { value: '+180%', label: 'Site Visit Bookings', color: '#FF6B35' },
      { value: '-60%', label: 'No-Show Rate', color: '#0088FF' },
      { value: '3x', label: 'Faster Lead Response', color: '#25D366' },
      { value: '45%', label: 'Higher Closure Rate', color: '#9C27FF' },
    ],
    faq: [
      { q: 'Can Botzo integrate with property portals like 99acres?', a: 'Yes! We support webhook integrations with 99acres, MagicBricks, Housing.com, and most CRM systems used in real estate.' },
      { q: 'How does the AI property matcher work?', a: 'Our AI chatbot asks structured questions about budget, location, BHK type, and preferences, then searches your database for matching listings and presents them with details.' },
      { q: 'Can different agents handle different areas?', a: 'Absolutely. You can set auto-assignment rules based on locality, property type, budget range, or round-robin distribution.' },
    ],
    testimonials: [
      { name: 'Kavita Jain', role: 'Director, PropStar Realty', quote: 'Botzo automated our entire lead-to-visit pipeline. Site visit bookings jumped 180% and our agents focus on closing instead of chasing leads.', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '📊', title: 'CRM Pipeline', desc: 'Visual lead management', href: '/platform/crm' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Primary communication channel', href: '/platform/whatsapp-api' },
      { icon: '⚡', title: 'Workflow Automation', desc: 'Auto follow-up sequences', href: '/platform/workflow-automation' },
      { icon: '📅', title: 'Appointment Booking', desc: 'Site visit scheduling', href: '/platform/appointment-booking' },
    ],
  },

  'healthcare': {
    slug: 'healthcare', category: 'solutions', title: 'Healthcare',
    overline: 'Industry Solution', heroTitle: 'Healthcare', heroHighlight: 'Patient Automation',
    gradient: ['#0088FF', '#0055CC'],
    heroDesc: 'Automate appointment booking, prescription reminders, patient follow-ups, lab report delivery, and health consultations through WhatsApp.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '📅', title: 'Appointment Booking', desc: 'Patients book consultations via WhatsApp chatbot. Auto-sync with hospital management systems.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '💊', title: 'Prescription Reminders', desc: 'Automated medication reminders sent at scheduled times to improve treatment adherence.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📋', title: 'Lab Report Delivery', desc: 'Send lab results securely via WhatsApp with doctor\'s notes and follow-up recommendations.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🔔', title: 'Follow-Up Automation', desc: 'Post-consultation check-ins, vaccination reminders, and preventive health alerts.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    demo: `
      <div class="dash-whatsapp">
        <div class="dash-chat-main" style="width:100%;">
          <div class="dash-chat-header"><div class="dash-avatar" style="background:#0088FF;width:28px;height:28px;font-size:0.65rem;">H</div><div><div style="font-size:0.78rem;font-weight:600;">HealthFirst Clinic</div><div style="font-size:0.65rem;color:var(--color-green);">Verified ✅</div></div></div>
          <div class="dash-chat-body">
            <div class="chat-bubble chat-bubble-outgoing">Hello! 👋 Welcome to HealthFirst. How can I help?<br><br>1️⃣ Book Appointment<br>2️⃣ Lab Results<br>3️⃣ Prescription Refill<br>4️⃣ Talk to Doctor</div>
            <div class="chat-bubble chat-bubble-incoming">1</div>
            <div class="chat-bubble chat-bubble-outgoing">Available slots for Dr. Meera Patel:<br><br>📅 Tomorrow — 10:00 AM, 2:30 PM<br>📅 Thursday — 11:00 AM, 4:00 PM<br><br>Reply with your preferred time!</div>
            <div class="chat-bubble chat-bubble-incoming">Tomorrow 10 AM</div>
            <div class="chat-bubble chat-bubble-outgoing">✅ Appointment confirmed!<br>🏥 Dr. Meera Patel — General Medicine<br>📅 Tomorrow, 10:00 AM<br>📍 HealthFirst Clinic, Sector 15<br><br>Reminder will be sent 2 hours before.</div>
          </div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Setup Clinic Profile', desc: 'Configure doctors, departments, working hours, and slot durations.' },
      { number: '02', title: 'Enable Booking Bot', desc: 'Deploy WhatsApp chatbot for appointment booking with real-time availability.' },
      { number: '03', title: 'Automate Reminders', desc: 'Set up medication reminders, follow-up alerts, and health tips.' },
      { number: '04', title: 'Track Outcomes', desc: 'Monitor patient engagement, no-show rates, and satisfaction scores.' },
    ],
    benefits: [
      { value: '-60%', label: 'Appointment No-Shows', color: '#0088FF' },
      { value: '95%', label: 'Patient Satisfaction', color: '#25D366' },
      { value: '24/7', label: 'Booking Availability', color: '#9C27FF' },
      { value: '3x', label: 'Patient Throughput', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '📅', title: 'Appointment Booking', desc: 'Chat-based scheduling', href: '/platform/appointment-booking' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Patient communication', href: '/platform/whatsapp-api' },
      { icon: '📊', title: 'CRM', desc: 'Patient data management', href: '/platform/crm' },
    ],
  },

  'ecommerce': {
    slug: 'ecommerce', category: 'solutions', title: 'Ecommerce',
    overline: 'Industry Solution', heroTitle: 'Ecommerce', heroHighlight: 'Sales Automation',
    gradient: ['#9C27FF', '#7B1FA2'],
    heroDesc: 'Recover abandoned carts, automate order updates, handle returns, and drive repeat purchases through WhatsApp and conversational commerce.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🛒', title: 'Cart Recovery', desc: 'Automated WhatsApp messages to shoppers who abandoned checkout. Include product images and direct payment links.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📦', title: 'Order Tracking', desc: 'Real-time shipping updates, delivery confirmations, and tracking links sent automatically via WhatsApp.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '🔄', title: 'Return Management', desc: 'Customers initiate returns via chat. Bot collects reason, processes request, and schedules pickup.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🎁', title: 'Upsell Campaigns', desc: 'Personalized product recommendations based on purchase history sent via targeted broadcasts.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '💰', title: 'COD Confirmation', desc: 'Reduce COD returns by sending order confirmation messages with payment reminders before dispatch.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '⭐', title: 'Review Collection', desc: 'Automated post-delivery review requests with one-tap rating buttons in WhatsApp.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    demo: `
      <div class="dash-whatsapp">
        <div class="dash-chat-main" style="width:100%;">
          <div class="dash-chat-header"><div class="dash-avatar" style="background:#9C27FF;width:28px;height:28px;font-size:0.65rem;">S</div><div><div style="font-size:0.78rem;font-weight:600;">StyleKart Store</div><div style="font-size:0.65rem;color:var(--color-green);">Verified ✅</div></div></div>
          <div class="dash-chat-body">
            <div class="chat-bubble chat-bubble-outgoing">Hey Priya! 👋 You left something in your cart:<br><br>👟 Nike Air Max 270 — ₹9,999<br>👕 Cotton Crew Tee — ₹1,299<br><br>💰 Total: ₹11,298<br>🎉 Use code <strong>SAVE10</strong> for 10% off!<br><br>Complete your order → botzo.io/cart/p8291</div>
            <div class="chat-bubble chat-bubble-incoming">Applied the code, just paid! 🎉</div>
            <div class="chat-bubble chat-bubble-outgoing">✅ Order confirmed! #ORD-8291<br>📦 Estimated delivery: 3-5 business days<br>🔗 Track: botzo.io/track/8291<br><br>Thanks for shopping with StyleKart! 🙌</div>
          </div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Connect Store', desc: 'Integrate Shopify, WooCommerce, or your custom store with one-click setup.' },
      { number: '02', title: 'Set Automations', desc: 'Enable cart recovery, order updates, review requests, and upsell campaigns.' },
      { number: '03', title: 'Personalize', desc: 'Customize message templates with product images, dynamic pricing, and brand voice.' },
      { number: '04', title: 'Grow Revenue', desc: 'Watch cart recovery and repeat purchases drive measurable revenue growth.' },
    ],
    benefits: [
      { value: '22%', label: 'Cart Recovery Rate', color: '#9C27FF' },
      { value: '3.5x', label: 'Repeat Purchase Rate', color: '#25D366' },
      { value: '-40%', label: 'COD Returns', color: '#0088FF' },
      { value: '98%', label: 'Delivery Notification Rate', color: '#FF6B35' },
    ],
    faq: [
      { q: 'Which ecommerce platforms do you support?', a: 'Shopify, WooCommerce, Magento, BigCommerce, and custom stores via API. Shopify integration is one-click.' },
      { q: 'How does cart recovery work?', a: 'When a customer abandons checkout, we automatically send a WhatsApp message within 1 hour with product images, pricing, and a direct checkout link.' },
      { q: 'Can I send COD confirmation messages?', a: 'Yes. Before dispatching COD orders, an automated message asks customers to confirm. This reduces returns by up to 40%.' },
    ],
    testimonials: [
      { name: 'Ankit Mehta', role: 'Founder, StyleKart', quote: 'Botzo recovered ₹12 lakh in abandoned carts in our first quarter. The WhatsApp cart recovery messages have an 89% open rate.', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '💳', title: 'Payment Integration', desc: 'In-chat checkout', href: '/platform/payment-integration' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Promotional broadcasts', href: '/platform/bulk-campaigns' },
      { icon: '🛒', title: 'Ecommerce Development', desc: 'Build your store', href: '/services/ecommerce-development' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Commerce messaging', href: '/platform/whatsapp-api' },
    ],
  },

  'restaurants': {
    slug: 'restaurants', category: 'solutions', title: 'Restaurants',
    overline: 'Industry Solution', heroTitle: 'Restaurant', heroHighlight: 'Order Automation',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'WhatsApp-based table reservations, digital menus, delivery orders, and loyalty programs. Increase direct orders and reduce platform dependency.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🍽️', title: 'Table Reservations', desc: 'Instant WhatsApp booking with party size, date, and time selection. Auto-confirmation and reminders.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📋', title: 'Digital Menu', desc: 'Interactive digital menu with images, descriptions, prices, and direct ordering from WhatsApp.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🛵', title: 'Delivery Orders', desc: 'Take orders directly via WhatsApp. No commission to aggregators. Payment collection in chat.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🏆', title: 'Loyalty Program', desc: 'Automated loyalty points, birthday offers, and VIP rewards sent via WhatsApp.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    demo: `
      <div class="dash-whatsapp"><div class="dash-chat-main" style="width:100%;"><div class="dash-chat-header"><div class="dash-avatar" style="background:#FF6B35;width:28px;height:28px;font-size:0.65rem;">🍕</div><div><div style="font-size:0.78rem;font-weight:600;">Italiano Pizza</div><div style="font-size:0.65rem;color:var(--color-green);">Online Ordering</div></div></div>
      <div class="dash-chat-body"><div class="chat-bubble chat-bubble-outgoing">Welcome to Italiano! 🍕<br><br>1️⃣ View Menu<br>2️⃣ Reserve a Table<br>3️⃣ Track Order<br>4️⃣ My Rewards</div><div class="chat-bubble chat-bubble-incoming">1</div><div class="chat-bubble chat-bubble-outgoing">🍕 <strong>Margherita</strong> — ₹349<br>🍕 <strong>Pepperoni</strong> — ₹449<br>🥗 <strong>Caesar Salad</strong> — ₹249<br>🍝 <strong>Pasta Alfredo</strong> — ₹399<br><br>Reply with item names to add to cart!</div></div></div></div>
    `,
    steps: [
      { number: '01', title: 'Upload Menu', desc: 'Add your menu items with images, prices, and categories.' },
      { number: '02', title: 'Enable Ordering', desc: 'Turn on WhatsApp ordering with table booking and delivery options.' },
      { number: '03', title: 'Connect Payment', desc: 'Accept UPI, card, and COD payments directly in chat.' },
      { number: '04', title: 'Build Loyalty', desc: 'Set up automated loyalty programs and promotional campaigns.' },
    ],
    benefits: [
      { value: '+35%', label: 'Direct Orders', color: '#FF6B35' },
      { value: '₹0', label: 'Platform Commission', color: '#25D366' },
      { value: '2x', label: 'Repeat Customers', color: '#9C27FF' },
      { value: '4.7★', label: 'Customer Rating', color: '#0088FF' },
    ],
    relatedLinks: [
      { icon: '💳', title: 'Payment Integration', desc: 'In-chat payment collection', href: '/platform/payment-integration' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Promotional broadcasts', href: '/platform/bulk-campaigns' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Ordering channel', href: '/platform/whatsapp-api' },
    ],
  },

  'education': {
    slug: 'education', category: 'solutions', title: 'Education',
    overline: 'Industry Solution', heroTitle: 'Education', heroHighlight: 'Communication Hub',
    gradient: ['#36C5F0', '#0088FF'],
    heroDesc: 'Streamline admissions, fee reminders, parent communication, and student engagement through automated WhatsApp workflows.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🎓', title: 'Admission Guidance', desc: 'AI chatbot answers admission queries, shares brochures, and schedules campus visits 24/7.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '💰', title: 'Fee Reminders', desc: 'Automated fee payment reminders with payment links sent to parents before due dates.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '📢', title: 'Announcements', desc: 'Broadcast exam schedules, holiday notices, event updates, and result notifications to parents.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📊', title: 'Attendance Alerts', desc: 'Real-time attendance notifications to parents when students check in or are absent.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Setup Institute', desc: 'Configure departments, courses, fee structures, and communication groups.' },
      { number: '02', title: 'Import Students', desc: 'Bulk import student and parent contact data from your management system.' },
      { number: '03', title: 'Automate Comms', desc: 'Enable fee reminders, attendance alerts, and admission inquiry bot.' },
      { number: '04', title: 'Engage & Grow', desc: 'Broadcast updates, collect feedback, and manage admissions pipeline.' },
    ],
    benefits: [
      { value: '85%', label: 'Query Resolution', color: '#36C5F0' },
      { value: '+40%', label: 'On-Time Fee Collection', color: '#25D366' },
      { value: '24/7', label: 'Admission Support', color: '#9C27FF' },
      { value: '95%', label: 'Parent Satisfaction', color: '#0088FF' },
    ],
    relatedLinks: [
      { icon: '📢', title: 'Bulk Campaigns', desc: 'School announcements', href: '/platform/bulk-campaigns' },
      { icon: '💳', title: 'Payment Integration', desc: 'Fee collection', href: '/platform/payment-integration' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Parent communication', href: '/platform/whatsapp-api' },
    ],
  },

  'textile': {
    slug: 'textile', category: 'solutions', title: 'Textile Industry',
    overline: 'Industry Solution', heroTitle: 'Textile', heroHighlight: 'B2B Commerce',
    gradient: ['#9C27FF', '#7B1FA2'],
    heroDesc: 'Digital wholesale catalogs, bulk order management, agent distribution networks, and shipment tracking for textile manufacturers and distributors.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '📸', title: 'Digital Catalogs', desc: 'Share product catalogs with high-res fabric images, MOQ, pricing, and availability via WhatsApp.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📦', title: 'Bulk Order Booking', desc: 'Collect wholesale orders with fabric type, quantity, color variants, and delivery requirements in chat.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '👥', title: 'Agent Network', desc: 'Distribute catalogs to your agent network. Track agent-wise orders, commissions, and performance.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🚛', title: 'Shipment Tracking', desc: 'Automated dispatch notifications with transport details, LR numbers, and expected delivery dates.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
    ],
    steps: [
      { number: '01', title: 'Upload Catalog', desc: 'Add fabric images, descriptions, pricing, and MOQ details to your digital catalog.' },
      { number: '02', title: 'Distribute', desc: 'Share catalogs with retailers and agents via WhatsApp broadcast.' },
      { number: '03', title: 'Collect Orders', desc: 'Receive and manage bulk orders through structured WhatsApp conversations.' },
      { number: '04', title: 'Fulfill & Track', desc: 'Process orders, dispatch shipments, and send tracking updates automatically.' },
    ],
    benefits: [
      { value: '40%', label: 'Faster Order Cycles', color: '#9C27FF' },
      { value: '3x', label: 'Catalog Reach', color: '#0088FF' },
      { value: '-60%', label: 'Order Errors', color: '#25D366' },
      { value: '₹0', label: 'App Development Cost', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Catalog broadcasts', href: '/platform/bulk-campaigns' },
      { icon: '📊', title: 'CRM', desc: 'Buyer management', href: '/platform/crm' },
      { icon: '💬', title: 'WhatsApp API', desc: 'B2B communication', href: '/platform/whatsapp-api' },
    ],
  },

  'jewellery': {
    slug: 'jewellery', category: 'solutions', title: 'Jewellery',
    overline: 'Industry Solution', heroTitle: 'Jewellery', heroHighlight: 'Client Engagement',
    gradient: ['#FFD700', '#FFA000'],
    heroDesc: 'VIP collection previews, secure invoice checkout, personalized recommendations, and high-touch client relationship management for jewellery brands.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '💎', title: 'Collection Launches', desc: 'Share new collections with high-resolution images, weight, purity, and pricing to VIP clients first.', iconBg: 'rgba(255,215,0,0.1)', iconColor: '#FFD700' },
      { icon: '🔒', title: 'Secure Invoicing', desc: 'Send digitally signed invoices with hallmark details and payment links directly via WhatsApp.', iconBg: 'rgba(255,215,0,0.1)', iconColor: '#FFD700' },
      { icon: '👑', title: 'VIP Client Program', desc: 'Exclusive previews, anniversary reminders, and personalized recommendations for top clients.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📅', title: 'Store Appointments', desc: 'Let clients book private viewing appointments for bridal collections and custom designs.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    steps: [
      { number: '01', title: 'Setup Brand', desc: 'Configure your brand profile, collections, and client tiers.' },
      { number: '02', title: 'Import VIP List', desc: 'Upload your client database with preferences, purchase history, and special dates.' },
      { number: '03', title: 'Launch & Engage', desc: 'Send collection previews, booking invites, and personalized recommendations.' },
      { number: '04', title: 'Build Loyalty', desc: 'Track client engagement, repeat purchases, and lifetime value.' },
    ],
    benefits: [
      { value: '3.5x', label: 'Client Engagement', color: '#FFD700' },
      { value: '67%', label: 'VIP Retention', color: '#9C27FF' },
      { value: '+45%', label: 'Repeat Purchases', color: '#0088FF' },
      { value: '100%', label: 'Secure Transactions', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '💳', title: 'Payment Integration', desc: 'Secure in-chat payments', href: '/platform/payment-integration' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Collection launch broadcasts', href: '/platform/bulk-campaigns' },
      { icon: '📅', title: 'Appointment Booking', desc: 'Private viewing bookings', href: '/platform/appointment-booking' },
    ],
  },

  'events': {
    slug: 'events', category: 'solutions', title: 'Event Management',
    overline: 'Industry Solution', heroTitle: 'Event', heroHighlight: 'Management Suite',
    gradient: ['#E040FB', '#9C27FF'],
    heroDesc: 'End-to-end event automation — registration, QR ticketing, schedule updates, attendee engagement, and post-event feedback collection.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🎫', title: 'QR Ticketing', desc: 'Generate unique QR tickets delivered via WhatsApp. Real-time scanning at entry gates.', iconBg: 'rgba(224,64,251,0.1)', iconColor: '#E040FB' },
      { icon: '📋', title: 'Registration Bot', desc: 'WhatsApp-based event registration collecting name, contact, ticket type, and dietary preferences.', iconBg: 'rgba(224,64,251,0.1)', iconColor: '#E040FB' },
      { icon: '📅', title: 'Schedule Updates', desc: 'Send session schedules, speaker changes, and venue updates to all attendees instantly.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '⭐', title: 'Post-Event Feedback', desc: 'Automated feedback forms sent via WhatsApp after the event with rating scales and comments.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    steps: [
      { number: '01', title: 'Create Event', desc: 'Set up event details, ticket categories, pricing, and capacity limits.' },
      { number: '02', title: 'Open Registration', desc: 'Share registration link or enable WhatsApp registration bot.' },
      { number: '03', title: 'Manage Event', desc: 'Send updates, scan tickets at entry, and track attendance in real-time.' },
      { number: '04', title: 'Collect Feedback', desc: 'Auto-send feedback forms and analyze attendee satisfaction scores.' },
    ],
    benefits: [
      { value: '99.8%', label: 'Scanner Accuracy', color: '#E040FB' },
      { value: '100%', label: 'Contactless Entry', color: '#25D366' },
      { value: '4.6★', label: 'Attendee Satisfaction', color: '#9C27FF' },
      { value: '-80%', label: 'Admin Work', color: '#0088FF' },
    ],
    relatedLinks: [
      { icon: '🎫', title: 'QR Ticketing', desc: 'Dynamic ticket system', href: '/platform/qr-ticketing' },
      { icon: '💳', title: 'Payment Integration', desc: 'Ticket sales', href: '/platform/payment-integration' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Event promotions', href: '/platform/bulk-campaigns' },
    ],
  },

  // ═══ 4 NEW USE CASES ═══

  'automotive': {
    slug: 'automotive', category: 'solutions', title: 'Automotive',
    overline: 'Industry Solution', heroTitle: 'Automotive', heroHighlight: 'Dealership Automation',
    gradient: ['#0088FF', '#0055CC'],
    heroDesc: 'Automate test drive bookings, service reminders, insurance renewals, and dealership follow-ups. Turn every enquiry into a showroom visit.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🚗', title: 'Test Drive Booking', desc: 'Customers book test drives via WhatsApp with model selection, preferred date, and location.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🔧', title: 'Service Reminders', desc: 'Automated service interval reminders based on purchase date and mileage estimates.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📋', title: 'Insurance Alerts', desc: 'Renewal reminders for insurance, PUC, and registration sent before expiry dates.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📊', title: 'Sales Pipeline', desc: 'Track every enquiry through test drive → negotiation → booking → delivery pipeline.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    demo: `
      <div class="dash-whatsapp"><div class="dash-chat-main" style="width:100%;"><div class="dash-chat-header"><div class="dash-avatar" style="background:#0088FF;width:28px;height:28px;font-size:0.65rem;">🚗</div><div><div style="font-size:0.78rem;font-weight:600;">AutoZone Motors</div><div style="font-size:0.65rem;color:var(--color-green);">Verified ✅</div></div></div>
      <div class="dash-chat-body"><div class="chat-bubble chat-bubble-incoming">Hi, I want to test drive the new Nexon EV</div><div class="chat-bubble chat-bubble-outgoing">Welcome to AutoZone! 🚗 Great choice — the Nexon EV is our bestseller!<br><br>Available test drive slots:<br>📅 Tomorrow — 10 AM, 2 PM, 5 PM<br>📅 Saturday — 11 AM, 3 PM<br><br>Which works best?</div><div class="chat-bubble chat-bubble-incoming">Saturday 11 AM</div><div class="chat-bubble chat-bubble-outgoing">✅ Test drive booked!<br>🚗 Nexon EV — Dark Edition<br>📅 Saturday, 11:00 AM<br>📍 AutoZone, MG Road Showroom<br>👤 Advisor: Karthik<br><br>Bring your driving license. See you there! 🏁</div></div></div></div>
    `,
    steps: [
      { number: '01', title: 'List Models', desc: 'Add vehicle models, variants, pricing, and feature highlights.' },
      { number: '02', title: 'Enable Bookings', desc: 'WhatsApp bot for test drive booking with model selection and time slots.' },
      { number: '03', title: 'Automate Service', desc: 'Set up service reminders, insurance alerts, and after-sales follow-ups.' },
      { number: '04', title: 'Track Pipeline', desc: 'Monitor enquiry-to-delivery pipeline and sales advisor performance.' },
    ],
    benefits: [
      { value: '+120%', label: 'Test Drive Bookings', color: '#0088FF' },
      { value: '85%', label: 'Service Retention', color: '#25D366' },
      { value: '3x', label: 'Faster Lead Response', color: '#9C27FF' },
      { value: '-45%', label: 'Enquiry Drop-Off', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '📅', title: 'Appointment Booking', desc: 'Test drive scheduling', href: '/platform/appointment-booking' },
      { icon: '📊', title: 'CRM Pipeline', desc: 'Sales tracking', href: '/platform/crm' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Customer communication', href: '/platform/whatsapp-api' },
    ],
  },

  'travel': {
    slug: 'travel', category: 'solutions', title: 'Travel & Tourism',
    overline: 'Industry Solution', heroTitle: 'Travel &', heroHighlight: 'Tourism Automation',
    gradient: ['#36C5F0', '#0088FF'],
    heroDesc: 'Share itineraries, send booking confirmations, automate payment reminders, and deliver real-time travel updates — all through WhatsApp.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '✈️', title: 'Itinerary Sharing', desc: 'Send detailed trip itineraries with day-wise plans, hotel details, and activity schedules via WhatsApp.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '📋', title: 'Booking Confirmations', desc: 'Automated booking confirmations with travel dates, accommodation details, and PNR numbers.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '💳', title: 'Payment Reminders', desc: 'Installment reminders for group tours and advance payment collection via in-chat links.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🔔', title: 'Travel Updates', desc: 'Real-time flight delays, hotel check-in info, and pickup details sent automatically.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
    ],
    demo: `
      <div class="dash-whatsapp"><div class="dash-chat-main" style="width:100%;"><div class="dash-chat-header"><div class="dash-avatar" style="background:#36C5F0;width:28px;height:28px;font-size:0.65rem;">✈</div><div><div style="font-size:0.78rem;font-weight:600;">WanderLux Travel</div><div style="font-size:0.65rem;color:var(--color-green);">Verified ✅</div></div></div>
      <div class="dash-chat-body"><div class="chat-bubble chat-bubble-outgoing">🌍 Your Bali trip is confirmed!<br><br>✈️ <strong>Flight:</strong> AI-142, Aug 15, 6:00 AM<br>🏨 <strong>Hotel:</strong> The Legian, Seminyak<br>🗓️ <strong>Duration:</strong> 5 Nights / 6 Days<br><br>📋 Full itinerary → botzo.io/trip/bali-2026<br><br>Balance due: ₹45,000 by Aug 1<br>💳 Pay now → botzo.io/pay/wl-8192</div><div class="chat-bubble chat-bubble-incoming">Amazing! Just made the payment 🙌</div></div></div></div>
    `,
    steps: [
      { number: '01', title: 'Create Packages', desc: 'Add tour packages with itineraries, pricing, inclusions, and booking terms.' },
      { number: '02', title: 'Enable Enquiry Bot', desc: 'WhatsApp bot to answer destination queries and collect booking details.' },
      { number: '03', title: 'Automate Journey', desc: 'Booking confirmations, payment reminders, and real-time travel updates.' },
      { number: '04', title: 'Collect Feedback', desc: 'Post-trip feedback and photo sharing to build testimonials and referrals.' },
    ],
    benefits: [
      { value: '+65%', label: 'Booking Conversions', color: '#36C5F0' },
      { value: '92%', label: 'On-Time Payments', color: '#25D366' },
      { value: '4.8★', label: 'Traveler Rating', color: '#9C27FF' },
      { value: '3x', label: 'Referral Bookings', color: '#0088FF' },
    ],
    relatedLinks: [
      { icon: '💳', title: 'Payment Integration', desc: 'Trip payment collection', href: '/platform/payment-integration' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Tour package promotions', href: '/platform/bulk-campaigns' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Traveler communication', href: '/platform/whatsapp-api' },
    ],
  },

  'fitness': {
    slug: 'fitness', category: 'solutions', title: 'Fitness & Wellness',
    overline: 'Industry Solution', heroTitle: 'Fitness &', heroHighlight: 'Wellness Automation',
    gradient: ['#00E676', '#00C853'],
    heroDesc: 'Automate class scheduling, membership renewals, trainer notifications, and client engagement for gyms, yoga studios, and wellness centers.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🏋️', title: 'Class Scheduling', desc: 'Members book workout sessions, yoga classes, or PT slots via WhatsApp with real-time availability.', iconBg: 'rgba(0,230,118,0.1)', iconColor: '#00E676' },
      { icon: '🔔', title: 'Membership Renewal', desc: 'Automated renewal reminders sent 7 days, 3 days, and 1 day before expiry with payment links.', iconBg: 'rgba(0,230,118,0.1)', iconColor: '#00E676' },
      { icon: '👤', title: 'Trainer Notifications', desc: 'Trainers receive daily schedules, new client assignments, and session reminders automatically.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📊', title: 'Progress Tracking', desc: 'Share workout plans, diet charts, and monthly progress reports with members via WhatsApp.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    demo: `
      <div class="dash-whatsapp"><div class="dash-chat-main" style="width:100%;"><div class="dash-chat-header"><div class="dash-avatar" style="background:#00E676;width:28px;height:28px;font-size:0.65rem;">💪</div><div><div style="font-size:0.78rem;font-weight:600;">FitZone Gym</div><div style="font-size:0.65rem;color:var(--color-green);">Active</div></div></div>
      <div class="dash-chat-body"><div class="chat-bubble chat-bubble-outgoing">Hey Arjun! 💪 Your membership expires in 3 days.<br><br>Renew now to keep your streak going!<br><br>🏋️ <strong>Quarterly Plan</strong> — ₹4,999<br>🏋️ <strong>Annual Plan</strong> — ₹14,999 (Save ₹5k!)<br><br>💳 Renew → botzo.io/renew/fz-4521</div><div class="chat-bubble chat-bubble-incoming">Annual plan, just paid!</div><div class="chat-bubble chat-bubble-outgoing">✅ Renewed! Your new expiry: June 2027<br><br>Tomorrow's schedule:<br>🧘 Yoga — 7:00 AM (Trainer: Neha)<br>🏋️ Weight Training — 5:30 PM (Trainer: Raj)<br><br>See you at the gym! 💪</div></div></div></div>
    `,
    steps: [
      { number: '01', title: 'Setup Center', desc: 'Configure classes, trainers, time slots, and membership plans.' },
      { number: '02', title: 'Import Members', desc: 'Bulk import member data with contact, plan type, and expiry dates.' },
      { number: '03', title: 'Automate Everything', desc: 'Class bookings, renewal reminders, trainer schedules, and progress reports.' },
      { number: '04', title: 'Grow & Retain', desc: 'Track retention rates, engagement metrics, and member lifetime value.' },
    ],
    benefits: [
      { value: '+40%', label: 'Renewal Rate', color: '#00E676' },
      { value: '-70%', label: 'No-Show Classes', color: '#0088FF' },
      { value: '24/7', label: 'Booking Available', color: '#9C27FF' },
      { value: '3x', label: 'Member Engagement', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '📅', title: 'Appointment Booking', desc: 'Class scheduling', href: '/platform/appointment-booking' },
      { icon: '💳', title: 'Payment Integration', desc: 'Membership payments', href: '/platform/payment-integration' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Member communication', href: '/platform/whatsapp-api' },
    ],
  },

  'finance': {
    slug: 'finance', category: 'solutions', title: 'Banking & Finance',
    overline: 'Industry Solution', heroTitle: 'Banking &', heroHighlight: 'Finance Automation',
    gradient: ['#0055CC', '#003399'],
    heroDesc: 'Secure account alerts, loan application tracking, EMI reminders, document collection, and customer support automation for financial institutions.',
    heroVisualHTML: `
      <div class="hero-ecosystem marketing-ecosystem">
        <div class="ecosystem-card chart-board glass-card-strong float-slow">
          <div class="kanban-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom: 15px;">Campaign ROI</div>
          <div class="chart-bars" style="display:flex; align-items:flex-end; gap:12px; height:100px;">
            <div style="width:24px; height:40%; background:rgba(156,39,255,0.3); border-radius:4px;"></div>
            <div style="width:24px; height:60%; background:rgba(156,39,255,0.5); border-radius:4px;"></div>
            <div style="width:24px; height:85%; background:rgba(156,39,255,0.8); border-radius:4px;"></div>
            <div style="width:24px; height:100%; background:#9C27FF; border-radius:4px; box-shadow:0 0 12px rgba(156,39,255,0.6);"></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: 10px;">
          <div class="analytics-title">Conversion Rate</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #B84DFF, #FF6B35); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">24.5%</div>
          <div class="analytics-trend" style="color: #25D366;">↑ 5.2% lift</div>
        </div>
      </div>
`,
    features: [
      { icon: '🔔', title: 'Account Alerts', desc: 'Transaction notifications, balance alerts, and suspicious activity warnings sent securely via WhatsApp.', iconBg: 'rgba(0,85,204,0.1)', iconColor: '#0055CC' },
      { icon: '📋', title: 'Loan Tracking', desc: 'Customers check loan application status, upload documents, and receive approval updates in chat.', iconBg: 'rgba(0,85,204,0.1)', iconColor: '#0055CC' },
      { icon: '💰', title: 'EMI Reminders', desc: 'Automated EMI due date reminders with payment links. Reduce late payments significantly.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📄', title: 'Document Collection', desc: 'Securely collect KYC documents, income proof, and signatures via WhatsApp for paperless processing.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    demo: `
      <div class="dash-whatsapp"><div class="dash-chat-main" style="width:100%;"><div class="dash-chat-header"><div class="dash-avatar" style="background:#0055CC;width:28px;height:28px;font-size:0.65rem;">🏦</div><div><div style="font-size:0.78rem;font-weight:600;">TrustBank</div><div style="font-size:0.65rem;color:var(--color-green);">Verified ✅</div></div></div>
      <div class="dash-chat-body"><div class="chat-bubble chat-bubble-outgoing">🏦 TrustBank Alert<br><br>Your Home Loan application (HL-98273) has been <strong style="color:#25D366;">APPROVED</strong>! 🎉<br><br>💰 Loan Amount: ₹45,00,000<br>📊 Interest Rate: 8.5% p.a.<br>📅 Tenure: 20 years<br>💳 EMI: ₹38,970/month<br><br>Next steps:<br>1️⃣ Sign agreement (link below)<br>2️⃣ Upload property documents<br><br>📄 Sign → botzo.io/sign/hl-98273</div><div class="chat-bubble chat-bubble-incoming">This is amazing news! Signing now</div></div></div></div>
    `,
    steps: [
      { number: '01', title: 'Setup Products', desc: 'Configure loan types, account categories, and communication templates.' },
      { number: '02', title: 'Connect Systems', desc: 'Integrate with your core banking system via secure APIs.' },
      { number: '03', title: 'Deploy Alerts', desc: 'Enable transaction alerts, EMI reminders, and application status updates.' },
      { number: '04', title: 'Reduce Costs', desc: 'Automate support queries and document collection. Reduce call center load.' },
    ],
    benefits: [
      { value: '-45%', label: 'Late Payments', color: '#0055CC' },
      { value: '80%', label: 'Digital Document Collection', color: '#25D366' },
      { value: '-60%', label: 'Support Call Volume', color: '#0088FF' },
      { value: '99.9%', label: 'Delivery Reliability', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '💳', title: 'Payment Integration', desc: 'Secure payment collection', href: '/platform/payment-integration' },
      { icon: '🔒', title: 'WhatsApp API', desc: 'Secure messaging', href: '/platform/whatsapp-api' },
      { icon: '⚡', title: 'Workflow Automation', desc: 'Approval workflows', href: '/platform/workflow-automation' },
    ],
  },
};
