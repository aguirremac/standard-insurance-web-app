"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

type QuoteButtonProps = {
  to?: string; // default to /quote
};

export function QuoteButton({ to = "/quote" }: QuoteButtonProps) {

  const { language } = useLanguage();

  const texts: Record<"EN" | "KO", Record<string, string>> = {
    EN: {
      submitButton: "Get a Quote",
    },
    KO: {
      submitButton: "견적 받기",
    },
  };
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <Button className="w-full rounded-full text-white" onClick={handleClick}>
      {texts[language].submitButton}
    </Button>
  );
}
