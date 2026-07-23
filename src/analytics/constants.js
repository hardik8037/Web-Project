/* ═══════════════════════════════════════════════════
   ANALYTICS CONSTANTS & TAXONOMY
   Centralized event registry to prevent magic strings.
   ═══════════════════════════════════════════════════ */

export const EVENT_TYPES = {
  PAGE_VIEW: 'PAGE_VIEW',
  BOOK_DEMO: 'BOOK_DEMO',
  CONTACT_FORM: 'CONTACT_FORM',
  NEWSLETTER_SUBSCRIBE: 'NEWSLETTER_SUBSCRIBE',
  WHATSAPP_CLICK: 'WHATSAPP_CLICK',
  CALL_CLICK: 'CALL_CLICK',
  EMAIL_CLICK: 'EMAIL_CLICK',
  NAVIGATION_CLICK: 'NAVIGATION_CLICK',
  PRICING_VIEW: 'PRICING_VIEW',
  PLAN_SELECTED: 'PLAN_SELECTED',
  FEATURE_EXPAND: 'FEATURE_EXPAND',
  BLOG_READ: 'BLOG_READ',
  SEARCH: 'SEARCH',
  DOWNLOAD: 'DOWNLOAD',
  VIDEO_PLAY: 'VIDEO_PLAY',
  OUTBOUND_LINK: 'OUTBOUND_LINK'
};

export const CATEGORIES = {
  ENGAGEMENT: 'Engagement',
  CONVERSION: 'Conversion',
  NAVIGATION: 'Navigation',
  FUNNEL: 'Funnel',
  E_COMMERCE: 'E-commerce'
};
