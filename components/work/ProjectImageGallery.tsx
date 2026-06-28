"use client";

import { useState } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/lib/work-data";
import { CaseStudyVisualFallback } from "./CaseStudyVisualFallback";
import { cn } from "@/lib/utils";

type Props = {
  study: CaseStudy;
  className?: string;
  /** Compact grid for work index rows */
  variant?: "featured" | "compact";
};

export function ProjectImageGallery({ study, className, variant = "featured" }: Props) {
  const images =
    study.images?.length
      ? study.images
      : study.heroImage
        ? [{ src: study.heroImage, alt: study.title, caption: "Overview" }]
        : [];

  const [active, setActive] = useState(0);

  if (!images.length) {
    return <CaseStudyVisualFallback slug={study.slug} className={className} />;
  }

  const current = images[active] ?? images[0];

  if (variant === "compact") {
    return (
      <div className={cn("space-y-3", className)}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-bg-card">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={active === 0}
          />
        </div>
        {images.length > 1 && (
          <ul className="grid grid-cols-4 gap-2">
            {images.slice(0, 4).map((img, idx) => (
              <li key={img.src}>
                <button
                  type="button"
                  onClick={() => setActive(idx)}
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden rounded-xl border transition-colors",
                    active === idx ? "border-accent" : "border-line opacity-80 hover:opacity-100"
                  )}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="120px" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <figure className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-bg-card">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority
        />
        {current.caption && (
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4 font-mono text-[11px] uppercase tracking-eyebrow text-white/90">
            {current.caption}
          </figcaption>
        )}
      </figure>
      {images.length > 1 && (
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {images.map((img, idx) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setActive(idx)}
                className={cn(
                  "relative aspect-[4/3] w-full overflow-hidden rounded-xl border transition-all",
                  active === idx
                    ? "border-accent ring-1 ring-accent/30"
                    : "border-line opacity-75 hover:opacity-100"
                )}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="140px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
