import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bororunners.co.uk"),
  title: {
    default: "Bororunners Running Club | Teesside's Fastest Growing Running Club",
    template: "%s | Bororunners Running Club",
  },
  description:
    "Bororunners is Teesside's award-winning running club. 272 members, weekly sessions across Middlesbrough and Stockton. England Athletics Club of the Year 2024. All abilities welcome.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bororunners.co.uk",
    siteName: "Bororunners Running Club",
    title: "Bororunners Running Club | Teesside's Fastest Growing Running Club",
    description:
      "Bororunners is Teesside's award-winning running club. 272 members, weekly sessions across Middlesbrough and Stockton. England Athletics Club of the Year 2024. All abilities welcome.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bororunners Running Club | Teesside's Fastest Growing Running Club",
    description:
      "Teesside's award-winning running club. 272 members, weekly sessions. All abilities welcome.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
