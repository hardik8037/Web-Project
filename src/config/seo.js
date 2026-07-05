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
    title: 'Botzo.io — WhatsApp API & Business Automation Platform',
    description: 'Botzo.io is the leading WhatsApp API & business automation platform. Automate customer support, scale bulk campaigns, and build intelligent workflows with our enterprise ecosystem.',
    canonical: 'https://botzo.io/',
    keywords: 'WhatsApp API, business automation, chatbot, CRM, workflow automation, bulk messaging, RCS messaging',
    robots: 'index, follow',
    ogTitle: 'Botzo.io — WhatsApp API & Business Automation Platform',
    ogDescription: 'Botzo.io is the leading WhatsApp API & business automation platform. Automate customer support, scale bulk campaigns, and build intelligent workflows.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io — WhatsApp API & Business Automation Platform',
    twitterDescription: 'Automate customer support, scale bulk campaigns, and build intelligent workflows.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 1.0,
    changefreq: 'weekly',
    schemaType: 'WebSite',
    breadcrumb: 'Home',
    faqs: FAQS
  },
  '/platform': {
    title: 'Automation Platform | Botzo.io',
    description: 'Explore the Botzo.io automation platform. Build workflows, manage CRM, and integrate WhatsApp, Facebook, and Instagram seamlessly.',
    canonical: 'https://botzo.io/platform',
    keywords: 'automation platform, workflow builder, CRM software, multi-channel inbox',
    robots: 'index, follow',
    ogTitle: 'Botzo.io Automation Platform',
    ogDescription: 'Explore the Botzo.io automation platform. Build workflows, manage CRM, and integrate seamlessly.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Automation Platform',
    twitterDescription: 'Build workflows, manage CRM, and integrate seamlessly.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'Service',
    breadcrumb: 'Platform'
  },
  '/services': {
    title: 'Digital Agency & Development Services | Botzo.io',
    description: 'Full-service digital marketing, custom web & app development, and bespoke AI implementations by the Botzo.io team.',
    canonical: 'https://botzo.io/services',
    keywords: 'digital marketing agency, custom app development, web development, SEO, PPC',
    robots: 'index, follow',
    ogTitle: 'Digital Agency & Development Services | Botzo.io',
    ogDescription: 'Full-service digital marketing, custom web & app development, and bespoke AI implementations.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Digital Services',
    twitterDescription: 'Full-service digital marketing and custom app development.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'Service',
    breadcrumb: 'Services'
  },
  '/solutions': {
    title: 'Industry-Specific Solutions | Botzo.io',
    description: 'Discover how Botzo.io automates e-commerce, real estate, education, healthcare, and other industries.',
    canonical: 'https://botzo.io/solutions',
    keywords: 'ecommerce automation, real estate CRM, healthcare chatbots, education automation',
    robots: 'index, follow',
    ogTitle: 'Industry-Specific Solutions | Botzo.io',
    ogDescription: 'Discover how Botzo.io automates e-commerce, real estate, education, healthcare, and more.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Industry Solutions',
    twitterDescription: 'Automation tailored for your industry.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'Service',
    breadcrumb: 'Solutions'
  },
  '/pricing': {
    title: 'Plans & Pricing | Botzo.io',
    description: 'Transparent pricing for businesses of all sizes. Start automating your workflow with Botzo.io today.',
    canonical: 'https://botzo.io/pricing',
    keywords: 'botzo pricing, automation software cost, WhatsApp API pricing',
    robots: 'index, follow',
    ogTitle: 'Plans & Pricing | Botzo.io',
    ogDescription: 'Transparent pricing for businesses of all sizes. Start automating today.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Pricing',
    twitterDescription: 'Transparent pricing for businesses of all sizes.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'weekly',
    schemaType: 'FAQ',
    breadcrumb: 'Pricing',
    faqs: FAQS
  },
  '/resources': {
    title: 'Resources Hub | Botzo.io',
    description: 'Documentation, guides, case studies, and tutorials to help you master Botzo.io.',
    canonical: 'https://botzo.io/resources',
    keywords: 'botzo documentation, tutorials, case studies, automation guides',
    robots: 'index, follow',
    ogTitle: 'Resources Hub | Botzo.io',
    ogDescription: 'Documentation, guides, case studies, and tutorials.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Resources',
    twitterDescription: 'Learn to master Botzo.io.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.7,
    changefreq: 'monthly',
    schemaType: 'WebSite',
    breadcrumb: 'Resources'
  },
  '/blog': {
    title: 'Insights & Tutorials Blog | Botzo.io',
    description: 'Latest insights on AI, business automation, digital marketing, and software development.',
    canonical: 'https://botzo.io/blog',
    keywords: 'business automation blog, AI insights, digital marketing tips',
    robots: 'index, follow',
    ogTitle: 'Insights & Tutorials Blog | Botzo.io',
    ogDescription: 'Latest insights on AI, business automation, and digital marketing.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Blog',
    twitterDescription: 'Latest insights on AI and business automation.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.8,
    changefreq: 'weekly',
    schemaType: 'WebSite',
    breadcrumb: 'Blog'
  },
  '/about': {
    title: 'About Our Vision | Botzo.io',
    description: 'Learn about the team behind Botzo.io and our mission to democratize enterprise-grade automation.',
    canonical: 'https://botzo.io/about',
    keywords: 'about botzo, botzo team, automation startup',
    robots: 'index, follow',
    ogTitle: 'About Our Vision | Botzo.io',
    ogDescription: 'Learn about the team behind Botzo.io and our mission.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'About Botzo.io',
    twitterDescription: 'Learn about the team behind Botzo.io.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.7,
    changefreq: 'yearly',
    schemaType: 'Organization',
    breadcrumb: 'About'
  },
  '/contact': {
    title: 'Contact Sales & Support | Botzo.io',
    description: 'Get in touch with the Botzo.io team for enterprise sales, partnership inquiries, or technical support.',
    canonical: 'https://botzo.io/contact',
    keywords: 'contact botzo, botzo support, automation sales',
    robots: 'index, follow',
    ogTitle: 'Contact Sales & Support | Botzo.io',
    ogDescription: 'Get in touch with the Botzo.io team.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Contact Botzo.io',
    twitterDescription: 'Get in touch with the Botzo.io team.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.8,
    changefreq: 'yearly',
    schemaType: 'Organization',
    breadcrumb: 'Contact'
  },
  '/demo': {
    title: 'Schedule a Consultation | Botzo.io',
    description: 'Book a personalized demo to see how Botzo.io can streamline your operations and drive growth.',
    canonical: 'https://botzo.io/demo',
    keywords: 'book botzo demo, schedule consultation, AI automation demo',
    robots: 'index, follow',
    ogTitle: 'Schedule a Consultation | Botzo.io',
    ogDescription: 'Book a personalized demo to see how Botzo.io can streamline your operations.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Book a Botzo.io Demo',
    twitterDescription: 'Schedule a personalized demo.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.9,
    changefreq: 'monthly',
    schemaType: 'WebSite',
    breadcrumb: 'Demo'
  },
  '/privacy': {
    title: 'Privacy Policy | Botzo.io',
    description: 'Read the Botzo.io Privacy Policy to understand how we collect, use, and protect your data.',
    canonical: 'https://botzo.io/privacy',
    keywords: 'botzo privacy policy, data protection, GDPR',
    robots: 'index, follow',
    ogTitle: 'Privacy Policy | Botzo.io',
    ogDescription: 'Read the Botzo.io Privacy Policy.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Privacy Policy',
    twitterDescription: 'Read our Privacy Policy.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.3,
    changefreq: 'yearly',
    schemaType: 'WebSite',
    breadcrumb: 'Privacy'
  },
  '/terms': {
    title: 'Terms of Service | Botzo.io',
    description: 'Read the Terms of Service for using the Botzo.io platform and digital services.',
    canonical: 'https://botzo.io/terms',
    keywords: 'botzo terms of service, user agreement',
    robots: 'index, follow',
    ogTitle: 'Terms of Service | Botzo.io',
    ogDescription: 'Read the Terms of Service for using Botzo.io.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Terms of Service',
    twitterDescription: 'Read our Terms of Service.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.3,
    changefreq: 'yearly',
    schemaType: 'WebSite',
    breadcrumb: 'Terms'
  },
  '/security': {
    title: 'Data Security | Botzo.io',
    description: 'Learn about how Botzo.io secures your data, handles compliance, and protects your infrastructure.',
    canonical: 'https://botzo.io/security',
    keywords: 'botzo security, data compliance, enterprise security',
    robots: 'index, follow',
    ogTitle: 'Data Security | Botzo.io',
    ogDescription: 'Learn about how Botzo.io secures your data.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterTitle: 'Botzo.io Security',
    twitterDescription: 'Learn about how Botzo.io secures your data.',
    twitterImage: DEFAULT_OG_IMAGE,
    priority: 0.4,
    changefreq: 'yearly',
    schemaType: 'WebSite',
    breadcrumb: 'Security'
  }
};

