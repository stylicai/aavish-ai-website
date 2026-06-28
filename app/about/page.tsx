import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/animation/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
 title: "About — A lab that builds AI for the real world",
 description:
 "Aavish AI Lab is a global AI systems engineering studio. From Avishkar — invention. We turn invention into infrastructure.",
 alternates: { canonical: "/about" }
};

const milestones = [
 { year: "2022", label: "Founded" },
 { year: "2023", label: "First production agent" },
 { year: "2024", label: "5+ countries live" },
 { year: "2025", label: "50+ deployments" },
 { year: "2026", label: "Research × Studio" }
];

const philosophy = [
 {
 n: "01",
 title: "Production is the only test that counts.",
 body:
 "A demo is a hypothesis. A production deployment is the result. We invest in the journey from one to the other — and so should the systems we build."
 },
 {
 n: "02",
 title: "Operators come before executives.",
 body:
 "The people who use AI eight hours a day know what's broken. We design with them, not for the people who buy the system."
 },
 {
 n: "03",
 title: "Reliability is a feature.",
 body:
 "We treat latency, error rate, and cost as first-class product surfaces. They show up in dashboards. They show up in retros."
 },
 {
 n: "04",
 title: "Knowledge stays with you.",
 body:
 "We write runbooks, train your team, and design for a world where we eventually walk away. Lock-in is a failure mode."
 }
];

const principles = [
 { n: "01", title: "Senior only", body: "Every engineer has shipped AI in production before. Average tenure: 8+ years." },
 { n: "02", title: "Eval before feature", body: "We write the eval before the prompt. The eval is the contract." },
 { n: "03", title: "Weekly demos", body: "Every Friday, the work is visible. Either we have something to show or a problem to surface." },
 { n: "04", title: "One accountable lead", body: "Every engagement has a single accountable engineer. Continuity over committee." },
 { n: "05", title: "Open source by default", body: "We contribute fixes upstream. We don't fork unless we must. We document trade-offs honestly." },
 { n: "06", title: "Boring infrastructure", body: "Postgres, Next.js, FastAPI. We pick proven tools so we can spend our novelty budget where it matters." }
];

