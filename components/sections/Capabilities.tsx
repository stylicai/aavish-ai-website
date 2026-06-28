import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Button } from "@/components/ui/Button";
import { AgentPlan } from "@/components/visuals/AgentPlan";
import { CopilotPanel } from "@/components/visuals/CopilotPanel";
import { WorkflowAutomationPanel } from "@/components/visuals/WorkflowAutomationPanel";
import { RAGDiagram } from "@/components/visuals/RAGDiagram";
import { cn } from "@/lib/utils";

const stackLayers = [
 {
 label: "Ingest & ground",
 body: "Your documents, APIs, warehouses, and queues — connected with schemas, permissions, and lineage."
 },
 {
 label: "Orchestrate & evaluate",
 body: "Agents, workflows, and retrieval pipelines with evals, tracing, and cost controls from sprint one."
 },
 {
 label: "Deploy & operate",
 body: "VPC, multi-region, or SaaS. Dashboards, runbooks, and handover so your team owns the system."
 }
];

const overviewStats = [
 { value: "4", label: "Core pillars" },
 { value: "23+", label: "Service lines" },
 { value: "End-to-end", label: "Or modular" }
];

const capabilities = [
 {
 index: "01",
 title: "Autonomous AI agents",
 body:
 "Agents that plan, reason, and execute across your tools — with verification, audit trails, and human approval where it matters.",
 detail:
 "We define agent contracts up front: allowed tools, escalation paths, and success metrics. Every run is logged and replayable so operators can trust outcomes in finance, ops, and customer workflows.",
 bullets: [
 "Multi-step planning with rollback",
 "Typed tool calls to your APIs and data",
 "Human-in-the-loop approval gates",
 "Continuous evals on real task sets"
 ],
 stack: ["LangGraph", "Temporal", "Claude · GPT-4o"],
 href: "/services/ai-agent-development",
 visual: "plan" as const
 },
 {
 index: "02",
 title: "AI application development",
 body:
 "End-to-end AI products and copilots designed for operators. Beautiful interfaces. Production-grade infrastructure.",
 detail:
 "From underwriting copilots to internal knowledge assistants — we ship UX that fits how teams work eight hours a day, with auth, tenancy, and observability built in.",
 bullets: [
 "Operator dashboards and admin consoles",
 "Embedded copilot and chat experiences",
 "Multi-tenant SaaS or private deploy",
 "Streaming, citations, and feedback loops"
 ],
 stack: ["Next.js", "Vercel", "Postgres", "OpenAI · Anthropic"],
 href: "/services/custom-ai-software",
 visual: "copilot" as const
 },
 {
 index: "03",
 title: "Workflow automation",
 body:
 "Replace brittle scripts and manual handoffs with reliable AI-native workflows that adapt without breaking.",
 detail:
 "Workflows combine LLM routing with deterministic steps — so exceptions are handled predictably and every decision leaves an audit trail for compliance and ops review.",
 bullets: [
 "LLM-routed steps with structured outputs",
 "Deterministic fallbacks when models abstain",
 "Triggers from Slack, email, webhooks, cron",
 "Shadow mode before full production cutover"
 ],
 stack: ["Temporal", "Inngest", "n8n", "Slack · Salesforce"],
 href: "/services/ai-automation",
 visual: "workflow" as const
 },
 {
 index: "04",
 title: "Private LLM & RAG systems",
 body:
 "Self-hosted models and retrieval pipelines grounded in your data — with measurable accuracy and zero data egress.",
 detail:
 "We benchmark recall, faithfulness, and latency on your corpus before launch. Hybrid search, re-ranking, and citation-by-default answers keep responses grounded and auditable.",
 bullets: [
 "Hybrid dense + sparse retrieval",
 "Citation and source links on every answer",
 "VPC or on-prem model deployment",
 "Eval dashboards tied to your content"
 ],
 stack: ["pgvector", "Llama · Mistral", "AWS · GCP", "LangChain"],
 href: "/services/rag-systems",
 visual: "rag" as const
 }
];

function Visual({ kind }: { kind: "plan" | "copilot" | "workflow" | "rag" }) {
 if (kind === "plan") return <AgentPlan />;
 if (kind === "copilot") return <CopilotPanel />;
 if (kind === "workflow") return <WorkflowAutomationPanel />;
 return <RAGDiagram />;
}

