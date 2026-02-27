import InsuranceReviewPage from "@/components/InsuranceReview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Insurance Review',
};

export default function App() {
  return (
    <>
    <InsuranceReviewPage  />
    </>

  );
}
