import { Download, Github, Star, ArrowRight } from "lucide-react";
import { useWordRotate } from "../hooks/useWordRotate";

const rotatingWords = ["zero humans", "AI agents", "full autonomy", "one command"];

export function Hero() {
  const { word, isAnimating } = useWordRotate(rotatingWords, 3000);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Animated grid background */}
      <div className="grid-bg" />

      {/* Glows */}
      <div className="hero-glow top-10 left-1/2 -translate-x-1/2" />
      <div className="hero-glow-secondary top-40 right-0" />

      {/* Floating orbs */}
      <div className="absolute top-32 left-[15%] h-2 w-2 rounded-full bg-brand/40 float" />
      <div className="absolute top-60 right-[20%] h-1.5 w-1.5 rounded-full bg-accent-purple/40 float-delayed" />
      <div className="absolute bottom-40 left-[25%] h-1 w-1 rounded-full bg-accent-emerald/30 float" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-dim bg-surface-raised/80 backdrop-blur-sm px-5 py-2 text-sm text-text-secondary animate-fade-in-down shimmer">
          <Star className="h-3.5 w-3.5 text-accent-amber" />
          <span>14,600+ stars on GitHub</span>
          <span className="h-1 w-1 rounded-full bg-text-muted" />
          <span className="text-brand font-medium">v0.3.0</span>
        </div>

        {/* Headline with word rotation */}
        <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-6xl md:text-8xl animate-fade-in-up">
          Run companies with
          <br />
          <span
            className={`inline-block gradient-text transition-all duration-300 ${
              isAnimating
                ? "opacity-0 translate-y-2 blur-sm"
                : "opacity-100 translate-y-0 blur-0"
            }`}
          >
            {word}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl animate-fade-in-up animation-delay-200">
          Open-source orchestration platform for autonomous AI companies.
          Build teams of AI agents with CEO, engineers, researchers &mdash;
          and let them run your business end-to-end.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="#install"
            className="group flex items-center gap-2.5 rounded-2xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand/20 hover:bg-brand-dark hover:shadow-2xl hover:shadow-brand/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            Download Free
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <a
            href="https://github.com/paperclipai/paperclip"
            className="group flex items-center gap-2.5 rounded-2xl border border-border-dim bg-surface-raised/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-text-primary hover:border-border-hover hover:bg-surface-overlay hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </div>

        {/* Terminal Preview */}
        <div className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-2xl border border-border-dim bg-surface-raised shadow-2xl shadow-black/40 animate-fade-in-up animation-delay-600 glow-card">
          <div className="flex items-center gap-2 border-b border-border-dim px-4 py-3 bg-surface-overlay/30">
            <div className="h-3 w-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors" />
            <div className="h-3 w-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors" />
            <span className="ml-2 text-xs text-text-muted font-mono">~/my-ai-startup</span>
          </div>
          <div className="p-6 text-left font-mono text-sm leading-loose">
            <p className="text-text-secondary">
              <span className="text-accent-emerald">$</span>{" "}
              <span className="text-text-primary">npx paperclipai onboard --yes</span>
            </p>
            <p className="mt-3 text-text-muted">
              <span className="text-brand">&#x276F;</span> Creating your first AI company...
            </p>
            <p className="text-text-muted">
              <span className="text-brand">&#x276F;</span> Spawning{" "}
              <span className="text-accent-purple">CEO Agent</span>{" "}
              <span className="text-text-muted/60">(claude-sonnet-4)</span>
            </p>
            <p className="text-text-muted">
              <span className="text-brand">&#x276F;</span> Spawning{" "}
              <span className="text-accent-cyan">Engineer Agent</span>{" "}
              <span className="text-text-muted/60">(claude-sonnet-4)</span>
            </p>
            <p className="text-text-muted">
              <span className="text-brand">&#x276F;</span> Spawning{" "}
              <span className="text-accent-amber">Researcher Agent</span>{" "}
              <span className="text-text-muted/60">(gpt-4o)</span>
            </p>
            <p className="mt-3 text-accent-emerald">
              &#10003; Company &quot;My AI Startup&quot; is live!
            </p>
            <p className="text-text-muted">
              <span className="text-brand">&#x276F;</span> Dashboard:{" "}
              <span className="text-brand underline">http://localhost:4440</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
