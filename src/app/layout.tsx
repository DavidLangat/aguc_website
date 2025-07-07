import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amazing Grace United Church - Where Faith Meets Community",
  description: "Join us at Amazing Grace United Church where faith meets community and love transforms lives. Experience worship, fellowship, and spiritual growth in a welcoming environment.",
  keywords: ["church", "faith", "community", "worship", "sermons", "prayer", "fellowship", "spiritual growth"],
  authors: [{ name: "Amazing Grace United Church" }],
  creator: "Amazing Grace United Church",
  publisher: "Amazing Grace United Church",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amazing Grace United Church",
    description: "Where faith meets community and love transforms lives",
    url: "https://aguc.church",
    siteName: "Amazing Grace United Church",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazing Grace United Church",
    description: "Where faith meets community and love transforms lives",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
