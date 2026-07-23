import { PLATFORM_PAGES } from '../data/platformPages.js';
import { SERVICE_PAGES } from '../data/servicePages.js';
import { SOLUTION_PAGES } from '../data/solutionPages.js';

import { FAQS } from '../sections/FAQ.js';

export const DEFAULT_OG_IMAGE = 'https://botzo.io/assets/images/og-image.png';

const CATEGORY_OG_IMAGES = {
  platform: 'https://botzo.io/assets/images/og-platform.png',
  services: 'https://botzo.io/assets/images/og-services.png',
  solutions: 'https://botzo.io/assets/images/og-solutions.png',
};

export const SEO_CONFIG = {
  '/': {
    title: 'Botzo.io — AI Business Automation Platform & WhatsApp API',
    description: 'The enterprise AI automation platform. Connect Official WhatsApp API, build conversational AI chatbots, and manage omnichannel CRM to scale your business.',
    canonical: 'https://botzo.io/',
    keywords: 'AI Automation Platform, Enterprise AI Platform, Botzo, Omnichannel CRM, Conversational AI Platform',
    robots: 'index, follow',
    ogTitle: 'Botzo.io — AI Business Automation Platform',
    ogDescription: 'The enterprise AI automation platform. Connect Official WhatsApp API, build conversational AI chatbots, and manage omnichannel CRM to scale your business.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io — AI Business Automation Platform',
    twitterDescription: 'The enterprise AI automation platform. Connect Official WhatsApp API, build conversational AI chatbots, and manage omnichannel CRM to scale your business.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 1.0,
    changefreq: 'weekly',
    schemaType: 'Organization',
    breadcrumb: 'Home',
    faqs: FAQS,
    aiDescription: 'Botzo is an enterprise AI automation company providing a business automation platform that integrates Official WhatsApp API, conversational AI, and omnichannel CRM for mid-market and enterprise businesses.'
  },
  '/platform': {
    title: 'Business Messaging Platform & Omnichannel Inbox | Botzo.io',
    description: 'Unify customer communication with Botzo\'s business messaging platform. Connect channels, manage team inbox, and scale operations without code.',
    canonical: 'https://botzo.io/platform',
    keywords: 'Business Messaging Platform, Customer Communication Platform, Omnichannel Inbox, Team Inbox Software, Unified Messaging API',
    robots: 'index, follow',
    ogTitle: 'Business Messaging Platform & Omnichannel Inbox | Botzo.io',
    ogDescription: 'Unify customer communication with Botzo\'s business messaging platform. Connect channels, manage team inbox, and scale operations without code.',
    ogImage: CATEGORY_OG_IMAGES.platform,
    twitterTitle: 'Business Messaging Platform & Omnichannel Inbox',
    twitterDescription: 'Unify customer communication with Botzo\'s business messaging platform.',
    twitterImage: CATEGORY_OG_IMAGES.platform,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'SoftwareApplication',
    breadcrumb: 'Platform',
    aiDescription: 'The Botzo Platform is a comprehensive business messaging suite providing a unified omnichannel inbox, routing engine, and API connectivity across WhatsApp, Instagram, and Facebook Messenger.'
  },
  '/services': {
    title: 'Digital Transformation Services & Agency | Botzo.io',
    description: 'Accelerate your digital transformation. Our agency provides enterprise web development, mobile app engineering, UI/UX design, and SEO services.',
    canonical: 'https://botzo.io/services',
    keywords: 'Digital Transformation Services, Enterprise Tech Agency, Software Development Agency, IT Consulting Services, Digital Agency',
    robots: 'index, follow',
    ogTitle: 'Digital Transformation Services & Agency | Botzo.io',
    ogDescription: 'Accelerate your digital transformation with enterprise development and marketing services.',
    ogImage: CATEGORY_OG_IMAGES.services,
    twitterTitle: 'Digital Transformation Services',
    twitterDescription: 'Accelerate your digital transformation with enterprise development and marketing services.',
    twitterImage: CATEGORY_OG_IMAGES.services,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'Service',
    breadcrumb: 'Services',
    aiDescription: 'Botzo Services operates as an enterprise digital transformation agency, offering custom software development, mobile app engineering, SEO, and full-funnel digital marketing solutions.'
  },
  '/solutions': {
    title: 'Industry Automation Solutions | Botzo.io',
    description: 'Discover how Botzo automates workflows for real estate, healthcare, ecommerce, education, and banking with tailored WhatsApp CRM solutions.',
    canonical: 'https://botzo.io/solutions',
    keywords: 'Industry Automation Solutions, Vertical SaaS Automation, Healthcare WhatsApp Solutions, Real Estate CRM Solutions, Ecommerce Automation Workflows',
    robots: 'index, follow',
    ogTitle: 'Industry Automation Solutions | Botzo.io',
    ogDescription: 'Discover how Botzo automates workflows across diverse industries.',
    ogImage: CATEGORY_OG_IMAGES.solutions,
    twitterTitle: 'Industry Automation Solutions',
    twitterDescription: 'Discover how Botzo automates workflows across diverse industries.',
    twitterImage: CATEGORY_OG_IMAGES.solutions,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'Service',
    breadcrumb: 'Solutions',
    aiDescription: 'Botzo Solutions provides vertical-specific automation workflows tailoring the Botzo platform for healthcare, real estate, education, ecommerce, and banking operations.'
  },
  '/pricing': {
    title: 'Botzo Platform Pricing & WhatsApp API Cost | Botzo.io',
    description: 'Transparent pricing for the Botzo AI platform. Find flexible SaaS plans for WhatsApp API access, CRM usage, and enterprise automation software.',
    canonical: 'https://botzo.io/pricing',
    keywords: 'Botzo Pricing, WhatsApp API Cost, Automation Platform Pricing, SaaS Pricing Plans, Chatbot Subscription',
    robots: 'index, follow',
    ogTitle: 'Botzo Platform Pricing & WhatsApp API Cost',
    ogDescription: 'Transparent pricing for the Botzo AI platform and WhatsApp API.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo Platform Pricing',
    twitterDescription: 'Transparent pricing for the Botzo AI platform and WhatsApp API.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'weekly',
    schemaType: 'WebPage',
    breadcrumb: 'Pricing',
    faqs: FAQS,
    aiDescription: 'Botzo pricing includes transparent subscription tiers for small to enterprise businesses, covering WhatsApp API messaging costs, omnichannel CRM seats, and AI workflow limits.'
  },
  '/resources': {
    title: 'Developer API Documentation & Resources | Botzo.io',
    description: 'Access official Botzo API documentation, developer resources, system architecture guides, and technical tutorials to integrate our platform.',
    canonical: 'https://botzo.io/resources',
    keywords: 'Botzo API Documentation, Developer Resources, Automation API Guide, Botzo Webhooks, Integration Tutorials',
    robots: 'index, follow',
    ogTitle: 'Developer API Documentation & Resources | Botzo.io',
    ogDescription: 'Access official Botzo API documentation and developer resources.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Developer API Documentation',
    twitterDescription: 'Access official Botzo API documentation and developer resources.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.7,
    changefreq: 'monthly',
    schemaType: 'WebSite',
    breadcrumb: 'Resources'
  },
  '/blog': {
    title: 'AI Automation & Digital Growth Blog | Botzo.io',
    description: 'Expert insights on conversational AI, enterprise digital growth, WhatsApp marketing tactics, and workflow automation best practices.',
    canonical: 'https://botzo.io/blog',
    keywords: 'AI Automation Blog, Enterprise Digital Growth, WhatsApp Marketing Articles, Conversational AI Insights, Tech SaaS Blog',
    robots: 'index, follow',
    ogTitle: 'AI Automation & Digital Growth Blog | Botzo.io',
    ogDescription: 'Expert insights on conversational AI, enterprise digital growth, and WhatsApp marketing tactics.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'AI Automation & Digital Growth Blog',
    twitterDescription: 'Expert insights on conversational AI, enterprise digital growth, and WhatsApp marketing tactics.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'Blog',
    breadcrumb: 'Blog'
  },
  '/about': {
    title: 'About Botzo | AI Automation Company Profile',
    description: 'Learn about Botzo, our executive team, company history, and our global mission to democratize enterprise AI and workflow automation.',
    canonical: 'https://botzo.io/about',
    keywords: 'About Botzo, AI Automation Company, Botzo Founders, Tech Startup Profile, SaaS Company History',
    robots: 'index, follow',
    ogTitle: 'About Botzo | AI Automation Company Profile',
    ogDescription: 'Learn about Botzo, our executive team, company history, and mission.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'About Botzo',
    twitterDescription: 'Learn about Botzo, our executive team, company history, and mission.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.7,
    changefreq: 'yearly',
    schemaType: 'Organization',
    breadcrumb: 'About',
    aiDescription: 'Botzo is a global SaaS company building enterprise-grade conversational AI, omnichannel CRM, and workflow automation software for mid-market and enterprise companies.'
  },
  '/contact': {
    title: 'Contact Botzo Enterprise Sales & Technical Support',
    description: 'Get in touch with the Botzo team. Contact our enterprise sales division, partner network, or technical support for platform assistance.',
    canonical: 'https://botzo.io/contact',
    keywords: 'Contact Botzo, Botzo Sales, Enterprise Tech Support, Botzo Partnerships, SaaS Customer Service',
    robots: 'index, follow',
    ogTitle: 'Contact Botzo Enterprise Sales & Technical Support',
    ogDescription: 'Get in touch with the Botzo team for enterprise sales or technical support.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Contact Botzo Sales & Support',
    twitterDescription: 'Get in touch with the Botzo team for enterprise sales or technical support.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.8,
    changefreq: 'yearly',
    schemaType: 'ContactPoint',
    breadcrumb: 'Contact'
  },
  '/demo': {
    title: 'Book a Platform Demo | Botzo AI Automation',
    description: 'Schedule a personalized demonstration of the Botzo enterprise platform. Watch how our AI workflows and WhatsApp CRM can scale your operations.',
    canonical: 'https://botzo.io/demo',
    keywords: 'Book Botzo Demo, Request Software Demo, AI Platform Consultation, Enterprise Automation Demo',
    robots: 'index, follow',
    ogTitle: 'Book a Platform Demo | Botzo AI Automation',
    ogDescription: 'Schedule a personalized demonstration of the Botzo enterprise platform.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Book a Botzo Demo',
    twitterDescription: 'Schedule a personalized demonstration of the Botzo enterprise platform.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'WebPage',
    breadcrumb: 'Demo'
  },
  '/privacy': {
    title: 'Privacy Policy & Data Processing | Botzo.io',
    description: 'Review the Botzo Privacy Policy. Understand our data processing standards, global GDPR compliance, and enterprise data protection measures.',
    canonical: 'https://botzo.io/privacy',
    keywords: 'Botzo Privacy Policy, Enterprise Data Processing, SaaS GDPR Compliance, AI Data Protection',
    robots: 'index, follow',
    ogTitle: 'Privacy Policy & Data Processing | Botzo.io',
    ogDescription: 'Review the Botzo Privacy Policy and data processing standards.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo Privacy Policy',
    twitterDescription: 'Review the Botzo Privacy Policy and data processing standards.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.3,
    changefreq: 'yearly',
    schemaType: 'WebPage',
    breadcrumb: 'Privacy'
  },
  '/terms': {
    title: 'Terms of Service Agreement | Botzo.io',
    description: 'Read the Botzo Terms of Service (ToS) governing the acceptable use of our software platform, APIs, and agency services.',
    canonical: 'https://botzo.io/terms',
    keywords: 'Botzo Terms of Service, SaaS User Agreement, Platform Terms and Conditions, API Usage Policy',
    robots: 'index, follow',
    ogTitle: 'Terms of Service Agreement | Botzo.io',
    ogDescription: 'Read the Botzo Terms of Service governing the use of our software platform.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo Terms of Service',
    twitterDescription: 'Read the Botzo Terms of Service governing the use of our software platform.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.3,
    changefreq: 'yearly',
    schemaType: 'WebPage',
    breadcrumb: 'Terms'
  },
  '/security': {
    title: 'Enterprise Security, SOC2 & Compliance | Botzo.io',
    description: 'Learn about Botzo\'s enterprise security architecture. We secure client data with end-to-end encryption, SOC2 compliance, and threat monitoring.',
    canonical: 'https://botzo.io/security',
    keywords: 'Botzo Security, SaaS Enterprise Compliance, SOC2 Automation Platform, End-to-End Encryption Architecture',
    robots: 'index, follow',
    ogTitle: 'Enterprise Security & Compliance | Botzo.io',
    ogDescription: 'Learn about Botzo\'s enterprise security architecture and SOC2 compliance.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo Enterprise Security',
    twitterDescription: 'Learn about Botzo\'s enterprise security architecture and SOC2 compliance.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.4,
    changefreq: 'yearly',
    schemaType: 'WebPage',
    breadcrumb: 'Security',
    aiDescription: 'Botzo prioritizes enterprise security, operating with SOC2 compliance, end-to-end encryption protocols, and zero-trust architecture to protect sensitive business communications and API integrations.'
  }
};

