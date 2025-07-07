import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1DA1B8" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aguc.church"),
  title: {
    default: "Africa Gospel Unity Church - Bible-Believing Christian Fellowship",
    template: "%s | Africa Gospel Unity Church",
  },
  description: "Join Africa Gospel Unity Church (AGUC), a fellowship of Bible-believing Christians committed to the pure proclamation of the Gospel and unity in Spirit. Experience authentic worship, fellowship, and spiritual growth in Bomet, Kenya.",
  keywords: [
    "Africa Gospel Unity Church",
    "AGUC",
    "church",
    "Christian fellowship",
    "Bible-believing",
    "Gospel",
    "worship",
    "sermons",
    "prayer",
    "fellowship",
    "Bomet",
    "Kenya",
    "spiritual growth",
  ],
  authors: [{ name: "Africa Gospel Unity Church" }],
  creator: "Africa Gospel Unity Church",
  publisher: "Africa Gospel Unity Church",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    alternateLocale: ["sw_KE"],
    url: "https://aguc.church",
    siteName: "Africa Gospel Unity Church",
    title: "Africa Gospel Unity Church",
    description: "A fellowship of Bible-believing Christians committed to the pure proclamation of the Gospel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Africa Gospel Unity Church",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Gospel Unity Church",
    description: "A fellowship of Bible-believing Christians committed to the pure proclamation of the Gospel",
    images: ["/twitter-image.jpg"],
    creator: "@agucchurch",
    site: "@agucchurch",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  manifest: "/site.webmanifest",
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
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
