"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ScriptLine = {
  text: string;
  color?: "muted" | "success" | "accent";
  prompt?: boolean;
};

const SCRIPT: ScriptLine[] = [
  { text: "$ agent start --task \"process invoices\"", prompt: true },
  { text: "  → connecting to data sources... ok", color: "muted" },
  { text: "  → loading model claude-3.5-sonnet... ok", color: "muted" },
  { text: "  → executing workflow (4 steps)", color: "muted" },
  { text: "    ✓ extract     0.21s", color: "success" },
  { text: "    ✓ classify    0.34s", color: "success" },
  { text: "    ✓ approve     0.18s", color: "success" },
  { text: "    ✓ post        0.41s", color: "success" },
  { text: "  → completed in 1.2s · cost $0.0041", color: "accent" },
  { text: "$ _", prompt: true }
];

const CHAR_DELAY = 18;
const LINE_PAUSE = 220;
const LOOP_PAUSE = 2200;

export function AgentTerminal({ className }: { className?: string }) {
  const [lines, setLines] = useState<string[]>([""]);
  const [iter, setIter] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let currentIdx = 0;
    let charIdx = 0;
    const buffer: string[] = [""];
    setLines(["" ]);

    const tick = () => {
      if (cancelled) return;
      const target = SCRIPT[currentIdx].text;
      if (charIdx < target.length) {
        buffer[currentIdx] = target.slice(0, charIdx + 1);
        setLines([...buffer]);
        charIdx += 1;
        setTimeout(tick, CHAR_DELAY);
      } else {
        currentIdx += 1;
        charIdx = 0;
        if (currentIdx < SCRIPT.length) {
          buffer.push("");
          setLines([...buffer]);
          setTimeout(tick, LINE_PAUSE);
        } else {
          setTimeout(() => {
            if (!cancelled) setIter((n) => n + 1);
          }, LOOP_PAUSE);
        }
      }
    };

    const start = setTimeout(tick, 400);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [iter]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line-dark px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
          aavish-agent v1.0
        </span>
        <span className="font-mono text-[11px] text-status-success/90 inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
          live
        </span>
      </div>

      {/* Sheen */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Code */}
      <pre className="font-mono text-[12.5px] leading-[1.7] text-[#D4D4D4] p-5 min-h-[260px] overflow-hidden">
        {lines.map((line, i) => {
          const config = SCRIPT[i];
          const colorClass =
            config?.color === "success"
              ? "text-[#7BC97A]"
              : config?.color === "accent"
                ? "text-accent"
                : config?.color === "muted"
                  ? "text-[#9aa0a6]"
                  : "text-[#E5E5E5]";
          const isPrompt = config?.prompt;
          const isLast = i === lines.length - 1;
          return (
            <div key={i} className={cn("whitespace-pre", colorClass)}>
              {isPrompt && i === 0 ? (
                <>
                  <span className="text-accent">aavish</span>
                  <span className="text-ink-muted">@lab</span>
                  <span className="text-ink-muted"> ~ </span>
                </>
              ) : null}
              {line}
              {isLast && (
                <span className="ml-0.5 inline-block h-[14px] w-[8px] -translate-y-[2px] align-middle bg-accent animate-caret-blink" />
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
