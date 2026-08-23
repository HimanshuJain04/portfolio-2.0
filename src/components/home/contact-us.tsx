import { btnGhost, btnPrimary } from "@/lib/ui";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { SectionHeading } from "../common/section-heading";

export function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-4 scroll-mt-24">
      <SectionHeading label="~/contact" title="Let's build something" />
      <p className="max-w-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
        Open to full-time and contract roles. The fastest way to reach me is
        email — I read everything.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <a href="mailto:himanshu09.dev@gmail.com" className={btnPrimary}>
          <BiLogoGmail className="size-4" />
          himanshu09.dev@gmail.com
        </a>
        <a
          href="https://x.com/himanxhujain"
          target="_blank"
          rel="noreferrer"
          className={btnGhost}
        >
          <FaXTwitter className="size-4" />
          X
        </a>
      </div>
    </section>
  );
}
