/* ═══════════════════════════════════════════════════
   BOTZO.IO — RESOURCES & BLOG PAGE
   ═══════════════════════════════════════════════════ */

import { createFinalCTA } from '../sections/FinalCTA.js';

const GUIDES = [
  { title: 'The Ultimate Guide to WhatsApp Business API', category: 'API Guide', readTime: '5 min read', desc: 'Discover how to setup official verify indicators, bulk notifications, and interactive quick reply templates to increase your customer conversion rate.' },
  { title: 'Instagram DM Automation: Secret Lead Gen Hack', category: 'Growth Hacks', readTime: '4 min read', desc: 'Learn how to automate responses to mentions, posts, and keywords to build a robust organic lead generation pipeline instantly.' },
  { title: 'RCS vs WhatsApp Business: Which Should You Choose?', category: 'Messaging', readTime: '6 min read', desc: 'A comparative breakdown of messaging features, platform availability, delivery rates, and card formats for bulk campaigns.' },
  { title: '5 Workflow Automations Every Retailer Needs', category: 'Automation', readTime: '8 min read', desc: 'Step-by-step blueprints to automate order confirmations, abandoned checkouts, refund requests, and customer feedback collections.' },
  { title: 'Building a High-Converting Lead Funnel with Chatbots', category: 'Conversion', readTime: '7 min read', desc: 'How to structure your chatbot conversation flows to qualify leads, capture contact information, and schedule sales appointments automatically.' },
  { title: 'QR Ticketing for Events: Complete Setup Guide', category: 'Commerce', readTime: '5 min read', desc: 'End-to-end walkthrough of creating dynamic QR-based entry passes, integrating payment gateways, and managing scanner verification at event venues.' },
];

export function createResources() {
  const container = document.createElement('div');
  container.className = 'page resources-page';

  const cardsHTML = GUIDES.map(g => `
    <div class="glass-card-strong guide-card">
      <div class="guide-card-meta">
        <span class="guide-category">${g.category}</span>
        <span class="guide-read-time">${g.readTime}</span>
      </div>
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
      <a href="#" class="guide-read-link">
        Read Article 
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Resources Hero -->
    <section class="section page-hero resources-hero">
      <div class="container">
        <div class="section-header">
          <span class="text-overline">Knowledge Hub</span>
          <h1 class="heading-hero">Ecosystem Guides &<br><span class="text-gradient">Technical Documentation</span></h1>
          <p class="text-body-lg" style="max-width: 720px; margin: 0 auto;">
            Learn how to automate operations, set up messaging templates, structure marketing funnels, and unlock optimal conversion rates.
          </p>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Guides list -->
    <section class="section resources-list" style="padding: 6rem 0;">
      <div class="container">
        <div class="guides-grid">
          ${cardsHTML}
        </div>
      </div>
    </section>
  `;

  // Append Final CTA
  container.appendChild(createFinalCTA());

  return container;
}
