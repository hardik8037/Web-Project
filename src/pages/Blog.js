/* ═══════════════════════════════════════════════════
   BOTZO.IO — BLOG & INSIGHTS PAGE
   Stripe/Notion-grade editorial reading experience.
   ═══════════════════════════════════════════════════ */

import gsap from 'gsap';
import { sanitizeHTML } from '../utils/sanitize.js';
import { createFinalCTA } from '../sections/FinalCTA.js';

// Rich article database for editorial rendering
const BLOG_ARTICLES = [
  {
    slug: 'whatsapp-cloud-api-guide',
    title: 'The Ultimate Guide to WhatsApp Business API',
    category: 'API Guide',
    readTime: '5 min read',
    date: 'May 28, 2026',
    author: 'Krishna',
    authorTitle: 'Platform Architect',
    avatar: '👨‍💻',
    desc: 'Discover how to setup official verify indicators, bulk notifications, and interactive quick reply templates to increase your customer conversion rate.',
    content: `
      <h2>1. Overview of the Cloud API</h2>
      <p>The official WhatsApp Cloud API allows businesses to send and receive messages programmatically. Unlike traditional WhatsApp numbers, the API provides high-throughput messaging capabilities, official verification checkmarks, and support for interactive message buttons.</p>
      
      <div class="blog-callout blog-callout--tip">
        <strong>💡 Key Prerequisite:</strong> Meta requires a verified Facebook Business Manager account and a clean, dedicated phone number that is not currently registered on a consumer WhatsApp application.
      </div>

      <h2>2. Sending Your First Template Message</h2>
      <p>All business-initiated conversations on WhatsApp require pre-approved message templates. You can trigger these templates via a POST request to the Meta Graph API endpoint. Here is a cURL request demonstrating the implementation:</p>

      <div class="blog-code-container">
        <div class="blog-code-header">
          <span>cURL Request</span>
          <button class="blog-copy-btn">Copy</button>
        </div>
        <pre><code class="language-bash">curl -X POST "https://graph.facebook.com/v19.0/YOUR_PHONE_NUMBER_ID/messages" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "CUSTOMER_PHONE_NUMBER",
    "type": "template",
    "template": {
      "name": "order_confirmation",
      "language": { "code": "en_US" },
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": "Rohan" },
            { "type": "text", "text": "BOTZO-7392" }
          ]
        }
      ]
    }
  }'</code></pre>
      </div>

      <h2>3. Navigating Verification and Green Tick Status</h2>
      <p>To secure the coveted green checkmark next to your business name on WhatsApp, you must submit an Official Business Account (OBA) request via Meta Business Manager. Meta reviews your brand credibility, press coverage, and messaging volumes before granting this status.</p>
    `
  },
  {
    slug: 'instagram-dm-automation',
    title: 'Instagram DM Automation: Secret Lead Gen Hack',
    category: 'Growth Hacks',
    readTime: '4 min read',
    date: 'May 24, 2026',
    author: 'Vikram Sharma',
    authorTitle: 'Growth Engineer',
    avatar: '🚀',
    desc: 'Learn how to automate responses to mentions, posts, and keywords to build a robust organic lead generation pipeline instantly.',
    content: `
      <h2>1. The Power of Direct Message Automation</h2>
      <p>Instagram DM automation allows you to trigger instant conversations when users interact with your profile. This drastically reduces drop-off rates compared to directing users to an external website bio link.</p>

      <div class="blog-callout blog-callout--note">
        <strong>📈 Conversion Insight:</strong> Automating comment replies on posts (e.g. "Comment 'WEBINAR' to get the link") yields up to a 4x increase in organic click-through rates.
      </div>

      <h2>2. Setting Up Comment-to-DM Triggers</h2>
      <p>Using Botzo's workflow builder, you can configure comment keyword listeners. When a user comments a specific word on a reel or post, the system automatically sends a pre-configured DM containing the resource link and kicks off a qualification sequence.</p>

      <div class="blog-code-container">
        <div class="blog-code-header">
          <span>Webhook Payload Event</span>
          <button class="blog-copy-btn">Copy</button>
        </div>
        <pre><code class="language-json">{
  "object": "instagram",
  "entry": [{
    "id": "INSTAGRAM_BUSINESS_ACCOUNT_ID",
    "time": 1716584210,
    "messaging": [{
      "sender": { "id": "USER_SCOPE_ID" },
      "recipient": { "id": "BUSINESS_SCOPE_ID" },
      "message": {
        "text": "LINK",
        "quick_reply": { "payload": "GET_DISCOUNT_FLOW" }
      }
    }]
  }]
}</code></pre>
      </div>

      <h2>3. Best Practices for Compliance</h2>
      <p>Ensure that automated flows feel conversational and always provide an option for the user to connect with a live human representative. Keep messages short and utilize quick reply buttons to guide interactions.</p>
    `
  },
  {
    slug: 'rcs-vs-whatsapp',
    title: 'RCS vs WhatsApp Business: Which Should You Choose?',
    category: 'Messaging',
    readTime: '6 min read',
    date: 'May 18, 2026',
    author: 'Sunita Roy',
    authorTitle: 'Product Manager',
    avatar: '📱',
    desc: 'A comparative breakdown of messaging features, platform availability, delivery rates, and card formats for bulk campaigns.',
    content: `
      <h2>1. The Messaging Landscape Shift</h2>
      <p>Rich Communication Services (RCS) is emerging as a massive competitor to WhatsApp Business. With Apple adopting RCS in iOS 18, businesses can now reach both Android and iPhone users natively inside the default messaging app.</p>

      <h2>2. Feature Comparison Table</h2>
      <p>Here is a structural comparison of the platforms for bulk notification campaigns:</p>

      <div class="blog-table-wrapper" style="overflow-x: auto; margin: 1.5rem 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.82rem; border: 1px solid rgba(255,255,255,0.08);">
          <thead>
            <tr style="background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(255,255,255,0.08);">
              <th style="padding: 0.75rem;">Feature</th>
              <th style="padding: 0.75rem;">WhatsApp Business</th>
              <th style="padding: 0.75rem;">RCS Messaging</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.75rem; font-weight: 600;">App Required</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Yes (WhatsApp)</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">No (Native SMS App)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.75rem; font-weight: 600;">Rich Media Support</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Yes (Images, PDF, Video)</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Yes (Carousels, Cards, Videos)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.75rem; font-weight: 600;">Session Pricing</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Yes (Flat-rate 24-hr session)</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Yes (Single-message or template fee)</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; font-weight: 600;">Official Verification</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Meta Verified Profile</td>
              <td style="padding: 0.75rem; color: var(--color-muted-text);">Carrier-verified Sender logo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="blog-callout blog-callout--tip">
        <strong>💡 Recommendation:</strong> Use WhatsApp for interactive support conversations where you need full control over user profiles, and use RCS for bulk promotional campaigns to maximize reach without requiring app downloads.
      </div>
    `
  },
  {
    slug: 'retailer-workflow-automation',
    title: '5 Workflow Automations Every Retailer Needs',
    category: 'Automation',
    readTime: '8 min read',
    date: 'May 12, 2026',
    author: 'Rohit Verma',
    authorTitle: 'Solutions Architect',
    avatar: '🛒',
    desc: 'Step-by-step blueprints to automate order confirmations, abandoned checkouts, refund requests, and customer feedback collections.',
    content: `
      <h2>1. The E-commerce Automation Revolution</h2>
      <p>Manually handling order status updates and checkout drops is a massive drain on operational resources. Automated messaging flows capture intent when customer interest is at its peak.</p>

      <h2>2. The Five Core Blueprints</h2>
      <ul style="display: flex; flex-direction: column; gap: 0.8rem; margin: 1rem 0; padding-left: 1.25rem; font-size: 0.88rem; color: var(--color-muted-text);">
        <li>🛍️ <strong>Abandoned Checkout Alert</strong> — Trigger a message 30 minutes after checkout drop-off with a direct 10% discount code.</li>
        <li>📦 <strong>Order Status & Tracking</strong> — Send automated shipping notifications with real-time webhook updates and map links.</li>
        <li>🔄 <strong>Instant Returns & Refunds</strong> — Let users select items for return directly inside the WhatsApp catalog structure.</li>
        <li>⭐ <strong>Post-Purchase Reviews</strong> — Auto-request star ratings and feedback 3 days after shipping delivery.</li>
        <li>🙋 <strong>FAQ Virtual Assistant</strong> — Pre-emptively answer size guide, refund policy, and stock questions in real-time.</li>
      </ul>

      <div class="blog-callout blog-callout--warning">
        <strong>⚠️ Attention:</strong> Do not spam users with abandoned checkout alerts. Stick to a maximum of one follow-up message per abandoned cart session to preserve your number status.
      </div>
    `
  },
  {
    slug: 'chatbot-lead-funnel',
    title: 'Building a High-Converting Lead Funnel with Chatbots',
    category: 'Conversion',
    readTime: '7 min read',
    date: 'May 05, 2026',
    author: 'Sunita Roy',
    authorTitle: 'Product Manager',
    avatar: '📊',
    desc: 'How to structure your chatbot conversation flows to qualify leads, capture contact information, and schedule sales appointments automatically.',
    content: `
      <h2>1. The Anatomy of Conversational Conversion</h2>
      <p>Conversational lead funnels replace standard web landing page forms with responsive questioning. This conversational dynamic increases lead conversion rates by up to 80% because it feels active and instant.</p>

      <h2>2. Structuring the Flow</h2>
      <p>A successful lead funnel utilizes a progressive disclosure strategy:</p>
      <ul style="display: flex; flex-direction: column; gap: 0.6rem; margin: 1rem 0; padding-left: 1.25rem; font-size: 0.88rem; color: var(--color-muted-text);">
        <li><strong>Hook</strong> — Start with a low-friction question (e.g., "What BHK size are you looking for?").</li>
        <li><strong>Qualify</strong> — Ask budget and timeline preferences via quick reply buttons.</li>
        <li><strong>Capture</strong> — Request contact details (phone, email) with input validation checks.</li>
        <li><strong>Book</strong> — Offer instant appointment slot selection directly inside the chat window.</li>
      </ul>
    `
  },
  {
    slug: 'qr-ticketing-event-setup',
    title: 'QR Ticketing for Events: Complete Setup Guide',
    category: 'Commerce',
    readTime: '5 min read',
    date: 'April 28, 2026',
    author: 'Krishna',
    authorTitle: 'Founder & Architect',
    avatar: '🎫',
    desc: 'End-to-end walkthrough of creating dynamic QR-based entry passes, integrating payment gateways, and managing scanner verification at event venues.',
    content: `
      <h2>1. Simplifying Event Entry Operations</h2>
      <p>Paper tickets and email confirmations lead to long queues at event gates. Generating a dynamic, secure QR code directly on WhatsApp makes entry check-in instant and friction-free.</p>

      <h2>2. The Checkout and Generation Code</h2>
      <p>When a customer pays for an event pass, Botzo's commerce service registers the order, generates a encrypted ticket hash, and creates a QR code image to send in the message payload:</p>

      <div class="blog-code-container">
        <div class="blog-code-header">
          <span>Stripe Webhook Handler</span>
          <button class="blog-copy-btn">Copy</button>
        </div>
        <pre><code class="language-javascript">app.post('/stripe-webhook', async (req, res) => {
  const event = req.body;
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const ticketId = generateTicketHash(session.id);
    
    // Generate QR code attachment
    const qrUrl = await QRCode.toDataURL(ticketId);
    
    // Send ticket via Botzo WhatsApp API
    await sendWhatsAppQR(session.customer_details.phone, qrUrl, {
      title: "Your Event Pass",
      caption: "Show this QR at the entrance."
    });
  }
  res.json({ received: true });
});</code></pre>
      </div>
    `
  }
];

