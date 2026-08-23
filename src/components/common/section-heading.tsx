// The "build log" signature: a mono, terminal-style eyebrow above each section
// heading. The label reads like a path (~/experience) to reinforce the
// engineer-made voice without shouting.
export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
