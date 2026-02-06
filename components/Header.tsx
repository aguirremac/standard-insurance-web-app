'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import BrandLogo from "./BrandLogo";
import { Globe, Menu, X, Phone, ChevronDown } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import useUtils from "@/hooks/use-utils";
import { useRouter } from "next/navigation";

type NavItem = {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

export function Header() {
  const [language, setLanguage] = useState<"EN" | "KO">("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => setLanguage(prev => (prev === "EN" ? "KO" : "EN"));
  const { PHONE_NUMBER } = useUtils();
  const route = useRouter();
  const navigateToHome = () => route.push("/");

  const navItems: Record<"EN" | "KO", NavItem[]> = {
    EN: [
      {
        label: "Services",
        subItems: [
          { label: "Business Insurance", href: "/services/business" },
          { label: "Property Insurance", href: "/services/property" },
          { label: "Public Liability Insurance", href: "/services/public-liability" },
          { label: "Commercial Motor Insurance", href: "/services/commercial-motor" },
          { label: "Home Insurance", href: "/services/home" },
          { label: "Private Motor Insurance", href: "/services/private-motor" },
          { label: "Management Liability Insurance", href: "/services/management-liability" },
          { label: "Construction Insurance", href: "/services/construction" },
          { label: "Professional Indemnity Insurance", href: "/services/professional-indemnity" },
          { label: "Trade Credit Insurance", href: "/services/trade-credit" },
          { label: "Industrial Special Risks", href: "/services/industrial-special-risks" },
        ],
      },
      {
        label: "About",
        href: "/about-us",
      },

      {
        label: "Claims",
        href: "/claims",
        subItems: [
          { label: "Lodge Claim", href: "/claims/lodge-claim" },
        ],
      },
      { label: "Contact Us", href: "/contact" },
    ],
    KO: [
      {
        label: "서비스",
        subItems: [
          { label: "비즈니스 보험", href: "/services/business" },
          { label: "주택 보험", href: "/services/home" },
          { label: "자동차 보험", href: "/services/motor" },
        ],
      },
      { label: "회사소개", href: "/about-us" },
      { label: "연락처", href: "/contact" },
    ],
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <BrandLogo color="light" onClick={navigateToHome} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems[language].map((item, idx) =>
              item.subItems ? (
                <Select key={idx} onValueChange={(value) => route.push(value)}>
                  <SelectTrigger className="bg-transparent text-white border-none hover:text-gray-200 flex items-center gap-1">
                    <SelectValue placeholder={item.label} />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black rounded-md ">
                    {item.subItems.map((sub, subIdx) => (
                      <SelectItem key={subIdx} value={sub.href}>
                        {sub.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-gray-200 transition-colors text-sm text-nowrap"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm">{language}</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 px-2 py-2 rounded-full bg-accent ring-button shadow-lg hover:scale-110 transition-transform"
            >
              <Phone className="h-4 w-4" />
            </a>

            <Button size="lg" className="bg-white text-black font-bold hover:bg-gray-100 rounded-full py-4">
              {language === "EN" ? "Get a Quote" : "견적 받기"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems[language].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <a
                    href={item.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 hover:bg-white/10 rounded-md"
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <div className="ml-4 flex flex-col space-y-1">
                      {item.subItems.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-4 py-2 hover:bg-white/20 rounded-md"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
