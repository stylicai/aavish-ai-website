"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ServiceTerminal({
  lines,
  className,
  title = "aavish-build"
}: {
  lines: { text: string; tone?: "muted" | "success" | "accent" | "default" }[];
  className?: string;
  title?: string;
}) {
  const [rendered, setRendered] = useState<string[]>([""]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let currentIdx = 0;
    let charIdx = 0;
    const buffer: string[] = [""];
    setRendered([""]);

    const step = () => {
      if (cancelled) return;
      const target = lines[currentIdx]?.text ?? "";
      if (charIdx < target.length) {
        buffer[currentIdx] = target.slice(0, charIdx + 1);
        setRendered([...buffer]);
        charIdx += 1;
        setTimeout(step, 14);
      } else {
        currentIdx += 1;
        charIdx = 0;
        if (currentIdx < lines.length) {
          buffer.push("");
          setRendered([...buffer]);
          setTimeout(step, 200);
        } else {
          setTimeout(() => !cancelled && setTick((n) => n + 1), 2400);
        }
      }
    };

    const start = setTimeout(step, 350);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [tick, lines]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-line-dark px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
          {title}
        </span>
        <span className="font-mono text-[10px] text-status-success inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
          live
        </span>
      </div>
      <pre className="font-mono text-[12.5px] leading-[1.75] text-[#D4D4D4] p-5 min-h-[320px]">
        {rendered.map((line, i) => {
          const config = lines[i];
          const colorClass =
            config?.tone === "success"
              ? "text-[#7BC97A]"
              : config?.tone === "accent"
                ? "text-accent"
                : config?.tone === "muted"
                  ? "text-[#9aa0a6]"
                  : "text-[#E5E5E5]";
          const isLast = i === rendered.length - 1;
          return (
            <div key={i} className={cn("whitespace-pre", colorClass)}>
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
