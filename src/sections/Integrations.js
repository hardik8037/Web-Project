/* ═══════════════════════════════════════════════════
   TRUSTED INTEGRATIONS MARQUEE SECTION
   ═══════════════════════════════════════════════════ */

const INTEGRATIONS = [
  { name: 'WhatsApp', color: '#25D366', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>` },
  { name: 'Instagram', color: '#E4405F', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>` },
  { name: 'Facebook', color: '#1877F2', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
  { name: 'Shopify', color: '#96BF48', icon: `<svg width="24" height="28" viewBox="0 0 24 28" fill="#96BF48"><path d="M20.5 5.4c0-.1-.1-.2-.2-.2s-1.6-.1-1.6-.1-1.3-1.3-1.4-1.4c-.1-.1-.3-.1-.4-.1l-2 .5C14.5 3 13.8 2.4 12.9 2.4c-2.1 0-3.1 2.6-3.4 3.9l-2.9.9c-.9.3-.9.3-1 1.2L4 18.2l12 2.2 5.4-1.3s-1-13.5-1-13.7zm-5.3-1L13.4 5c0-.7-.1-1.1-.2-1.6.8.1 1.3.9 1.5 1.5l.5-.5zM12.7 3c.2.5.3 1.2.3 2l-2.7.8c.5-2 1.5-2.6 2.4-2.8zm-.8-.3c.1 0 .2 0 .3.1-.8.4-1.7 1.3-2.1 3.2L8 6.6C8.5 5 9.8 2.7 11.9 2.7z"/><path d="M20.3 5.2l-1.5-.1s-1.3-1.3-1.4-1.4H17l-1 18.5 5.4-1.3S20.3 5.4 20.3 5.2z" opacity=".5"/></svg>` },
  { name: 'Zoho', color: '#D92B2B', icon: `<svg width="40" height="20" viewBox="0 0 60 20"><text x="0" y="16" font-family="Arial" font-weight="bold" font-size="16" fill="#D92B2B">ZOHO</text></svg>` },
  { name: 'HubSpot', color: '#FF7A59', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#FF7A59"><path d="M17.5 8.5v-3a1.5 1.5 0 10-3 0v3a4.5 4.5 0 00-2.47 1.37l-5.89-3.59a1.73 1.73 0 10-.89 1.49l5.7 3.47A4.5 4.5 0 1017.5 8.5zM16 15a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>` },
  { name: 'Google Sheets', color: '#34A853', icon: `<svg width="24" height="28" viewBox="0 0 24 32" fill="none"><rect x="2" y="2" width="20" height="28" rx="2" fill="#34A853" opacity="0.15" stroke="#34A853" stroke-width="1.5"/><line x1="7" y1="10" x2="17" y2="10" stroke="#34A853" stroke-width="1.2"/><line x1="7" y1="15" x2="17" y2="15" stroke="#34A853" stroke-width="1.2"/><line x1="7" y1="20" x2="14" y2="20" stroke="#34A853" stroke-width="1.2"/><line x1="12" y1="8" x2="12" y2="22" stroke="#34A853" stroke-width="1.2"/></svg>` },
  { name: 'IndiaMart', color: '#2468F6', icon: `<svg width="44" height="18" viewBox="0 0 80 18"><text x="0" y="15" font-family="Arial" font-weight="bold" font-size="13" fill="#2468F6">IndiaMart</text></svg>` },
  { name: 'TradeIndia', color: '#0066CC', icon: `<svg width="44" height="18" viewBox="0 0 80 18"><text x="0" y="15" font-family="Arial" font-weight="bold" font-size="12" fill="#0066CC">TradeIndia</text></svg>` },
  { name: 'Razorpay', color: '#528FF0', icon: `<svg width="44" height="18" viewBox="0 0 80 18"><text x="0" y="15" font-family="Arial" font-weight="bold" font-size="12" fill="#528FF0">Razorpay</text></svg>` },
  { name: 'Stripe', color: '#635BFF', icon: `<svg width="44" height="18" viewBox="0 0 60 18"><text x="0" y="15" font-family="Arial" font-weight="bold" font-size="14" fill="#635BFF">Stripe</text></svg>` },
  { name: 'Slack', color: '#E01E5A', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/><path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/><path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/><path d="M15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" fill="#ECB22E"/></svg>` },
  { name: 'Google Analytics', color: '#F9AB00', icon: `<svg width="24" height="28" viewBox="0 0 24 28" fill="none"><rect x="2" y="18" width="5" height="8" rx="1" fill="#F9AB00"/><rect x="9.5" y="11" width="5" height="15" rx="1" fill="#E37400"/><rect x="17" y="4" width="5" height="22" rx="1" fill="#F9AB00"/></svg>` },
  { name: 'Meta Ads', color: '#0081FB', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="#0081FB"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>` },
];

export function createIntegrations() {
  const section = document.createElement('section');
  section.id = 'integrations';
  section.className = 'section integrations-section';
  
  const logosHTML = INTEGRATIONS.map(i => `
    <div class="integration-pill" style="--glow-color: ${i.color}">
      <div class="integration-icon">${i.icon}</div>
      <span class="integration-name">${i.name}</span>
    </div>
  `).join('');

  // Duplicate for seamless loop
  const marqueeContent = logosHTML + logosHTML;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="text-overline">Ecosystem</span>
        <h2 class="heading-section">Seamlessly Integrated With<br><span class="text-gradient">Your Entire Stack</span></h2>
        <p class="text-body-lg">Connect with the tools you already use. 150+ integrations and growing.</p>
      </div>
    </div>
    <div class="marquee-container">
      <div class="marquee-fade-left"></div>
      <div class="marquee-track">${marqueeContent}</div>
      <div class="marquee-fade-right"></div>
    </div>
    <div class="marquee-container" style="margin-top:1.5rem;">
      <div class="marquee-fade-left"></div>
      <div class="marquee-track marquee-track-reverse">${marqueeContent}</div>
      <div class="marquee-fade-right"></div>
    </div>
  `;

  return section;
}
