'use client';
import { HeroSection } from "@/components/HeroSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { InsuranceCards } from "@/components/InsuranceCards";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASection } from "@/components/CTASection";

export default function App() {
  return (
        <>
        <HeroSection />
        <WelcomeSection />
        <InsuranceCards />
        <CTASection />
        <QuoteForm />
        </>
  );
}
