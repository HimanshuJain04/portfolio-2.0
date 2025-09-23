export type Skill = {
  label: string;
  icon: string;
  invertOnDark?: boolean;
};

// First marquee
export const SKILLS1: Skill[] = [
  { label: "Next.js", icon: "/icons/nextjs.svg" },
  { label: "React.js", icon: "/icons/react.svg" },
  { label: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { label: "CSS3", icon: "/icons/css3.svg" },
  { label: "HTML5", icon: "/icons/html5.svg" },
  { label: "JavaScript", icon: "/icons/javascript.svg" },
  { label: "TypeScript", icon: "/icons/typescript.svg" },
  { label: "React Native", icon: "/icons/react.svg" },
  { label: "Framer Motion", icon: "/icons/framer.svg" },
  { label: "Shadcn UI", icon: "/icons/shadcn.svg", invertOnDark: true },
  { label: "Radix UI", icon: "/icons/radix.svg", invertOnDark: true },
];

// Second marquee
export const SKILLS2: Skill[] = [
  { label: "Node.js", icon: "/icons/nodejs.svg" },
  { label: "Express.js", icon: "/icons/express.svg", invertOnDark: true },
  { label: "MongoDB", icon: "/icons/mongodb.svg" },
  { label: "HONO", icon: "/icons/hono.svg" },
  { label: "Firebase", icon: "/icons/firebase.svg" },
  { label: "Prisma ORM", icon: "/icons/prisma.svg", invertOnDark: true },
  { label: "Vercel", icon: "/icons/vercel.svg", invertOnDark: true },
  { label: "Docker", icon: "/icons/docker.svg" },
  { label: "Git", icon: "/icons/git.svg" },
  { label: "Solana", icon: "/icons/solana.svg" },
  { label: "Metaplex", icon: "/icons/metaplex.svg", invertOnDark: true },
];
