"use client";

import { NodeNetwork } from "@/components/visuals/NodeNetwork";
import { UnderwritingAgentPanel } from "@/components/visuals/UnderwritingAgentPanel";
import { VoiceWave } from "@/components/visuals/VoiceWave";
import { RAGDiagram } from "@/components/visuals/RAGDiagram";
import { WorkflowGraph } from "@/components/visuals/WorkflowGraph";
import { AgentPlan } from "@/components/visuals/AgentPlan";
import { cn } from "@/lib/utils";

export function CaseStudyVisualFallback({
  slug,
  className
}: {
  slug: string;
  className?: string;
}) {
  const wrap = (child: React.ReactNode) => (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration",
        className
      )}
    >
      {child}
    </div>
  );

  if (
    slug === "ai-powered-loan-assessment-agent" ||
    slug.includes("financial") ||
    slug.includes("resume")
  ) {
    return wrap(<UnderwritingAgentPanel className="h-full rounded-none border-0" />);
  }

  if (
    slug === "shipment-exception-communication-agent" ||
    slug.includes("voice") ||
    slug.includes("receptionist") ||
    slug.includes("realestate")
  ) {
    return wrap(<VoiceWave className="h-full" />);
  }

  if (slug === "stylic-ai-platform") {
    return wrap(
      <>
        <div className="absolute inset-0 bg-dot-grid-dark opacity-40" aria-hidden />
        <NodeNetwork className="absolute inset-0" />
      </>
    );
  }

  if (slug.includes("rag") || slug.includes("legal") || slug.includes("healthcare")) {
    return wrap(<RAGDiagram className="h-full rounded-none border-0" />);
  }

  if (slug.includes("agent") || slug.includes("research") || slug.includes("lead-gen")) {
    return wrap(<AgentPlan className="h-full rounded-none border-0" />);
  }

  if (
    slug.includes("saas") ||
    slug.includes("fastapi") ||
    slug.includes("flask") ||
    slug.includes("inventory") ||
    slug.includes("analytics")
  ) {
    return wrap(<WorkflowGraph className="h-full rounded-none border-0" />);
  }

  return wrap(<UnderwritingAgentPanel className="h-full rounded-none border-0" />);
}
