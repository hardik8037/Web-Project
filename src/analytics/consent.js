/* ═══════════════════════════════════════════════════
   CONSENT MANAGER
   ═══════════════════════════════════════════════════ */

export const Consent = {
  getConsentState: () => {
    // Check localStorage or cookies for consent state
    // For now, default to true unless explicitly denied to support easy roll-out
    // In strict GDPR environments, this should default to false
    const state = localStorage.getItem('botzo_analytics_consent');
    return state === null ? true : state === 'true';
  },
  
  setConsentState: (granted) => {
    localStorage.setItem('botzo_analytics_consent', granted ? 'true' : 'false');
    if (granted) {
      window.dispatchEvent(new Event('analytics_consent_granted'));
    }
  },

  hasConsent: () => {
    return Consent.getConsentState();
  }
};
