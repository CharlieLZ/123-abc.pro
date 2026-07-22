import type { Metadata } from "next";
import { siteName, siteUrl } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Learn English ABCs | 英语字母启蒙 · 123 ABC Pro",
  description:
    "Practice 26 English letters, early phonics, songs, colors, and numbers with bilingual guidance for learners and parents.",
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/abc-pro/btn_a.png",
    apple: "/images/abc-pro/btn_a.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "Learn English ABCs | 英语字母启蒙",
    description:
      "Interactive English alphabet, early phonics, songs, colors, and numbers with clear bilingual guidance.",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary",
    title: "Learn English ABCs | 英语字母启蒙",
    description:
      "Interactive alphabet and early phonics practice with bilingual guidance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
