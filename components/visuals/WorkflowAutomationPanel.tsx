"use client";

import { Mail, MessageSquare, Webhook, GitBranch, Shield, UserCheck, FileCheck2 } from "lucide-react";
import { cn } from "@/lib/utils";

type StepStatus = "done" | "active" | "queued";

type PipelineStep = {
  id: string;
  label: string;
  kind: "trigger" | "deterministic" | "llm" | "rules" | "human" | "output";
  status: StepStatus;
  detail?: string;
  meta?: string;
};

const triggers = [
  { icon: MessageSquare, label: "Slack" },
  { icon: Mail, label: "Email" },
  { icon: Webhook, label: "Webhook" }
];

const pipeline: PipelineStep[] = [
  {
    id: "1",
    label: "Invoice received",
    kind: "trigger",
    status: "done",
    meta: "INV-88412"
  },
  {
    id: "2",
    label: "Extract line items",
    kind: "deterministic",
    status: "done",
    detail: "OCR · 0.18s"
  },
  {
    id: "3",
    label: "Classify exception",
    kind: "llm",
    status: "active",
    detail: "duplicate_payment · 0.91",
    meta: "gpt-4o"
  },
  {
    id: "4",
    label: "Policy rules",
    kind: "rules",
    status: "queued",
    meta: "fallback < 0.85"
  },
  {
    id: "5",
    label: "Human approval",
    kind: "human",
    status: "queued"
  },
  {
    id: "6",
    label: "Post to ERP",
    kind: "output",
    status: "queued"
  }
];

const auditLog = [
  { t: "14:02:08", event: "trigger", msg: "slack · invoice attached" },
  { t: "14:02:09", event: "extract", msg: "12 fields parsed" },
  { t: "14:02:10", event: "llm", msg: "routed duplicate_payment" }
];

const kindStyles: Record<PipelineStep["kind"], string> = {
  trigger: "text-ink-dark-body",
  deterministic: "text-status-success",
  llm: "text-accent",
  rules: "text-ink-dark-body",
  human: "text-ink-muted",
  output: "text-ink-dark-body"
};

const kindLabel: Record<PipelineStep["kind"], string> = {
  trigger: "trigger",
  deterministic: "deterministic",
  llm: "llm",
  rules: "rules",
  human: "human",
  output: "output"
};

const statusIcon = (status: StepStatus) => {
  if (status === "done") {
    return (
      <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden>
        <path
          d="M2 5.4 L4 7.4 L8 3"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (status === "active") {
    return <span className="block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />;
  }
  return <span className="block h-1 w-1 rounded-full bg-current opacity-40" />;
};

export function WorkflowAutomationPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex max-h-[700px] flex-col overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration text-ink-inverse",
        className
      )}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-line-dark px-4 py-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
            <GitBranch className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
          </span>
          <div className="min-w-0">
            <p className="truncate font-mono text-[10px] uppercase tracking-eyebrow text-ink-dark-body">
              workflow · invoice-exception
            </p>
            <p className="font-mono text-[9px] text-ink-muted">#wf-4812 · shadow → prod</p>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-eyebrow text-status-success">
          <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
          step 3
        </span>
      </div>

      {/* Body — single scroll on mobile; split scroll on desktop */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain lg:grid lg:grid-cols-12 lg:overflow-hidden">
        <div className="border-b border-line-dark p-4 lg:col-span-7 lg:min-h-0 lg:overflow-y-auto lg:border-b-0 lg:border-r">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
              Triggers
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {triggers.map((t) => (
                <li
                  key={t.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line-dark bg-black/30 px-2 py-1 font-mono text-[9px] text-ink-dark-body"
                >
                  <t.icon className="h-2.5 w-2.5 text-accent" strokeWidth={1.6} />
                  {t.label}
                </li>
              ))}
            </ul>

            <p className="mt-4 font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
              Pipeline
            </p>
            <ol className="relative mt-2 space-y-1.5">
              <span
                aria-hidden
                className="absolute left-[9px] top-1.5 bottom-1.5 w-px bg-line-dark"
              />
              {pipeline.map((step) => (
                <li key={step.id} className="relative flex gap-2">
                  <span
                    className={cn(
                      "relative z-10 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border bg-bg-orchestration",
                      step.status === "done" && "border-status-success/50 text-status-success",
                      step.status === "active" && "border-accent text-accent",
                      step.status === "queued" && "border-line-dark text-ink-muted"
                    )}
                  >
                    {statusIcon(step.status)}
                  </span>
                  <div
                    className={cn(
                      "min-w-0 flex-1 rounded-md border px-2.5 py-1.5",
                      step.status === "active"
                        ? "border-accent/40 bg-accent/5"
                        : "border-line-dark bg-black/20"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={cn(
                          "text-[12px] font-medium leading-tight",
                          step.status === "queued" ? "text-ink-muted" : "text-ink-inverse"
                        )}
                      >
                        {step.label}
                      </p>
                      <span
                        className={cn(
                          "shrink-0 font-mono text-[8px] uppercase tracking-eyebrow",
                          kindStyles[step.kind]
                        )}
                      >
                        {kindLabel[step.kind]}
                      </span>
                    </div>
                    {(step.detail || step.meta) && (
                      <p
                        className={cn(
                          "mt-0.5 font-mono text-[9px] leading-tight",
                          step.status === "active" ? "text-accent" : "text-ink-muted"
                        )}
                      >
                        {[step.detail, step.meta].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-3 flex items-start gap-2 rounded-md border border-line-dark bg-black/30 px-2.5 py-2">
              <Shield className="h-3 w-3 shrink-0 text-status-success mt-0.5" strokeWidth={1.6} />
              <p className="text-[10px] leading-snug text-ink-dark-body">
                <span className="text-ink-inverse font-medium">Deterministic fallback</span> when
                confidence drops — full audit trail.
              </p>
            </div>
        </div>

        <div className="p-4 lg:col-span-5 lg:min-h-0 lg:overflow-y-auto">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
              Audit log
            </p>
            <ul className="mt-2 space-y-1.5 rounded-md border border-line-dark bg-black/30 p-2.5">
              {auditLog.map((row) => (
                <li key={row.t} className="font-mono text-[10px] leading-snug">
                  <span className="text-ink-muted">{row.t}</span>{" "}
                  <span className="text-accent">{row.event}</span>{" "}
                  <span className="text-ink-dark-body">{row.msg}</span>
                </li>
              ))}
              <li className="font-mono text-[10px] text-ink-muted animate-pulse">
                14:02:11 · policy match…
              </li>
            </ul>

            <p className="mt-4 font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
              Ships with workflow
            </p>
            <ul className="mt-2 space-y-1.5">
              {[
                { icon: FileCheck2, text: "Structured schema outputs" },
                { icon: UserCheck, text: "Human approval gates" },
                { icon: MessageSquare, text: "Slack / email actions" }
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-[11px] text-ink-dark-body">
                  <item.icon className="h-3 w-3 shrink-0 text-accent" strokeWidth={1.6} />
                  {item.text}
                </li>
              ))}
            </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="grid shrink-0 grid-cols-4 border-t border-line-dark">
        {[
          { k: "Steps", v: "3 / 6" },
          { k: "Elapsed", v: "1.2s" },
          { k: "Audit", v: "aud_9f2c" },
          { k: "Mode", v: "shadow" }
        ].map((m, i) => (
          <div
            key={m.k}
            className={cn("px-3 py-2", i !== 3 && "border-r border-line-dark")}
          >
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">{m.k}</p>
            <p className="mt-0.5 font-mono text-[12px] text-ink-inverse">{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
