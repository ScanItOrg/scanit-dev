import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppProvider from "@/lib/context/AppProvider";
import "@/styles/globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import View from "@/components/ui/view";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Scan It",
    default: "Scan It"
  },
  description: "Scan to get guide",
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
        <AppProvider >
          <Navbar />
          <View className="bg-app-secondary mx-auto max-2xl:w-[480px] max-sm:w-full flex flex-col items-center gap-8">
            {children}
          </View>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
