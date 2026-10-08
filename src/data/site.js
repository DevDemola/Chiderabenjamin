/* =========================================================
   SITE CONTENT — every piece of copy on the home page lives here.
   Edit text in this file; components only handle layout.
========================================================= */

export const site = {
  name: "Chidera Benjamin",
  firstName: "Chidera",
  role: "Product Designer",
  location: "Lagos, Nigeria",
  timeZone: "Africa/Lagos",

  portrait: "/img/chidera-portrait.webp",
  cutout: "/img/chidera-cutout.webp",

  // TODO: replace with the real address before going live.
  email: "chiderabenjaminfav@gmail.com",

  available: true,

  // Links with an empty href are hidden automatically (no dead "#" links).
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Behance", href: "" },
    { label: "Dribbble", href: "" },
    { label: "Instagram", href: "" },
  ],

  credit: {
    name: "Demola",
    href: "https://wa.me/2348158411808",
  },
};

/* ---------- hero stats strip ---------- */
export const stats = [
  { value: "20+", label: "Projects designed" },
  { value: "4+", label: "Years designing" },
  { value: "100%", label: "User-focused" },
];

/* ---------- "what I do" cards under the intro ---------- */
export const pillars = [
  {
    title: "Product Design",
    body: "End-to-end design for web and mobile products — from first idea and user flows to polished, build-ready interfaces.",
    image: "/img/azza-cover.webp",
    cta: { label: "See Azza", to: "/work/azza" },
  },
  {
    title: "UX Research",
    body: "Understanding the people behind the product — their goals, habits and frustrations — so every design decision has a reason.",
    image: "/img/lumora-cover.webp",
    cta: { label: "See Lumora", to: "/work/lumora" },
    featured: true,
  },
  {
    title: "Visual Design",
    body: "Campaigns, social and promotional design that carry a brand's energy and get people to pay attention.",
    image: "/img/tca-cover.webp",
    cta: { label: "See Tech Fair", to: "/work/tca-tech-fair" },
  },
];

/* ---------- "sound familiar?" problems ---------- */
export const problems = [
  {
    icon: "users",
    text: "You have a product idea, but no clear structure for how people will actually use it.",
  },
  {
    icon: "alert",
    text: "Your app works, but users find it confusing and drop off before they reach the good part.",
  },
  {
    icon: "layers",
    text: "Your interface looks dated or inconsistent, and it's hurting how people trust your product.",
  },
  {
    icon: "compass",
    text: "You're not sure what your users really need, so the team keeps guessing and redesigning.",
  },
];

/* ---------- services ---------- */
export const services = [
  {
    icon: "search",
    title: "UX Research & Discovery",
    body: "Interviews, audits and competitor reviews to understand your users and uncover what's really getting in their way.",
  },
  {
    icon: "map",
    title: "Product Strategy & IA",
    body: "Personas, information architecture and user flows that turn insight into a clear, simple product structure.",
  },
  {
    icon: "layout",
    title: "UI Design",
    body: "Clean, intuitive interfaces for mobile and web — designed to look good and, more importantly, to be easy to use.",
  },
  {
    icon: "play",
    title: "Prototyping",
    body: "Clickable prototypes in Figma or Framer so you can test ideas, gather feedback and pitch with confidence.",
  },
  {
    icon: "grid",
    title: "Design Systems",
    body: "Reusable components, styles and guidelines that keep your product consistent as it grows.",
  },
  {
    icon: "pen",
    title: "Visual & Campaign Design",
    body: "Flyers, social content and promotional design that communicate your brand's energy clearly.",
  },
];

/* ---------- process ---------- */
export const processSteps = [
  {
    icon: "message",
    title: "Discover",
    body: "We talk through your idea, your users and your goals. I research the problem and the people you're designing for.",
  },
  {
    icon: "edit",
    title: "Design",
    body: "I map the structure and flows, then move from wireframes to high-fidelity screens built on a consistent system.",
  },
  {
    icon: "send",
    title: "Refine & Deliver",
    body: "We prototype, test and iterate on the key flows, then I hand over organised, build-ready files.",
  },
];

/* ---------- outcomes list ---------- */
export const outcomes = [
  ["Users understand your product ", "the first time they open it", "."],
  ["Your team stops guessing — ", "every screen is backed by research", "."],
  ["Your product looks ", "consistent and trustworthy", " across every flow."],
  ["Developers get ", "clear, organised files", " that are easy to build from."],
];

/* ---------- ticker ---------- */
export const ticker = [
  "Product design",
  "UX research",
  "UI design",
  "Prototyping",
  "Design systems",
  "Visual design",
];

/* ---------- toolkit ---------- */
export const toolkit = [
  { name: "Figma", image: "/figma.png" },
  { name: "Framer", image: "/framer.png" },
  { name: "Photoshop", image: "/photoshop.png" },
  { name: "Claude", image: "/claude.jpg" },
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Mostly web and mobile products — fintech, wellness, health and everyday tools — from new ideas that need shaping to existing products that need a clearer experience. I also take on visual and campaign design.",
  },
  {
    q: "What does your design process look like?",
    a: "Discover, design, refine. I start by understanding your users and goals, map the structure and flows, design the interface, then prototype and iterate on the key journeys before handing over final files.",
  },
  {
    q: "What do I need before we start?",
    a: "Just a clear idea of what you're building and who it's for. Any existing research, brand assets or screens are helpful, but not required — we can figure out the rest together.",
  },
  {
    q: "What will I receive at the end?",
    a: "Organised Figma files with final screens, components and styles, plus a clickable prototype of the key flows — ready for your developers to build from.",
  },
  {
    q: "Can you work with my developers?",
    a: "Yes. I'm happy to join handover calls, answer questions during the build and review what's been implemented so the final product matches the design.",
  },
];
