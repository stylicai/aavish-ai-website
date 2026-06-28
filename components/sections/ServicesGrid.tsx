"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, categoryLabels, type ServiceCategory } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const FILTERS: { id: ServiceCategory | "all"; label: string }[] = [
 { id: "all", label: "All" },
 { id: "agents", label: "Agents" },
 { id: "apps", label: "Apps" },
 { id: "automation", label: "Automation" },
 { id: "foundations", label: "Foundations" },
 { id: "voice", label: "Voice" },
 { id: "vision", label: "Vision" }
];

export function ServicesGrid() {
 const [filter, setFilter] = useState<ServiceCategory | "all">("all");

 const filtered = useMemo(() => {
 if (filter === "all") return services;
 return services.filter((s) => s.category === filter);
 }, [filter]);

 const grouped = useMemo(() => {
 const map = new Map<ServiceCategory, typeof services>();
 filtered.forEach((s) => {
 const arr = map.get(s.category) ?? [];
 arr.push(s);
 map.set(s.category, arr);
 });
 return Array.from(map.entries());
 }, [filtered]);

 return (
 <div>
 <div className="sticky top-16 z-10 -mx-5 mb-10 bg-bg-page/85 backdrop-blur-md sm:-mx-8 md:-mx-12 lg:-mx-20">
 <div className="mx-auto max-w-[1480px] px-5 sm:px-8 md:px-12 lg:px-20">
 <div className="flex items-center gap-2 overflow-x-auto py-4">
 {FILTERS.map((f) => {
 const active = filter === f.id;
 return (
 <button
 key={f.id}
 onClick={() => setFilter(f.id)}
 className={cn(
 "shrink-0 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-eyebrow transition-colors",
 active
 ? "border-accent bg-accent text-ink-inverse"
 : "border-line bg-bg-card text-ink-body hover:border-accent/50 hover:text-ink"
 )}
 >
 {f.label}
 <span className="ml-2 text-[10px] opacity-70">
 {f.id === "all" ? services.length : services.filter((s) => s.category === f.id).length}
 </span>
 </button>
 );
 })}
 </div>
 </div>
 </div>

 <div className="space-y-16">
 {grouped.map(([cat, items]) => (
 <section key={cat}>
 <div className="sticky top-32 z-[5] mb-6 -mx-2 px-2 py-3 backdrop-blur-sm">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {categoryLabels[cat]} · {items.length} services
 </p>
 </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
 {items.map((service) => (
 <li key={service.slug} className="bg-bg-card transition-colors hover:bg-bg-delivery">
 <Link
 href={`/services/${service.slug}`}
 className="group flex h-full flex-col p-6 sm:p-7"
 >
 <div className="flex items-center justify-between">
 <span className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
 {categoryLabels[service.category]}
 </span>
 <ArrowUpRight
 className="h-4 w-4 text-ink-muted transition-all duration-300 ease-hover group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
 strokeWidth={1.5}
 aria-hidden
 />
 </div>
 <h3 className="mt-5 font-serif text-[22px] leading-snug tracking-display text-ink">
 {service.title}
 </h3>
 <p className="mt-3 text-[14px] text-ink-body line-clamp-3">{service.summary}</p>
 <div className="mt-auto pt-6">
 <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 View service →
 </span>
 </div>
 </Link>
 </li>
 ))}
 </ul>
 </section>
 ))}
 </div>
 </div>
 );
}
