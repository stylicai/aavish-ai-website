"use client";

import { Database, Boxes, FileText, Webhook, Server, Sparkles, ArrowRight, Settings2, MessagesSquare, Activity } from "lucide-react";

const inputs = [
 { icon: Database, label: "Databases" },
 { icon: Webhook, label: "APIs" },
 { icon: FileText, label: "Documents" },
 { icon: Boxes, label: "CRM" },
 { icon: Server, label: "Data Lake" }
];

const core = [
 { label: "Models" },
 { label: "Agents" },
 { label: "RAG" },
 { label: "Orchestration" }
];

const outputs = [
 { icon: Sparkles, label: "Insights" },
 { icon: Settings2, label: "Automations" },
 { icon: MessagesSquare, label: "Reports" },
 { icon: Activity, label: "Actions" }
];

export function CapabilityStack() {
 return (
 <div className="relative overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration p-6 md:p-10">
 <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />
 <div className="relative">
 <div className="grid items-stretch gap-6 md:gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
 {/* Inputs */}
 <div className="rounded-2xl border border-line-dark bg-bg-dark-card/60 p-5">
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">Inputs</p>
 <ul className="mt-4 space-y-2">
 {inputs.map((i) => (
 <li key={i.label} className="flex items-center gap-2.5 rounded-md border border-line-dark bg-black/30 px-3 py-2">
 <i.icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
 <span className="font-mono text-[12px] text-ink-inverse">{i.label}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="hidden lg:flex items-center justify-center">
 <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.4} aria-hidden />
 </div>

 {/* Core */}
 <div className="rounded-2xl border border-accent/40 bg-accent/[0.08] p-5">
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">Aavish core</p>
 <ul className="mt-4 grid grid-cols-2 gap-2">
 {core.map((c) => (
 <li
 key={c.label}
 className="relative rounded-md border border-accent/30 bg-black/40 px-3 py-3 text-center"
 >
 <span className="absolute inset-0 rounded-md ring-1 ring-accent/30 animate-pulse" aria-hidden />
 <span className="relative font-mono text-[12px] text-ink-inverse">{c.label}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="hidden lg:flex items-center justify-center">
 <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.4} aria-hidden />
 </div>

 {/* Outputs */}
 <div className="rounded-2xl border border-line-dark bg-bg-dark-card/60 p-5">
 <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">Outputs</p>
 <ul className="mt-4 space-y-2">
 {outputs.map((o) => (
 <li key={o.label} className="flex items-center gap-2.5 rounded-md border border-line-dark bg-black/30 px-3 py-2">
 <o.icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
 <span className="font-mono text-[12px] text-ink-inverse">{o.label}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 );
}
