import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/animation/Reveal";

/** Tailwind-safe column spans for 12-column grids */
const spanClass = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9"
} as const;

type Span = keyof typeof spanClass;

type GridColProps = {
  children: React.ReactNode;
  span?: Span;
  className?: string;
  reveal?: boolean;
  delay?: number;
  order?: 1 | 2;
};

/**
 * Direct child of a `lg:grid-cols-12` grid. Applies column span on the grid item
 * (not an inner wrapper) so content uses the full column width.
 */
export function GridCol({
  children,
  span = 6,
  className,
  reveal = false,
  delay = 0,
  order
}: GridColProps) {
  const colClass = cn(
    "min-w-0",
    spanClass[span],
    order === 1 && "lg:order-1",
    order === 2 && "lg:order-2",
    className
  );

  if (reveal) {
    return (
      <Reveal delay={delay} className={colClass}>
        {children}
      </Reveal>
    );
  }

  return <div className={colClass}>{children}</div>;
}
