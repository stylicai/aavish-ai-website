"use client";

import { Webhook, Cpu, CircleCheck, Send, Database } from "lucide-react";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  icon: React.ElementType;
  x: number;
  y: number;
  active?: boolean;
};

const nodes: Node[] = [
  { id: "trigger", label: "Webhook trigger", icon: Webhook, x: 8, y: 26 },
  { id: "agent", label: "Agent (plan)", icon: Cpu, x: 32, y: 18, active: true },
  { id: "tool", label: "Tool: fetch", icon: Database, x: 56, y: 12 },
  { id: "verify", label: "Verify", icon: CircleCheck, x: 56, y: 42 },
  { id: "output", label: "Post to Slack", icon: Send, x: 82, y: 26 }
];

const edges: { from: string; to: string; active?: boolean }[] = [
  { from: "trigger", to: "agent", active: true },
  { from: "agent", to: "tool", active: true },
  { from: "agent", to: "verify" },
  { from: "tool", to: "output", active: true },
  { from: "verify", to: "output" }
];

export function WorkflowGraph({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration p-6 md:p-8",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
            Workflow · invoice-review
          </p>
          <p className="font-mono text-[11px] text-status-success inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
            running
          </p>
        </div>

        <div className="relative h-[280px] w-full">
          <svg
            aria-hidden
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {edges.map((edge, i) => {
              const a = nodes.find((n) => n.id === edge.from)!;
              const b = nodes.find((n) => n.id === edge.to)!;
              return (
                <line
                  key={i}
                  x1={a.x + 8}
                  y1={a.y + 4}
                  x2={b.x}
                  y2={b.y + 4}
                  stroke={edge.active ? "rgba(255,112,0,0.65)" : "rgba(255,255,255,0.18)"}
                  strokeWidth="0.3"
                  strokeDasharray={edge.active ? "0.8 0.8" : "0.4 0.6"}
                  className={edge.active ? "animate-connection-pulse" : ""}
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              );
            })}
          </svg>

          {nodes.map((n) => (
            <div
              key={n.id}
              className="absolute"
              style={{ left: `${n.x}%`, top: `${n.y * 3.5}px` }}
            >
              <div
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-2.5 py-2 font-mono text-[11px] backdrop-blur",
                  n.active
                    ? "border-accent/50 bg-accent/10 text-accent"
                    : "border-line-dark bg-bg-dark-card/80 text-ink-dark-body"
                )}
              >
                <n.icon className="h-3 w-3" strokeWidth={1.6} />
                <span>{n.label}</span>
              </div>
              {n.active && (
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-accent animate-pulse" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line-dark pt-4">
          {[
            { k: "Step", v: "2 / 5" },
            { k: "Elapsed", v: "412ms" },
            { k: "Tokens", v: "1,184" }
          ].map((m) => (
            <div key={m.k}>
              <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">{m.k}</p>
              <p className="mt-0.5 font-mono text-[13px] text-ink-inverse">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
