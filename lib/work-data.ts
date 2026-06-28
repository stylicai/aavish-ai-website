import { portfolioProjects } from "./portfolio-data";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  industry: string;
  title: string;
  outcome: string;
  problem: string;
  result: string;
  solution: string[];
  capabilities: string[];
  stack: { label: string; tools: string[] }[];
  metrics: { value: string; label: string }[];
  quote: { body: string; author: string; role: string };
  timeline: string;
  team: string;
  /** Portfolio-only metadata */
  source?: "client" | "portfolio";
  categories?: string[];
  categoryTags?: string[];
  client?: string;
  role?: string;
  year?: string;
  architecture?: string;
  heroImage?: string;
  images?: ProjectImage[];
};

/** Featured client deployments (homepage + top of work index). */
export const clientCaseStudies: CaseStudy[] = [
  {
    slug: "ai-powered-loan-assessment-agent",
    source: "client",
    index: "01",
    industry: "Fintech",
    title: "An AI agent that underwrites loans in seconds.",
    outcome: "80% reduction in manual review time.",
    problem:
      "A digital lender was buried in 4,000 loan files per week. Underwriters spent 35 minutes per file pulling documents, running checks, and writing memos — the queue grew faster than the team.",
    result:
      "An agent that fetches, classifies, verifies, and writes the underwriting memo in 90 seconds. Humans approve the final call. Throughput tripled. Defaults stayed flat.",
    solution: [
      "Document agent that ingests bank statements, KYC packets, and bureau files",
      "Multi-step verification with deterministic checks and LLM reasoning",
      "Underwriting memo generation with structured outputs and explainability",
      "Reviewer dashboard that surfaces only edge cases to humans",
      "Audit-grade trace logs for every decision and source"
    ],
    capabilities: [
      "Multi-agent orchestration",
      "Document intelligence",
      "RAG over policy library",
      "Operator dashboard",
      "Audit logs & compliance reporting"
    ],
    stack: [
      { label: "Models", tools: ["Claude 3.5 Sonnet", "GPT-4o", "Fine-tuned Llama 3.1"] },
      { label: "Backend", tools: ["FastAPI", "Postgres", "pgvector", "Temporal"] },
      { label: "Frontend", tools: ["Next.js", "Tailwind", "TanStack"] },
      { label: "Infrastructure", tools: ["AWS (eu-west)", "S3", "OpenSearch"] }
    ],
    metrics: [
      { value: "80%", label: "Reduction in manual review time" },
      { value: "3×", label: "Throughput per underwriter" },
      { value: "94%", label: "Decision agreement with humans" }
    ],
    quote: {
      body: "Aavish embedded with our risk team like senior engineers, not a vendor. The system has been live for nine months without an incident.",
      author: "Riya Mehta",
      role: "VP Risk, Sequence Capital"
    },
    timeline: "10 weeks",
    team: "3 engineers"
  },
  {
    slug: "shipment-exception-communication-agent",
    source: "client",
    index: "02",
    industry: "Logistics",
    title: "A voice agent that handles 12,000 shipment exceptions a day.",
    outcome: "92% first-call resolution.",
    problem:
      "A 3PL was drowning in exception calls — delays, missed pickups, wrong addresses. Average handle time was 9 minutes. Customer satisfaction was sliding even as headcount grew.",
    result:
      "A bilingual voice agent that triages, communicates, and resolves shipment exceptions end-to-end. Humans only handle escalations now.",
    solution: [
      "Sub-second realtime voice agent with interruption handling",
      "Live integration with the warehouse management system",
      "Bilingual support across English and Hindi with dialect handling",
      "Sentiment routing — frustrated callers always reach a human",
      "Continuous evals on call quality and resolution accuracy"
    ],
    capabilities: [
      "Voice AI",
      "Realtime tool calling",
      "Telephony integration",
      "Sentiment analysis",
      "Call quality evals"
    ],
    stack: [
      { label: "Realtime", tools: ["OpenAI Realtime", "Twilio", "LiveKit"] },
      { label: "Models", tools: ["GPT-4o", "Whisper", "ElevenLabs"] },
      { label: "Backend", tools: ["FastAPI", "Postgres", "Redis"] },
      { label: "Observability", tools: ["Langfuse", "Datadog"] }
    ],
    metrics: [
      { value: "92%", label: "First-call resolution" },
      { value: "780ms", label: "Median voice latency" },
      { value: "12k", label: "Calls handled daily" }
    ],
    quote: {
      body: "It sounds like our best agent on her best day. And it handles 12,000 calls before lunch.",
      author: "Arjun Kapoor",
      role: "Head of Operations, Linehaul"
    },
    timeline: "12 weeks",
    team: "4 engineers"
  },
  {
    slug: "stylic-ai-platform",
    source: "client",
    index: "03",
    industry: "Retail & Fashion",
    title: "Stylic.ai — an AI fashion stylist used by 8,000 shoppers.",
    outcome: "4.6× lift in basket size.",
    problem:
      "An apparel brand wanted personalization that felt human — not a recommender that simply re-ranks the same SKUs. They needed a stylist, not an algorithm.",
    result:
      "Stylic.ai — a consumer product that profiles taste, generates outfits across the catalogue, and curates a wardrobe. Live across web and mobile.",
    solution: [
      "Style profile that captures aesthetic preference in under 90 seconds",
      "Outfit generation across the live catalogue with constraint solving",
      "Wardrobe upload with vision-based garment understanding",
      "Personalized feed updated in real time on every interaction",
      "Branded conversational interface for follow-up styling questions"
    ],
    capabilities: [
      "Vision + multimodal AI",
      "Personalization engine",
      "Conversational UI",
      "Mobile + web product",
      "Production-grade analytics"
    ],
    stack: [
      { label: "Frontend", tools: ["Next.js", "React Native", "Tailwind"] },
      { label: "AI", tools: ["GPT-4o Vision", "CLIP", "Custom rerankers"] },
      { label: "Backend", tools: ["FastAPI", "Postgres", "pgvector"] },
      { label: "Infra", tools: ["AWS", "Cloudflare", "Mux"] }
    ],
    metrics: [
      { value: "4.6×", label: "Lift in basket size" },
      { value: "80k", label: "Active monthly users" },
      { value: "23min", label: "Average session length" }
    ],
    quote: {
      body: "Aavish designed and engineered our flagship product. The team felt internal from day one.",
      author: "Naveen Iyer",
      role: "Founder, Stylic"
    },
    timeline: "16 weeks",
    team: "5 engineers + 1 designer"
  },
  {
    slug: "claims-triage-copilot",
    source: "client",
    index: "04",
    industry: "HealthTech",
    title: "A copilot that triages 50,000 insurance claims per month.",
    outcome: "63% faster claim decisions.",
    problem:
      "A health insurer needed to triage and route incoming claims faster, without compromising medical accuracy or audit defensibility.",
    result:
      "A copilot that pre-reads every claim, surfaces relevant policy clauses, and proposes a decision with confidence scoring. Humans approve or override.",
    solution: [
      "Document AI that parses claims, scans, and prescriptions",
      "Policy RAG over the entire insurer's coverage library",
      "Decision proposals with traced citations to policy text",
      "Reviewer dashboard with override tracking",
      "Weekly evals against expert-graded decisions"
    ],
    capabilities: ["Document intelligence", "RAG", "Copilot UX", "Evals"],
    stack: [
      { label: "Models", tools: ["Claude 3.5 Sonnet", "Custom rerankers"] },
      { label: "Backend", tools: ["FastAPI", "Postgres", "pgvector"] },
      { label: "Frontend", tools: ["Next.js", "Tailwind"] }
    ],
    metrics: [
      { value: "63%", label: "Faster claim decisions" },
      { value: "50k", label: "Claims/month" },
      { value: "98.4%", label: "Audit pass rate" }
    ],
    quote: {
      body: "The system handles the boring 90% with confidence. Our team finally has time for the cases that actually need them.",
      author: "Dr. Anika Roy",
      role: "Chief Medical Officer"
    },
    timeline: "14 weeks",
    team: "4 engineers"
  },
  {
    slug: "contract-review-agent",
    source: "client",
    index: "05",
    industry: "Legal Tech",
    title: "An agent that reviews 600-page contracts in eight minutes.",
    outcome: "11× faster contract review.",
    problem:
      "A law firm was billing hours that clients increasingly refused to pay for: redlining boilerplate clauses across thousands of NDAs and MSAs.",
    result:
      "An agent that reads, classifies, and redlines contracts against the firm's playbook. Partners now review the agent's suggestions instead of reading the document line-by-line.",
    solution: [
      "Clause classifier fine-tuned on firm-specific playbook",
      "Risk scoring per clause with justifications",
      "Side-by-side redline UI with one-click acceptance",
      "Versioned audit trail for every change",
      "Integrated with iManage and SharePoint"
    ],
    capabilities: ["Document intelligence", "Fine-tuning", "RAG", "Operator UX"],
    stack: [
      { label: "Models", tools: ["Fine-tuned Llama 3.1 70B", "GPT-4o"] },
      { label: "Backend", tools: ["FastAPI", "Postgres", "S3"] }
    ],
    metrics: [
      { value: "11×", label: "Faster review" },
      { value: "$1.4M", label: "Partner hours saved (annual)" },
      { value: "96%", label: "Clause-classification accuracy" }
    ],
    quote: {
      body: "We thought we'd have to lose this work to an LLM tool. Instead we kept it and grew margin.",
      author: "Sameer Patel",
      role: "Managing Partner"
    },
    timeline: "8 weeks",
    team: "3 engineers"
  },
  {
    slug: "merchant-onboarding-automation",
    source: "client",
    index: "06",
    industry: "Payments",
    title: "Merchant onboarding compressed from 7 days to 11 minutes.",
    outcome: "96% reduction in onboarding time.",
    problem:
      "A payments processor had a 7-day onboarding queue. Manual KYB checks, document verification, and risk scoring were the bottleneck.",
    result:
      "An automated onboarding workflow that pulls public records, verifies documents, and risk-scores in real time. Humans only see the high-risk 4%.",
    solution: [
      "Multi-source KYB enrichment (registries, sanctions, credit)",
      "Document verification with stamped audit trails",
      "Risk model with explainable feature attribution",
      "Reviewer dashboard for the long tail",
      "Continuous evals against historic outcomes"
    ],
    capabilities: ["Workflow automation", "Document AI", "Risk modeling"],
    stack: [
      { label: "Workflow", tools: ["Temporal", "FastAPI"] },
      { label: "AI", tools: ["GPT-4o", "Custom classifiers"] }
    ],
    metrics: [
      { value: "96%", label: "Faster onboarding" },
      { value: "11 min", label: "Median time to live" },
      { value: "0.3%", label: "Fraud rate (vs 1.2% before)" }
    ],
    quote: {
      body: "Faster, safer, cheaper. We don't usually get all three.",
      author: "Karan Suri",
      role: "VP Operations"
    },
    timeline: "9 weeks",
    team: "3 engineers"
  }
];

