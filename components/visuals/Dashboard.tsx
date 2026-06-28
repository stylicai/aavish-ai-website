"use client";

import { LayoutGrid, BarChart3, Brain, Boxes, Workflow, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: Workflow, label: "Orchestration", active: true },
  { icon: Brain, label: "Models" },
  { icon: Boxes, label: "Agents" },
  { icon: BarChart3, label: "Analytics" }
];

export function Dashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration text-ink-inverse",
        className
      )}
    >
      {/* Ghost cursor — desktop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="absolute h-6 w-6 animate-ghost-cursor">
          <svg width="22" height="22" viewBox="0 0 22 22">
            <path
              d="M3 2 L18 11 L11 12 L8 18 Z"
              fill="#FFFFFF"
              stroke="#111"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden>
            <path d="M14 3 L25 24 H3 Z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <circle cx="14" cy="17" r="3" fill="#FF7000" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
            aavish/console
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-status-success">
            <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
            All systems operational
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {["Live", "Logs", "Evals"].map((tab, i) => (
            <span
              key={tab}
              className={cn(
                "rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-eyebrow",
                i === 0 ? "bg-accent/10 text-accent" : "text-ink-muted hover:text-ink-inverse"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Left rail */}
        <div className="col-span-3 border-r border-line-dark p-3 md:p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <div
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px]",
                    item.active
                      ? "bg-accent/10 text-accent"
                      : "text-ink-dark-body hover:text-ink-inverse"
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                  <span className="hidden md:inline">{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Center */}
        <div className="col-span-9 p-5 md:p-7">
          {/* Hero KPI */}
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
                System uptime · last 90 days
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-[56px] sm:text-[72px] leading-none tracking-display-tight text-ink-inverse">
                  99.9
                </span>
                <span className="font-serif text-[28px] text-accent">%</span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-ink-dark-body">
                ↑ 0.02% vs prior period
              </p>
            </div>

            {/* Sparkline */}
            <svg
              viewBox="0 0 220 64"
              className="hidden h-16 w-[220px] sm:block"
              aria-hidden
              fill="none"
            >
              <defs>
                <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF7000" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF7000" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 50 C 20 46, 30 30, 50 32 S 80 50, 100 38 S 140 18, 160 22 S 200 38, 220 16"
                stroke="#FF7000"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M0 50 C 20 46, 30 30, 50 32 S 80 50, 100 38 S 140 18, 160 22 S 200 38, 220 16 L 220 64 L 0 64 Z"
                fill="url(#dashGrad)"
              />
            </svg>
          </div>

          {/* KPI grid */}
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Active agents", value: "127" },
              { label: "p99 latency", value: "1.4s" },
              { label: "Errors / hr", value: "0.02%" },
              { label: "Cost / day", value: "$184" }
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-line-dark bg-black/30 p-3.5"
              >
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
                  {kpi.label}
                </p>
                <p className="mt-2 font-serif text-[22px] text-ink-inverse leading-none">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="mt-6 rounded-xl border border-line-dark bg-black/30">
            <div className="flex items-center justify-between border-b border-line-dark px-4 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted inline-flex items-center gap-1.5">
                <Activity className="h-3 w-3" strokeWidth={1.6} /> Live agent activity
              </p>
              <p className="font-mono text-[10px] text-accent">
                streaming
              </p>
            </div>
            <ul className="divide-y divide-line-dark">
              {[
                { agent: "loan-underwriter", action: "extracted 12 documents", t: "2s ago" },
                { agent: "shipment-voice", action: "resolved exception #4812", t: "4s ago" },
                { agent: "contract-redline", action: "completed clause pass", t: "11s ago" }
              ].map((row) => (
                <li
                  key={row.agent}
                  className="flex items-center justify-between px-4 py-2.5 font-mono text-[12px]"
                >
                  <span className="text-accent">{row.agent}</span>
                  <span className="text-ink-dark-body">{row.action}</span>
                  <span className="text-ink-muted">{row.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
