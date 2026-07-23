/* ═══════════════════════════════════════════════════
   GA4 PROVIDER
   ═══════════════════════════════════════════════════ */

let isInitialized = false;

export function initGA4(id) {
  if (isInitialized || !id) return;
  
  // Non-blocking initialization via requestIdleCallback
  const loadScript = () => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id, {
      send_page_view: false // We handle page views manually for SPA
    });
    isInitialized = true;
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadScript);
  } else {
    setTimeout(loadScript, 100);
  }
}

export function trackGA4Event(payload) {
  if (!isInitialized || !window.gtag) return;
  
  window.gtag('event', payload.action, {
    event_category: payload.category,
    event_label: payload.label,
    value: payload.value,
    ...payload
  });
}
