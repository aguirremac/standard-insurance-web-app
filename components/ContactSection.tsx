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
    alert("Message sent! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-white to-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Let’s talk insurance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you’re after a quote or expert advice, our team is ready to
            help — no pressure, just clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 max-w-lg">
                Speak directly with experienced advisors who understand your
                business and personal insurance needs.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  sub: "Mon–Fri, 9am–5pm",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@standardinsurance.com",
                  sub: "Reply within 24 hours",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "123 Insurance Plaza, New York, NY",
                },
                {
                  icon: Clock,
                  label: "Business Hours",
                  value: "Mon–Fri: 9am–5pm",
                  sub: "Sat: 10am–2pm",
                },
              ].map(({ icon: Icon, label, value, sub }, i) => (
                <div
                  key={i}
                  className="flex  items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="text-base font-medium text-gray-900">
                      {value}
                    </div>
                    {sub && (
                      <div className="text-sm text-gray-500 mt-1">{sub}</div>
                    )}
                  </div>
                </div>
              ))}
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

          {/* Right: Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label>Full name</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@email.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label>Phone</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Subject</Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label>Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us a bit about what you need…"
                  required
                  className="mt-2 min-h-[140px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-white rounded-full bg-primary hover:bg-primary/90"
              >
                Send message
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-sm text-gray-500">
                Your information is kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
