import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Kraken Consulting - Transformación Digital desde las Profundidades",
  description:
    "Consultoría tecnológica boutique especializada en transformación digital, soluciones cloud y rescate de proyectos fallidos en LATAM.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={quicksand.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
