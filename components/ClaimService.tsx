"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ClaimServicePage() {

  const { language } = useLanguage();

  const texts: Record< "EN" | "KO", Record<string, string>> = {
    EN: {
      title: "Claim Service",
      content1: "When an unexpected loss occurs, navigating the claims process can be stressful and time-consuming. Our claim service is designed to support you at every stage, ensuring that your claim is handled efficiently and professionally.",
      content2: "We act as your representative in all communications with the insurer, assisting with documentation, claim submission, and follow-ups. Our team monitors the progress closely to help avoid delays and ensure that your entitlements are properly assessed.",
      content3: "With our expertise, you gain confidence that your claim is being managed by professionals who understand policy conditions and settlement procedures. This allows you to focus on recovery while we work to secure a fair and timely outcome on your behalf.",
      ctaTitle: "Need Help With a Claim?",
      // ctaContent: "Our dedicated claims team will manage the process for you and communicate directly with the insurer to achieve a smooth resolution.",
      startClaim: "Start a Claim",
    },
    KO: {
      title: "클레임 서비스",
      content1: "예기치 않은 손실이 발생했을 때, 클레임 서비스는 복잡하고 시간이 많이 걸릴 수 있습니다. 저희의 클레임 서비스는 모든 단계에서 귀하를 지원하도록 설계되어 귀하의 클레임 청구가 효율적이고 전문적으로 처리되도록 보장합니다.",
      content2: "저희는 보험사와의 모든 커뮤니케이션에서 고객을 대신하여 고객의 이익대로 클레임 처리가 되도록 최선을 다하고 있습니다. 저희 팀은 진행 상황을 면밀히 모니터링하여 지연을 방지하고 고객의 권리가 충분히 보장되도록 서비스하고 있습니다.",
      content3: "고객은 보험 조건과 합의 절차를 이해하는 전문가가 클레임을 처리하고 있다는 확신을 얻으실 수 있습니다. 이를 통해 고객은 하시는 사업과 일상에 최선을 다하시고, 저희는 고객을 대신하여 공정하고 신속한 클레임처리를 위해 노력합니다.",
      ctaTitle: "클레임 처리에 도움이 필요하신가요?",
      // ctaContent: "우리의 전담 청구 팀이 귀하를 대신하여 프로세스를 관리하고 보험사와 직접 소통하여 원활한 해결을 달성할 것입니다.",
      startClaim: "클레임 청구",
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
        <div className="relative h-[45svh] md:h-[60svh">
          <Image
            src="/services/hero.jpg"
            alt="Insurance Claim Service"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              { texts[language].title }
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
        <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-12">
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl font-bold">
              {texts[language].subtitle}
            </h2>

            <p className="text-gray-700">
              { texts[language].content1 }
            </p>

            <p className="text-gray-700">
              { texts[language].content2 }
            </p>

            <p className="text-gray-700">
              { texts[language].content3 }
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/services/claim-services.jpg"
              alt="Insurance Claim Assistance"
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
            {texts[language].startClaim}
          </div>
        </Link>
      </motion.section>
    </main>
  );
}