"use client";

import { Database, FileText, Search, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    label: "Sources",
    items: [
      { icon: FileText, label: "Docs" },
      { icon: Database, label: "DB" },
      { icon: Search, label: "API" }
    ]
  },
  {
    label: "Index",
    items: [{ icon: Sparkles, label: "Vector store" }]
  },
  {
    label: "Model",
    items: [{ icon: Sparkles, label: "LLM" }]
  },
  {
    label: "Response",
    items: [{ icon: MessageSquare, label: "Cited answer" }]
  }
];

export function RAGDiagram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration p-6 md:p-8",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />

      <div className="relative">
        <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body mb-6">
          RAG pipeline · live
        </p>

        <div className="grid grid-cols-4 gap-3 md:gap-5 items-stretch relative">
          {/* Animated flow line */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-2 top-1/2 -translate-y-1/2 h-1 hidden md:block"
            viewBox="0 0 400 4"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="2"
              x2="400"
              y2="2"
              stroke="rgba(255,112,0,0.45)"
              strokeWidth="1"
              strokeDasharray="6 6"
              className="animate-connection-pulse"
            />
          </svg>

          {tiers.map((tier, tIdx) => (
            <div
              key={tier.label}
              className="relative flex flex-col rounded-xl border border-line-dark bg-bg-dark-card/80 p-3 backdrop-blur"
            >
              <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
                0{tIdx + 1} · {tier.label}
              </p>
              <div className="mt-2 flex flex-col gap-1.5">
                {tier.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-md border border-line-dark bg-black/40 px-2 py-1.5"
                  >
                    <item.icon className="h-3 w-3 text-accent" strokeWidth={1.6} />
                    <span className="font-mono text-[11px] text-ink-inverse">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome strip */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: "Recall@5", v: "94%" },
            { k: "Faithfulness", v: "0.96" },
            { k: "p95 latency", v: "820ms" }
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-line-dark bg-black/40 px-3 py-2">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">{m.k}</p>
              <p className="mt-1 font-mono text-[14px] text-ink-inverse">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
