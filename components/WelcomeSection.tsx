"use client";

import Image from "next/image";
import { Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function WelcomeSection() {
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
            Insurance Made Simple.
            <span className="block text-accent mt-2">
              Protection You Can Rely On.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Standard Insurance delivers clear, dependable coverage built around
            real people and real risks. No complexity. No hidden terms.
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
                Our Story
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10">
                Built on experience. Driven by clarity.
              </h2>

              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Standard Insurance was founded with a simple belief: insurance
                should be clear, practical, and built around real people - not
                paperwork.
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                After years working within the Australian insurance industry,
                our founders saw firsthand how confusing policies, generic
                advice, and transactional service left clients uncertain at the
                moments they needed support most. Standard Insurance was created
                to change that experience.
              </p>

              <p className="text-white/80 leading-relaxed mb-6">
                From our early days assisting small business owners and
                families, we’ve grown through long-term relationships and
                referrals — not aggressive sales. Each policy placed has been
                guided by careful assessment, open conversation, and a clear
                understanding of risk.
              </p>

              <p className="text-white/80 leading-relaxed">
                Today, Standard Insurance works with a broad network of trusted
                insurers across Australia, delivering tailored cover for
                individuals, businesses, and complex risks. While the industry
                continues to evolve, our approach remains the same — thoughtful
                advice, responsive service, and protection you can rely on when
                it matters most.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
