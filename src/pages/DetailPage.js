/* ═══════════════════════════════════════════════════
   BOTZO.IO — UNIFIED DETAIL PAGE BUILDER
   One template for Platform, Services & Use Cases.
   Supports flagship (deep) & secondary (light) pages.
   Features a live, interactive WhatsApp simulator.
   ═══════════════════════════════════════════════════ */

import { createFinalCTA } from '../sections/FinalCTA.js';

// Custom interactive flows for all 12 solution industries
const SOLUTIONS_DEMO_FLOWS = {
  'real-estate': {
    botName: "PropStar Realty Bot",
    avatar: "🏠",
    initialText: "Welcome to PropStar Realty! 🏠 Let's find your dream home. Choose your preferred BHK size:",
    buttons: ["1 BHK", "2 BHK", "3 BHK"],
    states: {
      "1 BHK": {
        text: "Here are our premium 1BHK listings in Whitefield:\n\n📍 **Brigade Oasis** — ₹45 Lakhs\n📍 **Prestige Boulevard** — ₹52 Lakhs\n\nWould you like to book a site visit?",
        buttons: ["Book Site Visit 📅", "Speak to Agent 📞"]
      },
      "2 BHK": {
        text: "Here are our premium 2BHK listings in Whitefield:\n\n📍 **Brigade Meadow** — ₹78 Lakhs\n📍 **Prestige Glenwood** — ₹85 Lakhs\n\nWould you like to book a site visit?",
        buttons: ["Book Site Visit 📅", "Speak to Agent 📞"]
      },
      "3 BHK": {
        text: "Here are our premium 3BHK listings in Whitefield:\n\n📍 **Brigade Orchards** — ₹1.05 Cr\n📍 **Prestige Lakeside** — ₹1.18 Cr\n\nWould you like to book a site visit?",
        buttons: ["Book Site Visit 📅", "Speak to Agent 📞"]
      },
      "Speak to Agent 📞": {
        text: "Connecting you with our lead property advisor. They will call you on your registered number in less than 2 minutes. 📞",
        buttons: ["Restart Demo 🔄"]
      },
      "Book Site Visit 📅": {
        text: "Please select a preferred date for your tour:",
        inputType: "date-picker",
        nextState: "SELECT_TIME"
      },
      "SELECT_TIME": {
        text: "Great! Select your preferred time slot for your visit:",
        inputType: "time-picker",
        nextState: "CONFIRM_BOOKING"
      },
      "CONFIRM_BOOKING": {
        inputType: "confirmation",
        confDetails: {
          service: "Site Visit Tour",
          location: "Brigade Orchards, Whitefield",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Ravi Kumar (Agent)"
        },
        confActions: [
          { label: "📍 Get Directions", val: "https://maps.google.com" },
          { label: "📅 Add to Calendar", val: "calendar" }
        ],
        text: "Booking Confirmed! 🎉 Your site visit tour for **Brigade Orchards** is scheduled for {{date}} at {{time}}. A calendar invitation and advisor details have been sent. See you there!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'healthcare': {
    botName: "HealthFirst Clinic",
    avatar: "🏥",
    initialText: "Welcome to HealthFirst Clinic! 🏥 Let's book your doctor consultation. Choose department:",
    buttons: ["Cardiology 🫀", "Dermatology 🩺", "Pediatrics 👶"],
    states: {
      "Cardiology 🫀": {
        text: "Select Cardiology Specialist:",
        buttons: ["Dr. Sharma (Cardiology)", "Dr. Patel (Cardiology)"]
      },
      "Dermatology 🩺": {
        text: "Select Dermatology Specialist:",
        buttons: ["Dr. Verma (Dermatology)", "Dr. Roy (Dermatology)"]
      },
      "Pediatrics 👶": {
        text: "Select Pediatrics Specialist:",
        buttons: ["Dr. Iyer (Pediatrics)", "Dr. Gupta (Pediatrics)"]
      },
      "Dr. Sharma (Cardiology)": { text: "Doctor selected: Dr. Sharma. Choose Date:", inputType: "date-picker", nextState: "SELECT_TIME" },
      "Dr. Patel (Cardiology)": { text: "Doctor selected: Dr. Patel. Choose Date:", inputType: "date-picker", nextState: "SELECT_TIME" },
      "Dr. Verma (Dermatology)": { text: "Doctor selected: Dr. Verma. Choose Date:", inputType: "date-picker", nextState: "SELECT_TIME" },
      "Dr. Roy (Dermatology)": { text: "Doctor selected: Dr. Roy. Choose Date:", inputType: "date-picker", nextState: "SELECT_TIME" },
      "Dr. Iyer (Pediatrics)": { text: "Doctor selected: Dr. Iyer. Choose Date:", inputType: "date-picker", nextState: "SELECT_TIME" },
      "Dr. Gupta (Pediatrics)": { text: "Doctor selected: Dr. Gupta. Choose Date:", inputType: "date-picker", nextState: "SELECT_TIME" },
      "SELECT_TIME": {
        text: "Select your preferred time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_BOOKING"
      },
      "CONFIRM_BOOKING": {
        inputType: "confirmation",
        confDetails: {
          service: "Doctor Consultation",
          location: "HealthFirst Clinic, Sector 15",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "{{doctor}}"
        },
        confActions: [
          { label: "📍 Get Directions", val: "https://maps.google.com" },
          { label: "📞 Contact Clinic", val: "tel:+12345" }
        ],
        text: "Appointment Booked! 📅 Your consultation with **{{doctor}}** is scheduled for {{date}} at {{time}}. A confirmation receipt has been sent.",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'ecommerce': {
    botName: "StyleKart Store",
    avatar: "🛍️",
    initialText: "Hey Priya! 👋 You left items in your cart. We saved them for you:\n\n👟 **Nike Air Max 270** — ₹9,999\n👕 **Cotton Crew Tee** — ₹1,299\n\nTotal: **₹11,298**",
    buttons: ["Checkout (10% Off) 💳", "View Details 🛒"],
    states: {
      "View Details 🛒": {
        text: "Items in Cart:\n1️⃣ Nike Air Max 270 (Size 9) - ₹9,999\n2️⃣ Cotton Crew Tee (M) - ₹1,299\n\nWould you like to proceed with checkout?",
        buttons: ["Checkout (10% Off) 💳"]
      },
      "Checkout (10% Off) 💳": {
        text: "Discount code **SAVE10** applied! 🎉 New total: **₹10,168**. Select payment method:",
        buttons: ["Pay on WhatsApp 📱", "UPI / Card Link 🔗"]
      },
      "Pay on WhatsApp 📱": {
        inputType: "confirmation",
        confDetails: {
          service: "Order Confirmation",
          location: "Shipped to: 72, Park Street",
          date: "3-5 Business Days",
          time: "Express Shipping",
          advisor: "Order #ORD-8291"
        },
        confActions: [
          { label: "🚚 Track Package", val: "track" },
          { label: "📞 Support Chat", val: "support" }
        ],
        text: "Payment Confirmed! 🎉 Your order **#ORD-8291** has been placed and is being packed. Estimated delivery: 3 days. Thank you!",
        buttons: ["Restart Demo 🔄"]
      },
      "UPI / Card Link 🔗": {
        inputType: "confirmation",
        confDetails: {
          service: "Order Confirmation",
          location: "Shipped to: 72, Park Street",
          date: "3-5 Business Days",
          time: "Standard Shipping",
          advisor: "Order #ORD-8291"
        },
        confActions: [
          { label: "🚚 Track Package", val: "track" },
          { label: "📞 Support Chat", val: "support" }
        ],
        text: "Payment Confirmed! 🎉 Your order **#ORD-8291** has been placed and is being packed. Estimated delivery: 3 days. Thank you for shopping with StyleKart!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'restaurants': {
    botName: "Italiano Pizza",
    avatar: "🍕",
    initialText: "Welcome to Italiano Pizza! 🍕 Would you like to order online or book a table?",
    buttons: ["Order Online 🛵", "Book a Table 🍽️"],
    states: {
      "Order Online 🛵": {
        text: "Select your favorite pizza from our online menu:",
        buttons: ["Margherita - ₹349", "Pepperoni - ₹449", "Veggie Delight - ₹399"]
      },
      "Margherita - ₹349": { text: "Selected: Margherita Pizza. Confirm delivery address: **72, Park Street, Sector 4**", buttons: ["Confirm & Pay 💳", "Change Address ✏️"] },
      "Pepperoni - ₹449": { text: "Selected: Pepperoni Pizza. Confirm delivery address: **72, Park Street, Sector 4**", buttons: ["Confirm & Pay 💳", "Change Address ✏️"] },
      "Veggie Delight - ₹399": { text: "Selected: Veggie Delight. Confirm delivery address: **72, Park Street, Sector 4**", buttons: ["Confirm & Pay 💳", "Change Address ✏️"] },
      "Change Address ✏️": { text: "Please enter your address. Let's proceed with current address for demo:", buttons: ["Confirm & Pay 💳"] },
      "Confirm & Pay 💳": {
        inputType: "confirmation",
        confDetails: {
          service: "Pizza Delivery",
          location: "72, Park Street, Sector 4",
          date: "Today",
          time: "30 Mins ETA",
          advisor: "Order #IT-4892"
        },
        confActions: [
          { label: "🛵 Live Tracker", val: "track" },
          { label: "📞 Call Rider", val: "tel:+12345" }
        ],
        text: "Order Received! 🛵 Your hot pizza is being prepared and will be delivered in 30 minutes. Tracker: botzo.io/track/it-489",
        buttons: ["Restart Demo 🔄"]
      },
      "Book a Table 🍽️": {
        text: "Select table size:",
        buttons: ["2 Guests", "4 Guests", "6+ Guests"]
      },
      "2 Guests": { text: "Table for 2. Select Date:", inputType: "date-picker", nextState: "SELECT_TIME_TABLE" },
      "4 Guests": { text: "Table for 4. Select Date:", inputType: "date-picker", nextState: "SELECT_TIME_TABLE" },
      "6+ Guests": { text: "Table for 6+. Select Date:", inputType: "date-picker", nextState: "SELECT_TIME_TABLE" },
      "SELECT_TIME_TABLE": {
        text: "Select reservation time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_TABLE"
      },
      "CONFIRM_TABLE": {
        inputType: "confirmation",
        confDetails: {
          service: "Table Reservation",
          location: "Italiano Pizza Hall",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Table for {{guests}}"
        },
        confActions: [
          { label: "📍 Get Directions", val: "https://maps.google.com" },
          { label: "📞 Call Manager", val: "tel:+123" }
        ],
        text: "Table Reserved! 🥂 Table reservation is confirmed for {{date}} at {{time}} for {{guests}}. We look forward to hosting you!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'education': {
    botName: "Stanford Admissions",
    avatar: "🎓",
    initialText: "Stanford Admissions Portal 🎓 How can we assist you with your application today?",
    buttons: ["Check Admission Status 📋", "Admission FAQs ❓", "Book Campus Tour 🏫"],
    states: {
      "Admission FAQs ❓": {
        text: "FAQs:\n1. Application fee: Free via referral.\n2. Deadline: July 31st.\n\nWould you like to check your status?",
        buttons: ["Check Admission Status 📋"]
      },
      "Check Admission Status 📋": {
        text: "Choose your admission track:",
        buttons: ["Undergraduate (UG)", "Postgraduate (PG)"]
      },
      "Undergraduate (UG)": { text: "UG Track selected. Pre-screening successful! 🎉 You have been shortlisted. Book your interview slot:", buttons: ["Book Interview 📅"] },
      "Postgraduate (PG)": { text: "PG Track selected. Pre-screening successful! 🎉 You have been shortlisted. Book your interview slot:", buttons: ["Book Interview 📅"] },
      "Book Interview 📅": {
        text: "Select a date for your Admissions Interview:",
        inputType: "date-picker",
        nextState: "SELECT_TIME_INT"
      },
      "SELECT_TIME_INT": {
        text: "Select interview time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_INT"
      },
      "CONFIRM_INT": {
        inputType: "confirmation",
        confDetails: {
          service: "Admission Interview",
          location: "Zoom Room 3",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Panel B (Stanford)"
        },
        confActions: [
          { label: "💻 Join Zoom Room", val: "https://zoom.us" },
          { label: "📅 Add to Calendar", val: "calendar" }
        ],
        text: "Interview Booked! 🗓️ Your admissions interview is confirmed for {{date}} at {{time}}. Zoom invitation link has been dispatched.",
        buttons: ["Restart Demo 🔄"]
      },
      "Book Campus Tour 🏫": {
        text: "Select date for your Campus Tour:",
        inputType: "date-picker",
        nextState: "SELECT_TIME_TOUR"
      },
      "SELECT_TIME_TOUR": {
        text: "Select tour time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_TOUR"
      },
      "CONFIRM_TOUR": {
        inputType: "confirmation",
        confDetails: {
          service: "Campus Tour",
          location: "Visitor Center Gate A",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Guide Priya"
        },
        confActions: [
          { label: "📍 View Map", val: "https://maps.google.com" },
          { label: "📅 Add to Calendar", val: "calendar" }
        ],
        text: "Tour Confirmed! 🏫 See you at the Stanford campus on {{date}} at {{time}}. Bring your student ID.",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'textile': {
    botName: "Jaipur Textiles",
    avatar: "🧵",
    initialText: "Namaste! 🧵 Jaipur Textiles Wholesale Portal. Explore our Summer 2026 collections.",
    buttons: ["Browse Catalog 📂", "Wholesale Inquiry 💰"],
    states: {
      "Browse Catalog 📂": {
        text: "Catalog sent! 📂 Summer-Collection-2026.pdf (4.8 MB) is ready for download.\n\nWould you like to schedule a call with our wholesale manager?",
        buttons: ["Book Callback 📞", "No, Thanks ❌"]
      },
      "No, Thanks ❌": {
        text: "Thank you for browsing! Let us know if you need anything else.",
        buttons: ["Restart Demo 🔄"]
      },
      "Wholesale Inquiry 💰": {
        text: "Select your minimum order quantity (MOQ) interest:",
        buttons: ["100-500 meters", "500-1000 meters", "1000+ meters"]
      },
      "100-500 meters": { text: "MOQ 100-500m selected. Let's schedule a callback to discuss wholesale rates:", buttons: ["Book Callback 📞"] },
      "500-1000 meters": { text: "MOQ 500-1000m selected. Let's schedule a callback to discuss wholesale rates:", buttons: ["Book Callback 📞"] },
      "1000+ meters": { text: "MOQ 1000+m selected. Let's schedule a callback to discuss wholesale rates:", buttons: ["Book Callback 📞"] },
      "Book Callback 📞": {
        text: "Select a date for the callback:",
        inputType: "date-picker",
        nextState: "SELECT_TIME_CALL"
      },
      "SELECT_TIME_CALL": {
        text: "Select your preferred time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_CALL"
      },
      "CONFIRM_CALL": {
        inputType: "confirmation",
        confDetails: {
          service: "Wholesale Callback",
          location: "Phone Consultation",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Manager Raj"
        },
        confActions: [
          { label: "📞 Add to Calendar", val: "calendar" }
        ],
        text: "Callback Scheduled! 📞 We will call you on {{date}} at {{time}} to discuss bulk volume pricing. Talk soon!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'jewellery': {
    botName: "Aura Fine Jewellery",
    avatar: "💎",
    initialText: "Welcome to Aura Fine Jewellery! 💎 Book a VIP viewing of our Bridal Gold Collection.",
    buttons: ["In-Store Visit 🏢", "Virtual Consultation 📹"],
    states: {
      "In-Store Visit 🏢": {
        text: "Select your preferred branch:",
        buttons: ["Colaba, Mumbai", "GK, Delhi"]
      },
      "Colaba, Mumbai": { text: "Branch Selected: Colaba. Select date for your VIP store visit:", inputType: "date-picker", nextState: "SELECT_TIME_STORE" },
      "GK, Delhi": { text: "Branch Selected: GK, Delhi. Select date for your VIP store visit:", inputType: "date-picker", nextState: "SELECT_TIME_STORE" },
      "SELECT_TIME_STORE": {
        text: "Select time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_STORE"
      },
      "CONFIRM_STORE": {
        inputType: "confirmation",
        confDetails: {
          service: "VIP Store Visit",
          location: "{{branch}}",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "VIP Consultant"
        },
        confActions: [
          { label: "📍 View Map", val: "https://maps.google.com" },
          { label: "📞 Call Showroom", val: "tel:+123" }
        ],
        text: "Appointment Confirmed! 🌟 A private VIP consultant has been reserved for you at our {{branch}} branch on {{date}} at {{time}}.",
        buttons: ["Restart Demo 🔄"]
      },
      "Virtual Consultation 📹": {
        text: "Select date for your video consultation:",
        inputType: "date-picker",
        nextState: "SELECT_TIME_VIRT"
      },
      "SELECT_TIME_VIRT": {
        text: "Select time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_VIRT"
      },
      "CONFIRM_VIRT": {
        inputType: "confirmation",
        confDetails: {
          service: "Virtual Consultation",
          location: "Google Meet Link",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Aura Designer"
        },
        confActions: [
          { label: "💻 Google Meet Link", val: "https://meet.google.com" },
          { label: "📅 Add to Calendar", val: "calendar" }
        ],
        text: "Video Call Scheduled! 📹 You will receive a video call invitation link for {{date}} at {{time}}. Get ready to view our collection!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'events': {
    botName: "TechSummit 2026",
    avatar: "🎪",
    initialText: "Welcome to TechSummit 2026! 🎪 Register and get your entrance passes instantly.",
    buttons: ["VIP Pass - ₹4999 👑", "General Pass - ₹1499 🎫"],
    states: {
      "VIP Pass - ₹4999 👑": { text: "Pass Type: VIP Pass. Select your attendance date:", buttons: ["Day 1 (Oct 12)", "Day 2 (Oct 13)", "Both Days"] },
      "General Pass - ₹1499 🎫": { text: "Pass Type: General Pass. Select your attendance date:", buttons: ["Day 1 (Oct 12)", "Day 2 (Oct 13)", "Both Days"] },
      "Day 1 (Oct 12)": { text: "Selected: Day 1. Please confirm your registration email: **priya@example.com**", buttons: ["Confirm & Pay 💳", "Change Email ✏️"] },
      "Day 2 (Oct 13)": { text: "Selected: Day 2. Please confirm your registration email: **priya@example.com**", buttons: ["Confirm & Pay 💳", "Change Email ✏️"] },
      "Both Days": { text: "Selected: Both Days. Please confirm your registration email: **priya@example.com**", buttons: ["Confirm & Pay 💳", "Change Email ✏️"] },
      "Change Email ✏️": { text: "Please key in email. Let's proceed with current for demo:", buttons: ["Confirm & Pay 💳"] },
      "Confirm & Pay 💳": {
        inputType: "confirmation",
        confDetails: {
          service: "TechSummit Pass",
          location: "Nesco, Mumbai",
          date: "Oct 12-13, 2026",
          time: "09:00 AM onwards",
          advisor: "Pass: {{pass}}"
        },
        confActions: [
          { label: "📥 Download Ticket", val: "ticket" },
          { label: "📍 View Venue", val: "https://maps.google.com" }
        ],
        text: "Payment Confirmed! 🎉 Your ticket has been generated. Show the QR code at the entrance check-in. Welcome to TechSummit 2026!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'automotive': {
    botName: "AutoDrive Motors",
    avatar: "🚗",
    initialText: "AutoDrive Motors 🚗 Book a test drive of our bestselling EV models.",
    buttons: ["SUV - Nexon EV ⚡", "Sedan - Curvv EV 🏎️"],
    states: {
      "SUV - Nexon EV ⚡": { text: "Nexon EV. Choose test drive location preference:", buttons: ["Home Test Drive 🏠", "Showroom Visit 🏢"] },
      "Sedan - Curvv EV 🏎️": { text: "Curvv EV. Choose test drive location preference:", buttons: ["Home Test Drive 🏠", "Showroom Visit 🏢"] },
      "Home Test Drive 🏠": { text: "Selected: Home Test Drive. Select date for your test drive:", inputType: "date-picker", nextState: "SELECT_TIME_AUTO" },
      "Showroom Visit 🏢": { text: "Selected: Showroom Visit. Select date for your test drive:", inputType: "date-picker", nextState: "SELECT_TIME_AUTO" },
      "SELECT_TIME_AUTO": {
        text: "Select time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_AUTO"
      },
      "CONFIRM_AUTO": {
        inputType: "confirmation",
        confDetails: {
          service: "Test Drive",
          location: "{{location}}",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Rohan (Advisor)"
        },
        confActions: [
          { label: "📍 Show Route", val: "https://maps.google.com" },
          { label: "📞 Advisor Call", val: "tel:+123" }
        ],
        text: "Booking Confirmed! 🚗 Your test drive for **{{model}}** is scheduled for {{date}} at {{time}}. Our advisor will contact you shortly.",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'travel': {
    botName: "WanderLux Travel",
    avatar: "✈️",
    initialText: "WanderLux Travel ✈️ Let's plan your holiday getaway. Choose destination:",
    buttons: ["Bali Tropical 🌴", "Switzerland Alps 🏔️"],
    states: {
      "Bali Tropical 🌴": { text: "Bali Tropical selected. Choose package duration:", buttons: ["5 Days / 4 Nights", "7 Days / 6 Nights"] },
      "Switzerland Alps 🏔️": { text: "Switzerland Alps selected. Choose package duration:", buttons: ["5 Days / 4 Nights", "7 Days / 6 Nights"] },
      "5 Days / 4 Nights": { text: "Duration: 5D/4N. Select departure date:", inputType: "date-picker", nextState: "SELECT_TIME_TRAV" },
      "7 Days / 6 Nights": { text: "Duration: 7D/6N. Select departure date:", inputType: "date-picker", nextState: "SELECT_TIME_TRAV" },
      "SELECT_TIME_TRAV": {
        text: "Let's book a callback with our travel advisor to customize details:",
        inputType: "time-picker",
        nextState: "CONFIRM_TRAV"
      },
      "CONFIRM_TRAV": {
        inputType: "confirmation",
        confDetails: {
          service: "Travel consultation",
          location: "Phone Callback",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Aisha (Specialist)"
        },
        confActions: [
          { label: "📅 Add to Calendar", val: "calendar" }
        ],
        text: "Consultation Booked! ✈️ Travel specialist Aisha will call you on {{date}} at {{time}} with your customized travel package. Have a safe flight!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'fitness': {
    botName: "FitZone Gym",
    avatar: "💪",
    initialText: "FitZone Gym 💪 Book your free trial workout session.",
    buttons: ["CrossFit Blast 🏋️", "Yoga & Mindfulness 🧘"],
    states: {
      "CrossFit Blast 🏋️": { text: "CrossFit Blast. Select date for your trial session:", inputType: "date-picker", nextState: "SELECT_TIME_FIT" },
      "Yoga & Mindfulness 🧘": { text: "Yoga & Mindfulness. Select date for your trial session:", inputType: "date-picker", nextState: "SELECT_TIME_FIT" },
      "SELECT_TIME_FIT": {
        text: "Select workout time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_FIT"
      },
      "CONFIRM_FIT": {
        inputType: "confirmation",
        confDetails: {
          service: "Trial Session",
          location: "FitZone Gym Main",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Trainer Neha"
        },
        confActions: [
          { label: "📍 View Gym Location", val: "https://maps.google.com" },
          { label: "📞 Support Desk", val: "tel:+123" }
        ],
        text: "Session Confirmed! 🥊 Your trial session is scheduled for {{date}} at {{time}}. Show this message at reception for entry. Get ready to sweat!",
        buttons: ["Restart Demo 🔄"]
      }
    }
  },
  'finance': {
    botName: "TrustBank Assistant",
    avatar: "🏦",
    initialText: "TrustBank Secure Assistant 🏦 How can we assist you today?",
    buttons: ["Check Balance 💰", "Apply for Loan 📋"],
    states: {
      "Check Balance 💰": {
        text: "Authentication successful. Select account:",
        buttons: ["Primary Savings", "Secondary Current"]
      },
      "Primary Savings": {
        text: "Your Primary Savings Balance: **₹48,920.50**\nLast transaction: ₹1,200 (Razorpay deposit)",
        buttons: ["Restart Demo 🔄"]
      },
      "Secondary Current": {
        text: "Your Secondary Current Balance: **₹3,12,050.12**\nLast transaction: ₹24,000 (Stripe payout)",
        buttons: ["Restart Demo 🔄"]
      },
      "Apply for Loan 📋": {
        text: "Select loan category:",
        buttons: ["Home Loan 🏠", "Personal Loan 💳"]
      },
      "Home Loan 🏠": { text: "Home Loan selected. You qualify for pre-approved limit. Book a callback with a loan officer:", buttons: ["Book Agent Callback 📞"] },
      "Personal Loan 💳": { text: "Personal Loan selected. You qualify for pre-approved limit. Book a callback with a loan officer:", buttons: ["Book Agent Callback 📞"] },
      "Book Agent Callback 📞": {
        text: "Select date for the call:",
        inputType: "date-picker",
        nextState: "SELECT_TIME_FIN"
      },
      "SELECT_TIME_FIN": {
        text: "Select time slot:",
        inputType: "time-picker",
        nextState: "CONFIRM_FIN"
      },
      "CONFIRM_FIN": {
        inputType: "confirmation",
        confDetails: {
          service: "Loan Consultation",
          location: "Phone Callback",
          date: "{{date}}",
          time: "{{time}}",
          advisor: "Rohit (Agent)"
        },
        confActions: [
          { label: "📅 Add to Calendar", val: "calendar" }
        ],
        text: "Callback Booked! 📞 Agent Rohit will call you on {{date}} at {{time}} to process documents.",
        buttons: ["Restart Demo 🔄"]
      }
    }
  }
};

// Key capability highlights displayed next to the mobile mockup for each solution flow
const SIMULATOR_HIGHLIGHTS = {
  'real-estate': [
    { icon: '🏠', title: 'Property Preferences', desc: 'Prospects select BHK, budget, and location preferences directly in chat.' },
    { icon: '📅', title: 'Site Visit Scheduling', desc: 'Pick date and time slot for physical/virtual property walk-through.' },
    { icon: '📍', title: 'Instant Confirmation', desc: 'Get address, agent contact, and Google Maps location ticket instantly.' }
  ],
  'healthcare': [
    { icon: '🩺', title: 'Department Selection', desc: 'Choose department (General, Cardiology, etc.) and check doctor availability.' },
    { icon: '👤', title: 'Preferred Doctor Pick', desc: 'Select from available doctors based on timing and specialty.' },
    { icon: '🎟️', title: 'Appointment Ticket', desc: 'Instant confirmation ticket with serial number and appointment details.' }
  ],
  'ecommerce': [
    { icon: '🛒', title: 'Cart Recovery Alert', desc: 'Trigger WhatsApp alerts for users who left items in their checkout cart.' },
    { icon: '🎟️', title: 'Discount Application', desc: 'User applies a coupon code via quick replies for price drop.' },
    { icon: '💳', title: 'WhatsApp Pay Flow', desc: 'Simulated payment processing and instant shipping/tracking update.' }
  ],
  'restaurants': [
    { icon: '🍽️', title: 'Delivery vs Booking', desc: 'Choose between ordering food or reserving a table at the restaurant.' },
    { icon: '🍕', title: 'Interactive Menu', desc: 'Browse dishes, customize order size, and confirm address details.' },
    { icon: '📅', title: 'Table Reservation', desc: 'Specify number of guests, pick date/time slot, and receive reservation.' }
  ],
  'education': [
    { icon: '🎓', title: 'Course Shortlisting', desc: 'Select between UG/PG tracks and choose specific streams.' },
    { icon: '📅', title: 'Admissions Interview', desc: 'Schedule counselor discussion by selecting available time slots.' },
    { icon: '💻', title: 'Zoom Invite Ticket', desc: 'Instant interview invite with a functional direct Zoom link.' }
  ],
  'textile': [
    { icon: '🧵', title: 'Catalog Inspection', desc: 'Browse fabric types, colors, and minimum order quantities.' },
    { icon: '📦', title: 'Bulk Order Qualification', desc: 'Qualify bulk inquiry details and specify requirements.' },
    { icon: '📞', title: 'Callback Scheduling', desc: 'Schedule a call with the B2B sales manager in seconds.' }
  ],
  'jewellery': [
    { icon: '💎', title: 'Consultation Mode', desc: 'Choose between visiting the physical showroom or virtual consultations.' },
    { icon: '🏪', title: 'Branch Selection', desc: 'Select the nearest physical outlet based on area availability.' },
    { icon: '🎟️', title: 'VIP Consultation Pass', desc: 'Receive a personalized VIP entry receipt and contact details.' }
  ],
  'events': [
    { icon: '🎫', title: 'Pass Tier Selection', desc: 'Choose between VIP passes or General entry passes.' },
    { icon: '📅', title: 'Day Selection', desc: 'Select which day of the multi-day summit you wish to attend.' },
    { icon: '📧', title: 'Digital Pass Receipt', desc: 'Receive instant barcode confirmation with details.' }
  ],
  'automotive': [
    { icon: '🚗', title: 'Vehicle Selection', desc: 'Choose electric vehicle model for test drive (Nexon EV vs Curvv EV).' },
    { icon: '🏠', title: 'Visit Type Selection', desc: 'Opt for showroom test drive or home delivery test drive.' },
    { icon: '📅', title: 'Time Slot Booking', desc: 'Select date and time slot with agent assignment.' }
  ],
  'travel': [
    { icon: '✈️', title: 'Destination Browse', desc: 'Select premium tour packages (Bali / Switzerland).' },
    { icon: '🗓️', title: 'Duration Selector', desc: 'Specify number of nights and select departure dates.' },
    { icon: '📞', title: 'Planner Consultation', desc: 'Book direct phone call session with a travel consultant.' }
  ],
  'fitness': [
    { icon: '💪', title: 'Workout Selection', desc: 'Choose between HIIT/CrossFit or Yoga trials.' },
    { icon: '📅', title: 'Trial Scheduler', desc: 'Select convenient trial date and time slots.' },
    { icon: '🎟️', title: 'Entry Pass Receipt', desc: 'Get trial class booking confirmation details in chat.' }
  ],
  'finance': [
    { icon: '💰', title: 'Self-Service Options', desc: 'Check accounts balance or apply for new personal/home loans.' },
    { icon: '📊', title: 'Agent Callback Book', desc: 'Schedule a loan expert consultation call.' },
    { icon: '📅', title: 'Schedule Confirmation', desc: 'Get meeting date/time confirmation and tracking number.' }
  ]
};

// Interactive Simulator engine execution
function initWhatsAppSimulator(container, slug) {
  const flow = SOLUTIONS_DEMO_FLOWS[slug];
  if (!flow) return;

  // Session variables
  let tempDate = "";
  let tempTime = "";
  let tempBranch = "";
  let tempGuests = "";
  let tempLocation = "";
  let tempModel = "";
  let tempPass = "";
  let tempDoctor = "";

  container.innerHTML = `
    <div class="wa-screen" style="height: 100%; width: 100%; display: flex; flex-direction: column; background: #0b141a; overflow: hidden; border-radius: 28px; border: none; font-family: var(--font-body);">
      <!-- WhatsApp Header -->
      <div class="wa-topbar" style="background: #1f2c34; padding: 0.5rem 0.6rem; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; border-bottom: 1px solid rgba(0,0,0,0.15);">
        <div class="wa-topbar-left" style="display: flex; align-items: center; gap: 0.4rem;">
          <div class="wa-avatar" style="width: 32px; height: 32px; border-radius: 50%; background: #0b3d2e; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05);">
            ${flow.avatar}
          </div>
          <div class="wa-contact-info" style="line-height: 1.2;">
            <div class="wa-contact-name" style="font-size: 0.78rem; font-weight: 600; color: #e9edef;">${flow.botName}</div>
            <div class="wa-contact-status" id="wa-status-${slug}" style="font-size: 0.6rem; color: #8696a0;">Online</div>
          </div>
        </div>
        <div style="opacity: 0.6; font-size: 0.8rem; display: flex; gap: 0.5rem; color: #fff; cursor: pointer;">
          <span>📞</span><span>📹</span><span>⋮</span>
        </div>
      </div>
      
      <!-- Chat Body -->
      <div class="wa-chat-body" id="wa-chat-body-${slug}" style="flex: 1; overflow-y: auto; padding: 0.6rem; display: flex; flex-direction: column; gap: 0.4rem; position: relative;">
      </div>
      
      <!-- Typing Indicator -->
      <div id="wa-typing-${slug}" style="display: none; padding: 0.4rem 0.6rem; z-index: 2; align-self: flex-start; margin-bottom: 0.4rem;">
        <div class="wa-typing-dots" style="background: #1f2c34; border-radius: 7.5px; border-top-left-radius: 0; padding: 0.45rem 0.7rem; display: inline-flex; gap: 0.2rem; align-items: center;">
          <span></span><span></span><span></span>
        </div>
      </div>

      <!-- Footer input bar -->
      <div class="wa-input-bar" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.5rem; background: #0b141a; flex-shrink: 0; border-top: 1px solid rgba(255,255,255,0.04);">
        <div class="wa-input-capsule" style="background:#1f2c34; border-radius:24px; padding:0.4rem 0.8rem; display:flex; flex:1; align-items:center; gap:0.5rem; opacity: 0.7;">
          <span style="font-size:0.8rem; color:#8696a0;">😀</span>
          <span style="font-size:0.75rem; color:#8696a0; flex:1;">Message</span>
          <span style="font-size:0.8rem; color:#8696a0;">📎</span>
        </div>
        <div class="wa-mic-btn" style="background:#00a884; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:0.8rem; opacity: 0.7;">
          <span>🎤</span>
        </div>
      </div>
    </div>
  `;

  const chatBody = container.querySelector(`#wa-chat-body-${slug}`);
  const statusLabel = container.querySelector(`#wa-status-${slug}`);
  const typingIndicator = container.querySelector(`#wa-typing-${slug}`);

  const getFormattedTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const replaceTemplates = (text) => {
    if (!text) return "";
    return text
      .replace(/{{date}}/g, tempDate || "")
      .replace(/{{time}}/g, tempTime || "")
      .replace(/{{branch}}/g, tempBranch || "")
      .replace(/{{guests}}/g, tempGuests || "")
      .replace(/{{location}}/g, tempLocation || "")
      .replace(/{{model}}/g, tempModel || "")
      .replace(/{{pass}}/g, tempPass || "")
      .replace(/{{doctor}}/g, tempDoctor || "");
  };

  const appendMessage = (sender, text, buttons = null) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `wa-msg wa-msg-${sender === 'user' ? 'outgoing' : 'incoming'}`;
    msgDiv.style.display = 'flex';
    msgDiv.style.justifyContent = sender === 'user' ? 'flex-end' : 'flex-start';
    msgDiv.style.marginBottom = '0.4rem';
    
    const formattedText = replaceTemplates(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    const hasButtons = buttons && buttons.length > 0;

    msgDiv.innerHTML = `
      <div style="display: flex; flex-direction: column; width: 100%; max-width: 85%; align-items: ${sender === 'user' ? 'flex-end' : 'flex-start'};">
        <div class="wa-bubble wa-bubble-${sender === 'user' ? 'outgoing' : 'incoming'} ${hasButtons ? 'wa-bubble-has-buttons' : ''}" style="width: 100%; padding: 0.45rem 0.6rem; border-radius: 7.5px; font-size: 0.76rem; line-height: 1.45; position: relative; word-wrap: break-word; background: ${sender === 'user' ? '#005c4b' : '#1f2c34'}; color: #e9edef; border-top-${sender === 'user' ? 'right' : 'left'}-radius: 0;">
          <span class="wa-bubble-text">${formattedText}</span>
          <div class="wa-bubble-meta" style="display: flex; align-items: center; justify-content: flex-end; gap: 0.25rem; font-size: 0.58rem; color: rgba(255, 255, 255, 0.45); margin-top: 0.1rem; float: right; margin-left: 0.6rem;">
            <span>${getFormattedTime()}</span>
            ${sender === 'user' ? '<span class="wa-read-ticks" style="color: #53bdeb; font-size: 0.65rem; letter-spacing: -2px;">✓✓</span>' : ''}
          </div>
        </div>
        ${hasButtons ? `
          <div class="wa-inline-buttons" style="width: 100%;">
            ${buttons.map((btnText, i) => `
              <button class="wa-btn-inline" data-index="${i}">${btnText}</button>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    chatBody.appendChild(msgDiv);

    // Bind inline button clicks
    if (hasButtons) {
      const buttonElems = msgDiv.querySelectorAll('.wa-btn-inline');
      buttonElems.forEach(btn => {
        btn.addEventListener('click', () => {
          // Disable all buttons in this block and hide them (to match WA flow)
          buttonElems.forEach(b => b.classList.add('disabled'));
          const btnText = btn.innerText;
          // Hide button container completely
          const parent = btn.closest('.wa-inline-buttons');
          if (parent) parent.style.display = 'none';
          const bubble = msgDiv.querySelector('.wa-bubble');
          if (bubble) bubble.classList.remove('wa-bubble-has-buttons');

          handleUserChoice(btnText);
        });
      });
    }

    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });
  };

  const getNextDates = () => {
    const dates = [];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 1; i <= 3; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        label: `${d.getDate()} ${months[d.getMonth()]}`,
        sub: days[d.getDay()],
        full: `${days[d.getDay()]} (${d.getDate()} ${months[d.getMonth()]})`
      });
    }
    return dates;
  };

  const appendDatePicker = (nextStateName) => {
    const dates = getNextDates();
    const pickerDiv = document.createElement('div');
    pickerDiv.className = 'wa-card';
    pickerDiv.innerHTML = `
      <div class="wa-card-header">📅 Select a Date</div>
      <div class="wa-dates-grid">
        ${dates.map((d, i) => `
          <div class="wa-date-chip" data-index="${i}" data-full="${d.full}">
            <strong>${d.label}</strong><br>
            <span style="font-size:0.55rem;opacity:0.7;">${d.sub}</span>
          </div>
        `).join('')}
      </div>
    `;

    chatBody.appendChild(pickerDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });

    const chips = pickerDiv.querySelectorAll('.wa-date-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const fullDate = chip.getAttribute('data-full');
        tempDate = fullDate;
        
        // Hide picker
        pickerDiv.style.display = 'none';

        // Send user selection
        appendMessage('user', fullDate);

        // Transition to next state
        statusLabel.innerText = 'typing...';
        typingIndicator.style.display = 'block';
        setTimeout(() => {
          statusLabel.innerText = 'Online';
          typingIndicator.style.display = 'none';
          
          const nextState = flow.states[nextStateName];
          if (nextState) {
            triggerState(nextState, nextStateName);
          }
        }, 1000);
      });
    });
  };

  const appendTimePicker = (nextStateName) => {
    const times = ["10:30 AM", "02:00 PM", "04:30 PM"];
    const pickerDiv = document.createElement('div');
    pickerDiv.className = 'wa-card';
    pickerDiv.innerHTML = `
      <div class="wa-card-header">🕒 Select Time Slot</div>
      <div class="wa-times-grid">
        ${times.map((t, i) => `
          <div class="wa-time-chip" data-index="${i}" data-val="${t}">${t}</div>
        `).join('')}
      </div>
    `;

    chatBody.appendChild(pickerDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });

    const chips = pickerDiv.querySelectorAll('.wa-time-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const selectedTime = chip.getAttribute('data-val');
        tempTime = selectedTime;

        // Hide picker
        pickerDiv.style.display = 'none';

        // Send user selection
        appendMessage('user', selectedTime);

        // Transition to next state
        statusLabel.innerText = 'typing...';
        typingIndicator.style.display = 'block';
        setTimeout(() => {
          statusLabel.innerText = 'Online';
          typingIndicator.style.display = 'none';
          
          const nextState = flow.states[nextStateName];
          if (nextState) {
            triggerState(nextState, nextStateName);
          }
        }, 1000);
      });
    });
  };

  const appendConfirmationCard = (state) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'wa-confirmation-card';

    const service = replaceTemplates(state.confDetails.service);
    const location = replaceTemplates(state.confDetails.location);
    const date = replaceTemplates(state.confDetails.date);
    const time = replaceTemplates(state.confDetails.time);
    const advisor = replaceTemplates(state.confDetails.advisor);

    cardDiv.innerHTML = `
      <div class="wa-conf-badge">
        <span>✓</span> Confirmed
      </div>
      <div class="wa-conf-details">
        <div class="wa-conf-row"><strong>Service:</strong><span>${service}</span></div>
        <div class="wa-conf-row"><strong>Location:</strong><span>${location}</span></div>
        <div class="wa-conf-row"><strong>Date:</strong><span>${date}</span></div>
        <div class="wa-conf-row"><strong>Time:</strong><span>${time}</span></div>
        <div class="wa-conf-row"><strong>Ref/Staff:</strong><span>${advisor}</span></div>
      </div>
      <div class="wa-conf-actions">
        ${(state.confActions || []).map((act, i) => `
          <button class="wa-conf-btn" data-index="${i}">${act.label}</button>
        `).join('')}
      </div>
    `;

    chatBody.appendChild(cardDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });

    const buttons = cardDiv.querySelectorAll('.wa-conf-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-index');
        const act = state.confActions[idx];
        if (act.val === 'calendar') {
          alert("📅 Event added to your Google/Outlook calendar successfully!");
        } else if (act.val === 'ticket') {
          alert("📥 Ticket PDF download initiated!");
        } else if (act.val.startsWith('tel:')) {
          alert(`📞 Calling ${act.label}...`);
        } else if (act.val.startsWith('http')) {
          window.open(act.val, '_blank');
        } else {
          alert(`Success: Action "${act.label}" executed!`);
        }
      });
    });
  };

  const triggerState = (state, choiceText) => {
    // Record contextual temp variables based on what was chosen
    if (choiceText.includes("Colaba") || choiceText.includes("GK, Delhi")) {
      tempBranch = choiceText;
    }
    if (choiceText.includes("Guests")) {
      tempGuests = choiceText;
    }
    if (choiceText.includes("Home Test Drive") || choiceText.includes("Showroom Visit")) {
      tempLocation = choiceText;
    }
    if (choiceText.includes("Nexon EV") || choiceText.includes("Curvv EV")) {
      tempModel = choiceText;
    }
    if (choiceText.includes("VIP Pass") || choiceText.includes("General Pass")) {
      tempPass = choiceText;
    }
    if (choiceText.includes("Dr. Sharma") || choiceText.includes("Dr. Patel") || choiceText.includes("Dr. Verma") || choiceText.includes("Dr. Roy") || choiceText.includes("Dr. Iyer") || choiceText.includes("Dr. Gupta")) {
      tempDoctor = choiceText;
    }

    if (state.inputType === "date-picker") {
      appendMessage('bot', state.text);
      appendDatePicker(state.nextState);
    } else if (state.inputType === "time-picker") {
      appendMessage('bot', state.text);
      appendTimePicker(state.nextState);
    } else if (state.inputType === "confirmation") {
      appendConfirmationCard(state);
      // Also send the text response bubble
      setTimeout(() => {
        appendMessage('bot', state.text, state.buttons);
      }, 400);
    } else {
      appendMessage('bot', state.text, state.buttons);
    }
  };

  const handleUserChoice = (choiceText) => {
    appendMessage('user', choiceText);

    statusLabel.innerText = 'typing...';
    typingIndicator.style.display = 'block';
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });

    setTimeout(() => {
      statusLabel.innerText = 'Online';
      typingIndicator.style.display = 'none';

      if (choiceText === 'Restart Demo 🔄') {
        chatBody.innerHTML = '';
        tempDate = "";
        tempTime = "";
        tempBranch = "";
        tempGuests = "";
        tempLocation = "";
        tempModel = "";
        tempPass = "";
        tempDoctor = "";
        initConversation();
      } else {
        const nextStep = flow.states[choiceText];
        if (nextStep) {
          triggerState(nextStep, choiceText);
        } else {
          appendMessage('bot', "Thank you! Our automated system is ready. How else can I help?", ['Restart Demo 🔄']);
        }
      }
    }, 1000);
  };

  const initConversation = () => {
    appendMessage('bot', flow.initialText, flow.buttons);
  };

  initConversation();
}

/**
 * Build a premium detail page from a data config object.
 * @param {Object} config — page data
 * @returns {HTMLElement}
 */
export function createDetailPage(config) {
  const container = document.createElement('div');
  container.className = `page detail-page detail-page--${config.category || 'platform'}`;

  const gradientStyle = config.gradient
    ? `background: linear-gradient(135deg, ${config.gradient[0]} 0%, ${config.gradient[1]} 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
    : '';

  const accentColor = config.gradient ? config.gradient[0] : '#B84DFF';

  // ─── HERO SECTION ───
  let heroHTML = `
    <section class="section page-hero detail-hero" style="padding-bottom: 0;">
      <div class="container-wide">
        <div class="section-header" style="max-width: 680px; margin: 0 auto;">
          <div class="detail-hero-badge" style="--badge-color: ${accentColor}; margin-bottom: 1.5rem;">
            <span class="badge-dot"></span>${config.overline || config.category}
          </div>
          <h1 class="heading-hero detail-hero-title" style="font-size: 4rem; line-height: 1; font-weight: 800; letter-spacing: -1px; margin: 0 0 1rem 0;">
            ${config.heroTitle || config.title} 
            <span class="text-gradient" style="${gradientStyle}">${config.heroHighlight || ''}</span>
          </h1>
          <p class="text-body-lg detail-hero-desc" style="margin: 0 0 1.5rem 0; font-weight: 400; opacity: 0.9;">
            ${config.heroDesc}
          </p>
          <div class="hero-actions">
            <a href="/demo" class="btn btn-primary">Get Started Free</a>
            <a href="/pricing" class="btn btn-ghost">View Pricing</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // ─── FEATURE CARDS ───
  let featuresHTML = '';
  if (config.features && config.features.length) {
    const cardsHTML = config.features.map(f => `
      <div class="detail-feature-card glass-card-strong">
        <div class="detail-feature-icon" style="background: ${f.iconBg || 'rgba(156,39,255,0.1)'}; color: ${f.iconColor || accentColor};">
          ${f.icon}
        </div>
        <h3 class="detail-feature-title">${f.title}</h3>
        <p class="detail-feature-desc">${f.desc}</p>
      </div>
    `).join('');

    featuresHTML = `
      <!-- Features Grid (Ecosystem Layer) -->
      <section class="section detail-features-section hero-ecosystem" style="padding: 0 0 6rem; margin-top: 8rem;">
        <div class="container">
          <div class="section-header" style="margin-bottom: 3rem;">
            <span class="text-overline">${config.featuresOverline || 'Key Features'}</span>
            <h2 class="heading-section">${config.featuresTitle || `What Makes It <span class="text-gradient">Powerful</span>`}</h2>
          </div>
          <div class="detail-features-grid">
            ${cardsHTML}
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
    `;
  }

  // ─── INTERACTIVE DEMO PANEL ───
  let demoHTML = '';
  if (config.demo || config.category === 'solutions') {
    const isSolutions = config.category === 'solutions';
    
    // Generate highlights if it's a solutions page
    let highlightsHTML = '';
    if (isSolutions) {
      const highlights = SIMULATOR_HIGHLIGHTS[config.slug] || [];
      highlightsHTML = `
        <div class="demo-highlights-container" style="display: flex; flex-direction: column; gap: 1.25rem; margin: 2rem 0 2.25rem 0;">
          ${highlights.map(h => `
            <div class="demo-highlight-item" style="display: flex; gap: 0.85rem; align-items: flex-start; text-align: left;">
              <div class="demo-highlight-icon" style="font-size: 1.2rem; background: rgba(37, 211, 102, 0.08); width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(37, 211, 102, 0.15);">${h.icon}</div>
              <div>
                <h4 style="font-size: 0.88rem; font-weight: 600; color: var(--color-white-text); margin: 0 0 0.15rem 0;">${h.title}</h4>
                <p style="font-size: 0.78rem; color: var(--color-muted-text); line-height: 1.4; margin: 0;">${h.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    const demoInfoHTML = `
      <div class="detail-demo-info">
        <span class="text-overline">${config.demoOverline || 'Live Preview'}</span>
        <h2 class="heading-section" style="margin-bottom: 1rem;">${config.demoTitle || `See It <span class="text-gradient">In Action</span>`}</h2>
        <p class="text-body" style="margin-bottom: 1.5rem;">${config.demoDesc || 'Experience the feature with our interactive demonstration.'}</p>
        ${highlightsHTML}
        <a href="/demo" class="btn btn-primary btn-sm">Book a Demo</a>
      </div>
    `;

    const demoContentHTML = isSolutions
      ? `
        <div class="phone-mockup" style="margin: 0 auto;">
          <div class="phone-notch"></div>
          <div class="phone-screen solution-whatsapp-simulator" id="wa-simulator-${config.slug}">
            <!-- Chat screen gets appended here by initWhatsAppSimulator -->
          </div>
        </div>
        <div class="phone-glow"></div>
      `
      : `
        <div class="dashboard-frame">
          <div class="dashboard-titlebar">
            <span class="dashboard-dot dashboard-dot-red"></span>
            <span class="dashboard-dot dashboard-dot-yellow"></span>
            <span class="dashboard-dot dashboard-dot-green"></span>
            <span style="margin-left:auto;font-size:0.65rem;color:var(--color-dim-text);">Botzo.io / ${config.title}</span>
          </div>
          <div class="dashboard-content">
            ${config.demo}
          </div>
        </div>
      `;

    demoHTML = `
      <section class="section detail-demo-section">
        <div class="container">
          <div class="detail-demo-layout">
            ${demoInfoHTML}
            <div class="detail-demo-panel">
              ${demoContentHTML}
            </div>
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
    `;
  }

  // ─── HOW IT WORKS (STEPS) ───
  let stepsHTML = '';
  if (config.steps && config.steps.length) {
    const stepCards = config.steps.map(s => `
      <div class="detail-step-card glass-card-strong">
        <div class="detail-step-number" style="color: ${accentColor};">${s.number}</div>
        <h3 class="detail-step-title">${s.title}</h3>
        <p class="detail-step-desc">${s.desc}</p>
      </div>
    `).join('');

    stepsHTML = `
      <section class="section detail-steps-section">
        <div class="container">
          <div class="section-header" style="margin-bottom: 3rem;">
            <span class="text-overline">How It Works</span>
            <h2 class="heading-section">Get Started in <span class="text-gradient">Minutes</span></h2>
          </div>
          <div class="detail-steps-grid">
            ${stepCards}
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
    `;
  }

  // ─── BENEFITS / METRICS ───
  let benefitsHTML = '';
  if (config.benefits && config.benefits.length) {
    const benefitCards = config.benefits.map(b => `
      <div class="detail-benefit-card">
        <div class="detail-benefit-value" style="color: ${b.color || accentColor};">${b.value}</div>
        <div class="detail-benefit-label">${b.label}</div>
      </div>
    `).join('');

    benefitsHTML = `
      <section class="section detail-benefits-section">
        <div class="container">
          <div class="section-header" style="margin-bottom: 3rem;">
            <span class="text-overline">Proven Results</span>
            <h2 class="heading-section">Measurable <span class="text-gradient">Impact</span></h2>
          </div>
          <div class="detail-benefits-grid">
            ${benefitCards}
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
    `;
  }

  // ─── FAQ SECTION ───
  let faqHTML = '';
  if (config.faq && config.faq.length) {
    const faqItems = config.faq.map((f, i) => `
      <div class="detail-faq-item glass-card-strong" data-faq="${i}">
        <button class="detail-faq-question" aria-expanded="false">
          <span>${f.q}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="detail-faq-answer">
          <p class="text-body">${f.a}</p>
        </div>
      </div>
    `).join('');

    faqHTML = `
      <section class="section detail-faq-section">
        <div class="container" style="max-width: 800px;">
          <div class="section-header" style="margin-bottom: 3rem;">
            <span class="text-overline">Common Questions</span>
            <h2 class="heading-section">Frequently <span class="text-gradient">Asked</span></h2>
          </div>
          ${faqItems}
        </div>
      </section>
      <div class="section-divider"></div>
    `;
  }

  // ─── INTEGRATIONS ───
  let integrationsHTML = '';
  if (config.integrations && config.integrations.length) {
    const pills = config.integrations.map(int => `
      <div class="detail-integration-pill">
        <span class="detail-integration-icon">${int.icon}</span>
        <span>${int.name}</span>
      </div>
    `).join('');

    integrationsHTML = `
      <section class="section detail-integrations-section">
        <div class="container">
          <div class="section-header" style="margin-bottom: 2rem;">
            <span class="text-overline">Ecosystem</span>
            <h2 class="heading-section">Seamless <span class="text-gradient">Integrations</span></h2>
          </div>
          <div class="detail-integrations-grid">
            ${pills}
          </div>
        </div>
      </section>
      <div class="section-divider"></div>
    `;
  }

  // ─── CROSS-LINKING ───
  let crossLinkHTML = '';
  if (config.relatedLinks && config.relatedLinks.length) {
    const linkCards = config.relatedLinks.map(link => `
      <a href="${link.href}" class="detail-crosslink-card glass-card-strong">
        <span class="detail-crosslink-icon">${link.icon}</span>
        <div>
          <div class="detail-crosslink-title">${link.title}</div>
          <div class="detail-crosslink-desc">${link.desc}</div>
        </div>
        <svg class="detail-crosslink-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    `).join('');

    crossLinkHTML = `
      <section class="section detail-crosslinks-section">
        <div class="container">
          <div class="section-header" style="margin-bottom: 2.5rem;">
            <span class="text-overline">Explore More</span>
            <h2 class="heading-section">Related <span class="text-gradient">Solutions</span></h2>
          </div>
          <div class="detail-crosslinks-grid">
            ${linkCards}
          </div>
        </div>
      </section>
    `;
  }

  // ─── ASSEMBLE ───
  container.innerHTML = heroHTML + featuresHTML + demoHTML + stepsHTML + benefitsHTML + faqHTML + integrationsHTML + crossLinkHTML;

  // Append Final CTA
  container.appendChild(createFinalCTA());

  // ─── INTERACTIVE BEHAVIORS ───
  setTimeout(() => {
    // FAQ accordion
    container.querySelectorAll('.detail-faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.detail-faq-item');
        const isOpen = item.classList.contains('open');
        // Close all
        container.querySelectorAll('.detail-faq-item').forEach(f => f.classList.remove('open'));
        container.querySelectorAll('.detail-faq-question').forEach(q => q.setAttribute('aria-expanded', 'false'));
        // Toggle clicked
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Initialize WhatsApp Simulator if the component is mounted
    const simulator = container.querySelector('.solution-whatsapp-simulator');
    if (simulator) {
      initWhatsAppSimulator(simulator, config.slug);
    }
  }, 100);

  return container;
}
