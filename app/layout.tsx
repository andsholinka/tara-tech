import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tara Tech — Jasa Pembuatan Website Profesional",
  description: "Tara Tech menyediakan jasa pembuatan website profesional, modern, dan responsif untuk bisnis Anda.",
  icons: {
    icon: "/logo-circle.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
