import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/animation/Reveal";

const principles = [
 {
 index: "P/01",
 title: "Production systems · always on",
 body: "99.9% uptime across deployed systems. Multi-region failover. Observability and incident response built in from day one."
 },
 {
 index: "P/02",
 title: "Enterprise-grade security",
 body: "SOC 2-ready foundations. SSO, audit logs, role-based access. ISO 27001 alignment. EU and IN data residency."
 },
 {
 index: "P/03",
 title: "Global deployments",
 body: "Five regions. Active clients across finance, logistics, legal, and retail. Multi-tenant or VPC, your call."
 }
];

const testimonials = [
 {
 body:
 "Aavish embedded with our risk team like senior engineers, not a vendor. The system has been live nine months without an incident.",
 author: "Riya Mehta",
 role: "VP Risk · Sequence Capital"
 },
 {
 body:
 "We thought we'd have to lose this work to an LLM tool. Instead we kept it, raised margins, and shipped a product clients ask for by name.",
 author: "Sameer Patel",
 role: "Managing Partner · Almonds Legal"
 }
];

const stats = [
 { value: "50+", label: "Deployments" },
 { value: "23+", label: "Clients" },
 { value: "5+", label: "Countries" },
 { value: "99.9%", label: "Uptime" }
];

export function TrustedBy() {
 return (
 <Section tone="page" >
 <Container size="wide">
 <SectionHeader
 eyebrow="Trusted by teams"
 title={
 <>
 Built with teams building the future with <span className="italic text-accent">AI</span>.
 </>
 }
 lead="Operator-led teams from finance, logistics, legal, and retail trust Aavish to run systems in production."
 align="split"
 />

 {/* Principles — editorial list with index/title/body in three columns */}
 <div className="mt-16">
 <ul>
 {principles.map((p, i) => (
 <li
 key={p.index}
            className="grid gap-6 py-8 md:py-10 lg:grid-cols-12 lg:gap-12"
 >
 <Reveal className="min-w-0 lg:col-span-2">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {p.index}
 </span>
 </Reveal>
 <Reveal delay={0.04} className="min-w-0 lg:col-span-5">
 <h3 className="font-serif text-[22px] leading-tight tracking-display text-ink sm:text-[26px]">
 {p.title}
 </h3>
 </Reveal>
 <Reveal delay={0.08} className="min-w-0 lg:col-span-5">
 <p className="max-w-[52ch] text-body text-ink-body">{p.body}</p>
 </Reveal>
 </li>
 ))}
 </ul>
 </div>

 {/* Testimonials — editorial pull-quotes (no card chrome) */}
 <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
 {testimonials.map((t, i) => (
 <Reveal key={i} delay={i * 0.08}>
 <figure className="relative">
 <span
 aria-hidden
 className="absolute -left-2 -top-3 font-serif text-[64px] leading-none text-accent/30 select-none"
 >
 &ldquo;
 </span>
 <blockquote className="relative pl-6 border-l-2 border-accent">
 <p className="font-serif text-[22px] sm:text-[26px] leading-snug tracking-display text-ink">
 {t.body}
 </p>
 <figcaption className="mt-7 flex items-center gap-3">
 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg-card font-mono text-[12px] text-ink">
 {t.author
 .split(" ")
 .map((n) => n[0])
 .join("")
 .slice(0, 2)}
 </span>
 <div>
 <p className="text-[14px] font-medium text-ink">{t.author}</p>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {t.role}
 </p>
 </div>
 </figcaption>
 </blockquote>
 </figure>
 </Reveal>
 ))}
 </div>

 {/* Stat strip */}
        <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
 </Container>
 </Section>
 );
}
