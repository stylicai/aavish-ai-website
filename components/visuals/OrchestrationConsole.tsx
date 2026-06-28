"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Server,
  Container,
  Network,
  Scaling,
  Globe,
  Activity,
  Boxes,
  Shield,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Region = {
  id: string;
  city: string;
  code: string;
  x: number;
  y: number;
  cluster: string;
  nodes: string;
  pods: number;
  latency: string;
  status: "healthy" | "scaling";
};

const regions: Region[] = [
  {
    id: "us",
    city: "Virginia",
    code: "us-east-1",
    x: 22,
    y: 38,
    cluster: "aavish-us-prod",
    nodes: "12/12",
    pods: 34,
    latency: "38ms",
    status: "healthy"
  },
  {
    id: "eu",
    city: "Frankfurt",
    code: "eu-central-1",
    x: 46,
    y: 30,
    cluster: "aavish-eu-prod",
    nodes: "10/10",
    pods: 28,
    latency: "52ms",
    status: "healthy"
  },
  {
    id: "in",
    city: "Mumbai",
    code: "ap-south-1",
    x: 66,
    y: 48,
    cluster: "aavish-in-prod",
    nodes: "14/14",
    pods: 41,
    latency: "44ms",
    status: "scaling"
  },
  {
    id: "sa",
    city: "São Paulo",
    code: "sa-east-1",
    x: 30,
    y: 68,
    cluster: "aavish-sa-prod",
    nodes: "8/8",
    pods: 12,
    latency: "61ms",
    status: "healthy"
  },
  {
    id: "ap",
    city: "Singapore",
    code: "ap-southeast-1",
    x: 82,
    y: 58,
    cluster: "aavish-ap-prod",
    nodes: "11/11",
    pods: 22,
    latency: "49ms",
    status: "healthy"
  }
];

const regionEdges: [string, string][] = [
  ["us", "eu"],
  ["eu", "in"],
  ["in", "ap"],
  ["us", "sa"],
  ["in", "sa"]
];

const navItems = [
  { icon: LayoutGrid, label: "Overview", active: false },
  { icon: Server, label: "Infrastructure", active: true },
  { icon: Boxes, label: "Deployments" },
  { icon: Activity, label: "Observability" },
  { icon: Shield, label: "Security" }
];

const architectureFlow = [
  { label: "Traffic", detail: "API · Webhooks", icon: Globe },
  { label: "Load balancer", detail: "Global LB · TLS", icon: Network },
  { label: "Ingress", detail: "Nginx · rate limits", icon: Server },
  { label: "Kubernetes", detail: "EKS · GKE · AKS", icon: Boxes },
  { label: "Workloads", detail: "Docker · agents", icon: Container },
  { label: "Autoscale", detail: "HPA · 40–120 pods", icon: Scaling }
];

const infraStack = [
  { layer: "Edge", items: ["Cloudflare CDN", "WAF · DDoS", "Geo routing"] },
  { layer: "Ingress", items: ["Nginx ingress", "cert-manager", "mTLS internal"] },
  { layer: "Orchestration", items: ["Kubernetes 1.29", "Helm charts", "ArgoCD sync"] },
  { layer: "Runtime", items: ["Docker images", "GPU nodes · L4", "Secrets · Vault"] }
];

const clusterRows = regions.map((r) => ({
  region: r.city,
  code: r.code,
  cluster: r.cluster,
  nodes: r.nodes,
  pods: r.pods,
  nginx: "healthy",
  hpa: r.status === "scaling" ? "scaling 78→94" : "steady",
  lb: "active",
  status: r.status
}));

const accordionSections = [
  { id: "footprint", title: "Global footprint · multi-city", badge: "active-active" },
  { id: "path", title: "Request path · load balanced & auto-scaled" },
  { id: "clusters", title: "Cluster management · per region" }
] as const;

