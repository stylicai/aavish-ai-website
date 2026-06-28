import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { clientCaseStudies } from "@/lib/work-data";
import { NodeNetwork } from "@/components/visuals/NodeNetwork";
import { UnderwritingAgentPanel } from "@/components/visuals/UnderwritingAgentPanel";
import { VoiceWave } from "@/components/visuals/VoiceWave";
import { cn } from "@/lib/utils";

function CaseStudyVisual({ slug }: { slug: string }) {
 switch (slug) {
 case "ai-powered-loan-assessment-agent":
 return <UnderwritingAgentPanel />;
 case "shipment-exception-communication-agent":
 return <VoiceWave />;
 case "stylic-ai-platform":
 return (
 <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration">
 <div className="absolute inset-0 bg-dot-grid-dark opacity-40" aria-hidden />
 <NodeNetwork className="absolute inset-0" />
 <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
 Stylic graph
 </p>
 <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-status-success">
 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-success" />
 80k users live
 </span>
 </div>
 </div>
 );
 default:
 return <UnderwritingAgentPanel />;
 }
}

export function SelectedWork() {
 const featured = clientCaseStudies.slice(0, 3);

 return (
 <Section tone="page" >
 <Container size="wide">
 <SectionHeader
 eyebrow="Selected work"
 title="Built for production. Not demos."
 lead="A small sample of systems live in production right now. Read the full case studies for the architecture."
 align="split"
 />

 <ul className="mt-16">
 {featured.map((cs, idx) => {
 const reversed = idx % 2 === 1;
 return (
 <li key={cs.slug} className="py-14 lg:py-20">
 <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
 <Reveal
 className={cn("min-w-0 lg:col-span-6", reversed && "lg:order-2")}
 >
 <div className="flex items-center gap-4">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {cs.index}
 </span>
 <Pill tone="accent">{cs.industry}</Pill>
 </div>

 <h3 className="mt-5 font-serif text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[48px] leading-[1.06] tracking-display-tight text-ink">
 {cs.title}
 </h3>

 <p className="mt-5 font-serif text-[20px] italic leading-snug text-accent sm:text-[22px] lg:text-[24px]">
 {cs.outcome}
 </p>

 <p className="mt-5 max-w-[52ch] text-body text-ink-body">{cs.problem}</p>

 {cs.metrics.length > 0 && (
                      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
 {cs.metrics.slice(0, 3).map((m) => (
 <li key={m.label} className="bg-bg-page px-4 py-4 sm:px-5">
 <p className="font-serif text-[26px] leading-none tracking-display-tight text-ink sm:text-[28px]">
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
 View case study
 <ArrowRight
 className="h-4 w-4 transition-transform duration-300 ease-hover group-hover:translate-x-1"
 strokeWidth={1.75}
 />
 </Link>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {cs.timeline} · {cs.team}
 </span>
 </div>
 </Reveal>

 <Reveal
 delay={0.08}
 className={cn("min-w-0 lg:col-span-6", reversed && "lg:order-1")}
 >
 <div className="w-full">
 <CaseStudyVisual slug={cs.slug} />
 </div>
 </Reveal>
 </div>
 </li>
 );
 })}
 </ul>

 <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-body text-ink-body">More case studies coming soon.</p>
 <Button href="/work" variant="secondary" arrow>
 View all work
 </Button>
 </div>
 </Container>
 </Section>
 );
}
