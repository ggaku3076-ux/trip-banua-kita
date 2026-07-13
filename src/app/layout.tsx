import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Trip Banua Kita | Open Trip & Paket Wisata Terbaik dari Banjarmasin",
  description:
    "Trip Banua Kita menghadirkan paket wisata open trip terpercaya dari Banjarmasin — Rinjani, Bali-Lombok, dan destinasi impian lainnya. Aman, nyaman, berkesan. Travelnya Urang Banua.",
  keywords: [
    "Trip Banua Kita",
    "Open Trip Banjarmasin",
    "Paket Wisata Rinjani",
    "Open Trip Bali Lombok",
    "Tour Banjarmasin",
    "Wisata Kalimantan Selatan",
    "etrip banua kita",
    "paket tour murah Banjarmasin",
    "liburan berkelas Banjarmasin",
  ],
  authors: [{ name: "Trip Banua Kita" }],
  openGraph: {
    title: "Trip Banua Kita | Open Trip & Paket Wisata Terbaik dari Banjarmasin",
    description:
      "Travelnya Urang Banua. Liburan berkelas, kenangan tak terbatas bersama Trip Banua Kita.",
    siteName: "Trip Banua Kita",
    locale: "id_ID",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-dark selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
