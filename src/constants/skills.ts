import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFramer,
  SiGit,
  SiHono,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSolana,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbDiamond } from "react-icons/tb";

export type Tech = {
  label: string;
  Icon: IconType;
  /** Daily driver vs. worked-with — drives the fill/outline treatment. */
  primary?: boolean;
};

export type StackGroup = {
  label: string;
  items: Tech[];
};

export const STACK: StackGroup[] = [
  {
    label: "Languages",
    items: [
      { label: "TypeScript", Icon: SiTypescript, primary: true },
      { label: "JavaScript", Icon: SiJavascript, primary: true },
    ],
  },
  {
    label: "Frontend",
    items: [
      { label: "React", Icon: SiReact, primary: true },
      { label: "Next.js", Icon: SiNextdotjs, primary: true },
      { label: "React Native", Icon: SiReact, primary: true },
      { label: "Tailwind", Icon: SiTailwindcss, primary: true },
      { label: "Framer Motion", Icon: SiFramer },
    ],
  },
  {
    label: "Backend",
    items: [
      { label: "Node.js", Icon: SiNodedotjs, primary: true },
      { label: "Nest.js", Icon: SiNestjs, primary: true },
      { label: "Hono", Icon: SiHono },
      { label: "Express", Icon: SiExpress },
    ],
  },
  {
    label: "Data",
    items: [
      { label: "PostgreSQL", Icon: SiPostgresql, primary: true },
      { label: "Drizzle", Icon: SiDrizzle, primary: true },
      { label: "Redis", Icon: SiRedis, primary: true },
      { label: "Prisma", Icon: SiPrisma },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Supabase", Icon: SiSupabase },
    ],
  },
  {
    label: "Payments & Web3",
    items: [
      { label: "Stripe", Icon: SiStripe, primary: true },
      { label: "Solana", Icon: SiSolana, primary: true },
      { label: "Metaplex", Icon: TbDiamond, primary: true },
    ],
  },
  {
    label: "Infra",
    items: [
      { label: "Docker", Icon: SiDocker },
      { label: "Vercel", Icon: SiVercel },
      { label: "Git", Icon: SiGit, primary: true },
    ],
  },
];
