import type { CaseStudy } from "./work-data";

/** Portfolio projects imported from engineering portfolio (20 production builds). */

export const portfolioProjects: CaseStudy[] = [
    {
      slug: "voice-ai-receptionist",
      index: "01",
      industry: "Voice AI",
      categories: [
        "voice"
      ],
      categoryTags: [
        "Voice AI",
        "Twilio",
        "GPT-4o"
      ],
      title: "Voice AI Receptionist for Healthcare.",
      outcome: "780ms — Avg response latency",
      problem: "The client's clinics were missing 30% of inbound calls outside office hours, losing roughly $80K/month in bookings. Existing IVR menus frustrated patients and a human call center quoted $25K/month — too expensive for the value delivered. They needed an always-on receptionist that sounded like a human, integrated with their EHR and respected HIPAA compliance.",
      result: "A 24/7 voice AI receptionist that answers calls, books appointments, handles FAQs and triages urgent issues for a network of clinics. Replaced a 4-person front-desk team during after-hours and weekends and now handles 2,000+ calls every month with sub-800 ms response latency.",
      solution: [
        "Real-time voice agent built with Twilio Media Streams, Deepgram Nova-2 STT and ElevenLabs Turbo TTS",
        "GPT-4o with function-calling for slot-filling and EHR appointment booking",
        "LangGraph state machine to handle interruptions, barge-in and confirmations",
        "Integrated with eClinicalWorks EHR and Google Calendar via secure server-to-server APIs",
        "HIPAA-compliant call logging, PII redaction at rest, and a smooth human-handoff flow"
      ],
      capabilities: [
        "Voice AI",
        "Twilio",
        "GPT-4o"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "Twilio",
            "Deepgram",
            "ElevenLabs",
            "GPT-4o",
            "LangGraph",
            "Redis"
          ]
        },
        {
          label: "More",
          tools: [
            "Postgres",
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "780ms",
          label: "Avg response latency"
        },
        {
          value: "2,000+",
          label: "Calls handled / month"
        },
        {
          value: "92%",
          label: "Booking automation rate"
        },
        {
          value: "$22K",
          label: "Saved per month"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Multi-clinic Healthcare Network (USA)"
      },
      timeline: "6 weeks",
      team: "Lead AI Engineer",
      client: "Multi-clinic Healthcare Network (USA)",
      role: "Lead AI Engineer",
      year: "2025",
      architecture: "The system is a streaming voice pipeline. An inbound PSTN call hits Twilio, which opens a bidirectional Media Stream to our FastAPI orchestrator. Audio frames are forwarded to Deepgram for streaming transcription; finalized utterances are pushed into a LangGraph state machine that holds conversation state (greeting → intent → slot-fill → confirm → close). Tool calls flow through a secure EHR adapter that translates GPT function calls into eClinicalWorks API requests. Responses are streamed back through ElevenLabs Turbo TTS in chunks so the caller hears the first word in under 800 ms. Redis keeps per-call state hot; Postgres is the system of record. Sentry + LangSmith give us deep traces across every call.",
      images: [
        {
          src: "/work/portfolio/voice-ai-receptionist/hero.jpg",
          alt: "Voice AI Receptionist for Healthcare — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/dashboard.jpg",
          alt: "Voice AI Receptionist for Healthcare — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/architecture.jpg",
          alt: "Voice AI Receptionist for Healthcare — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/analytics.jpg",
          alt: "Voice AI Receptionist for Healthcare — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/workflow.jpg",
          alt: "Voice AI Receptionist for Healthcare — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/mobile.jpg",
          alt: "Voice AI Receptionist for Healthcare — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/api-docs.jpg",
          alt: "Voice AI Receptionist for Healthcare — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/database.jpg",
          alt: "Voice AI Receptionist for Healthcare — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/monitoring.jpg",
          alt: "Voice AI Receptionist for Healthcare — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/voice-ai-receptionist/team.jpg",
          alt: "Voice AI Receptionist for Healthcare — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/voice-ai-receptionist/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "multi-agent-research",
      index: "02",
      industry: "AI Agents",
      categories: [
        "agents"
      ],
      categoryTags: [
        "CrewAI",
        "LangGraph",
        "GPT-4o"
      ],
      title: "Multi-Agent Research Assistant.",
      outcome: "18 min — Average report time",
      problem: "Manual reports took analysts 12–16 hours each and quality was inconsistent. Existing LLM workflows hallucinated facts and lacked source citations — unacceptable for paying enterprise customers.",
      result: "A six-agent autonomous research crew that researches, analyzes, writes and fact-checks 5,000-word market reports — replacing a team of three analysts and producing a fully-cited deliverable in under 20 minutes.",
      solution: [
        "Six-agent crew (Planner, Researcher, Analyst, Writer, FactChecker, Editor) orchestrated with CrewAI on top of LangGraph",
        "Hybrid RAG over the firm's knowledge base + live web search via Tavily and SerpAPI",
        "Custom citation system — every claim must link to a verified source",
        "Ragas-based eval pipeline measuring faithfulness, answer relevance and context precision on every release",
        "Human-in-the-loop checkpoints between planning and writing for high-stakes reports"
      ],
      capabilities: [
        "CrewAI",
        "LangGraph",
        "GPT-4o"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "CrewAI",
            "LangGraph",
            "LangChain",
            "GPT-4o",
            "Claude 3.5",
            "Tavily",
            "Pinecone"
          ]
        },
        {
          label: "More",
          tools: [
            "Ragas",
            "FastAPI"
          ]
        }
      ],
      metrics: [
        {
          value: "18 min",
          label: "Average report time"
        },
        {
          value: "96%",
          label: "Citation accuracy"
        },
        {
          value: "3x",
          label: "Team output increased"
        },
        {
          value: "$45K",
          label: "Annual savings"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "B2B Market-Intelligence Startup"
      },
      timeline: "8 weeks",
      team: "Senior AI Engineer · Architect",
      client: "B2B Market-Intelligence Startup",
      role: "Senior AI Engineer · Architect",
      year: "2025",
      architecture: "A LangGraph hierarchical orchestrator routes the user's query through six agents. The Planner decomposes the query into sub-questions. The Researcher fans those out to web search and the internal vector store, returning ranked source bundles. The Analyst synthesizes findings into a structured outline. The Writer drafts the report section-by-section, citing every claim. The FactChecker verifies each claim against the original sources. The Editor handles tone, formatting and final QA. Inter-agent messages flow over a typed event bus stored in Postgres for audit, and the entire graph is replayable from any checkpoint.",
      images: [
        {
          src: "/work/portfolio/multi-agent-research/hero.jpg",
          alt: "Multi-Agent Research Assistant — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/multi-agent-research/dashboard.jpg",
          alt: "Multi-Agent Research Assistant — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/multi-agent-research/architecture.jpg",
          alt: "Multi-Agent Research Assistant — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/multi-agent-research/analytics.jpg",
          alt: "Multi-Agent Research Assistant — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/multi-agent-research/workflow.jpg",
          alt: "Multi-Agent Research Assistant — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/multi-agent-research/mobile.jpg",
          alt: "Multi-Agent Research Assistant — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/multi-agent-research/api-docs.jpg",
          alt: "Multi-Agent Research Assistant — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/multi-agent-research/database.jpg",
          alt: "Multi-Agent Research Assistant — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/multi-agent-research/monitoring.jpg",
          alt: "Multi-Agent Research Assistant — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/multi-agent-research/team.jpg",
          alt: "Multi-Agent Research Assistant — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/multi-agent-research/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "rag-legal-search",
      index: "03",
      industry: "RAG / Search",
      categories: [
        "rag"
      ],
      categoryTags: [
        "Pinecone",
        "Hybrid Search",
        "Re-ranking"
      ],
      title: "RAG Search over 1.2M Legal Documents.",
      outcome: "38% — Accuracy improvement",
      problem: "First-generation vector search returned irrelevant clauses 40% of the time. Lawyers needed precise paragraph-level citations for compliance, and the platform had to scale to thousands of concurrent searches over a corpus that grows by 50K documents/week.",
      result: "Enterprise RAG search platform over 1.2 million court filings, statutes and contracts — with hybrid retrieval, cross-encoder re-ranking and a robust eval harness. Improved attorneys' research accuracy by 38%.",
      solution: [
        "Layout-aware document parsing with Unstructured.io and semantic chunking",
        "Hybrid retrieval combining BM25 (Elasticsearch) and dense vectors (Pinecone)",
        "Cohere Rerank v3 as a cross-encoder re-ranking step on top-50 candidates",
        "Citation-grounded generation with GPT-4o including paragraph spans and page numbers",
        "Continuous eval with Ragas + 500 expert-labeled questions, run on every release"
      ],
      capabilities: [
        "Pinecone",
        "Hybrid Search",
        "Re-ranking"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "Pinecone",
            "Elasticsearch",
            "Cohere Rerank",
            "GPT-4o",
            "Ragas",
            "Unstructured.io"
          ]
        },
        {
          label: "More",
          tools: [
            "Postgres",
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "38%",
          label: "Accuracy improvement"
        },
        {
          value: "1.2M",
          label: "Documents indexed"
        },
        {
          value: "280ms",
          label: "P95 retrieval latency"
        },
        {
          value: "0.91",
          label: "Faithfulness score"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "LegalTech SaaS (Series A)"
      },
      timeline: "10 weeks",
      team: "RAG Architect",
      client: "LegalTech SaaS (Series A)",
      role: "RAG Architect",
      year: "2025",
      architecture: "An ingestion pipeline pulls documents from S3, runs them through Unstructured.io for layout-aware parsing, semantically chunks each section, and dual-indexes the chunks: BM25 in Elasticsearch and dense vectors in Pinecone. At query time, a FastAPI service runs both retrievers in parallel, fuses the results with Reciprocal Rank Fusion, sends the top-50 to Cohere Rerank v3, and hands the top-8 to GPT-4o for citation-grounded generation. Every retrieval and generation step is logged for evals.",
      images: [
        {
          src: "/work/portfolio/rag-legal-search/hero.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/rag-legal-search/dashboard.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/rag-legal-search/architecture.jpg",
          alt: "RAG Search over 1.2M Legal Documents — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/rag-legal-search/analytics.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/rag-legal-search/workflow.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/rag-legal-search/mobile.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/rag-legal-search/api-docs.jpg",
          alt: "RAG Search over 1.2M Legal Documents — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/rag-legal-search/database.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/rag-legal-search/monitoring.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/rag-legal-search/team.jpg",
          alt: "RAG Search over 1.2M Legal Documents — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/rag-legal-search/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "fastapi-microservices",
      index: "04",
      industry: "Backend",
      categories: [
        "backend",
        "saas"
      ],
      categoryTags: [
        "FastAPI",
        "Async",
        "K8s"
      ],
      title: "FastAPI Microservices Platform.",
      outcome: "10k RPS — Peak throughput",
      problem: "The monolith deployed once a week, couldn't horizontally scale hot endpoints, and was bottlenecked by a single Postgres instance handling write-heavy traffic. PCI-scope was creeping across the whole codebase as features grew.",
      result: "Migrated a Django monolith into 9 FastAPI microservices on Kubernetes, scaling smoothly from 200 RPS to over 10,000 RPS during product-led growth — with P95 latency under 70 ms.",
      solution: [
        "Decomposed by bounded context (auth, payments, ledger, notifications, KYC, etc.)",
        "Event-driven async architecture using Kafka + Pydantic event schemas",
        "Read replicas + PgBouncer; CQRS for write-heavy services with idempotency keys",
        "Service mesh (Istio) for mTLS, retries and circuit breaking",
        "Full CI/CD on GitHub Actions + ArgoCD GitOps to EKS"
      ],
      capabilities: [
        "FastAPI",
        "Async",
        "K8s"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "Pydantic v2",
            "Kafka",
            "Postgres",
            "Redis",
            "Kubernetes",
            "Istio",
            "Terraform"
          ]
        },
        {
          label: "More",
          tools: [
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "10k RPS",
          label: "Peak throughput"
        },
        {
          value: "70ms",
          label: "P95 latency"
        },
        {
          value: "99.99%",
          label: "Uptime SLA"
        },
        {
          value: "12x",
          label: "Deploy frequency"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Series B Fintech"
      },
      timeline: "12 weeks",
      team: "Backend Architect",
      client: "Series B Fintech",
      role: "Backend Architect",
      year: "2024",
      architecture: "Nine FastAPI services run on EKS behind an Istio service mesh. An API Gateway handles auth and rate-limiting. Synchronous calls go service-to-service via mTLS; long-running state changes publish to Kafka and downstream consumers project into their own read models (CQRS). Postgres is per-service; we share a single Aurora cluster but each service owns its schema. Redis fronts hot reads and acts as the dedup store for idempotency keys.",
      images: [
        {
          src: "/work/portfolio/fastapi-microservices/hero.jpg",
          alt: "FastAPI Microservices Platform — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/fastapi-microservices/dashboard.jpg",
          alt: "FastAPI Microservices Platform — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/fastapi-microservices/architecture.jpg",
          alt: "FastAPI Microservices Platform — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/fastapi-microservices/analytics.jpg",
          alt: "FastAPI Microservices Platform — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/fastapi-microservices/workflow.jpg",
          alt: "FastAPI Microservices Platform — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/fastapi-microservices/mobile.jpg",
          alt: "FastAPI Microservices Platform — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/fastapi-microservices/api-docs.jpg",
          alt: "FastAPI Microservices Platform — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/fastapi-microservices/database.jpg",
          alt: "FastAPI Microservices Platform — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/fastapi-microservices/monitoring.jpg",
          alt: "FastAPI Microservices Platform — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/fastapi-microservices/team.jpg",
          alt: "FastAPI Microservices Platform — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/fastapi-microservices/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "flask-ecommerce-saas",
      index: "05",
      industry: "SaaS",
      categories: [
        "saas",
        "backend"
      ],
      categoryTags: [
        "Flask",
        "Stripe",
        "Multi-tenant"
      ],
      title: "Flask Multi-Tenant E-commerce SaaS.",
      outcome: "140+ — Tenants live",
      problem: "The client wanted a Shopify-like product in four months without sacrificing security or per-tenant customizability. Each tenant needed their own theme, domain, payment account and admin users.",
      result: "A white-label e-commerce SaaS letting agencies spin up branded storefronts for their clients — Stripe billing, RBAC, theme engine and tenant-isolated data. From zero to 140+ tenants in 4 months.",
      solution: [
        "Flask + SQLAlchemy app with tenant-isolated Postgres schemas",
        "Stripe Connect for marketplace billing + Stripe Tax for global compliance",
        "Theme engine using Jinja2 with safe sandboxed expressions",
        "Granular RBAC + audit log for every tenant action",
        "Background jobs with Celery + Redis (emails, exports, webhooks)"
      ],
      capabilities: [
        "Flask",
        "Stripe",
        "Multi-tenant"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Flask",
            "SQLAlchemy",
            "Postgres",
            "Stripe Connect",
            "Celery",
            "Redis",
            "Jinja2",
            "Docker"
          ]
        },
        {
          label: "More",
          tools: [
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "140+",
          label: "Tenants live"
        },
        {
          value: "$2.4M",
          label: "Annual GMV"
        },
        {
          value: "99.95%",
          label: "Uptime"
        },
        {
          value: "4 mo",
          label: "MVP shipped"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "DTC Enablement Platform"
      },
      timeline: "14 weeks",
      team: "Lead Full-Stack Engineer",
      client: "DTC Enablement Platform",
      role: "Lead Full-Stack Engineer",
      year: "2024",
      architecture: "A single Flask app + multiple worker pools. Each tenant maps to a Postgres schema; a session-scoped 'tenant' object is set on every request from the subdomain. The theme engine renders Jinja2 templates pulled from S3, sandboxed so tenants can't execute arbitrary Python. Stripe Connect Standard accounts let each tenant accept payments under their own brand. CloudFront serves static assets; a global WAF protects all storefronts.",
      images: [
        {
          src: "/work/portfolio/flask-ecommerce-saas/hero.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/dashboard.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/architecture.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/analytics.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/workflow.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/mobile.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/api-docs.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/database.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/monitoring.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/flask-ecommerce-saas/team.jpg",
          alt: "Flask Multi-Tenant E-commerce SaaS — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/flask-ecommerce-saas/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "whatsapp-ai-chatbot",
      index: "06",
      industry: "Chatbots",
      categories: [
        "chatbot"
      ],
      categoryTags: [
        "WhatsApp",
        "LangChain",
        "GPT-4o"
      ],
      title: "WhatsApp AI Sales Chatbot.",
      outcome: "4x — Lead response speed",
      problem: "Agents spent 60% of their day on initial qualification chats; many leads went cold over weekends. Existing chat scripts were rigid and broke whenever a buyer asked anything off-script.",
      result: "Conversational sales bot on WhatsApp Cloud API that qualifies leads, answers property questions and books showings — synced live to HubSpot CRM. 4× faster response and 38% lead-to-meeting rate.",
      solution: [
        "WhatsApp Cloud API webhook handler in FastAPI",
        "LangChain agent with tools for property search, calendar booking and CRM updates",
        "Stateful conversations stored in Redis with TTL + Postgres for history",
        "Arabic + English bilingual responses with intent detection",
        "Daily Slack digest of qualified leads and handoff alerts"
      ],
      capabilities: [
        "WhatsApp",
        "LangChain",
        "GPT-4o"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "WhatsApp Cloud API",
            "LangChain",
            "GPT-4o",
            "Redis",
            "Postgres",
            "HubSpot API"
          ]
        }
      ],
      metrics: [
        {
          value: "4x",
          label: "Lead response speed"
        },
        {
          value: "38%",
          label: "Lead-to-meeting rate"
        },
        {
          value: "24/7",
          label: "Coverage"
        },
        {
          value: "0.7s",
          label: "Avg reply time"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Real-estate brokerage (UAE)"
      },
      timeline: "4 weeks",
      team: "AI Engineer",
      client: "Real-estate brokerage (UAE)",
      role: "AI Engineer",
      year: "2025",
      architecture: "Meta sends webhook events to a FastAPI endpoint behind a WAF. The handler hydrates conversation state from Redis (recent turns) and Postgres (lead profile), runs a LangChain agent with three tools (search_properties, book_showing, update_lead), and replies via the WhatsApp Cloud API. HubSpot is updated synchronously on lead changes. A background worker generates the daily digest.",
      images: [
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/hero.jpg",
          alt: "WhatsApp AI Sales Chatbot — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/dashboard.jpg",
          alt: "WhatsApp AI Sales Chatbot — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/architecture.jpg",
          alt: "WhatsApp AI Sales Chatbot — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/analytics.jpg",
          alt: "WhatsApp AI Sales Chatbot — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/workflow.jpg",
          alt: "WhatsApp AI Sales Chatbot — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/mobile.jpg",
          alt: "WhatsApp AI Sales Chatbot — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/api-docs.jpg",
          alt: "WhatsApp AI Sales Chatbot — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/database.jpg",
          alt: "WhatsApp AI Sales Chatbot — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/monitoring.jpg",
          alt: "WhatsApp AI Sales Chatbot — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/whatsapp-ai-chatbot/team.jpg",
          alt: "WhatsApp AI Sales Chatbot — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/whatsapp-ai-chatbot/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "support-chatbot-langchain",
      index: "07",
      industry: "Chatbots",
      categories: [
        "chatbot",
        "rag"
      ],
      categoryTags: [
        "LangChain",
        "RAG",
        "Intercom"
      ],
      title: "Enterprise Support Chatbot.",
      outcome: "62% — Tickets deflected",
      problem: "The tier-1 support team was overwhelmed with repetitive queries; average first-response was 9 hours. Customer satisfaction was tanking and hiring more agents was not an option.",
      result: "RAG-powered support assistant trained on 8,000 help-desk articles, ticket history and product docs. Embedded in Intercom + web widget. Deflected 62% of tier-1 tickets.",
      solution: [
        "Nightly pipeline to ingest Zendesk articles + closed tickets into Qdrant",
        "LangChain agent with retrieval + tool use (refunds, status, account lookup)",
        "Confidence scoring — low-confidence answers escalate to a human in under 30 seconds",
        "Streaming responses with server-sent events for instant feel",
        "Langfuse for traces, evals and prompt versioning"
      ],
      capabilities: [
        "LangChain",
        "RAG",
        "Intercom"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "LangChain",
            "Qdrant",
            "GPT-4o",
            "Langfuse",
            "Intercom",
            "SSE"
          ]
        }
      ],
      metrics: [
        {
          value: "62%",
          label: "Tickets deflected"
        },
        {
          value: "9h → 6s",
          label: "First response time"
        },
        {
          value: "4.7/5",
          label: "CSAT score"
        },
        {
          value: "$120K",
          label: "Annual savings"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "B2B SaaS (5,000+ customers)"
      },
      timeline: "7 weeks",
      team: "AI Engineer",
      client: "B2B SaaS (5,000+ customers)",
      role: "AI Engineer",
      year: "2024",
      architecture: "An ingestion pipeline pulls Zendesk articles and resolved tickets, deduplicates them, chunks them and writes embeddings to Qdrant. The chat backend is a FastAPI service. On every message it retrieves top-12 chunks, runs a LangChain agent with three tools, and streams the reply over SSE. Conversations are stored in Postgres for the AI to recall context across sessions.",
      images: [
        {
          src: "/work/portfolio/support-chatbot-langchain/hero.jpg",
          alt: "Enterprise Support Chatbot — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/dashboard.jpg",
          alt: "Enterprise Support Chatbot — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/architecture.jpg",
          alt: "Enterprise Support Chatbot — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/analytics.jpg",
          alt: "Enterprise Support Chatbot — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/workflow.jpg",
          alt: "Enterprise Support Chatbot — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/mobile.jpg",
          alt: "Enterprise Support Chatbot — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/api-docs.jpg",
          alt: "Enterprise Support Chatbot — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/database.jpg",
          alt: "Enterprise Support Chatbot — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/monitoring.jpg",
          alt: "Enterprise Support Chatbot — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/support-chatbot-langchain/team.jpg",
          alt: "Enterprise Support Chatbot — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/support-chatbot-langchain/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "voice-personal-assistant",
      index: "08",
      industry: "Voice AI",
      categories: [
        "voice"
      ],
      categoryTags: [
        "Vapi",
        "Deepgram",
        "ElevenLabs"
      ],
      title: "Voice-Enabled Personal Assistant.",
      outcome: "620ms — Perceived latency",
      problem: "The client wanted a Jarvis-like experience: natural turn-taking, sub-second response, and tight integration with productivity tools. Existing voice products felt slow and 'chatbot-shaped'.",
      result: "An always-on voice assistant for busy founders — manages calendar, drafts emails and runs tasks across Notion, Gmail and Slack. Sub-second turn-taking, 18 integrated tools.",
      solution: [
        "Vapi for telephony + browser voice with custom function-calling",
        "Deepgram Nova-2 streaming STT + ElevenLabs Turbo TTS",
        "GPT-4o-mini with structured outputs for fast tool decisions",
        "Tool layer for Google Calendar, Gmail, Notion and Slack",
        "Speculative TTS to mask LLM latency — perceived response feels instant"
      ],
      capabilities: [
        "Vapi",
        "Deepgram",
        "ElevenLabs"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "Vapi",
            "Deepgram",
            "ElevenLabs",
            "GPT-4o-mini",
            "Google APIs",
            "Notion API"
          ]
        }
      ],
      metrics: [
        {
          value: "620ms",
          label: "Perceived latency"
        },
        {
          value: "18",
          label: "Integrated tools"
        },
        {
          value: "95%",
          label: "Task success rate"
        },
        {
          value: "4.9/5",
          label: "User rating"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Productivity App Startup"
      },
      timeline: "5 weeks",
      team: "Voice AI Engineer",
      client: "Productivity App Startup",
      role: "Voice AI Engineer",
      year: "2025",
      architecture: "Vapi handles the audio session and emits transcript events to our FastAPI orchestrator. The orchestrator runs a structured-output LLM call to decide on tools, executes the tools in parallel where possible, then streams the spoken response back through ElevenLabs. We use 'speculative TTS' — we start synthesizing a generic acknowledgement while the LLM is still thinking, then seamlessly switch to the real reply.",
      images: [
        {
          src: "/work/portfolio/voice-personal-assistant/hero.jpg",
          alt: "Voice-Enabled Personal Assistant — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/dashboard.jpg",
          alt: "Voice-Enabled Personal Assistant — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/architecture.jpg",
          alt: "Voice-Enabled Personal Assistant — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/analytics.jpg",
          alt: "Voice-Enabled Personal Assistant — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/workflow.jpg",
          alt: "Voice-Enabled Personal Assistant — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/mobile.jpg",
          alt: "Voice-Enabled Personal Assistant — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/api-docs.jpg",
          alt: "Voice-Enabled Personal Assistant — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/database.jpg",
          alt: "Voice-Enabled Personal Assistant — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/monitoring.jpg",
          alt: "Voice-Enabled Personal Assistant — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/voice-personal-assistant/team.jpg",
          alt: "Voice-Enabled Personal Assistant — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/voice-personal-assistant/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "code-review-agent",
      index: "09",
      industry: "AI Agents",
      categories: [
        "agents"
      ],
      categoryTags: [
        "LangGraph",
        "GitHub API",
        "LLM"
      ],
      title: "Autonomous Code Review Agent.",
      outcome: "3x — Critical bugs caught",
      problem: "Engineering teams wanted a smart reviewer that catches subtle bugs without drowning devs in noise from rule-based linters. Existing AI reviewers hallucinated, missed real bugs and felt like a toy.",
      result: "A GitHub PR bot that runs static analysis, explains issues in plain English, suggests fixes and even commits patches — gated by human review. Catches 3× more critical bugs while cutting reviewer time 65%.",
      solution: [
        "LangGraph state machine: analyze → comment → suggest → patch → verify",
        "Combines Semgrep / Ruff outputs with LLM reasoning to filter noise",
        "Generates inline GitHub review comments via the REST API",
        "Auto-creates 'apply suggestion' commits behind a feature flag",
        "Eval set of 200 real PRs with labeled issues to prevent regressions"
      ],
      capabilities: [
        "LangGraph",
        "GitHub API",
        "LLM"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "LangGraph",
            "GitHub App",
            "Semgrep",
            "Ruff",
            "GPT-4o",
            "FastAPI",
            "Postgres"
          ]
        }
      ],
      metrics: [
        {
          value: "3x",
          label: "Critical bugs caught"
        },
        {
          value: "65%",
          label: "Less reviewer time"
        },
        {
          value: "0.04",
          label: "Avg cost per PR ($)"
        },
        {
          value: "4.8/5",
          label: "Dev satisfaction"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Dev-tools Startup"
      },
      timeline: "9 weeks",
      team: "AI Engineer",
      client: "Dev-tools Startup",
      role: "AI Engineer",
      year: "2025",
      architecture: "GitHub sends a 'pull_request' webhook to our app. A FastAPI handler enqueues a review job. A LangGraph worker clones the repo at the PR commit, runs Semgrep + Ruff, filters findings through GPT-4o with the surrounding code context, generates inline comments via the GitHub REST API, and optionally proposes a patch commit. Every step persists to Postgres so reviews are replayable.",
      images: [
        {
          src: "/work/portfolio/code-review-agent/hero.jpg",
          alt: "Autonomous Code Review Agent — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/code-review-agent/dashboard.jpg",
          alt: "Autonomous Code Review Agent — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/code-review-agent/architecture.jpg",
          alt: "Autonomous Code Review Agent — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/code-review-agent/analytics.jpg",
          alt: "Autonomous Code Review Agent — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/code-review-agent/workflow.jpg",
          alt: "Autonomous Code Review Agent — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/code-review-agent/mobile.jpg",
          alt: "Autonomous Code Review Agent — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/code-review-agent/api-docs.jpg",
          alt: "Autonomous Code Review Agent — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/code-review-agent/database.jpg",
          alt: "Autonomous Code Review Agent — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/code-review-agent/monitoring.jpg",
          alt: "Autonomous Code Review Agent — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/code-review-agent/team.jpg",
          alt: "Autonomous Code Review Agent — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/code-review-agent/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "saas-subscription-platform",
      index: "10",
      industry: "SaaS",
      categories: [
        "saas"
      ],
      categoryTags: [
        "FastAPI",
        "Stripe",
        "React"
      ],
      title: "SaaS Subscription Management Platform.",
      outcome: "$8M — GMV processed",
      problem: "Build a Stripe-Billing-style product that handles complex pricing (per-seat + usage + tiers) with bullet-proof financial integrity, plus revenue analytics good enough for board reporting.",
      result: "End-to-end subscription billing platform competing with Chargebee — usage-based metering, trials, dunning, tax and revenue analytics. Processed $8M GMV in year one with zero reconciliation errors.",
      solution: [
        "FastAPI core with a double-entry accounting ledger (Postgres)",
        "Outbox pattern + idempotent webhook handlers for Stripe + Paddle",
        "Usage metering pipeline (Kafka → ClickHouse) for billable events",
        "Dunning state machine handling failed payments and recovery",
        "Investor-grade revenue analytics (MRR, churn, LTV, cohorts)"
      ],
      capabilities: [
        "FastAPI",
        "Stripe",
        "React"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "Postgres",
            "Kafka",
            "ClickHouse",
            "Stripe",
            "Paddle",
            "Celery",
            "Docker"
          ]
        },
        {
          label: "More",
          tools: [
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "$8M",
          label: "GMV processed"
        },
        {
          value: "0",
          label: "Reconciliation errors"
        },
        {
          value: "99.99%",
          label: "Webhook reliability"
        },
        {
          value: "4 mo",
          label: "GTM ready"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "SaaS Billing Provider"
      },
      timeline: "16 weeks",
      team: "Tech Lead",
      client: "SaaS Billing Provider",
      role: "Tech Lead",
      year: "2024",
      architecture: "FastAPI services for billing, metering and analytics. Stripe + Paddle webhooks are signed, deduped and routed through an outbox so DB and downstream effects are atomic. Usage events stream from customer apps into Kafka, get aggregated by ClickHouse materialized views, and feed real-time invoicing. A double-entry ledger in Postgres is the financial source of truth — every charge and refund creates balanced debit/credit rows.",
      images: [
        {
          src: "/work/portfolio/saas-subscription-platform/hero.jpg",
          alt: "SaaS Subscription Management Platform — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/dashboard.jpg",
          alt: "SaaS Subscription Management Platform — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/architecture.jpg",
          alt: "SaaS Subscription Management Platform — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/analytics.jpg",
          alt: "SaaS Subscription Management Platform — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/workflow.jpg",
          alt: "SaaS Subscription Management Platform — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/mobile.jpg",
          alt: "SaaS Subscription Management Platform — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/api-docs.jpg",
          alt: "SaaS Subscription Management Platform — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/database.jpg",
          alt: "SaaS Subscription Management Platform — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/monitoring.jpg",
          alt: "SaaS Subscription Management Platform — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/saas-subscription-platform/team.jpg",
          alt: "SaaS Subscription Management Platform — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/saas-subscription-platform/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "realtime-analytics-api",
      index: "11",
      industry: "Backend",
      categories: [
        "backend"
      ],
      categoryTags: [
        "FastAPI",
        "ClickHouse",
        "WebSockets"
      ],
      title: "Real-Time Analytics Dashboard API.",
      outcome: "85ms — P95 query time",
      problem: "Postgres-backed dashboards took 8–15 seconds to load; users wanted real-time tile updates and time-travel queries over billions of events.",
      result: "Sub-100 ms analytics API powering 50,000+ concurrent dashboards. ClickHouse for OLAP + WebSocket fan-out for live tile updates.",
      solution: [
        "Ingest pipeline: Kafka → ClickHouse with materialized views per dashboard tile",
        "FastAPI async API with per-tenant query caching in Redis",
        "WebSocket gateway pushes diffs as new events arrive (debounced 250 ms)",
        "Query planner translates user filters into pre-aggregated table reads",
        "Resource isolation via ClickHouse profiles + query timeouts"
      ],
      capabilities: [
        "FastAPI",
        "ClickHouse",
        "WebSockets"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "ClickHouse",
            "Kafka",
            "Redis",
            "WebSockets",
            "Docker",
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "85ms",
          label: "P95 query time"
        },
        {
          value: "50k",
          label: "Concurrent dashboards"
        },
        {
          value: "3B",
          label: "Events/day ingested"
        },
        {
          value: "60%",
          label: "Infra cost saved"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Product Analytics Startup"
      },
      timeline: "8 weeks",
      team: "Backend Engineer",
      client: "Product Analytics Startup",
      role: "Backend Engineer",
      year: "2024",
      architecture: "Events flow from customer SDKs into a global Kafka cluster, get partitioned by tenant, and land in ClickHouse. Materialized views aggregate into per-tile tables. The API serves both initial dashboard loads (HTTP) and live updates (WebSocket). A diff service computes minimal updates between ClickHouse snapshots so the wire payload stays tiny.",
      images: [
        {
          src: "/work/portfolio/realtime-analytics-api/hero.jpg",
          alt: "Real-Time Analytics Dashboard API — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/dashboard.jpg",
          alt: "Real-Time Analytics Dashboard API — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/architecture.jpg",
          alt: "Real-Time Analytics Dashboard API — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/analytics.jpg",
          alt: "Real-Time Analytics Dashboard API — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/workflow.jpg",
          alt: "Real-Time Analytics Dashboard API — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/mobile.jpg",
          alt: "Real-Time Analytics Dashboard API — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/api-docs.jpg",
          alt: "Real-Time Analytics Dashboard API — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/database.jpg",
          alt: "Real-Time Analytics Dashboard API — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/monitoring.jpg",
          alt: "Real-Time Analytics Dashboard API — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/realtime-analytics-api/team.jpg",
          alt: "Real-Time Analytics Dashboard API — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/realtime-analytics-api/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "resume-screening-ai",
      index: "12",
      industry: "AI Agents",
      categories: [
        "agents",
        "rag"
      ],
      categoryTags: [
        "Multi-Agent",
        "RAG",
        "FastAPI"
      ],
      title: "AI Resume Screening System.",
      outcome: "30h → 2h — Per role",
      problem: "Recruiters were spending 30+ hours per role reviewing 800+ resumes — and missing strong candidates due to keyword-only ATS filters.",
      result: "Recruiter copilot that parses, scores and ranks resumes against any job description using a 3-agent pipeline with explainable scoring. Cut per-role review time from 30 hours to 2.",
      solution: [
        "Parser agent: layout-aware extraction with Unstructured + GPT-4o-mini",
        "Scorer agent: multi-factor scoring (skills, seniority, projects, gaps)",
        "Explainer agent: produces a recruiter-readable rationale for each score",
        "RAG layer for company-specific 'great candidate' examples",
        "Bias guardrails — drops PII before scoring (name, gender, age, photo)"
      ],
      capabilities: [
        "Multi-Agent",
        "RAG",
        "FastAPI"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "CrewAI",
            "GPT-4o",
            "Unstructured.io",
            "Pinecone",
            "Postgres"
          ]
        }
      ],
      metrics: [
        {
          value: "30h → 2h",
          label: "Per role"
        },
        {
          value: "+42%",
          label: "Quality hires"
        },
        {
          value: "0",
          label: "Bias incidents"
        },
        {
          value: "4.8/5",
          label: "Recruiter NPS"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "HR-Tech Startup"
      },
      timeline: "6 weeks",
      team: "AI Engineer",
      client: "HR-Tech Startup",
      role: "AI Engineer",
      year: "2025",
      architecture: "Uploads land in S3 and trigger an SQS message. A worker parses each resume into a structured schema. PII is stripped, then a Scorer agent evaluates against the job description using a multi-factor rubric (skills match, seniority, recent relevance, project depth). An Explainer agent generates a recruiter-facing rationale. Final ranks are written to Postgres and surfaced in the UI.",
      images: [
        {
          src: "/work/portfolio/resume-screening-ai/hero.jpg",
          alt: "AI Resume Screening System — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/resume-screening-ai/dashboard.jpg",
          alt: "AI Resume Screening System — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/resume-screening-ai/architecture.jpg",
          alt: "AI Resume Screening System — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/resume-screening-ai/analytics.jpg",
          alt: "AI Resume Screening System — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/resume-screening-ai/workflow.jpg",
          alt: "AI Resume Screening System — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/resume-screening-ai/mobile.jpg",
          alt: "AI Resume Screening System — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/resume-screening-ai/api-docs.jpg",
          alt: "AI Resume Screening System — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/resume-screening-ai/database.jpg",
          alt: "AI Resume Screening System — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/resume-screening-ai/monitoring.jpg",
          alt: "AI Resume Screening System — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/resume-screening-ai/team.jpg",
          alt: "AI Resume Screening System — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/resume-screening-ai/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "multi-tenant-fastapi",
      index: "13",
      industry: "Backend",
      categories: [
        "backend",
        "saas"
      ],
      categoryTags: [
        "FastAPI",
        "Postgres",
        "RLS"
      ],
      title: "Multi-Tenant SaaS Backend (FastAPI).",
      outcome: "SOC2 — Type II ready",
      problem: "Client needed strict per-tenant data isolation to win enterprise deals — without operating one database per tenant (which would have been operationally expensive).",
      result: "Production multi-tenant backend with Postgres row-level security, Auth0 organizations, audit logs, granular RBAC and self-serve onboarding. SOC2 Type II-ready in 11 weeks.",
      solution: [
        "Postgres row-level security with session-bound `current_tenant` GUC",
        "Auth0 organizations + custom claims piped into JWT for tenant context",
        "Audit middleware logs every write with diff payloads to ClickHouse",
        "Self-serve onboarding flow with subdomain provisioning",
        "Tenant-aware async SQLAlchemy + per-tenant rate limits in Redis"
      ],
      capabilities: [
        "FastAPI",
        "Postgres",
        "RLS"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "Postgres RLS",
            "Auth0",
            "SQLAlchemy",
            "Redis",
            "ClickHouse",
            "Docker"
          ]
        }
      ],
      metrics: [
        {
          value: "SOC2",
          label: "Type II ready"
        },
        {
          value: "0",
          label: "Data-leak incidents"
        },
        {
          value: "220",
          label: "Tenants live"
        },
        {
          value: "3 wks",
          label: "Enterprise deal cycle"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Vertical SaaS for Law Firms"
      },
      timeline: "11 weeks",
      team: "Backend Architect",
      client: "Vertical SaaS for Law Firms",
      role: "Backend Architect",
      year: "2024",
      architecture: "Every request carries a tenant id in its JWT. A FastAPI middleware sets a Postgres session GUC ('app.current_tenant') which our RLS policies use to filter every query. Writes go through an audit log middleware that diffs old vs. new state and ships to ClickHouse. Subdomains are provisioned through a control-plane service that updates Cloudflare DNS and seeds a per-tenant data row set.",
      images: [
        {
          src: "/work/portfolio/multi-tenant-fastapi/hero.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/dashboard.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/architecture.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/analytics.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/workflow.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/mobile.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/api-docs.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/database.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/monitoring.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/multi-tenant-fastapi/team.jpg",
          alt: "Multi-Tenant SaaS Backend (FastAPI) — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/multi-tenant-fastapi/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "healthcare-rag",
      index: "14",
      industry: "RAG / Search",
      categories: [
        "rag",
        "chatbot"
      ],
      categoryTags: [
        "RAG",
        "HIPAA",
        "Qdrant"
      ],
      title: "Healthcare RAG Chatbot.",
      outcome: "70% — Hotline volume cut",
      problem: "Clinical hotlines were overwhelmed by routine post-op questions. Patients needed trustworthy answers without waiting on hold, but anything that smelled like a diagnosis had to go to a clinician.",
      result: "HIPAA-compliant RAG chatbot answering patient questions from medical guidelines, clinic SOPs and post-care instructions — with citations and a strict refusal policy on diagnostic queries.",
      solution: [
        "Ingest pipeline for PDFs (guidelines), HTML (UpToDate) and clinic SOPs",
        "Qdrant vector store hosted in a HIPAA BAA-covered VPC",
        "Strict 'refusal' policy for diagnostic questions + escalation to nurse",
        "Audit log of every Q/A with source citations for compliance review",
        "Eval suite reviewed quarterly by an in-house medical advisor"
      ],
      capabilities: [
        "RAG",
        "HIPAA",
        "Qdrant"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "Qdrant",
            "GPT-4o",
            "HIPAA VPC",
            "Postgres",
            "Ragas"
          ]
        }
      ],
      metrics: [
        {
          value: "70%",
          label: "Hotline volume cut"
        },
        {
          value: "100%",
          label: "HIPAA compliance"
        },
        {
          value: "3.2s",
          label: "Avg response"
        },
        {
          value: "4.7/5",
          label: "Patient rating"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Digital Health Provider"
      },
      timeline: "9 weeks",
      team: "AI Engineer",
      client: "Digital Health Provider",
      role: "AI Engineer",
      year: "2025",
      architecture: "Everything runs inside a HIPAA-BAA-covered AWS VPC. An ingest pipeline pulls guidelines, parses, chunks and embeds them into Qdrant. A FastAPI chat service handles patient messages. Each message first hits a 'diagnostic intent' classifier; anything classified as diagnostic is refused with a polite escalation to a nurse via Twilio. Non-diagnostic queries go through RAG with strict citation requirements.",
      images: [
        {
          src: "/work/portfolio/healthcare-rag/hero.jpg",
          alt: "Healthcare RAG Chatbot — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/healthcare-rag/dashboard.jpg",
          alt: "Healthcare RAG Chatbot — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/healthcare-rag/architecture.jpg",
          alt: "Healthcare RAG Chatbot — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/healthcare-rag/analytics.jpg",
          alt: "Healthcare RAG Chatbot — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/healthcare-rag/workflow.jpg",
          alt: "Healthcare RAG Chatbot — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/healthcare-rag/mobile.jpg",
          alt: "Healthcare RAG Chatbot — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/healthcare-rag/api-docs.jpg",
          alt: "Healthcare RAG Chatbot — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/healthcare-rag/database.jpg",
          alt: "Healthcare RAG Chatbot — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/healthcare-rag/monitoring.jpg",
          alt: "Healthcare RAG Chatbot — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/healthcare-rag/team.jpg",
          alt: "Healthcare RAG Chatbot — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/healthcare-rag/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "meeting-transcription-ai",
      index: "15",
      industry: "Voice AI",
      categories: [
        "voice"
      ],
      categoryTags: [
        "Whisper",
        "GPT-4o",
        "FastAPI"
      ],
      title: "AI Meeting Transcription & Summary.",
      outcome: "60 min — Saved per rep / day",
      problem: "Sales reps were losing 1+ hour per day on note-taking and CRM data entry — and call insights weren't shared across the org.",
      result: "Real-time meeting capture, speaker diarization, action-items extraction and CRM sync for distributed sales teams. Saves each rep 60 minutes per day.",
      solution: [
        "Live Zoom/Meet/Teams capture via SDK + server-side transcription with Whisper-Large-v3",
        "Speaker diarization with pyannote + custom voice fingerprinting",
        "Structured summary, next steps, deal-risk and BANT extraction",
        "One-click Salesforce / HubSpot push with field mapping",
        "Org-wide search over all calls with semantic + keyword retrieval"
      ],
      capabilities: [
        "Whisper",
        "GPT-4o",
        "FastAPI"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "Whisper",
            "pyannote",
            "GPT-4o",
            "Postgres",
            "Pinecone",
            "Salesforce API"
          ]
        }
      ],
      metrics: [
        {
          value: "60 min",
          label: "Saved per rep / day"
        },
        {
          value: "12k",
          label: "Calls processed / mo"
        },
        {
          value: "4.9/5",
          label: "Rep NPS"
        },
        {
          value: "+27%",
          label: "Win-rate lift"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Sales Enablement Startup"
      },
      timeline: "7 weeks",
      team: "AI Engineer",
      client: "Sales Enablement Startup",
      role: "AI Engineer",
      year: "2025",
      architecture: "A meeting-recorder bot joins the call via the platform SDK. Audio streams to our ingestion service, which forks copies to (a) Whisper-Large-v3 transcription and (b) pyannote diarization. A merge step interleaves transcripts with speaker labels. Once the call ends, a summary chain extracts structured outputs (BANT, action items, deal risk) and pushes to CRM.",
      images: [
        {
          src: "/work/portfolio/meeting-transcription-ai/hero.jpg",
          alt: "AI Meeting Transcription & Summary — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/dashboard.jpg",
          alt: "AI Meeting Transcription & Summary — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/architecture.jpg",
          alt: "AI Meeting Transcription & Summary — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/analytics.jpg",
          alt: "AI Meeting Transcription & Summary — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/workflow.jpg",
          alt: "AI Meeting Transcription & Summary — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/mobile.jpg",
          alt: "AI Meeting Transcription & Summary — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/api-docs.jpg",
          alt: "AI Meeting Transcription & Summary — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/database.jpg",
          alt: "AI Meeting Transcription & Summary — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/monitoring.jpg",
          alt: "AI Meeting Transcription & Summary — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/meeting-transcription-ai/team.jpg",
          alt: "AI Meeting Transcription & Summary — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/meeting-transcription-ai/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "lead-gen-agent",
      index: "16",
      industry: "AI Agents",
      categories: [
        "agents"
      ],
      categoryTags: [
        "CrewAI",
        "Apollo API",
        "Sheets"
      ],
      title: "Lead Generation AI Agent.",
      outcome: "8% — Reply rate",
      problem: "Outbound was bottlenecked by SDR capacity. Generic email blasts had a 0.6% reply rate; manual personalization didn't scale.",
      result: "An autonomous agent that prospects ICP companies, enriches contacts, drafts personalized emails and books meetings 24/7. 8% reply rate, 12× SDR throughput.",
      solution: [
        "CrewAI agents: Prospector, Researcher, Writer, Scheduler",
        "Apollo + LinkedIn enrichment with deduplication and bounce checks",
        "Per-prospect 'reason to reach out' synthesized from recent news + 10-Ks",
        "Email writer fine-tuned on the client's top-performing sequences",
        "Calendly + Smartlead integration for delivery and meeting booking"
      ],
      capabilities: [
        "CrewAI",
        "Apollo API",
        "Sheets"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "CrewAI",
            "Apollo API",
            "Smartlead",
            "Calendly",
            "GPT-4o",
            "Postgres"
          ]
        }
      ],
      metrics: [
        {
          value: "8%",
          label: "Reply rate"
        },
        {
          value: "130",
          label: "Meetings / month"
        },
        {
          value: "12x",
          label: "SDR throughput"
        },
        {
          value: "$0.18",
          label: "Cost per email"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "B2B Growth Agency"
      },
      timeline: "5 weeks",
      team: "AI Engineer",
      client: "B2B Growth Agency",
      role: "AI Engineer",
      year: "2025",
      architecture: "A scheduler kicks off daily campaigns. The Prospector agent queries Apollo for ICP matches. The Researcher agent enriches each lead with recent news, funding info and tech stack. The Writer agent drafts a personalized opening line using the top-performing sequence style. The Scheduler agent feeds emails into Smartlead with throttling. Replies are routed back into HubSpot.",
      images: [
        {
          src: "/work/portfolio/lead-gen-agent/hero.jpg",
          alt: "Lead Generation AI Agent — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/lead-gen-agent/dashboard.jpg",
          alt: "Lead Generation AI Agent — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/lead-gen-agent/architecture.jpg",
          alt: "Lead Generation AI Agent — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/lead-gen-agent/analytics.jpg",
          alt: "Lead Generation AI Agent — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/lead-gen-agent/workflow.jpg",
          alt: "Lead Generation AI Agent — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/lead-gen-agent/mobile.jpg",
          alt: "Lead Generation AI Agent — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/lead-gen-agent/api-docs.jpg",
          alt: "Lead Generation AI Agent — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/lead-gen-agent/database.jpg",
          alt: "Lead Generation AI Agent — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/lead-gen-agent/monitoring.jpg",
          alt: "Lead Generation AI Agent — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/lead-gen-agent/team.jpg",
          alt: "Lead Generation AI Agent — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/lead-gen-agent/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "financial-rag-assistant",
      index: "17",
      industry: "RAG / Search",
      categories: [
        "rag"
      ],
      categoryTags: [
        "RAG",
        "Pinecone",
        "Streamlit"
      ],
      title: "Financial Document RAG Assistant.",
      outcome: "4 days → 1 hr — Analysis time",
      problem: "Analysts spent days digging through SEC filings; comparisons across 30+ companies were error-prone manual spreadsheet work.",
      result: "Analyzer for 10-K / 10-Q filings — extracts metrics, builds cross-company comparisons and surfaces risks, every claim cited to source. Cut analyst time from 4 days to 1 hour.",
      solution: [
        "SEC EDGAR ingestion + table-aware parsing (Camelot + Unstructured)",
        "Per-section chunking (MD&A, Risk Factors, Financial Statements)",
        "Pinecone namespaces per ticker for fast filtered retrieval",
        "Numeric reasoning agent that runs Python (Pandas) on extracted tables",
        "Streamlit UI for analysts with side-by-side company comparison"
      ],
      capabilities: [
        "RAG",
        "Pinecone",
        "Streamlit"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "Pinecone",
            "GPT-4o",
            "Pandas",
            "Camelot",
            "Streamlit",
            "Postgres"
          ]
        }
      ],
      metrics: [
        {
          value: "4 days → 1 hr",
          label: "Analysis time"
        },
        {
          value: "100%",
          label: "Citation grounding"
        },
        {
          value: "450+",
          label: "Tickers covered"
        },
        {
          value: "4.9/5",
          label: "Analyst rating"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Hedge Fund Research Team"
      },
      timeline: "8 weeks",
      team: "AI Engineer",
      client: "Hedge Fund Research Team",
      role: "AI Engineer",
      year: "2024",
      architecture: "A nightly job pulls new filings from EDGAR. Filings are parsed into structured sections; tables are extracted with Camelot. Chunks are stored in Pinecone with per-ticker namespaces. Queries route through a planner that decides between retrieval-only or 'do retrieval + compute on tables'. The compute path drops into a sandboxed Pandas executor.",
      images: [
        {
          src: "/work/portfolio/financial-rag-assistant/hero.jpg",
          alt: "Financial Document RAG Assistant — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/dashboard.jpg",
          alt: "Financial Document RAG Assistant — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/architecture.jpg",
          alt: "Financial Document RAG Assistant — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/analytics.jpg",
          alt: "Financial Document RAG Assistant — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/workflow.jpg",
          alt: "Financial Document RAG Assistant — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/mobile.jpg",
          alt: "Financial Document RAG Assistant — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/api-docs.jpg",
          alt: "Financial Document RAG Assistant — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/database.jpg",
          alt: "Financial Document RAG Assistant — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/monitoring.jpg",
          alt: "Financial Document RAG Assistant — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/financial-rag-assistant/team.jpg",
          alt: "Financial Document RAG Assistant — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/financial-rag-assistant/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "content-moderation-api",
      index: "18",
      industry: "Backend",
      categories: [
        "backend"
      ],
      categoryTags: [
        "FastAPI",
        "LLM",
        "Async"
      ],
      title: "AI Content Moderation API.",
      outcome: "45ms — P95 latency",
      problem: "The platform had hard-coded keyword filters that missed nuance, over-blocked good content, and provided no audit trail for regulators.",
      result: "Real-time text and image moderation API with a policy DSL, audit trail, and human-in-the-loop review queue. P95 45 ms at 12 M items/day.",
      solution: [
        "FastAPI API serving a tiered moderation pipeline",
        "Tiered moderation: cheap classifier → LLM judge only on borderline cases",
        "Image moderation using CLIP + custom fine-tunes for nudity / violence",
        "Audit log per decision with model version, latency, and reviewer overrides",
        "React review-queue with bulk actions and reviewer-agreement metrics"
      ],
      capabilities: [
        "FastAPI",
        "LLM",
        "Async"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "CLIP",
            "GPT-4o-mini",
            "Redis",
            "Postgres",
            "React",
            "Docker"
          ]
        }
      ],
      metrics: [
        {
          value: "45ms",
          label: "P95 latency"
        },
        {
          value: "12M",
          label: "Items/day moderated"
        },
        {
          value: "-70%",
          label: "False positives"
        },
        {
          value: "100%",
          label: "Auditability"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "Social Marketplace"
      },
      timeline: "6 weeks",
      team: "Backend / AI Engineer",
      client: "Social Marketplace",
      role: "Backend / AI Engineer",
      year: "2025",
      architecture: "Incoming items hit a FastAPI endpoint that runs a fast classifier (<5 ms). High-confidence decisions return immediately; borderline items go to an LLM judge evaluating against a policy DSL. Images run through CLIP for embeddings + custom heads. Decisions and rationales are logged.",
      images: [
        {
          src: "/work/portfolio/content-moderation-api/hero.jpg",
          alt: "AI Content Moderation API — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/content-moderation-api/dashboard.jpg",
          alt: "AI Content Moderation API — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/content-moderation-api/architecture.jpg",
          alt: "AI Content Moderation API — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/content-moderation-api/analytics.jpg",
          alt: "AI Content Moderation API — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/content-moderation-api/workflow.jpg",
          alt: "AI Content Moderation API — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/content-moderation-api/mobile.jpg",
          alt: "AI Content Moderation API — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/content-moderation-api/api-docs.jpg",
          alt: "AI Content Moderation API — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/content-moderation-api/database.jpg",
          alt: "AI Content Moderation API — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/content-moderation-api/monitoring.jpg",
          alt: "AI Content Moderation API — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/content-moderation-api/team.jpg",
          alt: "AI Content Moderation API — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/content-moderation-api/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "inventory-saas-backend",
      index: "19",
      industry: "SaaS",
      categories: [
        "saas",
        "backend"
      ],
      categoryTags: [
        "FastAPI",
        "Postgres",
        "Celery"
      ],
      title: "Inventory Management SaaS Backend.",
      outcome: "<1s — Cross-channel sync",
      problem: "Brands were overselling on Shopify because inventory updates lagged 10–30 minutes across channels. Out-of-stock products led to refunds and angry customers.",
      result: "Real-time inventory SaaS for D2C brands — Shopify / WooCommerce sync, low-stock alerts and demand forecasting. Eliminated overselling across thousands of SKUs.",
      solution: [
        "FastAPI backend + Celery workers for channel sync",
        "Outbox pattern + idempotent webhook handlers for Shopify and WooCommerce",
        "Real-time stock ledger in Postgres with optimistic concurrency control",
        "Forecasting microservice using Prophet + simple ML models",
        "Slack + email alerting for low-stock and stockout events"
      ],
      capabilities: [
        "FastAPI",
        "Postgres",
        "Celery"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "FastAPI",
            "Postgres",
            "Celery",
            "Redis",
            "Shopify API",
            "Prophet",
            "Docker",
            "AWS"
          ]
        }
      ],
      metrics: [
        {
          value: "<1s",
          label: "Cross-channel sync"
        },
        {
          value: "0",
          label: "Overselling events"
        },
        {
          value: "18%",
          label: "Carrying cost cut"
        },
        {
          value: "$1.4M",
          label: "Revenue saved"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "D2C Brand Enabler"
      },
      timeline: "10 weeks",
      team: "Backend Engineer",
      client: "D2C Brand Enabler",
      role: "Backend Engineer",
      year: "2024",
      architecture: "Channel webhooks (Shopify, WooCommerce) flow into a FastAPI ingest service that writes to an outbox table. A worker reads the outbox and applies updates to a stock ledger in Postgres with optimistic locking. Forecasting runs nightly using Prophet on historical sales. Slack/email alerts are pushed by a notification service.",
      images: [
        {
          src: "/work/portfolio/inventory-saas-backend/hero.jpg",
          alt: "Inventory Management SaaS Backend — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/dashboard.jpg",
          alt: "Inventory Management SaaS Backend — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/architecture.jpg",
          alt: "Inventory Management SaaS Backend — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/analytics.jpg",
          alt: "Inventory Management SaaS Backend — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/workflow.jpg",
          alt: "Inventory Management SaaS Backend — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/mobile.jpg",
          alt: "Inventory Management SaaS Backend — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/api-docs.jpg",
          alt: "Inventory Management SaaS Backend — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/database.jpg",
          alt: "Inventory Management SaaS Backend — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/monitoring.jpg",
          alt: "Inventory Management SaaS Backend — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/inventory-saas-backend/team.jpg",
          alt: "Inventory Management SaaS Backend — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/inventory-saas-backend/hero.jpg",
      source: "portfolio"
    },
    {
      slug: "realestate-voice-agent",
      index: "20",
      industry: "Voice AI",
      categories: [
        "voice",
        "agents"
      ],
      categoryTags: [
        "Retell",
        "GPT-4o",
        "Twilio"
      ],
      title: "Real-Estate Voice AI Agent.",
      outcome: "4x — Agent productivity",
      problem: "Brokers were spending most of their day cold-calling leads; only 8% of prospects picked up and most calls went to voicemail.",
      result: "Outbound voice AI agent qualifies real-estate leads, books showings and updates CRM — 4× agent productivity with 24/7 coverage.",
      solution: [
        "Retell + Twilio for outbound calls with smart retry logic",
        "GPT-4o conversation engine with role-specific scripts and objection handling",
        "Live function-calling: MLS lookup, calendar booking, CRM update",
        "Voicemail detection + AI-generated voicemail drop",
        "Compliance: TCPA, DNC list scrubbing, full call recording"
      ],
      capabilities: [
        "Retell",
        "GPT-4o",
        "Twilio"
      ],
      stack: [
        {
          label: "Stack",
          tools: [
            "Python",
            "FastAPI",
            "Retell",
            "Twilio",
            "GPT-4o",
            "Postgres",
            "Salesforce API"
          ]
        }
      ],
      metrics: [
        {
          value: "4x",
          label: "Agent productivity"
        },
        {
          value: "32%",
          label: "Pickup-to-meeting rate"
        },
        {
          value: "24/7",
          label: "Coverage"
        },
        {
          value: "0",
          label: "Compliance issues"
        }
      ],
      quote: {
        body: "Delivered as a production system with observability, evals, and handoff documentation — not a prototype.",
        author: "Engineering lead",
        role: "US Real-Estate Brokerage"
      },
      timeline: "7 weeks",
      team: "Voice AI Lead",
      client: "US Real-Estate Brokerage",
      role: "Voice AI Lead",
      year: "2025",
      architecture: "A campaign service feeds leads into a dialer that places outbound calls via Twilio. Retell handles audio with our custom conversation engine. Function calls hit MLS for property facts, Google Calendar for slot availability, and Salesforce for CRM updates. Voicemail detection routes the call to an AI voicemail drop instead of a live conversation.",
      images: [
        {
          src: "/work/portfolio/realestate-voice-agent/hero.jpg",
          alt: "Real-Estate Voice AI Agent — Product overview",
          caption: "Product overview"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/dashboard.jpg",
          alt: "Real-Estate Voice AI Agent — Dashboard / admin UI",
          caption: "Dashboard / admin UI"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/architecture.jpg",
          alt: "Real-Estate Voice AI Agent — System architecture",
          caption: "System architecture"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/analytics.jpg",
          alt: "Real-Estate Voice AI Agent — Analytics surface",
          caption: "Analytics surface"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/workflow.jpg",
          alt: "Real-Estate Voice AI Agent — Workflow / data flow",
          caption: "Workflow / data flow"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/mobile.jpg",
          alt: "Real-Estate Voice AI Agent — Mobile experience",
          caption: "Mobile experience"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/api-docs.jpg",
          alt: "Real-Estate Voice AI Agent — API documentation",
          caption: "API documentation"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/database.jpg",
          alt: "Real-Estate Voice AI Agent — Data model",
          caption: "Data model"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/monitoring.jpg",
          alt: "Real-Estate Voice AI Agent — Observability",
          caption: "Observability"
        },
        {
          src: "/work/portfolio/realestate-voice-agent/team.jpg",
          alt: "Real-Estate Voice AI Agent — Production deployment",
          caption: "Production deployment"
        }
      ],
      heroImage: "/work/portfolio/realestate-voice-agent/hero.jpg",
      source: "portfolio"
    }
  ];

