/* ═══════════════════════════════════════════════════
   EVENT SCHEMA
   Consistent payload generation for all tracking.
   ═══════════════════════════════════════════════════ */

export function buildEventPayload({
  event,
  category,
  action,
  label = '',
  value = 0,
  page = window.location.pathname,
  section = '',
  additionalData = {}
}) {
  return {
    event,
    category,
    action,
    label,
    value,
    page,
    route: window.location.pathname,
    section,
    timestamp: new Date().toISOString(),
    userType: localStorage.getItem('userType') || 'anonymous',
    device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    language: navigator.language || 'en',
    referrer: document.referrer || '',
    ...additionalData
  };
}
