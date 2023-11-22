import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Memmerovo blog",
  description: "Tohle je Memmerovo blog plný moudrých informací.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
      <Analytics />
    </html>
  )
}
