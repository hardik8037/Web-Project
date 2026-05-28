/* ═══════════════════════════════════════════════════
   PLATFORM DETAIL PAGES DATA
   11 platform features — 7 flagship (deep) + 4 secondary
   ═══════════════════════════════════════════════════ */

export const PLATFORM_PAGES = {
  'whatsapp-api': {
    slug: 'whatsapp-api',
    category: 'platform',
    title: 'WhatsApp API',
    overline: 'Communication Channel',
    heroTitle: 'WhatsApp Business',
    heroHighlight: 'API Integration',
    gradient: ['#25D366', '#128C7E'],
    heroDesc: 'Connect with 2+ billion WhatsApp users through the official Business API. Send templates, automate responses, manage multi-agent support, and drive conversions — all from one verified business number.',
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
    overline: 'Social Commerce', heroTitle: 'Instagram', heroHighlight: 'DM & Comment Automation',
    gradient: ['#E4405F', '#F56040'],
    heroDesc: 'Automatically respond to Instagram DMs, story mentions, and post comments. Convert every interaction into a qualified lead with zero manual effort.',
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
    overline: 'Social Commerce', heroTitle: 'Facebook', heroHighlight: 'Messenger & Lead Gen',
    gradient: ['#1877F2', '#0A5DC2'],
    heroDesc: 'Automate Messenger conversations, Facebook comment replies, and lead generation ads. Convert social engagement into real business opportunities.',
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
    overline: 'Next-Gen SMS', heroTitle: 'RCS Rich', heroHighlight: 'Communication Services',
    gradient: ['#36C5F0', '#0088FF'],
    heroDesc: 'Upgrade plain SMS to rich, branded messaging experiences. Send carousels, interactive buttons, calendar bookings, and verified sender profiles directly in Android messaging apps.',
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
    overline: 'Collaboration Hub', heroTitle: 'Unified Team', heroHighlight: 'Inbox',
    gradient: ['#9C27FF', '#7B1FA2'],
    heroDesc: 'One inbox for every channel. WhatsApp, Instagram, Facebook, RCS, email — all conversations in a single unified view with agent assignment, internal notes, and real-time collaboration.',
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
    overline: 'No-Code Builder', heroTitle: 'Visual Workflow', heroHighlight: 'Automation Engine',
    gradient: ['#B84DFF', '#7B1FA2'],
    heroDesc: 'Build sophisticated automation flows with drag-and-drop — no coding required. Connect triggers, conditions, actions, and delays to create intelligent communication workflows.',
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
    overline: 'Customer Management', heroTitle: 'Centralized', heroHighlight: 'CRM & Pipeline',
    gradient: ['#0088FF', '#0055CC'],
    heroDesc: 'Track every lead from first contact to conversion. Manage pipelines, automate follow-ups, segment contacts, and gain actionable insights — all integrated with your messaging channels.',
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
    overline: 'Broadcasting Engine', heroTitle: 'Bulk Campaign', heroHighlight: 'Broadcasting',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'Launch WhatsApp & RCS broadcast campaigns to thousands of contacts with approved templates, smart scheduling, audience segmentation, and real-time delivery analytics.',
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
    overline: 'Commerce Tools', heroTitle: 'Automated', heroHighlight: 'Appointment Booking',
    gradient: ['#25D366', '#00897B'],
    heroDesc: 'Let customers book appointments directly through WhatsApp and RCS. Automated scheduling, reminders, rescheduling, and no-show follow-ups.',
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
    overline: 'Commerce Tools', heroTitle: 'In-Chat', heroHighlight: 'Payment Collection',
    gradient: ['#00E676', '#00C853'],
    heroDesc: 'Collect payments directly inside WhatsApp and RCS conversations. Integrate Razorpay, Stripe, or WhatsApp Pay for seamless in-chat checkout experiences.',
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
    overline: 'Commerce Tools', heroTitle: 'Dynamic QR', heroHighlight: 'Ticketing System',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'Generate unique QR-coded tickets for events, flights, movies, and store pick-ups. Deliver directly to WhatsApp with real-time validation and entry management.',
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
};
