import { Terminal, Github, BookOpen, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Install() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx paperclipai onboard --yes");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="install"
      className="border-t border-border-dim bg-surface-raised/20 py-24 md:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand mb-4">
            Install
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-5xl">
            Get started in <span className="gradient-text">one command</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            Free forever. Open source. No account required.
          </p>
        </div>

        {/* Install command with copy */}
        <div
          className={`mx-auto mt-10 max-w-lg overflow-hidden rounded-2xl border border-border-dim bg-surface shadow-2xl shadow-black/30 glow-card transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border-dim px-4 py-3 bg-surface-overlay/30">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-text-muted font-mono">Terminal</span>
          </div>
          <div className="flex items-center justify-between p-6">
            <code className="text-lg font-medium text-text-primary">
              <span className="text-accent-emerald">$</span> npx paperclipai onboard --yes
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-border-dim px-3 py-1.5 text-xs text-text-muted hover:text-text-primary hover:border-border-hover transition-all duration-200"
              aria-label="Copy command"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent-emerald" />
                  <span className="text-accent-emerald">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Alt methods */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Terminal,
              iconColor: "text-brand",
              title: "npm / npx",
              content: (
                <p className="mt-1 font-mono text-xs text-text-secondary">
                  npx paperclipai onboard
                </p>
              ),
            },
            {
              icon: Github,
              iconColor: "text-text-primary",
              title: "GitHub",
              content: (
                <a
                  href="https://github.com/paperclipai/paperclip"
                  className="mt-1 block text-xs text-brand hover:underline"
                >
                  Clone &amp; build from source
                </a>
              ),
            },
            {
              icon: BookOpen,
              iconColor: "text-accent-purple",
              title: "Documentation",
              content: (
                <a
                  href="https://paperclip.ing/docs"
                  className="mt-1 block text-xs text-brand hover:underline"
                >
                  Read the docs
                </a>
              ),
            },
          ].map((method, i) => (
            <div
              key={method.title}
              className={`glow-card rounded-2xl border border-border-dim p-5 hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${400 + i * 100}ms` : "0ms" }}
            >
              <method.icon className={`mx-auto h-6 w-6 ${method.iconColor}`} />
              <h3 className="mt-3 text-sm font-semibold text-text-primary">
                {method.title}
              </h3>
              {method.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
