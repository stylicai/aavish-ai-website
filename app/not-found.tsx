import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
 return (
 <section className="relative overflow-hidden pt-40 pb-32">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <div
 aria-hidden
 className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,112,0,0.16) 0%, rgba(255,112,0,0) 70%)"
 }}
 />
 <Container className="relative flex flex-col items-center text-center">
 <Eyebrow variant="center">Status · 404</Eyebrow>
 <h1 className="mt-7 text-display-xl text-ink max-w-[18ch]">
 This page hasn't <span className="italic text-accent">shipped</span> yet.
 </h1>
 <p className="mt-6 text-body-lg text-ink-body max-w-[48ch]">
 Either the URL is off, or we haven't published this one. Either way — let's get you back.
 </p>
 <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
 <Button href="/" size="lg" arrow>
 Back to home
 </Button>
 <Button href="/contact" size="lg" variant="secondary">
 Tell us what you were looking for
 </Button>
 </div>
 <pre className="mt-12 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 trace · 404 · halt(deliberate)
 </pre>
 </Container>
 </section>
 );
}
