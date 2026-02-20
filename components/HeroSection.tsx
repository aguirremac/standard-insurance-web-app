"use client";

import { Shield, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
                Trusted protection from day one
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-white text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              Comprehensive Insurance Coverage You Can Trust
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              Protect what matters most with tailored insurance solutions for
              your business and personal needs. Fast quotes, expert advice, and
              exceptional service.
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
                  Get a Free Quote
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
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
