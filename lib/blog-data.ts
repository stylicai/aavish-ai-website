export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "Research" | "Field Notes" | "Product";
  readTime: string;
  author: { name: string; initials: string; role: string };
  date: string;
  featured?: boolean;
  body: string;
  tableOfContents?: { id: string; label: string }[];
};

const fieldAuthor = { name: "Aarav Shankar", initials: "AS", role: "Principal Engineer" };
const researchAuthor = { name: "Ila Devanand", initials: "ID", role: "Research Lead" };
const productAuthor = { name: "Maya Khanna", initials: "MK", role: "Product" };

export const blogPosts: BlogPost[] = [
  {
    slug: "agents-that-actually-work",
    title: "Designing AI agents that actually work in production.",
    excerpt:
      "Most agent demos break the moment they leave the demo. Here are the architectural choices we make to build agents that ship.",
    category: "Engineering",
    readTime: "12 min",
    author: fieldAuthor,
    date: "2026-04-22",
    featured: true,
    body: `
The gap between a demo agent and a production agent is wider than most teams expect. A demo only has to succeed once. A production agent has to succeed thousands of times, gracefully fail when it shouldn't succeed, and survive a year of model upgrades, vendor outages, and prompt regressions.

## Start with the outcome contract

Before we touch a prompt, we write down what success means in measurable terms: the input it accepts, the side effects it's allowed to cause, and the verification step that decides whether the run was successful. This contract becomes the test suite. It's also the rollback boundary.

## Plan, then execute, then verify

Every step is a tuple: a deliberate plan, an execution against a typed tool, and a verification before the next step. The verification is the under-engineered part of most agent stacks — and the one that makes the difference between 78% and 96% reliability.

## Bound every loop

Loops are how agents quietly burn budgets. We bound them three ways: by step count, by token budget, and by wall-clock time. A halted run is a recoverable outcome. A runaway run is not.

## Trace everything, replay anything

Every step is written to a trace store as it happens. Every trace is replayable in a debugger. When a regression lands, we don't guess; we replay.

## Ship behind a flag

A new agent or model goes out behind a feature flag with shadow execution first. Real traffic, real comparison, no risk. We only flip the flag when the evals say so.

The pattern is unglamorous and that's the point.
    `.trim(),
    tableOfContents: [
      { id: "outcome-contract", label: "The outcome contract" },
      { id: "plan-execute-verify", label: "Plan, execute, verify" },
      { id: "bound-loops", label: "Bound every loop" },
      { id: "trace-everything", label: "Trace everything" }
    ]
  },
  {
    slug: "rag-evaluations-honest-version",
    title: "RAG evaluations, the honest version.",
    excerpt:
      "Most RAG dashboards are theatre. Here is the small set of evals that actually correlates with real quality.",
    category: "Research",
    readTime: "9 min",
    author: researchAuthor,
    date: "2026-03-14",
    body: `
Most teams running RAG in production cannot answer a simple question: is this week's release better than last week's? The dashboards say yes, the customers say no.

## Three layers of eval

Layer 1 is retrieval — did we surface the right chunks? Layer 2 is grounding — did the model use those chunks rather than its own memory? Layer 3 is task — did the answer actually solve the user's problem? Most teams measure layer 1 and call it a day.

## Golden sets, but small

Five hundred carefully labelled examples beat fifty thousand noisy ones. Buy the time of someone who actually knows the domain and have them grade with you.

## LLM-as-judge, but verified

LLM judges drift. We verify our judge on a 50-example anchor set every Monday morning. If the judge has moved more than 4%, we re-calibrate before reading anything else.

The eval system is the product.
    `.trim()
  },
  {
    slug: "private-llms-cost-math",
    title: "When private LLMs actually make sense.",
    excerpt:
      "A practical decision matrix for choosing between OpenAI, Anthropic, and self-hosted models.",
    category: "Engineering",
    readTime: "7 min",
    author: fieldAuthor,
    date: "2026-02-28",
    body: `
The marketing answer is "self-host everything." The honest answer is more nuanced.

## Volume crossover

For workloads below ~50M tokens a month, hosted APIs win on every dimension. Above ~500M tokens a month, self-hosted starts to dominate. Between those, it depends on latency, data sensitivity, and team appetite.

## Latency is sneaky

Self-hosting wins for low-latency, predictable workloads — voice agents and realtime applications. Hosted APIs add cold-start variability you cannot control.

## Compliance is binary

If your data cannot leave your perimeter, self-hosting wins immediately. The cost math becomes irrelevant.

We help teams run the numbers honestly. The answer isn't always self-host. But when it is, the savings are real.
    `.trim()
  },
  {
    slug: "designing-for-ai-uncertainty",
    title: "Designing interfaces for AI uncertainty.",
    excerpt:
      "How we communicate model confidence, errors, and edge cases without overwhelming users.",
    category: "Product",
    readTime: "6 min",
    author: productAuthor,
    date: "2026-02-12",
    body: `
Every AI product is a probability distribution dressed up as a button. How you communicate that probability to users determines whether they trust your product or quietly distrust it.

## Show provenance, not confidence scores

Users do not understand "87% confidence." They understand "based on these three documents." Always cite, never score.

## Make rollback obvious

Every AI suggestion should be one click away from being undone. Trust grows when users know they can recover.

## Defer to humans by default for irreversible actions

If the action is destructive — sending an email, deleting a record, charging a card — the AI proposes and the human disposes. Always.

These are not constraints on AI products. They are what makes AI products usable.
    `.trim()
  },
  {
    slug: "agent-observability-stack",
    title: "Our agent observability stack.",
    excerpt:
      "The exact telemetry, dashboards, and alerts we ship with every production agent.",
    category: "Engineering",
    readTime: "10 min",
    author: fieldAuthor,
    date: "2026-01-19",
    body: `
You can't operate what you can't see. Every production agent we ship comes with the same observability stack out of the box.

## Per-step traces

Every step (plan, tool call, verification) is a span. Inputs, outputs, latency, cost. Replayable for 90 days.

## Live cost dashboards

Tokens, dollars, by tenant, by feature, by model. Budget alerts before the bill, not after.

## Live quality dashboards

Eval scores running continuously on a sliding window of real traffic. We see regressions in hours, not weeks.

## Alerting that wakes people up

We page on five things: error rate, p99 latency, cost spend rate, eval score, and any halt that wasn't supposed to halt. Everything else is dashboard.

It's boring. It's the difference between an agent you trust and one you babysit.
    `.trim()
  },
  {
    slug: "small-team-big-leverage",
    title: "What a five-person AI team can ship in six months.",
    excerpt:
      "A field note on team shape, sequencing, and what we learned compressing a year of work into a quarter.",
    category: "Field Notes",
    readTime: "8 min",
    author: researchAuthor,
    date: "2026-01-04",
    body: `
A five-person team can ship more AI in six months than a thirty-person team can in two years. The shape matters more than the size.

## Two engineers, one designer, one operator, one accountable lead

Each of those roles is necessary. None are optional. Most teams skip the designer or the operator and pay for it later.

## Ship weekly, even when it hurts

The weekly release cadence forces honesty. Either you have something worth releasing, or you have a problem worth surfacing.

## Build the eval before the feature

The eval is the contract. The feature is the implementation. Most teams reverse this and end up unable to tell if changes are improvements.

The leverage is in the discipline, not the team size.
    `.trim()
  }
];

export const blogCategories = ["All", "Engineering", "Research", "Product", "Field Notes"] as const;

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
