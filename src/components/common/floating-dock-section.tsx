import { BiLogoGmail } from "react-icons/bi";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { FloatingDock } from "../ui/floating-dock";

export function FloatingDockSection() {
  return (
    <div className="fixed bottom-2 inset-x-0 flex justify-center">
      <FloatingDock
        items={[
          {
            href: "https://github.com/HimanshuJain04",
            icon: <FaGithub />,
            title: "Github",
          },
          {
            href: "https://www.linkedin.com/in/himanshu-jain-72b48925a",
            icon: <FaLinkedin />,
            title: "LinkedIn",
          },
          {
            href: "https://x.com/_Himanshu_dev",
            icon: <FaXTwitter />,
            title: "Twitter",
          },
          {
            href: "mailto:himanshu09.dev@gmail.com",
            icon: <BiLogoGmail />,
            title: "Email",
          },
          {
            href: "https://linktr.ee/himanshu.dev",
            icon: <SiLinktree />,
            title: "Linktree",
          },
          {
            href: "/resume",
            icon: <FaFilePdf />,
            title: "Resume",
          },
        ]}
      />
    </div>
  );
}
