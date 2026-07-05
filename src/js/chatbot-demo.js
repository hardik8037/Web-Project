import { gsap } from 'gsap';
import { sanitizeHTML } from '../utils/sanitize.js';

/* ═══════════════════════════════════════════════════
   INTERACTIVE CHATBOT & CRM DEMO SYSTEM
   Authentic WhatsApp-style live demo with CRM sync.
   ═══════════════════════════════════════════════════ */

const CHATBOT_MESSAGES = {
  greeting: {
    text: "👋 Hello! Welcome to Botzo.io. I'm your AI assistant. How can I help you today?",
    delay: 0,
  },
  options: [
    { id: 'price', label: '💰 Check Pricing', icon: '💰' },
    { id: 'demo', label: '📅 Book a Demo', icon: '📅' },
    { id: 'agent', label: '👤 Talk to Agent', icon: '👤' },
  ],
  responses: {
    price: {
      userMsg: "I'd like to check your pricing plans",
      botReply: "Great choice! 🎯 Our plans start at ₹999/mo for the Starter plan. The Growth plan at ₹2,999/mo is our most popular — includes WhatsApp API, CRM, and bulk messaging.\n\nWould you like me to help you pick the right plan?",
      crmUpdate: {
        leadName: 'New Lead — Pricing Inquiry',
        stage: 'interested',
        stageLabel: 'Interested',
        score: 72,
        activity: 'Checked pricing details',
      },
    },
    demo: {
      userMsg: "I'd like to book a demo",
      botReply: "Awesome! 🚀 I'd love to show you how Botzo.io can transform your business.\n\nOur team will reach out within 2 hours to schedule a personalized demo. What time works best for you?",
      crmUpdate: {
        leadName: 'Hot Lead — Demo Request',
        stage: 'qualified',
        stageLabel: 'Qualified',
        score: 91,
        activity: 'Requested product demo',
      },
    },
    agent: {
      userMsg: 'Connect me with a human agent',
      botReply: "Of course! 🤝 I'm connecting you with our team now.\n\nAgent Priya is available and will join in just a moment. Average response time: under 30 seconds!",
      crmUpdate: {
        leadName: 'Lead — Agent Handoff',
        stage: 'interested',
        stageLabel: 'Engaged',
        score: 85,
        activity: 'Requested human agent',
      },
    },
  },
};

function getTimeString() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

export class ChatbotDemo {
  constructor() {
    this.bound = false;
    this.isInteracted = false;
    this.activeTimeouts = new Set();
    this.chatMessages = null;
    this.tryBind();

    // Listen for DOM changes (when router loads home page)
    this._observer = new MutationObserver(() => {
      this.tryBind();
    });
    this._observer.observe(document.getElementById('app') || document.body, {
      childList: true, subtree: true,
    });
  }

  safeTimeout(fn, delay) {
    const id = setTimeout(() => {
      this.activeTimeouts.delete(id);
      fn();
    }, delay);
    this.activeTimeouts.add(id);
    return id;
  }

  clearTimeouts() {
    this.activeTimeouts.forEach(id => clearTimeout(id));
    this.activeTimeouts.clear();
  }

  tryBind() {
    const chatMessagesEl = document.getElementById('chat-messages');
    if (!chatMessagesEl) {
      if (this.bound) {
        this.bound = false;
        this.chatMessages = null;
        this.clearTimeouts();
      }
      return;
    }

    if (chatMessagesEl !== this.chatMessages) {
      this.clearTimeouts();
      this.chatMessages = chatMessagesEl;
      this.quickReplies = document.getElementById('quick-replies');
      this.crmPipeline = document.getElementById('crm-pipeline');
      this.activityFeed = document.getElementById('activity-feed');
      this.kpiLeads = document.getElementById('kpi-leads');
      this.kpiResponse = document.getElementById('kpi-response');
      this.kpiConversion = document.getElementById('kpi-conversion');

      this.bound = true;
      this.isInteracted = false;
      this.init();
    }
  }

  reset() {
    this.bound = false;
    this.chatMessages = null;
    this.isInteracted = false;
    this.clearTimeouts();
    this.tryBind();
  }

  init() {
    // Clear any existing content
    if (this.chatMessages) this.chatMessages.innerHTML = '';
    if (this.quickReplies) this.quickReplies.innerHTML = '';

    // Show greeting after a small delay
    this.safeTimeout(() => this.showTypingThenMessage(CHATBOT_MESSAGES.greeting.text, 'bot'), 600);
    this.safeTimeout(() => this.showQuickReplies(), 2200);
  }

  showTypingThenMessage(text, type = 'bot', callback) {
    if (!this.chatMessages) return;
    // Show typing indicator
    const typingEl = document.createElement('div');
    typingEl.className = 'wa-typing-indicator';
    typingEl.innerHTML = '<div class="wa-typing-dots"><span></span><span></span><span></span></div>';
    this.chatMessages.appendChild(typingEl);
    this.scrollChat();

    // Replace with actual message
    this.safeTimeout(() => {
      if (typingEl.parentNode) {
        typingEl.remove();
      }
      this.addMessage(text, type);
      if (callback) callback();
    }, 1200);
  }

