import { Store, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Template {
  title: string;
  agents: number;
  desc: string;
  color: string;
  tags: string[];
  popular?: boolean;
}

const templates: Template[] = [
  {
    title: "AI Research Agency",
    agents: 7,
    desc: "CEO, Research Director, 3 Researchers, QA, Report Writer",
    color: "from-brand to-accent-purple",
    tags: ["Research", "Analysis"],
    popular: true,
  },
  {
    title: "AI Dev Team",
    agents: 5,
    desc: "Eng Lead, Senior Dev, Developer, QA Engineer, DevOps",
    color: "from-accent-emerald to-accent-cyan",
    tags: ["Engineering", "CI/CD"],
  },
  {
    title: "Content Marketing",
    agents: 4,
    desc: "Content Strategist, Copywriter, Social Media, SEO Analyst",
    color: "from-accent-amber to-orange-400",
    tags: ["Marketing", "SEO"],
  },
  {
    title: "Customer Support",
    agents: 6,
    desc: "Support Lead, Tier 1 & 2 Agents, Knowledge Base, Escalation Manager",
    color: "from-accent-rose to-pink-400",
    tags: ["Support", "Knowledge"],
  },
];

export function ClipMart() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="clipmart" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-purple/20 bg-accent-purple/5 px-5 py-2 text-sm text-accent-purple">
            <Store className="h-3.5 w-3.5" />
            ClipMart Marketplace
          </div>
          <h2 className="text-3xl font-bold text-text-primary sm:text-5xl">
            Install a company in <span className="gradient-text">one click</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Pre-built AI company templates ready to deploy. Research agencies,
            dev teams, marketing firms &mdash; all free, all open source.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {templates.map((t, i) => (
            <div
              key={t.title}
              className={`group glow-card rounded-2xl border border-border-dim overflow-hidden hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div className={`h-1.5 bg-gradient-to-r ${t.color}`} />
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-text-primary">{t.title}</h3>
                      {t.popular && (
                        <span className="flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold text-brand uppercase tracking-wider">
                          <Sparkles className="h-2.5 w-2.5" />
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{t.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-surface-overlay px-3 py-1 text-xs font-medium text-text-secondary border border-border-dim">
                    {t.agents} agents
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border-dim bg-surface/50 px-2.5 py-1 text-xs text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1.5 rounded-xl bg-surface-overlay px-4 py-2 text-sm font-medium text-text-primary hover:bg-brand hover:text-white transition-all duration-300 group/btn">
                    Install
                    <ChevronRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://app.paperclip.ing/marketplace"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-light transition-colors"
          >
            Browse all templates on ClipMart
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
