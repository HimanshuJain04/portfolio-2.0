export type Experience = {
  companyName: string;
  position: string;
  from: string;
  to: string;
  type: string;
  href?: string;
  description?: string;
  techStack?: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    companyName: "Mintix",
    position: "Software Engineer / Founding Engineer",
    from: "December 2024",
    to: "Present",
    type: "Full-time",
    href: "https://mintixapp.com",
    description:
      "Building Mintix’s Web3-powered ticketing platform from the ground up — architecting apps, websites, and backend systems from scratch, integrating payments, and scaling for production.",
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
    to: "December 2024",
    type: "Internship",
    href: "https://www.hexleap.com",
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
    companyName: "",
    position: "Freelance",
    from: "January 2024",
    to: "Present",
    type: "Freelance",
    href: "#",
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
