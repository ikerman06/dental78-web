import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dental78.com"),
  title: {
    default: "Dental 78 — Laboratorio de Prótesis Dental en Barcelona",
    template: "%s | Dental 78",
  },
  description:
    "Laboratorio de prótesis dental B2B en Barcelona. Especialistas en cerámica, CAD/CAM, estructuras metálicas y férulas oclusales. Más de 20 años de precisión técnica.",
  keywords: ["laboratorio dental", "prótesis dental", "CAD/CAM", "cerámica dental", "Barcelona", "laboratorio B2B"],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dental78.com",
    siteName: "Dental 78",
    title: "Dental 78 — Laboratorio de Prótesis Dental en Barcelona",
    description:
      "Laboratorio de prótesis dental B2B en Barcelona. Especialistas en cerámica, CAD/CAM y más. Más de 20 años de precisión técnica.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dental 78" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental 78 — Laboratorio de Prótesis Dental en Barcelona",
    description: "Laboratorio de prótesis dental B2B en Barcelona. Precisión técnica desde 2005.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dental 78",
  description: "Laboratorio de prótesis dental B2B en Barcelona.",
  url: "https://dental78.com",
  telephone: "+34930000000",
  email: "info@dental78.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  foundingDate: "2005",
  areaServed: "España",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
