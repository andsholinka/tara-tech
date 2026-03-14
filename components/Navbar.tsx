"use client"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WA_LINK = "https://wa.me/628953268807733?text=Halo%20saya%20tertarik%20menggunakan%20jasa%20pembuatan%20website%20Tara%20Tech"

const links = [
  { href: "#layanan",    label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#pricing",    label: "Pricing" },
  { href: "#kontak",     label: "Kontak" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-4 z-50 px-4">
      <div className="max-w-5xl mx-auto backdrop-blur-md rounded-full px-5 py-3 shadow-soft flex justify-between items-center border" style={{ background: '#181A2F99', borderColor: '#37415C' }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="font-heading font-bold text-xl" style={{ color: '#FDA481' }}>Tara Tech</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-muted-fg hover:text-primary font-semibold text-sm transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <Button size="sm">Mulai Sekarang</Button>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto backdrop-blur-md rounded-[2rem] p-6 shadow-soft flex flex-col gap-4 border" style={{ background: '#181A2Fee', borderColor: '#37415C' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-semibold text-fg hover:text-primary transition-colors py-2 px-4 rounded-full hover:bg-muted">
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">Mulai Sekarang</Button>
          </a>
        </div>
      )}
    </nav>
  )
}
