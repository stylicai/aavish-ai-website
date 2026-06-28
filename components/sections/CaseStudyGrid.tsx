"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clientCaseStudies, industries } from "@/lib/work-data";
import { cn } from "@/lib/utils";
import { Pill } from "@/components/ui/Pill";

export function CaseStudyGrid() {
 const [filter, setFilter] = useState<string>("All");

 const present = useMemo(() => {
 const set = new Set(clientCaseStudies.map((c) => c.industry));
 return ["All", ...industries.filter((i) => set.has(i))];
 }, []);

 const filtered = useMemo(() => {
 if (filter === "All") return clientCaseStudies;
 return clientCaseStudies.filter((c) => c.industry === filter);
 }, [filter]);

 return (
 <div>
 <div className="sticky top-16 z-10 -mx-5 mb-10 bg-bg-page/85 backdrop-blur-md sm:-mx-8 md:-mx-12 lg:-mx-20">
 <div className="mx-auto max-w-[1480px] px-5 sm:px-8 md:px-12 lg:px-20">
 <div className="flex items-center gap-2 overflow-x-auto py-4">
 {present.map((label) => {
 const active = filter === label;
 return (
 <button
 key={label}
 onClick={() => setFilter(label)}
 className={cn(
 "shrink-0 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-eyebrow transition-colors",
 active
 ? "border-accent bg-accent text-ink-inverse"
 : "border-line bg-bg-card text-ink-body hover:border-accent/50 hover:text-ink"
 )}
 >
 {label}
 </button>
 );
 })}
 </div>
 </div>
 </div>

 <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
 {filtered.map((cs, i) => (
 <li key={cs.slug}>
 <Link
 href={`/work/${cs.slug}`}
 className="group block h-full rounded-2xl border border-line bg-bg-card p-7 transition-all duration-300 ease-hover hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-card-hover sm:p-9"
 >
 <div className="flex items-start justify-between">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {cs.index}
 </span>
 <Pill tone="accent">{cs.industry}</Pill>
 </div>
 <h3 className="mt-7 font-serif text-[28px] leading-[1.1] tracking-display-tight text-ink sm:text-[32px]">
 {cs.title}
 </h3>
 <p className="mt-4 font-serif italic text-[20px] text-accent">
 {cs.outcome}
 </p>
 <p className="mt-5 text-[14px] text-ink-body max-w-[58ch] line-clamp-3">
 {cs.problem}
 </p>
 <div className="mt-7 flex items-center justify-between pt-5">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 {cs.timeline} · {cs.team}
 </span>
 <ArrowUpRight
 className="h-4 w-4 text-ink-muted transition-all duration-300 ease-hover group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
 strokeWidth={1.5}
 aria-hidden
 />
 </div>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 );
}
