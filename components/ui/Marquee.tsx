"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: React.ReactNode[];
  className?: string;
  pauseOnHover?: boolean;
  speed?: "slow" | "medium" | "fast";
};

const speedMap = {
  slow: "44s",
  medium: "28s",
  fast: "18s"
} as const;

export function Marquee({ items, className, pauseOnHover = true, speed = "medium" }: Props) {
  const duplicated = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex w-max items-center gap-12 animate-logo-scroll"
        style={{
          animationDuration: speedMap[speed]
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) (e.currentTarget.style.animationPlayState = "paused");
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) (e.currentTarget.style.animationPlayState = "running");
        }}
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-page to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-page to-transparent" />
    </div>
  );
}
