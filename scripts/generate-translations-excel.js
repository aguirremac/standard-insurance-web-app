/**
 * Script to generate an Excel file with all English and Korean translations across the app.
 * Column 1: English | Column 2: Korean | With section titles per page
 * 
 * Run: node scripts/generate-translations-excel.js
 */

const XLSX = require('xlsx');

const translations = [
  // === HEADER / NAVIGATION ===
  { section: "Header / Navigation", english: "Our Services", korean: "서비스" },
  { section: "Header / Navigation", english: "Insurance Review", korean: "보험 리뷰" },
  { section: "Header / Navigation", english: "Competitive Quotation", korean: "경쟁력 있는 견적" },
  { section: "Header / Navigation", english: "Claim Service", korean: "클레임 서비스" },
  { section: "Header / Navigation", english: "Insurance Types", korean: "보험 종류" },
  { section: "Header / Navigation", english: "All Insurance Types", korean: "모든 보험 종류" },
  { section: "Header / Navigation", english: "About Us", korean: "회사 소개" },
  { section: "Header / Navigation", english: "Contact Us", korean: "문의하기" },
  { section: "Header / Navigation", english: "Get a Quote", korean: "견적 받기" },

  // === HERO SECTION (Home) ===
  { section: "Home - Hero Section", english: "Trusted protection from day one", korean: "첫날부터 신뢰할 수 있는 보호" },
  { section: "Home - Hero Section", english: "Comprehensive Insurance Coverage You Can Trust", korean: "신뢰할 수 있는 종합 보험 보장" },
  { section: "Home - Hero Section", english: "Protect what matters most with tailored insurance solutions for your business and personal needs. Fast quotes, expert advice, and exceptional service.", korean: "비즈니스와 개인의 필요에 맞춘 맞춤형 보험 솔루션으로 가장 중요한 것을 보호하세요. 빠른 견적, 전문가 조언 및 탁월한 서비스." },
  { section: "Home - Hero Section", english: "Get a Free Quote", korean: "무료 견적 받기" },
  { section: "Home - Hero Section", english: "Contact Us", korean: "문의하기" },

  // === WELCOME SECTION (Home) ===
  { section: "Home - Welcome Section", english: "Insurance Made Simple.", korean: "간단한 보험." },
  { section: "Home - Welcome Section", english: "Protection You Can Rely On.", korean: "믿을 수 있는 보호." },
  { section: "Home - Welcome Section", english: "Standard Insurance delivers clear, dependable coverage built around real people and real risks. No complexity. No hidden terms.", korean: "Standard Insurance 는 실제 사람과 실제 위험을 중심으로 명확하고 신뢰할 수 있는 보장을 제공합니다. 복잡성 없음. 숨겨진 조건 없음." },
  { section: "Home - Welcome Section", english: "Built on Trust", korean: "신뢰에 기반" },
  { section: "Home - Welcome Section", english: "Transparent advice and reliable coverage designed to protect what matters most.", korean: "가장 중요한 것을 보호하기 위해 투명한 조언과 신뢰할 수 있는 보장을 제공합니다." },
  { section: "Home - Welcome Section", english: "When Time Matters", korean: "시간이 중요할 때" },
  { section: "Home - Welcome Section", english: "Fast claims, clear communication, and dependable support during critical moments.", korean: "중요한 순간에 빠른 청구, 명확한 커뮤니케이션, 그리고 신뢰할 수 있는 지원을 제공합니다." },
  { section: "Home - Welcome Section", english: "Client First", korean: "고객 우선" },
  { section: "Home - Welcome Section", english: "Real advisors providing tailored insurance solutions — no scripts, no pressure.", korean: "대본 없이 맞춤형 보험 솔루션을 제공하는 실제 상담사입니다." },
  { section: "Home - Welcome Section", english: "Built on experience. Driven by clarity.", korean: "경험에 기반. 명확성에 의해 움직입니다." },
  { section: "Home - Welcome Section", english: "Standard Insurance was founded with a simple belief: insurance should be clear, practical, and built around real people - not paperwork.", korean: "Standard Insurance 는 보험이 명확하고 실용적이며 실제 사람을 중심으로 해야 한다는 단순한 믿음으로 설립되었습니다 - 서류 작업이 아닙니다." },
  { section: "Home - Welcome Section", english: "After years working within the Australian insurance industry, our founders saw firsthand how confusing policies, generic advice, and transactional service left clients uncertain at the moments they needed support most. Standard Insurance was created to change that experience.", korean: "호주 보험 산업에서 수년간 일한 후, 우리의 창립자들은 혼란스러운 정책, 일반적인 조언, 거래 중심의 서비스가 고객을 가장 필요한 순간에 불확실하게 만든다는 것을 직접 목격했습니다. Standard Insurance는 그 경험을 바꾸기 위해 만들어졌습니다." },
  { section: "Home - Welcome Section", english: "From our early days assisting small business owners and families, we've grown through long-term relationships and referrals — not aggressive sales. Each policy placed has been guided by careful assessment, open conversation, and a clear understanding of risk.", korean: "초기에는 소규모 사업주와 가족을 지원하면서 장기적인 관계와 추천을 통해 성장했습니다 — 공격적인 판매가 아닌 신중한 평가, 열린 대화, 위험에 대한 명확한 이해를 바탕으로 각 정책이 결정되었습니다." },
  { section: "Home - Welcome Section", english: "Today, Standard Insurance works with a broad network of trusted insurers across Australia, delivering tailored cover for individuals, businesses, and complex risks. While the industry continues to evolve, our approach remains the same — thoughtful advice, responsive service, and protection you can rely on when it matters most.", korean: "오늘날, Standard Insurance는 호주 전역의 신뢰할 수 있는 보험사 네트워크와 협력하여 개인, 기업 및 복잡한 위험에 맞춤형 보장을 제공합니다. 산업이 계속 진화함에도 불구하고, 우리의 접근 방식은 동일하게 유지됩니다 — 신중한 조언, 신속한 서비스, 그리고 가장 중요한 순간에 신뢰할 수 있는 보호." },

  // === INSURANCE CARDS (Home) ===
  { section: "Home - Insurance Types", english: "Insurance Types", korean: "보험 종류" },
  { section: "Home - Insurance Types", english: "What do we do", korean: "우리가 하는 일" },
  { section: "Home - Insurance Types", english: "Smart, flexible insurance solutions designed around real-world risks.", korean: "실제 위험을 중심으로 설계된 스마트하고 유연한 보험 솔루션입니다." },
  { section: "Home - Insurance Types", english: "View all types", korean: "모든 종류 보기" },
  { section: "Home - Insurance Types", english: "Learn More →", korean: "자세히 보기 →" },

  // === CTA SECTION (Home) ===
  { section: "Home - CTA Section", english: "Ready to Protect What Matters?", korean: "중요한 것을 보호할 준비가 되셨나요?" },
  { section: "Home - CTA Section", english: "Get a free, no-obligation quote today and discover why thousands of clients trust Standard Insurance for their coverage needs.", korean: "오늘 무료로 견적을 받아보시고 수천 명의 고객이 Standard Insurance 를 신뢰하는 이유를 알아보세요." },
  { section: "Home - CTA Section", english: "Get Your Free Quote", korean: "무료 견적 받기" },

  // === ABOUT US PAGE ===
  { section: "About Us Page", english: "About Us", korean: "회사 소개" },
  { section: "About Us Page", english: "Our History", korean: "회사 연혁" },
  { section: "About Us Page", english: "Standard Insurance Services was established in 2025 by an insurance broker, Jinik Kim with 17 years of insurance experiences across insurance types and borders.", korean: "스탠다드 보험 서비스는 2025년에 설 립되었습니다. 설립자는 보험 브로커인 김진익으로, 17년간 다양한 보험 유형과 국경을 넘나드는 경험을 가지고 있습니다." },
  { section: "About Us Page", english: "Representative Insurance Broker", korean: "대표 보험 브로커" },
  { section: "About Us Page", english: "As a licensed insurance broker, Standard Insurance acts on behalf of our clients, not the insurers. This means you receive independent advice and access to the best coverage for your unique needs.", korean: "스탠다드 보험은 라이선스가 있는 보험 브로커로서, 보험사 대신 고객을 대변합니다. 이는 독립적인 조언과 고객의 고유한 요구에 맞는 최상의 보장을 받을 수 있음을 의미합니다." },
  { section: "About Us Page", english: "Our team of experts takes the time to understand your business or personal requirements, helping you make informed decisions and protecting what matters most.", korean: "우리 전문가 팀은 귀하의 비즈니스 또는 개인 요구 사항을 이해하는 데 시간을 투자하여 정보에 입각한 결정을 내리고 가장 중요한 것을 보호할 수 있도록 도와드립니다." },
  { section: "About Us Page", english: "Ready to Protect Your Future?", korean: "미래를 보호할 준비가 되셨나요?" },
  { section: "About Us Page", english: "Contact Standard Insurance today and let our expert advisors find the best coverage tailored to your needs.", korean: "오늘 스탠다드 보험에 연락하여 전문가 상담원이 귀하의 필요에 맞는 최상의 보장을 찾아드리도록 하세요." },
  { section: "About Us Page", english: "Get a Quote", korean: "견적 받기" },

  // === NETWORK SECTION ===
  { section: "About Us - Network Section", english: "Our Network", korean: "우리의 네트워크" },
  { section: "About Us - Network Section", english: "We provide dedicated and seamless insurance support through strong Iinsurance networks.", korean: "강력한 보험 네트워크를 통해 헌신적이고 원활한 보험 지원을 제공합니다." },

  // === CONTACT PAGE ===
  { section: "Contact Page", english: "Contact Us", korean: "문의하기" },
  { section: "Contact Page", english: "Speak directly with experienced advisors who understand your business and personal insurance needs.", korean: "귀하의 비즈니스 및 개인 보험 요구 사항을 이해하는 경험이 풍부한 상담원과 직접 상담하십시오." },
  { section: "Contact Page", english: "Get in touch", korean: "문의하기" },
  { section: "Contact Page", english: "Phone", korean: "전화" },
  { section: "Contact Page", english: "Email", korean: "이메일" },
  { section: "Contact Page", english: "Reply within 24 hours", korean: "24시간 이내 답변" },
  { section: "Contact Page", english: "Office", korean: "사무실" },
  { section: "Contact Page", english: "Send us a message", korean: "메시지 보내기" },
  { section: "Contact Page", english: "Submit", korean: "제출" },
  { section: "Contact Page", english: "Full name", korean: "성명" },
  { section: "Contact Page", english: "Subject", korean: "제목" },
  { section: "Contact Page", english: "Message", korean: "메시지" },
  { section: "Contact Page", english: "Your information is kept confidential.", korean: "귀하의 정보는 기밀로 유지됩니다." },
  { section: "Contact Page", english: "How can we help?", korean: "어떻게 도와드릴까요?" },
  { section: "Contact Page", english: "Tell us a bit about what you need…", korean: "필요한 사항을 간략하게 알려주세요…" },

  // === QUOTE FORM ===
  { section: "Quote Form", english: "Get Your Free Quote", korean: "무료 견적 받기" },
  { section: "Quote Form", english: "Fill out the form below and receive a personalized insurance quote within 24 hours.", korean: "아래 양식을 작성하시면 24시간 이내에 맞춤형 보험 견적을 받아보실 수 있습니다." },
  { section: "Quote Form", english: "Select service", korean: "서비스 선택" },
  { section: "Quote Form", english: "Select insurance type", korean: "보험 종류 선택" },
  { section: "Quote Form", english: "Next", korean: "다음" },
  { section: "Quote Form", english: "Back", korean: "이전" },
  { section: "Quote Form", english: "Submit", korean: "제출" },
  { section: "Quote Form", english: "Full Name", korean: "성명" },
  { section: "Quote Form", english: "Email Address", korean: "이메일 주소" },
  { section: "Quote Form", english: "Phone Number", korean: "전화번호" },
  { section: "Quote Form", english: "Business Name (optional)", korean: "회사명 (선택 사항)" },
  { section: "Quote Form", english: "Address", korean: "주소" },
  { section: "Quote Form", english: "Preferred Start Date", korean: "희망 시작 날짜" },
  { section: "Quote Form", english: "Additional Information (optional)", korean: "추가 정보 (선택 사항)" },
  { section: "Quote Form", english: "What service do you need?", korean: "어떤 서비스가 필요하신가요?" },
  { section: "Quote Form", english: "What type of insurance do you need?", korean: "어떤 종류의 보험이 필요하신가요?" },
  { section: "Quote Form", english: "Tell us more about your insurance needs...", korean: "귀하의 보험 요구 사항에 대해 자세히 알려주세요..." },
  { section: "Quote Form", english: "Review Your Information", korean: "정보 검토" },
  { section: "Quote Form", english: "Insurance Type", korean: "보험 종류" },
  { section: "Quote Form", english: "Service", korean: "서비스" },
  { section: "Quote Form", english: "Not specified", korean: "지정되지 않음" },
  { section: "Quote Form", english: "Insurance Review", korean: "보험 검토" },
  { section: "Quote Form", english: "Competitive Quotation", korean: "경쟁력 있는 견적" },
  { section: "Quote Form", english: "Claim Service", korean: "클레임 서비스" },
  { section: "Quote Form", english: "Other", korean: "기타" },

  // === QUOTE BUTTON ===
  { section: "Quote Button", english: "Get a Quote", korean: "견적 받기" },

  // === FOOTER ===
  { section: "Footer", english: "Professional insurance solutions tailored to protect your business and personal assets with comprehensive coverage and expert service.", korean: "귀하의 비즈니스와 개인 자산을 보호하기 위해 포괄적인 보장과 전문적인 서비스를 제공하는 전문 보험 솔루션입니다." },
  { section: "Footer", english: "Our Services", korean: "서비스" },
  { section: "Footer", english: "Legal & Compliance", korean: "법적 & 규정 준수" },
  { section: "Footer", english: "Privacy Policy", korean: "개인정보 처리방침" },
  { section: "Footer", english: "Terms of Service", korean: "서비스 약관" },
  { section: "Footer", english: "Regulatory Information", korean: "규제 정보" },
  { section: "Footer", english: "Complaints Procedure", korean: "불만 처리 절차" },
  { section: "Footer", english: "FSA Authorisation", korean: "FSA 승인" },
  { section: "Footer", english: "Contact Us", korean: "문의하기" },
  { section: "Footer", english: "© Standard Insurance. All rights reserved. | Licensed and regulated by financial authorities.", korean: "© Standard Insurance. 판권 소유. | 금융 당국의 허가 및 규제 대상입니다." },

  // === INSURANCE TYPE PAGE (dynamic per type) ===
  { section: "Insurance Type Page", english: "About", korean: "소개" },
  { section: "Insurance Type Page", english: "Need a quote?", korean: "견적이 필요하신가요?" },
  { section: "Insurance Type Page", english: "Speak with our insurance specialists today.", korean: "오늘 저희 보험 전문가와 상담하세요." },

  // === INSURANCE REVIEW SERVICE PAGE ===
  { section: "Insurance Review Page", english: "Insurance Review", korean: "보험 검토" },
  { section: "Insurance Review Page", english: "Many policyholders are unsure about their exact coverage limits, exclusions, and benefits. Our Insurance Review service provides a complete assessment of your existing policies.", korean: "많은 보험 가입자들은 자신의 정확한 보장 한도, 제외 사항 및 혜택에 대해 잘 모릅니다. 우리의 보험 검토 서비스는 기존 정책에 대한 완전한 평가를 제공합니다." },
  { section: "Insurance Review Page", english: "We identify coverage gaps, overlapping protections, and areas where you may be overpaying — ensuring your insurance truly works for you.", korean: "우리는 보장 격차, 중복 보호 및 과도한 지불이 발생할 수 있는 영역을 식별하여 귀하의 보험이 진정으로 귀하를 위해 작동하도록 합니다." },
  { section: "Insurance Review Page", english: "Unsure About Your Coverage?", korean: "보장에 대해 확신이 없으신가요?" },
  { section: "Insurance Review Page", english: "Let our experts review your current policies and ensure you're properly protected.", korean: "우리 전문가가 현재 정책을 검토하고 귀하가 적절하게 보호받고 있는지 확인하도록 하세요." },
  { section: "Insurance Review Page", english: "Request a Review", korean: "검토 요청" },

  // === COMPETITIVE QUOTATION PAGE ===
  { section: "Competitive Quotation Page", english: "Competitive Quotation", korean: "경쟁력 있는 견적" },
  { section: "Competitive Quotation Page", english: "Do Not Pay More Than You Are Covered", korean: "보장받는 것보다 더 많은 비용을 지불하지 마세요" },
  { section: "Competitive Quotation Page", english: "Insurance premiums should reflect the actual level of protection you receive. Our competitive quotation service ensures that you are not overpaying for limited coverage or paying for benefits that do not match your risk profile.", korean: "보험료는 귀하가 받는 실제 보호 수준을 반영해야 합니다. 우리의 경쟁력 있는 견적 서비스는 제한된 보장에 대해 과도한 비용을 지불하거나 귀하의 위험 프로필과 일치하지 않는 혜택에 대해 비용을 지불하지 않도록 보장합니다." },
  { section: "Competitive Quotation Page", english: "We work with a wide network of insurers to obtain multiple quotes, carefully comparing policy wordings, exclusions, deductibles, and coverage limits. This allows us to recommend the most suitable option based on value, not just price.", korean: "우리는 광범위한 보험사 네트워크와 협력하여 여러 견적을 얻고, 정책 문구, 제외 사항, 공제액 및 보장 한도를 신중하게 비교합니다. 이를 통해 단순한 가격이 아닌 가치에 기반하여 가장 적합한 옵션을 추천할 수 있습니다." },
  { section: "Competitive Quotation Page", english: "Whether you are protecting your business, property, or personal assets, our approach ensures transparency and cost efficiency. You gain access to tailored protection that aligns with your needs while keeping premiums competitive and sustainable.", korean: "비즈니스, 재산 또는 개인 자산을 보호하든, 우리의 접근 방식은 투명성과 비용 효율성을 보장합니다. 귀하는 필요에 맞는 맞춤형 보호에 접근할 수 있으며, 보험료는 경쟁력 있고 지속 가능하게 유지됩니다." },
  { section: "Competitive Quotation Page", english: "Get a Competitive Insurance Proposal", korean: "경쟁력 있는 보험 제안 받기" },
  { section: "Competitive Quotation Page", english: "Let us compare the market for you and deliver a quotation that balances comprehensive protection with cost efficiency", korean: "시장 조사를 대신해 드리고 포괄적인 보호와 비용 효율성을 균형 있게 제공하는 견적을 제공하겠습니다." },
  { section: "Competitive Quotation Page", english: "Request a Quote", korean: "견적 요청" },

  // === CLAIM SERVICE PAGE ===
  { section: "Claim Service Page", english: "Claim Service", korean: "청구 서비스" },
  { section: "Claim Service Page", english: "When an unexpected loss occurs, navigating the claims process can be stressful and time-consuming. Our claim service is designed to support you at every stage, ensuring that your claim is handled efficiently and professionally.", korean: "예기치 않은 손실이 발생했을 때, 청구 과정을 탐색하는 것은 스트레스가 많고 시간 소모적일 수 있습니다. 우리의 청구 서비스는 모든 단계에서 귀하를 지원하도록 설계되어 귀하의 청구가 효율적이고 전문적으로 처리되도록 보장합니다." },
  { section: "Claim Service Page", english: "We act as your representative in all communications with the insurer, assisting with documentation, claim submission, and follow-ups. Our team monitors the progress closely to help avoid delays and ensure that your entitlements are properly assessed.", korean: "우리는 보험사와의 모든 커뮤니케이션에서 귀하의 대표로 활동하며, 문서 작업, 청구 제출 및 후속 조치를 지원합니다. 우리 팀은 진행 상황을 면밀히 모니터링하여 지연을 방지하고 귀하의 권리가 적절하게 평가되도록 도와줍니다." },
  { section: "Claim Service Page", english: "With our expertise, you gain confidence that your claim is being managed by professionals who understand policy conditions and settlement procedures. This allows you to focus on recovery while we work to secure a fair and timely outcome on your behalf.", korean: "우리의 전문 지식을 통해 귀하는 정책 조건과 합의 절차를 이해하는 전문가가 귀하의 청구를 관리하고 있다는 확신을 얻습니다. 이를 통해 귀하는 회복에 집중할 수 있으며, 우리는 귀하를 대신하여 공정하고 시기적절한 결과를 확보하기 위해 노력합니다." },
  { section: "Claim Service Page", english: "Need Help With a Claim?", korean: "청구에 도움이 필요하신가요?" },
  { section: "Claim Service Page", english: "Our dedicated claims team will manage the process for you and communicate directly with the insurer to achieve a smooth resolution.", korean: "우리의 전담 청구 팀이 귀하를 대신하여 프로세스를 관리하고 보험사와 직접 소통하여 원활한 해결을 달성할 것입니다." },
  { section: "Claim Service Page", english: "Start a Claim", korean: "청구 시작" },

  // === INSURANCE TYPES (from lib/insurance.ts) ===
  { section: "Insurance Types - Business", english: "Business Insurance", korean: "기업 보험" },
  { section: "Insurance Types - Business", english: "Tailored protection for assets, operations, and liabilities.", korean: "자산, 운영 및 책임에 대한 맞춤형 보호." },
  { section: "Insurance Types - Business", english: "Protection for business assets", korean: "비즈니스 자산 보호" },
  { section: "Insurance Types - Business", english: "Cover for legal liabilities", korean: "법적 책임 보장" },
  { section: "Insurance Types - Business", english: "Flexible policy options", korean: "유연한 정책 옵션" },
  { section: "Insurance Types - Business", english: "Risk management support", korean: "위험 관리 지원" },

  { section: "Insurance Types - Property", english: "Property Insurance", korean: "재산 보험" },
  { section: "Insurance Types - Property", english: "Safeguard commercial and residential properties.", korean: "상업 및 주거용 부동산 보호." },
  { section: "Insurance Types - Property", english: "Cover for buildings and contents", korean: "건물 및 내용물 보장" },
  { section: "Insurance Types - Property", english: "Protection against fire and natural events", korean: "화재 및 자연 재해로부터 보호" },
  { section: "Insurance Types - Property", english: "Optional business interruption cover", korean: "선택적 사업 중단 보장" },
  { section: "Insurance Types - Property", english: "Tailored sums insured", korean: "맞춤형 보험금액" },

  { section: "Insurance Types - Public Liability", english: "Public Liability Insurance", korean: "공공 책임 보험" },
  { section: "Insurance Types - Public Liability", english: "Cover against third-party injury or property damage.", korean: "제3자 부상 또는 재산 피해에 대한 보장." },
  { section: "Insurance Types - Public Liability", english: "Third-party injury cover", korean: "제3자 부상 보장" },
  { section: "Insurance Types - Public Liability", english: "Property damage protection", korean: "재산 피해 보호" },
  { section: "Insurance Types - Public Liability", english: "Legal defence costs", korean: "법적 방어 비용" },
  { section: "Insurance Types - Public Liability", english: "Peace of mind for business owners", korean: "비즈니스 소유자에게 평화 제공" },

  { section: "Insurance Types - Commercial Motor", english: "Commercial Motor Insurance", korean: "상업용 모터 보험" },
  { section: "Insurance Types - Commercial Motor", english: "Flexible insurance for business vehicles and fleets.", korean: "비즈니스 차량 및 함대를 위한 유연한 보험." },
  { section: "Insurance Types - Commercial Motor", english: "Accidental damage cover", korean: "사고 손상 보장" },
  { section: "Insurance Types - Commercial Motor", english: "Theft and fire protection", korean: "도난 및 화재 보호" },
  { section: "Insurance Types - Commercial Motor", english: "Fleet policy options", korean: "함대 정책 옵션" },
  { section: "Insurance Types - Commercial Motor", english: "Third-party liability cover", korean: "제3자 책임 보장" },

  { section: "Insurance Types - Management Liability", english: "Management Liability Insurance", korean: "경영 책임 보험" },
  { section: "Insurance Types - Management Liability", english: "Protection for directors and officers.", korean: "이사 및 임원 보호." },
  { section: "Insurance Types - Management Liability", english: "Directors & officers protection", korean: "이사 및 임원 보호" },
  { section: "Insurance Types - Management Liability", english: "Employment practices cover", korean: "고용 관행 보장" },
  { section: "Insurance Types - Management Liability", english: "Regulatory investigation costs", korean: "규제 조사 비용" },
  { section: "Insurance Types - Management Liability", english: "Company reimbursement cover", korean: "회사 상환 보장" },

  { section: "Insurance Types - Construction", english: "Construction Insurance", korean: "건설 보험" },
  { section: "Insurance Types - Construction", english: "Specialist cover for builders and contractors.", korean: "건축업자 및 계약자를 위한 전문 보장." },
  { section: "Insurance Types - Construction", english: "Contract works insurance", korean: "계약 작업 보험" },
  { section: "Insurance Types - Construction", english: "Public and product liability", korean: "공공 및 제품 책임" },
  { section: "Insurance Types - Construction", english: "Tools and equipment cover", korean: "도구 및 장비 보장" },
  { section: "Insurance Types - Construction", english: "Flexible policy terms", korean: "유연한 정책 조건" },

  { section: "Insurance Types - Professional Indemnity", english: "Professional Indemnity Insurance", korean: "전문 배상 책임 보험" },
  { section: "Insurance Types - Professional Indemnity", english: "Cover for errors, omissions, and negligence.", korean: "오류, 누락 및 과실에 대한 보장." },
  { section: "Insurance Types - Professional Indemnity", english: "Negligence claim protection", korean: "과실 청구 보호" },
  { section: "Insurance Types - Professional Indemnity", english: "Industry-specific cover", korean: "업계별 보장" },
  { section: "Insurance Types - Professional Indemnity", english: "Claims-made policies", korean: "청구 발생 정책" },

  { section: "Insurance Types - Trade Credit", english: "Trade Credit Insurance", korean: "무역 신용 보험" },
  { section: "Insurance Types - Trade Credit", english: "Protection from unpaid invoices.", korean: "미지급 송장으로부터 보호." },
  { section: "Insurance Types - Trade Credit", english: "Protection against bad debts", korean: "부실 채권에 대한 보호" },
  { section: "Insurance Types - Trade Credit", english: "Improved cash flow", korean: "개선된 현금 흐름" },
  { section: "Insurance Types - Trade Credit", english: "Customer credit monitoring", korean: "고객 신용 모니터링" },
  { section: "Insurance Types - Trade Credit", english: "Support for business growth", korean: "비즈니스 성장 지원" },

  { section: "Insurance Types - Industrial Special Risks", english: "Industrial Special Risks Insurance", korean: "산업 특수 위험 보험" },
  { section: "Insurance Types - Industrial Special Risks", english: "Solutions for complex industrial operations.", korean: "복잡한 산업 운영을 위한 솔루션." },
  { section: "Insurance Types - Industrial Special Risks", english: "High-value asset protection", korean: "고가치 자산 보호" },
  { section: "Insurance Types - Industrial Special Risks", english: "Machinery breakdown cover", korean: "기계 고장 보장" },
  { section: "Insurance Types - Industrial Special Risks", english: "Tailored risk solutions", korean: "맞춤형 위험 솔루션" },
  { section: "Insurance Types - Industrial Special Risks", english: "Comprehensive policy wording", korean: "포괄적인 정책 문구" },
];

// Build worksheet data with section headers
// Column 1: English, Column 2: Korean, with section titles per page
const rows = [];
let currentSection = "";

for (const t of translations) {
  if (t.section !== currentSection) {
    currentSection = t.section;
    rows.push(["", ""]); // Blank row before new section
    rows.push([`--- ${currentSection} ---`, ""]); // Section title row (spans as header)
  }
  rows.push([t.english, t.korean]);
}

// Add header row at the very beginning
const headerRow = ["English", "Korean"];
const allRows = [headerRow, [], ...rows];

// Create workbook and worksheet
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.aoa_to_sheet(allRows);

// Set column widths
ws['!cols'] = [
  { wch: 90 },
  { wch: 90 },
];

XLSX.utils.book_append_sheet(wb, ws, "Translations");

// Write to file
const outputPath = "./translations.xlsx";
XLSX.writeFile(wb, outputPath);

console.log(`✅ Excel file generated successfully: ${outputPath}`);
console.log(`   Total translations: ${translations.length}`);