export function Capabilities() {
 return (
 <Section tone="page" >
 <Container size="wide">
 {/* Detailed intro */}
        <div className="grid gap-12 pb-14 lg:grid-cols-12 lg:gap-16 lg:pb-16">
 <div className="min-w-0 lg:col-span-7">
 <Reveal>
 <Eyebrow>Our capabilities</Eyebrow>
 </Reveal>
 <Reveal delay={0.05}>
 <h2 className="mt-5 text-display-lg text-ink">
 Everything needed to deploy <span className="italic text-accent">AI</span> at scale.
 </h2>
 </Reveal>
 <Reveal delay={0.08}>
 <p className="mt-6 text-body-lg text-ink-body max-w-[52ch]">
 Four capabilities, engineered as a single system. Pick one pillar or run the full stack — from data ingestion and model choice through agents, apps, and automation in production.
 </p>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-4 text-body text-ink-body max-w-[52ch]">
 Every engagement ships with evals, observability, and a clear handover path. We build on your infrastructure where residency matters, and we document what we ship so your team can operate it without us.
 </p>
 </Reveal>
 </div>

 <div className="min-w-0 lg:col-span-5">
 <Reveal delay={0.06}>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 How the stack connects
 </p>
 </Reveal>
 <ul className="mt-5 space-y-5">
 {stackLayers.map((layer, i) => (
 <Reveal key={layer.label} delay={0.08 + i * 0.04}>
 <li className="border-l-2 border-accent/40 pl-4">
 <p className="font-serif text-[18px] leading-snug text-ink">{layer.label}</p>
 <p className="mt-1.5 text-[14px] leading-relaxed text-ink-body">{layer.body}</p>
 </li>
 </Reveal>
 ))}
 </ul>
 <Reveal delay={0.2}>
              <ul className="mt-8 grid grid-cols-3 gap-4">
 {overviewStats.map((s) => (
 <li key={s.label} className="bg-bg-page px-3 py-4 text-center sm:px-4">
 <p className="font-serif text-[22px] sm:text-[26px] leading-none tracking-display-tight text-ink">
 {s.value}
 </p>
 <p className="mt-2 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
 {s.label}
 </p>
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </div>

 {/* Quick overview — four pillars at a glance */}
 <Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <Link
                key={c.index}
                href={c.href}
                className="group flex flex-col gap-2 rounded-2xl bg-bg-page px-5 py-6 transition-colors hover:bg-bg-card"
              >
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {c.index}
 </span>
 <span className="font-serif text-[18px] leading-tight text-ink group-hover:text-accent transition-colors">
 {c.title}
 </span>
 <span className="text-[13px] text-ink-body line-clamp-2">{c.body}</span>
 <span className="mt-auto inline-flex items-center gap-1 pt-2 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted group-hover:text-accent">
 Explore
 <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
 </span>
 </Link>
 ))}
 </div>
 </Reveal>

 {/* Deep-dive rows */}
        <ul>
 {capabilities.map((c, idx) => {
 const reversed = idx % 2 === 1;
 return (
 <li key={c.index} className="py-16 lg:py-20">
 <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
 <Reveal className={cn("min-w-0", reversed && "lg:order-2")}>
 <div>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {c.index} · capability
 </span>
 <h3 className="mt-4 text-display-md text-ink">{c.title}</h3>
 <p className="mt-5 text-body-lg text-ink-body max-w-[48ch]">{c.body}</p>
 <p className="mt-4 text-body text-ink-body max-w-[48ch]">{c.detail}</p>
 <ul className="mt-6 space-y-2.5">
 {c.bullets.map((b) => (
 <li key={b} className="flex items-start gap-3 text-body text-ink">
 <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-accent" />
 {b}
 </li>
 ))}
 </ul>
 <div className="mt-6 flex flex-wrap gap-2">
 {c.stack.map((tool) => (
 <span
 key={tool}
 className="rounded-full border border-line bg-bg-card px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted"
 >
 {tool}
 </span>
 ))}
 </div>
 <div className="mt-8">
 <Button href={c.href} variant="ghost" arrow>
 Explore this service
 </Button>
 </div>
 </div>
 </Reveal>
 <Reveal delay={0.1} className={cn("min-w-0", reversed && "lg:order-1")}>
 <Visual kind={c.visual} />
 </Reveal>
 </div>
 </li>
 );
 })}
 </ul>

 <Reveal>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-body text-ink-body max-w-[48ch]">
 Need voice agents, computer vision, or a full AI platform audit? We cover 23+ service lines — browse the full catalog or tell us what you are building.
 </p>
 <Button href="/services" variant="secondary" arrow>
 All services
 </Button>
 </div>
 </Reveal>
 </Container>
 </Section>
 );
}
