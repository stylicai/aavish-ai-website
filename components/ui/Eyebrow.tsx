import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "rule" | "center";
  tone?: "accent" | "muted" | "inverse";
  className?: string;
};

export function Eyebrow({ children, variant = "default", tone = "accent", className }: Props) {
  const colorClass =
    tone === "accent"
      ? "text-accent"
      : tone === "inverse"
        ? "text-ink-inverse/70"
        : "text-ink-body";

  if (variant === "rule") {
    return (
      <div className={cn("flex items-center gap-3 font-mono text-eyebrow uppercase", colorClass, className)}>
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        <span>{children}</span>
      </div>
    );
  }

  if (variant === "center") {
    return (
      <div className={cn("flex items-center justify-center gap-3 font-mono text-eyebrow uppercase", colorClass, className)}>
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        <span>{children}</span>
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      </div>
    );
  }

  return (
    <span className={cn("font-mono text-eyebrow uppercase", colorClass, className)}>
      {children}
    </span>
  );
}
