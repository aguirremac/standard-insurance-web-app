import AboutUsPage from "@/components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
};

export default function App() {
  return (
    <AboutUsPage />
  );
}
