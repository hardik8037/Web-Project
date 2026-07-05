export default {
  category: "App Development",
  id: "appDevelopment",
  plans: [
    {
      id: "starter",
      name: "Starter",
      desc: "Perfect for establishing your initial mobile presence.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "25,000", period: "one-time" },
          yearly: { price: "25,000", period: "one-time" }
        },
        USD: {
          monthly: { price: "349", period: "one-time" },
          yearly: { price: "349", period: "one-time" }
        }
      },
      cta: "Get started"
    },
    {
      id: "growth",
      name: "Growth",
      desc: "Ideal for growing businesses needing a professional app.",
      popular: true,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "50,000", period: "one-time" },
          yearly: { price: "50,000", period: "one-time" }
        },
        USD: {
          monthly: { price: "699", period: "one-time" },
          yearly: { price: "699", period: "one-time" }
        }
      },
      cta: "Get started"
    },
    {
      id: "scale",
      name: "Scale",
      desc: "Advanced mobile solutions for scaling operations.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "1,00,000", period: "one-time" },
          yearly: { price: "1,00,000", period: "one-time" }
        },
        USD: {
          monthly: { price: "1,399", period: "one-time" },
          yearly: { price: "1,399", period: "one-time" }
        }
      },
      cta: "Get started"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Custom tailored enterprise mobile applications.",
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
      section: "APP BASICS",
      items: [
        { name: "Platform", values: ["Android", "Android + iOS", "Android + iOS", "Custom"] },
        { name: "App Type", values: ["Informative", "Business", "Custom", "Custom"] },
        { name: "Screens", values: ["Up to 5", "Up to 15", "Up to 30", "Custom"] },
        { name: "UI/UX Design", values: ["Basic", "Premium", "Premium", "Custom"] }
      ]
    },
    {
      section: "FEATURES",
      items: [
        { name: "User Login", values: ["✓", "✓", "✓", "✓"] },
        { name: "Admin Panel", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Push Notifications", values: ["✕", "✓", "✓", "✓"] },
        { name: "Booking System", values: ["✕", "Optional", "✓", "Custom"] },
        { name: "E-commerce", values: ["✕", "Basic", "Advanced", "Custom"] }
      ]
    },
    {
      section: "INTEGRATIONS",
      items: [
        { name: "WhatsApp Integration", values: ["✓", "✓", "✓", "✓"] },
        { name: "Google Maps", values: ["✓", "✓", "✓", "✓"] },
        { name: "Payment Gateway", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Database Integration", values: ["Basic", "✓", "✓", "Custom"] },
        { name: "API Integration", values: ["✕", "Basic", "Advanced", "Custom"] }
      ]
    },
    {
      section: "DEPLOYMENT",
      items: [
        { name: "Play Store Deployment", values: ["✓", "✓", "✓", "✓"] },
        { name: "App Store Deployment", values: ["✕", "✓", "✓", "✓"] },
        { name: "Source Code", values: ["✓", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "SUPPORT",
      items: [
        { name: "Post-delivery support", values: ["30 Days", "60 Days", "90 Days", "Custom"] }
      ]
    }
  ],
  customSolutionBox: {
    title: "Need a custom solution?",
    description: "Whether it's a marketplace, on-demand app, social platform, AI-powered mobile app, or any custom application — our Enterprise plan is built around your exact requirements. Contact us for a personalized quote."
  }
};
