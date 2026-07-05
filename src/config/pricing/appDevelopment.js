export default {
  category: "App Development",
  id: "appDevelopment",
  plans: [
    {
      id: "basic",
      name: "Basic",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "29,999", period: "/month" },
          yearly: { price: "26,999", period: "/month", was: "was ₹29999/mo" }
        },
        USD: {
          monthly: { price: "399", period: "/month" },
          yearly: { price: "359", period: "/month", was: "was $399/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "growth",
      name: "Growth",
      popular: true,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "59,999", period: "/month" },
          yearly: { price: "53,999", period: "/month", was: "was ₹59999/mo" }
        },
        USD: {
          monthly: { price: "799", period: "/month" },
          yearly: { price: "719", period: "/month", was: "was $799/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "premium",
      name: "Premium",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "99,999", period: "/month" },
          yearly: { price: "89,999", period: "/month", was: "was ₹99999/mo" }
        },
        USD: {
          monthly: { price: "1,299", period: "/month" },
          yearly: { price: "1,169", period: "/month", was: "was $1299/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "enterprise",
      name: "Enterprise",
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
      section: "Platforms & Core",
      items: [
        { name: "Platforms Supported", values: ["Android", "iOS & Android", "Native iOS & Android", "Custom"] },
        { name: "UI/UX Design", values: ["Template", "Custom", "Premium Custom", "Enterprise"] },
        { name: "User Authentication", values: ["✓", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "Advanced Features",
      items: [
        { name: "Push Notifications", values: ["—", "✓", "✓", "✓"] },
        { name: "In-App Payments", values: ["—", "✓", "✓", "✓"] },
        { name: "Real-time Chat", values: ["—", "—", "✓", "✓"] },
        { name: "Offline Mode", values: ["—", "—", "✓", "✓"] }
      ]
    },
    {
      section: "Deployment & Support",
      items: [
        { name: "App Store Submission", values: ["✓", "✓", "✓", "✓"] },
        { name: "App Store Optimization", values: ["—", "✓", "✓", "✓"] },
        { name: "Maintenance & Updates", values: ["1 Month", "3 Months", "6 Months", "Custom"] }
      ]
    }
  ]
};
