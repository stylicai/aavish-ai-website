"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

export function FAQAccordion({ items, className }: { items: Item[]; className?: string }) {
 const [open, setOpen] = useState<number | null>(0);

 return (
 <LazyMotion features={domAnimation} strict>
      <ul className={cn("space-y-2", className)}>
 {items.map((item, i) => {
 const isOpen = open === i;
 return (
 <li key={i}>
 <button
 type="button"
 onClick={() => setOpen(isOpen ? null : i)}
 aria-expanded={isOpen}
 aria-controls={`faq-${i}`}
 className="group flex w-full items-start justify-between gap-6 py-6 text-left"
 >
 <span
 className={cn(
 "font-serif text-[22px] sm:text-[24px] leading-snug tracking-display transition-colors",
 isOpen ? "text-accent" : "text-ink group-hover:text-accent"
 )}
 >
 {item.q}
 </span>
 <span
 className={cn(
 "mt-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
 isOpen ? "border-accent bg-accent text-ink-inverse" : "border-line text-ink-body group-hover:border-accent"
 )}
 >
 {isOpen ? <Minus className="h-3.5 w-3.5" strokeWidth={2} /> : <Plus className="h-3.5 w-3.5" strokeWidth={2} />}
 </span>
 </button>
 <AnimatePresence initial={false}>
 {isOpen && (
 <m.div
 id={`faq-${i}`}
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
 className="overflow-hidden"
 >
 <p className="pb-7 pr-12 text-body text-ink-body max-w-[68ch]">{item.a}</p>
 </m.div>
 )}
 </AnimatePresence>
 </li>
 );
 })}
 </ul>
 </LazyMotion>
 );
}
