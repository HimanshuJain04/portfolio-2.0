import Image from "next/image";
import profilerUrl from "/public/images/profile.jpg";

export function AboutMe() {
  return (
    <div className="flex gap-10">
      {/* name | bio */}
      <div className="flex z-20 flex-col gap-2">
        {/* name */}
        <h1 className="text-5xl font-bold">Hi, I&apos;m Himanshu 👋</h1>

        {/* bio */}
        <p className="text-neutral-700 dark:text-neutral-400">
          22 y/o, loves creating content end to end, writes code, built a
          startup, live-streamed for years, enjoys architecture, and is now
          experimenting with content, open to new opportunities in content
          creation roles.
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
