import {
  Award,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#042E4C]/10 text-[#042E4C] rounded-full text-sm mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl mb-4 text-gray-900">
            Trusted by Thousands of Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our award-winning service, expert
            guidance, and commitment to your protection.
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#042E4C]/5 transition-colors">
            <div className="inline-flex p-4 bg-[#042E4C]/10 rounded-full mb-4">
              <Award className="h-8 w-8 text-[#042E4C]" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Award Winning</h3>
            <p className="text-gray-600">
              Recognized industry leader with multiple awards for service
              excellence and customer satisfaction.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#042E4C]/5 transition-colors">
            <div className="inline-flex p-4 bg-[#042E4C]/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-[#042E4C]" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Fully Regulated</h3>
            <p className="text-gray-600">
              Licensed and authorized by financial authorities with full
              compliance to industry standards.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#042E4C]/5 transition-colors">
            <div className="inline-flex p-4 bg-[#042E4C]/10 rounded-full mb-4">
              <Clock className="h-8 w-8 text-[#042E4C]" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Fast Claims</h3>
            <p className="text-gray-600">
              Average claim processing in 48 hours with 99.2% approval rate and
              dedicated support team.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#042E4C]/5 transition-colors">
            <div className="inline-flex p-4 bg-[#042E4C]/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-[#042E4C]" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">Expert Advisors</h3>
            <p className="text-gray-600">
              Professional insurance specialists available 24/7 to guide you
              through every step.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#042E4C]/5 transition-colors">
            <div className="inline-flex p-4 bg-[#042E4C]/10 rounded-full mb-4">
              <CheckCircle2 className="h-8 w-8 text-[#042E4C]" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">No Obligation</h3>
            <p className="text-gray-600">
              Get instant quotes with no commitment required. Compare options
              and decide at your own pace.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-[#042E4C]/5 transition-colors">
            <div className="inline-flex p-4 bg-[#042E4C]/10 rounded-full mb-4">
              <Star className="h-8 w-8 text-[#042E4C]" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900">98% Satisfaction</h3>
            <p className="text-gray-600">
              Rated excellent by our clients with outstanding reviews and high
              retention rates.
            </p>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="bg-[#042E4C] text-white rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">25+</div>
              <div className="text-sm text-gray-300">Years in Business</div>
            </div>
            <div>
              <div className="text-3xl mb-2">10,000+</div>
              <div className="text-sm text-gray-300">Active Policies</div>
            </div>
            <div>
              <div className="text-3xl mb-2">$2B+</div>
              <div className="text-sm text-gray-300">Coverage Provided</div>
            </div>
            <div>
              <div className="text-3xl mb-2">99.2%</div>
              <div className="text-sm text-gray-300">Claims Approved</div>
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            </div>
            <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
              "Standard Insurance provided exceptional service when we needed it
              most. Their team was professional, responsive, and made the entire
              claims process seamless. Highly recommended!"
            </blockquote>
            <div className="text-gray-900">Sarah Johnson</div>
            <div className="text-sm text-gray-500">CEO, TechStart Inc.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
