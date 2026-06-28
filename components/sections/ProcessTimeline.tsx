import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/animation/Reveal";

const steps = [
 {
 n: "01",
 title: "Discover",
 body: "We pair with your team to map the highest-leverage opportunities and pick the first one.",
 bullets: [
 "Stakeholder interviews",
 "Quantified opportunity matrix",
 "Reference architecture"
 ],
 timing: "Week 1"
 },
 {
 n: "02",
 title: "Design",
 body: "Wireframe, prompt design, agent contracts, and the first eval set drafted together.",
 bullets: [
 "Operator workflows mapped",
 "Eval framework drafted",
 "Stack & data plan signed off"
 ],
 timing: "Week 2"
 },
 {
 n: "03",
 title: "Build",
 body: "Two-week sprints with weekly demos. Production-grade from sprint one — no throwaway prototypes.",
 bullets: [
 "Weekly demos",
 "Shadow deploys",
 "Continuous evals running"
 ],
 timing: "Weeks 3–8"
 },
 {
 n: "04",
 title: "Operate",
 body: "We ship to production, train your team, and stay on-call until you don't need us anymore.",
 bullets: [
 "Production launch",
 "Runbooks & dashboards",
 "Handover or retainer"
 ],
 timing: "Week 9+"
 }
];

export function ProcessTimeline() {
 return (
 <Section tone="elevated" >
 <Container size="wide">
 <SectionHeader
 eyebrow="Our process"
 title="From idea to production in weeks."
 lead="A senior team, a known shape, and weekly accountability. The unglamorous part is what makes the rest possible."
 align="split"
 />

 <div className="relative mt-16">
 {/* Faint rail */}
 <div
 aria-hidden
 className="absolute left-0 right-0 top-[44px] hidden h-px bg-line lg:block"
 />
 <div
 aria-hidden
 className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 lg:block"
 />

 <ol className="grid gap-6 lg:grid-cols-4 lg:gap-8">
 {steps.map((s, i) => (
 <li key={s.n} className="relative">
 <Reveal delay={i * 0.08}>
 <div className="relative h-full rounded-2xl border border-line bg-bg-card p-6 transition-all duration-300 ease-hover hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-card-hover">
 {/* Number dot on rail */}
 <span
 aria-hidden
 className="absolute -top-2 left-6 h-4 w-4 rounded-full bg-bg-card border-2 border-accent shadow-[0_0_0_4px_#FAF6EF]"
 />

 <div className="flex items-center justify-between">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 Step {s.n}
 </span>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {s.timing}
 </span>
 </div>
 <h3 className="mt-5 font-serif text-[26px] leading-tight tracking-display text-ink">
 {s.title}
 </h3>
 <p className="mt-3 text-body text-ink-body">{s.body}</p>
 <ul className="mt-5 space-y-2 pt-5">
 {s.bullets.map((b) => (
 <li key={b} className="flex items-start gap-2.5 text-[13px] text-ink">
 <span aria-hidden className="mt-2 inline-block h-1 w-2 bg-accent" />
 {b}
 </li>
 ))}
 </ul>
 </div>
 </Reveal>
 </li>
 ))}
 </ol>

 <div className="mt-10 flex justify-center">
 <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-card px-4 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 Continuous feedback loop · weekly demos
 </span>
 </div>
 </div>
 </Container>
 </Section>
 );
}
