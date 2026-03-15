"use client"

import { useState, useEffect } from "react"
import { 
  Copy, 
  Download, 
  QrCode, 
  Link as LinkIcon, 
  Type, 
  Mail, 
  Phone, 
  MessageSquare, 
  Wifi, 
  Palette, 
  Maximize2,
  Info
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Blob from "@/components/Blob"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { QRCodeSVG } from "qrcode.react"

type QRType = "URL" | "TEXT" | "EMAIL" | "PHONE" | "SMS" | "WIFI"

export default function QRGenerator() {
  const [type, setType] = useState<QRType>("URL")
  const [content, setContent] = useState("")
  
  // Specific inputs for complex types
  const [emailData, setEmailData] = useState({ to: "", subject: "", body: "" })
  const [smsData, setSmsData] = useState({ number: "", message: "" })
  const [wifiData, setWifiData] = useState({ ssid: "", password: "", security: "WPA" })
  
  // Customization
  const [fgColor, setFgColor] = useState("#181A2F")
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const [size, setSize] = useState(256)
  
  const [qrValue, setQrValue] = useState("")

  useEffect(() => {
    switch (type) {
      case "URL":
      case "TEXT":
      case "PHONE":
        setQrValue(type === "PHONE" && content ? `tel:${content}` : content)
        break
      case "EMAIL":
        if (emailData.to) {
          setQrValue(`mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`)
        } else {
          setQrValue("")
        }
        break
      case "SMS":
        if (smsData.number) {
          setQrValue(`smsto:${smsData.number}:${smsData.message}`)
        } else {
          setQrValue("")
        }
        break
      case "WIFI":
        if (wifiData.ssid) {
          setQrValue(`WIFI:S:${wifiData.ssid};T:${wifiData.security};P:${wifiData.password};;`)
        } else {
          setQrValue("")
        }
        break
    }
  }, [type, content, emailData, smsData, wifiData])

  const handleDownload = () => {
    const svg = document.getElementById("qr-code-svg-main")
    if (!svg) return
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()
    img.onload = () => {
      canvas.width = size + 40
      canvas.height = size + 40
      if (ctx) {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 20, 20, size, size)
      }
      const pngFile = canvas.toDataURL("image/png")
      const downloadLink = document.createElement("a")
      downloadLink.download = `taratech-qr-${type.toLowerCase()}.png`
      downloadLink.href = pngFile
      downloadLink.click()
    }
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData)
  }

  const handleCopy = () => {
    if (!qrValue) return
    navigator.clipboard.writeText(qrValue)
    alert("Konten QR Code disalin!")
  }

  const types = [
    { id: "URL",   icon: LinkIcon, label: "URL" },
    { id: "TEXT",  icon: Type,     label: "TEXT" },
    { id: "EMAIL", icon: Mail,     label: "EMAIL" },
    { id: "PHONE", icon: Phone,    label: "PHONE" },
    { id: "SMS",   icon: MessageSquare, label: "SMS" },
    { id: "WIFI",  icon: Wifi,     label: "WIFI" },
  ] as const

  return (
    <main style={{ background: "#181A2F" }} className="min-h-screen relative">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `linear-gradient(#FDA481 1px, transparent 1px), linear-gradient(90deg, #FDA481 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }} 
        />
        
        <Blob shape={2} color="bg-primary/20" className="w-[500px] h-[500px] -top-20 -right-32" />
        <Blob shape={3} color="bg-[#FDA481]/10" className="w-[400px] h-[400px] bottom-0 -left-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-6" style={{ color: '#FDA481' }}>
              Universal <span style={{ color: '#B4182D' }}>QR</span> Generator
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#FDA48199' }}>
              Ciptakan QR Code profesional untuk segala kebutuhan. Kustomisasi warna, ukuran, dan tipe konten dengan mudah.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT COLUMN - CONFIG */}
            <div className="lg:col-span-7 space-y-8">
              {/* Type Selection */}
              <Card variant={5} className="p-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-5 h-5" style={{ color: '#B4182D' }} />
                    <CardTitle className="text-lg">QR Code Type</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-3 sm:grid-cols-6 gap-3 p-4 sm:p-6">
                  {types.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`flex flex-col items-center justify-center p-4 sm:p-3 rounded-2xl border transition-all gap-2 group ${
                        type === t.id ? "border-[#B4182D] bg-[#B4182D]/10 shadow-soft" : "border-[#37415C] bg-[#181A2F] hover:border-[#FDA481]/50"
                      }`}
                    >
                      <t.icon className={`w-6 h-6 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 ${type === t.id ? "text-[#B4182D]" : "text-[#FDA48199]"}`} />
                      <span className={`text-[11px] sm:text-[10px] font-bold tracking-wider ${type === t.id ? "text-fg" : "text-[#FDA48166]"}`}>{t.label}</span>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Content Input */}
              <Card variant={5} className="p-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Type className="w-5 h-5" style={{ color: '#B4182D' }} />
                    <CardTitle className="text-lg">Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {type === "URL" && (
                    <input 
                      type="url" 
                      placeholder="https://taratech.web.id"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full h-14 px-5 rounded-2xl font-semibold text-sm focus:outline-none border transition-all placeholder:text-[#FDA481]/20"
                      style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                    />
                  )}
                  {type === "TEXT" && (
                    <textarea 
                      rows={4}
                      placeholder="Masukkan teks di sini..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl font-semibold text-sm focus:outline-none border transition-all resize-none placeholder:text-[#FDA481]/20"
                      style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                    />
                  )}
                  {type === "EMAIL" && (
                    <div className="space-y-4">
                      <input 
                        type="email" placeholder="Email Penerima"
                        value={emailData.to}
                        onChange={(e) => setEmailData({...emailData, to: e.target.value})}
                        className="w-full h-12 px-5 rounded-xl font-semibold text-sm focus:outline-none border"
                        style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                      />
                      <input 
                        type="text" placeholder="Subjek"
                        value={emailData.subject}
                        onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                        className="w-full h-12 px-5 rounded-xl font-semibold text-sm focus:outline-none border"
                        style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                      />
                      <textarea 
                        rows={3} placeholder="Isi Email"
                        value={emailData.body}
                        onChange={(e) => setEmailData({...emailData, body: e.target.value})}
                        className="w-full px-5 py-3 rounded-xl font-semibold text-sm focus:outline-none border resize-none"
                        style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                      />
                    </div>
                  )}
                  {type === "PHONE" && (
                    <input 
                      type="tel" placeholder="Nomor Telepon"
                      value={content}
                      onChange={(e) => setContent(e.target.value.replace(/\D/g, ""))}
                      className="w-full h-14 px-5 rounded-2xl font-semibold text-sm focus:outline-none border"
                      style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                    />
                  )}
                  {type === "SMS" && (
                    <div className="space-y-4">
                      <input 
                        type="tel" placeholder="Nomor Tujuan"
                        value={smsData.number}
                        onChange={(e) => setSmsData({...smsData, number: e.target.value.replace(/\D/g, "")})}
                        className="w-full h-12 px-5 rounded-xl font-semibold text-sm focus:outline-none border"
                        style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                      />
                      <textarea 
                        rows={3} placeholder="Isi SMS"
                        value={smsData.message}
                        onChange={(e) => setSmsData({...smsData, message: e.target.value})}
                        className="w-full px-5 py-3 rounded-xl font-semibold text-sm focus:outline-none border resize-none"
                        style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                      />
                    </div>
                  )}
                  {type === "WIFI" && (
                    <div className="space-y-4">
                      <input 
                        type="text" placeholder="Nama WiFi (SSID)"
                        value={wifiData.ssid}
                        onChange={(e) => setWifiData({...wifiData, ssid: e.target.value})}
                        className="w-full h-12 px-5 rounded-xl font-semibold text-sm focus:outline-none border"
                        style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="password" placeholder="Password"
                          value={wifiData.password}
                          onChange={(e) => setWifiData({...wifiData, password: e.target.value})}
                          className="w-full h-12 px-5 rounded-xl font-semibold text-sm focus:outline-none border"
                          style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                        />
                        <select 
                          value={wifiData.security}
                          onChange={(e) => setWifiData({...wifiData, security: e.target.value})}
                          className="h-12 px-4 rounded-xl font-semibold text-sm focus:outline-none border"
                          style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                        >
                          <option value="WPA">WPA/WPA2</option>
                          <option value="WEP">WEP</option>
                          <option value="nopass">None</option>
                        </select>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Customization */}
              <Card variant={5} className="p-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5" style={{ color: '#B4182D' }} />
                    <CardTitle className="text-lg">Customization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FDA48199' }}>QR Color</label>
                      <div className="flex gap-3">
                        <input 
                          type="color" 
                          value={fgColor}
                          onChange={(e) => setFgColor(e.target.value)}
                          className="w-12 h-12 rounded-xl border-none cursor-pointer bg-transparent"
                        />
                        <input 
                          type="text" 
                          value={fgColor}
                          onChange={(e) => setFgColor(e.target.value)}
                          className="flex-1 h-12 px-4 rounded-xl font-mono text-sm border focus:outline-none"
                          style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FDA48199' }}>Background Color</label>
                      <div className="flex gap-3">
                        <input 
                          type="color" 
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="w-12 h-12 rounded-xl border-none cursor-pointer bg-transparent"
                        />
                        <input 
                          type="text" 
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="flex-1 h-12 px-4 rounded-xl font-mono text-sm border focus:outline-none"
                          style={{ background: '#181A2F', borderColor: '#37415C', color: '#FDA481' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                      <span style={{ color: '#FDA48199' }}>Size: {size}px</span>
                      <Maximize2 className="w-4 h-4" style={{ color: '#B4182D' }} />
                    </div>
                    <input 
                      type="range" min="128" max="512" step="8"
                      value={size}
                      onChange={(e) => setSize(parseInt(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#B4182D]"
                      style={{ background: '#37415C' }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN - PREVIEW */}
            <div className="lg:col-span-5 space-y-8">
              <Card variant={5} className="p-1 h-full flex flex-col min-h-[500px]">
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  {!qrValue ? (
                    <div className="opacity-40 space-y-4">
                      <QrCode className="w-24 h-24 mx-auto" style={{ color: '#FDA481' }} />
                      <p className="font-semibold" style={{ color: '#FDA481' }}>Enter content to<br/>generate QR code</p>
                    </div>
                  ) : (
                    <div className="w-full space-y-8 animate-in fade-in zoom-in duration-500">
                      <div 
                        className="p-6 rounded-[2rem] inline-block shadow-lift ring-8 ring-[#FDA481]/10"
                        style={{ background: bgColor }}
                      >
                        <QRCodeSVG 
                          id="qr-code-svg-main"
                          value={qrValue} 
                          size={256}
                          level="H"
                          fgColor={fgColor}
                          bgColor={bgColor}
                          includeMargin={false}
                          className="max-w-full h-auto"
                        />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <Button variant="primary" onClick={handleDownload} className="flex-1 rounded-2xl h-14 text-base shadow-soft hover:shadow-lift">
                          <Download className="mr-2 w-5 h-5" /> Download
                        </Button>
                        <Button variant="outline" onClick={handleCopy} className="flex-1 rounded-2xl h-14 text-base whitespace-nowrap border-2">
                          <Copy className="mr-2 w-5 h-5" /> Salin Konten
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>

                {/* Pro Tips */}
                <div className="m-6 mt-0 p-6 rounded-2xl border bg-yellow-400/5" style={{ borderColor: 'rgba(250, 204, 21, 0.2)' }}>
                  <div className="flex items-center gap-2 mb-4 text-[#FDA481]">
                    <Info className="w-5 h-5" />
                    <span className="font-bold text-sm tracking-wide">PRO TIPS:</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Gunakan warna kontras tinggi untuk pemindaian yang lebih baik",
                      "Uji QR code Anda sebelum mencetaknya",
                      "Ukuran lebih besar lebih cocok untuk media cetak",
                      "Gunakan link pendek (URL) agar QR code tetap simpel",
                    ].map((tip, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#FDA48199' }}>
                        <span className="text-[#B4182D] font-bold">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
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
