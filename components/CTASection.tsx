import useUtils from "@/hooks/use-utils";
import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {

  const { PHONE_NUMBER } = useUtils()
  return (
    <section className="py-20 bg-gradient-to-br from-[#042E4C] to-[#063d64] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Ready to Protect What Matters?
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Get a free, no-obligation quote today and discover why thousands of
          clients trust Standard Insurance for their coverage needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
            onClick={() => (window.location.href = "#quote")}
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 bg-accent border-white text-white text-lg px-8 py-6"
            onClick={() => (window.location.href = `tel:${PHONE_NUMBER}`)}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: {PHONE_NUMBER}
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-300">
          <p>Available Monday - Friday, 9am - 5pm EST</p>
        </div>
      </div>
    </section>
  );
}
