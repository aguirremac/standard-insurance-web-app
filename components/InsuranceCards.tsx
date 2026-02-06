import {
  Building2,
  Home,
  Car,
  Shield,
  HardHat,
  FileCheck,
  TrendingUp,
  Users,
  Factory,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const insuranceTypes = [
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Tailored protection for assets, operations, and liabilities.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",
  },
  {
    icon: Home,
    title: "Property Insurance",
    description: "Safeguard commercial and residential properties.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600",
  },
  {
    icon: Shield,
    title: "Public Liability",
    description: "Cover against third-party injury or property damage.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600",
  },
  {
    icon: Car,
    title: "Commercial Motor",
    description: "Flexible insurance for business vehicles and fleets.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600",
  },
  {
    icon: Users,
    title: "Management Liability",
    description: "Protection for directors and officers.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",
  },
  {
    icon: HardHat,
    title: "Construction Insurance",
    description: "Specialist cover for builders and contractors.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600",
  },
  {
    icon: FileCheck,
    title: "Professional Indemnity",
    description: "Cover for errors, omissions, and negligence.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600",
  },
  {
    icon: TrendingUp,
    title: "Trade Credit",
    description: "Protection from unpaid invoices.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600",
  },
  {
    icon: Factory,
    title: "Industrial Special Risks",
    description: "Solutions for complex industrial operations.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1600",
  },
];

export function InsuranceCards({showAll}: {showAll?: boolean}) {
  return (
    <section id="services" className="pt-20 pb-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex px-4 py-1.5 rounded-full text-sm bg-primary/10 text-primary mb-4">
              Services
            </span>
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">
              What do we do
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Smart, flexible insurance solutions designed around real-world
              risks.
            </p>
          </div>

          <Button
            variant="outline"
            className="rounded-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
            onClick={() => (window.location.href = "#all-services")}
          >
            View all services
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? insuranceTypes : insuranceTypes.slice(0, 6)).map(
            ({ icon: Icon, title, description, image }, i) => (
              <Card
                key={i}
                onClick={() => (window.location.href = "#quote")}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image (3/4) */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content (1/4) */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {description}
                  </p>

                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Get a quote →
                  </span>
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
