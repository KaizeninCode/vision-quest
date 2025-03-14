import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "Vision Quest Consultants",
  description: " A leading regional research, strategy/capacity development and advisory firm that provide evidence-based solutions for humanitarian and development actors at global, regional, national and local levels in the Global south.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
          <Header/>
          {children}
          <Footer/>
          <Analytics/>
      </body>
    </html>
  );
}
