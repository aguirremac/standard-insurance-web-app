"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import useUtils from "@/hooks/use-utils";
import { m, motion, Variants } from "framer-motion";
import { useToast } from "./ui/toast-provider";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { PHONE_NUMBER, COMPANY_EMAIL, ADDRESS } = useUtils();
  const { showToast } = useToast();

  const { language } = useLanguage();

  const [isFormSubmitting, setIsFormSubmitting] = useState(false)

  const texts: Record< "EN" | "KO", Record<string, string>> = {
    EN: {
      contactTitle: "Contact Us",
      contactSubtitle: "Speak directly with experienced advisors who understand your business and personal insurance needs.",
      getInTouch: "Get in touch",
      phoneLabel: "Phone",
      emailLabel: "Email",
      emailSub: "Reply within 24 hours",
      officeLabel: "Office",
      sendUsAMessage: "Send us a message",
      submitButton: "Submit",
      fullNameLabel: "Full name",
      emailLabelForm: "Email",
      phoneLabelForm: "Phone",
      subjectLabel: "Subject",
      messageLabel: "Message",
      confidentialityNote: "Your information is kept confidential.",
      subjectPlaceholder: "How can we help?",
      messagePlaceholder: "Tell us a bit about what you need…",
    },
    KO: {
      contactTitle: "문의하기",
      contactSubtitle: "귀하의 비즈니스 및 개인 보험 요구 사항을 이해하는 경험이 풍부한 상담원과 직접 상담하십시오.",
      getInTouch: "문의하기",
      phoneLabel: "전화",
      emailLabel: "이메일",
      emailSub: "24시간 이내 답변",
      officeLabel: "사무실",
      sendUsAMessage: "메시지 보내기",
      submitButton: "제출",
      fullNameLabel: "성명",
      emailLabelForm: "이메일",
      phoneLabelForm: "전화",
      subjectLabel: "제목",
      messageLabel: "메시지",
      confidentialityNote: "귀하의 정보는 기밀로 유지됩니다.",
      subjectPlaceholder: "어떻게 도와드릴까요?",
      messagePlaceholder: "필요한 사항을 간략하게 알려주세요…",
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const containerVariants: Variants = {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    setIsFormSubmitting(true)
   try {
     const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

     showToast("Message sent successfully!", "success");
    } else {
      showToast(data.error || "Something went wrong.", "error");
    }
        
   } catch (error) {
      console.error(error);
      showToast("Failed to send message.", "error");
      
   } finally {
    setIsFormSubmitting(false)
   }
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
              {texts[language].contactTitle}
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
                {texts[language].getInTouch}
              </h3>
              <p className="text-gray-600 max-w-lg">
                {texts[language].contactSubtitle}
              </p>
            </div>

            {/* Contact Items */}
            <motion.div variants={containerVariants} className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: texts[language].phoneLabel,
                  value: PHONE_NUMBER,
                },
                {
                  icon: Mail,
                  label: texts[language].emailLabel,
                  value: COMPANY_EMAIL,
                  sub: texts[language].emailSub,
                },
                {
                  icon: MapPin,
                  label: texts[language].officeLabel,
                  value: ADDRESS,
                }
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
              src="https://www.google.com/maps?q=Heritage+Lane,+80+Ann+Street,+Brisbane+City+QLD+4000,+Australia&output=embed"
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
              {texts[language].sendUsAMessage}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label>{texts[language].fullNameLabel}</Label>
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
                  <Label>{texts[language].emailLabelForm}</Label>
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
                  <Label>{texts[language].phoneLabel}</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>{texts[language].subjectLabel}</Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={texts[language].subjectPlaceholder}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label>{texts[language].messageLabel}</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={texts[language].messagePlaceholder}
                  required
                  className="mt-2 min-h-[140px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isFormSubmitting || !formData.email || !formData.message || !formData.name || !formData.subject || !formData.phone}
                className="w-full text-white rounded-full bg-primary hover:bg-primary/90"
              >
                {texts[language].submitButton}
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-sm text-gray-500">
                {texts[language].confidentialityNote}
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
