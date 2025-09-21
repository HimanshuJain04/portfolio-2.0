import GitHubCalendar from "react-github-calendar";

export function Activity() {
  const explicitTheme = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#0f172a", "#0891b2", "#06b6d4", "#22d3ee", "#67e8f9"],
  };

  return (
    <section className="z-20">
      <GitHubCalendar username="HimanshuJain04" theme={explicitTheme} />
    </section>
  );
}
