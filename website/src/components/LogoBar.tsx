import { useScrollReveal } from "../hooks/useScrollReveal";

const adapters = [
  { name: "Claude", icon: "C" },
  { name: "Codex", icon: "X" },
  { name: "Cursor", icon: "Cu" },
  { name: "OpenCode", icon: "OC" },
  { name: "GPT-4o", icon: "G" },
  { name: "Gemini", icon: "Ge" },
  { name: "Pi", icon: "Pi" },
  { name: "Custom", icon: "+" },
];

const allAdapters = [...adapters, ...adapters];

export function LogoBar() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`border-y border-border-dim bg-surface-raised/30 py-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
          Works with any AI model
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-surface-raised/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-surface-raised/80 to-transparent" />
          <div className="marquee-track">
            {allAdapters.map((adapter, i) => (
              <div
                key={`${adapter.name}-${i}`}
                className="flex items-center gap-3 rounded-xl border border-border-dim bg-surface/50 px-5 py-3 hover:border-border-hover hover:bg-surface-overlay/50 transition-all duration-300 shrink-0"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-overlay text-xs font-bold text-brand">
                  {adapter.icon}
                </div>
                <span className="text-sm font-medium text-text-secondary whitespace-nowrap">
                  {adapter.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
