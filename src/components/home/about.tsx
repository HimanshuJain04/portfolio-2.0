import { SectionHeading } from "../common/section-heading";

export function About() {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading label="~/about" title="A bit about me" />
      <div className="flex flex-col gap-3 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
        <p>
          I care about owning a product end-to-end — auth, payments, data
          models, the mobile build, and the deploy included. Most of what I know
          came from shipping real things under real constraints, not tutorials.
        </p>
        <p>
          I move fast, sweat the details, and I&apos;m happiest with a hard
          problem and a deadline. Lately I&apos;m deep in backend-heavy product
          work and always chasing the next thing worth building.
        </p>
      </div>
    </section>
  );
}
