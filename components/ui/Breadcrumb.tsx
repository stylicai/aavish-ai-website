import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
      {items.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-ink-body hover:text-accent transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
          {idx < items.length - 1 && (
            <ChevronRight className="h-3 w-3 opacity-50" aria-hidden strokeWidth={1.5} />
          )}
        </span>
      ))}
    </nav>
  );
}
