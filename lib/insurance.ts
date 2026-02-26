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
export const insuranceTypesEN: InsuranceType[] = [
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


export const insuranceTypeKOR: InsuranceType[]= [
      {
        slug: "business-insurance",
        title: "기업 보험",
        description: "자산, 운영 및 책임에 대한 맞춤형 보호.",
        longDescription: `
    기업 보험은 재산 피해, 법적 책임 및 예상치 못한 중단으로 인한 재정적 손실로부터 회사를 보호하는 포괄적인 보장을 제공합니다. 모든 규모의 비즈니스에 적합하도록 설계되어 어려운 상황에서도 운영을 계속할 수 있도록 보장합니다.

    이 보험은 도난, 화재, 자연 재해 및 제3자 청구를 포함한 광범위한 위험을 다루며 비즈니스 소유자와 이해 관계자에게 평화를 제공합니다. 또한 사업 중단 보장을 포함할 수 있어 예기치 않은 사건으로 인해 운영이 일시적으로 중단되는 경우 수익을 보호합니다.

    재정적 보호를 넘어 기업 보험은 위험 관리 전략도 지원합니다. 고유한 운영 위험을 분석하여 잠재적 손실을 줄이고 회복력을 개선하며 회사의 전반적인 위험 프로필을 강화하는 정책을 맞춤화하는 데 도움을 줄 수 있습니다.`,
        image: "/insurance/business-insurance.jpeg",
        icon: Building2,
        benefits: [
          "비즈니스 자산 보호",
          "법적 책임 보장",
          "유연한 정책 옵션",
          "위험 관리 지원",
        ],  
      },
      {
        slug: "property-insurance",
        title: "재산 보험",
        description: "상업 및 주거용 부동산 보호.",
        longDescription: `
    재산 보험은 화재, 도난, 폭풍 피해 및 기타 보험 사건으로부터 건물, 내용물 및 고정 자산을 보호합니다. 상업용 부동산이든 주택이든 이 보장은 투자가 안전하게 보호되도록 보장합니다.

    표준 보호 외에도 정책에는 사업 중단, 임대 수입 손실 및 임시 숙박 비용에 대한 보장이 포함될 수 있습니다. 이는 수익 창출에 영향을 미치는 손상이 발생하더라도 재정적으로 안정적으로 유지할 수 있도록 합니다.

    재산 보험은 또한 위험 평가 및 예방 조치를 강조합니다. 보험사는 종종 보안 시스템, 유지 관리 및 안전 프로토콜에 대한 지침을 제공하여 청구를 최소화하고 장기적인 회복력을 향상시킵니다.`,
        image: "/insurance/property-insurance.jpeg",
        icon: Home,
        benefits: [
          "건물 및 내용물 보장",
          "화재 및 자연 재해로부터 보호",
          "선택적 사업 중단 보장",
          "맞춤형 보험금액",
        ],
      },
      {
        slug: "public-liability",
        title: "공공 책임 보험",
        description: "제3자 부상 또는 재산 피해에 대한 보장.",
        longDescription: `
    공공 책임 보험은 비즈니스가 제3자와 관련된 개인 상해 또는 재산 피해에 대한 청구로부터 보호합니다. 이 보험은 현장 또는 고객과 상호 작용하는 비즈니스에 필수적입니다.

    보장에는 법적 방어 비용, 보상 청구 및 합의 비용이 포함되어 있어 비즈니스가 재정적 안정성을 위협하지 않고 잠재적인 소송을 처리할 수 있도록 합니다. 미끄러짐 및 넘어짐이든 우발적인 손상이든 이 보험은 중요한 재정적 보호를 제공합니다.

    또한 공공 책임 보험은 신뢰와 전문성을 촉진합니다. 고객과 파트너는 책임감과 위험 관리를 관리할 준비가 된 비즈니스와 거래할 가능성이 더 높아져 시장에서 평    
판과 신뢰도를 높입니다.`,
        image: "/insurance/public-liability.jpeg",
        icon: Shield,
        benefits: [
          "제3자 부상 보장",
          "재산 피해 보호",
          "법적 방어 비용",
          "비즈니스 소유자에게 평화 제공",
        ],
      },
      {
        slug: "commercial-motor",
        title: "상업용 모터 보험",
        description: "비즈니스 차량 및 함대를 위한 유연한 보험.",
        longDescription: `
    상업용 모터 보험은 비즈니스 목적으로 사용되는 차량, 자동차, 밴 및 함대를 보호합니다. 사고로 인한 손상, 도난, 화재 및 제3자 책임 청구로부터 차량을 보호합니다.

    여러 대의 차량을 관리하는 비즈니스의 경우 함대 정책은 간소화된 관리, 일관된 보장 및 잠재적인 비용 절감을 제공합니다. 선택적 추가 기능에는 긴급 출동 지원, 대체 차량 및 법적 지원이 포함될 수 있어 도로에서 포괄적인 지원을 제공합니다.

    이 보험은 자산을 보호할 뿐만 아니라 운영 효율성을 향상시킵니다. 차량 손상으로 인한 다운타임을 줄이고 재정적 위험을 완화하여 회사가 원활한 비즈니스 운영을 유지하고 성장과 서비스 제공에 집중할 수 있도록 합니다.`,
        image: "/insurance/commercial-motor.jpg",
        icon: Car,
        benefits: [
          "사고 손상 보장",
          "도난 및 화재 보호",
          "함대 정책 옵션",
          "제3자 책임 보장",
        ],
      },
      {
        slug: "management-liability",
        title: "경영 책임 보험",
        description: "이사 및 임원 보호.",
        longDescription: `
    경영 책임 보험은 이사, 임원 및 관리자를 잘못된 행위, 고용 관행 및 규제 조사로 인한 청구로부터 보호합니다. 주요 인력이 개인 재정적 위험 없이 자신감을 가지고 리드할 수 있도록 보장합니다.

    정책에는 일반적으로 고용 분쟁, 관리 부실 혐의 또는 규제 위반과 관련된 법적 방어 비용, 합의 및 벌금이 포함되어 있습니다. 이 재정적 안전 장치는 리더십 안정성을 유지하고 최고의 인재를 유치하는 데 중요합니다.

    또한 경영 책임 보험은 기업 거버넌스를 강화합니다. 위험 인식 의사 결정을 장려하고 투자자와 이해 관계자에게 조직이 관리 위험과 책임을 적극적으로 관리한다는 것을 보여줍니다.`,
        image: "/insurance/management-liability.jpeg",
        icon: Users,
        benefits: [
          "이사 및 임원 보호",
          "고용 관행 보장",
          "규제 조사 비용",
          "회사 상환 보장",
        ],
      },
      {
        slug: "construction-insurance",
        title: "건설 보험",
        description: "건축업자 및 계약자를 위한 전문 보장.",
        longDescription: `
    건설 보험은 건축업자, 계약자 및 현장 기술자를 위한 포괄적인 보장을 제공하여 진행 중인 작업, 도구, 장비 및 현장의 자재를 보호합니다. 예상치 못한 손실이 발생하더라도 프로젝트를 계속할 수 있도록 보장합니다.

    보장은 일반적으로 공공 및 제품 책임을 포함하여 건설 활동과 관련된 제3자 청구로부터 보호합니다. 추가 옵션에는 지연, 하도급업체 오류 및 장비 고장에 대한 보장이 포함될 수 있습니다.

    재정적 위험을 완화함으로써 건설 보험은 계약자가 품질, 안전 및 프로젝트 납품에 집중할 수 있도록 합니다. 또한 고객에게 신뢰를 심어주어 전문성과 위험 관리에 대한 약속을 보여줍니다.`,
        image: "/insurance/construction-insurance.jpeg",
        icon: HardHat,
        benefits: [
          "계약 작업 보험",
          "공공 및 제품 책임",
          "도구 및 장비 보장",
          "유연한 정책 조건",
        ],
      },
      {
        slug: "professional-indemnity",
        title: "전문 배상 책임 보험",
        description: "오류, 누락 및 과실에 대한 보장.",
        longDescription: `
    전문 배상 책임 보험은 전문가가 제공하는 서비스에서 발생하는 과실, 오류 또는 누락에 대한 청구로부터 전문가를 보호합니다. 개인과 전문가 서비스를 제공하는 회사를 위한 재정적 보호를 보장합니다.

    정책에는 법적 방어 비용, 합의 및 보상 청구가 포함되어 있어 전문가가 자신감을 가지고 운영하고 고객 신뢰를 유지할 수 있도록 합니다. 이는 컨설턴트, 건축가, 엔지니어 및 기타 서비스 제공자에게 특히 관련이 있습니다.

    또한 이 보험은 비즈니스 신뢰도를 촉진합니다. 고객은 전문가가 책임이 있고 복잡하고 고위험 작업의 위험을 완화하는 보장으로 지원된다는 사실에 안심합니다.`,
        image: "/insurance/professional-indemnity.jpeg",
        icon: FileCheck,
        benefits: [
          "과실 청구 보호",
          "법적 방어 비용",
          "업계별 보장",
          "청구 발생 정책",
        ],
      },
      {
        slug: "trade-credit",
        title: "무역 신용 보험",
        description: "미지급 송장으로부터 보호.",
        longDescription: `
    무역 신용 보험은 고객의 미지급 위험으로부터 비즈니스를 보호합니다. 현금 흐름을 유지하고 재정적 불확실성을 줄이며 새로운 고객과 기존 고객과 자신 있게 거래할 수 있도록 도와줍니다.

    보장에는 일반적으로 지급 불능, 장기 채무 불이행 또는 정치적 위험으로 인한 미지급 송장이 포함됩니다. 보험사는 위험한 고객을 사전에 식별하기 위한 신용 평가 및 모니터링 도구를 제공할 수 있습니다.

    무역 신용 보험은 현금 흐름을 안정시키고 재정적 위험을 완화하여 회사가 운영을 확장하고 공급업체와 더 나은 조건을 협상하며 지속 가능한  성장에 집중할 수 있도록 합니다.`,
        image: "/insurance/trade-credit.jpeg",
        icon: TrendingUp,
        benefits: [
          "부실 채권에 대한 보호",
          "개선된 현금 흐름",
          "고객 신용 모니터링",
          "비즈니스 성장 지원",
        ],
       },
      {
        slug: "industrial-special-risks",
        title: "산업 특수 위험 보험",
        description: "복잡한 산업 운영을 위한 솔루션.",
        longDescription: `
    산업 특수 위험 보험은 대규모 또는 복잡한 비즈니스를 위해 설계되었으며 고가치 자산, 기계 및 운영 위험에 대한 광범위한 보호를 제공합니다. 주요 사고가 발생하더라도 운영의 연속성을 보장합니다.

    보장에는 화재, 폭발, 기계 고장, 자연 재해 및 사업 중단이 포함될 수 있으며 산업 기업의 고유한 요구에 맞게 조정됩니다. 정책은 운영의 복잡성에 맞게 맞춤화할 수 있도록 매우 유연합니다.

    이 보험은 또한 위험 관리 전략과 규정 준수 요구 사항을 지원하여 고위험 산업 환경에서 비즈니스에 재정적 안정성, 운영 탄력성 및 평화를 제공합니다.`,
        image: "/insurance/industrial-special-risks.jpeg",
        icon: Factory,
        benefits: [
          "고가치 자산 보호",
          "기계 고장 보장",
          "맞춤형 위험 솔루션",
          "포괄적인 정책 문구",
        ],
      }
]

/**
 * Helpers
 */
export function getInsuranceBySlug(slug: string, lang: "EN" | "KO"): InsuranceType | undefined {
  const insuranceTypes = lang === "KO" ? insuranceTypeKOR : insuranceTypesEN;
  return insuranceTypes.find((item) => item.slug === slug);
}

export function getAllInsuranceSlugs(lang: "EN" | "KO"): { slug: string }[] {
  const insuranceTypes = lang === "KO" ? insuranceTypeKOR : insuranceTypesEN;
  return insuranceTypes.map((item) => ({
    slug: item.slug,
  }));
}
