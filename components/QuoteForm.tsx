"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { insuranceTypeKOR, insuranceTypesEN } from "@/lib/insurance";
import next from "next";

const steps = [
  { id: 1, name: "Coverage Type" },
  { id: 2, name: "Your Details" },
  { id: 3, name: "Additional Info" },
  { id: 4, name: "Review" },
];

export function QuoteForm() {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    insuranceType: "",
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    startDate: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => currentStep < steps.length && setCurrentStep(currentStep + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted! Our team will contact you shortly.");
  };

  const insuranceTypes = language === "KO" ? insuranceTypeKOR : insuranceTypesEN;

  const texts: Record<"EN" | "KO", Record<string, string>> = {
    EN: {
      sectionTitle: "Get Your Free Quote",
      description: "Fill out the form below and receive a personalized insurance quote within 24 hours.",
      placeholder: "Select insurance type",
      nextButton: "Next",
      backButton: "Back",
      submitButton: "Submit",
      fullNameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      businessNameLabel: "Business Name (optional)",
      addressLabel: "Address",
      startDateLabel: "Preferred Start Date",
      additionalInfoLabel: "Additional Information",
      whatTypeOfInsurance: "What type of insurance do you need?",
      tellUsMore: "Tell us more about your insurance needs...",
      reviewInformation: "Review Your Information",
      insuranceType: "Insurance Type",
      notSpecified: "Not specified",
    },
    KO: {
      sectionTitle: "무료 견적 받기",
      description: "아래 양식을 작성하시면 24시간 이내에 맞춤형 보험 견적을 받아보실 수 있습니다.",
      placeholder: "보험 종류 선택",
      nextButton: "다음",
      backButton: "이전",
      submitButton: "제출",
      fullNameLabel: "성명",
      emailLabel: "이메일 주소",
      phoneLabel: "전화번호",
      businessNameLabel: "회사명 (선택 사항)",
      addressLabel: "주소",
      startDateLabel: "희망 시작 날짜",
      additionalInfoLabel: "추가 정보",
      whatTypeOfInsurance: "어떤 종류의 보험이 필요하신가요?",
      tellUsMore: "귀하의 보험 요구 사항에 대해 자세히 알려주세요...",
      reviewInformation: "정보 검토",
      insuranceType: "보험 종류",
      notSpecified: "지정되지 않음",
    }
  }

  const progress = (currentStep / steps.length) * 100;

  const stepVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <section id="quote" className="py-16 md:py-[100px] bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {texts[language].sectionTitle}
          </h2>
          <p className="text-gray-600">
            {texts[language].description}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Progress */}
          <Progress value={progress} className="h-2 rounded-full mb-8" />

          <form onSubmit={handleSubmit} className="space-y-15">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <Label htmlFor="insuranceType">{texts[language].whatTypeOfInsurance}</Label>
                  <Select
                    value={formData.insuranceType}
                    onValueChange={(v) => handleSelectChange("insuranceType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={texts[language].placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {insuranceTypes.map((type) => (
                        <SelectItem key={type.slug} value={type.slug}>
                          {type.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="fullName">{texts[language].fullNameLabel}</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={texts[language].fullNamePlaceholder}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{texts[language].emailLabel}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={texts[language].emailPlaceholder}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{texts[language].phoneLabel}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={texts[language].phonePlaceholder}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName">{texts[language].businessNameLabel}</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder={texts[language].businessNamePlaceholder}
                      className="mt-2"
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="address">{texts[language].addressLabel}</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder={texts[language].addressPlaceholder}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="startDate">{texts[language].startDateLabel}</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalInfo">{texts[language].additionalInfoLabel}</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder={texts[language].tellUsMore}
                      className="mt-2 min-h-[120px]"
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{texts[language].reviewInformation}</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between border-b pb-2">
                      <span>{texts[language].insuranceType}:</span>
                      <span>{formData.insuranceType || texts[language].notSpecified}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>{texts[language].fullNameLabel}:</span>
                      <span>{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>{texts[language].emailLabel}:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>{texts[language].phoneLabel}:</span>
                      <span>{formData.phone}</span>
                    </div>
                    {formData.businessName && (
                      <div className="flex justify-between border-b pb-2">
                        <span>{texts[language].businessNameLabel}:</span>
                        <span>{formData.businessName}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="px-6 rounded-xl"
                  size="lg"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  {texts[language].backButton}
                </Button>
              </motion.div>

              {currentStep < steps.length ? (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="button"
                    onClick={handleNext}
                    size="lg"
                    className="bg-primary hover:bg-[#063d64] rounded-xl text-white px-6"
                  >
                    {texts[language].nextButton}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-[#063d64] text-white rounded-xl px-6"
                  >
                    {texts[language].submitButton}
                    <CheckCircle2 className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
