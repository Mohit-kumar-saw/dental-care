import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLINIC_INFO } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: CLINIC_INFO.name,
    template: `%s | ${CLINIC_INFO.name}`,
  },
  description:
    "Professional dental care services including checkups, cleaning, implants, and emergency care.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full w-full flex flex-col overflow-x-clip">
        <Navbar />
        <main className="flex-1 w-full min-w-0 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
