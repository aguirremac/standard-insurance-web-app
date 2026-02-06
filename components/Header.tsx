'use client';

import { useState } from "react";
import { Globe, Menu, X, Sun, Moon, Phone } from "lucide-react";
import { Button } from "./ui/button";
import BrandLogo from "./BrandLogo";
import useUtils from "@/hooks/use-utils";
import { useRouter } from "next/navigation";

export function Header() {
  const [language, setLanguage] = useState<"EN" | "KO">("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "EN" ? "KO" : "EN"));
  };

  const route = useRouter()

  const navigateToHome = () => {
    route.push('/')
  }

  const { PHONE_NUMBER } = useUtils();


  const content = {
    EN: { services: "Services", about: "About", contact: "Contact", getQuote: "Get a Quote" },
    KO: { services: "서비스", about: "회사소개", contact: "연락처", getQuote: "견적 받기" },
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <BrandLogo color="light" onClick={navigateToHome} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/services" className="hover:text-gray-200 transition-colors">{content[language].services}</a>
            <a href="/about-us" className="hover:text-gray-200 transition-colors">{content[language].about}</a>
            <a href="/contact" className="hover:text-gray-200 transition-colors">{content[language].contact}</a>
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">{language}</span>
            </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 px-2 py-2 rounded-full bg-accent ring-button shadow-lg hover:scale-110 transition-transform"
                aria-label="Call us"
              >
              <Phone className="h-4 w-4" />
              </a>


            {/* CTA */}
            <Button size="lg" className="bg-white text-black font-bold  hover:bg-gray-100 rounded-full py-4">{content[language].getQuote}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>{content[language].services}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{content[language].about}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{content[language].contact}</a>

              <div className="flex items-center gap-2">
                <button onClick={toggleLanguage} className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  {language}
                </button>

              </div>

              <Button onClick={() => setMobileMenuOpen(false)} className="bg-white text-white  w-full">
                {content[language].getQuote}
              </Button>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