  addMessage(text, type = 'bot') {
    if (!this.chatMessages) return;
    const wrapper = document.createElement('div');
    wrapper.className = `wa-msg ${type === 'bot' ? 'wa-msg-incoming' : 'wa-msg-outgoing'}`;
    wrapper.style.opacity = '0';
    wrapper.style.transform = 'translateY(8px) scale(0.95)';

    const bubble = document.createElement('div');
    bubble.className = `wa-bubble ${type === 'bot' ? 'wa-bubble-incoming' : 'wa-bubble-outgoing'}`;

    // Format text with newlines
    const textEl = document.createElement('span');
    textEl.className = 'wa-bubble-text';
    textEl.innerHTML = sanitizeHTML(text).replace(/\n/g, '<br>');
    bubble.appendChild(textEl);

    // Timestamp + read receipts
    const meta = document.createElement('span');
    meta.className = 'wa-bubble-meta';
    meta.innerHTML = `${getTimeString()}${type === 'user' ? ' <span class="wa-read-ticks">✓✓</span>' : ''}`;
    bubble.appendChild(meta);

    wrapper.appendChild(bubble);
    this.chatMessages.appendChild(wrapper);
    this.scrollChat();

    gsap.to(wrapper, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'back.out(1.5)',
    });
  }

  showQuickReplies() {
    if (!this.quickReplies) return;
    this.quickReplies.innerHTML = '';

    CHATBOT_MESSAGES.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'wa-quick-btn';
      btn.textContent = opt.label;
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(8px)';
      btn.addEventListener('click', () => this.handleReply(opt.id));
      this.quickReplies.appendChild(btn);

      gsap.to(btn, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.1 + i * 0.08,
        ease: 'power2.out',
      });
    });
  }

  handleReply(optionId) {
    if (this.isInteracted) return;
    this.isInteracted = true;

    const response = CHATBOT_MESSAGES.responses[optionId];
    if (!response) return;

    // Hide quick replies
    if (this.quickReplies) {
      gsap.to(this.quickReplies.children, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        stagger: 0.04,
        onComplete: () => {
          if (this.quickReplies) this.quickReplies.innerHTML = '';
        },
      });
    }

    // Show user message
    this.safeTimeout(() => {
      this.addMessage(response.userMsg, 'user');

      // Show bot response with typing
      this.safeTimeout(() => {
        this.showTypingThenMessage(response.botReply, 'bot', () => {
          // Reset for replay
          this.safeTimeout(() => {
            this.isInteracted = false;
            this.showQuickReplies();
          }, 3000);
        });

        // Update CRM dashboard
        this.updateCRM(response.crmUpdate);
      }, 800);
    }, 300);
  }

  updateCRM(data) {
    // Animate pipeline card
    if (this.crmPipeline) {
      const card = document.createElement('div');
      card.className = 'pipeline-card';
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      card.innerHTML = `
        <div class="pipeline-card-name">${data.leadName}</div>
        <div class="pipeline-card-value">
          <span class="status-badge status-badge-active">${data.stageLabel}</span>
        </div>
      `;

      // Find the right stage column
      const targetStage = this.crmPipeline.querySelector(
        `[data-stage="${data.stage}"]`
      ) || this.crmPipeline.querySelector('.pipeline-column:nth-child(2)');

      if (targetStage) {
        const cardsContainer = targetStage.querySelector('.pipeline-cards');
        if (cardsContainer) {
          cardsContainer.prepend(card);
          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      }
    }

    // Animate activity feed
    if (this.activityFeed) {
      const activity = document.createElement('div');
      activity.className = 'activity-item';
      activity.style.opacity = '0';
      activity.innerHTML = `
        <div class="activity-dot"></div>
        <div class="activity-content">
          <span class="activity-text">${data.activity}</span>
          <span class="activity-time">Just now</span>
        </div>
      `;
      this.activityFeed.prepend(activity);

      gsap.to(activity, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    // Animate KPIs
    this.animateKPI(this.kpiLeads, 127, 128);
    this.animateKPI(this.kpiResponse, null, null, '1.2s', '0.8s');
    this.animateKPI(this.kpiConversion, 23, 24, null, null, '%');
  }

  animateKPI(element, from, to, fromText, toText, suffix = '') {
    if (!element) return;

    gsap.to(element, {
      scale: 1.1,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        if (toText) {
          element.textContent = toText;
        } else if (to !== null) {
          element.textContent = to.toLocaleString('en-IN') + suffix;
        }
      },
    });
  }

  scrollChat() {
    if (this.chatMessages) {
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
  }
}
