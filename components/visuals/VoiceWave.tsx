"use client";

import { Phone, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const transcript = [
  { speaker: "caller", text: "Hi, my pickup didn't happen yesterday — order 49812.", time: "00:02" },
  { speaker: "agent", text: "I've got it. I see the courier was rerouted. I can rebook for today between 4–6pm. Works?", time: "00:11" },
  { speaker: "caller", text: "Yes please.", time: "00:18" },
  { speaker: "agent", text: "Done. Confirmation sent. Anything else?", time: "00:22" }
];

// Wave bar heights (sampled). Looks like an audio waveform.
const bars = [
  18, 26, 14, 30, 22, 36, 24, 18, 28, 40, 32, 20, 26, 18, 30, 38, 26, 16, 22, 30,
  20, 14, 28, 36, 24, 18, 26, 32, 22, 16, 28, 40, 30, 18, 22, 28, 16, 24, 32, 20
];

export function VoiceWave({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line-dark bg-bg-orchestration text-ink-inverse",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
            <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-dark-body">
              shipment-voice · live call
            </span>
            <span className="font-mono text-[10px] text-ink-muted">
              exception #4812 · EN-IN
            </span>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          00:24 / live
        </span>
      </div>

      {/* Waveform */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-[2px] h-14">
          {bars.map((h, i) => {
            const active = i < bars.length * 0.55;
            return (
              <span
                key={i}
                className={cn(
                  "flex-1 rounded-sm",
                  active ? "bg-accent animate-pulse" : "bg-accent/30"
                )}
                style={{
                  height: `${h}px`,
                  animationDelay: `${(i % 6) * 0.12}s`
                }}
              />
            );
          })}
        </div>
        <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-ink-muted">
          <span>00:00</span>
          <span>00:24</span>
          <span>00:48</span>
        </div>
      </div>

      {/* Transcript */}
      <div className="border-t border-line-dark px-5 py-4">
        <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
          live transcript
        </p>
        <ul className="mt-3 space-y-2.5">
          {transcript.map((line, i) => (
            <li key={i} className="flex items-start gap-3 text-[13px]">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow w-12 shrink-0 pt-0.5 text-ink-muted">
                {line.time}
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-eyebrow w-12 shrink-0 pt-0.5",
                  line.speaker === "agent" ? "text-accent" : "text-ink-dark-body"
                )}
              >
                {line.speaker}
              </span>
              <p
                className={cn(
                  "min-w-0 flex-1",
                  line.speaker === "agent" ? "text-ink-inverse" : "text-ink-dark-body"
                )}
              >
                {line.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Resolution footer */}
      <div className="grid grid-cols-3 border-t border-line-dark">
        {[
          { k: "Resolution", v: "rebook", glyph: true },
          { k: "Handle time", v: "00:24" },
          { k: "Sentiment", v: "positive" }
        ].map((m, i) => (
          <div
            key={m.k}
            className={cn(
              "px-4 py-3",
              i !== 2 ? "border-r border-line-dark" : ""
            )}
          >
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-muted">
              {m.k}
            </p>
            <p className="mt-1 font-mono text-[13px] text-ink-inverse inline-flex items-center gap-1.5">
              {m.glyph && (
                <CheckCircle2 className="h-3.5 w-3.5 text-status-success" strokeWidth={1.8} />
              )}
              {m.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
