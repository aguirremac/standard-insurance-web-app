"use client";

import { Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection({ heroImageSrc }: { heroImageSrc?: string }) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const { language } = useLanguage();

  const texts: Record<"EN" | "KO", Record<string, string>> = {
    EN: {
      badge: "Trusted protection from day one",
      heading: "Comprehensive Insurance Coverage You Can Trust",
      description:
        "Protect what matters most with tailored insurance solutions for your business and personal needs. Fast quotes, expert advice, and exceptional service.",
      getQuote: "Get a Free Quote",
      contactUs: "Contact Us",
    },
    KO: {
      badge: "첫날부터 신뢰할 수 있는 보호",
      heading: "신뢰할 수 있는 종합 보험 보장",
      description:
        "비즈니스와 개인의 필요에 맞춘 맞춤형 보험 솔루션으로 가장 중요한 것을 보호하세요. 빠른 견적, 전문가 조언 및 탁월한 서비스.",
      getQuote: "무료 견적 받기",
      contactUs: "문의하기",
    },
  }

  return (
    <section className="relative h-fit  overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImageSrc || "/hero-1.jpg"}
          alt="Insurance hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#042E4C]/90 via-[#042E4C]/70 to-[#041F33]/80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Animated Glow Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-28 -left-28 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full gap-12 lg:grid-cols-2 lg:gap-14 items-center py-20 lg:py-28"
        >
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur"
            >
              <Shield className="h-4 w-4" color="white" />
              <span className="text-white/90">
                { texts[language].badge }
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-white text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              { texts[language].heading }
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              { texts[language].description }
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col gap-3 pt-3 sm:flex-row"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-white px-7 text-black font-semibold hover:bg-white/90"
                  onClick={() => (window.location.href = "#quote")}
                >
                  { texts[language].getQuote }
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-white/0 px-7 text-white hover:bg-white/10"
                  onClick={() => (window.location.href = "#contact")}
                >
                  { texts[language].contactUs }
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
