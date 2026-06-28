import { ArrowUpRight } from "lucide-react";

export function BlogNewsletter({ variant = "card" }: { variant?: "card" | "dark" | "inline" }) {
 if (variant === "inline") {
 return (
 <div className="rounded-2xl border border-line bg-bg-card p-6 sm:p-8">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 Field notes
 </p>
 <h3 className="mt-3 font-serif text-[28px] leading-snug tracking-display text-ink max-w-[22ch]">
 Monthly notes on building production AI.
 </h3>
 <p className="mt-3 text-[14px] text-ink-body">
 One email a month. No promotions. Unsubscribe anytime.
 </p>
 <form
 action="/api/newsletter"
 method="post"
 className="mt-5 flex items-center rounded-xl border border-line bg-bg-page focus-within:border-accent/60 transition-colors"
 >
 <label htmlFor="post-newsletter-email" className="sr-only">
 Email
 </label>
 <input
 id="post-newsletter-email"
 type="email"
 required
 name="email"
 placeholder="you@company.com"
 className="h-11 flex-1 bg-transparent px-4 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none"
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
 );
 }

 return (
 <div className="rounded-2xl border border-line bg-bg-card p-7">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 Field notes
 </p>
 <h3 className="mt-3 font-serif text-[24px] leading-snug tracking-display text-ink">
 Monthly notes from the lab.
 </h3>
 <p className="mt-3 text-[14px] text-ink-body">
 Engineering writing on agents, RAG, evals, and ops. No promotions.
 </p>
 <form
 action="/api/newsletter"
 method="post"
 className="mt-5 flex items-center rounded-xl border border-line bg-bg-page focus-within:border-accent/60 transition-colors"
 >
 <label htmlFor="bx-newsletter-email" className="sr-only">
 Email
 </label>
 <input
 id="bx-newsletter-email"
 type="email"
 required
 name="email"
 placeholder="you@company.com"
 className="h-11 flex-1 bg-transparent px-4 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none"
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
 );
}
