export default {
  category: "Web Development",
  id: "webDevelopment",
  plans: [
    {
      id: "starter",
      name: "Starter",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "9,999", period: "/month" },
          yearly: { price: "8,999", period: "/month", was: "was ₹9999/mo" }
        },
        USD: {
          monthly: { price: "120", period: "/month" },
          yearly: { price: "110", period: "/month", was: "was $120/mo" }
        }
      },
      cta: "Get started"
    },
    {
      id: "business",
      name: "Business",
      popular: true,
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
      id: "professional",
      name: "Professional",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "49,999", period: "/month" },
          yearly: { price: "44,999", period: "/month", was: "was ₹49999/mo" }
        },
        USD: {
          monthly: { price: "599", period: "/month" },
          yearly: { price: "539", period: "/month", was: "was $599/mo" }
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
      section: "Design & UX",
      items: [
        { name: "Pages", values: ["Up to 5", "Up to 15", "Unlimited", "Custom"] },
        { name: "Custom Design", values: ["✓", "✓", "✓", "✓"] },
        { name: "Mobile Responsive", values: ["✓", "✓", "✓", "✓"] },
        { name: "Animations", values: ["Basic", "Advanced", "Premium", "Custom"] }
      ]
    },
    {
      section: "Development",
      items: [
        { name: "CMS Integration", values: ["—", "✓", "✓", "✓"] },
        { name: "E-commerce Support", values: ["—", "—", "✓", "✓"] },
        { name: "Custom API Integration", values: ["—", "—", "✓", "✓"] },
        { name: "Speed Optimization", values: ["Basic", "Advanced", "Advanced", "Enterprise"] }
      ]
    },
    {
      section: "Support & Maintenance",
      items: [
        { name: "Hosting Included", values: ["1 Year", "1 Year", "1 Year", "Custom"] },
        { name: "Monthly Maintenance", values: ["—", "2 Hours", "5 Hours", "Custom"] },
        { name: "Dedicated Manager", values: ["—", "—", "✓", "✓"] }
      ]
    }
  ]
};
