import { SKILLS1, SKILLS2, type Skill } from "@/constants/skills";
import Image from "next/image";

function Card({ skill }: { skill: Skill }) {
  return (
    <div className="flex bg-black/5 border-black/10 dark:bg-white/10 border dark:border-white/15 backdrop-blur-sm p-2 rounded-lg items-center shrink-0 gap-2">
      <div className="sm:size-7 size-5 flex justify-center items-center shrink-0">
        <Image
          src={skill.icon}
          alt={skill.label}
          width={30}
          height={30}
          objectFit="contain"
          className={skill.invertOnDark ? "dark:invert" : ""}
        />
      </div>

      <span className="font-medium md:text-base xs:text-sm text-xs">
        {skill.label}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section className="flex flex-col gap-5">
      {/* <h2 className="text-3xl font-bold">Skills</h2> */}

      {/* First Marquee: left to right */}
      <div className="flex overflow-x-auto carousel select-none">
        <div className="flex gap-4 pr-4 shrink-0 carousel-animation">
          {SKILLS1.map((s, idx) => (
            <Card skill={s} key={idx} />
          ))}
        </div>

        <div
          aria-hidden
          className="flex pr-4 shrink-0 gap-4 carousel-animation"
        >
          {SKILLS1.map((s, idx) => (
            <Card skill={s} key={idx} />
          ))}
        </div>
      </div>

      {/* Second Marquee: right to left */}
      <div className="flex overflow-x-auto carousel select-none">
        <div className="flex gap-4 pr-4 shrink-0 carousel-reverse-animation">
          {SKILLS2.map((s, idx) => (
            <Card skill={s} key={idx} />
          ))}
        </div>

        <div
          aria-hidden
          className="flex pr-4 shrink-0 gap-4 carousel-reverse-animation"
        >
          {SKILLS2.map((s, idx) => (
            <Card skill={s} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
