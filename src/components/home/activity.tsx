"use client";

import GitHubCalendar from "react-github-calendar";
import { SectionHeading } from "../common/section-heading";

export function Activity() {
  const explicitTheme = {
    light: ["#ebedf0", "#c4edde", "#7ac7c4", "#4f8a8b", "#2f4858"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section className="flex flex-col gap-4">
      <SectionHeading
        label="~/activity"
        title="Consistency"
        subtitle="The last year on GitHub — private work included."
      />

      <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] p-4 dark:bg-white/[0.03]">
        <GitHubCalendar
          username="HimanshuJain04"
          theme={explicitTheme}
          fontSize={12}
          blockSize={11}
          blockMargin={3}
        />
      </div>
    </section>
  );
}
