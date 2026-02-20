"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CompetitiveQuotationPage() {
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
              Competitive Quotation
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
              Do Not Pay More Than You Are Covered
            </h2>

            <p className="text-gray-700">
              Insurance premiums should reflect the actual level of protection
              you receive. Our competitive quotation service ensures that you
              are not overpaying for limited coverage or paying for benefits
              that do not match your risk profile.
            </p>

            <p className="text-gray-700">
              We work with a wide network of insurers to obtain multiple quotes,
              carefully comparing policy wordings, exclusions, deductibles, and
              coverage limits. This allows us to recommend the most suitable
              option based on value, not just price.
            </p>

            <p className="text-gray-700">
              Whether you are protecting your business, property, or personal
              assets, our approach ensures transparency and cost efficiency.
              You gain access to tailored protection that aligns with your needs
              while keeping premiums competitive and sustainable.
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
          Get a Competitive Insurance Proposal
        </h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          Let us compare the market for you and deliver a quotation that
          balances comprehensive protection with cost efficiency.
        </p>
        <Link href="/#quote">
          <div className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Request a Quotation
          </div>
        </Link>
      </motion.section>
    </main>
  );
}