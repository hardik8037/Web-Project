export default {
  category: "Automation Platform",
  id: "automation",
  plans: [
    {
      id: "starter",
      name: "Starter",
      desc: "Perfect for small businesses getting started with automation.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "999", period: "/month" },
          yearly: { price: "899", period: "/month", was: "was ₹999/mo" }
        },
        USD: {
          monthly: { price: "12", period: "/month" },
          yearly: { price: "11", period: "/month", was: "was $12/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "growth",
      name: "Growth",
      desc: "For growing businesses that need more power and flexibility.",
      popular: true,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "2,499", period: "/month" },
          yearly: { price: "2,249", period: "/month", was: "was ₹2499/mo" }
        },
        USD: {
          monthly: { price: "29", period: "/month" },
          yearly: { price: "26", period: "/month", was: "was $29/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "premium",
      name: "Premium",
      desc: "Enterprise-grade automation for scaling operations.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "4,999", period: "/month" },
          yearly: { price: "4,499", period: "/month", was: "was ₹4999/mo" }
        },
        USD: {
          monthly: { price: "59", period: "/month" },
          yearly: { price: "53", period: "/month", was: "was $59/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Tailored solutions for large-scale enterprise needs.",
      popular: false,
      isCustom: true,
      pricing: {
        INR: {
          monthly: { price: "Custom", period: "pricing" },
          yearly: { price: "Custom", period: "pricing" }
        },
        USD: {
          monthly: { price: "Custom", period: "pricing" },
          yearly: { price: "Custom", period: "pricing" }
        }
      },
      cta: "Contact us ↗"
    }
  ],
  features: [
    {
      section: "Messaging Channels",
      items: [
        { name: "WhatsApp bulk broadcasts", values: ["✓", "✓", "✓", "✓"] },
        { name: "WhatsApp API channels", values: ["1", "2", "5", "Custom"] },
        { name: "RCS bulk broadcasts", values: ["✓", "✓", "✓", "✓"] },
        { name: "RCS channels", values: ["1", "1", "2", "Custom"] },
        { name: "Chatbot & Automation", values: ["—", "✓", "✓", "✓"] },
        { name: "Instagram channels", values: ["—", "1", "2", "Custom"] },
        { name: "Facebook channels", values: ["—", "1", "2", "Custom"] }
      ]
    },
    {
      section: "Platform",
      items: [
        { name: "API access", values: ["✓", "✓", "✓", "✓"] },
        { name: "External actions / month", values: ["—", "2,000", "5,000", "Custom"] },
        { name: "Shared inbox / live chat", values: ["—", "✓", "✓", "✓"] },
        { name: "CRM", values: ["✓", "✓", "✓", "✓"] },
        { name: "Lead pipeline / Kanban boards", values: ["✓", "✓", "✓", "✓"] },
        { name: "Team members", values: ["—", "2", "5", "Custom"] },
        { name: "Ecommerce store", values: ["—", "✓", "✓", "✓"] },
        { name: "Departments", values: ["—", "1", "2", "Custom"] },
        { name: "Calendars bot", values: ["—", "—", "✓", "✓"] },
        { name: "Ticketz (QR ticketing)", values: ["—", "—", "—", "Custom"] }
      ]
    },
    {
      section: "AI",
      items: [
        { name: "AI dashboard", values: ["—", "✓", "✓", "✓"] },
        { name: "AI Studio", values: ["—", "—", "✓", "✓"] }
      ]
    },
    {
      section: "Support",
      items: [
        { name: "Ticket support", values: ["✓", "✓", "✓", "✓"] },
        { name: "WhatsApp support", values: ["—", "—", "✓", "✓"] },
        { name: "Dedicated account manager", values: ["—", "—", "—", "✓"] },
        { name: "SLA guarantee", values: ["—", "—", "—", "✓"] }
      ]
    }
  ]
};
