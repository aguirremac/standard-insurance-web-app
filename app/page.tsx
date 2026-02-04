'use client';

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { InsuranceCards } from "@/components/InsuranceCards";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <InsuranceCards />
        <QuoteForm />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
