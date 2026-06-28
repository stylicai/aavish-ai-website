"use client";

import { cn } from "@/lib/utils";

type Step = {
  id: string;
  label: string;
  tool?: string;
  status: "done" | "active" | "queued";
};

const steps: Step[] = [
  { id: "1", label: "Parse claim", tool: "pdf-extract", status: "done" },
  { id: "2", label: "Fetch policy rules", tool: "policy-db", status: "done" },
  { id: "3", label: "Score risk", tool: "model.risk-v3", status: "active" },
  { id: "4", label: "Cross-check fraud signals", tool: "fraud-graph", status: "queued" },
  { id: "5", label: "Draft adjudication memo", status: "queued" },
  { id: "6", label: "Post to reviewer", tool: "slack#claims-ops", status: "queued" }
];

const statusStyles: Record<Step["status"], string> = {
  done: "border-status-success/40 text-status-success",
  active: "border-accent text-accent",
  queued: "border-line-dark text-ink-muted"
};

const statusGlyph: Record<Step["status"], React.ReactNode> = {
  done: (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
      <path d="M2 5.4 L4 7.4 L8 3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  active: <span className="block h-2 w-2 rounded-full bg-accent animate-pulse" />,
  queued: <span className="block h-1.5 w-1.5 rounded-full bg-current opacity-50" />
};

export function AgentPlan({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration text-ink-inverse",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5">
        <div className="flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 28 28" aria-hidden>
            <path d="M14 3 L25 24 H3 Z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="14" cy="17" r="2.5" fill="#FF7000" />
          </svg>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
              agent · claim-adjudicator
            </span>
            <span className="font-mono text-[10px] text-ink-muted">
              plan v3 · 6 steps · trace #c8f2
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          step 3 of 6
        </span>
      </div>

      {/* Plan steps */}
      <div className="p-5 sm:p-6">
        <ol className="relative space-y-3">
          {/* Vertical connector line */}
          <span
            aria-hidden
            className="absolute left-[11px] top-3 bottom-3 w-px bg-line-dark"
          />
          {steps.map((step, i) => (
            <li key={step.id} className="relative flex items-start gap-4">
              <span
                className={cn(
                  "relative z-10 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border bg-bg-orchestration",
                  statusStyles[step.status]
                )}
              >
                {statusGlyph[step.status]}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={cn(
                      "text-[13px]",
                      step.status === "queued"
                        ? "text-ink-muted"
                        : "text-ink-inverse"
                    )}
                  >
                    <span className="font-mono text-[10px] text-ink-muted mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step.label}
                  </p>
                  {step.tool && (
                    <span
                      className={cn(
                        "font-mono text-[10px] rounded-md border px-2 py-0.5",
                        step.status === "active"
                          ? "border-accent/40 text-accent bg-accent/5"
                          : "border-line-dark text-ink-dark-body"
                      )}
                    >
                      {step.tool}
                    </span>
                  )}
                </div>

                {step.status === "active" && (
                  <div className="mt-2 flex items-center gap-2 font-mono text-[10px] text-ink-dark-body">
                    <span className="inline-block h-1.5 w-12 overflow-hidden rounded-full bg-white/5">
                      <span className="block h-full w-2/3 animate-pulse rounded-full bg-accent" />
                    </span>
                    scoring · 0.42s
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Footer trace */}
      <div className="grid grid-cols-3 border-t border-line-dark">
        {[
          { k: "Tokens", v: "1,842" },
          { k: "Tool calls", v: "4" },
          { k: "Eval", v: "0.96" }
        ].map((m, i) => (
          <div
            key={m.k}
            className={cn(
              "px-4 py-3",
              i !== 2 ? "border-r border-line-dark" : ""
            )}
          >
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
              {m.k}
            </p>
            <p className="mt-1 font-mono text-[13px] text-ink-inverse">{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
