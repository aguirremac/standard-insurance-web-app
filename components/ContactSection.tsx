'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Message sent! We'll get back to you shortly.\n\nNote: This is a demo form."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#042E4C]/10 text-[#042E4C] rounded-full text-sm mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl mb-4 text-gray-900">Contact Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our expert advisors are here to help. Reach out and
            we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-gray-900">
                We're Here to Help
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need a quote, have questions about coverage, or want
                to file a claim, our dedicated team is ready to assist you every
                step of the way.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-[#042E4C]/10 rounded-lg">
                  <Phone className="h-6 w-6 text-[#042E4C]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Phone</div>
                  <a
                    href="tel:+15551234567"
                    className="text-lg text-gray-900 hover:text-[#042E4C]"
                  >
                    +1 (555) 123-4567
                  </a>
                  <div className="text-sm text-gray-500 mt-1">
                    Monday - Friday, 9am - 5pm EST
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-[#042E4C]/10 rounded-lg">
                  <Mail className="h-6 w-6 text-[#042E4C]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <a
                    href="mailto:info@standardinsurance.com"
                    className="text-lg text-gray-900 hover:text-[#042E4C]"
                  >
                    info@standardinsurance.com
                  </a>
                  <div className="text-sm text-gray-500 mt-1">
                    We'll respond within 24 hours
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-[#042E4C]/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-[#042E4C]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Office</div>
                  <div className="text-lg text-gray-900">
                    123 Insurance Plaza
                    <br />
                    New York, NY 10001
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-[#042E4C]/10 rounded-lg">
                  <Clock className="h-6 w-6 text-[#042E4C]" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Business Hours
                  </div>
                  <div className="text-lg text-gray-900">
                    Mon - Fri: 9:00 AM - 5:00 PM
                    <br />
                    Sat: 10:00 AM - 2:00 PM
                    <br />
                    Sun: Closed
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl mb-6 text-gray-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="mt-2 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="contact-email">Email Address *</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="mt-2 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="contact-phone">Phone Number</Label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="mt-2 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  required
                  className="mt-2 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                  className="mt-2 min-h-32 bg-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#042E4C] hover:bg-[#063d64] py-6"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-sm text-gray-500 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
