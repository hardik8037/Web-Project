export default {
  category: "Web Development",
  id: "webDevelopment",
  plans: [
    {
      id: "starter",
      name: "Starter",
      desc: "Perfect for establishing your initial web presence.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "15,000", period: "one-time" },
          yearly: { price: "15,000", period: "one-time" }
        },
        USD: {
          monthly: { price: "199", period: "one-time" },
          yearly: { price: "199", period: "one-time" }
        }
      },
      cta: "Get started"
    },
    {
      id: "growth",
      name: "Growth",
      desc: "Ideal for growing businesses needing more features.",
      popular: true,
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
      id: "scale",
      name: "Scale",
      desc: "Advanced web solutions for scaling operations.",
      popular: false,
      isCustom: false,
      pricing: {
        INR: {
          monthly: { price: "40,000", period: "one-time" },
          yearly: { price: "40,000", period: "one-time" }
        },
        USD: {
          monthly: { price: "549", period: "one-time" },
          yearly: { price: "549", period: "one-time" }
        }
      },
      cta: "Get started"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Custom tailored enterprise web applications.",
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
      section: "WEBSITE",
      items: [
        { name: "Responsive Website", values: ["✓", "✓", "✓", "✓"] },
        { name: "Custom UI Design", values: ["Basic", "Premium", "Premium", "Custom"] },
        { name: "Pages", values: ["Up to 5", "Up to 10", "Up to 20", "Custom"] },
        { name: "Mobile Responsive", values: ["✓", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "E-COMMERCE",
      items: [
        { name: "E-commerce Website", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Products", values: ["—", "Up to 100", "Up to 500", "Custom"] },
        { name: "Payment Gateway", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Shopping Cart", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Order Management", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Inventory Management", values: ["✕", "Basic", "Advanced", "Custom"] }
      ]
    },
    {
      section: "INTEGRATIONS",
      items: [
        { name: "Contact Form", values: ["✓", "✓", "✓", "✓"] },
        { name: "WhatsApp Integration", values: ["✓", "✓", "✓", "✓"] },
        { name: "Google Maps Integration", values: ["✓", "✓", "✓", "✓"] },
        { name: "API Integration", values: ["✕", "Basic", "Advanced", "Custom"] },
        { name: "Booking System", values: ["✕", "✕", "✓", "Custom"] }
      ]
    },
    {
      section: "CMS & CONTENT",
      items: [
        { name: "Admin Panel / CMS", values: ["✕", "✓", "✓", "Custom"] },
        { name: "Blog", values: ["✕", "✓", "✓", "Custom"] }
      ]
    },
    {
      section: "TECHNICAL",
      items: [
        { name: "Basic SEO", values: ["✓", "✓", "✓", "✓"] },
        { name: "SSL Configuration", values: ["✓", "✓", "✓", "✓"] },
        { name: "Speed Optimization", values: ["✓", "✓", "✓", "✓"] }
      ]
    },
    {
      section: "SUPPORT",
      items: [
        { name: "Post-delivery support", values: ["15 Days", "30 Days", "60 Days", "Custom"] }
      ]
    }
  ],
  customSolutionBox: {
    title: "Need a custom solution?",
    description: "Whether it's a CRM, ERP, LMS, AI-powered platform, marketplace, booking system, or any custom web application, our Enterprise plan is tailored to your unique business requirements. Contact us for a personalized quote."
  }
};
