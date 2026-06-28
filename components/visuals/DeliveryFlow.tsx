"use client";

import { cn } from "@/lib/utils";

const stages = [
  {
    id: "01",
    title: "Brief",
    detail: "We read it within 24 hours.",
    state: "done" as const
  },
  {
    id: "02",
    title: "Point of view",
    detail: "Senior call · 45 min.",
    state: "done" as const
  },
  {
    id: "03",
    title: "Sequencing plan",
    detail: "Sprints, costs, owners.",
    state: "active" as const
  },
  {
    id: "04",
    title: "Build → operate",
    detail: "Weekly demos. Production handover.",
    state: "next" as const
  }
];

const stateStyles = {
  done: "border-status-success/40 text-status-success",
  active: "border-accent text-accent bg-accent/5",
  next: "border-line-dark text-ink-muted"
} as const;

export function DeliveryFlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration text-ink-inverse",
        className
      )}
    >
      {/* Top header */}
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5">
        <div className="flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 28 28" aria-hidden>
            <path d="M14 3 L25 24 H3 Z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="14" cy="17" r="2.5" fill="#FF7000" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
            engagement · how it runs
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          live now
        </span>
      </div>

      {/* Brief card */}
      <div className="px-5 pt-6 pb-2">
        <div className="rounded-xl border border-line-dark bg-black/30 p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
              Incoming brief
            </p>
            <span className="font-mono text-[10px] text-ink-muted">just now</span>
          </div>
          <p className="mt-2 text-[14px] text-ink-inverse leading-snug">
            We're a 3PL drowning in exception calls. Want a voice agent that resolves the easy ones. 12k/day. EU + IN.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["logistics", "voice", "12k/day", "EU+IN"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line-dark bg-black/30 px-2 py-0.5 font-mono text-[10px] text-ink-dark-body"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline */}
      <div className="px-5 pb-5 pt-4">
        <ol className="relative space-y-3">
          <span
            aria-hidden
            className="absolute left-[14px] top-2 bottom-2 w-px bg-line-dark"
          />
          {stages.map((s, i) => (
            <li key={s.id} className="relative flex items-start gap-4">
              <span
                className={cn(
                  "relative z-10 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-bg-orchestration font-mono text-[10px]",
                  stateStyles[s.state]
                )}
              >
                {s.id}
              </span>
              <div className="min-w-0 flex-1 pt-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p
                    className={cn(
                      "text-[14px] font-medium",
                      s.state === "next" ? "text-ink-muted" : "text-ink-inverse"
                    )}
                  >
                    {s.title}
                  </p>
                  {s.state === "active" && (
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                      drafting
                    </span>
                  )}
                  {s.state === "done" && (
                    <span className="font-mono text-[10px] uppercase tracking-eyebrow text-status-success">
                      ready
                    </span>
                  )}
                </div>
                <p className="mt-0.5 font-mono text-[11px] text-ink-dark-body">
                  {s.detail}
                </p>
                {s.state === "active" && (
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <span className="block h-full w-2/3 animate-pulse rounded-full bg-accent" />
                  </div>
                )}
              </div>
              {i !== stages.length - 1 && i < 1 && null}
            </li>
          ))}
        </ol>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-3 border-t border-line-dark">
        {[
          { k: "Response", v: "< 24h" },
          { k: "Pilot start", v: "week 1" },
          { k: "First demo", v: "week 3" }
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
