import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/animation/Reveal";
import { MainServicesShowcase } from "@/components/sections/MainServicesShowcase";
import { CapabilityStack } from "@/components/sections/CapabilityStack";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Marquee } from "@/components/ui/Marquee";
import { mainServices } from "@/lib/services-data";

export const metadata: Metadata = {
 title: "Services — Core AI systems we engineer for production",
 description:
 "Agents, generative AI, workflow automation, custom software, RAG, and voice — designed and shipped by a senior team for real-world deployment.",
 alternates: { canonical: "/services" }
};

const tools = [
 "Next.js",
 "FastAPI",
 "Postgres",
 "pgvector",
 "OpenAI",
 "Anthropic",
 "Vercel",
 "AWS",
 "Temporal",
 "LangGraph",
 "vLLM",
 "Qdrant"
];

export default function ServicesPage() {
 return (
 <>
 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-20">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Reveal>
 <Eyebrow variant="rule">Services</Eyebrow>
 </Reveal>
 <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:gap-16">
 <Reveal delay={0.05} className="min-w-0 lg:col-span-7">
 <h1 className="text-display-xl text-ink">
 Six core ways we engineer{" "}
 <span className="italic text-accent">AI</span> into your business.
 </h1>
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-5 lg:pt-3">
 <p className="max-w-[44ch] text-body-lg text-ink-body">
 Agents, generative AI, automation, apps, retrieval, and voice — one senior team that designs, builds, and operates production systems end to end.
 </p>
 <div className="mt-6 flex flex-wrap gap-3">
 <Button href="/contact" arrow>
 Discuss your project
 </Button>
 <Button href="#capability-stack" variant="secondary">
 See the stack
 </Button>
 </div>
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Capability stack */}
 <Section tone="page" id="capability-stack" >
 <Container size="wide">
 <SectionHeader
 eyebrow="The capability stack"
 title="From inputs to outcomes, in one orchestrated pipeline."
 lead="We connect your systems of record to your operators. Models, agents, retrieval, and orchestration all sit between them."
 align="split"
 />
 <Reveal>
 <div className="mt-14">
 <CapabilityStack />
 </div>
 </Reveal>
 </Container>
 </Section>

 <MainServicesShowcase />

 <ProcessTimeline />

 {/* Tools cloud */}
 <Section tone="page" spacing="compact" >
 <Container size="wide">
 <div className="grid items-center gap-8 lg:grid-cols-12">
 <div className="lg:col-span-3">
 <Eyebrow>Tools we work with</Eyebrow>
 <p className="mt-3 text-[14px] text-ink-body">
 Proven, boring, well-documented.
 </p>
 </div>
 <div className="lg:col-span-9">
 <Marquee
 speed="medium"
 items={tools.map((t) => (
 <span
 key={t}
 className="font-serif text-[22px] tracking-display text-ink-body/70 hover:text-ink transition-colors"
 >
 {t}
 </span>
 ))}
 />
 </div>
 </div>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
