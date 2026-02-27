import CompetitiveQuotationPage from "@/components/CompetitiveQuotation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Competitive Quotation',
};

export default function App() {
  return (
    <>
    <CompetitiveQuotationPage />
    </>

  );
}
