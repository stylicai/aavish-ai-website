import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "paper" | "elevated" | "dark" | "ghost";
  interactive?: boolean;
};

const styles: Record<NonNullable<Props["variant"]>, string> = {
  paper: "bg-bg-card border border-line",
  elevated: "bg-bg-delivery border border-line",
  dark: "bg-bg-dark-card border border-line-dark text-ink-inverse",
  ghost: "bg-transparent border border-line"
};

export function Card({ className, variant = "paper", interactive = false, ...rest }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 ease-hover",
        styles[variant],
        interactive && "hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-card-hover",
        className
      )}
      {...rest}
    />
  );
}
