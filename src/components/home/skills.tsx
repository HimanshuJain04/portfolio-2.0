import { STACK } from "@/constants/skills";
import { cn } from "@/lib/utils";
import { SectionHeading } from "../common/section-heading";

export function Skills() {
  return (
    <section id="stack" className="flex flex-col gap-5 scroll-mt-24">
      <SectionHeading
        label="~/stack"
        title="Stack"
        subtitle="Tools I reach for. Filled = daily driver · outline = worked with."
      />

      <div className="flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.08]">
        {STACK.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-2 py-3 first:pt-0 last:pb-0 sm:grid-cols-[130px_1fr] sm:gap-4"
          >
            <span className="pt-1.5 font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((t, i) => (
                <span
                  key={`${t.label}-${i}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm transition",
                    t.primary
                      ? "bg-black/[0.06] text-neutral-900 dark:bg-white/[0.10] dark:text-white"
                      : "border border-black/10 text-neutral-500 dark:border-white/12 dark:text-neutral-400"
                  )}
                >
                  <t.Icon className="size-3.5 shrink-0" aria-hidden />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
