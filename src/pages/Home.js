/* ═══════════════════════════════════════════════════
   BOTZO.IO — HOMEPAGE VIEW
   ═══════════════════════════════════════════════════ */

import { createHero } from '../sections/Hero.js';
import { createIntegrations } from '../sections/Integrations.js';
import { createAutomationPlatform } from '../sections/AutomationPlatform.js';
import { createLiveDemo } from '../sections/LiveDemo.js';
import { createProblemSolution } from '../sections/ProblemSolution.js';
import { createDigitalServices } from '../sections/DigitalServices.js';
import { createUseCases } from '../sections/UseCases.js';
import { createFAQ } from '../sections/FAQ.js';
import { createFinalCTA } from '../sections/FinalCTA.js';

function createDivider() {
  const div = document.createElement('div');
  div.className = 'section-divider';
  return div;
}

function createAEOHome() {
  const section = document.createElement('section');
  section.className = 'section page-aeo';
  section.style.paddingTop = '2rem';
  section.style.paddingBottom = '2rem';
  
  section.innerHTML = `
    <div class="container-wide">
      <article class="aeo-block glass-card" itemscope itemtype="https://schema.org/Organization" style="padding: 2.5rem; max-width: 800px; margin: 0 auto; border-radius: var(--radius-lg); text-align: left; position: relative; z-index: 2;">
        <h2 itemprop="name" style="font-size: 1.6rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-primary);">What is Botzo.io?</h2>
        <div itemprop="description" style="font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary);">
          <p>Botzo is an enterprise-grade AI automation platform and official Meta WhatsApp Business API provider. It enables mid-market and enterprise businesses to scale operations by consolidating customer communications into a unified omnichannel inbox, deploying intelligent AI chatbots for instant support, and automating workflow processes across CRM and marketing channels.</p>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
          <h3 style="font-size: 1rem; margin-bottom: 0.8rem; color: var(--text-primary);">Core Capabilities:</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <span class="badge" style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">WhatsApp API Integration</span>
            <span class="badge" style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">Omnichannel Inbox</span>
            <span class="badge" style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">AI Chatbots</span>
            <span class="badge" style="background: rgba(255,255,255,0.05); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">Workflow Automation</span>
          </div>
        </div>
      </article>
    </div>
  `;
  return section;
}

export function createHome() {
  const page = document.createElement('div');
  page.className = 'home-page';

  page.appendChild(createHero());
  page.appendChild(createAEOHome());
  page.appendChild(createDivider());
  page.appendChild(createIntegrations());
  page.appendChild(createDivider());
  page.appendChild(createAutomationPlatform());
  page.appendChild(createDivider());
  page.appendChild(createLiveDemo());
  page.appendChild(createDivider());
  page.appendChild(createProblemSolution());
  page.appendChild(createDivider());
  page.appendChild(createDigitalServices());
  page.appendChild(createDivider());
  page.appendChild(createUseCases());
  page.appendChild(createDivider());
  page.appendChild(createFAQ());
  page.appendChild(createFinalCTA());

  return page;
}
