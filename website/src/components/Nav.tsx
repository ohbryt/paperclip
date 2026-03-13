import { useState, useEffect } from "react";
import { Github, Menu, X, Sparkles } from "lucide-react";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#clipmart", label: "ClipMart" },
    { href: "https://paperclip.ing/docs", label: "Docs" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border-dim bg-surface/80 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold text-text-primary group"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand group-hover:shadow-lg group-hover:shadow-brand/30 transition-all duration-300">
            <span className="text-sm font-black text-white">P</span>
            <div className="absolute inset-0 rounded-lg bg-brand opacity-0 blur-md group-hover:opacity-50 transition-opacity duration-300" />
          </div>
          Paperclip
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative hover:text-text-primary transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/paperclipai/paperclip"
            className="flex items-center gap-1.5 rounded-lg border border-border-dim px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:border-border-hover hover:bg-surface-card transition-all duration-200"
            aria-label="View on GitHub"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#install"
            className="hidden sm:flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/25 transition-all duration-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Get Started
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden items-center justify-center rounded-lg border border-border-dim p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 border-t border-border-dim" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 glass px-6 py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-text-secondary hover:bg-surface-overlay hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#install"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Get Started Free
          </a>
        </nav>
      </div>
    </header>
  );
}
