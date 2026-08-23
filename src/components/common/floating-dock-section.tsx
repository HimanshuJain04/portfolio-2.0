import { BiLogoGmail } from "react-icons/bi";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
            href: "https://www.linkedin.com/in/himanxhujain/",
            icon: <FaLinkedin />,
            title: "LinkedIn",
          },
          {
            href: "https://x.com/himanxhujain",
            icon: <FaXTwitter />,
            title: "Twitter",
          },
          {
            href: "mailto:himanshu09.dev@gmail.com",
            icon: <BiLogoGmail />,
            title: "Email",
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
