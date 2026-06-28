import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/animation/Reveal";
import { DeliveryFlow } from "@/components/visuals/DeliveryFlow";

export function CTASection() {
 return (
 <Section tone="dark" className="relative overflow-hidden">
 {/* Subtle orange grid overlay */}
 <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-[0.35]" />
 <div
 aria-hidden
 className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,112,0,0.15) 0%, rgba(255,112,0,0) 70%)"
 }}
 />

 <Container size="wide" className="relative">
 <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-6">
 <Eyebrow variant="rule" tone="inverse">
 Build with Aavish
 </Eyebrow>
 <h2 className="mt-6 text-display-lg text-ink-inverse">
 We don't just build <span className="italic text-accent">AI</span> products. We build systems people depend on.
 </h2>
 <p className="mt-6 max-w-[48ch] text-body-lg text-ink-dark-body">
 Tell us what you're working on. We'll respond with a clear point of view, a sequencing plan, and an estimate within 24 hours.
 </p>
 <div className="mt-8 flex flex-wrap items-center gap-3">
 <Button href="/contact" size="lg" arrow>
 Start a project
 </Button>
 <Button href="/work" size="lg" variant="inverse-ghost">
 See selected work
 </Button>
 </div>
 <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 Typically replying within 24 hours
 </p>
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-6">
 <DeliveryFlow />
 </Reveal>
 </div>
 </Container>
 </Section>
 );
}
