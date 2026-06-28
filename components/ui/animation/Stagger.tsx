"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

export function Stagger({
  children,
  className,
  as = "div"
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const Component = m[as] as React.ElementType;
  return (
    <LazyMotion features={domAnimation} strict>
      <Component
        className={cn(className)}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div"
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "p" | "h3" | "span" | "article";
}) {
  const Component = m[as] as React.ElementType;
  return (
    <LazyMotion features={domAnimation} strict>
      <Component className={cn(className)} variants={item}>
        {children}
      </Component>
    </LazyMotion>
  );
}
