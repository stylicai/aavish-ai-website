import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/animation/Reveal";
import { WorkHero } from "@/components/sections/WorkHero";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Work — Production AI engineering portfolio",
  description:
    "Twenty production AI builds — voice agents, multi-agent systems, RAG, chatbots, SaaS, and backends with metrics, architecture, and screenshots.",
  alternates: { canonical: "/work" }
};

const principles = [
  {
    n: "01",
    title: "Production-first",
    body: "We optimise for the seven-month uptime, not the four-week demo."
  },
  {
    n: "02",
    title: "Measurable outcomes",
    body: "Every case study has a number attached. We won't ship work that can't be graded."
  },
  {
    n: "03",
    title: "No vendor lock-in",
    body: "You own the code, the models, and the infrastructure. We hand over and stay reachable."
  }
];

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkShowcase />

      <Section tone="elevated" spacing="compact">
        <Container size="wide">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p, idx) => (
              <li key={p.n} className="rounded-2xl bg-bg-card p-7">
                <Reveal delay={idx * 0.05}>
                  <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                    {p.n}
                  </span>
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

      <FinalCTA />
    </>
  );
}
