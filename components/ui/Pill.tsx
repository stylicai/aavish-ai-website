import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent" | "dark" | "success";
  size?: "sm" | "md";
};

export function Pill({ className, tone = "neutral", size = "sm", ...rest }: Props) {
  const tones = {
    neutral: "border-line bg-bg-card text-ink-body",
    accent: "border-accent/30 bg-accent-light text-accent-dark",
    dark: "border-line-dark bg-bg-dark-card text-ink-dark-body",
    success: "border-status-success/30 bg-status-success/10 text-status-success"
  } as const;
  const sizes = {
    sm: "h-7 px-3 text-[11px] tracking-[0.08em]",
    md: "h-8 px-4 text-[12px] tracking-[0.06em]"
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-mono uppercase",
        tones[tone],
        sizes[size],
        className
      )}
      {...rest}
    />
  );
}
