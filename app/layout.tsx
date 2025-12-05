import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const TORCHLINE_LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/torchline_logo_transparent-beKRLoQoS2NVALqh9y3cZruq4BEO0c.png"

export const metadata: Metadata = {
  title: "Torchline AI - Vision AI That Protects, Coaches, and Elevates",
  description:
    "Real-time safety and performance intelligence for physical operations in restaurants, retail, and hospitality.",
  generator: "v0.app",
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
