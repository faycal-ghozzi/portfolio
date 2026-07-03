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

const SITE_URL = "https://fayghz.com";
const SITE_TITLE = "Fayçal Ghozzi | Backend Software Engineer - Python, FastAPI, React";
const SITE_DESCRIPTION =
  "Fayçal Ghozzi, backend engineer building fintech APIs and payment middleware in Python, FastAPI and React.js. Open to roles in Strasbourg, Toulouse, Paris or remote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | Fayçal Ghozzi`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Fayçal Ghozzi",
    "Faycal Ghozzi",
    "backend software engineer",
    "Python developer",
    "FastAPI developer",
    "React.js developer",
    "fintech API integration",
    "payment middleware engineer",
    "software engineer Strasbourg",
    "software engineer Toulouse",
    "software engineer Paris",
    "remote software engineer France",
    "software engineer portfolio",
    "GTFS RAPTOR mobility engineer",
    "banking middleware developer",
  ],
  authors: [{ name: "Fayçal Ghozzi", url: SITE_URL }],
  creator: "Fayçal Ghozzi",
  publisher: "Fayçal Ghozzi",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Fayçal Ghozzi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.png",
        width: 1254,
        height: 1254,
        alt: "Fayçal Ghozzi - Backend Software Engineer",
      },
    ],
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    card: "summary_large_image",
    images: ["/me.png"],
    creator: "@fayghz",
  },
  // Add verification codes here once generated in Google Search Console / Bing Webmaster Tools:
  // verification: { google: "...", other: { "msvalidate.01": "..." } },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fayçal Ghozzi",
  url: SITE_URL,
  image: `${SITE_URL}/me.png`,
  jobTitle: "Backend Software Engineer",
  description: SITE_DESCRIPTION,
  worksFor: {
    "@type": "Organization",
    name: "CESI Strasbourg",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Strasbourg",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/faycal-ghozzi",
    "https://www.linkedin.com/in/faycal-ghozzi/",
    "https://x.com/fayghz",
  ],
  knowsAbout: [
    "Python",
    "FastAPI",
    "React.js",
    "Backend Development",
    "API Integration",
    "Payment Middleware",
    "GTFS",
    "Fintech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
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
