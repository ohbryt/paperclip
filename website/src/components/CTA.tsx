import { Download, Star, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function CTA() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      {/* Aurora background */}
      <div className="aurora-bg" />
      <div className="grid-bg" />

      <div
        className={`relative mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-text-primary sm:text-5xl md:text-6xl leading-tight">
          The future of work is
          <br />
          <span className="gradient-text">autonomous</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary leading-relaxed">
          Join thousands of builders creating AI-powered companies with Paperclip.
          Free, open-source, and community-driven.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#install"
            className="group flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand/20 hover:bg-brand-dark hover:shadow-2xl hover:shadow-brand/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            Download Paperclip
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <a
            href="https://github.com/paperclipai/paperclip"
            className="flex items-center gap-2 rounded-2xl border border-border-dim bg-surface-raised/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-text-primary hover:border-border-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Star className="h-5 w-5" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
