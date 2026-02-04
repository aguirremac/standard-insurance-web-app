import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection({ heroImageSrc }: { heroImageSrc: string }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-1.jpg"
          alt="Insurance hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Layered overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#042E4C]/90 via-[#042E4C]/70 to-[#041F33]/80" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Subtle pattern (modern touch) */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-14 items-center py-20 lg:py-28">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Shield className="h-4 w-4" />
              <span className="text-white/90">Trusted by 10,000+ clients worldwide</span>
            </div>

            <h1 className="text-white text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Comprehensive Insurance Coverage You Can Trust
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Protect what matters most with tailored insurance solutions for your business
              and personal needs. Fast quotes, expert advice, and exceptional service.
            </p>



            {/* CTAs */}
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-7 text-[#042E4C] hover:bg-white/90"
                onClick={() => (window.location.href = "#quote")}
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-white/0 px-7 text-white hover:bg-white/10"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact Us
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
