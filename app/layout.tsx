import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cafe on Haig | Breakfast, Brunch & Coffee in Georges Hall",
  description:
    "Cafe on Haig is a neighbourhood café at 1/2A Haig Ave, Georges Hall NSW. Specialty coffee, all-day breakfast, lunch, bagels, eggs benedict and more. Open weekdays from 5:30 AM.",
  openGraph: {
    title: "Cafe on Haig | Breakfast, Brunch & Coffee in Georges Hall",
    description:
      "Specialty coffee, all-day breakfast and lunch in Georges Hall NSW. Friendly service, generous portions and a relaxed family-friendly atmosphere.",
    url: "https://cafeonhaig.com.au",
    siteName: "Cafe on Haig",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans bg-brand-bg text-brand-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
