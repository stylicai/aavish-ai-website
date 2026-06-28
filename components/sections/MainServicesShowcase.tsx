import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Button } from "@/components/ui/Button";
import { AgentPlan } from "@/components/visuals/AgentPlan";
import { CopilotPanel } from "@/components/visuals/CopilotPanel";
import { WorkflowAutomationPanel } from "@/components/visuals/WorkflowAutomationPanel";
import { RAGDiagram } from "@/components/visuals/RAGDiagram";
import { VoiceWave } from "@/components/visuals/VoiceWave";
import { GenerativeAIPanel } from "@/components/visuals/GenerativeAIPanel";
import { mainServices, type MainServiceVisual } from "@/lib/services-data";
import { cn } from "@/lib/utils";

function ServiceVisual({ kind }: { kind: MainServiceVisual }) {
 switch (kind) {
 case "agent":
 return <AgentPlan />;
 case "generative":
 return <GenerativeAIPanel />;
 case "workflow":
 return <WorkflowAutomationPanel />;
 case "copilot":
 return <CopilotPanel />;
 case "rag":
 return <RAGDiagram />;
 case "voice":
 return <VoiceWave />;
 }
}

export function MainServicesShowcase() {
 return (
 <Section tone="page" >
 <Container size="wide">
 <SectionHeader
 eyebrow={`Core services · ${mainServices.length}`}
 title="The systems we build most often."
 lead="Six production-grade service lines — agents, generative AI, automation, apps, retrieval, and voice. Each ships with evals, observability, and a handover your team can run."
 align="split"
 />

 <ul className="mt-16">
 {mainServices.map((service, idx) => {
 const reversed = idx % 2 === 1;
 return (
 <li key={service.slug} className="py-14 lg:py-20">
 <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
 <Reveal className={cn("min-w-0", reversed && "lg:order-2")}>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {service.index} · {service.categoryLabel}
 </span>
 <h3 className="mt-4 font-serif text-[32px] leading-[1.06] tracking-display-tight text-ink sm:text-[36px] lg:text-[40px]">
 {service.title}
 </h3>
 <p className="mt-5 text-body-lg text-ink-body">{service.summary}</p>
 <ul className="mt-6 space-y-2.5">
 {service.bullets.map((b) => (
 <li key={b} className="flex items-start gap-3 text-body text-ink">
 <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-accent" />
 {b}
 </li>
 ))}
 </ul>
 {service.stack.length > 0 && (
 <div className="mt-6 flex flex-wrap gap-2">
 {service.stack.flatMap((layer) => layer.tools).slice(0, 6).map((tool) => (
 <span
 key={tool}
 className="rounded-full border border-line bg-bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted"
 >
 {tool}
 </span>
 ))}
 </div>
 )}
 <div className="mt-8">
 <Link
 href={`/services/${service.slug}`}
 className="group inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
 >
 Explore this service
 <ArrowRight
 className="h-4 w-4 transition-transform duration-300 ease-hover group-hover:translate-x-1"
 strokeWidth={1.75}
 />
 </Link>
 </div>
 </Reveal>

 <Reveal
 delay={0.08}
 className={cn("min-w-0 w-full", reversed && "lg:order-1")}
 >
 <ServiceVisual kind={service.visual} />
 </Reveal>
 </div>
 </li>
 );
 })}
 </ul>

 <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-body text-ink-body">
 Need a custom combination? We assemble the smallest stack that ships your outcome.
 </p>
 <Button href="/contact" variant="secondary" arrow>
 Discuss your project
 </Button>
 </div>
 </Container>
 </Section>
 );
}
