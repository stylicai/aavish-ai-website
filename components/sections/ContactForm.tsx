"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
 name: z.string().min(2, "Please enter your name."),
 email: z.string().email("A valid work email is required."),
 company: z.string().min(2, "Company name is required."),
 projectType: z.enum(["Agents", "RAG", "Automation", "Custom AI", "Other"], {
 required_error: "Pick what's closest."
 }),
 budget: z.enum(["<$25k", "$25–75k", "$75–200k", "$200k+", "Not sure"]),
 message: z.string().min(20, "A sentence or two helps us route faster.")
});

type FormValues = z.infer<typeof schema>;

const projectTypes: FormValues["projectType"][] = ["Agents", "RAG", "Automation", "Custom AI", "Other"];
const budgets: FormValues["budget"][] = ["<$25k", "$25–75k", "$75–200k", "$200k+", "Not sure"];

export function ContactForm() {
 const [submitted, setSubmitted] = useState(false);

 const {
 register,
 handleSubmit,
 setValue,
 watch,
 formState: { errors, isSubmitting }
 } = useForm<FormValues>({
 resolver: zodResolver(schema),
 defaultValues: { budget: "Not sure" }
 });

 const selectedBudget = watch("budget");

 const onSubmit = async (_values: FormValues) => {
 await new Promise((r) => setTimeout(r, 900));
 setSubmitted(true);
 };

 if (submitted) {
 return (
 <div className="rounded-2xl border border-line bg-bg-card p-8 sm:p-10">
 <div className="flex items-start gap-4">
 <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
 <div>
 <h3 className="font-serif text-[28px] leading-snug tracking-display text-ink">
 Message received.
 </h3>
 <p className="mt-3 text-body text-ink-body max-w-[48ch]">
 We'll reply within 24 hours with a senior engineer's point of view, a sequencing plan, and an estimate.
 </p>
 <p className="mt-5 font-mono text-[11px] uppercase tracking-eyebrow text-accent inline-flex items-center gap-2">
 <span className="h-1.5 w-1.5 rounded-full bg-accent" />
 Trace id · aavish_{Math.random().toString(36).slice(2, 9)}
 </p>
 </div>
 </div>
 </div>
 );
 }

 return (
 <form
 onSubmit={handleSubmit(onSubmit)}
 className="rounded-2xl border border-line bg-bg-card p-7 sm:p-9 space-y-6"
 noValidate
 >
 <div className="grid gap-5 sm:grid-cols-2">
 <Field label="Your name" error={errors.name?.message}>
 <input
 type="text"
 placeholder="Aarav Shankar"
 {...register("name")}
 className={inputCls}
 />
 </Field>
 <Field label="Work email" error={errors.email?.message}>
 <input
 type="email"
 placeholder="you@company.com"
 {...register("email")}
 className={inputCls}
 />
 </Field>
 </div>

 <Field label="Company" error={errors.company?.message}>
 <input
 type="text"
 placeholder="Sequence Capital"
 {...register("company")}
 className={inputCls}
 />
 </Field>

 <Field label="Project type" error={errors.projectType?.message}>
 <div className="relative">
 <select
 {...register("projectType")}
 defaultValue=""
 className={cn(inputCls, "appearance-none pr-10")}
 >
 <option value="" disabled>
 Pick what's closest
 </option>
 {projectTypes.map((p) => (
 <option key={p} value={p}>
 {p}
 </option>
 ))}
 </select>
 <ChevronDown
 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
 strokeWidth={1.5}
 aria-hidden
 />
 </div>
 </Field>

 <Field label="Budget range" error={errors.budget?.message}>
 <div className="flex flex-wrap gap-2">
 {budgets.map((b) => {
 const active = selectedBudget === b;
 return (
 <button
 type="button"
 key={b}
 onClick={() => setValue("budget", b, { shouldValidate: true })}
 className={cn(
 "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-eyebrow transition-colors",
 active
 ? "border-accent bg-accent text-ink-inverse"
 : "border-line bg-bg-page text-ink-body hover:border-accent/50 hover:text-ink"
 )}
 >
 {b}
 </button>
 );
 })}
 </div>
 </Field>

 <Field label="Tell us about your project" error={errors.message?.message}>
 <textarea
 rows={5}
 placeholder="A sentence or two on what you're trying to build, what's been tried, and the outcome you're after."
 {...register("message")}
 className={cn(inputCls, "min-h-[140px] py-3 resize-y leading-relaxed")}
 />
 </Field>

 <div className="flex flex-col-reverse items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center">
 <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
 We reply within 24 hours · NDA on request
 </p>
 <button
 type="submit"
 disabled={isSubmitting}
 className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-[14px] font-medium text-ink-inverse transition-all duration-300 ease-hover hover:bg-accent-hover hover:-translate-y-[1px] hover:shadow-btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
 >
 {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />}
 {isSubmitting ? "Sending..." : "Send message"}
 </button>
 </div>
 </form>
 );
}

const inputCls =
 "h-11 w-full rounded-xl border border-line bg-bg-page px-4 text-[14px] text-ink placeholder:text-ink-muted transition-all duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function Field({
 label,
 error,
 children
}: {
 label: string;
 error?: string;
 children: React.ReactNode;
}) {
 return (
 <label className="block">
 <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-ink-body">
 {label}
 </span>
 <div className="mt-2">{children}</div>
 {error && (
 <span className="mt-2 inline-block font-mono text-[11px] text-status-error">{error}</span>
 )}
 </label>
 );
}
