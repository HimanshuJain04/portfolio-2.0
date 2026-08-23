export type Experience = {
  companyName?: string;
  position: string;
  from: string;
  to: string;
  type: string;
  href?: string;
  location?: string;
  // Concrete ownership bullets — what was built, not "shipped features".
  highlights: string[];
  // Key tech only (≤5), rendered as subtle mono chips. Full stack lives in the Stack section.
  stack?: string[];
  // Links to a /work/[slug] case study, when one exists.
  caseStudySlug?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    companyName: "GastroSmart",
    position: "Software Engineer",
    from: "Jan 2026",
    to: "Present",
    location: "Remote",
    type: "Full-time",
    href: "https://www.gastro-smart.com",
    highlights: [
      "Building full-stack product features for a production food-catering platform.",
      "Working across Nest.js APIs, a PostgreSQL/Drizzle data layer, Redis, and the Next.js app.",
    ],
    stack: ["Next.js", "Nest.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    companyName: "Mintix",
    position: "Founding Engineer",
    from: "Dec 2024",
    to: "Jan 2026",
    location: "Remote",
    type: "Full-time",
    href: "https://mintixapp.com",
    highlights: [
      "Sole engineer — built the web app, organizer dashboard, React Native iOS scanner, and backend from scratch.",
      "Designed the on-chain minting pipeline (Solana + Metaplex) that turns each ticket into an NFT.",
      "Wired Stripe payments end-to-end into the ticket purchase → mint flow.",
      "Shipped the full ticketing flow — purchase, seat selection, NFT minting, and mobile check-in — ahead of the company's launch.",
    ],
    stack: ["Next.js", "React Native", "Solana", "Stripe", "Drizzle"],
    caseStudySlug: "mintix",
  },
  {
    companyName: "Hexleap",
    position: "Frontend Developer Intern",
    from: "Apr 2024",
    to: "Jan 2025",
    type: "Internship",
    href: "https://www.hexleap.com",
    location: "Remote",
    highlights: [
      "Built dashboards and marketing/landing pages from scratch as a frontend developer.",
      "Focused on reusable component architecture and smooth, considered interactions.",
    ],
    stack: ["Next.js", "React Query", "Tailwind", "Framer Motion"],
  },
  {
    position: "Freelance — Full-stack Engineer",
    from: "Jan 2024",
    to: "Present",
    type: "Freelance",
    highlights: [
      "Built an internal work-management platform — a flexible, ClickUp-style workspace — for a Singapore-based company.",
      "Owned it full-stack: a flexible custom-field data model, permissions, and real-time updates.",
      "Delivered production features across international client projects, alongside my full-time roles.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Drizzle"],
    caseStudySlug: "work-management",
  },
];
