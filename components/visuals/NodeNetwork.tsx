"use client";

import { cn } from "@/lib/utils";

type Node = { x: number; y: number; size?: number };
type Edge = [number, number];

const defaultNodes: Node[] = [
  { x: 14, y: 28 }, { x: 32, y: 18 }, { x: 50, y: 30 },
  { x: 68, y: 22 }, { x: 86, y: 36 }, { x: 22, y: 56 },
  { x: 42, y: 64 }, { x: 60, y: 56 }, { x: 78, y: 64 },
  { x: 12, y: 78 }, { x: 36, y: 84 }, { x: 70, y: 84 }
];

const defaultEdges: Edge[] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5],
  [2, 6], [3, 7], [4, 8], [5, 6], [6, 7], [7, 8],
  [5, 9], [6, 10], [7, 10], [8, 11], [10, 11], [9, 10]
];

export function NodeNetwork({
  className,
  nodes = defaultNodes,
  edges = defaultEdges
}: {
  className?: string;
  nodes?: Node[];
  edges?: Edge[];
}) {
  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden", className)}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          if (!na || !nb) return null;
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgba(255,112,0,0.35)"
              strokeWidth="0.18"
              strokeDasharray="0.6 0.6"
              className="animate-connection-pulse"
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={(n.size ?? 0.7) + 1.6}
              fill="rgba(255,112,0,0.15)"
            />
            <circle cx={n.x} cy={n.y} r={n.size ?? 0.7} fill="#FF7000" />
          </g>
        ))}
      </svg>
    </div>
  );
}
