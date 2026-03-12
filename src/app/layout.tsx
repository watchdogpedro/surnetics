import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surnetics.com"),
  title: {
    default: "Surnetics | Microfluidics & Lab-on-a-Chip Patents for Sale or License",
    template: "%s | Surnetics",
  },
  description:
    "Surnetics offers a portfolio of 5 granted microfluidics and lab-on-a-chip patents available for sale or licensing. Applications in point-of-care diagnostics, molecular diagnostics, drug delivery, and biosensing. Ideal for Abbott, Thermo Fisher, Danaher, Bio-Rad, and Becton Dickinson.",
  keywords: [
    "microfluidics patents for sale",
    "lab-on-a-chip patent licensing",
    "point-of-care diagnostics IP",
    "microfluidic chip patent portfolio",
    "life sciences IP acquisition",
    "patent licensing diagnostics",
    "biosensor patent",
    "molecular diagnostics patent",
    "microfluidic device patent",
    "patent brokerage life sciences",
    "surface energy gradient coating",
    "pump-free microfluidics",
    "microfluidic IP licensing",
    "passive fluid control technology",
    "sample preparation on chip",
    "digital PCR patent",
    "IP licensing Abbott Thermo Fisher",
  ],
  openGraph: {
    title: "Surnetics Microfluidics Patent Portfolio — Available for Sale or License",
    description:
      "Life science microfluidics IP portfolio covering point-of-care diagnostics, lab-on-a-chip devices, and biosensing. 5 granted US patents available for outright sale, exclusive license, or field-of-use licensing.",
    url: "https://surnetics.com",
    siteName: "Surnetics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surnetics | Microfluidics Patent Portfolio for Sale or License",
    description:
      "5 granted US patents in microfluidics and lab-on-a-chip diagnostics. Available for acquisition or exclusive licensing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Surnetics",
  url: "https://surnetics.com",
  description:
    "Microfluidics and lab-on-a-chip patent portfolio available for sale or licensing to life science and medical device companies.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "IP Licensing Inquiry",
    availableLanguage: "English",
    url: "https://surnetics.com/contact",
  },
  knowsAbout: [
    "Microfluidics",
    "Lab-on-a-chip",
    "Point-of-care diagnostics",
    "Patent licensing",
    "In vitro diagnostics",
    "Biosensors",
    "Molecular diagnostics",
    "Drug delivery nanoparticles",
    "Surface energy gradient coatings",
    "Passive fluid control",
  ],
};

const patentListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Surnetics Microfluidics Patent Portfolio",
  description: "5 granted US patents in microfluidics available for sale or licensing",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "US Patent 12,263,480 — Diagnostic Device with Integrated Sampler and Holder",
      url: "https://surnetics.com/ip-portfolio",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "US Patent 12,083,517 — Microfluidic Products with Controlled Fluid Flow",
      url: "https://surnetics.com/ip-portfolio",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "US Patent 11,583,858 — Microfluidic Diagnostics with Controlled Fluid Flow",
      url: "https://surnetics.com/ip-portfolio",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "US Patent 10,821,438 — Microfluidic Diagnostics with Controlled Fluid Flow",
      url: "https://surnetics.com/ip-portfolio",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "US Patent 9,968,930 — Microfluidic Products with Controlled Fluid Flow",
      url: "https://surnetics.com/ip-portfolio",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(patentListSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
