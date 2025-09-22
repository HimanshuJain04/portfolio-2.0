const data = [
  {
    imageUrl: "",
    title: "",
    description: "",
    githubLink: "",
    liveLink: "",
  },
  {
    imageUrl: "",
    title: "",
    description: "",
    githubLink: "",
    liveLink: "",
  },
  {
    imageUrl: "",
    title: "",
    description: "",
    githubLink: "",
    liveLink: "",
  },
  {
    imageUrl: "",
    title: "",
    description: "",
    githubLink: "",
    liveLink: "",
  },
];

export function Projects() {
  return (
    <section className="flex flex-col gap-5">
      {/* title | subtitle */}
      <div>
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-sm mt-1 text-neutral-400 dark:text-neutral-500">
          A mix of professional work, open-source contributions, and passion
          projects — where I explore new tech, push my limits, and build things
          I genuinely enjoy using.
        </p>
      </div>

      {/* projects  */}
      <div className="text-center">Coming Soon</div>
    </section>
  );
}
