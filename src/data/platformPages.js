/* ═══════════════════════════════════════════════════
   PLATFORM DETAIL PAGES DATA
   11 platform features — 7 flagship (deep) + 4 secondary
   ═══════════════════════════════════════════════════ */

export const PLATFORM_PAGES = {
  'whatsapp-api': {
    slug: 'whatsapp-api',
    category: 'platform',
    title: 'WhatsApp API',
    seo: {
      title: 'WhatsApp Business API Provider & Platform | Botzo.io',
      description: 'Scale communication with the official Meta WhatsApp Business API. Automate replies, launch bulk campaigns, and integrate WhatsApp CRM seamlessly.',
      keywords: 'WhatsApp API, Official WhatsApp Business API, Meta WhatsApp API, WhatsApp Business Platform, WhatsApp API Provider, WhatsApp API India, WhatsApp API Company, WhatsApp Marketing Platform, WhatsApp CRM, WhatsApp Automation, WhatsApp Broadcast Software, WhatsApp Campaign Software, WhatsApp Business Automation',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Communication Channel',
    heroTitle: 'WhatsApp Business',
    heroHighlight: 'API Integration',
    gradient: ['#25D366', '#128C7E'],
    heroDesc: 'Connect with 2+ billion WhatsApp users through the official Business API. Send templates, automate responses, manage multi-agent support, and drive conversions — all from one verified business number.',
    heroVisualHTML: `
      <div class="hero-ecosystem whatsapp-ecosystem">
        <div class="ecosystem-card inbox-card glass-card-strong float-slow">
          <div class="dash-sidebar-header"><span style="font-weight:600;font-size:0.75rem;">Team Inbox</span><span class="status-badge status-badge-active">5 New</span></div>
          <div class="dash-contact active"><div class="dash-avatar" style="background:#25D366;">V</div><div class="dash-contact-info"><div class="dash-contact-name">Vikram Enterprises</div><div class="dash-contact-msg">Thanks! When can we start?</div></div><div class="dash-contact-time">1m</div></div>
          <div class="dash-contact"><div class="dash-avatar" style="background:#0088FF;">D</div><div class="dash-contact-info"><div class="dash-contact-name">Deepak Auto</div><div class="dash-contact-msg">Proposal received.</div></div><div class="dash-contact-time">15m</div></div>
        </div>
        <div class="ecosystem-card analytics-card glass-card float-medium" style="position: absolute; right: -40px; top: 30px;">
          <div class="analytics-title">Response Time</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #25D366, #128C7E); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">&lt; 2 mins</div>
          <div class="analytics-trend">↑ 45% faster</div>
        </div>
        <div class="ecosystem-card chat-bubble-card glass-card float-fast" style="position: absolute; left: -30px; bottom: 20px;">
          <div class="chat-bubble chat-bubble-outgoing" style="margin:0; box-shadow:none;">Hi Vikram! 👋 Onboarding takes 48 hours.</div>
        </div>
      </div>
`,
    featuresOverline: 'Core Capabilities',
    featuresTitle: 'Enterprise-Grade <span class="text-gradient">WhatsApp Infrastructure</span>',
    features: [
      { icon: '🔘', title: 'Interactive CTA Buttons', desc: 'Add quick reply and call-to-action buttons directly in your messages to drive instant customer engagement and actions.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📝', title: 'Template Messaging', desc: 'Pre-approved message templates for order updates, appointment reminders, shipping alerts, and promotional broadcasts.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🤖', title: 'AI-Powered Chatbot', desc: 'Deploy trained AI agents that understand context, handle FAQs, qualify leads, and escalate to human agents when needed.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '👥', title: 'Multi-Agent Support', desc: 'Multiple team members can handle conversations simultaneously on one business number with role-based access control.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📊', title: 'Analytics Dashboard', desc: 'Track message delivery, read rates, response times, agent performance, and customer satisfaction in real-time.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🔗', title: 'Webhook Integration', desc: 'Connect with your CRM, ERP, or custom systems via webhooks. Trigger automated workflows from external events.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    demoOverline: 'Interactive Preview',
    demoTitle: 'Live WhatsApp <span class="text-gradient">Inbox Experience</span>',
    demoDesc: 'See how your team manages hundreds of conversations with intelligent routing, canned responses, and real-time collaboration.',
    demo: `
      <div class="dash-whatsapp">
        <div class="dash-sidebar">
          <div class="dash-sidebar-header"><span style="font-weight:600;font-size:0.8rem;">Conversations</span><span class="status-badge status-badge-active">247</span></div>
          <div class="dash-contact active"><div class="dash-avatar" style="background:#25D366;">V</div><div class="dash-contact-info"><div class="dash-contact-name">Vikram Enterprises</div><div class="dash-contact-msg">Thanks! When can we start?</div></div><div class="dash-contact-time">1m</div></div>
          <div class="dash-contact"><div class="dash-avatar" style="background:#9C27FF;">S</div><div class="dash-contact-info"><div class="dash-contact-name">Sunita Pharma</div><div class="dash-contact-msg">Can we schedule a demo?</div></div><div class="dash-contact-time">4m</div></div>
          <div class="dash-contact"><div class="dash-avatar" style="background:#0088FF;">D</div><div class="dash-contact-info"><div class="dash-contact-name">Deepak Auto</div><div class="dash-contact-msg">Proposal received, reviewing now</div></div><div class="dash-contact-time">15m</div></div>
        </div>
        <div class="dash-chat-main">
          <div class="dash-chat-header"><div class="dash-avatar" style="background:#25D366;width:28px;height:28px;font-size:0.65rem;">V</div><div><div style="font-size:0.78rem;font-weight:600;">Vikram Enterprises</div><div style="font-size:0.65rem;color:var(--color-green);">Online</div></div></div>
          <div class="dash-chat-body">
            <div class="chat-bubble chat-bubble-incoming">We need WhatsApp automation for our 50-store chain. What's the setup timeline?</div>
            <div class="chat-bubble chat-bubble-outgoing">Hi Vikram! 👋 For multi-location setup, we typically onboard within 48 hours. Each store gets its own agent routing.</div>
            <div class="chat-bubble chat-bubble-incoming">Thanks! When can we start?</div>
          </div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Connect Number', desc: 'Link your business phone number to the official WhatsApp Business API via Botzo.' },
      { number: '02', title: 'Setup Templates', desc: 'Create and get your message templates approved for notifications, updates, and promotions.' },
      { number: '03', title: 'Train AI Bot', desc: 'Upload your knowledge base and let Botzo\'s AI learn your products, policies, and workflows.' },
      { number: '04', title: 'Go Live', desc: 'Start receiving and automating customer conversations instantly with real-time analytics.' },
    ],
    benefits: [
      { value: '98.5%', label: 'Message Delivery Rate', color: '#25D366' },
      { value: '3x', label: 'Faster Response Time', color: '#0088FF' },
      { value: '60%', label: 'Cost Reduction', color: '#9C27FF' },
      { value: '45%', label: 'Higher Conversions', color: '#FF6B35' },
    ],
    faq: [
      { q: 'Do I need a new phone number for the WhatsApp API?', a: 'No, you can use your existing business number. We help you migrate it to the official API without losing your existing conversations.' },
      { q: 'How long does API approval take?', a: 'Typically 24-48 hours. Standard API access is granted almost instantly, while custom message templates and registration are approved by Meta within 1-2 business days.' },
      { q: 'Can I send promotional messages?', a: 'Yes! With approved marketing templates, you can send promotional broadcasts to opted-in contacts. We handle template submission and approval for you.' },
      { q: 'Is there a message limit?', a: 'Limits scale with your account tier. New accounts start at 1,000 messages/day and scale up to unlimited as your quality rating improves.' },
    ],
    testimonials: [
      { name: 'Rajesh Kapoor', role: 'CEO, FreshMart Groceries', quote: 'Botzo\'s WhatsApp API integration tripled our daily order volume. Customers love ordering through chat — it feels personal and instant.', color: '#25D366' },
      { name: 'Meera Shah', role: 'Operations Head, LuxeStay Hotels', quote: 'Our booking confirmations and check-in reminders via WhatsApp reduced no-shows by 67%. The ROI was visible within the first month.', color: '#9C27FF' },
    ],
    integrations: [
      { icon: '🛒', name: 'Shopify' }, { icon: '📊', name: 'HubSpot' }, { icon: '💼', name: 'Salesforce' },
      { icon: '📋', name: 'Google Sheets' }, { icon: '🔄', name: 'Zapier' }, { icon: '💳', name: 'Razorpay' },
      { icon: '📦', name: 'WooCommerce' }, { icon: '🎯', name: 'Meta Ads' },
    ],
    relatedLinks: [
      { icon: '📥', title: 'Team Inbox', desc: 'Manage all WhatsApp chats in one place', href: '/platform/team-inbox' },
      { icon: '⚡', title: 'Workflow Automation', desc: 'Automate message flows and routing', href: '/platform/workflow-automation' },
      { icon: '🛍️', title: 'Ecommerce Solutions', desc: 'WhatsApp commerce for online stores', href: '/solutions/ecommerce' },
      { icon: '🏥', title: 'Healthcare', desc: 'Patient communication automation', href: '/solutions/healthcare' },
    ],
  },

  'instagram-automation': {
    slug: 'instagram-automation', category: 'platform', title: 'Instagram Automation',
    seo: {
      title: 'Instagram Automation & DM Chatbots | Botzo.io',
      description: 'Automate your Instagram DMs and comment replies with AI. Turn every follower interaction into a qualified lead automatically.',
      keywords: 'Instagram Automation, Instagram DM Automation, Instagram Chatbot, Instagram Comment Automation, Instagram Lead Automation, Instagram AI, Instagram Business Automation',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Social Commerce', heroTitle: 'Instagram', heroHighlight: 'DM & Comment Automation',
    gradient: ['#E4405F', '#F56040'],
    heroDesc: 'Automatically respond to Instagram DMs, story mentions, and post comments. Convert every interaction into a qualified lead with zero manual effort.',
    heroVisualHTML: `
      <div class="hero-ecosystem automation-ecosystem">
        <div class="ecosystem-card workflow-board glass-card-strong float-slow">
          <div class="wf-node wf-trigger">Incoming Message</div><div class="wf-line"></div><div class="wf-node wf-condition">Is VIP?</div>
          <div class="wf-split"><div class="wf-branch"><div class="wf-line-curved-left"></div><div class="wf-node wf-action">Route to Agent</div></div>
          <div class="wf-branch"><div class="wf-line-curved-right"></div><div class="wf-node wf-action">AI Auto-Reply</div></div></div>
        </div>
      </div>
`,
    features: [
      { icon: '💬', title: 'Auto DM Replies', desc: 'Instantly respond to Direct Messages with personalized templates, product links, or AI-generated answers.', iconBg: 'rgba(228,64,95,0.1)', iconColor: '#E4405F' },
      { icon: '💭', title: 'Comment Automation', desc: 'Trigger auto-replies when users comment specific keywords on your posts. Send them product links via DM.', iconBg: 'rgba(228,64,95,0.1)', iconColor: '#E4405F' },
      { icon: '📖', title: 'Story Mention Alerts', desc: 'Get notified when users mention your brand in stories and auto-send thank you messages or offers.', iconBg: 'rgba(245,96,64,0.1)', iconColor: '#F56040' },
      { icon: '🎯', title: 'Lead Capture', desc: 'Automatically collect contact info, preferences, and purchase intent from every Instagram conversation.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Connect Account', desc: 'Link your Instagram Business or Creator account to Botzo via Facebook Business Manager.' },
      { number: '02', title: 'Set Triggers', desc: 'Define keyword triggers for post comments, story mentions, and DM conversations.' },
      { number: '03', title: 'Create Flows', desc: 'Build automated response sequences with product catalogs, booking links, and lead forms.' },
      { number: '04', title: 'Convert Leads', desc: 'Every interaction feeds into your CRM pipeline for follow-up and conversion tracking.' },
    ],
    benefits: [
      { value: '5x', label: 'DM Response Speed', color: '#E4405F' },
      { value: '340%', label: 'Lead Generation Boost', color: '#F56040' },
      { value: '24/7', label: 'Always-On Engagement', color: '#9C27FF' },
      { value: '89%', label: 'Message Open Rate', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '📘', title: 'Facebook Automation', desc: 'Extend to Messenger & FB comments', href: '/platform/facebook-automation' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Broadcast to engaged followers', href: '/platform/bulk-campaigns' },
      { icon: '👥', title: 'Social Media Marketing', desc: 'Full social strategy services', href: '/services/social-media-marketing' },
    ],
  },

  'facebook-automation': {
    slug: 'facebook-automation', category: 'platform', title: 'Facebook Automation',
    seo: {
      title: 'Facebook Messenger Automation & Lead Gen | Botzo.io',
      description: 'Automate Facebook Messenger conversations and ad lead generation. Deploy AI chatbots to convert social traffic instantly.',
      keywords: 'Facebook Automation, Facebook Messenger Automation, Facebook Chatbot, Facebook Lead Automation, Messenger Bot, FB Messenger Automation',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Social Commerce', heroTitle: 'Facebook', heroHighlight: 'Messenger & Lead Gen',
    gradient: ['#1877F2', '#0A5DC2'],
    heroDesc: 'Automate Messenger conversations, Facebook comment replies, and lead generation ads. Convert social engagement into real business opportunities.',
    heroVisualHTML: `
      <div class="hero-ecosystem automation-ecosystem">
        <div class="ecosystem-card workflow-board glass-card-strong float-slow">
          <div class="wf-node wf-trigger">Incoming Message</div><div class="wf-line"></div><div class="wf-node wf-condition">Is VIP?</div>
          <div class="wf-split"><div class="wf-branch"><div class="wf-line-curved-left"></div><div class="wf-node wf-action">Route to Agent</div></div>
          <div class="wf-branch"><div class="wf-line-curved-right"></div><div class="wf-node wf-action">AI Auto-Reply</div></div></div>
        </div>
      </div>
`,
    features: [
      { icon: '💬', title: 'Messenger Chatbot', desc: 'Deploy AI-powered chatbots on Facebook Messenger that qualify leads, answer FAQs, and book appointments.', iconBg: 'rgba(24,119,242,0.1)', iconColor: '#1877F2' },
      { icon: '💭', title: 'Comment Auto-Reply', desc: 'Automatically respond to post and ad comments with personalized messages, offers, or product links.', iconBg: 'rgba(24,119,242,0.1)', iconColor: '#1877F2' },
      { icon: '📋', title: 'Lead Ads Integration', desc: 'Capture leads from Facebook Lead Ads and instantly route them to WhatsApp or your CRM for follow-up.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🎯', title: 'Audience Targeting', desc: 'Build custom audiences from chat interactions and retarget engaged users with precision campaigns.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Connect Page', desc: 'Link your Facebook Business Page and grant messaging permissions.' },
      { number: '02', title: 'Build Bot', desc: 'Create Messenger conversation flows with Botzo\'s visual builder.' },
      { number: '03', title: 'Set Ad Triggers', desc: 'Connect your Lead Ads and configure automatic follow-up sequences.' },
      { number: '04', title: 'Scale Results', desc: 'Monitor performance and optimize for maximum lead conversion.' },
    ],
    benefits: [
      { value: '78%', label: 'Higher Engagement', color: '#1877F2' },
      { value: '4.2x', label: 'Lead Gen ROAS', color: '#0088FF' },
      { value: '<2s', label: 'Average Response', color: '#25D366' },
      { value: '55%', label: 'Cost per Lead Reduction', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '📸', title: 'Instagram Automation', desc: 'Extend to Instagram DMs & comments', href: '/platform/instagram-automation' },
      { icon: '🎯', title: 'Performance Marketing', desc: 'Maximize ad campaign ROI', href: '/services/performance-marketing' },
      { icon: '📊', title: 'Centralized CRM', desc: 'Unified lead management', href: '/platform/crm' },
    ],
  },

  'rcs-messaging': {
    slug: 'rcs-messaging', category: 'platform', title: 'RCS Messaging',
    seo: {
      title: 'RCS Business Messaging Services | Botzo.io',
      description: 'Upgrade your SMS campaigns with Google RCS messaging. Send rich media, interactive buttons, and verified brand messaging directly to Android users.',
      keywords: 'RCS Messaging, Google RCS, Business Messaging, Rich Communication Services, RCS Business Messaging, RCS API',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Next-Gen SMS', heroTitle: 'RCS Rich', heroHighlight: 'Communication Services',
    gradient: ['#36C5F0', '#0088FF'],
    heroDesc: 'Upgrade plain SMS to rich, branded messaging experiences. Send carousels, interactive buttons, calendar bookings, and verified sender profiles directly in Android messaging apps.',
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
      { icon: '🎨', title: 'Rich Media Cards', desc: 'Send product carousels, image galleries, and promotional banners directly in the native messaging app.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '🔘', title: 'Interactive Buttons', desc: 'Add quick action buttons for booking, purchasing, or contacting support without leaving the conversation.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '✅', title: 'Verified Sender', desc: 'Display your brand logo, name, and verification badge so customers know it\'s really you.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📅', title: 'Calendar Integration', desc: 'Let users book appointments directly from suggestion chips in the message thread.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    steps: [
      { number: '01', title: 'Register Brand', desc: 'Verify your business identity with Google\'s RCS Business Messaging.' },
      { number: '02', title: 'Design Cards', desc: 'Create rich media templates, carousels, and interactive suggestion chips.' },
      { number: '03', title: 'Target Audience', desc: 'Segment contacts and launch campaigns to Android users in India.' },
      { number: '04', title: 'Track Results', desc: 'Monitor delivery, open rates, and button clicks with real-time analytics.' },
    ],
    benefits: [
      { value: '3.5x', label: 'vs SMS Open Rate', color: '#36C5F0' },
      { value: '40%', label: 'Click-Through Rate', color: '#0088FF' },
      { value: '85%', label: 'Android Reach in India', color: '#25D366' },
      { value: '2x', label: 'Conversion vs SMS', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '💬', title: 'WhatsApp API', desc: 'Complement with WhatsApp messaging', href: '/platform/whatsapp-api' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'Send RCS broadcasts at scale', href: '/platform/bulk-campaigns' },
    ],
  },

  'team-inbox': {
    slug: 'team-inbox', category: 'platform', title: 'Team Inbox',
    seo: {
      title: 'Unified Team Inbox for Customer Support | Botzo.io',
      description: 'Manage WhatsApp, Instagram, and Facebook messages in one centralized omnichannel inbox. Empower your support team with collaboration tools.',
      keywords: 'Shared Inbox, Team Inbox, Omnichannel Inbox, Customer Support Inbox, Multi Agent WhatsApp, WhatsApp Shared Inbox, Unified Inbox',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Collaboration Hub', heroTitle: 'Unified Team', heroHighlight: 'Inbox',
    gradient: ['#9C27FF', '#7B1FA2'],
    heroDesc: 'One inbox for every channel. WhatsApp, Instagram, Facebook, RCS, email — all conversations in a single unified view with agent assignment, internal notes, and real-time collaboration.',
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
      { icon: '📥', title: 'Unified Feed', desc: 'See every customer message from every channel in one chronological feed. No more switching between apps.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '👤', title: 'Agent Assignment', desc: 'Auto-assign conversations based on skills, availability, or round-robin. Manual reassignment with one click.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📝', title: 'Internal Notes', desc: 'Leave private notes on conversations visible only to team members. Perfect for context handoffs between agents.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '⚡', title: 'Canned Responses', desc: 'Save frequently used replies and insert them instantly with keyboard shortcuts. Supports rich formatting.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🏷️', title: 'Tags & Labels', desc: 'Categorize conversations with custom tags for billing, sales, support, VIP, and more.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📊', title: 'Agent Analytics', desc: 'Track response times, resolution rates, customer satisfaction scores, and agent workload in real-time.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    demo: `
      <div class="dash-inbox">
        <div class="dash-inbox-toolbar">
          <div class="dash-inbox-filter active">All <span class="dash-inbox-badge">312</span></div>
          <div class="dash-inbox-filter">Unassigned <span class="dash-inbox-badge">18</span></div>
          <div class="dash-inbox-filter">My Chats <span class="dash-inbox-badge">9</span></div>
        </div>
        <div class="dash-inbox-list">
          <div class="dash-inbox-item priority-high">
            <div class="dash-avatar" style="background:var(--color-red);width:28px;height:28px;font-size:0.6rem;">A</div>
            <div class="dash-inbox-item-content">
              <div class="dash-inbox-item-top"><span class="dash-inbox-item-name">Ananya Reddy</span><span class="status-badge status-badge-pending">Urgent</span></div>
              <div class="dash-inbox-item-msg">Payment failed — needs refund processing</div>
              <div class="dash-inbox-item-meta"><span>👤 Priya</span><span>🏷️ Billing</span></div>
            </div>
          </div>
          <div class="dash-inbox-item">
            <div class="dash-avatar" style="background:#25D366;width:28px;height:28px;font-size:0.6rem;">V</div>
            <div class="dash-inbox-item-content">
              <div class="dash-inbox-item-top"><span class="dash-inbox-item-name">Vikram Enterprises</span><span class="status-badge status-badge-active">Active</span></div>
              <div class="dash-inbox-item-msg">Enterprise onboarding — ready to proceed</div>
              <div class="dash-inbox-item-meta"><span>👤 Raj</span><span>🏷️ Sales</span></div>
            </div>
          </div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Connect Channels', desc: 'Link WhatsApp, Instagram, Facebook, RCS, and email to your unified inbox.' },
      { number: '02', title: 'Add Team', desc: 'Invite agents, set roles and permissions, configure auto-assignment rules.' },
      { number: '03', title: 'Set SLAs', desc: 'Define response time targets, escalation rules, and priority levels.' },
      { number: '04', title: 'Collaborate', desc: 'Start managing all conversations with internal notes, tags, and real-time collaboration.' },
    ],
    benefits: [
      { value: '80%', label: 'Faster Resolution', color: '#9C27FF' },
      { value: '0', label: 'Missed Conversations', color: '#25D366' },
      { value: '4.8/5', label: 'Agent Satisfaction', color: '#0088FF' },
      { value: '3x', label: 'Agent Productivity', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '💬', title: 'WhatsApp API', desc: 'Primary messaging channel', href: '/platform/whatsapp-api' },
      { icon: '📊', title: 'Centralized CRM', desc: 'Unified customer profiles', href: '/platform/crm' },
      { icon: '⚡', title: 'Workflow Automation', desc: 'Auto-route conversations', href: '/platform/workflow-automation' },
    ],
  },

  'workflow-automation': {
    slug: 'workflow-automation', category: 'platform', title: 'Workflow Automation',
    seo: {
      title: 'No Code Workflow Automation Builder | Botzo.io',
      description: 'Build sophisticated business communication workflows visually. Drag-and-drop automation builder for intelligent conversational routing.',
      keywords: 'Workflow Automation Software, No Code Automation, Business Workflow, Automation Builder, Visual Workflow Builder, Chatbot Builder',
      schemaType: 'SoftwareApplication'
    },
    overline: 'No-Code Builder', heroTitle: 'Visual Workflow', heroHighlight: 'Automation Engine',
    gradient: ['#B84DFF', '#7B1FA2'],
    heroDesc: 'Build sophisticated automation flows with drag-and-drop — no coding required. Connect triggers, conditions, actions, and delays to create intelligent communication workflows.',
    heroVisualHTML: `
      <div class="hero-ecosystem automation-ecosystem">
        <div class="ecosystem-card workflow-board glass-card-strong float-slow">
          <div class="wf-node wf-trigger">Incoming Message</div><div class="wf-line"></div><div class="wf-node wf-condition">Is VIP?</div>
          <div class="wf-split"><div class="wf-branch"><div class="wf-line-curved-left"></div><div class="wf-node wf-action">Route to Agent</div></div>
          <div class="wf-branch"><div class="wf-line-curved-right"></div><div class="wf-node wf-action">AI Auto-Reply</div></div></div>
        </div>
      </div>
`,
    featuresOverline: 'Builder Capabilities',
    featuresTitle: 'Design Logic <span class="text-gradient">Without Code</span>',
    features: [
      { icon: '🔔', title: 'Smart Triggers', desc: 'Start flows from new messages, keywords, form submissions, webhooks, scheduled times, or CRM events.', iconBg: 'rgba(184,77,255,0.1)', iconColor: '#B84DFF' },
      { icon: '🔀', title: 'Conditional Branching', desc: 'Route conversations based on user replies, contact properties, time of day, or custom variables.', iconBg: 'rgba(184,77,255,0.1)', iconColor: '#B84DFF' },
      { icon: '🤖', title: 'AI Agent Nodes', desc: 'Insert trained AI agents anywhere in your flow to handle complex queries, qualify leads, or provide support.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '⏳', title: 'Smart Delays', desc: 'Add intelligent wait steps based on time, user activity, or business hours before sending follow-ups.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🔗', title: 'Webhook Actions', desc: 'Call external APIs, update CRM records, trigger Zapier workflows, or sync data with any third-party system.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📊', title: 'Flow Analytics', desc: 'Track every step of your workflow — see conversion rates, drop-off points, and optimization opportunities.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    demo: `
      <div class="dash-workflow">
        <div class="workflow-canvas">
          <div class="workflow-node workflow-node-trigger"><div class="workflow-node-icon">📩</div><div class="workflow-node-label">New Message</div><div class="workflow-node-type">Trigger</div></div>
          <div class="workflow-connector workflow-connector-animated"></div>
          <div class="workflow-node workflow-node-condition"><div class="workflow-node-icon">🤖</div><div class="workflow-node-label">Trained AI Bot</div><div class="workflow-node-type">AI Agent</div></div>
          <div class="workflow-connector workflow-connector-animated"></div>
          <div class="workflow-node workflow-node-condition" style="border-color:rgba(0,136,255,0.3);background:rgba(0,136,255,0.06);"><div class="workflow-node-icon">🔀</div><div class="workflow-node-label">Intent Check</div><div class="workflow-node-type">Condition</div></div>
          <div class="workflow-branch">
            <div class="workflow-branch-yes"><div class="workflow-connector-short workflow-connector-animated"></div><div class="workflow-node workflow-node-action" style="border-color:rgba(37,211,102,0.3);"><div class="workflow-node-icon">📅</div><div class="workflow-node-label">Book Meeting</div><div class="workflow-node-type">Action</div></div></div>
            <div class="workflow-branch-no"><div class="workflow-connector-short workflow-connector-animated"></div><div class="workflow-node workflow-node-action" style="border-color:rgba(0,136,255,0.3);"><div class="workflow-node-icon">💬</div><div class="workflow-node-label">Send Catalog</div><div class="workflow-node-type">Action</div></div></div>
          </div>
        </div>
      </div>
    `,
    demoOverline: 'Visual Builder',
    demoTitle: 'Drag & Drop <span class="text-gradient">Flow Editor</span>',
    demoDesc: 'Build complex automation logic visually. Connect triggers, AI agents, conditions, and actions into powerful workflows that run 24/7.',
    steps: [
      { number: '01', title: 'Choose Trigger', desc: 'Select what starts your flow — new message, keyword, webhook, schedule, or CRM event.' },
      { number: '02', title: 'Add Logic', desc: 'Insert conditions, AI agents, delays, and branching to create intelligent routing.' },
      { number: '03', title: 'Connect Actions', desc: 'Add reply messages, API calls, CRM updates, email notifications, and more.' },
      { number: '04', title: 'Test & Deploy', desc: 'Preview your flow in sandbox mode, then deploy to production with one click.' },
    ],
    benefits: [
      { value: '95%', label: 'Automation Rate', color: '#B84DFF' },
      { value: '24/7', label: 'Always Running', color: '#25D366' },
      { value: '0', label: 'Code Required', color: '#0088FF' },
      { value: '10min', label: 'Average Setup', color: '#FF6B35' },
    ],
    faq: [
      { q: 'Do I need coding skills to build workflows?', a: 'Absolutely not. Our visual drag-and-drop builder lets you create complex automation flows with zero coding. Just connect trigger → logic → action blocks.' },
      { q: 'Can I test workflows before deploying?', a: 'Yes! Every workflow has a sandbox mode where you can simulate triggers and verify the entire flow before going live.' },
      { q: 'How many workflows can I create?', a: 'It depends on your plan. Growth plan includes 25 active workflows, Enterprise includes unlimited.' },
    ],
    testimonials: [
      { name: 'Arun Nair', role: 'CTO, QuickServe Restaurants', quote: 'We automated our entire order confirmation, delivery tracking, and feedback collection in one workflow. What took 3 support agents now runs automatically.', color: '#B84DFF' },
    ],
    integrations: [
      { icon: '🔄', name: 'Zapier' }, { icon: '📋', name: 'Google Sheets' }, { icon: '📊', name: 'HubSpot' },
      { icon: '💼', name: 'Salesforce' }, { icon: '🛒', name: 'Shopify' }, { icon: '📧', name: 'Mailchimp' },
    ],
    relatedLinks: [
      { icon: '📥', title: 'Team Inbox', desc: 'Auto-route to the right agent', href: '/platform/team-inbox' },
      { icon: '📊', title: 'CRM', desc: 'Trigger flows from CRM events', href: '/platform/crm' },
      { icon: '🏠', title: 'Real Estate', desc: 'Property enquiry automation', href: '/solutions/real-estate' },
      { icon: '🛍️', title: 'Ecommerce', desc: 'Order & cart recovery flows', href: '/solutions/ecommerce' },
    ],
  },

  'crm': {
    slug: 'crm', category: 'platform', title: 'Centralized CRM',
    seo: {
      title: 'Sales CRM & Lead Management Software | Botzo.io',
      description: 'Track and manage every lead inside a powerful visual CRM. Seamlessly integrated with WhatsApp for automated follow-ups and pipeline tracking.',
      keywords: 'CRM Software, Sales CRM, WhatsApp CRM, Lead Management CRM, Customer Relationship Management, Pipeline Management, Business CRM',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Customer Management', heroTitle: 'Centralized', heroHighlight: 'CRM & Pipeline',
    gradient: ['#0088FF', '#0055CC'],
    heroDesc: 'Track every lead from first contact to conversion. Manage pipelines, automate follow-ups, segment contacts, and gain actionable insights — all integrated with your messaging channels.',
    heroVisualHTML: `
      <div class="hero-ecosystem crm-ecosystem">
        <div class="ecosystem-card kanban-board glass-card-strong float-slow">
          <div class="kanban-header">Lead Pipeline</div>
          <div class="kanban-columns">
            <div class="kanban-col"><div class="k-col-title">New Leads <span class="badge">12</span></div><div class="k-card"><div class="k-name">Acme Corp</div><div class="k-value">$4,500</div></div><div class="k-card"><div class="k-name">Global Tech</div><div class="k-value">$1,200</div></div></div>
            <div class="kanban-col"><div class="k-col-title">Qualified <span class="badge">4</span></div><div class="k-card"><div class="k-name">Stark Ind.</div><div class="k-value">$12,000</div></div></div>
          </div>
        </div>
        <div class="ecosystem-card kpi-card glass-card float-medium" style="position: absolute; right: -20px; top: -10px;">
          <div class="analytics-title">Pipeline Value</div>
          <div class="analytics-value text-gradient" style="background: linear-gradient(90deg, #0088FF, #00C6FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$45,200</div>
          <div class="analytics-trend">↑ 12% this week</div>
        </div>
      </div>
`,
    features: [
      { icon: '📋', title: 'Visual Pipeline', desc: 'Drag-and-drop Kanban boards to track leads through custom stages like New, Follow Up, Demo Scheduled, and Qualified.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '👤', title: 'Contact Profiles', desc: 'Unified customer profiles with conversation history, tags, notes, custom fields, and activity timeline.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🏷️', title: 'Smart Segmentation', desc: 'Segment contacts by behavior, tags, channel, purchase history, or any custom attribute for targeted campaigns.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '🔄', title: 'Auto Follow-Up', desc: 'Set automated follow-up sequences triggered by pipeline stage changes, time delays, or inactivity.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📊', title: 'Revenue Analytics', desc: 'Track deal values, win rates, pipeline velocity, and forecast revenue with visual dashboards.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📥', title: 'Import & Export', desc: 'Bulk import contacts from CSV, Google Sheets, or sync from external CRMs. Export anytime.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    demo: `
      <div class="dash-pipeline-board">
        <div class="pipeline-kanban">
          <div class="kanban-col"><div class="kanban-col-header" style="border-top-color:#25D366;"><span class="kanban-col-title">New</span><span class="kanban-col-count">87</span></div><div class="kanban-card"><div class="kanban-card-phone">Vikram Enterprises</div><div class="kanban-card-meta"><span>📅 Today</span><span>💬 WhatsApp</span></div><div class="kanban-card-note">Interested in Growth plan</div><div class="kanban-card-actions"><button class="kanban-btn kanban-btn-move">Move</button><button class="kanban-btn kanban-btn-open">Open</button></div></div></div>
          <div class="kanban-col"><div class="kanban-col-header" style="border-top-color:#FF6B35;"><span class="kanban-col-title">Follow Up</span><span class="kanban-col-count">22</span></div><div class="kanban-card"><div class="kanban-card-phone">Rohit Malhotra</div><div class="kanban-card-meta"><span>📅 Tomorrow</span></div><div class="kanban-card-note">Pricing comparison requested</div><div class="kanban-card-actions"><button class="kanban-btn kanban-btn-move">Move</button><button class="kanban-btn kanban-btn-open">Open</button></div></div></div>
          <div class="kanban-col"><div class="kanban-col-header" style="border-top-color:#0088FF;"><span class="kanban-col-title">Demo</span><span class="kanban-col-count">14</span></div><div class="kanban-card"><div class="kanban-card-phone">Sunita Pharma</div><div class="kanban-card-meta"><span>📅 Wed 4:30 PM</span></div><div class="kanban-card-note">Enterprise demo — 3 joining</div><div class="kanban-card-actions"><button class="kanban-btn kanban-btn-move">Move</button><button class="kanban-btn kanban-btn-open">Open</button></div></div></div>
          <div class="kanban-col"><div class="kanban-col-header" style="border-top-color:#9C27FF;"><span class="kanban-col-title">Qualified</span><span class="kanban-col-count">18</span></div><div class="kanban-card"><div class="kanban-card-phone">Deepak Auto</div><div class="kanban-card-meta"><span>📅 Closing</span></div><div class="kanban-card-note">Sending proposal today</div><div class="kanban-card-actions"><button class="kanban-btn kanban-btn-move">Move</button><button class="kanban-btn kanban-btn-open">Open</button></div></div></div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Import Contacts', desc: 'Upload your existing contacts or sync from WhatsApp, Instagram, and other connected channels.' },
      { number: '02', title: 'Build Pipeline', desc: 'Create custom pipeline stages that match your sales process. Drag leads between stages.' },
      { number: '03', title: 'Automate Follow-Up', desc: 'Set triggers for automatic follow-up messages based on pipeline movement or time delays.' },
      { number: '04', title: 'Close Deals', desc: 'Track revenue, analyze win rates, and optimize your sales process with data-driven insights.' },
    ],
    benefits: [
      { value: '45%', label: 'Higher Close Rate', color: '#0088FF' },
      { value: '₹12L', label: 'Avg Pipeline Value', color: '#25D366' },
      { value: '2.3x', label: 'Sales Velocity', color: '#9C27FF' },
      { value: '0', label: 'Leads Forgotten', color: '#FF6B35' },
    ],
    faq: [
      { q: 'Can I customize pipeline stages?', a: 'Yes, completely! Create as many stages as you need with custom names, colors, and automation rules for each stage transition.' },
      { q: 'Does the CRM sync with WhatsApp conversations?', a: 'Absolutely. Every WhatsApp conversation automatically creates or updates a contact profile in the CRM with full chat history.' },
      { q: 'Can I import from another CRM?', a: 'Yes. We support CSV imports, Google Sheets sync, and direct API integrations with HubSpot, Salesforce, and Zoho.' },
    ],
    testimonials: [
      { name: 'Kavita Jain', role: 'Sales Director, PropStar Realty', quote: 'Botzo CRM replaced three separate tools for us. Having the pipeline, conversations, and campaigns in one place increased our close rate by 45%.', color: '#0088FF' },
      { name: 'Nitin Sharma', role: 'Founder, GrowthBox Marketing', quote: 'The auto follow-up feature alone pays for the entire subscription. No lead falls through the cracks anymore.', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '⚡', title: 'Workflow Automation', desc: 'Automate CRM-triggered flows', href: '/platform/workflow-automation' },
      { icon: '📥', title: 'Team Inbox', desc: 'Manage chats alongside CRM', href: '/platform/team-inbox' },
      { icon: '🏠', title: 'Real Estate', desc: 'Property lead management', href: '/solutions/real-estate' },
      { icon: '🛍️', title: 'Ecommerce', desc: 'Customer lifecycle tracking', href: '/solutions/ecommerce' },
    ],
  },

  'bulk-campaigns': {
    slug: 'bulk-campaigns', category: 'platform', title: 'Bulk Campaigns',
    seo: {
      title: 'Bulk WhatsApp Messaging & Campaigns | Botzo.io',
      description: 'Send targeted bulk WhatsApp messages and broadcast campaigns to thousands of customers instantly with complete analytics.',
      keywords: 'Bulk WhatsApp Messaging, Bulk Messaging Platform, Campaign Software, Broadcast Software, WhatsApp Broadcast API, WhatsApp Marketing Sender',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Broadcasting Engine', heroTitle: 'Bulk Campaign', heroHighlight: 'Broadcasting',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'Launch WhatsApp & RCS broadcast campaigns to thousands of contacts with approved templates, smart scheduling, audience segmentation, and real-time delivery analytics.',
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
      { icon: '📤', title: 'Mass Broadcasting', desc: 'Send personalized messages to unlimited contacts with variable substitution for names, orders, and custom data.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📅', title: 'Smart Scheduling', desc: 'Schedule campaigns for optimal send times based on timezone, industry benchmarks, and historical engagement data.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🎯', title: 'Audience Segments', desc: 'Target specific groups by tags, location, purchase history, engagement level, or custom attributes.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📊', title: 'Live Analytics', desc: 'Track sent, delivered, read, replied, and failed metrics in real-time with exportable reports.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    demo: `
      <div class="dash-campaign">
        <div class="dash-campaign-header"><div><div style="font-size:0.78rem;font-weight:600;color:var(--color-white-text);">Summer Sale Campaign</div><div style="font-size:0.65rem;color:var(--color-green);">● Live — Sending</div></div><div class="status-badge status-badge-active">WhatsApp</div></div>
        <div class="dash-campaign-stats">
          <div class="kpi-card"><div class="kpi-value" style="font-size:1.3rem;">18,200</div><div class="kpi-label">Sent</div></div>
          <div class="kpi-card"><div class="kpi-value" style="font-size:1.3rem;color:var(--color-green);">17,100</div><div class="kpi-label">Delivered</div><div class="kpi-change kpi-change-positive">93.9%</div></div>
          <div class="kpi-card"><div class="kpi-value" style="font-size:1.3rem;color:var(--color-primary-light);">7,890</div><div class="kpi-label">Read</div><div class="kpi-change kpi-change-positive">43.4%</div></div>
          <div class="kpi-card"><div class="kpi-value" style="font-size:1.3rem;color:var(--color-blue);">2,340</div><div class="kpi-label">Replied</div><div class="kpi-change kpi-change-positive">12.9%</div></div>
        </div>
        <div class="dash-campaign-bar"><div class="dash-campaign-bar-fill" style="width:93.9%;background:var(--color-green);"></div><div class="dash-campaign-bar-fill" style="width:43.4%;background:var(--color-primary-light);"></div><div class="dash-campaign-bar-fill" style="width:12.9%;background:var(--color-blue);"></div></div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Create Template', desc: 'Design your message with text, media, buttons, and personalization variables.' },
      { number: '02', title: 'Select Audience', desc: 'Choose from saved segments or create new ones based on tags, behavior, or custom filters.' },
      { number: '03', title: 'Schedule & Send', desc: 'Send immediately or schedule for the optimal time. Set daily sending limits if needed.' },
      { number: '04', title: 'Track Results', desc: 'Monitor delivery, reads, clicks, and replies in real-time. Export reports for analysis.' },
    ],
    benefits: [
      { value: '94%', label: 'Delivery Rate', color: '#FF6B35' },
      { value: '43%', label: 'Read Rate', color: '#9C27FF' },
      { value: '100K+', label: 'Messages per Campaign', color: '#0088FF' },
      { value: '12x', label: 'ROI vs Email', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '📊', title: 'CRM', desc: 'Segment from your pipeline', href: '/platform/crm' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Broadcast via WhatsApp', href: '/platform/whatsapp-api' },
      { icon: '📱', title: 'RCS Messaging', desc: 'Rich media broadcasts', href: '/platform/rcs-messaging' },
    ],
  },

  'appointment-booking': {
    slug: 'appointment-booking', category: 'platform', title: 'Appointment Booking',
    seo: {
      title: 'Automated Appointment Scheduling Software | Botzo.io',
      description: 'Let customers book appointments and schedule meetings directly through WhatsApp or web chatbots instantly without human intervention.',
      keywords: 'Appointment Scheduling, Booking Software, Calendar Booking, Online Appointment System, WhatsApp Booking Bot, Automated Scheduling',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Commerce Tools', heroTitle: 'Automated', heroHighlight: 'Appointment Booking',
    gradient: ['#25D366', '#00897B'],
    heroDesc: 'Let customers book appointments directly through WhatsApp and RCS. Automated scheduling, reminders, rescheduling, and no-show follow-ups.',
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
      { icon: '📅', title: 'Chat-Based Booking', desc: 'Customers select available time slots directly in the chat conversation. No external links needed.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🔔', title: 'Auto Reminders', desc: 'Send automatic reminders 24h, 2h, and 30min before the appointment to reduce no-shows.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '🔄', title: 'Easy Rescheduling', desc: 'Customers can reschedule with a single reply. Calendar updates automatically.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📊', title: 'Booking Analytics', desc: 'Track booking rates, popular time slots, no-show rates, and revenue per slot.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Set Availability', desc: 'Configure your business hours, slot durations, and buffer times between appointments.' },
      { number: '02', title: 'Connect Calendar', desc: 'Sync with Google Calendar to avoid double-bookings and show real-time availability.' },
      { number: '03', title: 'Enable Chat Booking', desc: 'Add booking flows to your WhatsApp chatbot or send booking links via campaigns.' },
      { number: '04', title: 'Auto-Manage', desc: 'Reminders, confirmations, and rescheduling handled automatically. You just show up.' },
    ],
    benefits: [
      { value: '-60%', label: 'No-Show Rate', color: '#25D366' },
      { value: '24/7', label: 'Booking Availability', color: '#0088FF' },
      { value: '2min', label: 'Average Booking Time', color: '#9C27FF' },
      { value: '3x', label: 'More Appointments', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '🏥', title: 'Healthcare', desc: 'Patient appointment automation', href: '/solutions/healthcare' },
      { icon: '💪', title: 'Fitness', desc: 'Class & session scheduling', href: '/solutions/fitness' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Chat-based booking channel', href: '/platform/whatsapp-api' },
    ],
  },

  'payment-integration': {
    slug: 'payment-integration', category: 'platform', title: 'Payment Integration',
    seo: {
      title: 'WhatsApp Payment Collection & UPI Integration | Botzo.io',
      description: 'Collect payments seamlessly over WhatsApp. Send payment links, enable native UPI flows, and track transaction success in real-time.',
      keywords: 'Payment Integration, Payment Collection, Payment Gateway Integration, UPI Payment, WhatsApp Payment, Chat Commerce, Native WhatsApp Payments',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Commerce Tools', heroTitle: 'In-Chat', heroHighlight: 'Payment Collection',
    gradient: ['#00E676', '#00C853'],
    heroDesc: 'Collect payments directly inside WhatsApp and RCS conversations. Integrate Razorpay, Stripe, or WhatsApp Pay for seamless in-chat checkout experiences.',
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
      { icon: '💳', title: 'In-Chat Checkout', desc: 'Send payment links that open directly in the chat window. No redirects, no friction.', iconBg: 'rgba(0,230,118,0.1)', iconColor: '#00E676' },
      { icon: '🔒', title: 'Secure Payments', desc: 'PCI-DSS compliant payment processing through Razorpay, Stripe, and WhatsApp Pay integrations.', iconBg: 'rgba(0,230,118,0.1)', iconColor: '#00E676' },
      { icon: '🧾', title: 'Auto Receipts', desc: 'Automatically send payment confirmations, invoices, and receipts via WhatsApp after successful payment.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🔄', title: 'Recurring Billing', desc: 'Set up subscription payments and automated renewal reminders for SaaS, memberships, and services.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Connect Gateway', desc: 'Link your Razorpay, Stripe, or PayU account in one click.' },
      { number: '02', title: 'Create Products', desc: 'Add products, services, or subscription plans with pricing.' },
      { number: '03', title: 'Send Payment Links', desc: 'Generate and send payment links in conversations or automated flows.' },
      { number: '04', title: 'Get Paid', desc: 'Receive payments instantly with automatic receipt delivery and CRM tracking.' },
    ],
    benefits: [
      { value: '38%', label: 'Higher Conversion', color: '#00E676' },
      { value: '<30s', label: 'Checkout Time', color: '#0088FF' },
      { value: '100%', label: 'Secure & PCI Compliant', color: '#9C27FF' },
      { value: '0%', label: 'Cart Abandonment Drop', color: '#FF6B35' },
    ],
    relatedLinks: [
      { icon: '🛍️', title: 'Ecommerce', desc: 'Full online store automation', href: '/solutions/ecommerce' },
      { icon: '🎫', title: 'QR Ticketing', desc: 'Ticket sales & entry management', href: '/platform/qr-ticketing' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Send payment links via chat', href: '/platform/whatsapp-api' },
    ],
  },

  'qr-ticketing': {
    slug: 'qr-ticketing', category: 'platform', title: 'Dynamic QR Ticketing',
    seo: {
      title: 'Dynamic QR Code Generation & Event Ticketing | Botzo.io',
      description: 'Generate dynamic QR codes for physical events, product packaging, and offline-to-online customer acquisition directly into your WhatsApp CRM.',
      keywords: 'Dynamic QR, Dynamic QR Code, QR Ticketing, QR Event Entry, QR Management, Offline to Online Marketing, WhatsApp QR Generator',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Commerce Tools', heroTitle: 'Dynamic QR', heroHighlight: 'Ticketing System',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'Generate unique QR-coded tickets for events, flights, movies, and store pick-ups. Deliver directly to WhatsApp with real-time validation and entry management.',
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
      { icon: '🎫', title: 'Dynamic QR Generation', desc: 'Each ticket gets a unique, time-limited QR code that prevents duplication and fraud.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📱', title: 'WhatsApp Delivery', desc: 'Tickets delivered instantly to the customer\'s WhatsApp. No app downloads or email checks needed.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '✅', title: 'Real-Time Scanning', desc: 'Validate tickets at entry gates with our scanner app. Instant green/red confirmation.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📊', title: 'Entry Analytics', desc: 'Track check-in rates, peak entry times, and attendance patterns in real-time.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Create Event', desc: 'Set up your event with dates, seat categories, pricing, and capacity limits.' },
      { number: '02', title: 'Sell Tickets', desc: 'Customers purchase via WhatsApp chatbot, website, or bulk booking.' },
      { number: '03', title: 'Auto-Deliver', desc: 'QR tickets sent instantly to WhatsApp with event details and reminders.' },
      { number: '04', title: 'Scan & Verify', desc: 'Use the Botzo scanner app at entry gates for instant validation.' },
    ],
    benefits: [
      { value: '99.8%', label: 'Scanner Accuracy', color: '#FF6B35' },
      { value: '<1s', label: 'Scan Speed', color: '#0088FF' },
      { value: '0%', label: 'Ticket Fraud', color: '#25D366' },
      { value: '100%', label: 'Contactless Entry', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '🎪', title: 'Event Management', desc: 'Full event automation', href: '/solutions/events' },
      { icon: '💳', title: 'Payment Integration', desc: 'In-chat ticket purchases', href: '/platform/payment-integration' },
      { icon: '💬', title: 'WhatsApp API', desc: 'Ticket delivery channel', href: '/platform/whatsapp-api' },
    ],
  },

  'voice-ai': {
    slug: 'voice-ai',
    category: 'platform',
    title: 'Voice AI',
    seo: {
      title: 'AI Voice Agents & Inbound Calling Automation | Botzo.io',
      description: 'Deploy conversational AI voice agents capable of handling inbound support calls, booking appointments, and conducting intelligent outbound surveys.',
      keywords: 'Voice AI, AI Voice Agent, Voice Assistant, AI Calling, Voice Automation, Conversational IVR, Phone Bot',
      schemaType: 'SoftwareApplication'
    },
    overline: 'AI Telephony',
    heroTitle: 'Autonomous Voice',
    heroHighlight: 'AI Agents',
    gradient: ['#00F2FE', '#4FACFE'],
    heroDesc: 'Deploy human-like, low-latency AI voice agents that handle inbound support calls, automate outbound lead qualification, schedule appointments, and update your CRM in real time.',
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
    featuresOverline: 'Voice Capabilities',
    featuresTitle: 'Enterprise <span class="text-gradient">Voice Automation</span>',
    features: [
      { icon: '🗣️', title: 'Ultra-Low Latency', desc: 'Sub-500ms conversational response time for natural, flowing verbal communication.', iconBg: 'rgba(0,242,254,0.1)', iconColor: '#00F2FE' },
      { icon: '🧠', title: 'Context-Aware Memory', desc: 'Retains customer profile, conversation history, and billing context during active calls.', iconBg: 'rgba(0,242,254,0.1)', iconColor: '#00F2FE' },
      { icon: '📅', title: 'Real-Time Actions', desc: 'Triggers CRM updates, schedules calendar meetings, and initiates API tasks during calls.', iconBg: 'rgba(79,172,254,0.1)', iconColor: '#4FACFE' },
      { icon: '🎙️', title: 'Emotional Intelligence', desc: 'Senses speaker tone and sentiment, automatically adapting pacing and empathy levels.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '🔐', title: 'PCI & HIPAA Compliant', desc: 'Securely processes sensitive details, orders, and healthcare data with zero token leakage.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📊', title: 'Call Transcripts & Analytics', desc: 'Review detailed audio recordings, automated transcripts, summaries, and sentiment trends.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
    ],
    demoOverline: 'Interactive Simulation',
    demoTitle: 'Real-Time Voice <span class="text-gradient">Call Feed</span>',
    demoDesc: 'Monitor active AI voice conversations, live transcriptions, and sentiment scores as they happen.',
    demo: `
      <div class="dash-voice-call">
        <div class="voice-call-header">
          <div class="voice-call-avatar">🗣️</div>
          <div style="min-width: 0;">
            <div style="font-weight:600;font-size:0.78rem;color:var(--color-white-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Inbound Call #VC-7182</div>
            <div style="font-size:0.65rem;color:var(--color-dim-text);">Active Call — 1m 45s</div>
          </div>
          <div class="voice-call-sentiment-badge">Positive (88%)</div>
        </div>
        <div class="voice-waveform-container">
          <span class="voice-waveform-bar active" style="height: 12px; animation-delay: 0.1s;"></span>
          <span class="voice-waveform-bar active" style="height: 24px; animation-delay: 0.3s;"></span>
          <span class="voice-waveform-bar active" style="height: 18px; animation-delay: 0.2s;"></span>
          <span class="voice-waveform-bar active" style="height: 36px; animation-delay: 0.4s;"></span>
          <span class="voice-waveform-bar active" style="height: 15px; animation-delay: 0.15s;"></span>
          <span class="voice-waveform-bar active" style="height: 28px; animation-delay: 0.35s;"></span>
          <span class="voice-waveform-bar active" style="height: 8px; animation-delay: 0.05s;"></span>
          <span class="voice-waveform-bar active" style="height: 20px; animation-delay: 0.25s;"></span>
        </div>
        <div class="voice-call-transcript">
          <div class="transcript-line agent">
            <span class="transcript-speaker">Botzo Agent (Voice)</span>
            <span class="transcript-text">"Thanks for calling support. Yes, I can help reschedule your flight. Do you prefer morning or evening?"</span>
          </div>
          <div class="transcript-line customer">
            <span class="transcript-speaker">Customer (Verbal)</span>
            <span class="transcript-text">"Morning flight would be perfect, ideally after 9 AM."</span>
          </div>
          <div class="transcript-line agent">
            <span class="transcript-speaker">Botzo Agent (Voice)</span>
            <span class="transcript-text">"I have a 9:45 AM option available. I have booked that and sent the new boarding pass to your WhatsApp. Is there anything else?"</span>
          </div>
        </div>
        <div class="voice-action-log">
          <div class="action-log-item"><span class="action-time">10:45:12</span> <span class="action-desc">API call successful: Flight rescheduled</span></div>
          <div class="action-log-item"><span class="action-time">10:45:14</span> <span class="action-desc">WhatsApp Notification dispatched: QR Ticket</span></div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Configure Persona', desc: 'Select from 40+ professional, realistic voices and set the tone, accent, and conversational speed.' },
      { number: '02', title: 'Define Knowledge', desc: 'Upload prompt instructions, FAQs, customer policies, and database APIs to guide the voice agent.' },
      { number: '03', title: 'Connect Lines', desc: 'Link your business VoIP lines, Twilio trunking, or buy a dedicated number directly through Botzo.' },
      { number: '04', title: 'Analyze Call Feed', desc: 'Go live and track conversational success rates, call durations, resolutions, and sentiment analysis.' },
    ],
    benefits: [
      { value: '24/7', label: 'Inbound Availability', color: '#00F2FE' },
      { value: '<500ms', label: 'Response Latency', color: '#4FACFE' },
      { value: '75%', label: 'Cost Reduction vs Human', color: '#9C27FF' },
      { value: '92%', label: 'First-Call Resolution', color: '#FF6B35' },
    ],
    faq: [
      { q: 'How human-like does the Voice AI sound?', a: 'Extremely. Botzo utilizes advanced text-to-speech models that replicate natural human breath, inflections, pauses, and speech rhythms. Most customers cannot tell they are speaking to an AI.' },
      { q: 'Can it transfer calls to human agents?', a: 'Yes. If the AI detects high frustration levels or if the user requests a human, it performs a warm transfer to a support queue with call context and transcripts.' },
      { q: 'Which languages and accents are supported?', a: 'We support over 30 languages, including multiple English accents (Indian, US, UK, Australian), Hindi, Spanish, French, German, and major Indian regional languages.' },
      { q: 'How does it integrate with our CRM?', a: 'It syncs natively with HubSpot, Salesforce, and custom endpoints via webhooks. Immediately after a call ends, the transcript and call summary are pushed to the contact timeline.' },
    ],
    testimonials: [
      { name: 'Sanjay Dutt', role: 'Support Director, IndGo Airlines', quote: 'Our inbound peak reservation inquiries were fully handled by Botzo\'s Voice AI during the holiday season. The system handled 5,000 concurrent calls with zero queue delay.', color: '#00F2FE' },
    ],
    integrations: [
      { icon: '📞', name: 'Twilio' }, { icon: '📞', name: 'Exotel' }, { icon: '📊', name: 'Salesforce' },
      { icon: '💼', name: 'HubSpot' }, { icon: '🔄', name: 'Zapier' },
    ],
    relatedLinks: [
      { icon: '📥', title: 'Team Inbox', desc: 'Manage tickets and transcripts in one place', href: '/platform/team-inbox' },
      { icon: '⚡', title: 'Workflow Automation', desc: 'Trigger callback schedules and tasks', href: '/platform/workflow-automation' },
    ],
  },

  'ai-studio': {
    slug: 'ai-studio',
    category: 'platform',
    title: 'AI Studio',
    seo: {
      title: 'AI Automation Studio & Custom Knowledge Base | Botzo.io',
      description: 'Train your custom AI agents. Upload documents, URLs, and CRM data to create highly contextual business assistants for sales and support.',
      keywords: 'AI Studio, AI Builder, AI Workspace, AI Platform, AI Automation Studio, Custom LLM Training, Enterprise AI Assistant',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Creative Engine',
    heroTitle: 'On-Model AI',
    heroHighlight: 'Product Studio',
    gradient: ['#FF416C', '#FF4B2B'],
    heroDesc: 'Transform flat-lay product photos into professional on-model fashion shots. Upload product images, choose model demographics, poses, and backdrops, and generate studio-grade catalog photography instantly.',
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
    featuresOverline: 'Studio Tools',
    featuresTitle: 'The Creative <span class="text-gradient">Control Center</span>',
    features: [
      { icon: '📸', title: 'On-Model Generation', desc: 'Place apparel, accessories, or footwear on highly realistic AI models of any demographic.', iconBg: 'rgba(255,65,108,0.1)', iconColor: '#FF416C' },
      { icon: '🖼️', title: 'Smart Backgrounds', desc: 'Instantly swap backgrounds with high-fidelity studio, outdoor, or lifestyle environments.', iconBg: 'rgba(255,65,108,0.1)', iconColor: '#FF416C' },
      { icon: '⚡', title: 'Instant Retouching', desc: 'Enhance lighting, remove wrinkles, adjust shadows, and upscale to 4K resolution automatically.', iconBg: 'rgba(255,75,43,0.1)', iconColor: '#FF4B2B' },
      { icon: '📐', title: 'Proportional Fitting', desc: 'AI preserves exact textures, details, shapes, and draping of your original product.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📊', title: 'Catalog Sync', desc: 'Directly sync generated photos back to your Shopify, WooCommerce, or Magento catalog.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🎨', title: 'Pose Customization', desc: 'Select from hundreds of dynamic fashion model poses, facial expressions, and lighting rigs.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
    ],
    demoOverline: 'Interactive Workbench',
    demoTitle: 'Product-to-Model <span class="text-gradient">Generator</span>',
    demoDesc: 'Test model prompts and parameters in real time with our simulated fashion photography workbench.',
    demo: `
      <div class="dash-studio-fashion">
        <div class="studio-fashion-params">
          <div class="studio-param-group">
            <label class="studio-label">Input Flat-Lay Photo</label>
            <div class="studio-image-upload-box">
              <span class="uploaded-product-emoji">👕</span>
              <div style="min-width: 0;">
                <div style="font-weight:600;font-size:0.7rem;color:var(--color-white-text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">classic-tee-blue.jpg</div>
                <div style="font-size:0.6rem;color:var(--color-dim-text);">1.2 MB — Uploaded</div>
              </div>
            </div>
          </div>
          <div class="studio-param-group">
            <label class="studio-label">Model Demographic</label>
            <select class="studio-select" disabled>
              <option>Male — Young Adult (Athletic)</option>
              <option>Female — Young Adult (Casual)</option>
            </select>
          </div>
          <div class="studio-param-group">
            <label class="studio-label">Scene & Backdrop Prompt</label>
            <div class="studio-prompt-box">
              "Studio portrait, professional commercial lighting, neutral beige backdrop, soft shadows"
            </div>
          </div>
        </div>
        <div class="studio-photo-preview">
          <div class="studio-preview-header">Generated Catalog Photo</div>
          <div class="studio-photo-wrapper">
            <div class="studio-photo-container">
              <div class="studio-mock-model">
                <span style="font-size: 2.2rem; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));">🧑‍💼</span>
                <span class="studio-mock-apparel">Blue Tee</span>
              </div>
              <div class="studio-photo-backdrop-badge">Studio White</div>
            </div>
          </div>
          <div class="studio-test-actions">
            <button class="studio-btn-test">Regenerate Pose 🔄</button>
            <span style="font-size:0.7rem;color:var(--color-green);margin-left:auto;">✓ Fit Score: 99.1%</span>
          </div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Upload Product Photo', desc: 'Upload a clean photo of your apparel, product, or accessory on a flat-lay or hanger.' },
      { number: '02', title: 'Choose Model & Poses', desc: 'Select model age, gender, ethnicity, pose style, and expression from our library.' },
      { number: '03', title: 'Set Background Scene', desc: 'Type a descriptive prompt or choose from pre-set studio backdrops and real-world scenes.' },
      { number: '04', title: 'Download HD Asset', desc: 'Generate multiple options in seconds. Download 4K resolution files ready for catalog and ads.' },
    ],
    benefits: [
      { value: '90%', label: 'Cost Reduction vs Photoshoots', color: '#FF416C' },
      { value: '10x', label: 'Faster Time-to-Market', color: '#FF4B2B' },
      { value: '4K', label: 'Ultra-HD Resolutions', color: '#9C27FF' },
      { value: '100+', label: 'Model Customization Options', color: '#25D366' },
    ],
    faq: [
      { q: 'Does the AI distort product details or logos?', a: 'No. Our advanced neural shape-preserving technology locks in the exact fabric patterns, logos, textures, and details of your original garment while fitting it to the model.' },
      { q: 'Can we generate models of specific demographics?', a: 'Yes. You have full control over the model\'s gender, age range, ethnicity, skin tone, hair style, and pose to align with your brand identity.' },
      { q: 'What kind of products does this work for?', a: 'It is highly optimized for apparel (t-shirts, shirts, dresses, hoodies, pants), activewear, jewelry, sunglasses, and footwear.' },
      { q: 'How many images can we generate?', a: 'Growth plan includes 250 high-res generations/month. Enterprise plans offer unlimited generations and custom fine-tuned brand models.' },
    ],
    testimonials: [
      { name: 'Ananya Sharma', role: 'Founder, ThreadVerse Fashion', quote: 'AI Studio completely eliminated our need for weekly model shoots. We upload flat-lays of our new designs and have a fully model-showcased ecommerce catalog in 10 minutes.', color: '#FF416C' },
    ],
    integrations: [
      { icon: '🌐', name: 'OpenAI' }, { icon: '🐙', name: 'GitHub' }, { icon: '📁', name: 'S3 Bucket' },
      { icon: '📊', name: 'Pinecone' }, { icon: '🔄', name: 'Zapier' },
    ],
    relatedLinks: [
      { icon: '🤖', title: 'AI Bot', desc: 'Deploy studio agents into chat bots', href: '/platform/ai-bot' },
      { icon: '⚡', title: 'Workflow Automation', desc: 'Embed studio prompt nodes in flows', href: '/platform/workflow-automation' },
    ],
  },

  'ai-bot': {
    slug: 'ai-bot',
    category: 'platform',
    title: 'Autonomous AI Bot',
    seo: {
      title: 'Autonomous AI Chatbot for Business | Botzo.io',
      description: 'Deploy intelligent AI chatbots that understand intent, resolve customer issues, qualify leads, and perform tasks autonomously.',
      keywords: 'AI Bot, AI Chatbot, Customer Support Bot, Autonomous AI, Business AI Assistant, Intelligent Virtual Agent',
      schemaType: 'SoftwareApplication'
    },
    overline: 'Autonomous Chat',
    heroTitle: 'Autonomous Customer',
    heroHighlight: 'AI Chatbot',
    gradient: ['#8A2BE2', '#4A00E0'],
    heroDesc: 'Deploy fully autonomous AI chatbots that resolve complex customer inquiries, process returns, handle billing FAQs, and navigate APIs without human intervention.',
    heroVisualHTML: `
      <div class="hero-ecosystem automation-ecosystem">
        <div class="ecosystem-card workflow-board glass-card-strong float-slow">
          <div class="wf-node wf-trigger">Incoming Message</div><div class="wf-line"></div><div class="wf-node wf-condition">Is VIP?</div>
          <div class="wf-split"><div class="wf-branch"><div class="wf-line-curved-left"></div><div class="wf-node wf-action">Route to Agent</div></div>
          <div class="wf-branch"><div class="wf-line-curved-right"></div><div class="wf-node wf-action">AI Auto-Reply</div></div></div>
        </div>
      </div>
`,
    featuresOverline: 'Agent Capabilities',
    featuresTitle: 'Intelligent <span class="text-gradient">Self-Service</span>',
    features: [
      { icon: '🤖', title: 'Autonomous Resolutions', desc: 'Solves complex support issues, processes refunds, and changes reservations end-to-end.', iconBg: 'rgba(138,43,226,0.1)', iconColor: '#8A2BE2' },
      { icon: '💡', title: 'Reasoning & Planning', desc: 'Thinks through problems step-by-step: analyzes intent, searches knowledge, calls APIs, and resolves.', iconBg: 'rgba(138,43,226,0.1)', iconColor: '#8A2BE2' },
      { icon: '🔌', title: 'API Integration', desc: 'Reads and writes securely to your database, Shopify store, Zendesk, or payment gateways.', iconBg: 'rgba(74,0,224,0.1)', iconColor: '#4A00E0' },
      { icon: '🔄', title: 'Seamless Handover', desc: 'Gracefully hands off complex issues to human agents on our Unified Team Inbox when needed.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '🌍', title: 'Multilingual Support', desc: 'Understands and responds in 80+ languages natively, detecting language shifts dynamically.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📊', title: 'Resolution Auditing', desc: 'Audits reasoning logs, customer satisfaction scores, and action logs in a visual dashboard.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
    ],
    demoOverline: 'Autonomous Demo',
    demoTitle: 'Reasoning Agent <span class="text-gradient">In Action</span>',
    demoDesc: 'Observe how the AI Bot thinks, plans, retrieves data, and triggers database API steps to solve a live issue.',
    demo: `
      <div class="dash-autonomous-bot">
        <div class="bot-header">
          <div style="display:flex;align-items:center;gap:0.4rem;">
            <span class="status-dot green"></span>
            <span style="font-weight:600;font-size:0.78rem;color:var(--color-white-text);">Autonomous Support Agent</span>
          </div>
          <div class="status-badge" style="background:rgba(138,43,226,0.15);color:#B84DFF;font-size:0.65rem;">Active</div>
        </div>
        <div class="bot-chat-body">
          <div class="chat-bubble chat-bubble-incoming" style="font-size: 0.72rem; padding: 0.4rem 0.5rem;">Customer: "I want to return order #9021. The size is too small."</div>
          <div class="bot-reasoning-flow">
            <div class="reasoning-step"><span class="reason-icon">🔍</span> <span class="reason-text">Intent Classified: Return Request</span></div>
            <div class="reasoning-step"><span class="reason-icon">📞</span> <span class="reason-text">Calling Shopify API (Order #9021) -> Status: Delivered</span></div>
            <div class="reasoning-step"><span class="reason-icon">⚖️</span> <span class="reason-text">Checking Return Policy -> Purchase date within 15 days (Eligible)</span></div>
            <div class="reasoning-step"><span class="reason-icon">🔧</span> <span class="reason-text">Action: Creating pre-paid shipping return slip</span></div>
          </div>
          <div class="chat-bubble chat-bubble-outgoing" style="font-size: 0.72rem; padding: 0.4rem 0.5rem; background: #005c4b;">Bot: "I have verified your order #9021. It is eligible for return. I've generated your prepaid return label and sent it to your registered email. Let me know if you need anything else!"</div>
        </div>
      </div>
    `,
    steps: [
      { number: '01', title: 'Upload Documentation', desc: 'Sync your Zendesk articles, PDFs, and website FAQs. The bot reads them in minutes.' },
      { number: '02', title: 'Link API Actions', desc: 'Connect secure API routes for order searches, reservation updates, and payment status checks.' },
      { number: '03', title: 'Style & Brand', desc: 'Customize chat widgets, avatars, and fonts to match your company\'s style guidelines.' },
      { number: '04', title: 'Embed & Run', desc: 'Copy the lightweight JS snippet into your header or publish it to WhatsApp/Instagram.' },
    ],
    benefits: [
      { value: '82%', label: 'Autonomy Resolution Rate', color: '#8A2BE2' },
      { value: '10s', label: 'Average Resolution Time', color: '#4A00E0' },
      { value: '24/7/365', label: 'Instant Service', color: '#9C27FF' },
      { value: '4.7/5', label: 'CSAT Rating', color: '#25D366' },
    ],
    faq: [
      { q: 'How does the AI Bot handle complex actions like refunds?', a: 'By executing secure API requests. If a customer requests a refund, the bot verifies the order date and refund policy, calls your ecommerce API to check status, processes it, and updates the customer.' },
      { q: 'Will it hallucinate fake policies?', a: 'No. The AI Bot uses a strict context retrieval lock. If the answer is not present in your uploaded documentation, it will state it doesn\'t know and hand over to a human.' },
      { q: 'Can we install it on our mobile app?', a: 'Yes! We provide an iOS and Android SDK, as well as a clean web widget snippet that loads fast and responds on any screen size.' },
      { q: 'How does human agent fallback work?', a: 'When the AI Bot encounters an unresolvable issue or high customer frustration, it places the ticket in the Unified Team Inbox and alerts online agents with a full summary.' },
    ],
    testimonials: [
      { name: 'Vikram Mehta', role: 'VP Customer Success, ShopZillion', quote: 'Botzo\'s AI Bot resolved 82% of our inbound order tracking and returns questions automatically. Our support team can now focus on high-value sales chats.', color: '#8A2BE2' },
    ],
    integrations: [
      { icon: '🛒', name: 'Shopify' }, { icon: '🎫', name: 'Zendesk' }, { icon: '💳', name: 'Razorpay' },
      { icon: '🔄', name: 'Zapier' }, { icon: '💬', name: 'WhatsApp API' },
    ],
    relatedLinks: [
      { icon: '🎙️', title: 'Voice AI', desc: 'Automate voice calling support', href: '/platform/voice-ai' },
      { icon: '📥', title: 'Team Inbox', desc: 'Unified human-agent workspace', href: '/platform/team-inbox' },
    ],
  },
};
