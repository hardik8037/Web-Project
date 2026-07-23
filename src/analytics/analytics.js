/* ═══════════════════════════════════════════════════
   CENTRALIZED ANALYTICS SERVICE
   Provider-agnostic interface for all components.
   ═══════════════════════════════════════════════════ */

import { EVENT_TYPES, CATEGORIES } from './constants.js';
import { buildEventPayload } from './events.js';
import { Consent } from './consent.js';
import { initGA4, trackGA4Event } from './providers/ga4.js';
import { initGTM, trackGTMEvent } from './providers/gtm.js';
import { initClarity, trackClarityEvent } from './providers/clarity.js';

let isInitialized = false;
let debugMode = false;

export const Analytics = {
  EVENTS: EVENT_TYPES,
  CATEGORIES,

  initialize: () => {
    debugMode = import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

    if (Consent.hasConsent()) {
      Analytics._bootProviders();
    } else {
      // Listen for consent update
      window.addEventListener('analytics_consent_granted', Analytics._bootProviders, { once: true });
    }
  },

  _bootProviders: () => {
    if (isInitialized) return;
    
    // Load IDs from Env
    const ga4Id = import.meta.env.VITE_GA4_ID;
    const gtmId = import.meta.env.VITE_GTM_ID;
    const clarityId = import.meta.env.VITE_CLARITY_ID;

    if (ga4Id) initGA4(ga4Id);
    if (gtmId) initGTM(gtmId);
    if (clarityId) initClarity(clarityId);

    isInitialized = true;
    
    if (debugMode) {
      console.log('📊 [Analytics Engine] Initialized and active.');
    }
  },

  trackEvent: (eventName, category, action, label = '', additionalData = {}) => {
    if (!Consent.hasConsent()) return;

    const payload = buildEventPayload({
      event: eventName,
      category,
      action,
      label,
      additionalData
    });

    if (debugMode) {
      console.log(`📊 [Analytics] Event: ${eventName}`, payload);
    }

    if (isInitialized) {
      trackGA4Event(payload);
      trackGTMEvent(payload);
      trackClarityEvent(payload);
    }
  },

  trackPage: (path, title) => {
    Analytics.trackEvent(
      EVENT_TYPES.PAGE_VIEW,
      CATEGORIES.NAVIGATION,
      'Page View',
      title,
      { path }
    );
  },

  trackConversion: (conversionName, location) => {
    Analytics.trackEvent(
      EVENT_TYPES.BOOK_DEMO, // Map dynamically as needed
      CATEGORIES.CONVERSION,
      conversionName,
      location
    );
  },

  trackOutboundLink: (url) => {
    Analytics.trackEvent(
      EVENT_TYPES.OUTBOUND_LINK,
      CATEGORIES.ENGAGEMENT,
      'Outbound Click',
      url
    );
  }
};
