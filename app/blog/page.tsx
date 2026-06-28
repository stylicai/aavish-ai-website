import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Pill } from "@/components/ui/Pill";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogCanvas } from "@/components/blog/BlogCanvas";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { blogPosts } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
 title: "Blog — Thinking out loud about AI systems",
 description:
 "Engineering writing on production AI — agents, RAG, evals, observability, and field notes from real deployments.",
 alternates: { canonical: "/blog" }
};

export default function BlogPage() {
 const featured = blogPosts.find((p) => p.featured);

 return (
 <>
 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-20">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Reveal>
 <Eyebrow variant="rule">The blog</Eyebrow>
 </Reveal>
 <div className="mt-7 grid gap-12 lg:grid-cols-12 lg:gap-16">
 <div className="min-w-0 lg:col-span-7">
 <Reveal delay={0.05}>
 <h1 className="text-display-xl text-ink">
 Thinking out loud about <span className="italic text-accent">AI</span> systems.
 </h1>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-6 max-w-[52ch] text-body-lg text-ink-body">
 Engineering writing from the lab — agents, RAG, evals, observability, and what we've learned shipping production systems.
 </p>
 </Reveal>
 </div>
 <Reveal delay={0.15} className="min-w-0 lg:col-span-5">
 <BlogNewsletter variant="inline" />
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Featured post */}
 {featured && (
 <Section tone="page"  spacing="compact">
 <Container size="wide">
 <Reveal>
 <Link
 href={`/blog/${featured.slug}`}
 className="group grid items-stretch gap-0 overflow-hidden rounded-2xl border border-line bg-bg-card lg:grid-cols-2"
 >
 <div className="bg-bg-orchestration">
 <BlogCanvas
 featured
 title={featured.title}
 category={featured.category}
 className="h-full aspect-auto rounded-none border-0"
 />
 </div>
 <div className="flex flex-col justify-center p-8 sm:p-12">
 <div className="flex items-center gap-3">
 <Pill tone="accent">{featured.category}</Pill>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {formatDate(featured.date)} · {featured.readTime}
 </span>
 </div>
 <h2 className="mt-6 font-serif text-[36px] leading-[1.08] tracking-display-tight text-ink transition-colors group-hover:text-accent sm:text-[44px]">
 {featured.title}
 </h2>
 <p className="mt-5 text-body-lg text-ink-body max-w-[52ch]">{featured.excerpt}</p>
 <div className="mt-7 inline-flex items-center gap-2">
 <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg-delivery font-mono text-[11px] text-ink">
 {featured.author.initials}
 </span>
 <div>
 <p className="text-[13px] font-medium text-ink">{featured.author.name}</p>
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
 {featured.author.role}
 </p>
 </div>
 <span className="ml-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 Read the post
 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
 </span>
 </div>
 </div>
 </Link>
 </Reveal>
 </Container>
 </Section>
 )}

 {/* Filter + grid */}
 <Section tone="page" >
 <Container size="wide">
 <BlogFilter />
 </Container>
 </Section>

 {/* Newsletter strip */}
 <Section tone="elevated"  spacing="compact">
 <Container size="wide">
 <BlogNewsletter variant="inline" />
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
