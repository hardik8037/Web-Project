/* ═══════════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════════ */

const FAQS = [
  {
    q: 'What is the WhatsApp Business API, and how does Botzo.io help?',
    a: 'The WhatsApp Business API allows businesses to communicate with customers at scale through WhatsApp. Botzo.io provides official API access with a powerful chatbot builder, automation workflows, bulk messaging, and CRM integration — all through an easy-to-use dashboard without any coding.',
  },
  {
    q: 'How quickly can I get started with Botzo.io?',
    a: 'You can get started in under 15 minutes. Sign up, connect your WhatsApp Business number, set up your first chatbot flow, and start automating. Our onboarding wizard guides you through every step. WhatsApp API verification typically takes 24-48 hours.',
  },
  {
    q: 'Do I need technical knowledge to use the platform?',
    a: 'Not at all! Botzo.io is designed for non-technical users. Our visual workflow builder, drag-and-drop chatbot creator, and pre-built templates make it easy for anyone to set up automation. For advanced integrations, we offer API access and webhook support.',
  },
  {
    q: 'Can I use Botzo.io for WhatsApp, Instagram, and Facebook together?',
    a: 'Yes! Botzo.io provides true omnichannel communication. You can manage WhatsApp, Instagram DMs, Facebook Messenger, and RCS messages from a single unified inbox. All conversations, contacts, and analytics are centralized in one dashboard.',
  },
  {
    q: 'What digital marketing services does Botzo.io offer?',
    a: "Beyond automation, Botzo.io offers comprehensive digital marketing services including SEO, performance marketing (Google & Meta Ads), social media management, content marketing, and email campaigns. Our digital services division operates as a full-service marketing agency.",
  },
  {
    q: 'How is pricing structured? Are there hidden charges?',
    a: 'Our pricing is transparent with no hidden charges. The Automation Platform starts at ₹999/mo with a 14-day free trial. Digital marketing, web development, and app development are priced separately based on scope. WhatsApp API conversation charges are billed by Meta separately at standard rates.',
  },
  {
    q: 'Can Botzo.io integrate with my existing CRM and tools?',
    a: "Yes, Botzo.io integrates with 500+ tools including Shopify, Zoho, HubSpot, Google Sheets, Razorpay, and more. We also offer API access and webhook support for custom integrations. If you need a specific integration, our team can build it for you.",
  },
  {
    q: 'What kind of support do you provide?',
    a: 'We offer tiered support: Starter plans get email support (24h response), Growth plans get priority support with live chat, and Professional/Enterprise plans get a dedicated account manager with phone support. All plans include access to our knowledge base, video tutorials, and community.',
  },
  {
    q: 'Is my data secure with Botzo.io?',
    a: 'Absolutely. We follow enterprise-grade security practices including end-to-end encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data is stored on secure AWS servers with daily backups. Enterprise plans also offer on-premise deployment options.',
  },
  {
    q: 'Do you build custom websites and mobile apps?',
    a: "Yes! Our Digital Services Division includes professional web development (React, Next.js, WordPress, Shopify) and mobile app development (React Native, Flutter). From landing pages to enterprise platforms — we handle design, development, deployment, and maintenance.",
  },
];

export function createFAQ() {
  const section = document.createElement('section');
  section.id = 'faq';
  section.className = 'section faq-section';

  const faqsHTML = FAQS.map((faq, i) => `
    <div class="accordion-item" data-faq="${i}">
      <button class="accordion-trigger" aria-expanded="false" aria-controls="faq-content-${i}">
        <span>${faq.q}</span>
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content" id="faq-content-${i}" role="region">
        <div class="accordion-body">${faq.a}</div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="container">
      <div class="faq-layout">
        <div class="faq-header reveal-left">
          <span class="text-overline">FAQ</span>
          <h2 class="heading-section">Everything You<br>Need to <span class="text-gradient">Know</span></h2>
          <p class="text-body" style="margin-top:1rem;">Can't find what you're looking for? Our team is here to help.</p>
          <a href="#contact" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Contact Support →</a>
        </div>
        <div class="faq-list reveal-right">
          ${faqsHTML}
        </div>
      </div>
    </div>
  `;

  setTimeout(() => initAccordion(section), 0);
  return section;
}

function initAccordion(section) {
  const items = section.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
