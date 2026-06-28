export function HeroOrchestrationLines({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration">
        <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />
        <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" aria-hidden>
          {/* Nodes */}
          {[
            { x: 100, y: 28, r: 5, label: "INTENT" },
            { x: 32, y: 90, r: 4, label: "RETRIEVE" },
            { x: 100, y: 90, r: 4, label: "PLAN" },
            { x: 168, y: 90, r: 4, label: "TOOL" },
            { x: 60, y: 160, r: 4, label: "VERIFY" },
            { x: 140, y: 160, r: 4, label: "EXECUTE" },
            { x: 100, y: 220, r: 5, label: "OUTPUT" }
          ].map((n) => (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r={n.r + 5} fill="rgba(255,112,0,0.15)" />
              <circle cx={n.x} cy={n.y} r={n.r} fill="#FF7000" />
              <text
                x={n.x}
                y={n.y - n.r - 6}
                textAnchor="middle"
                fill="rgba(255,255,255,0.55)"
                fontFamily="JetBrains Mono, monospace"
                fontSize="6"
                letterSpacing="1"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* Connecting paths */}
          {[
            "M 100 33 L 32 85",
            "M 100 33 L 100 85",
            "M 100 33 L 168 85",
            "M 32 95 L 60 155",
            "M 100 95 L 60 155",
            "M 100 95 L 140 155",
            "M 168 95 L 140 155",
            "M 60 165 L 100 215",
            "M 140 165 L 100 215"
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="rgba(255,112,0,0.45)"
              strokeWidth="0.6"
              fill="none"
              strokeDasharray="3 3"
              className="animate-connection-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        <div className="absolute left-5 top-5 right-5 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
            agent.run · trace
          </p>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-status-success">
            <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
            7 steps · 1.4s
          </span>
        </div>
      </div>
    </div>
  );
}
