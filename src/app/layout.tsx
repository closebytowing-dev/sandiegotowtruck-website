import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tow Truck San Diego | 24/7 Towing & Roadside Assistance",
  description:
    "Fast and affordable tow truck service in San Diego. 24/7 emergency towing, roadside assistance, jump start, lockout service and flatbed towing.",
  keywords:
    "tow truck San Diego, emergency towing San Diego, roadside assistance San Diego, towing service San Diego, 24/7 towing San Diego, flatbed towing San Diego, San Diego tow truck",
  openGraph: {
    title: "Tow Truck San Diego | 24/7 Towing & Roadside Assistance",
    description:
      "Fast and affordable tow truck service in San Diego. 24/7 emergency towing, roadside assistance, jump start, lockout service and flatbed towing.",
    url: "https://sandiegotowtruck.com",
    siteName: "San Diego Tow Truck",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://sandiegotowtruck.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TowingService",
  name: "San Diego Tow Truck",
  url: "https://sandiegotowtruck.com",
  telephone: "+1-619-555-0199",
  description:
    "Fast and affordable tow truck service in San Diego. 24/7 emergency towing, roadside assistance, jump start, lockout service and flatbed towing.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.7157",
    longitude: "-117.1611",
  },
  areaServed: [
    "San Diego",
    "La Jolla",
    "Pacific Beach",
    "Chula Vista",
    "National City",
    "Coronado",
    "Mission Valley",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
