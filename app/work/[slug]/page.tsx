import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/animation/Reveal";
import { ArchitectureDiagram } from "@/components/visuals/ArchitectureDiagram";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { ProjectImageGallery } from "@/components/work/ProjectImageGallery";
import { allCaseStudies, caseStudies, getCaseStudy } from "@/lib/work-data";
import { site } from "@/lib/site-data";

export function generateStaticParams() {
  return allCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
 params
}: {
 params: { slug: string };
}): Promise<Metadata> {
 const study = getCaseStudy(params.slug);
 if (!study) return {};
 return {
 title: `${study.title} — Case study`,
 description: study.outcome + " " + study.problem,
 alternates: { canonical: `/work/${study.slug}` }
 };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
 const cs = getCaseStudy(params.slug);
 if (!cs) notFound();

 const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);
 const isPortfolio = cs.source === "portfolio";

 return (
 <>
 <SchemaMarkup
 type="breadcrumb"
 items={[
 { name: "Home", url: `${site.url}/` },
 { name: "Work", url: `${site.url}/work` },
 { name: cs.title, url: `${site.url}/work/${cs.slug}` }
 ]}
 />

 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Breadcrumb
 items={[
 { label: "Work", href: "/work" },
 { label: cs.industry }
 ]}
 />
 <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-5">
 <div className="flex flex-wrap items-center gap-3">
 <Eyebrow>
 {isPortfolio ? "Portfolio" : "Case study"} · {cs.index}
 </Eyebrow>
 <Pill tone="accent">{cs.industry}</Pill>
 </div>
 <h1 className="mt-6 text-display-xl text-ink">{cs.title}</h1>
 <p className="mt-6 font-serif text-[22px] italic text-accent sm:text-[26px]">
 {cs.outcome}
 </p>
 <div className="mt-8 flex flex-wrap gap-2">
 {cs.timeline && <Pill tone="neutral">Timeline · {cs.timeline}</Pill>}
 {cs.client && <Pill tone="neutral">Client · {cs.client}</Pill>}
 {cs.role && <Pill tone="neutral">{cs.role}</Pill>}
 {cs.year && <Pill tone="neutral">{cs.year}</Pill>}
 </div>
 {cs.categoryTags && cs.categoryTags.length > 0 && (
 <ul className="mt-6 flex flex-wrap gap-2">
 {cs.categoryTags.map((tag) => (
 <li key={tag}>
 <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
 {tag}
 </span>
 </li>
 ))}
 </ul>
 )}
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
 <ProjectImageGallery study={cs} />
 </Reveal>
 </div>
 </Container>
 </section>

 <Section tone="page" >
 <Container size="wide">
 <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-6">
 <Eyebrow>The problem</Eyebrow>
 <h2 className="mt-5 font-serif text-[34px] leading-[1.1] tracking-display-tight text-ink">
 {cs.problem.split(". ")[0]}.
 </h2>
 <p className="mt-5 max-w-[56ch] text-body text-ink-body">{cs.problem}</p>
 </Reveal>
 <Reveal delay={0.05} className="min-w-0 lg:col-span-6">
 <Eyebrow>The result</Eyebrow>
 <h2 className="mt-5 font-serif text-[34px] leading-[1.1] tracking-display-tight text-ink">
 {cs.outcome}
 </h2>
 <p className="mt-5 max-w-[56ch] text-body text-ink-body">{cs.result}</p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
 {cs.metrics.map((m) => (
 <li key={m.label} className="bg-bg-card px-5 py-5">
 <p className="font-serif text-[28px] leading-none tracking-display-tight text-ink">
 {m.value}
 </p>
 <p className="mt-2 font-mono text-[10px] uppercase tracking-eyebrow text-ink-body">
 {m.label}
 </p>
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </Container>
 </Section>

 <Section tone="elevated" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>What we built</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">The shape of the system.</h2>
 </div>
 <ul className="lg:col-span-8">
 {cs.solution.map((line, idx) => (
 <li key={idx}>
 <Reveal delay={idx * 0.04}>
 <div className="grid grid-cols-12 gap-4 py-5">
 <span className="col-span-1 font-mono text-[11px] uppercase tracking-eyebrow text-accent pt-1">
 0{idx + 1}
 </span>
 <p className="col-span-11 text-body text-ink max-w-[60ch]">{line}</p>
 </div>
 </Reveal>
 </li>
 ))}
 </ul>
 </div>
 </Container>
 </Section>

 {cs.architecture && (
 <Section tone="page" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-4">
 <Eyebrow>Architecture</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">How it runs in production.</h2>
 </Reveal>
 <Reveal delay={0.05} className="min-w-0 lg:col-span-8">
 <p className="max-w-[68ch] text-body text-ink-body">{cs.architecture}</p>
 </Reveal>
 </div>
 </Container>
 </Section>
 )}

 <Section tone="page" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>The stack</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">Tools that operators can run at 3am.</h2>
 </div>
 <ul className="lg:col-span-8">
 {cs.stack.map((s) => (
 <li key={s.label} className="grid grid-cols-12 items-baseline gap-4 py-6">
 <span className="col-span-12 font-mono text-[11px] uppercase tracking-eyebrow text-accent sm:col-span-3">
 {s.label}
 </span>
 <ul className="col-span-12 flex flex-wrap gap-2 sm:col-span-9">
 {s.tools.map((tool) => (
 <li key={tool}>
 <Pill tone="neutral">{tool}</Pill>
 </li>
 ))}
 </ul>
 </li>
 ))}
 </ul>
 </div>
 </Container>
 </Section>

 {!cs.architecture && (
 <Section tone="page" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>Architecture</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">Inputs → orchestration → outputs.</h2>
 <p className="mt-5 text-body text-ink-body max-w-[44ch]">
 A small, observable core. Replaceable parts. No clever magic.
 </p>
 </div>
 <div className="lg:col-span-8">
 <ArchitectureDiagram />
 </div>
 </div>
 </Container>
 </Section>
 )}

 {cs.images && cs.images.length > 3 && (
 <Section tone="elevated" >
 <Container size="wide">
 <Eyebrow>Gallery</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">Screens from the build.</h2>
 <div className="mt-10">
 <ProjectImageGallery study={cs} />
 </div>
 </Container>
 </Section>
 )}

 <Section tone="page"  spacing="compact">
 <Container>
 <Reveal>
 <blockquote className="mx-auto max-w-[920px] rounded-2xl border border-line border-l-2 border-l-accent bg-bg-card p-8 sm:p-12">
 <p className="font-serif text-[26px] sm:text-[34px] leading-[1.2] tracking-display text-ink">
 “{cs.quote.body}”
 </p>
 <footer className="mt-8 flex items-center gap-3">
 <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-delivery font-mono text-[12px] text-ink">
 {cs.quote.author
 .split(" ")
 .map((n) => n[0])
 .join("")
 .slice(0, 2)}
 </span>
 <div>
 <p className="text-[14px] font-medium text-ink">{cs.quote.author}</p>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {cs.quote.role}
 </p>
 </div>
 </footer>
 </blockquote>
 </Reveal>
 </Container>
 </Section>

 <Section tone="elevated" >
 <Container size="wide">
 <div className="flex items-end justify-between gap-6">
 <Eyebrow>Related work</Eyebrow>
 <Link
 href="/work"
 className="font-mono text-[11px] uppercase tracking-eyebrow text-accent inline-flex items-center gap-1.5"
 >
 All projects <ArrowRight className="h-3.5 w-3.5" />
 </Link>
 </div>
 <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
 {related.map((r) => (
 <li key={r.slug}>
 <Link
 href={`/work/${r.slug}`}
 className="group block h-full rounded-2xl border border-line bg-bg-card p-8 transition-all duration-300 ease-hover hover:-translate-y-[2px] hover:border-accent/30"
 >
 <div className="flex items-center justify-between">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {r.index}
 </span>
 <Pill tone="accent">{r.industry}</Pill>
 </div>
 <h3 className="mt-6 font-serif text-[26px] leading-snug tracking-display text-ink">
 {r.title}
 </h3>
 <p className="mt-4 font-serif italic text-[18px] text-accent">{r.outcome}</p>
 <p className="mt-5 text-[13px] text-ink-body line-clamp-2">{r.problem}</p>
 </Link>
 </li>
 ))}
 </ul>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
