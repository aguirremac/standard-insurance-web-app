"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import BrandLogo from "./BrandLogo";
import { Globe, Menu, X, Phone, ChevronDown } from "lucide-react";
import useUtils from "@/hooks/use-utils";
import { useRouter, usePathname } from "next/navigation";
import { insuranceTypes } from "@/lib/insurance";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

type NavItem = {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
};

export function Header() {
  const [language, setLanguage] = useState<"EN" | "KO">("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuValue, setMenuValue] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const pathname = usePathname();
  const route = useRouter();
  const { PHONE_NUMBER } = useUtils();

  useEffect(() => {
    setMenuValue(null);
  }, [pathname]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "KO" : "EN"));

  const navigateToHome = () => route.push("/");
  const goToQuoteSection = () => route.push("/#quote");

  const insuranceTypesMappedArr = insuranceTypes.map((item) => ({
    label: item.title,
    href: `/insurance/${item.slug}`,
  }));

  const navItems: Record<"EN" | "KO", NavItem[]> = {
    EN: [
      {
        label: "Our Services",
        subItems: [
          { label: "Insurance Review", href: "/services/insurance-review" },
          {
            label: "Competitive Quotation",
            href: "/services/competitive-quotation",
          },
          { label: "Claim Service", href: "/services/claim-service" },
        ],
      },
      {
        label: "Insurance Types",
        subItems: [
          ...insuranceTypesMappedArr,
          { label: "All Insurance Types", href: "/insurance" },
        ],
      },
      { label: "About Us", href: "/about-us" },
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
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <BrandLogo color="light" onClick={navigateToHome} />

          {/* Desktop Nav */}
          <NavigationMenu.Root
            className="hidden md:flex cursor-pointer"
            value={menuValue}
            onValueChange={(val) => setMenuValue(val)}
          >
            <NavigationMenu.List className="flex items-center space-x-6 cursor-pointer">
              {navItems[language].map((item, idx) =>
                item.subItems ? (
                  <NavigationMenu.Item key={idx} value={item.label}>
                    <NavigationMenu.Trigger
                      onClick={() =>
                        setMenuValue((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      className="flex items-center gap-1 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          menuValue === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content
                      onPointerDownOutside={() => setMenuValue(null)}
                      onEscapeKeyDown={() => setMenuValue(null)}
                      className="absolute top-full mt-3 rounded-xl bg-white text-black shadow-lg p-4 min-w-[220px]"
                    >
                      <ul className="flex flex-col">
                        {item.subItems.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <button
                              onClick={() => route.push(sub.href)}
                              className="text-left w-full px-2 py-2 rounded-md hover:bg-gray-100 text-sm cursor-pointer"
                            >
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={idx}>
                    <NavigationMenu.Link asChild>
                      <button
                        onClick={() => route.push(item.href!)}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                )
              )}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Controls */}
          <div className="hidden lg:flex items-center space-x-3">
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

            <Button
              onClick={goToQuoteSection}
              size="lg"
              className="bg-white text-black font-bold hover:bg-gray-100 rounded-full py-4"
            >
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
    {/* Mobile Menu */}
{/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-white/10">
          <nav className="flex flex-col space-y-2">
            {navItems[language].map((item, idx) => {
                const isOpen = activeIndex === idx;

              return (
                <div key={idx} className="flex flex-col">
                  {/* Parent Label */}
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? null : idx)
                    }
                    className="px-4 py-2 flex justify-between items-center hover:bg-white/10 rounded-md font-bold"
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Collapsible Sub-items */}
                  {item.subItems && isOpen && (
                    <div className="ml-4 flex flex-col space-y-1 opacity-80">
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
              );
            })}
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}