import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AnimatedBackground from "./components/AnimatedBackground"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coadal - Gaming Software Development",
  description:
    "Expert gaming software development services. We create epic gaming experiences across mobile, PC, and console platforms.",
  keywords: "game development, mobile games, PC games, console games, Unity, Unreal Engine, gaming software",
  authors: [{ name: "Coadal Team" }],
  openGraph: {
    title: "Coadal - Gaming Software Development",
    description:
      "Expert gaming software development services. We create epic gaming experiences across mobile, PC, and console platforms.",
    type: "website",
    url: "https://coadal.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AnimatedBackground />
          <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  )
}
