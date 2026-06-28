import { Database, FileText, Webhook, Cpu, CircleCheck, Send } from "lucide-react";

const inputs = [
  { icon: FileText, label: "Documents" },
  { icon: Database, label: "Database" },
  { icon: Webhook, label: "Webhooks" }
];

const outputs = [
  { icon: Send, label: "Notifications" },
  { icon: CircleCheck, label: "Approvals" },
  { icon: Cpu, label: "Actions" }
];

export function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line-dark bg-bg-orchestration p-8 md:p-12">
      <div aria-hidden className="absolute inset-0 bg-dot-grid-dark opacity-40" />
      <div className="relative grid items-stretch gap-6 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Inputs column */}
        <div className="flex flex-col justify-center gap-3">
          <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted mb-2">
            Inputs
          </p>
          {inputs.map((i) => (
            <div
              key={i.label}
              className="flex items-center gap-2.5 rounded-lg border border-line-dark bg-bg-dark-card/80 px-3 py-2.5"
            >
              <i.icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
              <span className="font-mono text-[12px] text-ink-inverse">{i.label}</span>
            </div>
          ))}
        </div>

        {/* Core */}
        <div className="relative rounded-2xl border border-accent/40 bg-accent/[0.06] p-5">
          <span aria-hidden className="absolute inset-0 rounded-2xl ring-1 ring-accent/30 animate-pulse" />
          <p className="relative font-mono text-[10px] uppercase tracking-eyebrow text-accent">
            Orchestration core
          </p>
          <ul className="relative mt-4 grid grid-cols-2 gap-2">
            {[
              { label: "Plan", icon: Cpu },
              { label: "Retrieve", icon: Database },
              { label: "Execute", icon: Send },
              { label: "Verify", icon: CircleCheck }
            ].map((n) => (
              <li
                key={n.label}
                className="flex items-center gap-2 rounded-md border border-accent/30 bg-black/40 px-3 py-2"
              >
                <n.icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                <span className="font-mono text-[11px] text-ink-inverse">{n.label}</span>
              </li>
            ))}
          </ul>
          {/* Animated arrows */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -left-6 top-1/2 hidden h-8 w-6 -translate-y-1/2 lg:block"
            viewBox="0 0 24 8"
          >
            <line x1="0" y1="4" x2="22" y2="4" stroke="rgba(255,112,0,0.5)" strokeDasharray="2 2" strokeWidth="0.8" className="animate-connection-pulse" />
            <path d="M22 4 L18 1 M22 4 L18 7" stroke="#FF7000" strokeWidth="0.8" fill="none" />
          </svg>
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-6 top-1/2 hidden h-8 w-6 -translate-y-1/2 lg:block"
            viewBox="0 0 24 8"
          >
            <line x1="2" y1="4" x2="22" y2="4" stroke="rgba(255,112,0,0.5)" strokeDasharray="2 2" strokeWidth="0.8" className="animate-connection-pulse" />
            <path d="M22 4 L18 1 M22 4 L18 7" stroke="#FF7000" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        {/* Outputs */}
        <div className="flex flex-col justify-center gap-3">
          <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted mb-2">
            Outputs
          </p>
          {outputs.map((o) => (
            <div
              key={o.label}
              className="flex items-center gap-2.5 rounded-lg border border-line-dark bg-bg-dark-card/80 px-3 py-2.5"
            >
              <o.icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
              <span className="font-mono text-[12px] text-ink-inverse">{o.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
