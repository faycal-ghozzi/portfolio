import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inter as FontSans, Nunito as FontDisplay } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/contexts/lang-context";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Fayçal Ghozzi",
    template: `%s | Fayçal Ghozzi`,
  },
  description: "Software engineer specialized in backend development, API integration, and real-time data platforms. Currently doing R&D on sustainable mobility at CESI Strasbourg.",
  openGraph: {
    title: "Fayçal Ghozzi",
    description: "Software engineer specialized in backend development, API integration, and real-time data platforms.",
    url: "https://fayghz.com",
    siteName: "Fayçal Ghozzi",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Fayçal Ghozzi",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <Analytics />
        <LangProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              <Navbar />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
