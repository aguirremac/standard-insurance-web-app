"use client";

import useUtils from "@/hooks/use-utils";
import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14, // only staggerChildren goes here
      delayChildren: 0,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // valid easing type
    },
  },
};

export function CTASection() {
  const { PHONE_NUMBER } = useUtils();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-[#042E4C] to-[#063d64] text-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 opacity-10"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl mb-6">
          Ready to Protect What Matters?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-200 max-w-3xl mx-auto mb-10"
        >
          Get a free, no-obligation quote today and discover why thousands of
          clients trust Standard Insurance for their coverage needs.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => (window.location.href = "#quote")}
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 bg-accent border-white text-white text-lg px-8 py-6"
              onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: {PHONE_NUMBER}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-sm text-gray-300">
          <p>Available Monday - Friday, 9am - 5pm EST</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
