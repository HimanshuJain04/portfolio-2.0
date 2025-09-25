import Image from "next/image";
import profilerUrl from "/public/images/profile.jpg";

export function AboutMe() {
  const highlight = "text-neutral-900 dark:text-neutral-200";
  return (
    <div className="flex sm:flex-row flex-col-reverse gap-10">
      {/* name | bio */}
      <div className="flex z-20 flex-col gap-2">
        {/* name */}
        <h1 className="md:text-5xl xs:text-4xl text-3xl font-bold">
          Hi, I&apos;m Himanshu 👋
        </h1>

        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Software Engineer — personal portfolio of Himanshu Jain
        </h2>

        {/* bio */}
        <p className="text-neutral-700 md:text-base text-sm dark:text-neutral-400">
          Software engineer available for{" "}
          <span className={highlight}>contract or full-time roles</span>, with
          hands-on experience{" "}
          <span className={highlight}>
            building and shipping products quickly
          </span>
          . Passionate about <span className={highlight}>emerging tech</span>{" "}
          and{" "}
          <span className={highlight}>scaling ideas to reach real users.</span>
        </p>
      </div>

      {/* profile image */}
      <div className="md:size-40 self-center sm:size-32 size-28 shrink-0 relative">
        <Image
          src={profilerUrl}
          alt="Portrait of Himanshu Jain"
          height={140}
          width={140}
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
