"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Pill } from "@/components/ui/Pill";
import { ProjectImageGallery } from "@/components/work/ProjectImageGallery";
import {
  caseStudies,
  portfolioCategories,
 filterCaseStudies,
 type CaseStudy
} from "@/lib/work-data";
import { cn } from "@/lib/utils";

function WorkRow({ cs, reversed }: { cs: CaseStudy; reversed: boolean }) {
 return (
 <li className="py-14 lg:py-20">
 <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
 <Reveal className={cn("min-w-0 lg:col-span-6", reversed && "lg:order-2")}>
 <div className="flex flex-wrap items-center gap-3">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {cs.index}
 </span>
 <Pill tone="accent">{cs.industry}</Pill>
 {cs.source === "portfolio" && cs.categoryTags?.slice(0, 2).map((tag) => (
 <span
 key={tag}
 className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted"
 >
 {tag}
 </span>
 ))}
 </div>

 <h3 className="mt-5 font-serif text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.08] tracking-display-tight text-ink">
 {cs.title}
 </h3>

 <p className="mt-5 font-serif text-[19px] italic leading-snug text-accent sm:text-[21px]">
 {cs.outcome}
 </p>

 <p className="mt-5 max-w-[52ch] text-body text-ink-body line-clamp-4">{cs.problem}</p>

 {cs.metrics.length > 0 && (
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
 {cs.metrics.slice(0, 3).map((m) => (
 <li key={m.label} className="bg-bg-page px-4 py-4 sm:px-5">
 <p className="font-serif text-[24px] leading-none tracking-display-tight text-ink sm:text-[26px]">
 {m.value}
 </p>
 <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-eyebrow text-ink-muted">
 {m.label}
 </p>
 </li>
 ))}
 </ul>
 )}

 <div className="mt-8 flex flex-wrap items-center gap-6">
 <Link
 href={`/work/${cs.slug}`}
 className="group inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
 >
 View project
 <ArrowRight
 className="h-4 w-4 transition-transform duration-300 ease-hover group-hover:translate-x-1"
 strokeWidth={1.75}
 />
 </Link>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {[cs.timeline, cs.client || cs.team].filter(Boolean).join(" · ")}
 </span>
 </div>
 </Reveal>

 <Reveal
 delay={0.08}
 className={cn("min-w-0 lg:col-span-6", reversed && "lg:order-1")}
 >
 <ProjectImageGallery study={cs} variant="compact" />
 </Reveal>
 </div>
 </li>
 );
}

export function WorkShowcase() {
 const [filter, setFilter] = useState<string>("all");

 const filtered = useMemo(() => filterCaseStudies(filter), [filter]);

 return (
 <Section tone="page" id="portfolio" spacing="compact">
 <Container size="wide">
 <SectionHeader
 eyebrow={`${caseStudies.length} projects`}
 title="Every build, documented."
          lead="Production engineering portfolio — voice AI, multi-agent systems, RAG, chatbots, SaaS, and backends. Each build includes metrics, architecture notes, and screenshots."
 align="split"
 />

 <div className="mt-10 flex flex-wrap gap-2">
 {portfolioCategories.map((cat) => (
 <button
 key={cat.id}
 type="button"
 onClick={() => setFilter(cat.id)}
 className={cn(
 "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-eyebrow transition-colors",
 filter === cat.id
 ? "border-accent bg-accent text-white"
 : "border-line bg-bg-card text-ink-body hover:border-accent/40 hover:text-ink"
 )}
 >
 {cat.label}
 </button>
 ))}
 </div>

 <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 Showing {filtered.length} project{filtered.length === 1 ? "" : "s"}
 </p>

 <ul className="mt-8">
 {filtered.map((cs, idx) => (
 <WorkRow key={cs.slug} cs={cs} reversed={idx % 2 === 1} />
 ))}
 </ul>

 {filter !== "all" && filtered.length === 0 && (
 <p className="py-16 text-center text-body text-ink-body">
 No projects in this category.{" "}
 <button
 type="button"
 className="text-accent underline-offset-2 hover:underline"
 onClick={() => setFilter("all")}
 >
 Show all
 </button>
 </p>
 )}

 </Container>
 </Section>
 );
}
