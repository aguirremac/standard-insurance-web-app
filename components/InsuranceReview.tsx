"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InsuranceReviewPage() {
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
        <div className="relative h-[60vh]">
          <Image
            src="/insurance-hero-2.jpg"
            alt="Insurance Review"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              Insurance Review
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
            <h2 className="text-3xl font-bold">Know What You’re Covered For</h2>
            <p className="text-gray-700">
              Many policyholders are unsure about their exact coverage limits,
              exclusions, and benefits. Our Insurance Review service provides a
              complete assessment of your existing policies.
            </p>
            <p className="text-gray-700">
              We identify coverage gaps, overlapping protections, and areas
              where you may be overpaying — ensuring your insurance truly works
              for you.
            </p>
          </div>

          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/insurance-review-2.jpg"
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
          Unsure About Your Coverage?
        </h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          Let our experts review your current policies and ensure you’re
          properly protected.
        </p>
        <Link href="/#quote">
          <div className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Request a Review
          </div>
        </Link>
      </motion.section>
    </main>
  );
}
