import Image from "next/image";
import profilerUrl from "/public/images/profile.jpg";

export function AboutMe() {
  const highlight = "text-neutral-900 dark:text-neutral-200";
  return (
    <div className="flex gap-10">
      {/* name | bio */}
      <div className="flex z-20 flex-col gap-2">
        {/* name */}
        <h1 className="text-5xl font-bold">Hi, I&apos;m Himanshu 👋</h1>

        {/* bio */}
        <p className="text-neutral-700 dark:text-neutral-400">
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
      <div className="size-40 shrink-0 relative">
        <Image
          src={profilerUrl}
          alt="profile"
          height={140}
          width={140}
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
