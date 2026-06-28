"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
 services,
 categoryLabels,
 mainServices,
 type ServiceCategory
} from "@/lib/services-data";
import { cn } from "@/lib/utils";

const CATEGORY_ORDER: ServiceCategory[] = [
 "agents",
 "generative",
 "automation",
 "apps",
 "foundations",
 "voice"
];

const mainSlugs = new Set(mainServices.map((s) => s.slug));

const moreServiceGroups = CATEGORY_ORDER.map((category) => ({
 category,
 label: categoryLabels[category],
 items: services.filter(
 (s) => s.category === category && !mainSlugs.has(s.slug)
 )
})).filter((group) => group.items.length > 0);

type DesktopProps = {
 active: boolean;
};

export function NavServicesMenuDesktop({ active }: DesktopProps) {
 const [open, setOpen] = useState(false);
 const rootRef = useRef<HTMLDivElement>(null);

 const close = () => setOpen(false);

 useEffect(() => {
 if (!open) return;
 const onPointerDown = (e: MouseEvent) => {
 if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
 close();
 }
 };
 const onKeyDown = (e: KeyboardEvent) => {
 if (e.key === "Escape") close();
 };
 document.addEventListener("mousedown", onPointerDown);
 document.addEventListener("keydown", onKeyDown);
 return () => {
 document.removeEventListener("mousedown", onPointerDown);
 document.removeEventListener("keydown", onKeyDown);
 };
 }, [open]);

 return (
 <div ref={rootRef} className="static lg:relative">
 <button
 type="button"
 aria-expanded={open}
 aria-haspopup="true"
 onClick={() => setOpen((v) => !v)}
 className={cn(
 "relative inline-flex h-10 items-center gap-1 rounded-lg px-3 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:text-ink",
 (active || open) && "text-ink"
 )}
 >
 <span>Services</span>
 <ChevronDown
 className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
 strokeWidth={2}
 aria-hidden
 />
 <span
 aria-hidden
 className={cn(
 "absolute inset-x-3 -bottom-[3px] h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300",
 (active || open) && "scale-x-100"
 )}
 />
 </button>

 {/* Full-width mega menu */}
 <div
 className={cn(
 "fixed inset-x-0 top-16 z-40 border-b border-line bg-[#FBF6EF] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
 open
 ? "pointer-events-auto translate-y-0 opacity-100"
 : "pointer-events-none -translate-y-2 opacity-0"
 )}
 aria-hidden={!open}
 >
 <div className="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 md:px-12 lg:px-20">
 <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
 {/* Featured column — core services */}
 <div className="lg:col-span-4 lg:border-r lg:border-line lg:pr-10">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 Core services
 </p>
 <h3 className="mt-3 font-serif text-[26px] leading-snug tracking-display text-ink">
 Production AI, end to end.
 </h3>
 <p className="mt-3 text-[14px] leading-relaxed text-ink-body">
 Six service lines we ship most often — from agents and generative AI to voice and
 retrieval.
 </p>

 <Link
 href="/services"
 onClick={close}
 className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-accent"
 >
 View all services
 <ArrowRight
 className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
 strokeWidth={1.75}
 />
 </Link>

 <ul className="mt-8">
 {mainServices.map((service) => (
 <li key={service.slug}>
 <Link
 href={`/services/${service.slug}`}
 onClick={close}
 className="group flex gap-4 py-4 transition-colors hover:bg-bg-card/60"
 >
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted pt-0.5">
 {service.index}
 </span>
 <span className="min-w-0 flex-1">
 <span className="block font-serif text-[17px] leading-snug text-ink transition-colors group-hover:text-accent">
 {service.title}
 </span>
 <span className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-ink-body">
 {service.summary}
 </span>
 </span>
 <ArrowRight
 className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
 strokeWidth={1.75}
 aria-hidden
 />
 </Link>
 </li>
 ))}
 </ul>

 <Link
 href="/contact"
 onClick={close}
 className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-light px-4 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-accent-dark transition-colors hover:border-accent"
 >
 Discuss a project
 <ArrowRight className="h-3 w-3" strokeWidth={1.75} aria-hidden />
 </Link>
 </div>

 {/* Specialist / additional services */}
 <div className="lg:col-span-8">
 <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
 <div>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 Specialist services
 </p>
 <p className="mt-1 text-[14px] text-ink-body">
 Modular capabilities that extend the core stack.
 </p>
 </div>
 </div>

 <div className="mt-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
 {moreServiceGroups.map((group) => (
 <div key={group.category}>
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
 {group.label}
 </p>
 <ul className="mt-3 space-y-1">
 {group.items.map((service) => (
 <li key={service.slug}>
 <Link
 href={`/services/${service.slug}`}
 onClick={close}
 className="group flex items-start justify-between gap-2 rounded-lg py-2 pr-1 transition-colors hover:bg-bg-card"
 >
 <span className="text-[14px] leading-snug text-ink-body transition-colors group-hover:text-ink">
 {service.title}
 </span>
 <ArrowRight
 className="mt-0.5 h-3 w-3 shrink-0 text-ink-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
 strokeWidth={1.75}
 aria-hidden
 />
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}

type MobileProps = {
 active: boolean;
 onNavigate?: () => void;
};

export function NavServicesMenuMobile({ active, onNavigate }: MobileProps) {
 const [expanded, setExpanded] = useState(false);

 return (
 <div className="border-b border-line">
 <button
 type="button"
 aria-expanded={expanded}
 onClick={() => setExpanded((v) => !v)}
 className={cn(
 "flex w-full items-center justify-between py-5 text-[22px] font-serif transition-colors",
 active ? "text-accent" : "text-ink"
 )}
 >
 <span>Services</span>
 <ChevronDown
 className={cn("h-5 w-5 transition-transform duration-200", expanded && "rotate-180")}
 strokeWidth={1.75}
 aria-hidden
 />
 </button>

 <div
 className={cn(
 "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
 expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
 )}
 >
 <div className="overflow-hidden">
 <div className="space-y-8 pb-6">
 <div>
 <Link
 href="/services"
 onClick={onNavigate}
 className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-accent"
 >
 All services
 <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
 </Link>
 <p className="mt-4 font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
 Core services
 </p>
 <ul className="mt-3 space-y-3">
 {mainServices.map((service) => (
 <li key={service.slug}>
 <Link
 href={`/services/${service.slug}`}
 onClick={onNavigate}
 className="block font-serif text-[18px] text-ink transition-colors hover:text-accent"
 >
 <span className="mr-2 font-mono text-[11px] text-ink-muted">
 {service.index}
 </span>
 {service.title}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
 Specialist services
 </p>
 <div className="mt-4 space-y-5">
 {moreServiceGroups.map((group) => (
 <div key={group.category}>
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
 {group.label}
 </p>
 <ul className="mt-2 space-y-1.5">
 {group.items.map((service) => (
 <li key={service.slug}>
 <Link
 href={`/services/${service.slug}`}
 onClick={onNavigate}
 className="block py-1 text-[15px] text-ink-body transition-colors hover:text-accent"
 >
 {service.title}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
