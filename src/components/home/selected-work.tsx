import { CASE_STUDIES, type CaseStudy } from "@/constants/work";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { SectionHeading } from "../common/section-heading";

function WorkCard({ c }: { c: CaseStudy }) {
  return (
    <Link
      href={`/work/${c.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-5 transition hover:border-black/25 dark:hover:border-white/25"
    >
      {/* cover — screenshot when available, else an intentional placeholder */}
      {c.cover ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-black/10 dark:ring-white/10">
          <Image src={c.cover} alt={`${c.name} preview`} fill className="object-cover" />
        </div>
      ) : (
        <div className="flex aspect-[16/9] w-full items-center justify-center rounded-lg border border-dashed border-black/15 dark:border-white/15 bg-black/[0.015] dark:bg-white/[0.02]">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
            {c.confidential ? "confidential · diagram only" : "screenshot coming"}
          </span>
        </div>
      )}

      {/* index | role | name */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
            <span>{c.index}</span>
            <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
            <span>{c.role}</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
            {c.name}
          </h3>
        </div>
        <FiArrowUpRight className="size-5 shrink-0 text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:group-hover:text-white" />
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {c.cardBlurb}
      </p>

      <div className="flex flex-wrap gap-2">
        {c.keyTech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-black/10 dark:border-white/10 px-2 py-0.5 font-mono text-[11px] text-neutral-600 dark:text-neutral-400"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="flex flex-col gap-5 scroll-mt-24">
      <SectionHeading
        label="~/selected-work"
        title="Selected Work"
        subtitle="Products I've owned end-to-end — two, in depth. Not a pile of clones."
      />
      <div className="flex flex-col gap-4">
        {CASE_STUDIES.map((c) => (
          <WorkCard key={c.slug} c={c} />
        ))}
      </div>
    </section>
  );
}
