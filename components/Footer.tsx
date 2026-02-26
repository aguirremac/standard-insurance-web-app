'use client';

import useUtils from "@/hooks/use-utils";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import Image from "next/image";
import { insuranceTypesEN, insuranceTypeKOR } from "@/lib/insurance";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {

  const { PHONE_NUMBER, COMPANY_EMAIL, ADDRESS } = useUtils();

  const { language } = useLanguage();
  const insuranceTypes = language === "KO" ? insuranceTypeKOR : insuranceTypesEN;


  const footerTexts: Record<"EN" | "KO", Record<string, string>> = {
    EN: {
      companyDescription: "Professional insurance solutions tailored to protect your business and personal assets with comprehensive coverage and expert service.",
      ourServices: "Our Services",
      legalCompliance: "Legal & Compliance",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      regulatoryInfo: "Regulatory Information",
      complaintsProcedure: "Complaints Procedure",
      fsaAuthorisation: "FSA Authorisation",
      copyRightText: `© ${new Date().getFullYear()} Standard Insurance. All rights reserved. | Licensed and regulated by financial authorities.`
    },
    KO: {
      companyDescription: "귀하의 비즈니스와 개인 자산을 보호하기 위해 포괄적인 보장과 전문적인 서비스를 제공하는 전문 보험 솔루션입니다.",
      ourServices: "서비스",
      legalCompliance: "법적 & 규정 준수",
      privacyPolicy: "개인정보 처리방침",
      termsOfService: "서비스 약관",
      regulatoryInfo: "규제 정보",
      complaintsProcedure: "불만 처리 절차",
      fsaAuthorisation: "FSA 승인",
      copyRightText: `© ${new Date().getFullYear()} Standard Insurance. 판권 소유. | 금융 당국의 허가 및 규제 대상입니다.`
    }
  }

  return (
    <footer className="bg-foreground text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BrandLogo />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              { footerTexts[language].companyDescription }
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-secondary" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-secondary" />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-secondary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">{ footerTexts[language].ourServices }</h3>
            <ul className="space-y-3 text-sm">
             { insuranceTypes.map((item, index) => (
               <li key={index}>
                <a
                  href={`/insurance/${item?.slug}`}
                  className="hover:text-[#042E4C] transition-colors"
                >
                  {item?.title }
                </a>
              </li>
             ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6">{ footerTexts[language].contactUs }</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <div>{ PHONE_NUMBER }</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-secondary transition-colors"
                >
                  { COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  { ADDRESS }
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          {/* <div>
            <h3 className="text-white mb-6">Legal & Compliance</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Regulatory Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Complaints Procedure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  FSA Authorisation
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-4 w-4" /> */}
              <span>
                <a href="https://bmianetwork.com.au/">
                  <Image 
                  src="/footer/bmia-2.png"
                  alt="Logo"
                  className=""
                  priority
                  height={20}
                  width={100}
                  />
                </a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-4 w-4" /> */}
              <a href="https://www.steadfast.com.au/">
                <Image 
                  src="/footer/steadfast-2.png"
                  alt="Logo"
                  className=""
                  priority
                  height={20}
                  width={100}
                  />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              {/* <Shield className="h-4 w-4" /> */}
             <a href="https://niba.com.au/">
              <Image 
                  src="/footer/niba.png"
                  alt="Logo"
                  className=""
                  priority
                  height={20}
                  width={100}
                  />
             </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            { footerTexts[language].copyRightText }
          </p>
        </div>
      </div>
    </footer>
  );
}
