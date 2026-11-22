import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LOGO_URL } from "@/components/landing/content"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

const OG_IMAGE_URL = "/torchline_preview.png"

const TITLE = "Torchline AI - Operational Advantage Powered by Vision AI"
const DESCRIPTION =
  "Torchline transforms existing camera systems into an operational intelligence platform that helps operators identify inefficiencies, improve accountability, and make better decisions across every location."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://torchline.ai"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Torchline AI",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Torchline AI Command Center - Vision AI for frontline operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: LOGO_URL, type: "image/png" },
      { rel: "apple-touch-icon", url: LOGO_URL },
    ],
  },
}

export const viewport = {
  themeColor: "#14110f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
