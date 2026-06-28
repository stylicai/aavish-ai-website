import type { Metadata } from "next";
import {
 Sparkles,
 Shirt,
 HeartHandshake,
 Camera,
 MessageSquare,
 Layers,
 Smartphone,
 BarChart3
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/animation/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
 title: "Stylic.ai — AI fashion styling",
 description:
 "Stylic.ai is an AI fashion stylist used by 8,000 shoppers. Designed and engineered end-to-end at Aavish.",
 alternates: { canonical: "/products/stylic-ai" }
};

const features = [
 { icon: Sparkles, title: "Style profiling", body: "A 90-second profile that captures aesthetic preference more accurately than 12 onboarding questions." },
 { icon: Shirt, title: "Outfit generation", body: "Constraint-solved outfits across the live catalogue, regenerated as inventory changes." },
 { icon: Layers, title: "Wardrobe management", body: "Upload your wardrobe. Vision models tag, classify, and integrate it with new picks." }
];

const keyFeatures = [
 { icon: Camera, title: "Vision-native uploads" },
 { icon: MessageSquare, title: "Conversational styling" },
 { icon: HeartHandshake, title: "Personal taste graph" },
 { icon: Smartphone, title: "Native iOS + Android" },
 { icon: BarChart3, title: "Real-time analytics" },
 { icon: Sparkles, title: "Editorial inspiration" }
];

const stack = [
 { label: "Frontend", tools: ["Next.js", "React Native", "Tailwind"] },
 { label: "AI", tools: ["GPT-4o Vision", "CLIP", "Custom rerankers"] },
 { label: "Backend", tools: ["FastAPI", "Postgres", "pgvector"] },
 { label: "Infra", tools: ["AWS", "Cloudflare", "Mux"] }
];

const outcomes = [
 { value: "80k", label: "Monthly active users" },
 { value: "4.6×", label: "Lift in basket size" },
 { value: "23 min", label: "Average session" }
];

const screens = [
 { name: "Home", body: "Editorial feed updated on every interaction." },
 { name: "Recommendations", body: "Outfits generated across the live catalogue." },
 { name: "Wardrobe", body: "Upload and tag every piece with one tap." },
 { name: "Style profile", body: "Taste graph you can edit any time." }
];

function PhoneFrame({
 label,
 children,
 className
}: {
 label: string;
 children?: React.ReactNode;
 className?: string;
}) {
 return (
 <div className={`relative mx-auto aspect-[9/19] w-full max-w-[260px] ${className ?? ""}`}>
 <div className="absolute inset-0 rounded-[36px] border border-line-dark bg-bg-orchestration p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]">
 <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-bg-dark-card">
 <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />
 <div
 aria-hidden
 className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60"
 />
 <div className="relative flex h-full flex-col p-4 pt-9">
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">stylic.ai</p>
 <p className="mt-1 font-serif text-[18px] text-ink-inverse leading-tight tracking-display">
 {label}
 </p>
 <div className="mt-4 flex-1">{children ?? <ScreenContent variant={label} />}</div>
 </div>
 </div>
 </div>
 </div>
 );
}

function ScreenContent({ variant }: { variant: string }) {
 if (variant === "Home" || variant === "Recommendations") {
 return (
 <div className="grid h-full grid-cols-2 gap-2">
 {Array.from({ length: 4 }).map((_, i) => (
 <div
 key={i}
 className="relative overflow-hidden rounded-xl border border-line-dark bg-black/40"
 style={{
 backgroundImage:
 "linear-gradient(135deg, rgba(255,112,0,0.18), rgba(0,0,0,0))"
 }}
 >
 <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
 <span className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-dark-body">
 Look {i + 1}
 </span>
 <span className="h-2 w-2 rounded-full bg-accent" />
 </div>
 </div>
 ))}
 </div>
 );
 }
 if (variant === "Wardrobe") {
 return (
 <ul className="space-y-2">
 {Array.from({ length: 5 }).map((_, i) => (
 <li
 key={i}
 className="flex items-center justify-between rounded-lg border border-line-dark bg-black/40 px-3 py-2 font-mono text-[11px] text-ink-dark-body"
 >
 <span>Item {i + 1}</span>
 <span className="text-accent">tagged</span>
 </li>
 ))}
 </ul>
 );
 }
 return (
 <div className="space-y-3 font-mono text-[11px] text-ink-dark-body">
 <p>Aesthetic · Minimal</p>
 <p>Palette · Earth tones</p>
 <p>Cut · Tailored</p>
 <p>Tolerance · Bold accents</p>
 <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-bg-orchestration">
 <div className="h-full w-3/4 bg-accent" />
 </div>
 </div>
 );
}

