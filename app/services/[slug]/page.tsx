

import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getInsuranceBySlug } from "@/lib/insurance";
import type { Metadata } from "next";
import { QuoteButton } from "@/components/QuoteButton";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
const { slug } = await params;
const insurance = getInsuranceBySlug(slug);


  if (!insurance) return notFound();

  const Icon = insurance.icon;

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src={insurance.image}
          alt={insurance.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <Icon className="h-10 w-10 mb-4 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {insurance.title}
          </h1>
          <p className="max-w-xl text-lg text-white/90">
            {insurance.description}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">
            About {insurance.title}
          </h2>
          {insurance.longDescription.split("\n").map((para, idx) => {
                const trimmed = para.trim();
                if (!trimmed) return null; // skip empty lines
                return (
                <p key={idx} className="text-muted-foreground py-5 leading-relaxed">
                    {trimmed}
                </p>
                );
            })}
        </div>

        <div className="rounded-xl border p-6 h-fit">
          <h3 className="font-semibold mb-2">Need a quote?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Speak with our insurance specialists today.
          </p>
          <QuoteButton to="/#quote" />
        </div>
      </section>
    </main>
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const insurance = getInsuranceBySlug(slug);
  if (!insurance) return {};

  return {
    title: `${insurance.title} | Standard Insurance`,
    description: insurance.description,
    openGraph: {
      title: insurance.title,
      description: insurance.description,
      images: [insurance.image],
    },
  };
}
