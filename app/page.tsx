import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Hero } from '@/components/Hero';
import { ProblemCards } from '@/components/ProblemCards';
import { HowItWorks } from '@/components/HowItWorks';
import { Ecosystem } from '@/components/Ecosystem';
import { CodeSnippets } from '@/components/CodeSnippets';
import { Privacy } from '@/components/Privacy';
import { TrustLayer } from '@/components/TrustLayer';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <Hero />
        <ProblemCards />
        <HowItWorks />
        <CodeSnippets />
        <Ecosystem />
        <Privacy />
        <TrustLayer />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
