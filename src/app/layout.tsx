import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/Navigation/PageLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YOGAPERSON | Cinematic Yoga Photography",
  description: "Capturing Yoga. Energy. Presence. The premium portfolio for yoga tracking and aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-brand-bg text-charcoal font-sans overflow-x-hidden`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
