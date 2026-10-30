/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT, text for every page lives here and in projects.ts.
 *  Based on the Upwork profile of Anita S. (Top Rated, 100% Job Success).
 *  Items marked  TODO  still need your details before going live.
 *
 *  Optional photo: public/portrait.png (cut-out PNG looks best) —
 *  appears in the home hero, navbar and About page automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  firstName: "Anita",
  lastName: "Sharma",
  initials: "AS",
  role: "WordPress & WooCommerce Developer",
  email: "sharma.anitahp21@gmail.com",
  phone: "+91 98174 76614",
  whatsapp: "919817476614", // digits only, with country code
  bookingUrl: "", // TODO: Calendly (or similar) link, falls back to the contact page
  formEndpoint: "", // TODO (optional): Formspree endpoint, e.g. "https://formspree.io/f/xxxx", otherwise the form opens email
  upworkUrl: "https://www.upwork.com/freelancers/~014a082cf578d0f725",
  linkedinUrl: "", // TODO: LinkedIn profile (hidden until set)
  siteUrl: "https://anitasharma.dev", // TODO: your domain once deployed
  location: "Kangra, India · Working worldwide",
  responseTime: "Replies within 0–4 hours",
  languages: "English & Hindi",

  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  seo: {
    title: "Anita Sharma | WordPress & WooCommerce Developer, Custom PHP, HivePress, APIs",
    description:
      "Top Rated WordPress & WooCommerce developer with 8+ years of experience: custom plugins, complex WooCommerce workflows, HivePress & BuddyBoss marketplaces, Gravity Forms automation and API integrations.",
  },

  hero: {
    badge: "Top Rated · 100% Job Success on Upwork",
    lines: ["Custom WordPress &", "WooCommerce", "built to scale."],
    accent: "WooCommerce",
    intro:
      "I'm Anita Sharma — a WordPress & WooCommerce developer with 8+ years of hands-on experience building custom plugins, complex stores, marketplaces and integrations that are clean, secure and easy to extend.",
    expertise: ["Custom PHP", "WooCommerce", "HivePress", "APIs"],
  },

  /** Real figures from the Upwork profile. */
  stats: [
    { value: 8, suffix: "+", label: "Years of hands-on experience" },
    { value: 100, suffix: "%", label: "Job Success Score on Upwork" },
    { value: 74, suffix: "", label: "Upwork jobs delivered" },
    { value: 2416, suffix: "", label: "Hours of client work" },
  ],

  marquee: [
    "WordPress",
    "WooCommerce",
    "Custom Plugins",
    "HivePress",
    "BuddyBoss",
    "Gravity Forms",
    "REST APIs",
    "Stripe",
    "Memberships",
    "LMS",
    "AI Integrations",
  ],

  services: [
    {
      slug: "plugins",
      icon: "code",
      title: "Custom Plugins & AI Integrations",
      short: "Bespoke WordPress plugins, AI-powered features and functionality no plugin offers out of the box.",
      text: "When off-the-shelf plugins can't do what your business needs, I build it properly, custom plugins built on WordPress hooks, actions and filters, custom REST endpoints, AI-based features and clean database architecture that's easy to maintain.",
      points: ["Custom WordPress plugins", "AI-based WordPress applications", "Custom REST API endpoints", "ACF & Gutenberg blocks", "Custom database architecture", "Secure, documented code"],
      tech: "PHP · MySQL · REST API · ACF",
      example: "adam-chronister",
    },
    {
      slug: "woocommerce",
      icon: "cart",
      title: "WooCommerce Development",
      short: "Complex stores, custom checkouts, subscriptions and payment workflows that convert.",
      text: "From custom checkout and payment flows to subscriptions, memberships and role-based pricing, I customise WooCommerce beyond its defaults, migrate stores safely and fix the bugs and slowdowns that cost you sales.",
      points: ["Custom checkout & payment flows", "Subscriptions & memberships", "Stripe & payment integrations", "User roles & custom pricing", "WooCommerce migrations", "Performance & bug fixing"],
      tech: "WooCommerce · Stripe · PHP",
      example: "becoming-your-best",
    },
    {
      slug: "marketplaces",
      icon: "layers",
      title: "Directories & Marketplaces",
      short: "HivePress, GeoDirectory and BuddyBoss platforms with custom listings, dashboards and search.",
      text: "I build and extend directory and marketplace platforms, custom listing fields, advanced search and filtering, vendor and member dashboards, location-based directories and role-based workflows that the standard extensions don't provide.",
      points: ["HivePress development", "GeoDirectory", "BuddyPress / BuddyBoss", "Vendor & member dashboards", "Custom search & filtering", "Location-based directories"],
      tech: "HivePress · BuddyBoss · GeoDirectory",
      example: "functionfindr",
    },
    {
      slug: "automation",
      icon: "zap",
      title: "Forms, APIs & Automation",
      short: "Gravity Forms workflows, webhooks and third-party integrations that run reliably.",
      text: "Multi-step forms with conditional logic, PDF generation, and APIs, webhooks and Zapier connections that make your WordPress site talk reliably to your CRM, payment provider and the rest of your stack.",
      points: ["Gravity Forms & Fluent Forms", "Formidable, WPForms & Jotform", "Multi-step & conditional logic", "PDF generation", "Webhooks & Zapier", "Third-party API integrations"],
      tech: "Gravity Forms · Webhooks · Zapier",
      example: "towit",
    },
  ],

  pricing: "Flexible — fixed price or hourly",

  buildPaths: [
    {
      label: "New build",
      title: "Build a WordPress / WooCommerce Site",
      text: "A new website, store, membership or LMS platform built properly from day one — responsive, fast and structured so it's easy to extend as your business grows.",
      bestFor: "New stores & platforms",
      stack: ["WordPress", "WooCommerce", "Elementor", "ACF", "Gutenberg"],
      features: ["Clean, scalable architecture", "Responsive front-end build", "Payments, memberships & roles", "SEO & performance basics"],
    },
    {
      label: "Custom functionality",
      title: "Custom Plugin, Workflow or Integration",
      text: "Functionality that doesn't exist out of the box — a custom WooCommerce workflow, a marketplace feature HivePress can't do, or several APIs and systems that need to talk reliably.",
      bestFor: "Complex requirements",
      stack: ["Custom PHP", "REST API", "Webhooks", "Stripe", "HivePress"],
      features: ["Requirement & risk review", "Custom plugin development", "API & webhook integrations", "Tested on staging first"],
    },
    {
      label: "Rescue & support",
      title: "Fix, Optimise & Maintain",
      text: "I take over existing and legacy WordPress projects, understand someone else's code, find the root cause of problems and improve the system, without rebuilding everything unnecessarily.",
      bestFor: "Existing & legacy sites",
      stack: ["Debugging", "Performance", "Security", "Migrations", "Updates"],
      features: ["Root-cause bug fixing", "Speed & performance tuning", "Plugin conflicts & cleanup", "Long-term ongoing support"],
    },
  ],

  /** "The type of problems I enjoy solving", from the Upwork profile. */
  problems: [
    "We need a custom WooCommerce workflow that doesn't exist out of the box.",
    "Our HivePress marketplace needs functionality that the standard extensions don't provide.",
    "We need several APIs, webhooks and WordPress systems to communicate reliably.",
    "Our existing plugin or site has become difficult to maintain and needs proper custom development.",
    "We have a large directory or catalogue and need better filtering, search, user roles or automation.",
  ],

  process: [
    { icon: "search", title: "Understand", text: "I start with the business requirement, then review your existing setup, dependencies and potential risks." },
    { icon: "pen", title: "Plan", text: "I propose the simplest reliable approach, with a clear scope and estimates given up front." },
    { icon: "code", title: "Build on staging", text: "Development and testing happen on staging, so your live site is never put at risk." },
    { icon: "rocket", title: "Deploy & support", text: "Controlled production deployment, clear communication throughout, and support long after launch." },
  ],

  why: [
    { icon: "award", title: "Top Rated with 100% Job Success", text: "74 Upwork jobs and 2,416 hours of client work, with a perfect Job Success Score." },
    { icon: "shield", title: "Clean, secure, maintainable", text: "Code that's reliable today and easy to extend tomorrow." },
    { icon: "search", title: "Root-cause problem solver", text: "I find why something breaks, not just patch the symptom." },
    { icon: "layers", title: "Comfortable with legacy code", text: "I can take over someone else's project without rebuilding everything." },
    { icon: "target", title: "Business first, code second", text: "Every solution starts with understanding what you actually need." },
    { icon: "clock", title: "Long-term partner", text: "Many clients extend their contracts for ongoing support." },
  ],

  included: [
    "Review of your existing setup",
    "Staging-first development",
    "Clean, documented code",
    "WordPress coding standards",
    "Security best practices",
    "Performance-minded builds",
    "Cross-browser & mobile testing",
    "Post-launch support",
  ],

  about: {
    headline: ["The developer behind", "the code."],
    accent: "developer",
    intro:
      "I'm Anita Sharma, a Top Rated WordPress & WooCommerce developer with 8+ years of hands-on experience building, fixing, customising and scaling websites and web applications.",
    story: [
      "I've worked on everything from straightforward WordPress builds to complex WooCommerce stores, AI-based WordPress applications, directory and marketplace platforms, membership systems, LMS websites, custom plugins, API integrations, payment workflows and database-driven applications.",
      "My focus is not just making something “work” — I care about building solutions that are clean, reliable, secure, maintainable and easy to extend. I'm also comfortable taking over existing or legacy projects, understanding someone else's code and improving the system without unnecessarily rebuilding everything.",
      "I believe good development starts with understanding the business requirement, not immediately writing code. I'm interested in long-term relationships rather than one-off tasks, and many of my clients keep working with me for ongoing support.",
    ],
    /** From the Upwork employment & education history. */
    timeline: [
      { period: "May 2021 — Now", title: "Full Stack & WordPress Developer", place: "Dedicated freelancer · Top Rated on Upwork" },
      { period: "Mar 2019 — Apr 2021", title: "Software Developer", place: "A1 Technologies Pvt Ltd" },
      { period: "2016 — 2018", title: "Master of Computer Applications (MCA)", place: "Himachal Pradesh University" },
      { period: "2013 — 2016", title: "Bachelor of Computer Applications (BCA)", place: "Central University of Punjab" },
    ],
    values: [
      { title: "Understand before coding", text: "I review the setup, dependencies and risks before writing a single line." },
      { title: "Simplest reliable approach", text: "The best solution is the one that works, lasts and is easy to maintain." },
      { title: "Honest, clear communication", text: "Estimates up front, and I'll push back when a request conflicts with the architecture." },
    ],
  },

  skills: {
    "WordPress & WooCommerce": ["Custom plugins", "WooCommerce workflows", "Subscriptions & memberships", "User roles", "Checkout & payments", "Migrations"],
    "Directories & Marketplaces": ["HivePress", "GeoDirectory", "BuddyPress", "BuddyBoss", "Vendor dashboards", "Search & filtering"],
    "Forms & Automation": ["Gravity Forms", "Fluent Forms", "Formidable Forms", "WPForms / Jotform", "PDF generation", "Webhooks & Zapier"],
    "Custom Development": ["PHP / MySQL", "REST APIs", "React.js / Node.js", "Laravel", "CodeIgniter / Yii2", "Tailwind CSS"],
    "Page Builders & Front-End": ["Elementor Pro", "Divi", "WPBakery", "Gutenberg", "GeneratePress", "ACF"],
  },

  tools: ["WordPress", "WooCommerce", "PHP", "React", "Elementor", "Gravity Forms", "Stripe", "Laravel"],

  industries: ["Healthcare", "Corporate Training", "Travel", "E-commerce", "Education", "Marketplaces", "Memberships", "LMS", "Personal Brands"],

  audit: {
    eyebrow: "Free for new clients",
    title: ["Free 30-Minute", "WordPress Health Check."],
    accent: "Health Check.",
    text: "Site slow, plugins clashing or a feature half-working? I'll review your WordPress or WooCommerce setup with you and point out what's causing problems, and the simplest reliable way to fix it.",
    strong: "Free, honest advice, no obligation.",
    items: [
      { icon: "zap", title: "Speed & Performance", text: "Find the plugins, queries and assets slowing your site down." },
      { icon: "code", title: "Plugins & Code Quality", text: "Spot conflicts, fragile customisations and maintenance risks." },
      { icon: "shield", title: "Security & Stability", text: "Check updates, roles and setup for common vulnerabilities." },
    ],
    card: {
      badge: "Limited slots each month",
      title: "Book Your Free Review",
      text: "Pick a time that suits you. We'll hop on a call, look at your site together and agree the top priorities.",
      points: ["No payment or commitment required", "1-on-1 call with a senior developer", "Clear list of recommended fixes"],
    },
  },

  /** Genuine client reviews from the Upwork profile (all rated 5.0). */
  testimonials: [
    {
      quote: "Solid technical work, delivered and tested. What I valued most was that she pushes back when a request conflicts with the architecture. Clear written communication and estimates given up front. Happy to keep working with her.",
      project: "Long-term support contract",
    },
    {
      quote: "Anita is a great developer to work with. She is proactive, attentive to details, and always willing to go the extra mile to ensure everything works perfectly. Communication is smooth and professional. I highly recommend her!",
      project: "Extended development & support",
    },
    {
      quote: "She was responsive, attentive, and genuinely committed to understanding my needs throughout the project… I particularly appreciated her ability to propose solutions and her patience when adjustments were needed. I highly recommend her services.",
      project: "Extended support contract",
    },
    {
      quote: "She communicates clearly and consistently every single day, and she's always available to jump on a call when needed, which has made this complex project much smoother.",
      project: "Complex Fluent Forms project",
    },
    {
      quote: "Anita is knowledgeable and professional, with a good understanding of the project requirements. Communication was clear, and she was responsive throughout the process.",
      project: "Website updates",
    },
    {
      quote: "Anita did a great job with my website. I will be hiring her again in the future.",
      project: "HivePress website fixes",
    },
  ],

  /** "Insights from completed jobs" on Upwork, how many clients tagged each quality. */
  insights: [
    { label: "Clear Communicator", count: 20 },
    { label: "Committed to Quality", count: 19 },
    { label: "Collaborative", count: 16 },
    { label: "Reliable", count: 16 },
    { label: "Detail Oriented", count: 10 },
    { label: "Professional", count: 10 },
    { label: "Solution Oriented", count: 8 },
    { label: "Accountable for Outcomes", count: 7 },
  ],

  faqs: [
    { q: "Do you work hourly or on a fixed price?", a: "Both. My hourly rate is flexible, tell me about your requirements and we'll agree whichever model suits the project best. For larger projects I give clear estimates up front." },
    { q: "Can you take over an existing or legacy WordPress site?", a: "Yes. I'm comfortable understanding someone else's code, identifying the root cause of problems and improving the system without unnecessarily rebuilding everything." },
    { q: "How do you make changes without breaking my live site?", a: "For larger projects I follow staging → development → testing → controlled production deployment, with clear communication at every step." },
    { q: "Can you build functionality no plugin offers?", a: "That's my favourite kind of work, custom plugins, WooCommerce workflows, HivePress extensions and API integrations built specifically for your business." },
    { q: "Which plugins and platforms do you work with?", a: "WooCommerce, HivePress, GeoDirectory, BuddyPress/BuddyBoss, Gravity Forms, Fluent Forms, Formidable, WPForms, MemberPress, LMS plugins, Elementor, Divi and more, plus custom PHP, React and Laravel." },
    { q: "Do you offer ongoing support?", a: "Yes, I prefer long-term relationships over one-off tasks, and many clients extend their contracts for ongoing development and support." },
  ],
} as const;

export type IconName =
  | "rocket" | "monitor" | "layers" | "search" | "pen" | "target" | "palette" | "phone"
  | "cart" | "code" | "award" | "zap" | "shield" | "mail" | "calendar" | "clock" | "map";

export const bookingHref = site.bookingUrl || "/contact";
export const whatsappHref = `https://wa.me/${site.whatsapp}`;
export const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;
