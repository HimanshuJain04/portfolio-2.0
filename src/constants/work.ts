// Case-study data. Two studies, done properly (see design spec §4).
//
// HONESTY RULE: no fabricated metrics, ever. `glance` tiles carry scope facts
// (surfaces, integrations, timeline) — never invented user/revenue numbers.
//
// Fields marked `draft: true` contain best-guess engineering narrative that
// Himanshu must confirm/correct before this ships to production. The home-page
// CARDS never render draft fields.

export type StatTile = { label: string; value: string };

export type HardProblem = {
  problem: string;
  approach: string;
  outcome: string;
};

export type ArchFlow = {
  label: string;
  nodes: string[];
};

export type CaseStudy = {
  slug: string;
  /** Sequence marker — real chronological order of the work. */
  index: string;
  name: string;
  role: string;
  /** One-line "what it is". */
  tagline: string;
  period: string;
  liveUrl?: string;
  /** True when the client/product can't be named. */
  confidential?: boolean;
  /** Honest framing line shown under the header (e.g. pre-launch scope note). */
  note?: string;
  /** Short blurb for the home-page Selected Work card. */
  cardBlurb: string;
  /** ≤4 key techs shown on the card. */
  keyTech: string[];
  /** Cover image for the card. undefined → typographic/diagram treatment. */
  cover?: string;

  // ---- /work/[slug] detail blocks ----
  glance: StatTile[];
  owned: string[];
  architecture: {
    summary: string;
    flows: ArchFlow[];
    /** conceptual = reconstructed from the stack, not the live repo. */
    conceptual?: boolean;
  };
  hardProblems: HardProblem[];
  gallery?: string[];
  /** Deep narrative (architecture/hardProblems) is draft pending confirmation. */
  draft?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "mintix",
    index: "01",
    name: "Mintix",
    role: "Founding Engineer",
    tagline:
      "Web3 ticketing platform — web app, organizer dashboard, iOS scanner, and on-chain minting.",
    period: "Dec 2024 – Jan 2026",
    liveUrl: "https://mintixapp.com",
    note: "I built the full platform to production-ready; the company was still pre-launch when I moved on. This is a scope-and-craft story, not a traffic one.",
    cardBlurb:
      "Built the entire platform solo — turning event tickets into Solana NFTs, with payments, seat mapping, and a mobile check-in app.",
    keyTech: ["Next.js", "React Native", "Solana", "Stripe"],
    // TODO(himanshu): drop a real product screenshot here (e.g. "/images/work/mintix-cover.png").
    cover: undefined,
    glance: [
      { label: "Role", value: "Founding Engineer" },
      { label: "Surfaces", value: "Web · Dashboard · iOS · API" },
      { label: "Timeline", value: "0 → production-ready" },
      { label: "Integrations", value: "8+" },
    ],
    owned: [
      "Marketing site and the core web application (Next.js).",
      "Organizer dashboard for creating events, managing tickets, and viewing analytics.",
      "React Native iOS app for scanning and validating tickets at the door.",
      "Backend APIs, data model, and Redis caching layer.",
      "On-chain minting pipeline turning each ticket into a Solana NFT (Metaplex).",
      "Stripe payments wired end-to-end into the purchase → mint flow.",
      "Seat mapping and selection (Seats.io).",
    ],
    architecture: {
      conceptual: true,
      summary:
        "Two flows carry the product: a standard web + mobile app over an API, and an on-chain pipeline that mints a ticket NFT once payment clears.",
      flows: [
        {
          label: "Product",
          nodes: ["Next.js web + RN app", "API", "PlanetScale + Redis"],
        },
        {
          label: "Minting",
          nodes: ["Purchase", "Stripe", "Mint job", "Solana / Metaplex"],
        },
      ],
    },
    // DRAFT — confirm/correct with Himanshu before production.
    hardProblems: [
      {
        problem:
          "A card payment and an on-chain mint are two systems that can each fail on their own.",
        approach:
          "Decoupled purchase from mint — Stripe confirms first, then a background job handles minting, so a slow chain never blocks checkout.",
        outcome:
          "Buyers get instant confirmation; minting settles reliably in the background.",
      },
      {
        problem:
          "Seat availability has to stay correct across web, mobile, and the organizer's seat map.",
        approach:
          "Treated Seats.io as the source of truth for layout and synced availability/holds into our own state.",
        outcome: "No double-booked seats across surfaces.",
      },
      {
        problem: "Two client platforms, one product — web and a React Native app.",
        approach:
          "Kept business logic in the backend so both clients consumed the same API contracts.",
        outcome: "Features shipped once and behaved the same everywhere.",
      },
    ],
    gallery: [], // TODO(himanshu): add screenshots (web, dashboard, scanner).
    draft: true,
  },
  {
    slug: "work-management",
    index: "02",
    name: "Internal Work-Management Platform",
    role: "Freelance · Full-stack Engineer",
    tagline:
      "A flexible ClickUp alternative built for a company's internal operations.",
    period: "2025",
    confidential: true,
    cardBlurb:
      "Designed and built an internal work-management tool from scratch — flexible custom fields, permissions, and real-time collaboration.",
    keyTech: ["Next.js", "Node.js", "PostgreSQL", "Drizzle"],
    cover: undefined, // anonymized — typographic/diagram treatment, no screenshots.
    glance: [
      { label: "Role", value: "Full-stack Engineer" },
      { label: "Client", value: "Singapore (confidential)" },
      { label: "Type", value: "Internal tooling" },
      { label: "Scope", value: "Full-stack, solo" },
    ],
    owned: [
      "Data model for flexible, user-defined fields (a ClickUp-style schema).",
      "Permissions and access control for internal teams.",
      "Real-time updates so changes reflect across users.",
      "Full-stack delivery: frontend, API, and database.",
    ],
    architecture: {
      conceptual: true,
      summary:
        "The hard part is the schema: fields are data, not columns, so teams reshape the tool without a migration.",
      flows: [{ label: "App", nodes: ["Next.js", "API", "PostgreSQL / Drizzle"] }],
    },
    // DRAFT — confirm/correct with Himanshu; stack is a best guess.
    hardProblems: [
      {
        problem:
          "Teams needed to define their own fields and views without an engineer shipping a migration each time.",
        approach:
          "Modeled fields as data rather than columns, so a new field type is configuration, not code.",
        outcome: "Teams shape the tool to their workflow on their own.",
      },
    ],
    draft: true,
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);
