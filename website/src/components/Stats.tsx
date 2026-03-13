import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";
import { Users, GitFork, Download, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  { icon: Star, value: 14600, suffix: "+", label: "GitHub Stars", color: "text-accent-amber" },
  { icon: Download, value: 52000, suffix: "+", label: "Downloads", color: "text-brand" },
  { icon: Users, value: 3200, suffix: "+", label: "Active Teams", color: "text-accent-emerald" },
  { icon: GitFork, value: 890, suffix: "+", label: "Contributors", color: "text-accent-purple" },
];

function StatCard({ stat, isVisible, index }: { stat: Stat; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value, 2000, 0, isVisible);

  const formatNumber = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 1 : 1)}k`;
    return n.toString();
  };

  return (
    <div
      className={`group relative text-center p-6 rounded-2xl border border-border-dim bg-surface-raised/50 hover:border-border-hover hover:bg-surface-overlay/50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      <stat.icon className={`mx-auto h-5 w-5 ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
      <p className="text-3xl font-bold text-text-primary tabular-nums">
        {formatNumber(count)}
        <span className="text-text-muted">{stat.suffix}</span>
      </p>
      <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
