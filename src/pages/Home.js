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



export function createHome() {
  const page = document.createElement('div');
  page.className = 'home-page';

  page.appendChild(createHero());

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
