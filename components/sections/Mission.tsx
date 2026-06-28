import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Button } from "@/components/ui/Button";

const aiFocus = [
 "Autonomous agents that plan, call tools, and ship outcomes — not chatbots.",
 "RAG and private LLMs grounded in your data, with evals before every release.",
 "Workflow automation that routes through models and falls back when it must.",
 "Operator copilots, voice agents, and vision pipelines built for production load."
];

const services = [
 {
 slug: "ai-agent-development",
 title: "AI agent development",
 body:
 "Multi-step agents with typed tool calls, human approval gates, and replayable traces in your stack."
 },
 {
 slug: "custom-ai-software",
 title: "AI application development",
 body:
 "Copilots, dashboards, and multi-tenant AI products designed for teams who run the work daily."
 },
 {
 slug: "ai-automation",
 title: "AI workflow automation",
 body:
 "LLM-routed workflows across Slack, email, and internal APIs — with deterministic fallbacks."
 },
 {
 slug: "rag-systems",
 title: "RAG & retrieval systems",
 body:
 "Hybrid search, citation-by-default answers, and measurable recall — deployed in your VPC."
 },
 {
 slug: "private-llm-deployment",
 title: "Private LLM deployment",
 body:
 "Self-hosted models, fine-tuning, and inference tuned for cost, latency, and data residency."
 }
];

export function Mission() {
 return (
 <Section tone="page">
 <Container size="wide">
 <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
 <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-28 self-start">
 <Reveal>
 <Eyebrow>AI systems engineering</Eyebrow>
 </Reveal>
 <Reveal delay={0.05}>
 <h2 className="mt-5 text-display-lg text-ink">
 We build <span className="italic text-accent">production AI</span> your operators can depend on.
 </h2>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-6 text-body-lg text-ink-body max-w-[44ch]">
 Aavish is an AI lab — not a generic dev shop. We design, ship, and hand over agents, retrieval systems, automation, and copilots that run in your environment with observability built in.
 </p>
 </Reveal>
 <Reveal delay={0.12}>
 <ul className="mt-8 space-y-4">
 {aiFocus.map((line) => (
 <li key={line} className="flex items-start gap-3 text-body text-ink-body">
 <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-accent" />
 <span className="max-w-[44ch]">{line}</span>
 </li>
 ))}
 </ul>
 </Reveal>
 <Reveal delay={0.15}>
 <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 <span className="inline-flex items-center gap-1.5 text-accent">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 Agents · RAG · Automation
 </span>
 <span>50+ systems live · 5+ regions</span>
 </div>
 </Reveal>
 </div>

 <div className="min-w-0 lg:col-span-7">
 <Reveal>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 What we deliver
 </p>
 </Reveal>
 <ul className="mt-4">
 {services.map((item, idx) => (
 <li key={item.slug}>
 <Reveal delay={idx * 0.06}>
 <Link
 href={`/services/${item.slug}`}
 className="group grid grid-cols-12 gap-4 py-7 transition-colors"
 >
 <span className="col-span-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted pt-1">
 0{idx + 1}
 </span>
 <div className="col-span-10">
 <h3 className="font-serif text-[26px] leading-tight tracking-display text-ink transition-colors group-hover:text-accent">
 {item.title}
 </h3>
 <p className="mt-2 text-body text-ink-body max-w-[58ch]">
 {item.body}
 </p>
 </div>
 <ArrowRight
 aria-hidden
 className="col-span-1 mt-2 h-4 w-4 self-start justify-self-end text-ink-muted transition-all duration-300 ease-hover group-hover:text-accent group-hover:translate-x-1"
 strokeWidth={1.5}
 />
 </Link>
 </Reveal>
 </li>
 ))}
 </ul>
 <Reveal delay={0.3}>
 <div className="mt-8">
 <Button href="/services" variant="ghost" arrow>
 View all services
 </Button>
 </div>
 </Reveal>
 </div>
 </div>
 </Container>
 </Section>
 );
}
