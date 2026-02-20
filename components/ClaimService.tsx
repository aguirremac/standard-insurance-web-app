"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClaimServicePage() {
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
              Claim Service
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
              Guaranteed Peace of Mind
            </h2>

            <p className="text-gray-700">
              When an unexpected loss occurs, navigating the claims process can
              be stressful and time-consuming. Our claim service is designed to
              support you at every stage, ensuring that your claim is handled
              efficiently and professionally.
            </p>

            <p className="text-gray-700">
              We act as your representative in all communications with the
              insurer, assisting with documentation, claim submission, and
              follow-ups. Our team monitors the progress closely to help avoid
              delays and ensure that your entitlements are properly assessed.
            </p>

            <p className="text-gray-700">
              With our expertise, you gain confidence that your claim is being
              managed by professionals who understand policy conditions and
              settlement procedures. This allows you to focus on recovery while
              we work to secure a fair and timely outcome on your behalf.
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
          Need Help With a Claim?
        </h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          Our dedicated claims team will manage the process for you and
          communicate directly with the insurer to achieve a smooth resolution.
        </p>
        <Link href="/#quote">
          <div className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Start a Claim
          </div>
        </Link>
      </motion.section>
    </main>
  );
}