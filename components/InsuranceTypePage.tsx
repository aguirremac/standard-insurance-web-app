"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { QuoteButton } from "@/components/QuoteButton";
import { getInsuranceBySlug, insuranceTypesEN, insuranceTypeKOR } from "@/lib/insurance";
import {
  Building2,
  Home,
  Car,
  Shield,
  HardHat,
  FileCheck,
  TrendingUp,
  Users,
  Factory,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Map icons by name (must match your insuranceTypes icon)
const iconsMap: Record<string, any> = {
  Building2,
  Home,
  Car,
  Shield,
  HardHat,
  FileCheck,
  TrendingUp,
  Users,
  Factory,
};

export default function InsuranceTypePage() {
  const params = useParams();
  const { slug } = params as { slug: string};

  const [insurance, setInsurance] = useState<any>(null);
  const { language } = useLanguage();

  const insuranceTypes = language === "KO" ? insuranceTypeKOR : insuranceTypesEN;

  useEffect(() => {
    const data = getInsuranceBySlug(slug, language);
    if (data) setTimeout(() => setInsurance(data), 100); // Simulate loading delay
  }, [slug, language]);

  if (!insurance) {
    return <p className="text-center py-20">Loading or service not found...</p>;
  }

  // Resolve icon component
  const Icon = iconsMap[insurance.icon.name] || Shield;

  const texts: Record<"EN" | "KO", Record<string, string>> = {
    EN: {
      about: "About",
      needAQuote: "Need a quote?",
      speakWithSpecialists: "Speak with our insurance specialists today.",
      getAQuote: "Get a Quote",
    },
    KO: {
      about: "소개",
      needAQuote: "견적이 필요하신가요?",
      speakWithSpecialists: "오늘 저희 보험 전문가와 상담하세요.",
      getAQuote: "견적 받기",
    }
  }

  return (
    <main>
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative h-[60vh] flex items-center"
      >
        <Image
          src={insurance.image}
          alt={insurance.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          {/* <Icon className="h-10 w-10 mb-4 text-primary" /> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {insurance.title}
          </h1>
          <p className="max-w-xl text-lg text-white/90">{insurance.description}</p>
        </div>
      </motion.section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-5"
        >
          <h2 className="text-2xl font-semibold mb-4">{texts[language].about} {insurance.title}</h2>
          {insurance.longDescription.split("\n").map((para: string, idx: number) => {
            const trimmed = para.trim();
            if (!trimmed) return null;
            return (
              <p key={idx} className="text-muted-foreground py-5 leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl border p-6 h-fit hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="font-semibold mb-2">{texts[language].needAQuote}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {texts[language].speakWithSpecialists}
          </p>
          <QuoteButton to="/#quote" />
        </motion.div>
      </section>
    </main>
  );
}
