import { ResumeViewer } from "@/components/resume/resume-viewer";
import { KEYWORDS } from "@/constants/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Himanshu Jain",
  description:
    "Download Himanshu Jain's resume - Software Engineer with expertise in Next.js, React, TypeScript, and Web3 development. Available for contract and full-time roles.",
  keywords: [
    ...KEYWORDS,
    "Himanshu Jain Resume",
    "Download Resume",
    "Software Engineer Resume",
    "Frontend Developer Resume",
    "Next.js Developer Resume",
    "React Developer Resume",
    "TypeScript Developer Resume",
    "Web3 Developer Resume",
    "Hire Himanshu Jain",
    "Resume PDF",
    "CV Download",
  ],
  openGraph: {
    title: "Resume | Himanshu Jain",
    description:
      "Download Himanshu Jain's resume - Software Engineer with expertise in Next.js, React, TypeScript, and Web3 development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Himanshu Jain",
    description:
      "Download Himanshu Jain's resume - Software Engineer with expertise in Next.js, React, TypeScript, and Web3 development.",
  },
};

export default function Resume() {
  return <ResumeViewer />;
}
