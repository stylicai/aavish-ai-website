import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/animation/Reveal";
import { caseStudies } from "@/lib/work-data";

const heroStats = [
  { value: String(caseStudies.length), label: "Portfolio projects" },
  { value: "6", label: "Categories" },
  { value: "100%", label: "Production builds" }
];

export function WorkHero() {
  const featured = caseStudies[0];
  const previews = featured.images?.slice(0, 3) ?? [];

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(255,112,0,0.12) 0%, rgba(255,112,0,0) 68%)"
        }}
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-col gap-6 lg:col-span-6 xl:col-span-7">
            <Reveal>
              <Eyebrow variant="rule">
                Our work · {caseStudies.length} projects
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-display-xl text-ink">
                Production <span className="italic text-accent">AI</span> we&apos;ve
                shipped.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-[52ch] text-body-lg text-ink-body">
                Voice agents, multi-agent research, RAG, chatbots, and SaaS backends —
                documented with real metrics, architecture, and screenshots from each
                build.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="grid grid-cols-3 gap-4 sm:max-w-md">
                {heroStats.map((s) => (
                  <li key={s.label}>
                    <p className="font-serif text-[28px] leading-none tracking-display-tight text-ink sm:text-[32px]">
                      {s.value}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-eyebrow text-ink-muted">
                      {s.label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button href="#portfolio" variant="secondary" arrow>
                  Browse portfolio
                </Button>
                <Link
                  href={`/work/${featured.slug}`}
                  className="group inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
                >
                  Featured: Voice AI Receptionist
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 ease-hover group-hover:translate-x-1"
                    strokeWidth={1.75}
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="min-w-0 lg:col-span-6 xl:col-span-5">
            <Link
              href={`/work/${featured.slug}`}
              className="group block"
              aria-label={`View case study: ${featured.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-bg-card transition-transform duration-500 ease-hover group-hover:-translate-y-0.5">
                {featured.heroImage && (
                  <Image
                    src={featured.heroImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-hover group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                  <Pill tone="accent">Featured · {featured.index}</Pill>
                  <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-white/90 backdrop-blur-sm">
                    {featured.industry}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="font-serif text-[22px] leading-snug tracking-display text-white sm:text-[26px]">
                    {featured.title.replace(/\.$/, "")}
                  </p>
                  <p className="mt-2 max-w-[40ch] font-serif text-[15px] italic text-accent sm:text-[17px]">
                    {featured.outcome}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-eyebrow text-white/80 transition-colors group-hover:text-white">
                    View project
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </div>

              {previews.length > 0 && (
                <ul className="mt-3 grid grid-cols-3 gap-3">
                  {previews.map((img) => (
                    <li
                      key={img.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-bg-card"
                    >
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                        sizes="120px"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
