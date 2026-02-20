'use client';

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

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Network</h2>
        <p className="text-gray-700">
          We provide dedicated and seamless insurance support through strong Iinsurance networks.
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
