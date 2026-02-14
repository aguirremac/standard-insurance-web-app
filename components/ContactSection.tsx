"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import useUtils from "@/hooks/use-utils";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { PHONE_NUMBER, COMPANY_EMAIL, ADDRESS } = useUtils();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white to-neutral-50"
    >
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-screen mt-16"
      >
        <div className="relative h-96">
          <Image
            src="/contact-us.jpg"
            alt="Contact Us Page Image"
            fill
            className="object-cover object-bottom brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              Contact Us
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10 md:py-20 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 max-w-lg">
                Speak directly with experienced advisors who understand your
                business and personal insurance needs.
              </p>
            </div>

            {/* Contact Items */}
            <motion.div variants={containerVariants} className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: PHONE_NUMBER,
                  sub: "Mon–Fri, 9am–5pm",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: COMPANY_EMAIL,
                  sub: "Reply within 24 hours",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: ADDRESS,
                },
                {
                  icon: Clock,
                  label: "Business Hours",
                  value: "Mon–Fri: 9am–5pm",
                  sub: "Sat: 10am–2pm",
                },
              ].map(({ icon: Icon, label, value, sub }, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="text-base font-medium text-gray-900">
                      {value}
                    </div>
                    {sub && (
                      <div className="text-sm text-gray-500 mt-1">{sub}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map Embed */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200"
            >
              <iframe
                src="https://www.google.com/maps?q=Spaces,+80+Ann+Street,+Brisbane+City+QLD+4000,+Australia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={itemVariants} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label>Full name</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@email.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label>Phone</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Subject</Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label>Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us a bit about what you need…"
                  required
                  className="mt-2 min-h-[140px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-white rounded-full bg-primary hover:bg-primary/90"
              >
                Send message
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-sm text-gray-500">
                Your information is kept confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
