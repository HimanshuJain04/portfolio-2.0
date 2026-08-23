import { btnGhost, btnPrimary } from "@/lib/ui";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function AboutMe() {
  const hl = "text-neutral-900 dark:text-neutral-100 font-medium";
  return (
    <section className="flex flex-col gap-6">
      <div className="flex sm:flex-row flex-col-reverse gap-8 sm:items-center justify-between">
        {/* eyebrow | name | thesis */}
        <div className="flex z-20 flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Software Engineer
          </span>

          <h1 className="md:text-5xl xs:text-4xl text-3xl font-bold tracking-tight">
            Hi, I&apos;m Himanshu 👋
          </h1>

          <h2 className="sr-only">
            Software Engineer — personal portfolio of Himanshu Jain
          </h2>

          <p className="text-neutral-700 md:text-lg text-base dark:text-neutral-300 leading-relaxed">
            I take products from <span className={hl}>zero to shipped</span> —
            web, mobile, backend, payments, and on-chain.
          </p>
        </div>

        {/* profile image */}
        <div className="md:size-36 self-start sm:self-center sm:size-32 size-24 shrink-0 relative">
          <Image
            src="/images/profile.png"
            alt="Portrait of Himanshu Jain"
            height={144}
            width={144}
            priority
            className="rounded-2xl object-cover ring-1 ring-black/10 dark:ring-white/15"
          />
        </div>
      </div>

      {/* proof line */}
      <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
        Currently at <span className="text-neutral-900 dark:text-neutral-200">GastroSmart</span>.
        Before that, founding engineer on a Web3 ticketing platform — I built
        the web app, organizer dashboard, iOS scanner, and the on-chain minting
        pipeline. Solo.
      </p>

      {/* actions | availability */}
      <div className="flex flex-wrap items-center gap-3">
        <Link href="#work" className={btnPrimary}>
          Selected work
        </Link>
        <a
          href="https://github.com/HimanshuJain04"
          target="_blank"
          rel="noreferrer"
          className={btnGhost}
        >
          <FaGithub className="size-4" />
          GitHub
        </a>

        <span className="sm:ml-auto inline-flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to full-time &amp; contract
        </span>
      </div>
    </section>
  );
}
