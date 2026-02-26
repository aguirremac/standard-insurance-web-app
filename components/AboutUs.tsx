"use client";

import Image from "next/image";
import NetworkSection from "./NetworkSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUsPage() {

  const { language } = useLanguage();

  const texts: Record< "EN" | "KO", Record<string, string>> = {
    EN: {
      aboutTitle: "About Us",
      historyTitle: "Our History",
      historyContent: "Standard Insurance Services was established in 2025 by an insurance broker, Jinik Kim with 17 years of insurance experiences across insurance types and borders.",
      representativeTitle: "Representative Insurance Broker",
      representativeContent1: "As a licensed insurance broker, Standard Insurance acts on behalf of our clients, not the insurers. This means you receive independent advice and access to the best coverage for your unique needs.",
      representativeContent2: "Our team of experts takes the time to understand your business or personal requirements, helping you make informed decisions and protecting what matters most.",
      ctaTitle: "Ready to Protect Your Future?",
      ctaContent: "Contact Standard Insurance today and let our expert advisors find the best coverage tailored to your needs.",
      getQuote: "Get a Quote",
    },
    KO: {
      aboutTitle: "회사 소개",
      historyTitle: "회사 연혁",
      historyContent: "스탠다드 보험 서비스는 2025년에 설 립되었습니다. 설립자는 보험 브로커인 김진익으로, 17년간 다양한 보험 유형과 국경을 넘나드는 경험을 가지고 있습니다.",
      representativeTitle: "대표 보험 브로커",
      representativeContent1: "스탠다드 보험은 라이선스가 있는 보험 브로커로서, 보험사 대신 고객을 대변합니다. 이는 독립적인 조언과 고객의 고유한 요구에 맞는 최상의 보장을 받을 수 있음을 의미합니다.",
      representativeContent2: "우리 전문가 팀은 귀하의 비즈니스 또는 개인 요구 사항을 이해하는 데 시간을 투자하여 정보에 입각한 결정을 내리고 가장 중요한 것을 보호할 수 있도록 도와드립니다.",
      ctaTitle: "미래를 보호할 준비가 되셨나요?",
      ctaContent: "오늘 스탠다드 보험에 연락하여 전문가 상담원이 귀하의 필요에 맞는 최상의 보장을 찾아드리도록 하세요.",
      getQuote: "견적 받기",
    },
  };


  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-screen mt-16"
      >
        <div className="relative h-96">
          <Image
            src="/welcome-image.avif"
            alt="Standard Insurance Australia"
            fill
            className="object-cover object-bottom brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              {texts[language].aboutTitle}
            </h1>
          </div>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold mb-4">{texts[language].historyTitle}</h2>
            <p className="text-gray-700">
              {texts[language].historyContent}
            </p>
            {/* <p className="text-gray-700">
              Over the decades, we have focused on transparency, customer-first solutions, and building long-term relationships. Our experience ensures you get insurance coverage tailored to real Australian lifestyles and businesses.
            </p> */}
          </div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              src="/about/people.jpg"
              alt="Company History"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <NetworkSection />

      {/* Representative Insurance Broker Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <motion.div
            className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              src="/about/trust.jpg"
              alt="Representative Broker"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="md:w-1/2 mt-8 md:mt-0 space-y-4">
            <h2 className="text-3xl font-bold mb-4">{texts[language].representativeTitle}</h2>
            <p className="text-gray-700">
              {texts[language].representativeContent1}
            </p>
            <p className="text-gray-700">
              {texts[language].representativeContent2}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-primary text-white py-16 text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {texts[language].ctaTitle}
        </h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          {texts[language].ctaContent}
        </p>
        <Link href="/#quote" scroll={true}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            {texts[language].getQuote}
          </motion.div>
        </Link>
      </motion.section>
    </main>
  );
}
