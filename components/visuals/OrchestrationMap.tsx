"use client";

import { cn } from "@/lib/utils";

type Node = { id: string; label: string; x: number; y: number };

const nodes: Node[] = [
  { id: "us", label: "US East", x: 22, y: 38 },
  { id: "eu", label: "EU West", x: 45, y: 32 },
  { id: "in", label: "India", x: 64, y: 50 },
  { id: "sa", label: "São Paulo", x: 30, y: 70 },
  { id: "ap", label: "APAC", x: 80, y: 60 }
];

const edges: [string, string][] = [
  ["us", "eu"],
  ["eu", "in"],
  ["in", "ap"],
  ["us", "sa"],
  ["in", "sa"]
];

export function OrchestrationMap({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration",
        className
      )}
    >
      {/* Dotted grid */}
      <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-50" />

      {/* World map outline */}
      <svg
        aria-hidden
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        {/* Stylized continents — abstract dashed forms */}
        <g stroke="rgba(255,255,255,0.08)" fill="none" strokeWidth="0.3" strokeDasharray="0.6 0.6">
          {/* Americas */}
          <path d="M22 22 C 28 24, 34 30, 32 42 C 30 54, 28 62, 30 76 C 32 86, 22 90, 18 80 C 14 64, 16 48, 14 36 C 14 28, 18 22, 22 22 Z" />
          {/* Europe + Africa */}
          <path d="M50 20 C 60 22, 64 30, 60 40 C 56 56, 54 70, 50 84 C 46 76, 44 60, 46 46 C 46 32, 48 22, 50 20 Z" />
          {/* Asia */}
          <path d="M74 22 C 88 22, 100 26, 110 36 C 122 48, 120 62, 108 72 C 92 80, 80 76, 72 60 C 66 46, 68 30, 74 22 Z" />
          {/* Oceania */}
          <path d="M118 78 C 128 76, 138 80, 134 88 C 128 92, 118 90, 116 84 Z" />
        </g>

        {/* Connection lines */}
        {edges.map(([a, b]) => {
          const na = nodes.find((n) => n.id === a)!;
          const nb = nodes.find((n) => n.id === b)!;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgba(255,112,0,0.4)"
              strokeWidth="0.25"
              strokeDasharray="0.8 0.8"
              className="animate-connection-pulse"
              style={{ animationDelay: `${nodes.indexOf(na) * 0.4}s` }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <div
          key={n.id}
          className="absolute"
          style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="relative">
            <span
              className="absolute inset-0 -m-2 rounded-full bg-accent/30 animate-node-ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <span className="relative block h-2 w-2 rounded-full bg-accent" />
          </div>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-eyebrow text-ink-dark-body whitespace-nowrap">
            {n.label}
          </span>
        </div>
      ))}

      {/* Header overlay */}
      <div className="absolute left-5 top-5 right-5 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
          Global Orchestration
        </p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-status-success">
          <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
          5 regions · 127 agents
        </span>
      </div>

      {/* Footer overlay */}
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
        {[
          { k: "Throughput", v: "1.2M req/d" },
          { k: "Median latency", v: "412ms" },
          { k: "Region failover", v: "0 events" }
        ].map((m) => (
          <div key={m.k} className="rounded-md border border-line-dark bg-black/40 px-2.5 py-1.5">
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">{m.k}</p>
            <p className="mt-0.5 font-mono text-[11px] text-ink-inverse">{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
