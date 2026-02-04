import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-[#042E4C]" />
              <span className="text-xl text-white">Standard Insurance</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional insurance solutions tailored to protect your business
              and personal assets with comprehensive coverage and expert
              service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="hover:text-[#042E4C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-[#042E4C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-[#042E4C] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#042E4C] transition-colors"
                >
                  Business Insurance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#042E4C] transition-colors"
                >
                  Property Insurance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#042E4C] transition-colors"
                >
                  Commercial Motor
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#042E4C] transition-colors"
                >
                  Professional Indemnity
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#042E4C] transition-colors"
                >
                  Management Liability
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#042E4C] mt-0.5 flex-shrink-0" />
                <div>
                  <div>+1 (555) 123-4567</div>
                  <div className="text-gray-500">Mon-Fri 9am-5pm</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#042E4C] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@standardinsurance.com"
                  className="hover:text-[#042E4C] transition-colors"
                >
                  info@standardinsurance.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#042E4C] mt-0.5 flex-shrink-0" />
                <div>
                  123 Insurance Plaza
                  <br />
                  New York, NY 10001
                </div>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-white mb-6">Legal & Compliance</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Regulatory Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  Complaints Procedure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#042E4C] transition-colors">
                  FSA Authorisation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>FSA Regulated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Award Winning Service</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Standard Insurance. All rights
            reserved. | Licensed and regulated by financial authorities.
          </p>
        </div>
      </div>
    </footer>
  );
}
