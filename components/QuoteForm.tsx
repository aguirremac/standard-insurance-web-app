'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

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
    startDate: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => currentStep < steps.length && setCurrentStep(currentStep + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted! Our team will contact you shortly.");
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <section id="quote" className="py-16 md:py-[100px] bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Get Your Free Quote
          </h2>
          <p className="text-gray-600">
            Fill out the form below and receive a personalized insurance quote within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Progress */}
          <Progress value={progress} className="h-2 rounded-full mb-8" />

          <form onSubmit={handleSubmit} className="space-y-15">
            {/* Step 1: Coverage Type */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <Label htmlFor="insuranceType">What type of insurance do you need?</Label>
                <Select value={formData.insuranceType} onValueChange={(v) => handleSelectChange("insuranceType", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business Insurance</SelectItem>
                    <SelectItem value="property">Property Insurance</SelectItem>
                    <SelectItem value="liability">Public Liability</SelectItem>
                    <SelectItem value="commercial-motor">Commercial Motor</SelectItem>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="private-motor">Private Motor</SelectItem>
                    <SelectItem value="management">Management Liability</SelectItem>
                    <SelectItem value="construction">Construction Insurance</SelectItem>
                    <SelectItem value="professional">Professional Indemnity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Step 2: Your Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="businessName">Business Name (optional)</Label>
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
              <div className="space-y-4">
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
                  <Label htmlFor="startDate">Preferred Start Date</Label>
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
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your insurance needs..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Review Your Information</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between border-b pb-2">
                    <span>Insurance Type:</span>
                    <span>{formData.insuranceType || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Full Name:</span>
                    <span>{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Email:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Phone:</span>
                    <span>{formData.phone}</span>
                  </div>
                  {formData.businessName && (
                    <div className="flex justify-between border-b pb-2">
                      <span>Business:</span>
                      <span>{formData.businessName}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6 rounded-xl"
                size="lg"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>

              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  size="lg"
                  className="bg-primary hover:bg-[#063d64] rounded-xl text-white px-6"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-[#063d64] text-white rounded-xl px-6 "
                >
                  Submit
                  <CheckCircle2 className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
