import { SectionHeading } from "../common/section-heading";

export function About() {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading label="~/about" title="A bit about me" />
      <div className="flex flex-col gap-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        <p>
          I care about owning a product end-to-end — auth, payments, data
          models, the mobile build, and the deploy included.
        </p>
        <p>
          Most of what I&apos;ve learned came from figuring things out myself —
          unfamiliar codebases, production bugs, infrastructure problems, and
          features with no Stack Overflow answer waiting. Lately I&apos;ve been
          deep in backend-heavy product work.
        </p>
      </div>
    </section>
  );
}
