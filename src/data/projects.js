/* =========================================================
   PROJECTS — shared by the home page and the case study page.
   Order here = order on the site. Section numbering is automatic.

   cover        image used on the home page card
   coverPosition CSS object-position used when cropping
   coverBg      background behind the image (visible with "contain")
   sections     [{ title, body, steps? }] rendered in order
   gallery      [{ src, caption }] full-width, never cropped
========================================================= */

export const projects = [
  {
    slug: "azza",
    title: "Azza",
    year: "2026",
    tags: ["Fintech", "Mobile app"],
    platform: "iOS & Android",
    role: "Product Designer (solo)",
    summary:
      "A cross-border payments app that makes sending, receiving and managing money across currencies feel clear and in control.",
    overview:
      "Azza is a cross-border payment app that lets users send, receive and manage money seamlessly across countries.",
    cover: "/img/azza-cover.webp",
    coverPosition: "50% 45%",
    coverBg: "#2C6FD1",
    hero: "/Fintech AZZA.jpg.jpeg",
    deliverables: [
      "UX/UI design",
      "Authentication",
      "Payments",
      "Currency management",
      "Analytics",
      "Card management",
      "Security",
    ],
    sections: [
      {
        title: "Introduction",
        body: "The idea for Azza came from a simple frustration: managing money across different currencies shouldn't feel complicated. Existing financial experiences often made it difficult to understand exchange rates, balances and transactions at a glance. I took this on as a solo designer to explore what a simpler, more transparent financial experience could look like — one that helps people feel more confident about their money.",
      },
      {
        title: "Challenge",
        body: "Managing money across currencies quickly becomes overwhelming when information is scattered or hard to read. The challenge was to design a cross-border experience that reduces friction, simplifies currency management and gives people a clearer sense of control over their finances.",
      },
    ],
    gallery: [
      { src: "/Home Screen.jpg (2).jpeg", caption: "Home — balances, quick actions and recent activity at a glance" },
      { src: "/Azza Fintech App.jpg.jpeg", caption: "Core app screens" },
      { src: "/Send money.jpg.jpeg", caption: "Send money flow" },
      { src: "/Virtual Cards.jpg.jpeg", caption: "Virtual cards" },
      { src: "/Transaction.jpg.jpeg", caption: "Transactions" },
      { src: "/user persona.jpg (2).jpeg", caption: "User persona" },
      { src: "/Style Guide.jpg (2).jpeg", caption: "Style guide" },
    ],
  },

  {
    slug: "lumora",
    title: "Lumora",
    year: "2026",
    tags: ["Mental wellness", "Mobile app"],
    platform: "iOS & Android",
    role: "Product Designer",
    summary:
      "A calm mental-wellness companion that helps young adults check in with their emotions, reflect and care for their wellbeing.",
    overview:
      "Lumora is a mental wellness app that helps young adults check in with their emotions, reflect, and find simple ways to care for their wellbeing.",
    cover: "/img/lumora-cover.webp",
    coverPosition: "50% 50%",
    coverBg: "#7A68D6",
    hero: "/Lumora Wellness App.jpg.jpeg",
    deliverables: [
      "UX/UI design",
      "Mood check-in",
      "Guided reflection",
      "AI companion",
      "Wellness activities",
      "Design system",
      "Settings",
    ],
    sections: [
      {
        title: "Introduction",
        body: "Lumora helps young adults pause, check in with themselves and navigate everyday emotions. It brings reflection, mindful activities and AI-guided support into one calm, approachable experience.",
      },
      {
        title: "Problem",
        body: "Emotional wellbeing is often treated as something we address only when things feel overwhelming. Lumora explores a lighter, more approachable way to make emotional awareness part of everyday life.",
      },
      {
        title: "Design process",
        body: "I started by exploring everyday emotional needs and existing wellness behaviours, then translated the insights into a simple product structure. From early concepts and wireframes I moved into the final interface, refining the experience around clarity, calm and ease of use.",
      },
    ],
    gallery: [
      { src: "/LUMORA Home Screen.jpg.jpeg", caption: "Home" },
      { src: "/Lumora Ai.jpg.jpeg", caption: "AI companion" },
      { src: "/Lumora mood check in.jpg.jpeg", caption: "Mood check-in" },
      { src: "/Lumora Moment to reflect.jpg.jpeg", caption: "A moment to reflect" },
      { src: "/Lumora Setting.jpg.jpeg", caption: "Settings" },
      { src: "/Wellness App.jpg.jpeg", caption: "Onboarding" },
      { src: "/Moodboard.jpg.jpeg", caption: "Moodboard" },
    ],
  },

  {
    slug: "splita",
    title: "Splita",
    year: "2025",
    tags: ["Fintech", "Web app"],
    platform: "Web",
    role: "Product Designer",
    summary:
      "Digitising the traditional Ajo savings circle into a simple, transparent group savings platform.",
    overview:
      "Digitalising the traditional Ajo savings experience through a simple and transparent group savings platform.",
    cover: "/img/splita-cover.webp",
    coverPosition: "55% 50%",
    coverBg: "#D9C7B0",
    hero: "/Spilta Fintech.jpg.jpeg",
    deliverables: ["UX/UI design", "Group savings", "Payments", "Admin dashboard"],
    sections: [
      {
        title: "Design process",
        body: "I approached the project by moving from understanding the problem to defining the experience, designing the interface and refining the key flows.",
        steps: [
          "Research & discovery",
          "Define",
          "Information architecture",
          "User flows",
          "Wireframes",
          "UI design",
          "Prototyping",
          "Iteration",
        ],
      },
    ],
    gallery: [
      { src: "/Home Screen.jpg.jpeg", caption: "Dashboard" },
      { src: "/Spilta groups.jpg.jpeg", caption: "Groups" },
      { src: "/Spilta creating groups.jpg.jpeg", caption: "Creating a group" },
      { src: "/Spilta join group.jpg.jpeg", caption: "Joining a group" },
      { src: "/Spilta Admin Flow.jpg.jpeg", caption: "Admin flow" },
      { src: "/user persona.jpg.jpeg", caption: "User persona" },
      { src: "/Style Guide.jpg.jpeg", caption: "Style guide" },
    ],
  },

  {
    slug: "lumino",
    title: "Lumino",
    year: "2026",
    tags: ["Health", "Wearables"],
    platform: "Web",
    role: "Product Designer",
    summary:
      "A thoughtful digital experience for a smartwatch brand, focused on making everyday health easier to understand.",
    overview:
      "Lumino explores a thoughtful digital experience for everyday health management.",
    cover: "/img/lumino-cover.webp",
    coverPosition: "68% 50%",
    coverBg: "#E9E8E6",
    hero: "/Lumino- Wrist watch brand.jpg.jpeg",
    inProgress: true,
    sections: [],
    gallery: [],
  },

  {
    slug: "tca-tech-fair",
    title: "The Curve Africa Tech Fair",
    year: "2026",
    tags: ["Event", "Visual design"],
    platform: "Social & print",
    role: "Visual Designer",
    summary:
      "Promotional and social media design that communicates the energy of a technology-focused event.",
    overview:
      "A visual identity and promotional design system created to communicate the energy of a technology-focused event across social and print.",
    cover: "/img/tca-cover.webp",
    coverPosition: "50% 20%",
    coverBg: "#F3E6D6",
    hero: "/COVER.jpg.jpeg",
    heroFit: "contain",
    sections: [],
    gallery: [
      { src: "/Flyer Design.jpg.jpeg", caption: "Call for exhibitors" },
      { src: "/FILL YOUR DETAILS.jpg.jpeg", caption: "Registration — fill your details" },
      // Note: the filename uses a typographic apostrophe (’), not a straight one.
      { src: "/YOU’RE READY.jpg.jpeg", caption: "Registration — you're ready" },
      { src: "/PARTNERS FLYER.jpg.jpeg", caption: "Partners" },
      { src: "/OPEN THE PAGE.jpg.jpeg", caption: "Registration — open the page" },
      { src: "/FIND THE LINK.jpg.jpeg", caption: "Registration — find the link" },
      { src: "/N.M.A Travels 3.jpg.jpeg", caption: "N.M.A Travels — social design" },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

export const pad = (n) => String(n).padStart(2, "0");
