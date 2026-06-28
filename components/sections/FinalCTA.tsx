import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Rocket, Globe2, Activity, Server } from "lucide-react";

const items = [
 { icon: Rocket, value: "50+", label: "Deployments" },
 { icon: Globe2, value: "5+", label: "Countries" },
 { icon: Activity, value: "23+", label: "Systems live" },
 { icon: Server, value: "99.9%", label: "Infrastructure uptime" }
];

export function FinalCTA() {
 return (
 <Section tone="dark" className="relative overflow-hidden" spacing="tall">
 <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-30" />
 <div
 aria-hidden
 className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,112,0,0.18) 0%, rgba(255,112,0,0) 70%)"
 }}
 />

 <Container className="relative">
 <div className="flex flex-col items-center text-center">
 <Reveal>
 <Eyebrow variant="center" tone="inverse">
 Ready to build?
 </Eyebrow>
 </Reveal>
 <Reveal delay={0.05}>
 <h2 className="mt-7 text-display-lg text-ink-inverse">
 Let's design the next system you'll{" "}
 <span className="italic text-accent">depend on</span>.
 </h2>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-6 text-body-lg text-ink-dark-body max-w-[52ch]">
 Send a short brief or just a sentence. We'll come back with a senior point of view, a sequencing plan, and an estimate.
 </p>
 </Reveal>
 <Reveal delay={0.15}>
 <div className="mt-8">
 <Button href="/contact" size="lg" arrow>
 Start a conversation
 </Button>
 </div>
 </Reveal>
 <Reveal delay={0.2}>
 <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 Typically replying within 24 hours
 </p>
 </Reveal>
 </div>

        <ul className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
 {items.map((s) => (
 <li
 key={s.label}
 className="flex flex-col items-center gap-2 bg-bg-dark px-4 py-7 text-center"
 >
 <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
 <p className="mt-1 font-serif text-[34px] leading-none tracking-display-tight text-ink-inverse">
 {s.value}
 </p>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
 {s.label}
 </p>
 </li>
 ))}
 </ul>

 <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 Built in India · Deployed globally
 </p>
 </Container>
 </Section>
 );
}
