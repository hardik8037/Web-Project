/* ═══════════════════════════════════════════════════
   MICROSOFT CLARITY PROVIDER
   ═══════════════════════════════════════════════════ */

let isInitialized = false;

export function initClarity(id) {
  if (isInitialized || !id) return;
  
  const loadScript = () => {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.defer=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", id);
    
    isInitialized = true;
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadScript);
  } else {
    setTimeout(loadScript, 100);
  }
}

export function trackClarityEvent(payload) {
  if (!isInitialized || !window.clarity) return;
  
  // Clarity accepts custom tags and events
  window.clarity("set", payload.category, payload.action);
  if (payload.event === 'PAGE_VIEW') {
    // Custom page view trigger if necessary
    window.clarity("upgrade", "page_view");
  }
}
