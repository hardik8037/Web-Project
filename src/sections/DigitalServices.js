/* ═══════════════════════════════════════════════════
   DIGITAL SERVICES DIVISION
   ═══════════════════════════════════════════════════ */

export function createDigitalServices() {
  const section = document.createElement('section');
  section.id = 'services';
  section.className = 'section services-section';

  section.innerHTML = `
    <!-- Ecosystem Transition -->
    <div class="ecosystem-transition">
      <div class="ecosystem-wave"></div>
    </div>

    <div class="container-wide">
      <div class="section-header">
        <span class="text-overline">Digital Services Division</span>
        <h2 class="heading-section">Beyond Automation —<br><span class="text-gradient">Full Digital Transformation</span></h2>
        <p class="text-body-lg">Complete digital services to grow your online presence, from marketing strategy to custom development.</p>
      </div>

      <!-- Digital Marketing -->
      <div class="service-block reveal" style="margin-top: 3rem;">
        <div class="service-block-content">
          <div class="service-badge" style="--badge-color: #FF6B35;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Digital Marketing
          </div>
          <h3 class="heading-subsection">Drive Growth with<br>Data-Driven Marketing</h3>
          <p class="text-body">SEO, performance marketing, social media strategy, and conversion optimization — all backed by real-time analytics and measurable ROI.</p>
          <div class="service-features">
            <span class="service-feature-tag">SEO & Content</span>
            <span class="service-feature-tag">Google & Meta Ads</span>
            <span class="service-feature-tag">Social Media</span>
            <span class="service-feature-tag">Lead Generation</span>
            <span class="service-feature-tag">Analytics & ROI</span>
          </div>
          <a href="/services/digital-marketing" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Explore Marketing →</a>
        </div>
        <div class="service-block-visual">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">Meta Ads Manager</span>
            </div>
            <div class="dashboard-content" style="padding: 1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div style="font-size: 0.8rem; font-weight: 600;">Active Campaigns</div>
                <div style="padding: 0.2rem 0.5rem; background: var(--color-green); color: #000; border-radius: 4px; font-size: 0.6rem; font-weight: 700;">+ Create</div>
              </div>
              <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 0.8rem; margin-bottom: 0.5rem; border-left: 3px solid var(--color-green);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                  <span style="font-size: 0.75rem; font-weight: 600;">Q3 Lead Gen - India</span>
                  <span style="font-size: 0.65rem; color: var(--color-green);">Active</span>
                </div>
                <div style="display: flex; gap: 1rem; font-size: 0.65rem; color: var(--color-dim-text);">
                  <span>Spend: ₹12,500</span>
                  <span>Leads: 243</span>
                  <span>CPA: ₹51</span>
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 0.8rem; margin-bottom: 0.5rem; border-left: 3px solid var(--color-green);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                  <span style="font-size: 0.75rem; font-weight: 600;">Retargeting - Website Visitors</span>
                  <span style="font-size: 0.65rem; color: var(--color-green);">Active</span>
                </div>
                <div style="display: flex; gap: 1rem; font-size: 0.65rem; color: var(--color-dim-text);">
                  <span>Spend: ₹4,200</span>
                  <span>Conversions: 89</span>
                  <span>ROAS: 4.2x</span>
                </div>
              </div>
              <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 0.8rem; border-left: 3px solid var(--color-orange);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                  <span style="font-size: 0.75rem; font-weight: 600;">Brand Awareness - Video</span>
                  <span style="font-size: 0.65rem; color: var(--color-orange);">Learning</span>
                </div>
                <div style="display: flex; gap: 1rem; font-size: 0.65rem; color: var(--color-dim-text);">
                  <span>Spend: ₹1,800</span>
                  <span>Reach: 45K</span>
                  <span>CTR: 3.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider" style="margin:4rem auto;"></div>

      <!-- Web Development -->
      <div class="service-block service-block-reverse reveal">
        <div class="service-block-content">
          <div class="service-badge" style="--badge-color: #0088FF;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0088FF" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            Web Development
          </div>
          <h3 class="heading-subsection">Premium Websites That<br>Convert & Perform</h3>
          <p class="text-body">From stunning landing pages to enterprise ecommerce platforms — built with modern tech, optimized for speed, and designed to convert.</p>
          <div class="service-features">
            <span class="service-feature-tag">React & Next.js</span>
            <span class="service-feature-tag">WordPress</span>
            <span class="service-feature-tag">Shopify</span>
            <span class="service-feature-tag">Ecommerce</span>
            <span class="service-feature-tag">UI/UX Design</span>
          </div>
          <a href="/services/web-development" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Explore Web Dev →</a>
        </div>
        <div class="service-block-visual">
          <div class="dashboard-frame">
            <div class="dashboard-titlebar">
              <span class="dashboard-dot dashboard-dot-red"></span>
              <span class="dashboard-dot dashboard-dot-yellow"></span>
              <span class="dashboard-dot dashboard-dot-green"></span>
              <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">VS Code - page.tsx</span>
            </div>
            <div class="dashboard-content" style="display: flex; background: #0d0d0d;">
              <!-- Code Editor Side -->
              <div style="flex: 1; padding: 1rem; border-right: 1px solid rgba(255,255,255,0.05); font-family: monospace; font-size: 0.6rem; color: #a9b7c6; overflow: hidden;">
                <div style="color: #cc7832;">export default function</div> <span style="color: #ffc66d;">Hero</span>() {<br>
                &nbsp;&nbsp;<div style="color: #cc7832; display: inline;">return</div> (<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #e8bf6a;">main</span> <span style="color: #bababa;">className</span>=<span style="color: #6a8759;">"flex items-center..."</span>&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #e8bf6a;">h1</span> <span style="color: #bababa;">className</span>=<span style="color: #6a8759;">"text-5xl font-bold"</span>&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premium Digital Experience<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color: #e8bf6a;">h1</span>&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #e8bf6a;">Button</span> <span style="color: #bababa;">variant</span>=<span style="color: #6a8759;">"primary"</span>&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get Started<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color: #e8bf6a;">Button</span>&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color: #e8bf6a;">main</span>&gt;<br>
                &nbsp;&nbsp;);<br>
                }
              </div>
              <!-- Preview Side -->
              <div style="flex: 1; padding: 1rem; background: #050505; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                <div style="font-size:0.8rem;font-weight:700;line-height:1.2;margin-bottom:0.5rem;color:#fff;">Premium<br><span style="color:var(--color-primary-light);">Digital Experience</span></div>
                <div style="padding:0.3rem 0.8rem;background:var(--color-primary);border-radius:4px;font-size:0.55rem;color:#fff;font-weight:600;">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider" style="margin:4rem auto;"></div>

      <!-- App Development -->
      <div class="service-block reveal">
        <div class="service-block-content">
          <div class="service-badge" style="--badge-color: #25D366;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
            App Development
          </div>
          <h3 class="heading-subsection">Cross-Platform Apps<br>Built for Scale</h3>
          <p class="text-body">Native iOS, Android, and cross-platform apps — from MVP to enterprise-grade solutions with beautiful UI and robust backends.</p>
          <div class="service-features">
            <span class="service-feature-tag">React Native</span>
            <span class="service-feature-tag">Flutter</span>
            <span class="service-feature-tag">iOS & Android</span>
            <span class="service-feature-tag">API Integration</span>
            <span class="service-feature-tag">App Store Deploy</span>
          </div>
          <a href="/services/mobile-app-development" class="btn btn-glass btn-sm" style="margin-top:1.5rem;">Explore App Dev →</a>
        </div>
        <div class="service-block-visual">
          <div class="app-preview-wrapper" style="display:flex; gap: 1.5rem; align-items: center; justify-content: center;">
            <div class="app-phone app-phone-1">
              <div class="phone-mockup" style="width:180px;height:360px;border-radius:24px;padding:5px;">
                <div class="phone-notch" style="width:50px;height:16px;border-radius:0 0 10px 10px;margin-bottom:4px;"></div>
                <div class="phone-screen" style="border-radius:19px; background: #0a0a0c; display: flex; flex-direction: column;">
                  <!-- App Store Listing Mockup -->
                  <div style="height: 140px; background: linear-gradient(135deg, rgba(37,211,102,0.2), rgba(0,0,0,0)); display: flex; align-items: center; justify-content: center;">
                    <div style="width: 60px; height: 60px; background: var(--color-green); border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(37,211,102,0.3);">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                  </div>
                  <div style="padding: 1rem; flex: 1;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: #fff;">SaaS Mobile App</div>
                    <div style="font-size: 0.6rem; color: var(--color-dim-text); margin-bottom: 0.8rem;">Productivity & Business</div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                      <div style="padding: 0.35rem 0; flex: 1; background: var(--color-green); color: #000; font-size: 0.65rem; font-weight: 700; text-align: center; border-radius: 20px;">GET</div>
                      <div style="width: 26px; height: 26px; border-radius: 50%; border: 1px solid var(--color-green); display: flex; align-items: center; justify-content: center;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
                      </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding-top: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05);">
                      <div style="text-align: center;">
                        <div style="font-size: 0.6rem; color: var(--color-dim-text);">RATINGS</div>
                        <div style="font-size: 0.75rem; font-weight: 700; color: #fff;">4.9 ★</div>
                      </div>
                      <div style="text-align: center;">
                        <div style="font-size: 0.6rem; color: var(--color-dim-text);">AGE</div>
                        <div style="font-size: 0.75rem; font-weight: 700; color: #fff;">4+</div>
                      </div>
                      <div style="text-align: center;">
                        <div style="font-size: 0.6rem; color: var(--color-dim-text);">CHART</div>
                        <div style="font-size: 0.75rem; font-weight: 700; color: #fff;">#1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="app-phone app-phone-2" style="transform: translateY(20px) scale(0.95); opacity: 0.8;">
              <div class="phone-mockup" style="width:180px;height:360px;border-radius:24px;padding:5px;">
                <div class="phone-notch" style="width:50px;height:16px;border-radius:0 0 10px 10px;margin-bottom:4px;"></div>
                <div class="phone-screen" style="border-radius:19px; background: #050505; padding: 1rem;">
                  <!-- Detailed App Dashboard Mockup -->
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      <div style="width: 24px; height: 24px; border-radius: 50%; background: linear-gradient(135deg, var(--color-green), var(--color-blue)); display: flex; justify-content: center; align-items: center; color: #000; font-size: 0.6rem; font-weight: bold;">A</div>
                      <div>
                        <div style="font-size: 0.5rem; color: var(--color-dim-text);">Good morning,</div>
                        <div style="font-size: 0.65rem; font-weight: 700; color: #fff;">Alex CEO</div>
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                  </div>
                  
                  <div style="background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.2); border-radius: 12px; padding: 0.8rem; margin-bottom: 1rem;">
                    <div style="font-size: 0.55rem; color: var(--color-dim-text); margin-bottom: 0.2rem;">Total Revenue</div>
                    <div style="font-size: 1.1rem; font-weight: 800; color: #fff; margin-bottom: 0.4rem;">$124,500.00</div>
                    <svg viewBox="0 0 100 30" style="width:100%;height:30px;"><path d="M0 25 Q 10 5, 20 20 T 40 10 T 60 25 T 80 5 T 100 15" fill="none" stroke="var(--color-green)" stroke-width="2"/></svg>
                  </div>
                  
                  <div style="font-size: 0.65rem; font-weight: 700; color: #fff; margin-bottom: 0.6rem;">Quick Actions</div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.4rem; margin-bottom: 1rem;">
                    <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 0.5rem; text-align: center;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2" style="margin: 0 auto 0.3rem;"><path d="M12 5v14M5 12h14"/></svg>
                      <div style="font-size: 0.5rem; color: #fff;">Invoice</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 0.5rem; text-align: center;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2" style="margin: 0 auto 0.3rem;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      <div style="font-size: 0.5rem; color: #fff;">History</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 0.5rem; text-align: center;">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" stroke-width="2" style="margin: 0 auto 0.3rem;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <div style="font-size: 0.5rem; color: #fff;">Clients</div>
                    </div>
                  </div>
                  
                  <div style="font-size: 0.65rem; font-weight: 700; color: #fff; margin-bottom: 0.6rem;">Recent Activity</div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 6px;">
                    <div style="width: 18px; height: 18px; border-radius: 4px; background: rgba(37,211,102,0.2); display: flex; justify-content: center; align-items: center;">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <div style="flex: 1;">
                      <div style="font-size: 0.55rem; color: #fff;">Payment Received</div>
                      <div style="font-size: 0.45rem; color: var(--color-dim-text);">Stripe • 2 mins ago</div>
                    </div>
                    <div style="font-size: 0.55rem; font-weight: 700; color: var(--color-green);">+$450</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
