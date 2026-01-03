import { EXPERIENCE, type Experience } from "@/constants/experience";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

function Card({ exp }: { exp: Experience }) {
  return (
    <div className="w-full p-5 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-2">
      {/* name | position | type */}
      <div className="w-full flex justify-between items-start gap-2">
        <div className="flex flex-col justify-start items-start">
          <h5 className="font-semibold xs:text-base text-sm md:text-lg">
            {exp.position}
          </h5>

          {exp.companyName && (
            <Link
              href={exp.href ?? "#"}
              target="_blank"
              className="xs:text-sm transition-colors text-xs dark:text-neutral-400 text-neutral-500 font-medium"
            >
              {exp.companyName}
            </Link>
          )}
        </div>

        <span className="rounded-full shrink-0 px-3 xs:text-sm text-xs py-1 dark:bg-white/20 bg-black/5 dark:text-neutral-300 text-neutral-40">
          {exp.type}
        </span>
      </div>

      {/* date | location */}
      <div className="flex gap-2 items-center text-neutral-700 xs:text-sm text-xs dark:text-neutral-400">
        {/* date */}
        <div className="flex items-center gap-2">
          <MdOutlineDateRange />
          <span>
            {exp.from} - {exp.to}
          </span>
        </div>

        {/* location */}
        {exp.location && (
          <>
            <BsDot />

            <div className="flex items-center gap-2">
              <IoLocationOutline />
              <span>{exp.location}</span>
            </div>
          </>
        )}
      </div>

      {/* description */}
      <p className="text-neutral-700 xs:text-sm text-xs dark:text-neutral-400">
        {exp.description}
      </p>

      {/* stack */}
      <div className="xs:text-sm text-xs text-neutral-600 dark:text-neutral-300">
        <span className="text-neutral-500">Tech Stack:</span>{" "}
        {exp.techStack?.join(", ")}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="flex flex-col gap-5">
      {/* title | subtitle */}
      <div>
        <h3 className="md:text-3xl xs:text-2xl text-xl font-bold">
          Experience
        </h3>
        <p className="text-sm mt-1 text-neutral-400 dark:text-neutral-500">
          Focused on building and shipping products fast, with clean, scalable
          code that keeps releases smooth and stress-free.
        </p>
      </div>

      {/* experience */}
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((e, idx) => (
          <Card key={idx} exp={e} />
        ))}
      </div>
    </section>
  );
}
