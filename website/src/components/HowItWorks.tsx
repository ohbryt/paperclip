import { Terminal, Bot, Cpu, Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { LucideIcon } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  code: string;
  icon: LucideIcon;
  color: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Install Paperclip",
    desc: "One command to get started. No Docker, no cloud required. Runs locally on your machine.",
    code: "npx paperclipai onboard --yes",
    icon: Terminal,
    color: "bg-brand/5",
  },
  {
    num: "02",
    title: "Design your company",
    desc: "Add agents, assign roles, set reporting hierarchy and budgets through the visual dashboard.",
    code: "CEO \u2192 Research Director \u2192 3 Researchers + QA + Writer",
    icon: Bot,
    color: "bg-accent-purple/5",
  },
  {
    num: "03",
    title: "Create issues & watch",
    desc: "Assign work and agents autonomously pick up, execute, and deliver production-ready results.",
    code: '"Analyze AI agent landscape" \u2192 30-page report in 20 min',
    icon: Cpu,
    color: "bg-accent-emerald/5",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="how-it-works"
      className="relative border-t border-border-dim bg-surface-raised/20 py-24 md:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-emerald mb-4">
            Getting Started
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-5xl">
            Up and running in <span className="gradient-text">60 seconds</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            From install to your first autonomous company in three simple steps
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-accent-purple/50 to-accent-emerald/50" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`group flex gap-6 md:gap-8 items-start transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms" }}
              >
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                  <div className={`absolute inset-0 rounded-2xl border border-border-dim bg-surface-raised group-hover:border-border-hover transition-colors duration-300`} />
                  <div className={`absolute inset-0 rounded-2xl ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <s.icon className="relative h-7 w-7 text-brand group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-surface-overlay border border-border-dim text-[10px] font-bold text-text-muted">
                    {s.num}
                  </span>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-brand transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border-dim bg-surface px-5 py-3 font-mono text-sm text-text-secondary group-hover:border-border-hover transition-colors duration-300">
                    <Check className="h-3.5 w-3.5 text-accent-emerald shrink-0" />
                    {s.code}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
