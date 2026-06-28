import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLElement> & {
  tone?: "page" | "card" | "elevated" | "dark";
  spacing?: "default" | "compact" | "tall";
};

const toneStyles: Record<NonNullable<Props["tone"]>, string> = {
  page: "bg-bg-page text-ink",
  card: "bg-bg-card text-ink",
  elevated: "bg-bg-delivery text-ink",
  dark: "bg-bg-dark text-ink-inverse"
};

const spacingStyles: Record<NonNullable<Props["spacing"]>, string> = {
  compact: "py-16 sm:py-20 md:py-24",
  default: "py-20 sm:py-24 md:py-28 lg:py-32",
  tall: "py-24 sm:py-28 md:py-32 lg:py-32"
};

export function Section({
  className,
  tone = "page",
  spacing = "default",
  ...rest
}: Props) {
  return (
    <section
      className={cn("relative", toneStyles[tone], spacingStyles[spacing], className)}
      {...rest}
    />
  );
}
