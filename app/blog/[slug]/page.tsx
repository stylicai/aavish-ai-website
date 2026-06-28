import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Reveal } from "@/components/ui/animation/Reveal";
import { BlogCanvas } from "@/components/blog/BlogCanvas";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { blogPosts, getPost } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site-data";

export function generateStaticParams() {
 return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
 const post = getPost(params.slug);
 if (!post) return {};
 return {
 title: post.title,
 description: post.excerpt,
 alternates: { canonical: `/blog/${post.slug}` },
 openGraph: {
 type: "article",
 title: post.title,
 description: post.excerpt,
 publishedTime: post.date,
 authors: [post.author.name]
 }
 };
}

function renderBody(body: string) {
 return body
 .split("\n\n")
 .map((block) => block.trim())
 .filter(Boolean)
 .map((block, i) => {
 if (block.startsWith("## ")) {
 const text = block.replace(/^##\s+/, "");
 return (
 <h2 key={i} id={text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
 {text}
 </h2>
 );
 }
 if (block.startsWith("### ")) {
 const text = block.replace(/^###\s+/, "");
 return <h3 key={i}>{text}</h3>;
 }
 return <p key={i}>{block}</p>;
 });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
 const post = getPost(params.slug);
 if (!post) notFound();

 const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

 return (
 <>
 <SchemaMarkup
 type="article"
 title={post.title}
 description={post.excerpt}
 datePublished={post.date}
 author={post.author.name}
 url={`${site.url}/blog/${post.slug}`}
 />
 <SchemaMarkup
 type="breadcrumb"
 items={[
 { name: "Home", url: `${site.url}/` },
 { name: "Blog", url: `${site.url}/blog` },
 { name: post.title, url: `${site.url}/blog/${post.slug}` }
 ]}
 />

 {/* Hero */}
 <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-12">
 <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
 <Container size="wide" className="relative">
 <Breadcrumb
 items={[
 { label: "Blog", href: "/blog" },
 { label: post.category }
 ]}
 />
 <div className="mt-8 max-w-[820px]">
 <Eyebrow>{post.category}</Eyebrow>
 <h1 className="mt-5 font-serif text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.04] tracking-display-tight text-ink">
 {post.title}
 </h1>
 <div className="mt-7 flex flex-wrap items-center gap-4">
 <div className="flex items-center gap-2">
 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg-delivery font-mono text-[12px] text-ink">
 {post.author.initials}
 </span>
 <div>
 <p className="text-[14px] font-medium text-ink">{post.author.name}</p>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {post.author.role}
 </p>
 </div>
 </div>
 <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 {formatDate(post.date)} · {post.readTime}
 </span>
 </div>
 </div>
 </Container>
 </section>

 <section className="pb-12">
 <Container size="wide">
 <Reveal>
 <BlogCanvas featured title={post.title} category={post.category} />
 </Reveal>
 </Container>
 </section>

 {/* Body */}
 <section className="pb-24">
 <Container size="wide">
 <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
 <article className="prose-aavish lg:col-span-8">
 {renderBody(post.body)}
 </article>
 <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
 {post.tableOfContents && post.tableOfContents.length > 0 && (
 <div className="rounded-2xl border border-line bg-bg-card p-6">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 On this page
 </p>
 <ol className="mt-4 space-y-2">
 {post.tableOfContents.map((t) => (
 <li key={t.id}>
 <a
 href={`#${t.id}`}
 className="text-[13px] text-ink-body hover:text-accent transition-colors"
 >
 {t.label}
 </a>
 </li>
 ))}
 </ol>
 </div>
 )}
 <BlogNewsletter />
 </aside>
 </div>
 </Container>
 </section>

 {/* Author bio */}
 <Section tone="elevated"  spacing="compact">
 <Container size="wide">
 <div className="rounded-2xl border border-line bg-bg-card p-7 sm:p-9">
 <div className="flex items-start gap-4">
 <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg-delivery font-mono text-[14px] text-ink">
 {post.author.initials}
 </span>
 <div>
 <p className="font-serif text-[22px] tracking-display text-ink">
 {post.author.name}
 </p>
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 {post.author.role} · Aavish AI Lab
 </p>
 <p className="mt-3 text-body text-ink-body max-w-[60ch]">
 Writes about the unglamorous parts of shipping production AI. Believes evals are the product.
 </p>
 </div>
 </div>
 </div>
 </Container>
 </Section>

 {/* Related posts */}
 <Section tone="page" >
 <Container size="wide">
 <div className="flex items-end justify-between gap-6">
 <Eyebrow>Related posts</Eyebrow>
 <Link href="/blog" className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
 All posts →
 </Link>
 </div>
 <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
 {related.map((r) => (
 <li key={r.slug}>
 <Link
 href={`/blog/${r.slug}`}
 className="group flex h-full flex-col rounded-2xl border border-line bg-bg-card overflow-hidden transition-all duration-300 ease-hover hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-card-hover"
 >
 <BlogCanvas title={r.title} category={r.category} />
 <div className="p-6">
 <Pill tone="accent">{r.category}</Pill>
 <h3 className="mt-4 font-serif text-[22px] leading-snug tracking-display text-ink">
 {r.title}
 </h3>
 <p className="mt-3 text-[14px] text-ink-body line-clamp-2">{r.excerpt}</p>
 </div>
 </Link>
 </li>
 ))}
 </ul>
 </Container>
 </Section>

 <FinalCTA />
 </>
 );
}
