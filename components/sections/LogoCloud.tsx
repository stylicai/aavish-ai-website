import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Eyebrow } from "@/components/ui/Eyebrow";

const logos = [
 "Sequence Capital",
 "Linehaul",
 "Stylic",
 "Northbeam",
 "Polestar Health",
 "Almonds Legal",
 "Veridia",
 "Coastline Pay",
 "Tessera",
 "Hartwell",
 "Arclight",
 "Northwind"
];

export function LogoCloud() {
 return (
    <section className="py-8 bg-bg-page">
 <Container size="wide">
 <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
 <div className="md:w-56 shrink-0">
 <Eyebrow>Trusted in production</Eyebrow>
 </div>
 <Marquee
 className="flex-1"
 speed="slow"
 items={logos.map((label) => (
 <span
 key={label}
 className="font-serif text-[22px] leading-none tracking-display-tight text-ink-body/70 hover:text-ink transition-colors"
 >
 {label}
 </span>
 ))}
 />
 </div>
 </Container>
 </section>
 );
}
