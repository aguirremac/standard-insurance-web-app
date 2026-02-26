"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "EN" | "KO";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("standard-insurance-lang", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("standard-insurance-lang");
    if (savedLang === "KO") {
      setTimeout(() => setLanguageState("KO"), 0);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}