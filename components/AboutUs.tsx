'use client';

import Image from "next/image";
import NetworkSection from "./NetworkSection";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-screen  mt-16">
        <div className="relative h-96">
          <Image
            src="/welcome-image.avif" // replace with your hero image
            alt="Standard Insurance Australia"
            fill
            className="object-cover object-bottom brightness-75"
            priority
          />
           <div className="absolute inset-0 bg-primary/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
              About Standard Insurance
            </h1>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-700 mb-4">
              Founded with a mission to simplify insurance in Australia, Standard Insurance has grown from a small advisory office to a trusted partner for thousands of individuals and businesses nationwide. 
            </p>
            <p className="text-gray-700">
              Over the decades, we have focused on transparency, customer-first solutions, and building long-term relationships. Our experience ensures you get insurance coverage tailored to real Australian lifestyles and businesses.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/people.jpg"
              alt="Company History"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <NetworkSection />

      {/* Representative Insurance Broker Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/trust.jpg"
              alt="Representative Broker"
              fill
              className="object-cover" 
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Representative Insurance Broker</h2>
            <p className="text-gray-700 mb-4">
              As a licensed insurance broker, Standard Insurance acts on behalf of our clients, not the insurers. This means you receive independent advice and access to the best coverage for your unique needs.
            </p>
            <p className="text-gray-700">
              Our team of experts takes the time to understand your business or personal requirements, helping you make informed decisions and protecting what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Future?</h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
          Contact Standard Insurance today and let our expert advisors find the best coverage tailored to your needs.
        </p>
        <Link href="/#quote" scroll={true}>
         <div className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
            Get a Quote
          </div>
        </Link>
      </section>
    </main>
  );
}
