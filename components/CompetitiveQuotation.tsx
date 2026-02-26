"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CompetitiveQuotationPage() {

const { language } = useLanguage();
const texts: Record< "EN" | "KO", Record<string, string>> = {
  EN: {
    title: "Competitive Quotation",
    subtitle: "Do Not Pay More Than You Are Covered",
    content1: "Insurance premiums should reflect the actual level of protection you receive. Our competitive quotation service ensures that you are not overpaying for limited coverage or paying for benefits that do not match your risk profile.",
    content2: "We work with a wide network of insurers to obtain multiple quotes, carefully comparing policy wordings, exclusions, deductibles, and coverage limits. This allows us to recommend the most suitable option based on value, not just price.",
    content3: "Whether you are protecting your business, property, or personal assets, our approach ensures transparency and cost efficiency. You gain access to tailored protection that aligns with your needs while keeping premiums competitive and sustainable.",
    ctaTitle: "Get a Competitive Insurance Proposal",
    ctaContent: "Let us compare the market for you and deliver a quotation that balances comprehensive protection with cost efficiency",
    requestQuotation: "Request a Quote",
  },
  KO: {
    title: "경쟁력 있는 견적",
    subtitle: "보장받는 것보다 더 많은 비용을 지불하지 마세요",
    content1: "보험료는 귀하가 받는 실제 보호 수준을 반영해야 합니다. 우리의 경쟁력 있는 견적 서비스는 제한된 보장에 대해 과도한 비용을 지불하거나 귀하의 위험 프로필과 일치하지 않는 혜택에 대해 비용을 지불하지 않도록 보장합니다.",
    content2: "우리는 광범위한 보험사 네트워크와 협력하여 여러 견적을 얻고, 정책 문구, 제외 사항, 공제액 및 보장 한도를 신중하게 비교합니다. 이를 통해 단순한 가격이 아닌 가치에 기반하여 가장 적합한 옵션을 추천할 수 있습니다.",
    content3: "비즈니스, 재산 또는 개인 자산을 보호하든, 우리의 접근 방식은 투명성과 비용 효율성을 보장합니다. 귀하는 필요에 맞는 맞춤형 보호에 접근할 수 있으며, 보험료는 경쟁력 있고 지속 가능하게 유지됩니다.",
    ctaTitle: "경쟁력 있는 보험 제안 받기",
    ctaContent: "시장 조사를 대신해 드리고 포괄적인 보호와 비용 효율성을 균형 있게 제공하는 견적을 제공하겠습니다.",
    requestQuotation: "견적 요청",
  },
};

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-screen"
      >
        <div className="relative h-[45svh] md:h-[60svh]">
          <Image
            src="/services/hero.jpg"
            alt="Competitive Insurance Quotation"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              {texts[language].title}
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl font-bold">
              {texts[language].subtitle}
            </h2>

            <p className="text-gray-700">
              {texts[language].content1}
            </p>

            <p className="text-gray-700">
              {texts[language].content2}
            </p>

            <p className="text-gray-700">
              {texts[language].content3}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/services/competitive-quotation.jpg"
              alt="Insurance Comparison"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="bg-primary text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {texts[language].ctaTitle}
        </h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          {texts[language].ctaContent}
        </p>
        <Link href="/#quote">
          <div className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            {texts[language].requestQuotation}
          </div>
        </Link>
      </motion.section>
    </main>
  );
}