// Helper to inject dynamic pages into the SEO config
const injectDynamicSEO = (dataObject, category, defaultSchema, defaultPriority, defaultChangefreq) => {
  Object.values(dataObject).forEach(page => {
    const path = `/${category}/${page.slug}`;
    const pageTitle = page.title || page.heroTitle;
    const pageDesc = page.heroDesc || page.description || `Explore ${pageTitle} with Botzo.io.`;
    
    SEO_CONFIG[path] = {
      title: `${pageTitle} | Botzo.io`,
      description: pageDesc,
      canonical: `https://botzo.io${path}`,
      keywords: `${pageTitle.toLowerCase()}, automation, botzo`,
      robots: 'index, follow',
      ogTitle: `${pageTitle} | Botzo.io`,
      ogDescription: pageDesc,
      ogImage: page.ogImage || CATEGORY_OG_IMAGES[category] || DEFAULT_OG_IMAGE,
      twitterTitle: `${pageTitle} | Botzo.io`,
      twitterDescription: pageDesc,
      twitterImage: page.twitterImage || CATEGORY_OG_IMAGES[category] || DEFAULT_OG_IMAGE,
      priority: defaultPriority,
      changefreq: defaultChangefreq,
      schemaType: defaultSchema,
      breadcrumb: pageTitle
    };

    if (page.faq && page.faq.length > 0) {
      SEO_CONFIG[path].faqs = page.faq;
    }
  });
};

injectDynamicSEO(PLATFORM_PAGES, 'platform', 'Service', 0.8, 'monthly');
injectDynamicSEO(SERVICE_PAGES, 'services', 'Service', 0.8, 'monthly');
injectDynamicSEO(SOLUTION_PAGES, 'solutions', 'Service', 0.8, 'monthly');
