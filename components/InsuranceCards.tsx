"use client";

import {
  Building2,
  Home,
  Car,
  Shield,
  HardHat,
  FileCheck,
  TrendingUp,
  Users,
  Factory,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { insuranceTypes } from "@/lib/insurance";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function InsuranceCards({ showAll }: { showAll?: boolean }) {
  const data = showAll ? insuranceTypes : insuranceTypes.slice(0, 6);

  return (
    <section id="services" className="pt-20 pb-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6"
        >
          <div>
            <span className="inline-flex px-4 py-1.5 rounded-full text-sm bg-primary/10 text-primary mb-4">
              Insurance Types
            </span>
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              What do we do
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Smart, flexible insurance solutions designed around real-world
              risks.
            </p>
          </div>

          {!showAll && (
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                className="rounded-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                onClick={() => (window.location.href = "/services")}
              >
                View all types
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.map(({ icon: Icon, title, description, image, slug }, i) => (
            <motion.div key={i} variants={item}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Card
                  onClick={() =>
                    (window.location.href = `/services/${slug}`)
                  }
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <motion.img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {description}
                    </p>

                    <motion.span
                      className="inline-flex items-center text-sm font-medium text-primary"
                      whileHover={{ x: 4 }}
                    >
                      Learn More →
                    </motion.span>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
