import ClaimServicePage from "@/components/ClaimService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Claim Service',
};
  

export default function App() {
  return (
    <>
    <ClaimServicePage />
    </>

  );
}
