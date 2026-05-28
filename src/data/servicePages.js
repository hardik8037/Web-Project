/* ═══════════════════════════════════════════════════
   SERVICE DETAIL PAGES DATA
   8 service pages — Digital Marketing (4) + Engineering (4)
   ═══════════════════════════════════════════════════ */

export const SERVICE_PAGES = {
  'digital-marketing': {
    slug: 'digital-marketing', category: 'services', title: 'Digital Marketing',
    overline: 'Growth Engine', heroTitle: 'Comprehensive', heroHighlight: 'Digital Marketing',
    gradient: ['#00E676', '#00C853'],
    heroDesc: 'Drive measurable growth with data-driven digital marketing strategies. From SEO to paid ads, social media to content marketing — we build full-funnel campaigns that convert.',
    featuresOverline: 'Service Scope',
    featuresTitle: 'Full-Funnel <span class="text-gradient">Growth Strategy</span>',
    features: [
      { icon: '📈', title: 'Growth Strategy', desc: 'Custom marketing roadmaps built on competitor analysis, market research, and audience segmentation. Clear KPIs from day one.', iconBg: 'rgba(0,230,118,0.1)', iconColor: '#00E676' },
      { icon: '🎯', title: 'Performance Ads', desc: 'Meta, Google, and LinkedIn ad campaigns optimized for ROAS. A/B tested creatives, dynamic retargeting, and conversion tracking.', iconBg: 'rgba(0,230,118,0.1)', iconColor: '#00E676' },
      { icon: '📝', title: 'Content Marketing', desc: 'Blog posts, case studies, whitepapers, and video content that builds authority and drives organic traffic.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📊', title: 'Analytics & Reporting', desc: 'Monthly performance reports with actionable insights. Google Analytics 4, UTM tracking, and custom dashboards.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📧', title: 'Email Marketing', desc: 'Drip sequences, newsletter campaigns, and automated nurture flows that keep leads engaged through the funnel.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🔄', title: 'CRO Optimization', desc: 'Landing page optimization, A/B testing, heatmap analysis, and funnel audits to maximize conversion rates.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    steps: [
      { number: '01', title: 'Discovery & Audit', desc: 'We analyze your current digital presence, competitors, and market opportunities.' },
      { number: '02', title: 'Strategy & Planning', desc: 'Custom marketing roadmap with channel mix, budget allocation, and timeline.' },
      { number: '03', title: 'Execute & Optimize', desc: 'Launch campaigns across channels. Continuous optimization based on real data.' },
      { number: '04', title: 'Scale & Report', desc: 'Scale winning strategies. Monthly reports with ROI analysis and growth recommendations.' },
    ],
    benefits: [
      { value: '4.2x', label: 'Average ROAS', color: '#00E676' },
      { value: '+240%', label: 'Organic Traffic Growth', color: '#0088FF' },
      { value: '-55%', label: 'Cost per Lead', color: '#9C27FF' },
      { value: '92%', label: 'Client Retention', color: '#FF6B35' },
    ],
    faq: [
      { q: 'What\'s the minimum budget for digital marketing?', a: 'We work with businesses of all sizes. Our marketing retainers start at ₹25,000/month for small businesses, scaling up for enterprise campaigns.' },
      { q: 'How soon will I see results?', a: 'Paid campaigns show results within 1-2 weeks. SEO typically takes 3-6 months for significant organic growth. We set realistic expectations upfront.' },
      { q: 'Do you handle creative design too?', a: 'Yes! Our in-house design team creates all ad creatives, landing pages, social media graphics, and video content.' },
    ],
    testimonials: [
      { name: 'Priya Agarwal', role: 'CMO, UrbanClap Services', quote: 'Botzo\'s marketing team generated 3,200 qualified leads in our first month. Their performance ad strategy is incredibly data-driven.', color: '#00E676' },
    ],
    relatedLinks: [
      { icon: '🔍', title: 'SEO Services', desc: 'Organic search optimization', href: '/services/seo' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'WhatsApp broadcast marketing', href: '/platform/bulk-campaigns' },
      { icon: '🛍️', title: 'Ecommerce', desc: 'D2C marketing automation', href: '/solutions/ecommerce' },
      { icon: '💻', title: 'Website Development', desc: 'High-converting landing pages', href: '/services/website-development' },
    ],
  },

  'seo': {
    slug: 'seo', category: 'services', title: 'SEO Services',
    overline: 'Organic Growth', heroTitle: 'Search Engine', heroHighlight: 'Optimization',
    gradient: ['#36C5F0', '#0088FF'],
    heroDesc: 'Dominate search rankings with technical SEO, content strategy, and authority building. We drive sustainable organic traffic that compounds over time.',
    features: [
      { icon: '🔧', title: 'Technical SEO', desc: 'Site speed optimization, Core Web Vitals, structured data, crawlability, indexation, and mobile-first improvements.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '📝', title: 'Content Strategy', desc: 'Keyword research, topic clusters, blog calendars, and SEO-optimized content that ranks and converts.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '🔗', title: 'Link Building', desc: 'White-hat backlink acquisition through guest posts, digital PR, and authoritative directory submissions.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '📍', title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, review management, and map pack visibility.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
    ],
    steps: [
      { number: '01', title: 'Site Audit', desc: 'Comprehensive technical and content audit to identify gaps and opportunities.' },
      { number: '02', title: 'Keyword Mapping', desc: 'Research and map target keywords to pages with search intent alignment.' },
      { number: '03', title: 'On-Page + Content', desc: 'Optimize existing pages and create new content targeting high-value keywords.' },
      { number: '04', title: 'Authority Building', desc: 'Build domain authority through strategic link building and digital PR.' },
    ],
    benefits: [
      { value: '+340%', label: 'Organic Traffic', color: '#36C5F0' },
      { value: 'Page 1', label: 'Ranking for 85% Keywords', color: '#0088FF' },
      { value: '+180%', label: 'Lead Generation', color: '#25D366' },
      { value: '6 months', label: 'Average Time to Results', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '📈', title: 'Digital Marketing', desc: 'Full marketing strategy', href: '/services/digital-marketing' },
      { icon: '💻', title: 'Website Development', desc: 'SEO-optimized web builds', href: '/services/website-development' },
      { icon: '🎯', title: 'Performance Marketing', desc: 'Paid + organic combo', href: '/services/performance-marketing' },
    ],
  },

  'performance-marketing': {
    slug: 'performance-marketing', category: 'services', title: 'Performance Marketing',
    overline: 'Paid Advertising', heroTitle: 'Performance', heroHighlight: 'Marketing & Ads',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'ROI-focused advertising across Meta, Google, LinkedIn, and YouTube. Every rupee tracked, optimized, and accountable.',
    features: [
      { icon: '📱', title: 'Meta Ads', desc: 'Facebook & Instagram campaigns with advanced targeting, lookalike audiences, and dynamic creative optimization.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🔍', title: 'Google Ads', desc: 'Search, Shopping, Display, and YouTube campaigns. Smart bidding, quality score optimization, and conversion tracking.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🎯', title: 'Retargeting', desc: 'Dynamic retargeting campaigns that bring back visitors with personalized product ads and offers.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📊', title: 'Attribution & Analytics', desc: 'Multi-touch attribution, UTM tracking, conversion APIs, and custom reporting dashboards.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    steps: [
      { number: '01', title: 'Audience Research', desc: 'Define ideal customer profiles, buyer personas, and targeting parameters.' },
      { number: '02', title: 'Creative Production', desc: 'Design scroll-stopping ad creatives, videos, and landing pages.' },
      { number: '03', title: 'Launch & Test', desc: 'Deploy campaigns with A/B testing across audiences, creatives, and placements.' },
      { number: '04', title: 'Optimize & Scale', desc: 'Daily optimization, budget reallocation, and scaling winning campaigns.' },
    ],
    benefits: [
      { value: '5.8x', label: 'Average ROAS', color: '#FF6B35' },
      { value: '-62%', label: 'Cost per Acquisition', color: '#0088FF' },
      { value: '3.2M+', label: 'Ads Managed Monthly', color: '#9C27FF' },
      { value: '47%', label: 'CTR Improvement', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '📈', title: 'Digital Marketing', desc: 'Full-funnel strategy', href: '/services/digital-marketing' },
      { icon: '👥', title: 'Social Media Marketing', desc: 'Organic social growth', href: '/services/social-media-marketing' },
      { icon: '📢', title: 'Bulk Campaigns', desc: 'WhatsApp post-click nurture', href: '/platform/bulk-campaigns' },
    ],
  },

  'social-media-marketing': {
    slug: 'social-media-marketing', category: 'services', title: 'Social Media Marketing',
    overline: 'Brand Building', heroTitle: 'Social Media', heroHighlight: 'Brand Strategy',
    gradient: ['#E4405F', '#9C27FF'],
    heroDesc: 'Build a powerful social media presence that drives engagement, builds brand loyalty, and generates leads. Instagram, Facebook, LinkedIn, and YouTube — managed professionally.',
    features: [
      { icon: '🎨', title: 'Content Design', desc: 'Professional social media creatives, reels, stories, and carousel posts designed by our in-house team.', iconBg: 'rgba(228,64,95,0.1)', iconColor: '#E4405F' },
      { icon: '📅', title: 'Content Calendar', desc: 'Strategic posting schedules aligned with trending topics, seasonal events, and your marketing goals.', iconBg: 'rgba(228,64,95,0.1)', iconColor: '#E4405F' },
      { icon: '💬', title: 'Community Management', desc: 'Respond to comments, DMs, and mentions. Build an engaged community around your brand.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📊', title: 'Growth Analytics', desc: 'Track follower growth, engagement rates, reach, and content performance with monthly reports.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    steps: [
      { number: '01', title: 'Brand Audit', desc: 'Analyze your current social presence, competitor landscape, and audience demographics.' },
      { number: '02', title: 'Strategy & Calendar', desc: 'Create a content strategy with posting calendar, content pillars, and tone guidelines.' },
      { number: '03', title: 'Content Creation', desc: 'Design and publish professional content across all platforms consistently.' },
      { number: '04', title: 'Engage & Grow', desc: 'Community management, influencer collaborations, and growth campaigns.' },
    ],
    benefits: [
      { value: '3x', label: 'Engagement Rate', color: '#E4405F' },
      { value: '+500%', label: 'Follower Growth', color: '#9C27FF' },
      { value: '30+', label: 'Posts per Month', color: '#0088FF' },
      { value: '4.8/5', label: 'Client Rating', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '📸', title: 'Instagram Automation', desc: 'Automate DMs from social', href: '/platform/instagram-automation' },
      { icon: '📈', title: 'Digital Marketing', desc: 'Full marketing ecosystem', href: '/services/digital-marketing' },
      { icon: '✨', title: 'UI/UX Design', desc: 'Brand visual identity', href: '/services/ui-ux-design' },
    ],
  },

  'website-development': {
    slug: 'website-development', category: 'services', title: 'Website Development',
    overline: 'Web Engineering', heroTitle: 'Premium', heroHighlight: 'Website Development',
    gradient: ['#B84DFF', '#7B1FA2'],
    heroDesc: 'Build lightning-fast, SEO-optimized websites that convert visitors into customers. From landing pages to complex web applications — engineered for performance.',
    featuresOverline: 'What We Build',
    featuresTitle: 'Web Solutions That <span class="text-gradient">Convert</span>',
    features: [
      { icon: '🏠', title: 'Landing Pages', desc: 'High-converting landing pages optimized for ad campaigns, product launches, and lead generation with A/B testing.', iconBg: 'rgba(184,77,255,0.1)', iconColor: '#B84DFF' },
      { icon: '🏢', title: 'Corporate Websites', desc: 'Professional multi-page websites with CMS, blog, team pages, and contact forms. Fully responsive.', iconBg: 'rgba(184,77,255,0.1)', iconColor: '#B84DFF' },
      { icon: '⚡', title: 'Web Applications', desc: 'Custom SaaS dashboards, admin panels, booking systems, and business tools built with React & Next.js.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🔍', title: 'SEO Architecture', desc: 'Built-in SEO from day one — structured data, meta optimization, Core Web Vitals, and sitemap generation.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
      { icon: '📱', title: 'Mobile-First Design', desc: 'Every website is designed mobile-first and tested across all devices and browsers.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '🚀', title: 'Performance First', desc: 'Sub-2 second load times with modern frameworks, CDN deployment, and image optimization.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
    ],
    steps: [
      { number: '01', title: 'Discovery', desc: 'Understand your goals, audience, content requirements, and competitive landscape.' },
      { number: '02', title: 'Design & UX', desc: 'Wireframes, mockups, and interactive prototypes reviewed with your team.' },
      { number: '03', title: 'Development', desc: 'Clean, modern code with React/Next.js. CMS integration and responsive build.' },
      { number: '04', title: 'Launch & Support', desc: 'Deployment, testing, SEO setup, analytics integration, and ongoing support.' },
    ],
    benefits: [
      { value: '<1.5s', label: 'Average Load Time', color: '#B84DFF' },
      { value: '100/100', label: 'Lighthouse Score', color: '#25D366' },
      { value: '3x', label: 'Conversion Improvement', color: '#0088FF' },
      { value: '24/7', label: 'Post-Launch Support', color: '#FF6B35' },
    ],
    faq: [
      { q: 'What tech stack do you use?', a: 'We primarily use React, Next.js, and Vite for frontend. For CMS, we work with Strapi, Sanity, or WordPress depending on your needs. Hosting on Vercel, AWS, or your preferred provider.' },
      { q: 'How long does a website project take?', a: 'Landing pages: 1-2 weeks. Corporate websites: 3-5 weeks. Complex web applications: 6-12 weeks. We provide detailed timelines during discovery.' },
      { q: 'Do you provide ongoing maintenance?', a: 'Yes! We offer monthly maintenance plans that include security updates, performance monitoring, content updates, and technical support.' },
    ],
    testimonials: [
      { name: 'Vikram Reddy', role: 'CEO, TechVista Solutions', quote: 'Our new website loads in under 2 seconds and conversions jumped 180% in the first month. Botzo\'s development team is exceptional.', color: '#B84DFF' },
    ],
    relatedLinks: [
      { icon: '🛒', title: 'Ecommerce Development', desc: 'Online store builds', href: '/services/ecommerce-development' },
      { icon: '✨', title: 'UI/UX Design', desc: 'Premium design systems', href: '/services/ui-ux-design' },
      { icon: '🔍', title: 'SEO Services', desc: 'Rank from day one', href: '/services/seo' },
      { icon: '📈', title: 'Digital Marketing', desc: 'Drive traffic to your site', href: '/services/digital-marketing' },
    ],
  },

  'ecommerce-development': {
    slug: 'ecommerce-development', category: 'services', title: 'Ecommerce Development',
    overline: 'Online Commerce', heroTitle: 'Ecommerce', heroHighlight: 'Store Development',
    gradient: ['#FF6B35', '#E55100'],
    heroDesc: 'Build high-performance online stores with cart, checkout, payment integration, inventory management, and WhatsApp commerce capabilities.',
    features: [
      { icon: '🛒', title: 'Shopify & Custom Stores', desc: 'Shopify themes, WooCommerce setups, or fully custom ecommerce platforms built to your specifications.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '💳', title: 'Payment Gateway', desc: 'Razorpay, Stripe, PayU, and UPI integration. Multiple currency support and EMI options.', iconBg: 'rgba(255,107,53,0.1)', iconColor: '#FF6B35' },
      { icon: '📦', title: 'Inventory Management', desc: 'Real-time stock tracking, low-stock alerts, multi-warehouse support, and automatic catalog sync.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '💬', title: 'WhatsApp Commerce', desc: 'Product catalogs, order tracking, and checkout flows directly in WhatsApp conversations.', iconBg: 'rgba(37,211,102,0.1)', iconColor: '#25D366' },
    ],
    steps: [
      { number: '01', title: 'Platform Selection', desc: 'Choose the right platform based on your catalog size, budget, and growth plans.' },
      { number: '02', title: 'Design & Catalog', desc: 'Custom theme design and product catalog setup with SEO-optimized listings.' },
      { number: '03', title: 'Payment & Shipping', desc: 'Integrate payment gateways, shipping providers, and tax calculations.' },
      { number: '04', title: 'Launch & Grow', desc: 'Go live with marketing automation, abandoned cart recovery, and growth tools.' },
    ],
    benefits: [
      { value: '2.8x', label: 'Revenue Growth', color: '#FF6B35' },
      { value: '-35%', label: 'Cart Abandonment', color: '#0088FF' },
      { value: '99.9%', label: 'Uptime SLA', color: '#25D366' },
      { value: '<3s', label: 'Page Load Speed', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '🛍️', title: 'Ecommerce Solutions', desc: 'Industry automation', href: '/solutions/ecommerce' },
      { icon: '💳', title: 'Payment Integration', desc: 'In-chat checkout', href: '/platform/payment-integration' },
      { icon: '💻', title: 'Website Development', desc: 'Landing pages & sites', href: '/services/website-development' },
    ],
  },

  'mobile-app-development': {
    slug: 'mobile-app-development', category: 'services', title: 'Mobile App Development',
    overline: 'Mobile Engineering', heroTitle: 'Mobile App', heroHighlight: 'Development',
    gradient: ['#36C5F0', '#0088FF'],
    heroDesc: 'Native iOS and Android apps with fluid animations, push notifications, offline support, and API integrations. Cross-platform with React Native or Flutter.',
    features: [
      { icon: '🍏', title: 'iOS Development', desc: 'Native Swift apps with Apple design guidelines, App Store optimization, and seamless iOS ecosystem integration.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '🤖', title: 'Android Development', desc: 'Native Kotlin apps with Material Design, Play Store optimization, and deep Android platform integration.', iconBg: 'rgba(54,197,240,0.1)', iconColor: '#36C5F0' },
      { icon: '🔄', title: 'Cross-Platform', desc: 'React Native and Flutter apps that run on both iOS and Android from a single codebase.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
      { icon: '🔔', title: 'Push Notifications', desc: 'Targeted push campaigns, in-app messaging, and engagement triggers integrated with your automation stack.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
    ],
    steps: [
      { number: '01', title: 'Concept & UX', desc: 'App concept validation, user flows, wireframes, and interactive prototypes.' },
      { number: '02', title: 'Design System', desc: 'Pixel-perfect UI design with brand-aligned components and micro-interactions.' },
      { number: '03', title: 'Development', desc: 'Agile sprints with weekly demos. API integration, testing, and performance optimization.' },
      { number: '04', title: 'Store Launch', desc: 'App Store and Play Store submission, ASO, and post-launch monitoring.' },
    ],
    benefits: [
      { value: '4.8★', label: 'Average App Rating', color: '#36C5F0' },
      { value: '<3mo', label: 'Time to Market', color: '#0088FF' },
      { value: '60fps', label: 'Smooth Animations', color: '#25D366' },
      { value: '99.5%', label: 'Crash-Free Rate', color: '#9C27FF' },
    ],
    relatedLinks: [
      { icon: '✨', title: 'UI/UX Design', desc: 'Premium app interfaces', href: '/services/ui-ux-design' },
      { icon: '💻', title: 'Website Development', desc: 'Companion web apps', href: '/services/website-development' },
      { icon: '💬', title: 'WhatsApp API', desc: 'In-app chat integration', href: '/platform/whatsapp-api' },
    ],
  },

  'ui-ux-design': {
    slug: 'ui-ux-design', category: 'services', title: 'UI/UX Design',
    overline: 'Design Studio', heroTitle: 'Premium', heroHighlight: 'UI/UX Design',
    gradient: ['#9C27FF', '#E040FB'],
    heroDesc: 'Craft intuitive, beautiful interfaces that delight users and drive business results. From wireframes to polished design systems — every pixel matters.',
    features: [
      { icon: '🎨', title: 'Visual Design', desc: 'Stunning interfaces with cohesive color palettes, typography systems, and micro-interactions that feel premium.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '🧠', title: 'UX Research', desc: 'User interviews, journey mapping, heatmap analysis, and usability testing to inform design decisions.', iconBg: 'rgba(156,39,255,0.1)', iconColor: '#9C27FF' },
      { icon: '📐', title: 'Design Systems', desc: 'Reusable component libraries with design tokens, pattern libraries, and documentation for scalable products.', iconBg: 'rgba(224,64,251,0.1)', iconColor: '#E040FB' },
      { icon: '✨', title: 'Micro-Interactions', desc: 'Hover effects, loading states, transitions, and feedback animations that make interfaces feel alive.', iconBg: 'rgba(0,136,255,0.1)', iconColor: '#0088FF' },
    ],
    steps: [
      { number: '01', title: 'Research & Discovery', desc: 'Understand users, business goals, and competitive landscape through data and interviews.' },
      { number: '02', title: 'Wireframe & Prototype', desc: 'Low-fidelity wireframes to validate structure, then interactive prototypes for testing.' },
      { number: '03', title: 'Visual Design', desc: 'High-fidelity mockups with design system components, ready for development.' },
      { number: '04', title: 'Handoff & QA', desc: 'Developer handoff with specs, assets, and design QA during implementation.' },
    ],
    benefits: [
      { value: '+85%', label: 'User Satisfaction', color: '#9C27FF' },
      { value: '2.5x', label: 'Conversion Lift', color: '#E040FB' },
      { value: '-40%', label: 'Support Tickets', color: '#0088FF' },
      { value: '100%', label: 'Figma Handoff', color: '#25D366' },
    ],
    relatedLinks: [
      { icon: '💻', title: 'Website Development', desc: 'We build what we design', href: '/services/website-development' },
      { icon: '📱', title: 'Mobile App Development', desc: 'App UI/UX design', href: '/services/mobile-app-development' },
      { icon: '👥', title: 'Social Media Marketing', desc: 'Brand visual identity', href: '/services/social-media-marketing' },
    ],
  },
};
