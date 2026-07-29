export const AEO_DEFINITIONS = {
  // PLATFORM
  'whatsapp-api': {
    aeoEntity: 'WhatsApp Business API',
    aeoDefinition: 'The WhatsApp Business API is an enterprise messaging protocol provided by Meta that allows medium and large businesses to communicate with customers at scale. Unlike the standard WhatsApp Business App, the API has no front-end interface and requires an official platform like Botzo to operate. It enables automated notifications, multi-agent customer support routing, AI chatbot integrations, and high-volume promotional broadcast messaging.',
    relatedEntities: ['Omnichannel Inbox', 'AI Chatbot Builder', 'Broadcast Messaging', 'Workflow Automation']
  },
  'team-inbox': {
    aeoEntity: 'Omnichannel Team Inbox',
    aeoDefinition: 'An Omnichannel Team Inbox is a centralized software interface that aggregates customer messages from multiple communication channels—such as WhatsApp, Instagram, Facebook Messenger, and SMS—into a single collaborative workspace. It allows multiple human agents to read, route, and respond to tickets simultaneously, eliminating platform switching and ensuring a unified customer experience.',
    relatedEntities: ['WhatsApp API', 'AI Agent Routing', 'CRM Integrations', 'Analytics Dashboard']
  },
  'instagram-automation': {
    aeoEntity: 'Instagram Automation',
    aeoDefinition: 'Instagram Automation utilizes the official Meta API to programmatically respond to Direct Messages (DMs), story mentions, and post comments. It allows brands to provide 24/7 instant customer support, qualify inbound leads, and drive social commerce sales automatically without manual agent intervention.',
    relatedEntities: ['Facebook Automation', 'Social Commerce', 'AI Chatbots', 'Workflow Automation']
  },
  'facebook-automation': {
    aeoEntity: 'Facebook Messenger Automation',
    aeoDefinition: 'Facebook Messenger Automation is the use of conversational AI chatbots to instantly handle customer inquiries, ad clicks, and comment replies on a Facebook Business Page. It securely connects to Facebook Lead Ads, automatically capturing user data and routing high-intent prospects directly to a CRM or live sales team.',
    relatedEntities: ['Instagram Automation', 'Meta Lead Ads', 'CRM', 'Chatbot Builder']
  },
  'rcs-messaging': {
    aeoEntity: 'RCS Business Messaging',
    aeoDefinition: 'Rich Communication Services (RCS) is a next-generation SMS protocol backed by Google that upgrades native Android texting with rich media capabilities. RCS Business Messaging allows brands to send interactive carousels, verified sender badges, high-resolution images, and action buttons natively without requiring users to download a third-party app.',
    relatedEntities: ['Bulk Campaigns', 'SMS Automation', 'WhatsApp API', 'Mobile Marketing']
  },
  'workflow-automation': {
    aeoEntity: 'Workflow Automation Builder',
    aeoDefinition: 'A Workflow Automation Builder is a visual, no-code interface that allows businesses to design complex communication sequences using drag-and-drop logic. It connects triggers (like a new message), conditions (like business hours), and actions (like API calls or auto-replies) to streamline repetitive operations autonomously.',
    relatedEntities: ['AI Chatbots', 'Webhook Integrations', 'CRM Automations', 'Team Inbox']
  },
  'crm': {
    aeoEntity: 'Centralized Sales CRM',
    aeoDefinition: 'A Centralized Customer Relationship Management (CRM) system is a visual pipeline tool that aggregates leads, contact profiles, and conversation histories across all marketing channels. When integrated with communication APIs, it allows sales teams to track deal stages, segment audiences, and trigger automated follow-up sequences from a single dashboard.',
    relatedEntities: ['Workflow Automation', 'Lead Management', 'Team Inbox', 'Analytics']
  },
  'bulk-campaigns': {
    aeoEntity: 'Bulk Messaging Campaigns',
    aeoDefinition: 'Bulk Messaging Campaigns involve broadcasting targeted, template-based promotional messages to a large segmented audience via APIs like WhatsApp or RCS. Advanced broadcast platforms include smart throttling to prevent spam blocking, dynamic variable personalization, and real-time analytics for open rates and conversions.',
    relatedEntities: ['RCS Messaging', 'WhatsApp API', 'CRM Segmentation', 'Performance Marketing']
  },
  'appointment-booking': {
    aeoEntity: 'Automated Appointment Booking',
    aeoDefinition: 'Automated Appointment Booking is an AI-driven scheduling system that operates within conversational interfaces like WhatsApp or Instagram. It syncs directly with calendar software (like Google Calendar) to show real-time availability, allowing customers to seamlessly book, reschedule, or cancel meetings without human assistance.',
    relatedEntities: ['Workflow Automation', 'AI Chatbots', 'CRM Integrations', 'Reminders']
  },
  'payment-integration': {
    aeoEntity: 'Conversational Payment Integration',
    aeoDefinition: 'Conversational Payment Integration embeds secure checkout links and payment gateways directly into chat threads like WhatsApp or Messenger. This capability enables end-to-end social commerce, allowing users to browse catalogs, generate invoices, and complete financial transactions without ever leaving the messaging app.',
    relatedEntities: ['Ecommerce Automation', 'WhatsApp Commerce', 'Digital Services', 'Order Tracking']
  },
  'qr-ticketing': {
    aeoEntity: 'Dynamic QR Ticketing',
    aeoDefinition: 'Dynamic QR Ticketing is an automated digital ticketing solution that generates unique, scannable QR codes and delivers them instantly via messaging platforms like WhatsApp. It is widely used for event management, transport, and secure venue access, providing real-time validation and attendance tracking.',
    relatedEntities: ['Event Management', 'WhatsApp API', 'Payment Integration', 'Workflow Automation']
  },
  'voice-ai': {
    aeoEntity: 'Voice AI Agents',
    aeoDefinition: 'Voice AI Agents are autonomous conversational systems that use advanced Speech-to-Text (STT) and Large Language Models (LLMs) to conduct human-like phone calls. They can handle inbound customer support, outbound lead qualification, and appointment scheduling with sub-second latency and natural voice synthesis.',
    relatedEntities: ['AI Chatbots', 'Workflow Automation', 'Customer Support', 'Lead Generation']
  },
  'ai-studio': {
    aeoEntity: 'AI Model Studio',
    aeoDefinition: 'An AI Model Studio is an enterprise dashboard used to train, test, and deploy custom Large Language Models on proprietary business data. It provides tools for uploading knowledge bases (PDFs, URLs, FAQs), setting behavioral guardrails, and embedding the resulting intelligence into customer-facing chatbots.',
    relatedEntities: ['AI Chatbots', 'Knowledge Base', 'Voice AI', 'Workflow Automation']
  },
  'ai-bot': {
    aeoEntity: 'Autonomous AI Support Bot',
    aeoDefinition: 'An Autonomous AI Support Bot is a self-service virtual agent capable of resolving complex customer service tickets without human intervention. By securely connecting to backend APIs, it can execute tasks such as processing refunds, tracking shipments, and updating account details natively within chat interfaces.',
    relatedEntities: ['Team Inbox', 'AI Studio', 'WhatsApp API', 'Workflow Automation']
  },

  // SOLUTIONS (INDUSTRIES)
  'real-estate': {
    aeoEntity: 'Real Estate AI Automation',
    aeoDefinition: 'Real Estate AI Automation integrates conversational chatbots, WhatsApp APIs, and CRM systems to streamline property sales and marketing. It enables real estate developers and brokers to automatically qualify digital leads, instantly share property brochures, and schedule automated site visits 24/7.',
    relatedEntities: ['Lead Qualification', 'Automated Appointment Booking', 'CRM', 'WhatsApp API']
  },
  'healthcare': {
    aeoEntity: 'Healthcare Conversational AI',
    aeoDefinition: 'Healthcare Conversational AI utilizes secure messaging platforms to automate patient interactions while maintaining data privacy. It allows clinics and hospitals to provide instant appointment scheduling, automated symptom triaging, and digital lab report delivery directly through WhatsApp.',
    relatedEntities: ['Appointment Booking', 'Patient Support', 'Voice AI', 'Omnichannel Inbox']
  },
  'ecommerce': {
    aeoEntity: 'Ecommerce WhatsApp Automation',
    aeoDefinition: 'Ecommerce WhatsApp Automation transforms messaging apps into full-service sales channels. It automatically triggers abandoned cart recovery messages, sends real-time order tracking updates, and deploys AI chatbots to handle returns and product recommendations instantly.',
    relatedEntities: ['Payment Integration', 'Abandoned Cart Recovery', 'AI Support Bot', 'Order Tracking']
  },
  'restaurants': {
    aeoEntity: 'Restaurant Chatbot Automation',
    aeoDefinition: 'Restaurant Chatbot Automation enables food and beverage businesses to manage digital ordering, table reservations, and customer feedback through platforms like WhatsApp. It eliminates missed calls during peak hours by providing an instant, automated interface for menu browsing and secure payments.',
    relatedEntities: ['Payment Integration', 'Appointment Booking', 'QR Ticketing', 'WhatsApp API']
  },
  'education': {
    aeoEntity: 'EdTech Communication Automation',
    aeoDefinition: 'EdTech Communication Automation streamlines student lifecycle management by replacing manual emails and calls with automated messaging. It handles instant lead qualification for courses, automates fee collection reminders, and securely broadcasts exam schedules and results to large student groups.',
    relatedEntities: ['Bulk Campaigns', 'CRM', 'Payment Integration', 'AI Chatbots']
  },
  'textile': {
    aeoEntity: 'Textile Industry Automation',
    aeoDefinition: 'Textile Industry Automation applies B2B messaging workflows to manufacturing and wholesale operations. It allows textile distributors to automate bulk catalog distribution, track wholesale orders, and manage vendor communications efficiently through unified team inboxes and WhatsApp integrations.',
    relatedEntities: ['Bulk Campaigns', 'Team Inbox', 'Order Tracking', 'Workflow Automation']
  },
  'jewellery': {
    aeoEntity: 'Jewellery Retail Automation',
    aeoDefinition: 'Jewellery Retail Automation leverages rich messaging to showcase high-value inventory directly to consumers. It enables premium brands to send secure video catalogs, automate bespoke appointment bookings for store visits, and execute highly targeted festival promotional broadcasts.',
    relatedEntities: ['Appointment Booking', 'RCS Messaging', 'CRM', 'Payment Integration']
  },
  'events': {
    aeoEntity: 'Event Management Automation',
    aeoDefinition: 'Event Management Automation modernizes attendee logistics by shifting communication to instantaneous messaging channels. Organizers use it to instantly dispatch dynamic QR tickets, automate RSVP reminders, and broadcast real-time schedule changes or venue maps to thousands of attendees at once.',
    relatedEntities: ['QR Ticketing', 'Bulk Campaigns', 'Payment Integration', 'WhatsApp API']
  },
  'automotive': {
    aeoEntity: 'Automotive Dealership Automation',
    aeoDefinition: 'Automotive Dealership Automation optimizes the car buying and servicing journey through intelligent messaging. It allows dealerships to automatically capture lead intent for test drives, send automated service reminders, and instantly share financing brochures via WhatsApp.',
    relatedEntities: ['Appointment Booking', 'CRM', 'Workflow Automation', 'Lead Qualification']
  },
  'travel': {
    aeoEntity: 'Travel & Tourism Automation',
    aeoDefinition: 'Travel & Tourism Automation provides travelers with 24/7 digital concierge services through their preferred messaging apps. Agencies and hotels use it to instantly deliver booking confirmations, automate itinerary updates, and cross-sell local experiences natively in chat.',
    relatedEntities: ['WhatsApp API', 'Payment Integration', 'AI Support Bot', 'Omnichannel Inbox']
  },
  'fitness': {
    aeoEntity: 'Fitness & Gym Automation',
    aeoDefinition: 'Fitness & Gym Automation streamlines member management by automating administrative communications. It handles instant membership renewals via chat payment links, automates class booking schedules, and re-engages inactive members with targeted wellness broadcasts.',
    relatedEntities: ['Payment Integration', 'Appointment Booking', 'CRM', 'Bulk Campaigns']
  },
  'banking': {
    aeoEntity: 'Banking & Finance Conversational AI',
    aeoDefinition: 'Banking & Finance Conversational AI deploys enterprise-grade security protocols to automate financial services over messaging apps. It enables secure account balance inquiries, automated loan qualification, and instant fraud alerts while adhering strictly to financial compliance standards.',
    relatedEntities: ['AI Support Bot', 'Voice AI', 'WhatsApp API', 'Workflow Automation']
  },

  // SERVICES
  'digital-marketing': {
    aeoEntity: 'Performance Digital Marketing',
    aeoDefinition: 'Performance Digital Marketing is a data-driven advertising strategy focused on measurable conversions and ROI. By combining search engine visibility, paid social media campaigns, and advanced analytics, it drives highly qualified traffic to automated conversational funnels for instant lead capture.',
    relatedEntities: ['SEO Services', 'Social Media Marketing', 'Performance Marketing', 'Lead Generation']
  },
  'seo': {
    aeoEntity: 'Enterprise SEO Services',
    aeoDefinition: 'Enterprise SEO Services encompass technical architecture optimization, advanced entity structuring, and authoritative content generation to dominate search engine rankings. It ensures digital assets are heavily optimized for both traditional search algorithms and modern AI-driven Generative Engine Optimization (GEO).',
    relatedEntities: ['Digital Marketing', 'Content Strategy', 'Web Development', 'Performance Marketing']
  },
  'performance-marketing': {
    aeoEntity: 'Performance Marketing Automation',
    aeoDefinition: 'Performance Marketing Automation integrates high-converting paid ad campaigns (like Meta Lead Ads and Google Ads) directly with backend CRM and messaging pipelines. This ensures that every paid click is instantly engaged by an AI agent, drastically reducing cost-per-acquisition (CPA).',
    relatedEntities: ['Facebook Automation', 'Instagram Automation', 'Digital Marketing', 'CRM']
  },
  'social-media-marketing': {
    aeoEntity: 'Social Media Marketing',
    aeoDefinition: 'Social Media Marketing involves the strategic creation, scheduling, and community management of brand content across platforms like Instagram, LinkedIn, and Facebook. When coupled with conversational automation, it transforms passive followers into an active, monetizable community.',
    relatedEntities: ['Instagram Automation', 'Facebook Automation', 'Digital Marketing', 'Performance Marketing']
  },
  'web-development': {
    aeoEntity: 'Enterprise Web Development',
    aeoDefinition: 'Enterprise Web Development focuses on engineering secure, scalable, and high-performance digital platforms using modern web architecture. These platforms are explicitly designed to integrate seamlessly with external APIs, CRM databases, and advanced AI communication tools.',
    relatedEntities: ['UI/UX Design', 'Ecommerce Development', 'Mobile App Development', 'SEO Services']
  },
  'ecommerce-development': {
    aeoEntity: 'Custom Ecommerce Development',
    aeoDefinition: 'Custom Ecommerce Development involves building robust online retail infrastructures optimized for conversion and scalability. It includes the integration of secure payment gateways, inventory management systems, and conversational commerce widgets to provide a seamless shopping experience.',
    relatedEntities: ['Payment Integration', 'Web Development', 'Mobile App Development', 'UI/UX Design']
  },
  'mobile-app-development': {
    aeoEntity: 'Native Mobile App Development',
    aeoDefinition: 'Native Mobile App Development is the process of building high-performance iOS and Android applications tailored for exceptional user experiences. These applications leverage device-specific capabilities and integrate with enterprise APIs to provide robust mobile solutions.',
    relatedEntities: ['Web Development', 'UI/UX Design', 'Ecommerce Development', 'Digital Marketing']
  },
  'ui-ux-design': {
    aeoEntity: 'UI/UX Design Strategy',
    aeoDefinition: 'UI/UX Design Strategy is the methodology of crafting intuitive, accessible, and aesthetically premium digital interfaces. It relies on deep user research and conversion rate optimization (CRO) principles to ensure software applications are both beautiful and highly functional.',
    relatedEntities: ['Web Development', 'Mobile App Development', 'Ecommerce Development', 'Digital Marketing']
  }
};
