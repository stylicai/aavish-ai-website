"use client";

import { Image, Sparkles, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const outputs = [
  { type: "copy", label: "Campaign headline", status: "done" as const, preview: "Ship faster. Spend less." },
  { type: "image", label: "Hero visual v3", status: "active" as const, preview: "1024×1024 · brand-locked" },
  { type: "copy", label: "Product description", status: "queued" as const, preview: "—" }
];

export function GenerativeAIPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration text-ink-inverse",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
            <Wand2 className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
              generative-studio · prod
            </span>
            <span className="font-mono text-[10px] text-ink-muted">
              brand kit · sequence-capital
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          streaming
        </span>
      </div>

      <div className="grid sm:grid-cols-12">
        <div className="border-b border-line-dark p-4 sm:col-span-5 sm:border-b-0 sm:border-r sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
            prompt · grounded
          </p>
          <div className="mt-3 rounded-xl border border-line-dark bg-[#111111] p-3">
            <p className="text-[12px] leading-relaxed text-ink-dark-body">
              Write launch copy for a fintech savings product. Tone: calm, confident. Include a
              hero headline and 3 bullet benefits. Cite brand guidelines v4.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {["Claude 3.5", "GPT-4o", "SDXL", "brand-lora"].map((m) => (
              <span
                key={m}
                className="rounded border border-line-dark bg-[#0a0a0a] px-2 py-0.5 font-mono text-[9px] uppercase text-ink-muted"
              >
                {m}
              </span>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-accent/25 bg-accent/5 px-3 py-2">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-accent">
              guardrails
            </p>
            <p className="mt-1 text-[11px] text-ink-dark-body">
              PII redaction on · policy-v12 · human review for external publish
            </p>
          </div>
        </div>

        <div className="p-4 sm:col-span-7 sm:p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
              generation queue
            </p>
          </div>

          <ul className="mt-4 space-y-2">
            {outputs.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-lg border border-line-dark bg-[#111111] px-3 py-2.5"
              >
                {item.type === "image" ? (
                  <Image className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.6} />
                ) : (
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.6} />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] text-ink-inverse">{item.label}</p>
                  <p className="font-mono text-[9px] text-ink-muted">{item.preview}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 font-mono text-[8px] uppercase",
                    item.status === "done" && "text-status-success",
                    item.status === "active" && "text-accent",
                    item.status === "queued" && "text-ink-muted"
                  )}
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-line-dark bg-[#0a0a0a] p-3">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
              output · streaming
            </p>
            <p className="mt-2 font-serif text-[18px] leading-snug text-ink-inverse">
              Grow savings on autopilot.
            </p>
            <ul className="mt-2 space-y-1 text-[12px] text-ink-dark-body">
              <li>· FDIC-insured accounts with instant transfers</li>
              <li>· AI nudges tuned to your cash-flow patterns</li>
              <li>· No hidden fees — ever</li>
            </ul>
            <p className="mt-2 font-mono text-[9px] text-ink-muted">
              source: brand-v4 · eval 0.96 · 1.8s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
