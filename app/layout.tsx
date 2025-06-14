import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Edge Performance Test - Lightning Fast Computing",
  description:
    "Experience the future of web performance with our globally distributed edge network. Deliver content at the speed of light.",
  keywords: "edge computing, performance, CDN, web optimization, lighthouse",
  authors: [{ name: "Performance Team" }],
  openGraph: {
    title: "Edge Performance Test - Lightning Fast Computing",
    description: "Experience the future of web performance with our globally distributed edge network.",
    type: "website",
    images: ["/placeholder.svg?height=630&width=1200&text=Edge+Performance"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Performance Test - Lightning Fast Computing",
    description: "Experience the future of web performance with our globally distributed edge network.",
    images: ["/placeholder.svg?height=630&width=1200&text=Edge+Performance"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
