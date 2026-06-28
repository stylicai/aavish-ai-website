import { cn } from "@/lib/utils";

type Props = {
 category?: string;
 seed?: number;
 featured?: boolean;
 className?: string;
 title?: string;
};

// Hash a string into a deterministic small number
function hash(str: string) {
 let h = 0;
 for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
 return Math.abs(h);
}

export function BlogCanvas({ category, seed = 0, featured = false, className, title = "" }: Props) {
 const h = (hash(title) + seed) % 6;

 return (
 <div
 className={cn(
 "relative w-full overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration",
 featured ? "aspect-[16/10]" : "aspect-[4/3]",
 className
 )}
 >
 <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />
 <div
 aria-hidden
 className="absolute"
 style={{
 left: `${15 + (h * 7) % 40}%`,
 top: `${20 + (h * 11) % 35}%`,
 height: featured ? "320px" : "200px",
 width: featured ? "320px" : "200px",
 background:
 "radial-gradient(circle, rgba(255,112,0,0.45) 0%, rgba(255,112,0,0) 70%)"
 }}
 />
 {/* Animated lines */}
 <svg
 aria-hidden
 viewBox="0 0 200 100"
 preserveAspectRatio="none"
 className="absolute inset-0 h-full w-full opacity-70"
 >
 <g stroke="rgba(255,112,0,0.35)" fill="none" strokeWidth="0.3" strokeDasharray="0.8 1">
 <path d={`M0 ${30 + h * 5} Q 50 ${15 + h * 3}, 100 ${40 + h * 4} T 200 ${20 + h * 6}`} className="animate-connection-pulse" />
 <path d={`M0 ${70 - h * 5} Q 60 ${85 - h * 4}, 120 ${60 + h * 3} T 200 ${50 + h * 5}`} className="animate-connection-pulse" style={{ animationDelay: "0.8s" }} />
 </g>
 {Array.from({ length: 8 }).map((_, i) => (
 <circle
 key={i}
 cx={(i * 27 + h * 13) % 200}
 cy={(i * 19 + h * 11) % 100}
 r="0.7"
 fill="#FF7000"
 />
 ))}
 </svg>
 {/* Label */}
 <div className="absolute left-5 top-5 flex items-center gap-2">
 {featured && (
 <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
 Featured post
 </span>
 )}
 {category && !featured && (
 <span className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-dark-body">
 {category}
 </span>
 )}
 </div>
 </div>
 );
}
