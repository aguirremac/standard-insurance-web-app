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

/**
 * Insurance type definition
 */
export type InsuranceType = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ElementType;
  benefits: string[];
};

/**
 * All insurance services
 */
export const insuranceTypes: InsuranceType[] = [
  {
    slug: "business-insurance",
    title: "Business Insurance",
    description: "Tailored protection for assets, operations, and liabilities.",
    longDescription: `
Business Insurance provides comprehensive coverage to protect your company against financial loss arising from property damage, legal liability, and unexpected disruptions. Designed to suit businesses of all sizes, it ensures that you can continue operations even in challenging circumstances.

This insurance covers a wide range of risks, including theft, fire, natural disasters, and third-party claims, offering peace of mind to business owners and stakeholders. It can also include business interruption coverage, safeguarding your revenue if your operations are temporarily halted due to unforeseen events.

Beyond financial protection, Business Insurance also supports risk management strategies. By analyzing your unique operational risks, insurers can help tailor a policy that reduces potential losses, improves resilience, and strengthens your company's overall risk profile.`,
    image: "/insurance/business-insurance.jpeg",
    icon: Building2,
    benefits: [
      "Protection for business assets",
      "Cover for legal liabilities",
      "Flexible policy options",
      "Risk management support",
    ],
  },
  {
    slug: "property-insurance",
    title: "Property Insurance",
    description: "Safeguard commercial and residential properties.",
    longDescription: `
Property Insurance protects buildings, contents, and fixed assets against fire, theft, storm damage, and other insured events. Whether it’s a commercial property or your home, this coverage ensures that your investments are secured.

In addition to standard protection, policies can include coverage for business interruption, loss of rental income, and temporary accommodation costs. This ensures you remain financially stable even if your property suffers damage that affects income generation.

Property Insurance also emphasizes risk assessment and preventive measures. Insurers often provide guidance on security systems, maintenance, and safety protocols to minimize claims and enhance the long-term resilience of your property investments.`,
    image: "/insurance/property-insurance.jpeg",
    icon: Home,
    benefits: [
      "Cover for buildings and contents",
      "Protection against fire and natural events",
      "Optional business interruption cover",
      "Tailored sums insured",
    ],
  },
  {
    slug: "public-liability",
    title: "Public Liability Insurance",
    description: "Cover against third-party injury or property damage.",
    longDescription: `
Public Liability Insurance protects your business from claims made by third parties for personal injury or property damage occurring in connection with your operations. This insurance is essential for businesses that interact with the public or clients on-site.

Coverage includes legal defence costs, compensation claims, and settlement expenses, allowing businesses to handle potential lawsuits without jeopardizing financial stability. Whether it’s a slip and fall or accidental damage, this insurance provides critical financial protection.

Additionally, Public Liability Insurance promotes trust and professionalism. Clients and partners are more likely to engage with a business that demonstrates responsibility and readiness to manage risks, enhancing your reputation and credibility in the marketplace.`,
    image: "/insurance/public-liability.jpeg",
    icon: Shield,
    benefits: [
      "Third-party injury cover",
      "Property damage protection",
      "Legal defence costs",
      "Peace of mind for business owners",
    ],
  },
  {
    slug: "commercial-motor",
    title: "Commercial Motor Insurance",
    description: "Flexible insurance for business vehicles and fleets.",
    longDescription: `
Commercial Motor Insurance provides cover for vehicles used for business purposes, including cars, vans, and fleets. It protects your vehicles from accidental damage, theft, fire, and third-party liability claims.

For businesses managing multiple vehicles, fleet policies offer simplified administration, consistent coverage, and potential cost savings. Optional extras can include roadside assistance, replacement vehicles, and legal assistance, providing comprehensive support on the road.

This insurance not only safeguards assets but also enhances operational efficiency. By reducing downtime from vehicle damage and mitigating financial risks, companies can maintain smooth business operations and focus on growth and service delivery.`,
    image: "/insurance/commercial-motor.jpg",
    icon: Car,
    benefits: [
      "Accidental damage cover",
      "Theft and fire protection",
      "Fleet policy options",
      "Third-party liability cover",
    ],
  },
  {
    slug: "management-liability",
    title: "Management Liability Insurance",
    description: "Protection for directors and officers.",
    longDescription: `
Management Liability Insurance protects directors, officers, and managers against claims arising from wrongful acts, employment practices, and regulatory investigations. It ensures that key personnel can lead with confidence without personal financial risk.

Policies typically cover defence costs, settlements, and penalties related to employment disputes, mismanagement allegations, or regulatory breaches. This financial safeguard is crucial for maintaining leadership stability and attracting top talent.

Moreover, Management Liability Insurance strengthens corporate governance. It encourages risk-aware decision-making and demonstrates to investors and stakeholders that the organization proactively manages managerial risks and responsibilities.`,
    image: "/insurance/management-liability.jpeg",
    icon: Users,
    benefits: [
      "Directors & officers protection",
      "Employment practices cover",
      "Regulatory investigation costs",
      "Company reimbursement cover",
    ],
  },
  {
    slug: "construction-insurance",
    title: "Construction Insurance",
    description: "Specialist cover for builders and contractors.",
    longDescription: `
Construction Insurance provides comprehensive coverage for builders, contractors, and tradespeople, protecting works in progress, tools, equipment, and materials on-site. It ensures projects can continue even in the event of unexpected losses.

Coverage extends to public and product liability, protecting against third-party claims for injury or property damage related to construction activities. Additional options may include coverage for delays, subcontractor errors, and equipment breakdown.

By mitigating financial risks, Construction Insurance allows contractors to focus on quality, safety, and project delivery. It also instills confidence in clients, demonstrating professionalism and a commitment to risk management.`,
    image: "/insurance/construction-insurance.jpeg",
    icon: HardHat,
    benefits: [
      "Contract works insurance",
      "Public and product liability",
      "Tools and equipment cover",
      "Flexible policy terms",
    ],
  },
  {
    slug: "professional-indemnity",
    title: "Professional Indemnity Insurance",
    description: "Cover for errors, omissions, and negligence.",
    longDescription: `
Professional Indemnity Insurance protects professionals against claims of negligence, errors, or omissions arising from the services they provide. It ensures financial protection for individuals and firms offering expert advice or services.

Policies cover legal defence costs, settlements, and compensation claims, allowing professionals to operate confidently and maintain client trust. It is particularly relevant for consultants, architects, engineers, and other service providers.

Additionally, this insurance promotes business credibility. Clients feel reassured that professionals are accountable and backed by coverage that mitigates the risks of complex and high-stakes work.`,
    image: "/insurance/professional-indemnity.jpeg",
    icon: FileCheck,
    benefits: [
      "Negligence claim protection",
      "Legal defence costs",
      "Industry-specific cover",
      "Claims-made policies",
    ],
  },
  {
    slug: "trade-credit",
    title: "Trade Credit Insurance",
    description: "Protection from unpaid invoices.",
    longDescription: `
Trade Credit Insurance safeguards businesses against the risk of non-payment by customers. It helps maintain cash flow, reduces financial uncertainty, and allows businesses to trade confidently with new and existing clients.

Coverage typically includes unpaid invoices due to insolvency, protracted default, or political risks. Insurers may provide credit assessment and monitoring tools to identify risky customers proactively.

By stabilizing cash flow and mitigating financial risk, Trade Credit Insurance enables companies to expand their operations, negotiate better terms with suppliers, and focus on sustainable growth.`,
    image: "/insurance/trade-credit.jpeg",
    icon: TrendingUp,
    benefits: [
      "Protection against bad debts",
      "Improved cash flow",
      "Customer credit monitoring",
      "Support for business growth",
    ],
  },
  {
    slug: "industrial-special-risks",
    title: "Industrial Special Risks Insurance",
    description: "Solutions for complex industrial operations.",
    longDescription: `
Industrial Special Risks Insurance is designed for large or complex businesses, offering broad protection for high-value assets, machinery, and operational risks. It ensures continuity of operations even in the face of major incidents.

Coverage may include fire, explosion, machinery breakdown, natural disasters, and business interruption, tailored to the unique needs of industrial enterprises. Policies are highly flexible, allowing customization to match operational complexity.

This insurance also supports risk management strategies and compliance requirements, providing businesses with financial stability, operational resilience, and peace of mind in high-stakes industrial environments.`,
    image: "/insurance/industrial-special-risks.jpeg",
    icon: Factory,
    benefits: [
      "High-value asset protection",
      "Machinery breakdown cover",
      "Tailored risk solutions",
      "Comprehensive policy wording",
    ],
  },
];

/**
 * Helpers
 */
export function getInsuranceBySlug(slug: string): InsuranceType | undefined {
  return insuranceTypes.find((item) => item.slug === slug);
}

export function getAllInsuranceSlugs() {
  return insuranceTypes.map((item) => ({
    slug: item.slug,
  }));
}
