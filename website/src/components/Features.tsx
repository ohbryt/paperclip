import { Users, Network, Zap, Shield, GitBranch, Store } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  span?: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: "AI Agent Teams",
    desc: "Build hierarchical teams with CEO, managers, and specialists. Agents report to each other and collaborate autonomously on complex tasks.",
    color: "text-brand",
    span: "sm:col-span-2",
  },
  {
    icon: Network,
    title: "Org Chart & Governance",
    desc: "Visual org chart, board approvals, budget controls, and permission systems. Run a real company, not a chatbot.",
    color: "text-accent-purple",
  },
  {
    icon: Zap,
    title: "Issues & Projects",
    desc: "Create issues, assign to agents, track progress. Agents pick up work, write code, do research, and deliver results.",
    color: "text-accent-amber",
  },
  {
    icon: Shield,
    title: "Budget & Cost Controls",
    desc: "Per-agent monthly budgets, spend tracking, auto-pause at limits. Never get an unexpected AI bill again.",
    color: "text-accent-emerald",
  },
  {
    icon: GitBranch,
    title: "Adapter System",
    desc: "Plug in any AI: Claude, GPT, Codex, Cursor, or build custom adapters. Swap models without changing agents.",
    color: "text-accent-rose",
  },
  {
    icon: Store,
    title: "ClipMart Marketplace",
    desc: "Browse and install pre-built AI company templates. Research agencies, dev teams, marketing firms &mdash; one click deploy.",
    color: "text-accent-cyan",
    span: "sm:col-span-2",
  },
];

export function Features() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="features" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand mb-4">
            Platform
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-5xl">
            Everything you need to run
            <br />
            <span className="gradient-text">an AI company</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Not just agents &mdash; a complete operating system for autonomous
            businesses with governance, budgets, and marketplace.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group glow-card rounded-2xl border border-border-dim p-6 md:p-8 hover:-translate-y-1 transition-all duration-500 ${
                f.span || ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 80}ms` : "0ms" }}
            >
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-overlay border border-border-dim group-hover:scale-110 group-hover:border-border-hover transition-all duration-300">
                  <f.icon className={`h-6 w-6 ${f.color}`} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text-primary">
                  {f.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: f.desc }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
