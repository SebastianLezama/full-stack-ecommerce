import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/navbar/footer";
import MainContainer from "@/components/mainContainer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tienda de cuadros",
  description: "Tus cuadros nerds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-stone-800 bg-stone-100 flex flex-col min-h-screen `}
      >
        <MainContainer>
          <Header />
          {children}
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