function GlobalFootprintMap() {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-xl border border-line-dark bg-[#080808]">
      <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-60" />
      <svg
        aria-hidden
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <g stroke="rgba(255,255,255,0.06)" fill="none" strokeWidth="0.3" strokeDasharray="0.6 0.6">
          <path d="M22 22 C 28 24, 34 30, 32 42 C 30 54, 28 62, 30 76 C 32 86, 22 90, 18 80 C 14 64, 16 48, 14 36 C 14 28, 18 22, 22 22 Z" />
          <path d="M50 20 C 60 22, 64 30, 60 40 C 56 56, 54 70, 50 84 C 46 76, 44 60, 46 46 C 46 32, 48 22, 50 20 Z" />
          <path d="M74 22 C 88 22, 100 26, 110 36 C 122 48, 120 62, 108 72 C 92 80, 80 76, 72 60 C 66 46, 68 30, 74 22 Z" />
          <path d="M118 78 C 128 76, 138 80, 134 88 C 128 92, 118 90, 116 84 Z" />
        </g>
        {regionEdges.map(([a, b], i) => {
          const na = regions.find((r) => r.id === a)!;
          const nb = regions.find((r) => r.id === b)!;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgba(255,112,0,0.35)"
              strokeWidth="0.3"
              strokeDasharray="1 1"
              className="animate-connection-pulse"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          );
        })}
      </svg>

      {regions.map((r, i) => (
        <div
          key={r.id}
          className="absolute"
          style={{
            left: `${r.x}%`,
            top: `${r.y}%`,
            transform: "translate(-50%, -50%)"
          }}
        >
          <div className="relative">
            <span
              className="absolute inset-0 -m-3 rounded-full bg-accent/20 animate-node-ping"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <div className="relative min-w-[88px] rounded-lg border border-line-dark bg-[#141414] px-2 py-1.5">
              <p className="font-mono text-[9px] uppercase text-accent">{r.city}</p>
              <p className="font-mono text-[8px] text-ink-muted">{r.code}</p>
              <p className="mt-1 font-mono text-[8px] text-ink-dark-body">
                {r.pods} pods · {r.latency}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RequestPathFlow() {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {architectureFlow.map((step, i) => (
        <div key={step.label} className="flex items-center gap-1">
          <div className="flex items-center gap-2 rounded-lg border border-line-dark bg-[#141414] px-2.5 py-2">
            <step.icon className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.6} />
            <div>
              <p className="font-mono text-[10px] text-ink-inverse">{step.label}</p>
              <p className="font-mono text-[8px] text-ink-muted">{step.detail}</p>
            </div>
          </div>
          {i < architectureFlow.length - 1 && (
            <ChevronRight className="h-3 w-3 shrink-0 text-ink-muted" strokeWidth={1.5} />
          )}
        </div>
      ))}
    </div>
  );
}

function ClusterManagement() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          {["Docker", "K8s", "Nginx", "HPA"].map((tag) => (
            <span
              key={tag}
              className="rounded border border-line-dark bg-[#141414] px-2 py-0.5 font-mono text-[9px] uppercase text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        {infraStack.map((stack) => (
          <div
            key={stack.layer}
            className="rounded-lg border border-line-dark bg-[#111111] px-3 py-2.5"
          >
            <p className="font-mono text-[9px] uppercase tracking-eyebrow text-accent">
              {stack.layer}
            </p>
            <ul className="mt-2 space-y-1">
              {stack.items.map((item) => (
                <li key={item} className="font-mono text-[10px] text-ink-dark-body">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-line-dark">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[1.2fr_1fr_0.6fr_0.5fr_0.7fr_0.7fr_0.6fr_0.6fr] gap-2 border-b border-line-dark bg-[#111111] px-3 py-2 font-mono text-[8px] uppercase tracking-eyebrow text-ink-muted">
            <span>Region</span>
            <span>Cluster</span>
            <span>Nodes</span>
            <span>Pods</span>
            <span>Nginx</span>
            <span>LB</span>
            <span>HPA</span>
            <span>Status</span>
          </div>
          <ul className="divide-y divide-line-dark">
            {clusterRows.map((row) => (
              <li
                key={row.code}
                className="grid grid-cols-[1.2fr_1fr_0.6fr_0.5fr_0.7fr_0.7fr_0.6fr_0.6fr] items-center gap-2 px-3 py-2.5 transition-colors hover:bg-[#141414]"
              >
                <div>
                  <p className="font-mono text-[11px] text-ink-inverse">{row.region}</p>
                  <p className="font-mono text-[9px] text-ink-muted">{row.code}</p>
                </div>
                <span className="truncate font-mono text-[10px] text-ink-dark-body">
                  {row.cluster}
                </span>
                <span className="font-mono text-[10px] text-status-success">{row.nodes}</span>
                <span className="font-mono text-[10px] text-ink-inverse">{row.pods}</span>
                <span className="font-mono text-[10px] text-status-success">{row.nginx}</span>
                <span className="font-mono text-[10px] text-ink-dark-body">{row.lb}</span>
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    row.status === "scaling" ? "text-accent" : "text-ink-muted"
                  )}
                >
                  {row.hpa}
                </span>
                <span
                  className={cn(
                    "inline-flex w-fit rounded-full px-1.5 py-0.5 font-mono text-[8px] uppercase",
                    row.status === "scaling"
                      ? "bg-accent/15 text-accent"
                      : "bg-status-success/15 text-status-success"
                  )}
                >
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2">
        <Scaling className="h-3.5 w-3.5 shrink-0 animate-pulse text-accent" strokeWidth={1.6} />
        <p className="font-mono text-[10px] text-ink-dark-body">
          <span className="text-accent">HPA</span> · ap-south-1 scaled{" "}
          <span className="text-ink-inverse">78 → 94 pods</span> · nginx ingress healthy · docker
          pull complete
        </p>
      </div>
    </div>
  );
}

export function OrchestrationConsole({ className }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className={cn(
          "relative flex max-h-[1024px] flex-col overflow-hidden rounded-3xl border border-line-dark bg-[#0c0c0c] text-ink-inverse",
          className
        )}
      >
        {/* SaaS top bar */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-line-dark bg-[#111111] px-5 py-3">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden>
              <path
                d="M14 3 L25 24 H3 Z"
                stroke="#FFFFFF"
                strokeWidth="1.6"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="14" cy="17" r="3" fill="#FF7000" />
            </svg>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-inverse">
                aavish / deploy console
              </p>
              <p className="font-mono text-[10px] text-ink-muted">production · multi-region</p>
            </div>
          </div>
          <div className="hidden items-center gap-1 rounded-lg border border-line-dark bg-black/40 p-0.5 sm:flex">
            {["Overview", "Infrastructure", "Agents", "Logs"].map((tab, i) => (
              <span
                key={tab}
                className={cn(
                  "rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow",
                  i === 1 ? "bg-accent/15 text-accent" : "text-ink-muted"
                )}
              >
                {tab}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-status-success/30 bg-status-success/10 px-2.5 py-1 font-mono text-[10px] text-status-success">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-success" />
            All regions healthy
          </span>
        </div>

        <div className="grid min-h-0 flex-1 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="hidden border-r border-line-dark bg-[#0a0a0a] p-3 lg:col-span-2 lg:block">
            <ul className="space-y-0.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-2.5 py-2 font-mono text-[11px]",
                      item.active
                        ? "border border-accent/20 bg-accent/10 text-accent"
                        : "text-ink-muted hover:text-ink-dark-body"
                    )}
                  >
                    <item.icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Main dashboard */}
          <div className="flex min-h-0 flex-col border-r border-line-dark lg:col-span-7">
            {/* KPI strip */}
            <div className="grid shrink-0 grid-cols-2 border-b border-line-dark bg-[#0a0a0a] sm:grid-cols-4">
              {[
                { k: "Regions", v: "5", sub: "cities live" },
                { k: "K8s nodes", v: "55", sub: "all ready" },
                { k: "Pods running", v: "137", sub: "agents + APIs" },
                { k: "Req / day", v: "1.2M", sub: "p99 412ms" }
              ].map((m, i) => (
                <div
                  key={m.k}
                  className={cn(
                    "px-4 py-3",
                    i < 3 ? "border-r border-line-dark" : "",
                    i < 2 ? "border-b border-line-dark sm:border-b-0" : ""
                  )}
                >
                  <p className="font-mono text-[9px] uppercase tracking-eyebrow text-ink-muted">
                    {m.k}
                  </p>
                  <p className="mt-1 font-serif text-[22px] leading-none text-ink-inverse">
                    {m.v}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-ink-muted">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* Accordion sections */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              <ul className="divide-y divide-line-dark">
                {accordionSections.map((section, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[#111111]"
                      >
                        <span
                          className={cn(
                            "font-mono text-[10px] uppercase tracking-eyebrow",
                            isOpen ? "text-accent" : "text-ink-muted"
                          )}
                        >
                          {section.title}
                        </span>
                        <span className="flex shrink-0 items-center gap-2">
                          {"badge" in section && section.badge && (
                            <span className="font-mono text-[10px] text-accent">{section.badge}</span>
                          )}
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 text-ink-muted transition-transform duration-200",
                              isOpen && "rotate-180 text-accent"
                            )}
                            strokeWidth={1.6}
                          />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <m.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-line-dark bg-[#080808] px-4 pb-4 pt-3">
                              {section.id === "footprint" && <GlobalFootprintMap />}
                              {section.id === "path" && <RequestPathFlow />}
                              {section.id === "clusters" && <ClusterManagement />}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right metrics panel */}
          <div className="flex min-h-0 flex-col overflow-y-auto bg-[#0a0a0a] lg:col-span-3">
            <div className="border-b border-line-dark p-4">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
                Platform health
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { label: "Control plane", value: "99.99%" },
                  { label: "Ingress (nginx)", value: "healthy" },
                  { label: "Cluster autoscaler", value: "on" },
                  { label: "Failover events", value: "0" }
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-ink-dark-body">{m.label}</span>
                    <span className="font-mono text-[11px] text-status-success">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b border-line-dark p-4">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
                Load distribution
              </p>
              <ul className="mt-3 space-y-2">
                {regions.slice(0, 4).map((r) => (
                  <li key={r.id}>
                    <div className="mb-1 flex justify-between font-mono text-[10px]">
                      <span className="text-ink-dark-body">{r.city}</span>
                      <span className="text-ink-muted">{Math.round((r.pods / 137) * 100)}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-accent/70"
                        style={{ width: `${(r.pods / 41) * 100}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
                Recent events
              </p>
              <ul className="mt-3 space-y-2 font-mono text-[10px] leading-relaxed">
                <li>
                  <span className="text-ink-muted">12:04</span>{" "}
                  <span className="text-accent">scale</span> mumbai +16 pods
                </li>
                <li>
                  <span className="text-ink-muted">11:58</span>{" "}
                  <span className="text-status-success">deploy</span> loan-underwriter v2.4
                </li>
                <li>
                  <span className="text-ink-muted">11:41</span>{" "}
                  <span className="text-ink-dark-body">nginx</span> cert renewed eu-central
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
