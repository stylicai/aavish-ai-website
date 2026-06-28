export type ServiceCategory =
  | "agents"
  | "apps"
  | "automation"
  | "foundations"
  | "generative"
  | "voice"
  | "vision";

export type MainServiceVisual =
  | "agent"
  | "generative"
  | "workflow"
  | "copilot"
  | "rag"
  | "voice";

export type MainService = Service & {
  index: string;
  visual: MainServiceVisual;
  bullets: string[];
};

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  summary: string;
  outcomes: { title: string; body: string }[];
  stack: { label: string; tools: string[] }[];
  faq: { q: string; a: string }[];
  related?: string;
};

export const categoryLabels: Record<ServiceCategory, string> = {
  agents: "Agents",
  apps: "Apps",
  automation: "Automation",
  foundations: "Foundations",
  generative: "Generative AI",
  voice: "Voice",
  vision: "Vision"
};

export const services: Service[] = [
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    category: "agents",
    categoryLabel: "Agents",
    summary:
      "Production-ready autonomous agents that plan, reason, and execute work across your systems.",
    outcomes: [
      { title: "End-to-end execution", body: "Agents own outcomes, not tasks. Multi-step plans with rollback and verification at every node." },
      { title: "Tool-grounded", body: "Bind to your APIs, CRMs, data lakes, and queues with typed schemas, retries, and audit trails." },
      { title: "Observable by default", body: "Every step traced and replayable. Cost, latency, and accuracy dashboards from day one." }
    ],
    stack: [
      { label: "Models", tools: ["Claude 3.5 Sonnet", "GPT-4o", "Llama 3.3"] },
      { label: "Orchestration", tools: ["LangGraph", "Temporal", "Inngest"] },
      { label: "Infra", tools: ["AWS", "Vercel", "Modal"] }
    ],
    faq: [
      { q: "How long does it take to ship an agent?", a: "A focused single-domain agent typically goes live in 4–6 weeks. Complex multi-system orchestration runs 8–12 weeks." },
      { q: "Can agents run on our private models?", a: "Yes. We deploy on open-weight models in your VPC where data residency or cost requires it." },
      { q: "What about safety and oversight?", a: "Every agent ships with role-based approvals, hard limits, and human-in-the-loop checkpoints by default." }
    ],
    related: "ai-powered-loan-assessment-agent"
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    category: "generative",
    categoryLabel: "Generative AI",
    summary:
      "Production generative systems for text, images, and multimodal content — grounded in your brand, policies, and data.",
    outcomes: [
      {
        title: "Brand-locked outputs",
        body: "Style guides, tone rules, and reference embeddings keep every generation on-brand across channels."
      },
      {
        title: "Grounded generation",
        body: "RAG and policy libraries wired in so copy and assets cite sources — not silent hallucinations."
      },
      {
        title: "Human-in-the-loop publish",
        body: "Review queues, redaction, and approval gates before anything reaches customers or ads."
      }
    ],
    stack: [
      { label: "Models", tools: ["Claude 3.5", "GPT-4o", "SDXL", "Flux"] },
      { label: "Orchestration", tools: ["LangGraph", "Temporal"] },
      { label: "Safety", tools: ["Guardrails", "PII scan", "Evals"] }
    ],
    faq: [
      {
        q: "Do you build image and text generation?",
        a: "Yes. We ship unified studios for marketing copy, product imagery, and internal content — with shared brand controls and audit trails."
      },
      {
        q: "How do you prevent off-brand or unsafe outputs?",
        a: "Policy layers, eval suites on your content, and mandatory human review for external-facing assets."
      }
    ]
  },
  {
    slug: "ai-automation",
    title: "AI Workflow Automation",
    category: "automation",
    categoryLabel: "Automation",
    summary:
      "Replace brittle scripts and manual handoffs with reliable AI-native workflows across teams.",
    outcomes: [
      { title: "Compress weeks into minutes", body: "Cross-team workflows that were measured in days now complete in seconds, with audit logs." },
      { title: "Adaptive logic", body: "LLM-routed steps with deterministic fallbacks. Never opaque, never fragile." },
      { title: "Drop-in adoption", body: "Integrates with existing tools (Slack, Notion, HubSpot, internal APIs). No retraining required." }
    ],
    stack: [
      { label: "Workflow", tools: ["Temporal", "n8n", "Inngest"] },
      { label: "Models", tools: ["GPT-4o", "Gemini 2.0", "Claude"] },
      { label: "Integrations", tools: ["Slack", "HubSpot", "Salesforce", "Notion"] }
    ],
    faq: [
      { q: "Can we trigger workflows from Slack or email?", a: "Yes. We provide first-class integrations for Slack, email, webhooks, and scheduled events." },
      { q: "Do you run the workflows or do we?", a: "Either. We can host and operate them, hand them off to your team, or build in your existing infra." }
    ],
    related: "shipment-exception-communication-agent"
  },
  {
    slug: "private-llm-deployment",
    title: "Private LLM Deployment",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Deploy and operate open-weight models in your VPC with full control over data, latency, and cost.",
    outcomes: [
      { title: "Zero data egress", body: "Models, prompts, and embeddings never leave your perimeter. Compliance ready out of the box." },
      { title: "Predictable cost", body: "Flat infrastructure cost replaces per-token billing. Useful at scale." },
      { title: "Tuned for your data", body: "LoRA or full fine-tunes with evaluation pipelines you can re-run forever." }
    ],
    stack: [
      { label: "Models", tools: ["Llama 3.3", "Qwen 2.5", "Mistral Large"] },
      { label: "Serving", tools: ["vLLM", "TGI", "TensorRT-LLM"] },
      { label: "Infra", tools: ["AWS", "GCP", "On-prem"] }
    ],
    faq: [
      { q: "Which open models do you recommend?", a: "Llama 3.3 70B for general reasoning. Qwen 2.5 for code. Mistral for cost-efficient inference. We pick after evals on your data." }
    ]
  },
  {
    slug: "rag-systems",
    title: "RAG Systems",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Retrieval-augmented generation that grounds models in your data, with measurable accuracy.",
    outcomes: [
      { title: "Grounded answers", body: "Every response cites its sources. No silent hallucinations." },
      { title: "Continuous ingestion", body: "Pipelines that handle PDFs, Notion, Slack, Drive, databases, and SaaS APIs in one place." },
      { title: "Tunable retrieval", body: "Hybrid search, rerankers, query rewriting, and freshness controls all expose tunable knobs." }
    ],
    stack: [
      { label: "Vector store", tools: ["pgvector", "Qdrant", "Pinecone"] },
      { label: "Embeddings", tools: ["Voyage", "OpenAI", "Cohere"] },
      { label: "Rerankers", tools: ["Cohere Rerank", "BGE", "Custom"] }
    ],
    faq: [
      { q: "What accuracy do we expect?", a: "Tuned RAG systems typically reach 88–96% answer precision on closed-domain knowledge bases." }
    ]
  },
  {
    slug: "custom-ai-software",
    title: "Custom AI Software",
    category: "apps",
    categoryLabel: "Apps",
    summary:
      "Bespoke AI products designed and engineered end-to-end for your specific operations.",
    outcomes: [
      { title: "Designed for adoption", body: "Beautiful, fast interfaces that real operators actually use every day." },
      { title: "Ship in weeks", body: "From wireframe to production in 6–10 weeks with our reference architecture." },
      { title: "Own everything", body: "You own the code, models, and infrastructure. No vendor lock-in." }
    ],
    stack: [
      { label: "Frontend", tools: ["Next.js", "React", "Tailwind"] },
      { label: "Backend", tools: ["FastAPI", "Postgres", "Redis"] },
      { label: "AI", tools: ["OpenAI", "Anthropic", "Open-source"] }
    ],
    faq: [
      { q: "Do you do design as well as engineering?", a: "Yes. We design and engineer as one team. Same studio, same standards." }
    ]
  },
  {
    slug: "voice-ai",
    title: "Voice AI",
    category: "voice",
    categoryLabel: "Voice",
    summary:
      "Real-time voice agents for support, sales, and operations with sub-second latency.",
    outcomes: [
      { title: "Sub-second latency", body: "End-to-end interrupt-able voice with <800ms response time." },
      { title: "Telephony native", body: "Twilio, Vonage, SIP, WebRTC — all production-ready." },
      { title: "Quality at scale", body: "Concurrent calls, recorded transcripts, sentiment analysis, and reviewable evals." }
    ],
    stack: [
      { label: "ASR", tools: ["Deepgram", "Whisper", "Azure"] },
      { label: "TTS", tools: ["ElevenLabs", "Cartesia", "Azure"] },
      { label: "Realtime", tools: ["OpenAI Realtime", "Vapi", "LiveKit"] }
    ],
    faq: [
      { q: "Can it integrate with our existing call center?", a: "Yes. SIP, Twilio, and Vonage are all supported. We can also bridge to existing Genesys or NICE deployments." }
    ]
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    category: "vision",
    categoryLabel: "Vision",
    summary:
      "Vision systems for quality control, document understanding, retail analytics, and more.",
    outcomes: [
      { title: "Document AI", body: "Parse invoices, contracts, and tables with structured-output guarantees." },
      { title: "Real-time inference", body: "Edge deployment via ONNX and TensorRT for sub-30ms latency." },
      { title: "Continuous learning", body: "Active learning pipelines that improve weekly without retraining from scratch." }
    ],
    stack: [
      { label: "Models", tools: ["YOLO11", "SAM 2", "Gemini Vision"] },
      { label: "Inference", tools: ["ONNX", "TensorRT", "CoreML"] },
      { label: "Pipelines", tools: ["Roboflow", "Label Studio"] }
    ],
    faq: [
      { q: "Can it run on the edge?", a: "Yes. We deploy to Jetson, mobile, and browser via WebGPU when latency or cost demands it." }
    ]
  },
  {
    slug: "ai-saas-products",
    title: "AI SaaS Products",
    category: "apps",
    categoryLabel: "Apps",
    summary:
      "End-to-end engineering for AI-native SaaS — from positioning to billing to scaling.",
    outcomes: [
      { title: "Zero-to-launch", body: "From concept to public launch in 12–16 weeks, including billing and onboarding." },
      { title: "Built to scale", body: "Multi-tenant isolation, audit logs, SSO, and SOC 2-ready foundations." },
      { title: "Designed to convert", body: "We design landing, onboarding, and pricing to compound retention." }
    ],
    stack: [
      { label: "App", tools: ["Next.js", "Postgres", "Stripe"] },
      { label: "Auth", tools: ["Clerk", "WorkOS"] },
      { label: "AI", tools: ["OpenAI", "Anthropic", "Open-source"] }
    ],
    faq: []
  },
  {
    slug: "fine-tuning",
    title: "Model Fine-Tuning",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Domain-specific fine-tuning that turns generic models into specialists for your workflows.",
    outcomes: [
      { title: "5–10× cost reduction", body: "A fine-tuned smaller model often beats GPT-4o on your domain at a fraction of the price." },
      { title: "Eval-first", body: "We build the evals before the model. You always know if a change makes it better." },
      { title: "Continuous improvement", body: "A re-runnable pipeline you own forever. Data flywheel included." }
    ],
    stack: [
      { label: "Frameworks", tools: ["Axolotl", "Unsloth", "PEFT"] },
      { label: "Compute", tools: ["Modal", "AWS", "Lambda"] },
      { label: "Evals", tools: ["Braintrust", "Inspect", "Custom"] }
    ],
    faq: []
  },
  {
    slug: "data-engineering",
    title: "AI Data Engineering",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Robust data pipelines that turn messy enterprise data into clean fuel for AI systems.",
    outcomes: [
      { title: "From raw to ready", body: "Ingestion, cleaning, embedding, and indexing in one pipeline you can monitor." },
      { title: "Schema-first", body: "Typed contracts at every boundary. No silent data drift." },
      { title: "Incremental by default", body: "Watch folders, change data capture, and webhook ingestion — nothing recomputed twice." }
    ],
    stack: [
      { label: "Orchestration", tools: ["Dagster", "Prefect", "Airflow"] },
      { label: "Storage", tools: ["Postgres", "Snowflake", "S3"] },
      { label: "Streaming", tools: ["Kafka", "Redpanda"] }
    ],
    faq: []
  },
  {
    slug: "agent-orchestration",
    title: "Multi-Agent Orchestration",
    category: "agents",
    categoryLabel: "Agents",
    summary:
      "Coordinate teams of agents the way you'd coordinate teams of humans — with roles, handoffs, and review.",
    outcomes: [
      { title: "Specialized agents", body: "Each agent is small, focused, and replaceable. The system is the asset." },
      { title: "Reliable handoffs", body: "Typed messages, retries, and human approval points between every agent." },
      { title: "Cost-controlled", body: "Budgets per agent and per run. Loops are bounded. Halts are explicit." }
    ],
    stack: [
      { label: "Orchestration", tools: ["LangGraph", "CrewAI", "Custom"] },
      { label: "Messaging", tools: ["Temporal", "Redis", "NATS"] }
    ],
    faq: []
  },
  {
    slug: "ai-strategy-audits",
    title: "AI Strategy & Audits",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "A senior team that maps the highest-leverage AI opportunities in your business and how to ship them.",
    outcomes: [
      { title: "Quantified opportunity map", body: "We rank every candidate use case by impact, effort, and risk — not by hype." },
      { title: "Reference architecture", body: "You leave with a buildable architecture, not a 60-page deck." },
      { title: "First system in 30 days", body: "We pair the strategy with one shippable system to prove ROI." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Copilots",
    category: "apps",
    categoryLabel: "Apps",
    summary:
      "Conversational interfaces that actually solve problems, integrated where your users already work.",
    outcomes: [
      { title: "Deeply integrated", body: "Reads your data, takes actions, and writes back. Not a chat veneer." },
      { title: "Brand-native UX", body: "Designed to feel like a first-class part of your product, not a third-party widget." },
      { title: "Measurable deflection", body: "Track resolution rate, escalation rate, and CSAT from day one." }
    ],
    stack: [
      { label: "Frontend", tools: ["Next.js", "React"] },
      { label: "RAG", tools: ["pgvector", "Voyage"] }
    ],
    faq: []
  },
  {
    slug: "ai-document-processing",
    title: "Document Intelligence",
    category: "vision",
    categoryLabel: "Vision",
    summary:
      "Extract structured data from contracts, invoices, claims, and forms at production accuracy.",
    outcomes: [
      { title: "Structured outputs", body: "Schema-guaranteed JSON with confidence scores per field." },
      { title: "Human review built-in", body: "Routes low-confidence extractions to reviewers automatically." },
      { title: "Audit-ready", body: "Every field traced back to its source coordinates in the original document." }
    ],
    stack: [
      { label: "OCR", tools: ["Textract", "Tesseract", "PaddleOCR"] },
      { label: "Models", tools: ["GPT-4o", "Claude", "Gemini"] }
    ],
    faq: []
  },
  {
    slug: "ai-search",
    title: "Semantic Search",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Search that understands intent. Across product catalogues, documentation, and internal knowledge bases.",
    outcomes: [
      { title: "Hybrid ranking", body: "Combines lexical (BM25), vector, and learned-to-rank signals for the best of all worlds." },
      { title: "Query understanding", body: "Rewrites, expansions, and filter extraction happen before retrieval." },
      { title: "Personalized", body: "Per-user reranking using behaviour signals you already have." }
    ],
    stack: [
      { label: "Search", tools: ["Typesense", "Elastic", "OpenSearch"] },
      { label: "Vectors", tools: ["pgvector", "Qdrant"] }
    ],
    faq: []
  },
  {
    slug: "ai-personalization",
    title: "Personalization Engines",
    category: "apps",
    categoryLabel: "Apps",
    summary:
      "Real-time personalization for product, content, and pricing — engineered to lift revenue measurably.",
    outcomes: [
      { title: "Measurable lift", body: "We A/B test every change. If it doesn't move the metric, it doesn't ship." },
      { title: "Real-time", body: "Inference under 50ms at any scale. Edge-deployed when latency matters." },
      { title: "Privacy first", body: "First-party data only. No third-party trackers, ever." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-internal-tools",
    title: "Internal AI Tools",
    category: "apps",
    categoryLabel: "Apps",
    summary:
      "Operator dashboards, reviewers, and copilots that turn your back-office into a force multiplier.",
    outcomes: [
      { title: "Workflow-shaped", body: "Built around how your operators actually work, not around the API." },
      { title: "Approval gates", body: "Every AI suggestion is reviewable, overridable, and auditable." },
      { title: "Iterate fast", body: "Internal users mean we ship daily. Continuous improvement is the default." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-evaluations",
    title: "Evaluations & Observability",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "The evaluation framework, dashboards, and CI pipelines you need to ship AI systems safely.",
    outcomes: [
      { title: "Eval-driven dev", body: "No prompt or model change ships without passing your evals first." },
      { title: "Production tracing", body: "Every step of every run, replayable for months." },
      { title: "Cost & latency budgets", body: "Hard limits on tokens and time. Alerts when you drift." }
    ],
    stack: [
      { label: "Evals", tools: ["Braintrust", "Inspect", "Phoenix"] },
      { label: "Tracing", tools: ["Langfuse", "OpenTelemetry"] }
    ],
    faq: []
  },
  {
    slug: "ai-mlops",
    title: "MLOps & Infrastructure",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Set up the model registry, deployment pipelines, and monitoring you need to run AI in production.",
    outcomes: [
      { title: "One-command deploys", body: "Models, prompts, and agents all deploy through the same CI pipeline." },
      { title: "Safe rollouts", body: "Shadow deploys, canary deploys, instant rollback. Standard, not a luxury." },
      { title: "Cost-aware", body: "Per-tenant cost tracking. Per-feature P&L. Real dashboards." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-voice-cloning",
    title: "Custom Voice Models",
    category: "voice",
    categoryLabel: "Voice",
    summary:
      "Branded voice models for IVR, narration, and accessibility — with full rights and traceability.",
    outcomes: [
      { title: "Brand-owned voice", body: "Train, own, and govern the voice. Not licensed from a third party." },
      { title: "Multilingual", body: "Same voice across 30+ languages, kept consistent through cloning controls." },
      { title: "Ethics built-in", body: "Watermarking and consent management included." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-image-generation",
    title: "Image & Asset Generation",
    category: "vision",
    categoryLabel: "Vision",
    summary:
      "On-brand image, asset, and 3D generation pipelines wired into your content workflows.",
    outcomes: [
      { title: "Brand consistency", body: "Style-locked generation with reference embeddings and prompt templating." },
      { title: "Editor-friendly", body: "Built into Figma, Sanity, or your CMS — wherever your creators work." },
      { title: "Production volume", body: "Bulk pipelines that respect rate limits and budgets." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-product-discovery",
    title: "AI Product Discovery",
    category: "apps",
    categoryLabel: "Apps",
    summary:
      "We help you find the right thing to build before we build it. Senior, opinionated, fast.",
    outcomes: [
      { title: "Two-week sprint", body: "From problem to validated prototype in 10 working days." },
      { title: "Real users tested", body: "We test the prototype with your actual customers, not stakeholders." },
      { title: "Buildable output", body: "You leave with a working prototype, technical plan, and signed estimate." }
    ],
    stack: [],
    faq: []
  },
  {
    slug: "ai-team-augmentation",
    title: "Embedded AI Engineers",
    category: "foundations",
    categoryLabel: "Foundations",
    summary:
      "Senior AI engineers embedded into your team for the duration of a critical initiative.",
    outcomes: [
      { title: "Senior only", body: "8+ years average. They've shipped AI in production before. Pairing welcomed." },
      { title: "Outcome-bound", body: "We commit to outcomes, not hours. Same incentive as you." },
      { title: "Knowledge stays", body: "We document, train, and hand off. You aren't dependent on us at the end." }
    ],
    stack: [],
    faq: []
  }
];

export const servicesByCategory: Record<ServiceCategory, Service[]> = {
  agents: services.filter((s) => s.category === "agents"),
  apps: services.filter((s) => s.category === "apps"),
  automation: services.filter((s) => s.category === "automation"),
  foundations: services.filter((s) => s.category === "foundations"),
  generative: services.filter((s) => s.category === "generative"),
  voice: services.filter((s) => s.category === "voice"),
  vision: services.filter((s) => s.category === "vision")
};

/** Core services shown on the services page (no ML/DL/vision specialty lines). */
const mainServiceConfig: {
  slug: string;
  index: string;
  visual: MainServiceVisual;
  bullets: string[];
}[] = [
  {
    slug: "ai-agent-development",
    index: "01",
    visual: "agent",
    bullets: [
      "Multi-step plans with verification and human approval gates",
      "Typed tool calls to your APIs, CRMs, and data systems",
      "Full trace logs — every run replayable for audit and ops"
    ]
  },
  {
    slug: "generative-ai",
    index: "02",
    visual: "generative",
    bullets: [
      "Text, image, and multimodal pipelines with brand-locked controls",
      "Grounded in your guidelines, product data, and policy library",
      "Review queues and guardrails before external publish"
    ]
  },
  {
    slug: "ai-automation",
    index: "03",
    visual: "workflow",
    bullets: [
      "LLM-routed steps with deterministic fallbacks when models abstain",
      "Triggers from Slack, email, webhooks, and scheduled jobs",
      "Shadow mode and audit trails before full production cutover"
    ]
  },
  {
    slug: "custom-ai-software",
    index: "04",
    visual: "copilot",
    bullets: [
      "Operator dashboards and embedded copilots teams use daily",
      "Multi-tenant SaaS or private deploy with auth and observability",
      "Streaming, citations, and feedback loops built in from sprint one"
    ]
  },
  {
    slug: "rag-systems",
    index: "05",
    visual: "rag",
    bullets: [
      "Hybrid retrieval with rerankers and query rewriting",
      "Continuous ingestion from docs, wikis, tickets, and APIs",
      "Cited answers with eval dashboards tied to your content"
    ]
  },
  {
    slug: "voice-ai",
    index: "06",
    visual: "voice",
    bullets: [
      "Sub-second realtime voice with interruption handling",
      "Telephony-native — Twilio, SIP, WebRTC production-ready",
      "Transcripts, sentiment routing, and call-quality evals at scale"
    ]
  }
];

export const mainServices: MainService[] = mainServiceConfig.map((cfg) => {
  const service = services.find((s) => s.slug === cfg.slug);
  if (!service) throw new Error(`Main service not found: ${cfg.slug}`);
  return { ...service, index: cfg.index, visual: cfg.visual, bullets: cfg.bullets };
});

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
