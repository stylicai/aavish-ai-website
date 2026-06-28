import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/animation/Reveal";
import { OrchestrationConsole } from "@/components/visuals/OrchestrationConsole";

const stats = [
 { value: "50+", label: "Deployments live" },
 { value: "23+", label: "Active clients" },
 { value: "94.2%", label: "Median accuracy" },
 { value: "3.2s", label: "Median latency" },
 { value: "5+", label: "Countries" }
];

export function DeployedShowcase() {
 return (
 <Section tone="page" >
 <Container size="wide">
 <SectionHeader
 eyebrow="Deployed in production"
 title="Built for real-world AI deployment."
 lead="One control plane across five cities — Kubernetes, Docker, nginx ingress, load balancing, and autoscaling managed from a single deploy console."
 align="split"
 />

 <Reveal>
 <div className="mt-14">
 <OrchestrationConsole />
 </div>
 </Reveal>

 <Reveal delay={0.05}>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s) => (
              <li key={s.label} className="bg-bg-page px-5 py-8">
 <p className="font-serif text-[40px] sm:text-[44px] leading-none tracking-display-tight text-ink">
 {s.value}
 </p>
 <p className="mt-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 {s.label}
 </p>
 </li>
 ))}
 </ul>
 </Reveal>

 <p className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 Built in India · Deployed globally
 </p>
 </Container>
 </Section>
 );
}
