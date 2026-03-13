import { useScrollReveal } from "../hooks/useScrollReveal";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced a 12-person research team with a Paperclip AI company. It delivers 30-page reports in 20 minutes that used to take a week.",
    name: "Sarah Chen",
    role: "CEO",
    company: "NeuralVentures",
    avatar: "SC",
  },
  {
    quote:
      "The adapter system is genius. We swap between Claude and GPT depending on the task, and agents don't even notice. Costs dropped 40%.",
    name: "Marcus Johnson",
    role: "CTO",
    company: "DataForge AI",
    avatar: "MJ",
  },
  {
    quote:
      "ClipMart templates let us spin up an entire marketing department in 5 minutes. The budget controls mean we never worry about runaway costs.",
    name: "Yuki Tanaka",
    role: "Head of Growth",
    company: "ScaleUp Labs",
    avatar: "YT",
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section className="border-t border-border-dim bg-surface-raised/20 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-amber mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-5xl">
            Loved by <span className="gradient-text">builders</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            Teams around the world are running autonomous companies with Paperclip
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group glow-card rounded-2xl border border-border-dim p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
            >
              <Quote className="h-5 w-5 text-brand/40 mb-4" />
              <p className="text-sm leading-relaxed text-text-secondary italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border-dim">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-overlay border border-border-dim text-xs font-bold text-brand">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
