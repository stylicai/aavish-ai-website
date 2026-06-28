"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "h2" | "h3" | "p";
  y?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className, as = "div", y = 16 }: Props) {
  const Component = m[as] as React.ElementType;
  return (
    <LazyMotion features={domAnimation} strict>
      <Component
        className={cn(className)}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease, delay }}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}
