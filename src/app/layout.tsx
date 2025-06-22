import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidhi Mitra | Teacher Portfolio",
  description:
    "Explore the portfolio of Nidhi Mitra – an experienced and passionate primary school teacher dedicated to shaping young minds through creative learning, social initiatives, and personalized teaching strategies.",
  keywords: [
    "Nidhi Mitra",
    "teacher portfolio",
    "primary school teacher",
    "education",
    "teaching blog",
    "student feedback",
    "learning activities",
    "NGO teaching",
    "Delhi teacher",
    "elementary education"
  ],
  authors: [{ name: "Nidhi Mitra", url: "https://nidhi-mitra.vercel.app" }],
  creator: "Nidhi Mitra",
  openGraph: {
    title: "Nidhi Mitra | Primary School Teacher Portfolio",
    description:
      "Discover the journey, teaching philosophy, achievements, and creative content of Nidhi Mitra, a dedicated educator shaping future generations.",
    url: "https://nidhi-mitra.vercel.app",
    siteName: "Nidhi Mitra Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    title: "Nidhi Mitra | Teacher Portfolio",
    card: "summary_large_image",
    creator: "@nidhi_edu",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#1A1F2B]`}
      > <Navbar/>
        <main className=" container mx-auto px-4">
        {children}

        </main>
        <Footer/>
      </body>
    </html>
  );
}
