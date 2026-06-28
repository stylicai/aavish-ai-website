import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  size?: "default" | "wide" | "prose";
};

export function Container({ as: Tag = "div", size = "default", className, ...rest }: Props) {
  const sizing =
    size === "wide"
      ? "max-w-[1480px]"
      : size === "prose"
        ? "max-w-[760px]"
        : "max-w-[1240px]";
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20",
        sizing,
        className
      )}
      {...rest}
    />
  );
}
