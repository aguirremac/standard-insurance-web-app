"use client";

import Image from "next/image";
import { Shield, Clock, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const pillarsEN = [
  {
    icon: Shield,
    title: "Built on Trust",
    desc: "Transparent advice and reliable coverage designed to protect what matters most.",
    image: "/pillars/trust.jpg",
  },
  {
    icon: Clock,
    title: "When Time Matters",
    desc: "Fast claims, clear communication, and dependable support during critical moments.",
    image: "/pillars/speed.jpg",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Real advisors providing tailored insurance solutions — no scripts, no pressure.",
    image: "/pillars/people.jpg",
  },
];

const pillarsKO = [
  {
    icon: Shield,
    title: "신뢰에 기반",
    desc: "가장 중요한 것을 보호하기 위해 투명한 조언과 신뢰할 수 있는 보장을 제공합니다.",
    image: "/pillars/trust.jpg",
  },
  {
    icon: Clock,
    title: "시간이 중요할 때",
    desc: "중요한 순간에 빠른 청구, 명확한 커뮤니케이션, 그리고 신뢰할 수 있는 지원을 제공합니다.",
    image: "/pillars/speed.jpg",
  },
  {
    icon: Users,
    title: "고객 우선",
    desc: "대본 없이 맞춤형 보험 솔루션을 제공하는 실제 상담사입니다.",
    image: "/pillars/people.jpg",
  },
];


const texts: Record<"EN" | "KO", Record<string, string>> = {
  EN: {
    header: "Insurance Made Simple.",
    subHeader: "Protection You Can Rely On.",
    description:
      "Standard Insurance delivers clear, dependable coverage built around real people and real risks. No complexity. No hidden terms.",
    storyHeader: "Built on experience. Driven by clarity.",
    storyDescription1:
      "Standard Insurance was founded with a simple belief: insurance should be clear, practical, and built around real people - not paperwork.",
    storyDescription2:
      "After years working within the Australian insurance industry, our founders saw firsthand how confusing policies, generic advice, and transactional service left clients uncertain at the moments they needed support most. Standard Insurance was created to change that experience.",
    storyDescription3:
      "From our early days assisting small business owners and families, we’ve grown through long-term relationships and referrals — not aggressive sales. Each policy placed has been guided by careful assessment, open conversation, and a clear understanding of risk.",
    storyDescription4:
      "Today, Standard Insurance works with a broad network of trusted insurers across Australia, delivering tailored cover for individuals, businesses, and complex risks. While the industry continues to evolve, our approach remains the same — thoughtful advice, responsive service, and protection you can rely on when it matters most.",
  },
  KO: {
    header: "간단한 보험.",
    subHeader: "믿을 수 있는 보호.",
    description:
      "Standard Insurance 는 실제 사람과 실제 위험을 중심으로 명확하고 신뢰할 수 있는 보장을 제공합니다. 복잡성 없음. 숨겨진 조건 없음.",
    storyHeader: "경험에 기반. 명확성에 의해 움직입니다.",
    storyDescription1:
      "Standard Insurance 는 보험이 명확하고 실용적이며 실제 사람을 중심으로 해야 한다는 단순한 믿음으로 설립되었습니다 - 서류 작업이 아닙니다.",
    storyDescription2:  
      "호주 보험 산업에서 수년간 일한 후, 우리의 창립자들은 혼란스러운 정책, 일반적인 조언, 거래 중심의 서비스가 고객을 가장 필요한 순간에 불확실하게 만든다는 것을 직접 목격했습니다. Standard Insurance는 그 경험을 바꾸기 위해 만들어졌습니다.",
    storyDescription3:
      "초기에는 소규모 사업주와 가족을 지원하면서 장기적인 관계와 추천을 통해 성장했습니다 — 공격적인 판매가 아닌 신중한 평가, 열린 대화, 위험에 대한 명확한 이해를 바탕으로 각 정책이 결정되었습니다.",
    storyDescription4:
      "오늘날, Standard Insurance는 호주 전역의 신뢰할 수 있는 보험사 네트워크와 협력하여 개인, 기업 및 복잡한 위험에 맞춤형 보장을 제공합니다. 산업이 계속 진화함에도 불구하고, 우리의 접근 방식은 동일하게 유지됩니다 — 신중한 조언, 신속한 서비스, 그리고 가장 중요한 순간에 신뢰할 수 있는 보호.",
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function WelcomeSection() {

  const { language } = useLanguage();
  const pillars = language === "KO" ? pillarsKO : pillarsEN;

  return (
    <section className="relative bg-linear-to-b from-white pt-20 to-gray-50 overflow-hidden">
      {/* Subtle brand glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#042E4C12,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-4xl mx-auto mb-10"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            { texts[language].header }
            <span className="block text-accent mt-2">
              { texts[language].subHeader }
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed"
          >
            { texts[language].description }
          </motion.p>
        </motion.div>

        {/* Core Pillars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {pillars.map(({ icon: Icon, title, desc, image }, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative h-[360px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={i === 0}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex p-4 rounded-xl bg-white/15 backdrop-blur mb-4 w-fit"
                >
                  <Icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Who We Are – Full Width */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-32"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/welcome-image.avif"
              alt="Standard Insurance Australia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>

          {/* Content */}
          <div className="relative py-28 px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="text-lg md:text-2xl font-normal text-white/90 mb-3 block">
                { texts[language].ourStory }
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10">
                { texts[language].storyHeader }
              </h2>

              <p className="text-white/90 text-lg leading-relaxed mb-6">
                { texts[language].storyDescription1 }
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                { texts[language].storyDescription2 }
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                { texts[language].storyDescription3 }
              </p>

              <p className="text-white/80 leading-relaxed">
                { texts[language].storyDescription4 }
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
