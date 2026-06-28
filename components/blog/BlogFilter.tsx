"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import { formatDate, cn } from "@/lib/utils";
import { BlogCanvas } from "./BlogCanvas";

export function BlogFilter() {
 const [active, setActive] = useState<(typeof blogCategories)[number]>("All");

 const filtered = useMemo(() => {
 const list = active === "All"
 ? blogPosts
 : blogPosts.filter((p) => p.category === active);
 return list.filter((p) => !p.featured);
 }, [active]);

 return (
 <div>
 <div className="flex items-center gap-2 overflow-x-auto pb-6">
 {blogCategories.map((c) => {
 const isActive = active === c;
 return (
 <button
 key={c}
 onClick={() => setActive(c)}
 className={cn(
 "shrink-0 rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-eyebrow transition-colors",
 isActive
 ? "border-accent bg-accent text-ink-inverse"
 : "border-line bg-bg-card text-ink-body hover:border-accent/50 hover:text-ink"
 )}
 >
 {c}
 </button>
 );
 })}
 </div>

 <ul className="grid grid-cols-1 gap-7 lg:grid-cols-3">
 {filtered.map((post) => (
 <li key={post.slug}>
 <Link
 href={`/blog/${post.slug}`}
 className="group flex h-full flex-col rounded-2xl border border-line bg-bg-card overflow-hidden transition-all duration-300 ease-hover hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-card-hover"
 >
 <BlogCanvas category={post.category} title={post.title} />
 <div className="flex flex-1 flex-col p-6">
 <div className="flex items-center justify-between">
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {post.category}
 </span>
 <ArrowUpRight
 className="h-4 w-4 text-ink-muted transition-all duration-300 ease-hover group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
 strokeWidth={1.5}
 aria-hidden
 />
 </div>
 <h3 className="mt-4 font-serif text-[22px] leading-snug tracking-display text-ink">
 {post.title}
 </h3>
 <p className="mt-3 text-[14px] text-ink-body line-clamp-3">{post.excerpt}</p>
 <div className="mt-auto pt-6 flex items-center justify-between">
 <div className="flex items-center gap-2">
 <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg-delivery font-mono text-[10px] text-ink">
 {post.author.initials}
 </span>
 <span className="text-[12px] text-ink-body">{post.author.name}</span>
 </div>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {formatDate(post.date)} · {post.readTime}
 </span>
 </div>
 </div>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 );
}
