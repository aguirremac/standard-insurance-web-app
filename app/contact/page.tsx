import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function App() {
  return (
    <ContactSection />
  );
}
