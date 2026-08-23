import { FloatingDockSection } from "@/components/common/floating-dock-section";
import { Navbar } from "@/components/home/navbar";
import { StarsBackground } from "@/components/ui/stars-background";
import { CaseStudyView } from "@/components/work/case-study-view";
import { CASE_STUDIES, getCaseStudy } from "@/constants/work";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name} — Case Study`,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.name} — Case Study | Himanshu Jain`,
      description: study.tagline,
      url: `/work/${study.slug}`,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  // Next study wraps around, so there's always a way forward.
  const idx = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const nextStudy = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const next =
    nextStudy && nextStudy.slug !== slug
      ? { slug: nextStudy.slug, name: nextStudy.name }
      : undefined;

  return (
    <div className="relative min-h-screen w-full bg-neutral-50 pb-24 pt-32 dark:bg-neutral-950">
      <StarsBackground />
      <Navbar />
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-16 px-6 md:px-0">
        <CaseStudyView study={study} next={next} />
        <FloatingDockSection />
      </div>
    </div>
  );
}
