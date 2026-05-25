import { gsap } from 'gsap';

/* ═══════════════════════════════════════════════════
   INTERACTIVE CHATBOT & CRM DEMO SYSTEM
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
        stage: 'Interested',
        score: 72,
        activity: 'Checked pricing details',
      },
    },
    demo: {
      userMsg: "I'd like to book a demo",
      botReply: "Awesome! 🚀 I'd love to show you how Botzo.io can transform your business.\n\nOur team will reach out within 2 hours to schedule a personalized demo. What time works best for you?",
      crmUpdate: {
        leadName: 'Hot Lead — Demo Request',
        stage: 'Qualified',
        score: 91,
        activity: 'Requested product demo',
      },
    },
    agent: {
      userMsg: 'Connect me with a human agent',
      botReply: "Of course! 🤝 I'm connecting you with our team now.\n\nAgent Priya is available and will join in just a moment. Average response time: under 30 seconds!",
      crmUpdate: {
        leadName: 'Lead — Agent Handoff',
        stage: 'Engaged',
        score: 85,
        activity: 'Requested human agent',
      },
    },
  },
};

export class ChatbotDemo {
  constructor() {
    this.chatMessages = document.getElementById('chat-messages');
    this.quickReplies = document.getElementById('quick-replies');
    this.crmPipeline = document.getElementById('crm-pipeline');
    this.activityFeed = document.getElementById('activity-feed');
    this.kpiLeads = document.getElementById('kpi-leads');
    this.kpiResponse = document.getElementById('kpi-response');
    this.kpiConversion = document.getElementById('kpi-conversion');
    this.isInteracted = false;

    if (!this.chatMessages) return;
    this.init();
  }

  init() {
    // Show greeting after a delay
    setTimeout(() => this.showTypingThenMessage(CHATBOT_MESSAGES.greeting.text, 'bot'), 800);
    setTimeout(() => this.showQuickReplies(), 2400);
  }

  showTypingThenMessage(text, type = 'bot', callback) {
    // Show typing indicator
    const typingEl = document.createElement('div');
    typingEl.className = 'typing-dots chat-bubble-incoming';
    typingEl.style.maxWidth = '60px';
    typingEl.innerHTML = '<span></span><span></span><span></span>';
    this.chatMessages.appendChild(typingEl);
    this.scrollChat();

    // Replace with actual message
    setTimeout(() => {
      typingEl.remove();
      this.addMessage(text, type);
      if (callback) callback();
    }, 1200);
  }

  addMessage(text, type = 'bot') {
    const msg = document.createElement('div');
    msg.className = `chat-bubble ${type === 'bot' ? 'chat-bubble-bot' : 'chat-bubble-outgoing'}`;
    msg.style.opacity = '0';
    msg.style.transform = 'translateY(10px)';
    msg.textContent = text;
    this.chatMessages.appendChild(msg);
    this.scrollChat();

    gsap.to(msg, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  showQuickReplies() {
    if (!this.quickReplies) return;
    this.quickReplies.innerHTML = '';

    CHATBOT_MESSAGES.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = opt.label;
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(10px)';
      btn.addEventListener('click', () => this.handleReply(opt.id));
      this.quickReplies.appendChild(btn);

      gsap.to(btn, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: i * 0.1,
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
    gsap.to(this.quickReplies.children, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      stagger: 0.05,
      onComplete: () => {
        this.quickReplies.innerHTML = '';
      },
    });

    // Show user message
    setTimeout(() => {
      this.addMessage(response.userMsg, 'user');

      // Show bot response with typing
      setTimeout(() => {
        this.showTypingThenMessage(response.botReply, 'bot', () => {
          // Reset for replay
          setTimeout(() => {
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
          <span class="status-badge status-badge-active">${data.stage}</span>
        </div>
      `;

      // Find the right stage column
      const targetStage = this.crmPipeline.querySelector(
        `[data-stage="${data.stage.toLowerCase()}"]`
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
