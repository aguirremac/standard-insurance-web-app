'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function NetworkSection() {
  const logos = [
    "/footer/bmia-2.png",
    "/footer/steadfast-2.png",
    "/footer/niba.png",
    "/footer/bmia-2.png",
    "/footer/steadfast-2.png",
    "/footer/niba.png",
    "/footer/bmia-2.png",
    "/footer/steadfast-2.png",
    "/footer/niba.png",
    "/footer/bmia-2.png",
    "/footer/steadfast-2.png",
    "/footer/niba.png",
    
  ];

  // Duplicate the logos array to make seamless scroll
  const scrollingLogos = [...logos, ...logos];

  const { language } = useLanguage();

  const texts: Record< "EN" | "KO", Record<string, string>> = {
    EN: {
      networkTitle: "Our Network",
      networkContent: "We provide dedicated and seamless insurance support through strong Iinsurance networks.",
    },
    KO: {
      networkTitle: "우리의 네트워크",
      networkContent: "강력한 보험 네트워크를 통해 헌신적이고 원활한 보험 지원을 제공합니다.",
    },
  };

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{texts[language].networkTitle}</h2>
        <p className="text-gray-700">
          {texts[language].networkContent}
        </p>
      </div>

      <div className="relative">
        <div className="flex w-max animate-marquee gap-6">
          {scrollingLogos.map((logo, index) => (
            <a
              key={index}
              href="#"
              className="flex-shrink-0 flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <Image
                src={logo}
                alt={`Provider ${index + 1}`}
                width={150}
                height={80}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
