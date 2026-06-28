import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { site } from "@/lib/site-data";

const services = [
 { label: "AI Agent Development", href: "/services/ai-agent-development" },
 { label: "AI Workflow Automation", href: "/services/ai-automation" },
 { label: "Private LLM Deployment", href: "/services/private-llm-deployment" },
 { label: "RAG Systems", href: "/services/rag-systems" }
];

const company = [
 { label: "Work", href: "/work" },
 { label: "About", href: "/about" },
 { label: "Blog", href: "/blog" },
 { label: "Contact", href: "/contact" }
];

const updated = new Date().toLocaleDateString("en-US", {
 year: "numeric",
 month: "short",
 day: "numeric"
});

export default function Footer() {
 return (
 <footer className="relative bg-bg-dark text-ink-inverse overflow-hidden">
 {/* Top divider */}
      <div>
 <div className="mx-auto h-px w-8 bg-accent" />
 </div>

 {/* Dotted grid background */}
 <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-[0.35]" />

 <Container size="wide" className="relative pt-20 pb-10">
 <div className="grid gap-12 lg:grid-cols-12">
 <div className="lg:col-span-5">
 <Logo tone="light" />
 <p className="mt-5 text-body text-ink-dark-body max-w-[40ch]">
 We build AI systems for real business operations. Editorial standards. Engineering rigor. Shipped to production.
 </p>
 <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 {site.location}
 </p>
 </div>

 <div className="lg:col-span-2">
 <p className="font-mono text-eyebrow uppercase text-ink-inverse/60 tracking-eyebrow">Services</p>
 <ul className="mt-5 space-y-3">
 {services.map((s) => (
 <li key={s.href}>
 <Link
 href={s.href}
 className="text-[14px] text-ink-dark-body hover:text-ink-inverse transition-colors"
 >
 {s.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div className="lg:col-span-2">
 <p className="font-mono text-eyebrow uppercase text-ink-inverse/60 tracking-eyebrow">Company</p>
 <ul className="mt-5 space-y-3">
 {company.map((s) => (
 <li key={s.href}>
 <Link
 href={s.href}
 className="text-[14px] text-ink-dark-body hover:text-ink-inverse transition-colors"
 >
 {s.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div className="lg:col-span-3">
 <p className="font-mono text-eyebrow uppercase text-ink-inverse/60 tracking-eyebrow">
 Stay in the loop
 </p>
 <p className="mt-3 text-[14px] text-ink-dark-body">
 Monthly notes on building production AI. No promotions.
 </p>
 <form
 action="/api/newsletter"
 method="post"
 className="mt-5 flex items-center rounded-xl border border-line-dark bg-bg-dark-card focus-within:border-accent/60 transition-colors"
 >
 <label htmlFor="newsletter-email" className="sr-only">
 Email
 </label>
 <input
 id="newsletter-email"
 type="email"
 name="email"
 placeholder="you@company.com"
 required
 className="h-11 flex-1 bg-transparent px-4 text-[14px] text-ink-inverse placeholder:text-ink-muted focus:outline-none"
 />
 <button
 type="submit"
 className="m-1 inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-3.5 text-[12px] font-medium text-ink-inverse hover:bg-accent-hover transition-colors"
 >
 Subscribe
 <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
 </button>
 </form>
 </div>
 </div>

 <div className="mt-16-dark pt-6 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 © {new Date().getFullYear()} {site.name} · v1.0 · last updated {updated}
 </p>
 <div className="flex items-center gap-2">
 <Link
 href={site.social.x}
 aria-label="Aavish on X"
 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-dark text-ink-dark-body hover:border-accent/60 hover:text-accent transition-colors"
 >
 <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
 <path d="M18.244 2H21.5l-7.5 8.572L23 22h-6.84l-5.36-7.013L4.6 22H1.34l8.04-9.19L1 2h6.99l4.84 6.41L18.244 2Zm-1.197 18h1.83L7.04 4H5.08l11.967 16Z" />
 </svg>
 </Link>
 <Link
 href={site.social.linkedin}
 aria-label="Aavish on LinkedIn"
 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-dark text-ink-dark-body hover:border-accent/60 hover:text-accent transition-colors"
 >
 <Linkedin className="h-4 w-4" strokeWidth={1.5} />
 </Link>
 <Link
 href={site.social.github}
 aria-label="Aavish on GitHub"
 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-dark text-ink-dark-body hover:border-accent/60 hover:text-accent transition-colors"
 >
 <Github className="h-4 w-4" strokeWidth={1.5} />
 </Link>
 <Link
 href={site.social.email}
 aria-label="Email Aavish"
 className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-dark text-ink-dark-body hover:border-accent/60 hover:text-accent transition-colors"
 >
 <Mail className="h-4 w-4" strokeWidth={1.5} />
 </Link>
 </div>
 </div>
 </Container>
 </footer>
 );
}
