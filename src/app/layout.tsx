import { KEYWORDS } from "@/constants/seo";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { CustomThemeProvider } from "./CustomThemeProvider";
import "./globals.css";

const siteUrl = "https://www.himanshu.works";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Himanshu Jain — Software Engineer (Portfolio)",
    template: "%s | Himanshu Jain",
  },
  description:
    "Himanshu Jain portfolio — Software Engineer and Founding Engineer. Building fast, scalable products with Next.js, TypeScript, React Native, Tailwind CSS, and Web3 integrations.",
  keywords: KEYWORDS,
  authors: [{ name: "Himanshu Jain", url: siteUrl }],
  creator: "Himanshu Jain",
  publisher: "Himanshu Jain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Himanshu Jain",
    title: "Himanshu Jain — Software Engineer",
    description:
      "Software engineer building and shipping products fast with Next.js, TypeScript, React Native, Tailwind CSS, Solana, Prisma, and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Himanshu Jain — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Jain — Software Engineer",
    description:
      "Portfolio of Himanshu Jain. Next.js, React, TypeScript, Tailwind CSS, Web3, Solana, Prisma.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
          <main>{children}</main>
        </CustomThemeProvider>

        <GoogleAnalytics gaId="G-XZFECN1S5Y" />
      </body>
    </html>
  );
}
