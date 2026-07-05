export default {
  category: "Digital Marketing",
  id: "digitalMarketing",
  plans: [
    {
      id: "starter",
      name: "Starter",
      desc: "Perfect for small businesses getting started with digital marketing.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "7,999", period: "/month" },
          yearly: { price: "7,199", period: "/month", was: "was ₹7999/mo" }
        },
        USD: {
          monthly: { price: "99", period: "/month" },
          yearly: { price: "89", period: "/month", was: "was $99/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "growth",
      name: "Growth",
      desc: "For growing businesses that need more reach and engagement.",
      popular: true,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "14,999", period: "/month" },
          yearly: { price: "13,499", period: "/month", was: "was ₹14999/mo" }
        },
        USD: {
          monthly: { price: "199", period: "/month" },
          yearly: { price: "179", period: "/month", was: "was $199/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "scale",
      name: "Scale",
      desc: "Advanced marketing campaigns for scaling operations.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "24,999", period: "/month" },
          yearly: { price: "22,499", period: "/month", was: "was ₹24999/mo" }
        },
        USD: {
          monthly: { price: "299", period: "/month" },
          yearly: { price: "269", period: "/month", was: "was $299/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Tailored strategies for large-scale enterprise needs.",
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
      section: "SOCIAL MEDIA",
      items: [
        { name: "Social Media Management", values: ["✓", "✓", "✓", "✓"] },
        { name: "Content Creation", values: ["Basic", "Standard", "Premium", "Custom"] },
        { name: "Graphic Designing", values: ["✓", "✓", "✓", "✓"] },
        { name: "Social Media Posts", values: ["12 / mo", "20 / mo", "30 / mo", "Custom"] },
        { name: "Reels & Short Videos", values: ["4 / mo", "8 / mo", "12 / mo", "Custom"] }
      ]
    },
    {
      section: "PAID ADVERTISING",
      items: [
        { name: "Meta Ads Management", values: ["✕", "✓", "✓", "✓"] },
        { name: "Google Ads Management", values: ["✕", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "SEO",
      items: [
        { name: "SEO", values: ["Basic", "Advanced", "Premium", "Custom"] },
        { name: "Keyword Research", values: ["✓", "✓", "✓", "✓"] },
        { name: "Google Business Profile Optimization", values: ["✓", "✓", "✓", "✓"] },
        { name: "Competitor Analysis", values: ["✕", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "MARKETING CHANNELS",
      items: [
        { name: "Email Marketing", values: ["✕", "✓", "✓", "✓"] },
        { name: "WhatsApp Marketing", values: ["✕", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "REPORTING & SUPPORT",
      items: [
        { name: "Monthly Performance Report", values: ["✓", "✓", "✓", "✓"] },
        { name: "Strategy Consultation", values: ["Monthly", "Bi-Weekly", "Weekly", "Custom"] },
        { name: "Support", values: ["Email", "Priority", "Dedicated", "Dedicated"] }
      ]
    }
  ],
  includedFeatures: [
    "Content Calendar",
    "Caption Writing",
    "Hashtag Research",
    "Social Media Publishing",
    "Basic Community Management",
    "Monthly Performance Report"
  ]
};