export const industries = [
  "Fintech",
  "HealthTech",
  "E-Commerce",
  "SaaS/B2B",
  "EdTech",
  "Logistics",
  "Legal Tech",
  "HR Tech",
  "Manufacturing",
  "Retail",
  "Media",
  "Real Estate"
];

export { portfolioProjects };

const portfolioWithSource: CaseStudy[] = portfolioProjects.map((p, i) => ({
  ...p,
  source: "portfolio" as const,
  index: String(i + 1).padStart(2, "0")
}));

/** Work index + detail pages — engineering portfolio (20 projects). */
export const caseStudies: CaseStudy[] = portfolioWithSource;

/** Includes homepage client case studies (not listed on /work). */
export const allCaseStudies: CaseStudy[] = [...clientCaseStudies, ...portfolioWithSource];

export const portfolioCategories = [
  { id: "all", label: "All" },
  { id: "voice", label: "Voice AI" },
  { id: "agents", label: "Multi-Agent" },
  { id: "rag", label: "RAG" },
  { id: "chatbot", label: "Chatbots" },
  { id: "saas", label: "SaaS" },
  { id: "backend", label: "Backend" }
] as const;

export function getCaseStudy(slug: string) {
  return allCaseStudies.find((c) => c.slug === slug);
}

export function filterCaseStudies(
  filter: string,
  items: CaseStudy[] = caseStudies
): CaseStudy[] {
  if (filter === "all") return items;
  return items.filter((c) => c.categories?.includes(filter));
}
