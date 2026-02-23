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
    default: "Surnetics | Surface Energy Gradient Coating Technology",
    template: "%s | Surnetics",
  },
  description:
    "Surnetics holds patented Surface Energy Gradient Coating technology — the only platform that moves liquids through microfluidic channels without pumps, valves, or controllers. Available for licensing across six industries.",
  keywords: [
    "microfluidic coating technology",
    "surface energy gradient",
    "pump-free microfluidics",
    "microfluidic IP licensing",
    "passive fluid control technology",
    "microfluidic patent licensing",
    "surface energy coating",
  ],
  openGraph: {
    title: "Surnetics | Surface Energy Gradient Coating Technology",
    description:
      "Patented platform technology that moves liquids without pumps, valves, or controllers. Available for licensing across IVD, electronics, medical devices, and more.",
    url: "https://surnetics.com",
    siteName: "Surnetics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surnetics | Surface Energy Gradient Coating Technology",
    description:
      "Patented platform technology that moves liquids without pumps, valves, or controllers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
