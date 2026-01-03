export type Experience = {
  companyName?: string;
  position: string;
  from: string;
  to: string;
  type: string;
  href?: string;
  description?: string;
  techStack?: string[];
  location?: string;
};

export const EXPERIENCE: Experience[] = [
  {
    companyName: "GastroSmart",
    position: "Software Engineer",
    from: "January 2026",
    to: "Present",
    location: "Remote",
    type: "Full-time",
    // href: "https://gastrosmart.com",
    description:
      "Building full-stack features, improving system reliability, and shipping production-ready functionality in a team-driven environment.",
    techStack: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "Mantine UI",
      "Redis",
      "Drizzle ORM",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    companyName: "Mintix",
    position: "Software Engineer / Founding Engineer",
    from: "December 2024",
    to: "January 2026",
    location: "Remote",
    type: "Full-time",
    href: "https://mintixapp.com",
    description:
      "Built Mintix’s Web3-powered ticketing platform from the ground up — architecting apps, websites, and backend systems, integrating payments, and taking the product to production scale.",
    techStack: [
      "Next.js",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "Redis",
      "Stripe",
      "Solana",
      "Metaplex",
      "Web3.js",
      "Shyft SDK",
      "Drizzle ORM",
      "PlanetScale",
    ],
  },
  {
    companyName: "Hexleap",
    position: "Frontend Developer Intern",
    from: "April 2024",
    to: "January 2025",
    type: "Internship",
    href: "https://www.hexleap.com",
    location: "Remote",
    description:
      "Developed and shipped frontend for multiple dashboards and web apps from scratch — focusing on clean UI, scalable components, and smooth interactions.",
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    position: "Freelance",
    from: "January 2024",
    to: "Present",
    type: "Freelance",
    description:
      "Worked on multiple international projects delivering full-stack solutions, building modern UIs, APIs, and integrations to ship products quickly.",
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Hono",
      "Supabase",
      "PostgreSQL",
      "Drizzle",
      "Prisma",
      "Stripe",
    ],
  },
];
