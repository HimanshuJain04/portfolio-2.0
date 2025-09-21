import { SKILLS1, SKILLS2, Skill } from "@/constants/skills";
import Image from "next/image";

function Card({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center shrink-0 gap-2">
      <Image src={skill.icon} alt={skill.label} width={30} height={30} />
      <span className="font-medium">{skill.label}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section className="flex flex-col gap-5">
      {/* First Marquee: left to right */}
      <div className="marquee-container">
        <div className="marquee-track">
          {SKILLS1.concat(SKILLS1).map((s, idx) => (
            <Card skill={s} key={idx} />
          ))}
        </div>
      </div>

      {/* Second Marquee: right to left */}
      <div className="marquee-container">
        <div className="marquee-track reverse">
          {SKILLS2.concat(SKILLS2).map((s, idx) => (
            <Card skill={s} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
