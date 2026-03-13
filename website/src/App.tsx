import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { LogoBar } from "./components/LogoBar";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { ClipMart } from "./components/ClipMart";
import { Testimonials } from "./components/Testimonials";
import { Install } from "./components/Install";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Stats />
        <Features />
        <HowItWorks />
        <ClipMart />
        <Testimonials />
        <Install />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
