/**
 * Botzo.io UI Components
 * Shadcn structure with Vanilla JS and Tailwind CSS.
 */

import { initDialogs } from './dialog.js';
import { initTabs } from './tabs.js';
import { initAccordions } from './accordion.js';
import { initDropdowns } from './dropdown.js';

export function initUI() {
  initDialogs();
  initTabs();
  initAccordions();
  initDropdowns();
}
