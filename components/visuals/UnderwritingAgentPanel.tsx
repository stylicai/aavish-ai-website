"use client";

import {
  FileText,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
  UserCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const documents = [
  { name: "bank-statement.pdf", size: "2.1 MB", status: "parsed" as const },
  { name: "kyc-packet.zip", size: "4.8 MB", status: "parsed" as const },
  { name: "bureau-report.json", size: "128 KB", status: "parsed" as const },
  { name: "employer-letter.pdf", size: "890 KB", status: "flagged" as const }
];

const pipelineSteps = [
  { label: "Ingest & classify documents", tool: "doc-agent", status: "done" as const },
  { label: "Deterministic policy checks", tool: "rules-engine", status: "done" as const },
  { label: "LLM risk reasoning", tool: "risk-v3", status: "active" as const },
  { label: "Draft underwriting memo", tool: "memo-gen", status: "queued" as const },
  { label: "Route to human reviewer", tool: "review-queue", status: "queued" as const }
];

const statusStyles = {
  done: "border-status-success/40 text-status-success",
  active: "border-accent text-accent",
  queued: "border-line-dark text-ink-muted"
};

export function UnderwritingAgentPanel({ className }: { className?: string }) {
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
            <Shield className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
              loan-underwriter · agent
            </span>
            <span className="font-mono text-[10px] text-ink-muted">
              application L-4812 · sequence capital
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
          <Clock className="h-3 w-3" strokeWidth={1.6} />
          1:24 elapsed
        </span>
      </div>

      <div className="grid sm:grid-cols-12">
        {/* Documents */}
        <div className="border-b border-line-dark p-4 sm:col-span-5 sm:border-b-0 sm:border-r sm:p-5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
              loan file · 4 docs
            </p>
            <span className="font-mono text-[10px] text-status-success">queue 3,842</span>
          </div>

          <ul className="mt-4 space-y-2">
            {documents.map((doc) => (
              <li
                key={doc.name}
                className="flex items-center gap-2.5 rounded-lg border border-line-dark bg-[#111111] px-3 py-2"
              >
                <FileText className="h-3.5 w-3.5 shrink-0 text-ink-muted" strokeWidth={1.6} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-mono text-[11px] text-ink-inverse">{doc.name}</p>
                  <p className="font-mono text-[9px] text-ink-muted">{doc.size}</p>
                </div>
                <CheckCircle2
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    doc.status === "parsed" ? "text-status-success" : "text-status-warn"
                  )}
                  strokeWidth={1.8}
                />
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-lg border border-line-dark bg-[#0a0a0a] px-3 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
              Applicant snapshot
            </p>
            <dl className="mt-2 space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between gap-2">
                <dt className="text-ink-muted">Amount</dt>
                <dd className="text-ink-inverse">₹14,50,000</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-ink-muted">Bureau</dt>
                <dd className="text-status-success">742</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-ink-muted">DTI</dt>
                <dd className="text-ink-inverse">31.2%</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Agent pipeline */}
        <div className="p-4 sm:col-span-7 sm:p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
              underwriting pipeline
            </p>
          </div>

          <ol className="relative mt-4 space-y-2.5">
            <span
              aria-hidden
              className="absolute bottom-2 left-[10px] top-2 w-px bg-line-dark"
            />
            {pipelineSteps.map((step, i) => (
              <li key={step.label} className="relative flex items-start gap-3">
                <span
                  className={cn(
                    "relative z-10 inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border bg-bg-orchestration",
                    statusStyles[step.status]
                  )}
                >
                  {step.status === "done" && (
                    <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden>
                      <path
                        d="M2 5.4 L4 7.4 L8 3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {step.status === "active" && (
                    <span className="block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                  {step.status === "queued" && (
                    <span className="block h-1 w-1 rounded-full bg-current opacity-40" />
                  )}
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p
                    className={cn(
                      "text-[12px] leading-snug",
                      step.status === "queued" ? "text-ink-muted" : "text-ink-inverse"
                    )}
                  >
                    <span className="mr-2 font-mono text-[10px] text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step.label}
                  </p>
                  {step.tool && (
                    <p className="mt-0.5 font-mono text-[9px] text-ink-muted">{step.tool}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Memo preview */}
          <div className="mt-4 rounded-xl border border-accent/25 bg-accent/5 p-3">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-accent">
              memo draft · streaming
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-ink-dark-body">
              Recommend <span className="text-ink-inverse">approve</span> at 14.5% APR. Bureau
              clean; DTI within band. Flag address mismatch for human review.
            </p>
            <p className="mt-2 font-mono text-[9px] text-ink-muted">
              policy-v17 · eval 0.94 · trace #uw-8f2a
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-line-dark bg-[#111111] px-3 py-2">
            <div className="flex items-center gap-2">
              <UserCheck className="h-3.5 w-3.5 text-ink-muted" strokeWidth={1.6} />
              <span className="font-mono text-[10px] text-ink-dark-body">
                Human approval · edge cases only
              </span>
            </div>
            <span className="shrink-0 font-mono text-[10px] text-status-success">pending</span>
          </div>
        </div>
      </div>

      {/* Footer stats — mirrors left-side metrics */}
      <div className="grid grid-cols-3 gap-px border-t border-line-dark bg-line-dark">
        {[
          { v: "90s", l: "Memo time" },
          { v: "80%", l: "Less manual review" },
          { v: "94%", l: "Human agreement" }
        ].map((s) => (
          <div key={s.l} className="bg-[#0a0a0a] px-3 py-2.5 text-center sm:px-4">
            <p className="font-serif text-[18px] leading-none text-accent sm:text-[20px]">{s.v}</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-eyebrow text-ink-muted">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
