import { CtaSection } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { ProblemSection } from "@/components/landing/problem";
import { SolutionSection } from "@/components/landing/solution";
import { UseCasesSection } from "@/components/landing/use-cases";

export default function Home() {
  return (
    <div className="relative isolate bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.18),rgba(255,255,255,0)_65%)]" />
      </div>

      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
