import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TARA TECH - Jasa Pembuatan Website Profesional",
  description: "Tara Tech menyediakan jasa pembuatan website profesional untuk bisnis Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