export function createBlog() {
  const container = document.createElement('div');
  container.className = 'page blog-page';

  let activeCategory = 'All';
  let searchQuery = '';

  const renderBlog = () => {
    // Filter articles based on active category and search query
    const filtered = BLOG_ARTICLES.filter(art => {
      const matchCat = activeCategory === 'All' || art.category.toLowerCase().includes(activeCategory.toLowerCase()) || (activeCategory === 'API Guide' && art.category === 'API Guide');
      const matchSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    const categories = ['All', 'API Guide', 'Growth Hacks', 'Messaging', 'Automation', 'Conversion', 'Commerce'];
    const categoriesHTML = categories.map(cat => `
      <button class="blog-cat-pill ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>
    `).join('');

    // Featured Article (asymmetrical layout at the top)
    let featuredHTML = '';
    const featured = BLOG_ARTICLES[0];
    if (featured && activeCategory === 'All' && !searchQuery) {
      featuredHTML = `
        <div class="blog-featured-card glass-card-strong" data-slug="${featured.slug}">
          <div class="blog-featured-content">
            <div class="blog-card-meta">
              <span class="blog-card-tag" style="background: rgba(184, 77, 255, 0.12); color: var(--color-primary-light);">${featured.category}</span>
              <span class="blog-card-read">${featured.readTime}</span>
            </div>
            <h2 class="featured-title heading-hero" style="font-size: 2.2rem; margin: 1rem 0; line-height:1.2;">
              ${featured.title}
            </h2>
            <p class="text-body" style="margin-bottom: 2rem; max-width:600px;">
              ${featured.desc}
            </p>
            <div class="blog-card-author-row" style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.5rem;">${featured.avatar}</span>
                <div style="line-height: 1.2;">
                  <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-white-text);">${featured.author}</div>
                  <div style="font-size: 0.72rem; color: var(--color-dim-text);">${featured.authorTitle}</div>
                </div>
              </div>
              <button class="btn btn-primary btn-sm read-article-btn" data-slug="${featured.slug}">Read Article</button>
            </div>
          </div>
          <div class="blog-featured-glow"></div>
        </div>
      `;
    }

    // Grid of standard posts (skip the featured one if showing All with no search)
    const gridPosts = (activeCategory === 'All' && !searchQuery) ? filtered.slice(1) : filtered;

    const cardsHTML = gridPosts.length > 0 
      ? gridPosts.map((g, i) => `
        <div class="glass-card-strong blog-post-card ${i % 2 === 0 ? 'blog-card-asymmetric' : ''}" data-slug="${g.slug}">
          <div class="blog-card-meta">
            <span class="blog-card-tag" style="background: rgba(0, 176, 255, 0.1); color: #00B0FF;">${g.category}</span>
            <span class="blog-card-read">${g.readTime}</span>
          </div>
          <h3 class="blog-card-title">${g.title}</h3>
          <p class="blog-card-desc">${g.desc}</p>
          <div class="blog-card-footer" style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.04);">
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span>${g.avatar}</span>
              <span style="font-size:0.75rem; font-weight:500; color:var(--color-white-text);">${g.author}</span>
            </div>
            <button class="guide-read-link read-article-btn" data-slug="${g.slug}" style="background:none; border:none; color:var(--color-primary-light); cursor:pointer; font-size:0.8rem; display:flex; align-items:center; gap:0.25rem;">
              Read Article 
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
      `).join('')
      : `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
          <span style="font-size: 2rem;">🔍</span>
          <h3 style="margin-top: 1rem; color: var(--color-white-text);">No articles match your query</h3>
          <p class="text-body" style="font-size: 0.9rem;">Try searching for "WhatsApp", "API", or "Automation".</p>
        </div>
      `;

    container.innerHTML = `
      <!-- Blog Hero -->
      <section class="section page-hero blog-hero" style="padding-bottom: 0;">
        <div class="container-wide">
          <div class="section-header" style="max-width: 680px; margin: 0 auto;">
            <div class="detail-hero-badge" style="--badge-color: #00B0FF; margin-bottom: 1.5rem;">
              <span class="badge-dot"></span>DEVELOPER BLOG
            </div>
            <h1 class="heading-hero">
              Engineering & Marketing<br><span class="text-gradient">Ecosystem Blog</span>
            </h1>
            <p class="text-body-lg" style="margin: 0 0 1.5rem 0; font-weight: 400; opacity: 0.9;">
              Expert analysis, technical code configurations, and operational growth strategies for modern messaging channels.
            </p>
          </div>
        </div>
      </section>

      <!-- Search & Filters (Ecosystem Layer) -->
      <section class="section blog-controls hero-ecosystem" style="padding: 0 0 3rem 0; margin-top: 8rem;">
        <div class="container-wide" style="max-width: 900px;">
          <div class="blog-search-container glass-card" style="display:flex; align-items:center; padding: 0.5rem 1.25rem; border-radius: 999px; margin-bottom: 1.5rem; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.015);">
            <span style="font-size: 1.1rem; opacity:0.5; margin-right: 0.75rem;">🔍</span>
            <input type="text" id="blog-search" class="blog-search-input" value="${searchQuery}" placeholder="Search guides by title or keyword..." style="background:none; border:none; outline:none; color:var(--color-white-text); font-family:var(--font-body); font-size:0.92rem; flex:1; padding: 0.5rem 0;" />
            ${searchQuery ? `<button id="blog-search-clear" style="background:none; border:none; color:var(--color-dim-text); cursor:pointer; font-size:0.9rem; padding: 0.5rem;">✕</button>` : ''}
          </div>
          <div class="blog-categories-grid" style="display:flex; gap:0.5rem; flex-wrap:wrap; justify-content:center;">
            ${categoriesHTML}
          </div>
        </div>
      </section>

      <!-- Main Articles Area -->
      <section class="section blog-list" style="padding: 0 0 6rem 0;">
        <div class="container-wide">
          ${featuredHTML}
          <div class="guides-grid" style="margin-top: 3rem;">
            ${cardsHTML}
          </div>
        </div>
      </section>

      <!-- Glassmorphic Reader Modal Backdrop (Linear/Notion style) -->
      <div class="blog-reader-backdrop" data-lenis-prevent="true" style="display: none; position: fixed; inset: 0; z-index: 1000; background: rgba(5, 5, 8, 0.4); backdrop-filter: blur(16px); overflow-y: auto; overscroll-behavior: none; padding: 5vh 1rem; opacity: 0; transition: opacity 0.3s ease; -webkit-overflow-scrolling: touch;">
        <div class="blog-reader-modal glass-card-strong" data-lenis-prevent="true" style="width: 100%; max-width: 780px; height: auto; margin: 0 auto; border-radius: 24px; position: relative; overflow: visible; transform: scale(0.96) translateY(10px); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); border-color: rgba(255,255,255,0.08); box-shadow: var(--shadow-elevated);">
          
          <!-- Sticky Header Container -->
          <div style="position: sticky; top: 0; z-index: 10; background: rgba(10, 10, 15, 0.85); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 1px solid rgba(255,255,255,0.06); border-top-left-radius: 24px; border-top-right-radius: 24px;">
            <!-- Top Glowing Reading Progress Bar -->
            <div class="blog-reader-progress" style="height: 3px; width: 0%; background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%); transition: width 0.1s ease; box-shadow: 0 0 8px rgba(156, 39, 255, 0.5);"></div>
            
            <!-- Modal Header -->
            <div class="blog-reader-header" style="padding: 1.5rem 2rem; display: flex; align-items: center; justify-content: space-between;">
              <div style="display:flex; align-items:center; gap:0.6rem;">
                <span id="modal-cat-tag" class="blog-card-tag" style="background: rgba(184, 77, 255, 0.1); color: var(--color-primary-light);">Category</span>
                <span id="modal-read-time" style="font-size:0.75rem; color:var(--color-dim-text);">5 min read</span>
              </div>
              <button class="blog-reader-close" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; color:var(--color-white-text); cursor:pointer; transition: all 0.2s ease;">
                ✕
              </button>
            </div>
          </div>

          <!-- Content Frame (No longer constrained by height) -->
          <div class="blog-reader-body" style="padding: 2.5rem 3rem; text-align: left;">
            <div id="modal-article-meta" style="margin-bottom: 2rem;">
              <h2 id="modal-title" style="font-family: var(--font-heading); font-size: 2.4rem; font-weight: 800; line-height: 1.15; color: var(--color-white-text); margin-bottom: 1.25rem;">Article Title</h2>
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span id="modal-author-avatar" style="font-size: 1.8rem;">👨‍💻</span>
                <div style="line-height: 1.25;">
                  <div id="modal-author-name" style="font-size: 0.88rem; font-weight: 600; color: var(--color-white-text);">Author Name</div>
                  <div style="font-size: 0.72rem; color: var(--color-dim-text);"><span id="modal-author-title">Role</span> • <span id="modal-date">Date</span></div>
                </div>
              </div>
            </div>
            <div id="modal-content" class="blog-editorial-content" style="font-size: 0.95rem; line-height: 1.75; color: rgba(255, 255, 255, 0.85); font-family: var(--font-body);">
              <!-- Content injected here -->
            </div>
            
            <!-- Recommendations Footer inside Reader -->
            <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.06);">
              <h4 style="font-family:var(--font-heading); color:var(--color-white-text); margin-bottom: 1rem;">Looking for more automation solutions?</h4>
              <p style="font-size: 0.85rem; color:var(--color-dim-text); margin-bottom: 1.5rem;">Schedule a consultation callback with our integration specialist to configure your custom API workflow.</p>
              <div style="display:flex; gap:0.75rem;">
                <a href="/demo" class="btn btn-primary btn-sm blog-reader-link">Book Integration Call</a>
                <a href="/contact" class="btn btn-ghost btn-sm blog-reader-link" style="border-color:rgba(255,255,255,0.1);">Contact Sales</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Smoothly animate the cards in with a micro-stagger reveal
    const cards = container.querySelectorAll('.blog-featured-card, .blog-post-card');
    if (cards.length > 0) {
      gsap.fromTo(cards, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
      );
    }

    // Re-bind listeners inside container
    const searchInput = container.querySelector('#blog-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderBlog();
        container.querySelector('#blog-search').focus();
        // Place cursor at the end of text
        const len = searchQuery.length;
        container.querySelector('#blog-search').setSelectionRange(len, len);
      });
    }

    const clearBtn = container.querySelector('#blog-search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchQuery = '';
        renderBlog();
      });
    }

    const catPills = container.querySelectorAll('.blog-cat-pill');
    catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        activeCategory = pill.getAttribute('data-cat');
        renderBlog();
      });
    });

    // ─── ARTICLE READER ACTIONS ───
    const backdrop = container.querySelector('.blog-reader-backdrop');
    const modal = container.querySelector('.blog-reader-modal');
    const closeBtn = container.querySelector('.blog-reader-close');
    const readBtns = container.querySelectorAll('.read-article-btn');
    const readerBody = container.querySelector('.blog-reader-body');
    const progressBar = container.querySelector('.blog-reader-progress');

    const openReader = (slug) => {
      const art = BLOG_ARTICLES.find(a => a.slug === slug);
      if (!art) return;

      // Populate data
      container.querySelector('#modal-cat-tag').innerText = art.category;
      container.querySelector('#modal-read-time').innerText = art.readTime;
      container.querySelector('#modal-title').innerText = art.title;
      container.querySelector('#modal-author-avatar').innerText = art.avatar;
      container.querySelector('#modal-author-name').innerText = art.author;
      container.querySelector('#modal-author-title').innerText = art.authorTitle;
      container.querySelector('#modal-date').innerText = art.date;
      // Ensure content is strictly sanitized before DOM injection
      container.querySelector('#modal-content').innerHTML = sanitizeHTML(art.content);

      // Reset scroll position of backdrop
      backdrop.scrollTop = 0;
      progressBar.style.width = '0%';

      // Show overlay with transitions
      backdrop.style.display = 'block';
      document.body.style.overflow = 'hidden'; // prevent bg scrolling
      if (window.lenis) window.lenis.stop(); // Stop Lenis from scrolling background
      setTimeout(() => {
        backdrop.style.opacity = '1';
        modal.style.transform = 'scale(1) translateY(0)';
      }, 20);

      // Re-bind click event on code blocks
      const copyBtns = container.querySelectorAll('.blog-copy-btn');
      copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const pre = btn.closest('.blog-code-container').querySelector('code');
          if (pre) {
            navigator.clipboard.writeText(pre.innerText).then(() => {
              btn.innerText = 'Copied! ✓';
              btn.classList.add('copied');
              setTimeout(() => {
                btn.innerText = 'Copy';
                btn.classList.remove('copied');
              }, 2000);
            }).catch(err => {
              console.error('Failed to copy text: ', err);
            });
          }
        });
      });

      // Bind in-modal link overrides to ensure the modal closes before redirecting
      const innerLinks = container.querySelectorAll('.blog-reader-link');
      innerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          // Prevent standard navigation first to close the modal and restore overflow
          e.preventDefault();
          const targetUrl = link.getAttribute('href');
          
          // Animate close
          backdrop.style.opacity = '0';
          modal.style.transform = 'scale(0.96) translateY(10px)';
          document.body.style.overflow = '';
          if (window.lenis) window.lenis.start();
          
          setTimeout(() => {
            backdrop.style.display = 'none';
            // Use client router to transition smoothly
            if (window.router) {
              window.router.navigateTo(targetUrl);
            } else {
              window.location.href = targetUrl;
            }
          }, 300);
        });
      });
    };

    const closeReader = () => {
      backdrop.style.opacity = '0';
      modal.style.transform = 'scale(0.96) translateY(10px)';
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, 300);
    };

    readBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        openReader(slug);
      });
    });

    closeBtn.addEventListener('click', closeReader);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeReader();
    });

    // Reading progress listener on the backdrop
    backdrop.addEventListener('scroll', () => {
      const scrollHeight = backdrop.scrollHeight - backdrop.clientHeight;
      if (scrollHeight > 0) {
        const scrollPct = (backdrop.scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${scrollPct}%`;
      }
    });
  };

  renderBlog();

  // Append final CTA at the bottom of the page
  const finalCta = createFinalCTA();
  container.appendChild(finalCta);

  return container;
}
