"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InsuranceReviewPage() {

  const { language } = useLanguage();

  const texts: Record< "EN" | "KO", Record<string, string>> = {
    EN: {
      reviewTitle: "Insurance Review",
      reviewContent1: "Many policy holders are unsure about their exact coverage limits, exclusions, and benefits. Our Insurance Review service provides a complete assessment of your existing policies.",
      reviewContent2: "We identify coverage gaps, overlapping protections, and areas where you may be overpaying — ensuring your insurance truly works for you.",
      ctaTitle: "Unsure About Your Coverage?",
      ctaContent: "Let our experts review your current policies and ensure you’re properly protected.",
      requestReview: "Request a Review",
    },
    KO: {
      reviewTitle: "보험 검토",
      reviewContent1: "많은 보험 가입자들은 자신의 정확한 보장 한도, 면책 사항 및 혜택에 정확히 이해하시고 있지 못합니다. 저희가 기존 가입 보험에 대해 리뷰해 드리겠습니다.",
      reviewContent2: "저희는 불필요한 커버를 빼고 중복된 보험으로 고객이 더 많이 납부하고 계시는 보험료를 되찾아 드립니다.",
      ctaTitle: "보장에 대해 확신이 없으신가요?",
      ctaContent: "저희 전문가가 현재 보험 증권을 검토하고 귀하가 적절하게 보호받고 있는지 확인해 보세요.",
      requestReview: "검토 요청",
    },
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-screen"
      >
        <div className="relative h-[45svh] md:h-[60svh]">
          <Image
            src="/services/hero.jpg"
            alt="Insurance Review"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              {texts[language].reviewTitle}
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">{texts[language].reviewTitle}</h2>
            <p className="text-gray-700">
              {texts[language].reviewContent1}
            </p>
            <p className="text-gray-700">
              {texts[language].reviewContent2}
            </p>
          </div>

          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/services/insurance-review-2.jpg"
              alt="Insurance Policy Review"
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
            {texts[language].requestReview}
          </div>
        </Link>
      </motion.section>
    </main>
  );
}
