'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Clock,
  Lock,
} from "lucide-react";

const steps = [
  { id: 1, name: "Coverage Type" },
  { id: 2, name: "Your Details" },
  { id: 3, name: "Additional Info" },
  { id: 4, name: "Review" },
];

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    insuranceType: "",
    businessName: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    coverageAmount: "",
    startDate: "",
    additionalInfo: "",
  });

  const progress = (currentStep / steps.length) * 100;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Quote request submitted! Our team will contact you shortly.\n\nNote: This is a demo form."
    );
  };

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#042E4C]/10 text-[#042E4C] rounded-full text-sm mb-4">
            Get Your Quote
          </div>
          <h2 className="text-4xl mb-4 text-gray-900">
            Request a Free Insurance Quote
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and receive a personalized quote within 24
            hours
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-[#042E4C]" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-[#042E4C]" />
            <span>Fast Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-[#042E4C]" />
            <span>No Obligation</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center ${
                    step.id < steps.length ? "flex-1" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        currentStep >= step.id
                          ? "bg-[#042E4C] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div
                      className={`text-xs mt-2 text-center hidden md:block ${
                        currentStep >= step.id
                          ? "text-[#042E4C]"
                          : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </div>
                  </div>
                  {step.id < steps.length && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-colors ${
                        currentStep > step.id ? "bg-[#042E4C]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Coverage Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="insuranceType">
                    What type of insurance do you need?
                  </Label>
                  <Select
                    value={formData.insuranceType}
                    onValueChange={(value) =>
                      handleSelectChange("insuranceType", value)
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">
                        Business Insurance
                      </SelectItem>
                      <SelectItem value="property">
                        Property Insurance
                      </SelectItem>
                      <SelectItem value="liability">
                        Public Liability
                      </SelectItem>
                      <SelectItem value="commercial-motor">
                        Commercial Motor
                      </SelectItem>
                      <SelectItem value="home">Home Insurance</SelectItem>
                      <SelectItem value="private-motor">
                        Private Motor
                      </SelectItem>
                      <SelectItem value="management">
                        Management Liability
                      </SelectItem>
                      <SelectItem value="construction">
                        Construction Insurance
                      </SelectItem>
                      <SelectItem value="professional">
                        Professional Indemnity
                      </SelectItem>
                      <SelectItem value="trade-credit">
                        Trade Credit
                      </SelectItem>
                      <SelectItem value="industrial">
                        Industrial Special Risks
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="coverageAmount">
                    Estimated Coverage Amount
                  </Label>
                  <Select
                    value={formData.coverageAmount}
                    onValueChange={(value) =>
                      handleSelectChange("coverageAmount", value)
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select coverage amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k">Up to $50,000</SelectItem>
                      <SelectItem value="100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="1m">$500,000 - $1,000,000</SelectItem>
                      <SelectItem value="1m+">Over $1,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Your Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="businessName">
                    Business Name (if applicable)
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Additional Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, State, ZIP"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="startDate">
                    Preferred Coverage Start Date
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalInfo">
                    Additional Information or Questions
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your insurance needs..."
                    className="mt-2 min-h-32"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl mb-4 text-gray-900">
                    Review Your Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Insurance Type:</span>
                      <span className="text-gray-900">
                        {formData.insuranceType || "Not specified"}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Coverage Amount:</span>
                      <span className="text-gray-900">
                        {formData.coverageAmount || "Not specified"}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Full Name:</span>
                      <span className="text-gray-900">
                        {formData.fullName || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-gray-900">
                        {formData.email || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-gray-900">
                        {formData.phone || "Not provided"}
                      </span>
                    </div>
                    {formData.businessName && (
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Business Name:</span>
                        <span className="text-gray-900">
                          {formData.businessName}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="mb-2">
                        By submitting this form, you agree to our privacy policy
                        and terms of service. Your information is secure and
                        will only be used to provide you with an insurance
                        quote.
                      </p>
                      <p>
                        One of our expert advisors will review your request and
                        contact you within 24 hours with a personalized quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-[#042E4C] hover:bg-[#063d64] px-6"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-[#042E4C] hover:bg-[#063d64] px-6"
                >
                  Submit Request
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Your privacy is important to us. We will never share your
            information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}
