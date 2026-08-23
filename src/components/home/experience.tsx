import { EXPERIENCE, type Experience as Exp } from "@/constants/experience";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeading } from "../common/section-heading";

function Entry({ exp }: { exp: Exp }) {
  return (
    <li className="relative flex flex-col gap-2 border-l border-black/10 dark:border-white/10 pl-5 pb-7 last:pb-0">
      <span className="absolute -left-[3.5px] top-2 size-[6px] rounded-full bg-neutral-400 dark:bg-neutral-600" />

      {/* position · company | dates */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-semibold md:text-lg">
          {exp.position}
          {exp.companyName && (
            <>
              <span className="mx-1.5 text-neutral-300 dark:text-neutral-700">·</span>
              {exp.href ? (
                <Link
                  href={exp.href}
                  target="_blank"
                  className="underline decoration-dotted underline-offset-4 transition-colors hover:text-neutral-500"
                >
                  {exp.companyName}
                </Link>
              ) : (
                exp.companyName
              )}
            </>
          )}
        </h3>
        <span className="shrink-0 font-mono text-xs text-neutral-500">
          {exp.from} — {exp.to}
        </span>
      </div>

      {/* type · location */}
      <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
        <span>{exp.type}</span>
        {exp.location && (
          <>
            <span>·</span>
            <span>{exp.location}</span>
          </>
        )}
      </div>

      {/* ownership bullets */}
      <ul className="mt-1 flex flex-col gap-1.5">
        {exp.highlights.map((h, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            <span className="select-none text-neutral-300 dark:text-neutral-700">–</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* stack chips | case-study link */}
      <div className="mt-1 flex flex-wrap items-center gap-2">
        {exp.stack?.map((t) => (
          <span
            key={t}
            className="rounded border border-black/[0.08] dark:border-white/[0.08] px-1.5 py-0.5 font-mono text-[10px] text-neutral-500"
          >
            {t}
          </span>
        ))}
        {exp.caseStudySlug && (
          <Link
            href={`/work/${exp.caseStudySlug}`}
            className="ml-auto inline-flex items-center gap-1 font-mono text-xs text-neutral-900 transition-all hover:gap-1.5 dark:text-white"
          >
            case study <FiArrowUpRight className="size-3.5" />
          </Link>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section className="flex flex-col gap-5">
      <SectionHeading
        label="~/experience"
        title="Experience"
        subtitle="Internship → founding engineer → full-stack product work."
      />
      <ol className="flex flex-col">
        {EXPERIENCE.map((e, i) => (
          <Entry key={i} exp={e} />
        ))}
      </ol>
    </section>
  );
}
