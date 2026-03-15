"use client"

import { useState } from "react"
import { Copy, Download, QrCode, MessageSquare, Phone, Wand2 } from "lucide-react"
import Navbar from "@/components/Navbar"
import Blob from "@/components/Blob"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { QRCodeSVG } from "qrcode.react"

export default function WAGenerator() {
  const [countryCode, setCountryCode] = useState("+62")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("Halo Admin, saya tertarik dengan produk/jasa yang ditawarkan. Boleh minta info detailnya?")
  const [generatedLink, setGeneratedLink] = useState("")
  const [isGenerated, setIsGenerated] = useState(false)
  const [error, setError] = useState("")

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhoneNumber(value)
    if (error) setError("")
  }

  const handleGenerate = () => {
    if (!phoneNumber) {
      setError("Silakan masukkan nomor WhatsApp.")
      return
    }
    
    if (phoneNumber.length < 8) {
      setError("Masukkan nomor WhatsApp yang valid (min. 8 angka).")
      return
    }

    setError("")
    const cleanNumber = phoneNumber.replace(/\D/g, "")
    // Remove leading 0 if present
    const finalNumber = cleanNumber.startsWith("0") ? cleanNumber.slice(1) : cleanNumber
    const fullNumber = countryCode.replace("+", "") + finalNumber
    const encodedMessage = encodeURIComponent(message)
    const link = `https://wa.me/${fullNumber}?text=${encodedMessage}`
    setGeneratedLink(link)
    setIsGenerated(true)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink)
    alert("Link disalin ke clipboard!")
  }

  const handleDownload = () => {
    const svg = document.getElementById("qr-code-svg")
    if (!svg) return
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()
    img.onload = () => {
      canvas.width = 250 // Fixed size for better quality
      canvas.height = 250
      if (ctx) {
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 10, 10, 230, 230) // Simple padding
      }
      const pngFile = canvas.toDataURL("image/png")
      const downloadLink = document.createElement("a")
      downloadLink.download = "whatsapp-qr-code.png"
      downloadLink.href = pngFile
      downloadLink.click()
    }
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
  }

  return (
    <main style={{ background: "#181A2F" }} className="min-h-screen relative">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `linear-gradient(#FDA481 1px, transparent 1px), linear-gradient(90deg, #FDA481 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }} 
        />
        
        <Blob shape={0} color="bg-primary/20" className="w-[500px] h-[500px] -top-20 -left-32" />
        <Blob shape={1} color="bg-[#FDA481]/10" className="w-[400px] h-[400px] bottom-0 -right-20" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 px-4">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-6" style={{ color: '#FDA481' }}>
              Magic <span style={{ color: '#B4182D' }}>WhatsApp</span> Generator
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#FDA48199' }}>
              Buat Link Chat WhatsApp & Custom QR Code. Mudah, praktis, dan siap dipakai untuk keperluan bisnis Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Step 1: Settings */}
            <Card variant={5} className="p-2 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ background: '#B4182D', color: '#FDA481' }}>1</div>
                   <CardTitle>Pengaturan Link WA</CardTitle>
                </div>
              </CardHeader>
            <CardContent className="space-y-6 px-4 pb-8 sm:px-8 sm:pb-8">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: '#FDA48199' }}>
                    <Phone className="w-4 h-4" /> Nomor WhatsApp Tujuan:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select 
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="h-12 px-4 rounded-2xl font-semibold text-sm focus:outline-none border transition-all cursor-pointer w-full sm:w-[120px]"
                      style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                    >
                      <option value="+62">ID +62</option>
                      <option value="+60">MY +60</option>
                      <option value="+65">SG +65</option>
                      <option value="+673">BN +673</option>
                      <option value="+670">TL +670</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="81234567890"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      className="flex-1 h-12 px-5 rounded-2xl font-semibold text-sm focus:outline-none border transition-all w-full placeholder:text-[#FDA481]/30"
                      style={{ 
                        background: '#181A2F', 
                        borderColor: error ? '#B4182D' : '#37415C', 
                        color: '#FDA481' 
                      }}
                    />
                  </div>
                  {error && (
                    <p className="text-[10px] sm:text-xs mt-2 font-bold flex items-center gap-1" style={{ color: '#B4182D' }}>
                      ⚠️ {error}
                    </p>
                  )}
                  <p className="text-[10px] sm:text-xs mt-2" style={{ color: '#FDA48166' }}>Pilih kode negara dan masukkan angka setelahnya tanpa awalan 0.</p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3" style={{ color: '#FDA48199' }}>
                    <MessageSquare className="w-4 h-4" /> Pesan Otomatis (Template):
                  </label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Halo Admin, saya tertarik..."
                    className="w-full px-5 py-4 rounded-2xl font-semibold text-sm focus:outline-none border transition-all resize-none placeholder:text-[#FDA481]/30"
                    style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                  />
                  <p className="text-[10px] sm:text-xs mt-2" style={{ color: '#FDA48166' }}>Pesan yang langsung muncul di kolom chat pelanggan saat link diklik.</p>
                </div>

                <Button onClick={handleGenerate} className="w-full h-14 rounded-2xl">
                   <Wand2 className="mr-2 h-5 w-5" /> Generate Sekarang
                </Button>
              </CardContent>
            </Card>

            {/* Step 2: Result */}
            <Card variant={5} className="p-2 flex flex-col h-full min-h-[500px]">
              <CardHeader>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ background: '#B4182D', color: '#FDA481' }}>2</div>
                   <CardTitle>Hasil Generate</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center text-center p-6 sm:p-8">
                {!isGenerated ? (
                  <div className="flex flex-col items-center gap-6 opacity-40">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl flex items-center justify-center border-2 border-dashed" style={{ borderColor: '#37415C' }}>
                      <QrCode className="w-16 h-16 sm:w-20 sm:h-20" style={{ color: '#FDA481' }} />
                    </div>
                    <p className="font-semibold text-sm sm:text-base" style={{ color: '#FDA481' }}>QR Code akan muncul di sini</p>
                  </div>
                ) : (
                  <div className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="bg-white p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] inline-block shadow-lift ring-4 sm:ring-8 ring-[#FDA481]/10">
                      <QRCodeSVG 
                        id="qr-code-svg"
                        value={generatedLink} 
                        size={160}
                        level="H"
                        includeMargin={false}
                        fgColor="#181A2F"
                        className="sm:w-[200px] sm:h-[200px]"
                      />
                    </div>
                    
                    <div className="space-y-6 w-full">
                      <Button variant="outline" onClick={handleDownload} className="w-full h-12 sm:h-14 rounded-2xl">
                        <Download className="mr-2 h-5 w-5" /> Download QR Code
                      </Button>

                      <div className="space-y-3 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] pl-1" style={{ color: '#FDA48199' }}>Link WhatsApp Anda:</label>
                        <div className="flex gap-2 sm:gap-3">
                          <input 
                            readOnly 
                            value={generatedLink}
                            className="flex-1 h-12 sm:h-14 px-4 sm:px-5 rounded-2xl font-semibold text-[10px] sm:text-xs focus:outline-none border overflow-hidden text-ellipsis shadow-inner"
                            style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                          />
                          <button 
                            onClick={handleCopy}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border hover:bg-[#FDA481]/10 hover:border-[#FDA481] transition-all flex-shrink-0"
                            style={{ borderColor: '#37415C', color: '#FDA481' }}
                          >
                            <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 mt-20" style={{ background: '#54162B' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-lg" style={{ color: '#FDA481' }}>Tara Tech</span>
          </div>
          <p className="text-sm" style={{ color: '#FDA48199' }}>&copy; {new Date().getFullYear()} Tara Tech. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
