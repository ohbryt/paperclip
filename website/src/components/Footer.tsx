import { Github, Twitter, MessageCircle } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "ClipMart", href: "#clipmart" },
    { label: "Pricing", href: "#install" },
    { label: "Changelog", href: "https://github.com/paperclipai/paperclip/releases" },
  ],
  Resources: [
    { label: "Documentation", href: "https://paperclip.ing/docs" },
    { label: "Getting Started", href: "#how-it-works" },
    { label: "API Reference", href: "https://paperclip.ing/docs/api" },
    { label: "Examples", href: "https://github.com/paperclipai/paperclip/tree/main/examples" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/paperclipai/paperclip" },
    { label: "Discord", href: "https://discord.gg/paperclip" },
    { label: "Twitter", href: "https://x.com/paperclipai" },
    { label: "Contributing", href: "https://github.com/paperclipai/paperclip/blob/main/CONTRIBUTING.md" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/paperclipai/paperclip", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/paperclipai", label: "Twitter" },
  { icon: MessageCircle, href: "https://discord.gg/paperclip", label: "Discord" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-dim bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5 text-lg font-bold text-text-primary group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand group-hover:shadow-lg group-hover:shadow-brand/30 transition-all duration-300">
                <span className="text-sm font-black text-white">P</span>
              </div>
              Paperclip
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Open-source orchestration platform for autonomous AI companies.
              Build, deploy, and manage teams of AI agents.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dim text-text-muted hover:text-text-primary hover:border-border-hover hover:bg-surface-overlay transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-text-primary mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-dim">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Paperclip. Open source under MIT License.
          </p>
          <p className="text-xs text-text-muted">
            Built with passion for the autonomous future.
          </p>
        </div>
      </div>
    </footer>
  );
}
