import {
  Building2,
  Home,
  Car,
  Shield,
  Briefcase,
  HardHat,
  FileCheck,
  TrendingUp,
  Wrench,
  Users,
  Factory,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const insuranceTypes = [
  {
    icon: Building2,
    title: "Business Insurance",
    description:
      "Comprehensive coverage for your business assets, operations, and liability risks.",
    color: "text-blue-600",
  },
  {
    icon: Home,
    title: "Property Insurance",
    description:
      "Protect your commercial and residential properties against damage and loss.",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "Public Liability",
    description:
      "Coverage for claims made against your business by members of the public.",
    color: "text-purple-600",
  },
  {
    icon: Car,
    title: "Commercial Motor",
    description:
      "Complete vehicle insurance for your business fleet and commercial vehicles.",
    color: "text-red-600",
  },
  {
    icon: Home,
    title: "Home Insurance",
    description:
      "Protect your home and belongings with comprehensive residential coverage.",
    color: "text-orange-600",
  },
  {
    icon: Car,
    title: "Private Motor",
    description:
      "Affordable car insurance with flexible coverage options for personal vehicles.",
    color: "text-indigo-600",
  },
  {
    icon: Users,
    title: "Management Liability",
    description:
      "Protection for directors and officers against legal claims and corporate risks.",
    color: "text-teal-600",
  },
  {
    icon: HardHat,
    title: "Construction Insurance",
    description:
      "Specialized coverage for construction projects, contractors, and builders.",
    color: "text-yellow-600",
  },
  {
    icon: FileCheck,
    title: "Professional Indemnity",
    description:
      "Essential protection against claims of professional negligence or errors.",
    color: "text-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Trade Credit",
    description:
      "Safeguard your business against customer insolvency and payment default.",
    color: "text-cyan-600",
  },
  {
    icon: Factory,
    title: "Industrial Special Risks",
    description:
      "Tailored coverage for complex industrial operations and unique risk exposures.",
    color: "text-slate-600",
  },
];

export function InsuranceCards() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#042E4C]/10 text-[#042E4C] rounded-full text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl mb-4 text-gray-900">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From business to personal coverage, we offer tailored insurance
            solutions to protect what matters most to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((insurance, index) => {
            const Icon = insurance.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#042E4C]/20 bg-white"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-gray-50 rounded-lg group-hover:bg-[#042E4C]/5 transition-colors">
                      <Icon className={`h-8 w-8 ${insurance.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">
                    {insurance.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {insurance.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-[#042E4C] group-hover:text-white group-hover:border-[#042E4C] transition-all"
                    onClick={() => (window.location.href = "#quote")}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <Button
            size="lg"
            className="bg-[#042E4C] hover:bg-[#063d64] text-white"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Our Specialists
          </Button>
        </div>
      </div>
    </section>
  );
}
