import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "inverse-ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type Props = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-ink-inverse hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-btn-primary active:scale-[0.98]",
  secondary:
    "border border-ink/15 text-ink bg-transparent hover:border-ink/30 hover:bg-black/[0.04] hover:-translate-y-[1px]",
  ghost: "text-ink hover:text-accent",
  dark: "bg-bg-dark text-ink-inverse hover:bg-ink-body hover:-translate-y-[1px]",
  "inverse-ghost": "text-ink-inverse/80 hover:text-accent"
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px] rounded-[10px]",
  md: "h-11 px-5 text-[14px] rounded-xl",
  lg: "h-12 px-6 text-[15px] rounded-xl"
};

export function Button(props: Props) {
  const { variant = "primary", size = "md", arrow = false, className, children, ...rest } = props;

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 font-medium leading-none transition-all duration-300 ease-hover disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 ease-hover group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}
