import { ArrowRight, Code, Palette, Rocket, Mail, Phone, MapPin, Zap, BadgeDollarSign, Headphones } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Blob from "@/components/Blob"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const WA = "https://wa.me/62895326880773?text=Halo%20saya%20tertarik%20menggunakan%20jasa%20pembuatan%20website%20Tara%20Tech"

// Palette
// #181A2F — bg utama (navy hitam)
// #242E49 — muted / card bg
// #37415C — accent / border
// #FDA481 — peach (teks, highlight)
// #B4182D — merah (primary / CTA)
// #54162B — burgundy (footer / dark section)

export default function Home() {
  return (
    <main style={{ background: "#181A2F" }}>
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        <Blob shape={0} color="bg-primary/20"   className="w-[500px] h-[500px] -top-20 -left-32" />
        <Blob shape={1} color="bg-[#FDA481]/10" className="w-[400px] h-[400px] bottom-0 -right-20" />

        <div className="max-w-4xl w-full mx-auto text-center relative z-10 py-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border" style={{ background: '#242E49', borderColor: '#37415C' }}>
            <span className="text-sm font-semibold" style={{ color: '#FDA481' }}>Web Development Studio · Bogor</span>
          </div>

          <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-6" style={{ color: '#FDA481' }}>
            Wujudkan Website{" "}
            <em className="not-italic" style={{ color: '#B4182D' }}>Impian</em>{" "}
            Anda
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#FDA48199' }}>
            Tara Tech adalah partner terpercaya untuk pembuatan website profesional yang modern, responsif, dan sesuai kebutuhan bisnis Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                Konsultasi Gratis <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#layanan">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Lihat Layanan
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="layanan" className="py-32 px-4 sm:px-6 lg:px-8" style={{ background: '#242E49' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B4182D' }}>Apa yang kami tawarkan</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl" style={{ color: '#FDA481' }}>Layanan Kami</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Code,    title: "Website Company Profile", desc: "Website profesional untuk memperkenalkan perusahaan dan layanan Anda kepada dunia dengan tampilan yang elegan.", v: 0 },
              { Icon: Rocket,  title: "E-Commerce",              desc: "Toko online lengkap dengan sistem pembayaran, manajemen produk, dan pengalaman belanja yang menyenangkan.", v: 1 },
              { Icon: Palette, title: "Landing Page",            desc: "Halaman promosi yang menarik dan efektif untuk meningkatkan konversi dan penjualan bisnis Anda.", v: 2 },
            ].map(({ Icon, title, desc, v }) => (
              <Card key={title} variant={v as 0|1|2}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#B4182D22' }}>
                    <Icon className="h-7 w-7" style={{ color: '#B4182D' }} />
                  </div>
                  <CardTitle style={{ color: '#FDA481' }}>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed" style={{ color: '#FDA48199' }}>{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section id="keunggulan" className="py-32 px-4 sm:px-6 lg:px-8" style={{ background: '#181A2F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B4182D' }}>Keunggulan kami</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl" style={{ color: '#FDA481' }}>Mengapa Pilih Tara Tech?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {([
              { Icon: Zap,             title: "Cepat & Responsif", desc: "Website yang cepat dan optimal di semua perangkat." },
              { Icon: Palette,         title: "Design Modern",      desc: "Tampilan menarik dengan UI/UX terkini yang memukau." },
              { Icon: BadgeDollarSign, title: "Harga Terjangkau",   desc: "Paket harga yang transparan dan sesuai budget Anda." },
              { Icon: Headphones,      title: "Support 24/7",       desc: "Tim support siap membantu kapan saja." },
            ] as const).map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 text-center border" style={{ background: '#242E49', borderColor: '#37415C' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: '#B4182D22' }}>
                  <Icon className="h-7 w-7" style={{ color: '#B4182D' }} />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2" style={{ color: '#FDA481' }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#FDA48199' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8" style={{ background: '#B4182D' }}>
        <Blob shape={2} color="bg-[#54162B]/40" className="w-[500px] h-[500px] -top-20 -right-20" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight mb-6" style={{ color: '#FDA481' }}>
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: '#FDA48199' }}>
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan website impian Anda bersama Tara Tech.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer">
            <button
              className="inline-flex items-center justify-center h-14 px-12 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-all duration-300"
              style={{ background: '#FDA481', color: '#54162B' }}
            >
              Mulai Sekarang <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8" style={{ background: '#181A2F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B4182D' }}>Investasi terbaik</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: '#FDA481' }}>Paket Harga</h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#FDA48199' }}>Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* STARTER */}
            <div className="rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1" style={{ background: '#242E49', borderColor: '#37415C' }}>
              <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: '#FDA48199' }}>Starter</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="font-heading font-extrabold text-5xl" style={{ color: '#FDA481' }}>500K</span>
                <span className="text-lg mb-2" style={{ color: '#FDA48199' }}>/proyek</span>
              </div>
              <p className="text-sm mb-8" style={{ color: '#FDA48199' }}>Cocok untuk UMKM & personal branding</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Landing Page 1 halaman",
                  "Desain responsif mobile",
                  "Domain .my.id 1 tahun",
                  "Hosting 1 tahun",
                  "Revisi 2x",
                  "Selesai 5 hari kerja",
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#FDA481' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: '#B4182D22', color: '#B4182D' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/62895326880773?text=Halo%20saya%20tertarik%20dengan%20Paket%20Starter%20(500K)%20untuk%20pembuatan%20website%20Tara%20Tech" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-12 rounded-full font-bold text-sm border-2 transition-all duration-300 hover:scale-105 active:scale-95" style={{ borderColor: '#FDA481', color: '#FDA481' }}>
                  Pilih Paket
                </button>
              </a>
            </div>

            {/* PROFESSIONAL — highlighted */}
            <div className="rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 relative" style={{ background: '#B4182D', borderColor: '#B4182D' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: '#FDA481', color: '#54162B' }}>
                Paling Populer
              </div>
              <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: '#FDA48199' }}>Professional</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="font-heading font-extrabold text-5xl" style={{ color: '#FDA481' }}>1,5JT</span>
                <span className="text-lg mb-2" style={{ color: '#FDA48199' }}>/proyek</span>
              </div>
              <p className="text-sm mb-8" style={{ color: '#FDA48199' }}>Ideal untuk bisnis yang ingin tampil profesional</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Website multi halaman (5 hal.)",
                  "Desain custom UI/UX",
                  "Domain .com 1 tahun",
                  "Hosting premium 1 tahun",
                  "Formulir kontak & WhatsApp",
                  "Revisi 5x",
                  "Selesai 7 hari kerja",
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#FDA481' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: '#FDA48133', color: '#FDA481' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/62895326880773?text=Halo%20saya%20tertarik%20dengan%20Paket%20Professional%20(1%2C5JT)%20untuk%20pembuatan%20website%20Tara%20Tech" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-12 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95" style={{ background: '#FDA481', color: '#54162B' }}>
                  Pilih Paket
                </button>
              </a>
            </div>

            {/* ENTERPRISE */}
            <div className="rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1" style={{ background: '#242E49', borderColor: '#37415C' }}>
              <p className="font-semibold text-sm uppercase tracking-widest mb-4" style={{ color: '#FDA48199' }}>Enterprise</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="font-heading font-extrabold text-5xl" style={{ color: '#FDA481' }}>Custom</span>
              </div>
              <p className="text-sm mb-8" style={{ color: '#FDA48199' }}>Untuk kebutuhan bisnis skala besar & e-commerce</p>
              <ul className="space-y-3 mb-8">
                {[
                  "E-Commerce / sistem custom",
                  "Desain premium UI/UX",
                  "Domain & hosting premium",
                  "Integrasi payment gateway",
                  // "Dashboard admin",
                  // "SEO lanjutan",
                  "Revisi unlimited",
                  "Support 3 bulan",
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#FDA481' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: '#B4182D22', color: '#B4182D' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/62895326880773?text=Halo%20saya%20tertarik%20dengan%20Paket%20Enterprise%20(Custom)%20untuk%20pembuatan%20website%20Tara%20Tech" target="_blank" rel="noopener noreferrer">
                <button className="w-full h-12 rounded-full font-bold text-sm border-2 transition-all duration-300 hover:scale-105 active:scale-95" style={{ borderColor: '#FDA481', color: '#FDA481' }}>
                  Hubungi Kami
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="py-32 px-4 sm:px-6 lg:px-8" style={{ background: '#242E49' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#B4182D' }}>Kami siap membantu</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl" style={{ color: '#FDA481' }}>Hubungi Kami</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              {([
                { Icon: Mail,   label: "Email",   value: "info@taratech.web.id" },
                { Icon: Phone,  label: "Telepon", value: "+62 895-3268-80773" },
                { Icon: MapPin, label: "Alamat",  value: "Bogor, Indonesia" },
              ] as const).map(({ Icon, label, value }) => (
                <div key={label} className="rounded-3xl p-6 flex items-center gap-5 hover:-translate-y-1 transition-all duration-300 border" style={{ background: '#181A2F', borderColor: '#37415C' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: '#B4182D22' }}>
                    <Icon className="h-6 w-6" style={{ color: '#B4182D' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#FDA48199' }}>{label}</p>
                    <p className="font-semibold" style={{ color: '#FDA481' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] p-8 border" style={{ background: '#181A2F', borderColor: '#37415C' }}>
              <form className="space-y-5">
                <input type="text" placeholder="Nama Anda"
                  className="w-full h-12 px-5 rounded-full font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300"
                  style={{ background: '#242E49', border: '1px solid #37415C', color: '#FDA481' }} />
                <input type="email" placeholder="Email Anda"
                  className="w-full h-12 px-5 rounded-full font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300"
                  style={{ background: '#242E49', border: '1px solid #37415C', color: '#FDA481' }} />
                <textarea placeholder="Pesan Anda" rows={4}
                  className="w-full px-5 py-4 rounded-3xl font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 resize-none"
                  style={{ background: '#242E49', border: '1px solid #37415C', color: '#FDA481' }} />
                <Button className="w-full">Kirim Pesan</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4" style={{ background: '#54162B' }}>
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