export default function StylicProductPage() {
 return (
 <>
 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <div
 aria-hidden
 className="absolute right-0 top-20 h-[460px] w-[460px] rounded-full"
 style={{
 background:
 "radial-gradient(circle, rgba(255,112,0,0.15) 0%, rgba(255,112,0,0) 70%)"
 }}
 />
 <Container size="wide" className="relative">
 <Breadcrumb
 items={[{ label: "Products", href: "/work" }, { label: "Stylic.ai" }]}
 />
 <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-7">
 <div className="flex items-center gap-3">
 <Pill tone="accent">Our product · Live</Pill>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 Web + iOS + Android
 </span>
 </div>
 <h1 className="mt-6 text-display-xl text-ink">
 Stylic<span className="text-accent">.ai</span> — AI fashion styling.
 </h1>
 <p className="mt-6 max-w-[52ch] text-body-lg text-ink-body">
 An AI stylist used by 8,000 shoppers. Profiles taste, generates outfits across the live catalogue, and curates a wardrobe. Designed and engineered end-to-end at Aavish.
 </p>
 <div className="mt-8 flex flex-wrap gap-3">
 <Button href="https://stylic.ai" size="lg" arrow>
 Visit Stylic.ai
 </Button>
 <Button href="/work/stylic-ai-platform" size="lg" variant="secondary">
 View case study
 </Button>
 </div>
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
 <PhoneFrame label="Recommendations" />
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Product features */}
 <Section tone="page" >
 <Container size="wide">
 <Eyebrow>Product features</Eyebrow>
 <h2 className="mt-5 text-display-lg text-ink">
 Three product surfaces. One taste graph.
 </h2>
          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
 {features.map((f, idx) => (
 <li key={f.title} className="bg-bg-card p-7">
 <Reveal delay={idx * 0.05}>
 <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-accent">
 <f.icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
 </span>
 <h3 className="mt-5 font-serif text-[24px] leading-snug tracking-display text-ink">
 {f.title}
 </h3>
 <p className="mt-3 text-body text-ink-body">{f.body}</p>
 </Reveal>
 </li>
 ))}
 </ul>
 </Container>
 </Section>

 {/* Key features grid */}
 <Section tone="elevated" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>Key features</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">
 The small details that compound.
 </h2>
 </div>
            <ul className="lg:col-span-8 grid grid-cols-2 gap-4 md:grid-cols-3">
 {keyFeatures.map((k) => (
 <li
 key={k.title}
 className="flex items-center gap-3 bg-bg-card px-5 py-6"
 >
 <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light text-accent">
 <k.icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
 </span>
 <span className="text-[14px] font-medium text-ink">{k.title}</span>
 </li>
 ))}
 </ul>
 </div>
 </Container>
 </Section>

 {/* Screens carousel */}
 <Section tone="page" >
 <Container size="wide">
 <Eyebrow>Inside the app</Eyebrow>
 <h2 className="mt-5 text-display-lg text-ink">
 Four screens shoppers actually use.
 </h2>
 <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
 {screens.map((s, idx) => (
 <Reveal key={s.name} delay={idx * 0.06}>
 <div>
 <PhoneFrame label={s.name} />
 <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {s.name}
 </p>
 <p className="mt-2 text-center text-[13px] text-ink-body">{s.body}</p>
 </div>
 </Reveal>
 ))}
 </div>
 </Container>
 </Section>

 {/* Stack */}
 <Section tone="elevated"  spacing="compact">
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>The stack</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">
 Boring, proven, fast.
 </h2>
 </div>
 <ul className="lg:col-span-8">
 {stack.map((s) => (
 <li key={s.label} className="grid grid-cols-12 items-baseline gap-4 py-6">
 <span className="col-span-12 font-mono text-[11px] uppercase tracking-eyebrow text-accent sm:col-span-3">
 {s.label}
 </span>
 <ul className="col-span-12 flex flex-wrap gap-2 sm:col-span-9">
 {s.tools.map((tool) => (
 <li key={tool}>
 <Pill tone="neutral">{tool}</Pill>
 </li>
 ))}
 </ul>
 </li>
 ))}
 </ul>
 </div>
 </Container>
 </Section>

 {/* Outcomes */}
 <Section tone="page" spacing="compact" >
 <Container size="wide">
          <ul className="grid grid-cols-3 gap-6">
 {outcomes.map((o) => (
 <li key={o.label} className="bg-bg-page px-5 py-8 text-center sm:text-left sm:px-8">
 <p className="font-serif text-[48px] leading-none tracking-display-tight text-ink">
 {o.value}
 </p>
 <p className="mt-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 {o.label}
 </p>
 </li>
 ))}
 </ul>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
