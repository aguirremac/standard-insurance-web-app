import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ui/toast-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: 'Standard Insurance', template: '%s | Standard Insurance' },
  description: "Standard Insurance was founded with a simple belief: insurance should be clear, practical, and built around real people - not paperwork.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: 'Standard Insurance',
    description: 'Standard Insurance was founded with a simple belief: insurance should be clear, practical, and built around real people - not paperwork.',
    url: 'https://standardinsurance.com.au',
    siteName: 'Standard Insurance',
    images: [{ url: 'https://standardinsurance.com.au/hero-1.png' }]
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <div className="min-h-screen bg-white">
               <Header />
               <main>
                <ToastProvider>{children}</ToastProvider>
               </main>
             <Footer />
             </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
