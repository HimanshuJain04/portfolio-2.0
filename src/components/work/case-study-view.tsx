import type { CaseStudy } from "@/constants/work";
import { btnGhost } from "@/lib/ui";
import Link from "next/link";
import { Fragment } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

function Block({
  label,
  title,
  note,
  children,
}: {
  label: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {label}
        </span>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
        {note && (
          <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
            {note}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

export function CaseStudyView({
  study,
  next,
}: {
  study: CaseStudy;
  next?: { slug: string; name: string };
}) {
  const showGallery = !study.confidential;

  return (
    <article className="flex flex-col gap-14">
      {/* back */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-white"
      >
        <FiArrowLeft className="size-3.5" />
        selected work
      </Link>

      {/* 1 — header */}
      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500">
          <span>{study.index}</span>
          <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
          <span>{study.role}</span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>{study.period}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {study.name}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {study.tagline}
        </p>
        {study.note && (
          <p className="max-w-2xl text-sm italic leading-relaxed text-neutral-500">
            {study.note}
          </p>
        )}
        {study.liveUrl && (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`${btnGhost} w-fit`}
          >
            Visit live site
            <FiArrowUpRight className="size-4" />
          </a>
        )}
      </header>

      {/* 2 — at a glance */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {study.glance.map((t) => (
          <div
            key={t.label}
            className="flex flex-col gap-1 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] p-4 dark:bg-white/[0.03]"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
              {t.label}
            </span>
            <span className="text-sm font-medium">{t.value}</span>
          </div>
        ))}
      </div>

      {/* 3 — what I owned */}
      <Block label="~/owned" title="What I owned">
        <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {study.owned.map((o) => (
            <li
              key={o}
              className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              <span className="select-none text-emerald-500">▹</span>
              {o}
            </li>
          ))}
        </ul>
      </Block>

      {/* 4 — architecture */}
      <Block
        label="~/architecture"
        title="Architecture"
        note={
          study.architecture.conceptual
            ? "Conceptual — reconstructed from the stack, not the live repo."
            : undefined
        }
      >
        <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {study.architecture.summary}
        </p>
        <div className="flex flex-col gap-3">
          {study.architecture.flows.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-black/10 dark:border-white/10 p-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                {f.label}
              </span>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {f.nodes.map((n, i) => (
                  <Fragment key={n}>
                    <span className="rounded-lg bg-black/[0.05] px-3 py-1.5 font-mono text-xs dark:bg-white/[0.08]">
                      {n}
                    </span>
                    {i < f.nodes.length - 1 && (
                      <FiArrowRight className="size-3.5 shrink-0 text-neutral-400" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* 5 — hard problems */}
      <Block label="~/hard-problems" title="Hard problems">
        <div className="flex flex-col gap-4">
          {study.hardProblems.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-black/10 dark:border-white/10 p-5"
            >
              <div className="flex gap-3">
                <span className="pt-0.5 font-mono text-xs text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-medium">{p.problem}</p>
              </div>
              <div className="flex flex-col gap-2 pl-8 text-sm leading-relaxed">
                <p className="text-neutral-600 dark:text-neutral-400">
                  <span className="mr-2 font-mono text-xs text-neutral-400">
                    approach
                  </span>
                  {p.approach}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  <span className="mr-2 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                    outcome
                  </span>
                  {p.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* 6 — gallery */}
      {showGallery && (
        <Block label="~/gallery" title="Gallery">
          {study.gallery && study.gallery.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {study.gallery.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${study.name} screenshot`}
                  className="w-full rounded-lg ring-1 ring-black/10 dark:ring-white/10"
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {["web app", "organizer dashboard", "iOS scanner"].map((s) => (
                <div
                  key={s}
                  className="flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-black/15 dark:border-white/15 bg-black/[0.015] dark:bg-white/[0.02]"
                >
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                    screenshot · {s}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Block>
      )}

      {/* next project */}
      {next && (
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-3 rounded-xl border border-black/10 dark:border-white/10 p-5 transition hover:border-black/25 dark:hover:border-white/25"
        >
          <div className="flex flex-col">
            <span className="font-mono text-xs text-neutral-400">next</span>
            <span className="text-lg font-semibold">{next.name}</span>
          </div>
          <FiArrowRight className="size-5 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:group-hover:text-white" />
        </Link>
      )}
    </article>
  );
}
