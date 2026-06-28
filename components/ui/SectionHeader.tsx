import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center" | "split";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({ eyebrow, title, lead, align = "left", tone = "light", className }: Props) {
  const isDark = tone === "dark";
  const titleColor = isDark ? "text-ink-inverse" : "text-ink";
  const leadColor = isDark ? "text-ink-dark-body" : "text-ink-body";
  const eyebrowTone = isDark ? "inverse" : "accent";

  if (align === "split") {
    return (
      <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-16", className)}>
        <div className="lg:col-span-7 flex flex-col gap-5">
          {eyebrow && <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>}
          <h2 className={cn("text-display-lg", titleColor)}>{title}</h2>
        </div>
        {lead && (
          <div className="lg:col-span-5 lg:pt-3">
            <p className={cn("text-body-lg max-w-[44ch]", leadColor)}>{lead}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow variant={align === "center" ? "center" : "default"} tone={eyebrowTone}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={cn("text-display-lg", align === "center" && "max-w-[20ch]", titleColor)}>
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "text-body-lg",
            align === "center" ? "max-w-[58ch]" : "max-w-[52ch]",
            leadColor
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
