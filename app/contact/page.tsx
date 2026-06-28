import type { Metadata } from "next";
import { Mail, Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/animation/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
 title: "Contact — Let's build something real together",
 description: "Tell us what you're working on. We reply within 24 hours.",
 alternates: { canonical: "/contact" }
};

const otherWays = [
 {
 icon: Mail,
 label: "Email",
 value: site.email,
 sub: "Best for project briefs and proposals.",
 href: site.social.email
 },
 {
 icon: Calendar,
 label: "Book a call",
 value: "30 minutes · no slides",
 sub: "A working conversation, not a sales pitch.",
 href: "/contact?topic=call"
 },
 {
 icon: MapPin,
 label: "Headquarters",
 value: "Bengaluru, India",
 sub: "Engineers also in Berlin, London, Toronto.",
 href: undefined
 }
];

const trustPills = ["NDA on request", "24 hour response", "Senior engineer reply"];

const faqs = [
 {
 q: "How quickly can we get started?",
 a: "We can begin discovery within 48 hours. Most projects kick off within 7–10 business days of a signed scope."
 },
 {
 q: "Do you work with startups as well as enterprises?",
 a: "Yes. We pick projects by ambition and clarity, not by headcount. Some of our best work has been with ten-person teams."
 },
 {
 q: "Can you work with our existing stack?",
 a: "Almost always. We're framework-agnostic and have shipped on AWS, GCP, Azure, on-prem, and air-gapped environments."
 },
 {
 q: "Fixed-price or time and materials?",
 a: "Both. Fixed-price for well-scoped work; T&M for exploratory phases. We're transparent about the trade-offs in writing."
 },
 {
 q: "What's the minimum engagement?",
 a: "A two-week discovery sprint with a working prototype at the end. Build engagements typically start at six weeks."
 },
 {
 q: "Will you sign our NDA?",
 a: "Yes. We can also send ours if you'd prefer. We don't share client work without explicit written permission."
 }
];

export default function ContactPage() {
 return (
 <>
 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-12 lg:pb-16">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Reveal>
 <Eyebrow variant="rule">Contact</Eyebrow>
 </Reveal>
 <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:gap-16">
 <Reveal delay={0.05} className="min-w-0 lg:col-span-7">
 <h1 className="text-display-xl text-ink">
 Let's build something <span className="italic text-accent">real</span> together.
 </h1>
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-5 lg:pt-3">
 <p className="max-w-[44ch] text-body-lg text-ink-body">
 Tell us what you're working on. We reply within 24 hours with a senior engineer's point of view.
 </p>
 <ul className="mt-6 flex flex-wrap gap-2">
 {trustPills.map((p) => (
 <li key={p}>
 <Pill tone="accent">{p}</Pill>
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Two-column */}
 <Section tone="page" spacing="default">
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-7">
 <ContactForm />
 </Reveal>
 <Reveal delay={0.05} className="min-w-0 lg:col-span-5">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 Other ways to reach us
 </p>
 <ul className="mt-6 space-y-4">
 {otherWays.map((w) => {
 const inner = (
 <div className="group flex items-start gap-4 rounded-2xl border border-line bg-bg-card p-6 transition-all duration-300 ease-hover hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-card-hover">
 <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
 <w.icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
 </span>
 <div className="flex-1">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {w.label}
 </p>
 <p className="mt-1 font-serif text-[20px] leading-snug tracking-display text-ink group-hover:text-accent transition-colors">
 {w.value}
 </p>
 <p className="mt-2 text-[13px] text-ink-body">{w.sub}</p>
 </div>
 </div>
 );
 return (
 <li key={w.label}>
 {w.href ? (
 <a href={w.href} className="block">
 {inner}
 </a>
 ) : (
 inner
 )}
 </li>
 );
 })}
 </ul>
 </Reveal>
 </div>
 </Container>
 </Section>

 {/* FAQ */}
 <Section tone="elevated" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="min-w-0 lg:col-span-4">
 <Eyebrow>FAQ</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">
 Plain answers. No fine print.
 </h2>
 </div>
 <div className="min-w-0 lg:col-span-8">
 <FAQAccordion items={faqs} />
 </div>
 </div>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
