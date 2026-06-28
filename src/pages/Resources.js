/* ═══════════════════════════════════════════════════
   BOTZO.IO — RESOURCES HUB & PORTAL
   A premium media ecosystem and entry point.
   ═══════════════════════════════════════════════════ */

import { createFinalCTA } from '../sections/FinalCTA.js';

export function createResources() {
  const container = document.createElement('div');
  container.className = 'page resources-page';

  container.innerHTML = `
    <!-- Resources Hero -->
    <section class="section page-hero resources-hero" style="padding-bottom: 0;">
      <div class="container-standard">
        <div class="section-header" style="max-width: 680px; margin: 0 auto;">
          <div class="detail-hero-badge" style="--badge-color: var(--color-primary-light); margin-bottom: 1.5rem;">
            <span class="badge-dot"></span>KNOWLEDGE BASE
          </div>
          <h1 class="heading-hero">
            Ecosystem Hub &<br><span class="text-gradient">Company Insights</span>
          </h1>
          <p class="text-body-lg" style="margin: 0 0 1.5rem 0; font-weight: 400; opacity: 0.9;">
            Explore detailed guides on messaging APIs, automation blueprints, and learn about the engineering team building the future of conversational SaaS.
          </p>
        </div>
      </div>
    </section>

    <!-- Portal Entry Point (Ecosystem Layer) -->
    <section class="section resources-portal-section hero-ecosystem" style="padding: 0 0 6rem; margin-top: 8rem; position: relative;">
      <div class="container-standard">
        <div class="resources-portal-grid">
          
          <!-- Column 1: Blog Preview Panel -->
          <div class="glass-card-strong portal-panel portal-panel--blog reveal-left">
            <div class="portal-panel-header">
              <span class="text-overline" style="color: var(--color-primary-light);">Latest Publications</span>
              <h2 class="heading-section" style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">Industry Insights &<br><span class="text-gradient">Growth Guides</span></h2>
              <p class="text-body" style="font-size: 0.9rem; margin-bottom: 2rem;">
                Stay updated with official API rules, growth marketing secrets, and step-by-step messaging configurations.
              </p>
            </div>
            
            <div class="portal-previews" style="display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2.5rem;">
              <div class="portal-preview-item">
                <span class="preview-icon">📱</span>
                <div>
                  <h4 class="preview-title">The Ultimate Guide to WhatsApp Cloud API</h4>
                  <p class="preview-desc">A deep dive into official verify checkmarks, quick replies, and Meta approvals.</p>
                </div>
              </div>
              <div class="portal-preview-item">
                <span class="preview-icon">📸</span>
                <div>
                  <h4 class="preview-title">Instagram DM Automation: Secret Lead Gen Hack</h4>
                  <p class="preview-desc">Automate DMs, mentions, and reel comments to capture organic leads.</p>
                </div>
              </div>
              <div class="portal-preview-item">
                <span class="preview-icon">🔄</span>
                <div>
                  <h4 class="preview-title">RCS vs WhatsApp Business: The Technical Shift</h4>
                  <p class="preview-desc">Compare dynamic rich card features, deliverability, and regional rates.</p>
                </div>
              </div>
            </div>

            <a href="/blog" class="btn btn-primary portal-cta" style="width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
              Launch Blog Hub
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5-5-5-5"/></svg>
            </a>
          </div>

          <!-- Column 2: About Us Preview Panel -->
          <div class="glass-card-strong portal-panel portal-panel--about reveal-right">
            <div class="portal-panel-header">
              <span class="text-overline" style="color: var(--color-green);">Company Identity</span>
              <h2 class="heading-section" style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">A Platform Built for<br><span class="text-gradient" style="background: linear-gradient(135deg, #00E676 0%, #00B0FF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Global Scale</span></h2>
              <p class="text-body" style="font-size: 0.9rem; margin-bottom: 2rem;">
                Learn about the engineers, core commitments, and platform roadmap driving Botzo.io's growth.
              </p>
            </div>
            
            <div class="portal-previews" style="display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2.5rem;">
              <div class="portal-preview-item">
                <span class="preview-icon" style="background: rgba(0, 230, 118, 0.08); border-color: rgba(0, 230, 118, 0.15);">⚡</span>
                <div>
                  <h4 class="preview-title">99.9% Uptime Commitment</h4>
                  <p class="preview-desc">Enterprise-grade communication infrastructure handling millions of messages.</p>
                </div>
              </div>
              <div class="portal-preview-item">
                <span class="preview-icon" style="background: rgba(0, 230, 118, 0.08); border-color: rgba(0, 230, 118, 0.15);">🔒</span>
                <div>
                  <h4 class="preview-title">Compliant & Secure Flow</h4>
                  <p class="preview-desc">Strict security controls protecting client chat history and database records.</p>
                </div>
              </div>
              <div class="portal-preview-item">
                <span class="preview-icon" style="background: rgba(0, 230, 118, 0.08); border-color: rgba(0, 230, 118, 0.15);">📊</span>
                <div>
                  <h4 class="preview-title">Global Impact Numbers</h4>
                  <p class="preview-desc">Over 50 million monthly messages processed across 8+ vertical industries.</p>
                </div>
              </div>
            </div>

            <a href="/about" class="btn btn-ghost portal-cta" style="width: 100%; border-color: rgba(0, 230, 118, 0.2); display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
              Explore Our Story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5-5-5-5"/></svg>
            </a>
          </div>

        </div>
      </div>
    </section>

    <div class="section-divider"></div>
  `;

  // Append final CTA
  container.appendChild(createFinalCTA());

  return container;
}
