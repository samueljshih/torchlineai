import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const TORCHLINE_LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torchline_logo_transparent-beKRLoQoS2NVALqh9y3cZruq4BEO0c.png"

const OG_IMAGE_URL = "/torchline_preview.png"

export const metadata: Metadata = {
  title: "Torchline AI - Vision AI That Protects, Coaches, and Elevates",
  description:
    "Real-time safety and performance intelligence for physical operations in restaurants, retail, and hospitality.",
  generator: "v0.app",
  metadataBase: new URL("https://torchline.ai"),
  openGraph: {
    title: "Torchline AI - Vision AI That Protects, Coaches, and Elevates",
    description:
      "Real-time safety and performance intelligence for physical operations in restaurants, retail, and hospitality.",
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
    title: "Torchline AI - Vision AI That Protects, Coaches, and Elevates",
    description:
      "Real-time safety and performance intelligence for physical operations in restaurants, retail, and hospitality.",
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: TORCHLINE_LOGO_URL, type: "image/png" },
      { rel: "apple-touch-icon", url: TORCHLINE_LOGO_URL },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