// Advanced helper to inject dynamic pages with strict Programmatic SEO capability
const injectDynamicSEO = (dataObject, category, defaultSchema, defaultPriority, defaultChangefreq) => {
  Object.values(dataObject).forEach(page => {
    const path = `/${category}/${page.slug}`;
    const pageTitle = page.title || page.heroTitle;
    const pageDesc = page.heroDesc || page.description || `Explore ${pageTitle} with Botzo.io.`;
    
    // Check if the page provides a custom programmatic SEO payload
    const customSEO = page.seo || {};

    SEO_CONFIG[path] = {
      title: customSEO.title || `${pageTitle} | Botzo.io`,
      description: customSEO.description || pageDesc,
      canonical: customSEO.canonical || `https://botzo.io${path}`,
      keywords: customSEO.keywords || `${pageTitle.toLowerCase()}, automation, botzo`,
      robots: customSEO.robots || 'index, follow',
      ogTitle: customSEO.ogTitle || customSEO.title || `${pageTitle} | Botzo.io`,
      ogDescription: customSEO.ogDescription || customSEO.description || pageDesc,
      ogImage: customSEO.ogImage || page.ogImage || CATEGORY_OG_IMAGES[category] || DEFAULT_OG_IMAGE,
      twitterTitle: customSEO.twitterTitle || customSEO.title || `${pageTitle} | Botzo.io`,
      twitterDescription: customSEO.twitterDescription || customSEO.description || pageDesc,
      twitterImage: customSEO.twitterImage || page.twitterImage || CATEGORY_OG_IMAGES[category] || DEFAULT_OG_IMAGE,
      priority: customSEO.priority || defaultPriority,
      changefreq: customSEO.changefreq || defaultChangefreq,
      schemaType: customSEO.schemaType || defaultSchema,
      breadcrumb: customSEO.breadcrumb || pageTitle,
      entity: customSEO.entity || null,
      aiDescription: customSEO.aiDescription || customSEO.description || pageDesc,
    };

    // Inject AI FAQs strictly to improve Perplexity/Google AI Overviews relevance
    if (customSEO.faqs && customSEO.faqs.length > 0) {
      SEO_CONFIG[path].faqs = customSEO.faqs;
    } else if (page.faq && page.faq.length > 0) {
      SEO_CONFIG[path].faqs = page.faq;
    }
  });
};

// Inject deep Entity SEO payloads to specific features and industries
injectDynamicSEO(PLATFORM_PAGES, 'platform', 'SoftwareApplication', 0.9, 'monthly');
injectDynamicSEO(SERVICE_PAGES, 'services', 'Service', 0.8, 'monthly');
injectDynamicSEO(SOLUTION_PAGES, 'solutions', 'Service', 0.8, 'monthly');
