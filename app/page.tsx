import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Capabilities } from "@/components/sections/Capabilities";
import { DeployedShowcase } from "@/components/sections/DeployedShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CTASection } from "@/components/sections/CTASection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
 title: "Aavish AI Lab — We build AI systems for real business operations",
 description:
 "Aavish AI Lab is a global AI systems engineering studio. Production-grade agents, RAG, automation, and custom AI software for real businesses.",
 alternates: { canonical: "/" }
};

export default function HomePage() {
 return (
 <>
 <Hero />
 <Mission />
 <Capabilities />
 <DeployedShowcase />
 <ProcessTimeline />
 <SelectedWork />
 <CTASection />
 <TrustedBy />
 <FinalCTA />
 </>
 );
}
