import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/animation/Reveal";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceTerminal } from "@/components/visuals/ServiceTerminal";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { services, getService } from "@/lib/services-data";
import { getCaseStudy } from "@/lib/work-data";
import { site } from "@/lib/site-data";

export function generateStaticParams() {
 return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
 const service = getService(params.slug);
 if (!service) return {};
 return {
 title: `${service.title} — Services`,
 description: service.summary,
 alternates: { canonical: `/services/${service.slug}` }
 };
}

const TERMINAL_LINES_BY_SLUG: Record<string, { text: string; tone?: "muted" | "success" | "accent" | "default" }[]> = {
 default: [
 { text: "$ aavish init --service production", tone: "default" },
 { text: " → loading reference architecture...", tone: "muted" },
 { text: " → provisioning environments... ok", tone: "muted" },
 { text: " → writing evals (12)... ok", tone: "muted" },
 { text: " ✓ scaffold ready · 8m32s", tone: "success" },
 { text: "$ aavish deploy --env staging", tone: "default" },
 { text: " → building... ok", tone: "muted" },
 { text: " → running evals... 12/12 passed", tone: "success" },
 { text: " ✓ deployed · uptime 100%", tone: "accent" }
 ]
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
 const service = getService(params.slug);
 if (!service) notFound();

 const related = service.related ? getCaseStudy(service.related) : undefined;
 const terminal = TERMINAL_LINES_BY_SLUG[params.slug] ?? TERMINAL_LINES_BY_SLUG.default;

 const fallbackFaq = [
 { q: "How quickly can we get started?", a: "Most engagements kick off within 7–10 business days of a signed scope. We can begin discovery within 48 hours." },
 { q: "Do you work with startups as well as enterprises?", a: "Yes. We pick projects by ambition and clarity, not by headcount. Some of our best work has been for ten-person teams." },
 { q: "Can you work alongside our existing engineers?", a: "Yes. We pair with internal teams by default — the goal is for your engineers to own the system at the end." },
 { q: "Is the work fixed-price or time and materials?", a: "Both options exist. Fixed-price for well-scoped work, T&M for exploratory phases. We're transparent about the trade-offs." }
 ];

 const faq = service.faq.length > 0 ? service.faq : fallbackFaq;

 return (
 <>
 <SchemaMarkup
 type="breadcrumb"
 items={[
 { name: "Home", url: `${site.url}/` },
 { name: "Services", url: `${site.url}/services` },
 { name: service.title, url: `${site.url}/services/${service.slug}` }
 ]}
 />

 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Breadcrumb
 items={[
 { label: "Services", href: "/services" },
 { label: service.title }
 ]}
 />
 <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal className="min-w-0 lg:col-span-7">
 <Eyebrow>{service.categoryLabel}</Eyebrow>
 <h1 className="mt-5 text-display-xl text-ink">
 {service.title.split(" ").slice(0, -1).join(" ")}{" "}
 <span className="italic text-accent">
 {service.title.split(" ").slice(-1)[0]}
 </span>
 </h1>
 <p className="mt-6 max-w-[52ch] text-body-lg text-ink-body">{service.summary}</p>
 <div className="mt-8 flex flex-wrap gap-3">
 <Button href={`/contact?topic=${service.slug}`} size="lg" arrow>
 Discuss this service
 </Button>
 <Button href="/work" size="lg" variant="secondary">
 See case studies
 </Button>
 </div>
 </Reveal>
 <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
 <ServiceTerminal lines={terminal} />
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Outcomes */}
 {service.outcomes.length > 0 && (
 <Section tone="page" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>What you get</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">Outcomes, not deliverables.</h2>
 </div>
 <ul className="lg:col-span-8">
 {service.outcomes.map((o, idx) => (
 <li key={o.title}>
 <Reveal delay={idx * 0.05}>
 <div className="grid grid-cols-12 gap-4 py-7">
 <span className="col-span-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted pt-1">
 0{idx + 1}
 </span>
 <div className="col-span-11">
 <h3 className="font-serif text-[26px] leading-tight tracking-display text-ink">
 {o.title}
 </h3>
 <p className="mt-2 text-body text-ink-body max-w-[58ch]">{o.body}</p>
 </div>
 </div>
 </Reveal>
 </li>
 ))}
 </ul>
 </div>
 </Container>
 </Section>
 )}

 {/* Stack */}
 {service.stack.length > 0 && (
 <Section tone="elevated" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>The stack</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">
 Boring, proven, well-documented tools.
 </h2>
 <p className="mt-4 text-body text-ink-body max-w-[44ch]">
 We pick technology that your team can operate at 3am, not what's trending on launch day.
 </p>
 </div>
 <div className="lg:col-span-8">
                <ul>
 {service.stack.map((s) => (
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
 </div>
 </Container>
 </Section>
 )}

 {/* Related case study */}
 {related && (
 <Section tone="page" >
 <Container size="wide">
 <Eyebrow>In production</Eyebrow>
 <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
 <div className="min-w-0 lg:col-span-7">
 <h2 className="text-display-md text-ink">{related.title}</h2>
 <p className="mt-5 font-serif text-[22px] italic text-accent">{related.outcome}</p>
 <p className="mt-5 text-body text-ink-body max-w-[58ch]">{related.problem}</p>
 <div className="mt-7">
 <Link
 href={`/work/${related.slug}`}
 className="group inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent transition-colors"
 >
 Read the case study
 <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-hover group-hover:translate-x-1" strokeWidth={1.75} />
 </Link>
 </div>
 </div>
            <ul className="lg:col-span-5 grid grid-cols-1 gap-4">
 {related.metrics.map((m) => (
 <li key={m.label} className="bg-bg-card px-6 py-5">
 <p className="font-serif text-[36px] leading-none tracking-display-tight text-ink">
 {m.value}
 </p>
 <p className="mt-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 {m.label}
 </p>
 </li>
 ))}
 </ul>
 </div>
 </Container>
 </Section>
 )}

 {/* FAQ */}
 <Section tone="page" >
 <Container size="wide">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-4">
 <Eyebrow>FAQ</Eyebrow>
 <h2 className="mt-5 text-display-md text-ink">
 Common questions, plainly answered.
 </h2>
 </div>
 <div className="lg:col-span-8">
 <FAQAccordion items={faq} />
 </div>
 </div>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
