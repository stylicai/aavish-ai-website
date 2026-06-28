"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AgentTerminal } from "@/components/visuals/AgentTerminal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
 return (
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 md:pb-28">
 {/* Backgrounds */}
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-60" />
 <div
 aria-hidden
 className="absolute -left-40 -bottom-40 h-[480px] w-[480px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,112,0,0.18) 0%, rgba(255,112,0,0) 70%)"
 }}
 />

 <Container size="wide" className="relative">
 <LazyMotion features={domAnimation} strict>
 <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-7 flex flex-col gap-7">
 <m.div
 initial={{ opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease }}
 >
 <Eyebrow variant="rule">Global AI Lab · Since 2022</Eyebrow>
 </m.div>

 <m.h1
 initial={{ opacity: 0, y: 18 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease, delay: 0.08 }}
 className="text-display-xl text-ink"
 >
 We build <span className="text-accent italic">AI</span> systems for real
 business operations.
 </m.h1>

 <m.p
 initial={{ opacity: 0, y: 14 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, ease, delay: 0.18 }}
 className="text-body-lg text-ink-body max-w-[52ch]"
 >
 Production-grade AI systems, agents, and automation engineered for
 real-world deployment. Built by senior engineers. Shipped to operators.
 </m.p>

 <m.div
 initial={{ opacity: 0, y: 14 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, ease, delay: 0.28 }}
 className="flex flex-wrap items-center gap-3"
 >
 <Button href="/work" size="lg" arrow>
 See our work
 </Button>
 <Button href="/contact" size="lg" variant="secondary">
 Talk to us
 </Button>
 </m.div>

 <m.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.7, ease, delay: 0.42 }}
 className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-body"
 >
 <span className="relative inline-flex h-2 w-2">
 <span className="absolute inset-0 rounded-full bg-accent opacity-40 animate-ping" />
 <span className="relative inline-block h-2 w-2 rounded-full bg-accent" />
 </span>
 Trusted by teams in 5+ countries · 50+ deployments live
 </m.div>
 </div>

 <m.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.9, ease, delay: 0.2 }}
 className="lg:col-span-5"
 >
 <div className="relative animate-float">
 <AgentTerminal />
 </div>
 </m.div>
 </div>
 </LazyMotion>
 </Container>
 </section>
 );
}
