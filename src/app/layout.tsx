import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thailand Earthquake Alert System",
  description: "ระบบแจ้งเตือนและติดตามเหตุการณ์แผ่นดินไหวในประเทศไทย",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Thailand Earthquake Alert System",
    description: "ระบบแจ้งเตือนและติดตามเหตุการณ์แผ่นดินไหวในประเทศไทย",
    url: "https://earthquake.tmd.go.th",
    siteName: "Earthquake Alert",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thailand Earthquake Alert System",
    description: "ระบบแจ้งเตือนและติดตามเหตุการณ์แผ่นดินไหวในประเทศไทย",
    images: ["/og-image.png"],
    creator: "@TMDThailand",
    site: "@TMDThailand",
  },
  themeColor: "#ffffff",
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
        {children}
      </body>
    </html>
  );
}