export default function AboutPage() {
 return (
 <>
 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-20 lg:pb-28">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Reveal>
 <Eyebrow variant="rule">About the lab</Eyebrow>
 </Reveal>
 <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal delay={0.05} className="min-w-0 lg:col-span-7">
 <h1 className="text-display-xl text-ink">
 A lab that builds <span className="italic text-accent">AI</span> for the real world.
 </h1>
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-5 lg:pt-3">
 <div className="rounded-2xl border border-line bg-bg-card p-6 lg:p-7">
 <Sparkles className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
 <p className="mt-4 font-serif text-[20px] leading-snug tracking-display text-ink">
 From the Sanskrit{" "}
 <span className="italic text-accent">Avishkar</span> — invention. We turn invention into infrastructure.
 </p>
 <p className="mt-3 text-[14px] text-ink-body">
 Aavish is a global systems engineering studio. We design, build, and deploy AI that businesses rely on every day.
 </p>
 </div>
 </Reveal>
 </div>

 {/* Milestones */}
 <Reveal delay={0.15}>
          <div className="mt-20 rounded-2xl border border-line bg-bg-card p-2">
            <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {milestones.map((m) => (
                <li key={m.year} className="p-6">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {m.year}
 </p>
 <p className="mt-3 font-serif text-[22px] leading-snug tracking-display text-ink">
 {m.label}
 </p>
 </li>
 ))}
 </ol>
 </div>
 </Reveal>
 </Container>
 </section>

 {/* Philosophy */}
 <Section tone="page" >
 <Container size="wide">
 <SectionHeader
 eyebrow="What we believe"
 title="The principles we won't compromise on."
 lead="Four beliefs that shape every engagement, every architecture, every line of code."
 align="split"
 />
 <ul className="mt-14">
 {philosophy.map((p, idx) => (
 <li key={p.n}>
 <Reveal delay={idx * 0.05}>
 <div className="group grid gap-4 py-9 transition-colors lg:grid-cols-12 lg:gap-8">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted pt-1.5 lg:col-span-1">
 {p.n}
 </span>
 <h3 className="font-serif text-[28px] leading-tight tracking-display text-ink sm:text-[32px] lg:col-span-5">
 {p.title}
 </h3>
 <p className="text-body text-ink-body lg:col-span-6">
 {p.body}
 </p>
 </div>
 </Reveal>
 </li>
 ))}
 </ul>
 </Container>
 </Section>

 {/* Principles grid */}
 <Section tone="elevated" >
 <Container size="wide">
 <SectionHeader
 eyebrow="How we operate"
 title="Six rules. No exceptions."
 lead="If a project can't honor these, we say no. It's how we stay good at what we do."
 align="split"
 />
          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
 {principles.map((p, idx) => (
 <li
 key={p.n}
 className="group relative flex flex-col bg-bg-card p-7 transition-colors hover:bg-bg-page"
 >
 <Reveal delay={idx * 0.04}>
 <div className="flex items-center justify-between">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {p.n}
 </span>
 <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/40" />
 </div>
 <h3 className="mt-5 font-serif text-[24px] leading-snug tracking-display text-ink">
 {p.title}
 </h3>
 <p className="mt-3 text-body text-ink-body">{p.body}</p>
 </Reveal>
 </li>
 ))}
 </ul>
 </Container>
 </Section>

 {/* Where we work */}
 <Section tone="elevated" >
 <Container size="wide">
 <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-5">
 <Eyebrow>Where we work</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">
 Built in India. Deployed across four continents.
 </h2>
 <p className="mt-5 text-body-lg text-ink-body max-w-[44ch]">
 We're headquartered in Bengaluru with engineers across Berlin, London, and Toronto. Async-first. Senior-only.
 </p>
 <ul className="mt-7 flex flex-wrap gap-2">
 {["Bengaluru", "Berlin", "London", "Toronto", "Singapore"].map((c) => (
 <li key={c}>
 <Pill tone="neutral">{c}</Pill>
 </li>
 ))}
 </ul>
 </div>
 <div className="lg:col-span-7">
 <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-bg-card">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-60" />
 <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full" aria-hidden>
 <g stroke="rgba(17,17,17,0.12)" fill="none" strokeWidth="1.2" strokeDasharray="2 3">
 <path d="M120 160 C 130 180, 140 220, 130 270 C 120 320, 100 360, 110 380" />
 <path d="M340 130 C 360 140, 380 160, 380 200 C 380 250, 360 290, 350 320" />
 <path d="M520 140 C 560 150, 600 170, 620 200 C 640 240, 620 290, 600 320" />
 <path d="M680 270 C 700 290, 710 320, 700 340" />
 </g>
 <g stroke="rgba(255,112,0,0.5)" fill="none" strokeWidth="1.2" strokeDasharray="4 4">
 <path d="M180 200 Q 300 100, 380 180" className="animate-connection-pulse" />
 <path d="M380 180 Q 480 220, 580 180" className="animate-connection-pulse" />
 <path d="M580 180 Q 660 240, 700 300" className="animate-connection-pulse" />
 <path d="M180 200 Q 200 320, 280 380" className="animate-connection-pulse" />
 </g>
 {[
 { x: 180, y: 200, label: "Bengaluru" },
 { x: 380, y: 180, label: "Berlin" },
 { x: 580, y: 180, label: "London" },
 { x: 700, y: 300, label: "Singapore" },
 { x: 280, y: 380, label: "Toronto" }
 ].map((n) => (
 <g key={n.label}>
 <circle cx={n.x} cy={n.y} r="11" fill="rgba(255,112,0,0.15)" />
 <circle cx={n.x} cy={n.y} r="4" fill="#FF7000" />
 <text
 x={n.x + 14}
 y={n.y + 4}
 fill="rgba(17,17,17,0.55)"
 fontFamily="JetBrains Mono, monospace"
 fontSize="10"
 letterSpacing="1"
 >
 {n.label.toUpperCase()}
 </text>
 </g>
 ))}
 </svg>
 </div>
 </div>
 </div>
 </Container>
 </Section>

 {/* Small CTA strip */}
      <Section tone="dark" spacing="compact">
 <Container>
 <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
 <h2 className="text-display-sm text-ink-inverse max-w-[22ch]">
 Want to build with us?
 </h2>
 <Button href="/contact" size="lg" arrow>
 Start a conversation
 </Button>
 </div>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
