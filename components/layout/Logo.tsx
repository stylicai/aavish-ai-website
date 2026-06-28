import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/brand-assets";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "icon";

export function Logo({
  tone = "dark",
  variant = "full",
  className
}: {
  tone?: "dark" | "light";
  variant?: LogoVariant;
  className?: string;
}) {
  const isIcon = variant === "icon";
  const src = isIcon
    ? tone === "light"
      ? brandAssets.logo.iconOrange
      : brandAssets.logo.icon
    : tone === "light"
      ? brandAssets.logo.light
      : brandAssets.logo.dark;

  const { width, height } = isIcon
    ? brandAssets.logoDimensions.icon
    : brandAssets.logoDimensions.full;

  return (
    <Link
      href="/"
      aria-label="Aavish AI Lab — home"
      className={cn("group inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={src}
        alt="Aavish AI Lab"
        width={width}
        height={height}
        className={cn(
          "w-auto transition-opacity duration-200 group-hover:opacity-90",
          isIcon ? "h-9 w-9" : "h-8 sm:h-9"
        )}
        priority
      />
    </Link>
  );
}
