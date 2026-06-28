"use client";

import { Sparkles, Send, FileText, CheckCircle2, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopilotPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line bg-bg-card",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF4F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
            underwriter.copilot
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
          connected
        </span>
      </div>

      <div className="grid grid-cols-12">
        {/* Left: document context */}
        <div className="col-span-12 sm:col-span-5 border-b sm:border-b-0 sm:border-r border-line p-5">
          <div className="flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.6} />
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
              loan-application · L-4812
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {[
              { label: "Applicant", value: "Aarti Sharma" },
              { label: "Amount", value: "₹14,50,000" },
              { label: "Tenure", value: "60 months" },
              { label: "Bureau score", value: "742" }
            ].map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-3 text-[13px]">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
                  {row.label}
                </span>
                <span className="text-ink font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-line bg-bg-page p-3">
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
              Risk signals
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {[
                { label: "Income verified", ok: true },
                { label: "DTI within band", ok: true },
                { label: "Address mismatch", ok: false }
              ].map((sig) => (
                <li key={sig.label} className="flex items-center gap-2 text-[12px]">
                  <CheckCircle2
                    className={cn(
                      "h-3.5 w-3.5 shrink-0",
                      sig.ok ? "text-status-success" : "text-status-warn"
                    )}
                    strokeWidth={1.8}
                  />
                  <span className="text-ink-body">{sig.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: copilot conversation */}
        <div className="col-span-12 sm:col-span-7 p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
              Aavish copilot
            </p>
          </div>

          <div className="mt-4 space-y-3 text-[13px] leading-relaxed">
            <div className="flex gap-2">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted shrink-0 pt-1 w-10">
                you
              </span>
              <p className="text-ink-body">Summarize the underwriting decision and flag anything I should escalate.</p>
            </div>

            <div className="flex gap-2">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent shrink-0 pt-1 w-10">
                ai
              </span>
              <div className="text-ink">
                <p>
                  Approve at <span className="font-mono text-accent">14.5%</span> APR over 60 months.
                </p>
                <ul className="mt-2 space-y-1 text-ink-body">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-2 bg-accent shrink-0" />
                    Bureau 742 with clean 24-month trail
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-2 bg-accent shrink-0" />
                    DTI 31.2% — within policy band
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-2 bg-status-warn shrink-0" />
                    Address on KYC ≠ employer record. Manual check suggested.
                  </li>
                </ul>
                <p className="mt-3 font-mono text-[11px] text-ink-muted">
                  source: policy-v17 · model.eval 0.94
                </p>
              </div>
            </div>

            {/* Streaming line */}
            <div className="flex gap-2">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent shrink-0 pt-1 w-10">
                ai
              </span>
              <p className="text-ink-body">
                Drafting memo
                <span className="ml-1 inline-block h-[14px] w-[7px] bg-accent align-middle animate-caret-blink" />
              </p>
            </div>
          </div>

          {/* Input bar */}
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-bg-page px-3 py-2.5">
            <MessageSquare className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.6} />
            <span className="flex-1 font-mono text-[11px] text-ink-muted">
              ask the copilot or `/cite` a policy…
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md bg-accent px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-white"
              aria-label="Send"
            >
              <Send className="h-3 w-3" strokeWidth={1.8} />
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
