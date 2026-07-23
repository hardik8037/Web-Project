/* ═══════════════════════════════════════════════════
   GTM PROVIDER
   ═══════════════════════════════════════════════════ */

let isInitialized = false;

export function initGTM(id) {
  if (isInitialized || !id) return;
  
  const loadScript = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
    document.head.appendChild(script);
    
    isInitialized = true;
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadScript);
  } else {
    setTimeout(loadScript, 100);
  }
}

export function trackGTMEvent(payload) {
  if (!isInitialized || !window.dataLayer) return;
  
  window.dataLayer.push(payload);
}
