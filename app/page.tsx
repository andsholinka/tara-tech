import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Rocket, Mail, Phone, MapPin, Star, ArrowRight, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neo-bg">
      {/* Navbar */}
      <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
          <div className="border-4 border-black bg-neo-accent px-4 py-2 shadow-neo-sm rotate-1">
            <h1 className="text-2xl font-black uppercase">TARA TECH</h1>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#layanan" className="font-bold uppercase text-sm hover:bg-neo-secondary hover:px-3 hover:py-2 hover:border-4 hover:border-black hover:shadow-neo-sm transition-all duration-100">Layanan</a>
            <a href="#keunggulan" className="font-bold uppercase text-sm hover:bg-neo-secondary hover:px-3 hover:py-2 hover:border-4 hover:border-black hover:shadow-neo-sm transition-all duration-100">Keunggulan</a>
            <a href="#kontak" className="font-bold uppercase text-sm hover:bg-neo-secondary hover:px-3 hover:py-2 hover:border-4 hover:border-black hover:shadow-neo-sm transition-all duration-100">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 max-w-7xl relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block border-4 border-black bg-neo-secondary px-4 py-2 shadow-neo-sm -rotate-2">
              <span className="font-black text-sm uppercase tracking-widest">🚀 Web Development</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black leading-none">
              <span className="block">WUJUDKAN</span>
              <span className="block text-stroke mt-2">WEBSITE</span>
              <span className="block -rotate-1 inline-block bg-neo-accent border-4 border-black px-4 shadow-neo mt-4">IMPIAN</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              Partner terpercaya untuk pembuatan website profesional yang modern, responsif, dan sesuai kebutuhan bisnis Anda
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/6289532688077?text=Halo%20saya%20tertarik%20menggunakan%20jasa%20pembuatan%20website%20Tara%20Tech" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="group w-full sm:w-auto">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button variant="secondary">
                Lihat Portofolio
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="absolute top-0 right-0 w-64 h-64 border-4 border-black bg-neo-muted shadow-neo-lg rotate-6"></div>
            <div className="absolute top-20 right-32 w-48 h-48 border-4 border-black bg-neo-secondary shadow-neo -rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-56 h-56 border-4 border-black bg-neo-accent shadow-neo-xl rotate-3"></div>
            
            <div className="absolute top-10 left-10 border-4 border-black bg-white px-6 py-3 shadow-neo rotate-12">
              <Star className="h-12 w-12 fill-neo-secondary stroke-black stroke-[3px]" />
            </div>
            
            <div className="absolute bottom-10 left-0 border-4 border-black bg-neo-secondary px-4 py-2 shadow-neo -rotate-6">
              <span className="font-black text-4xl">100+</span>
              <span className="block font-bold text-sm uppercase">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="bg-neo-secondary border-y-8 border-black py-20 md:py-32 relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-7xl font-black uppercase mb-4">
              LAYANAN KAMI
            </h3>
            <div className="w-32 h-2 bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-4 border-black shadow-neo-lg hover:-translate-y-2 hover:shadow-neo-xl transition-all duration-200 rotate-1">
              <CardHeader>
                <div className="w-16 h-16 border-4 border-black bg-neo-accent flex items-center justify-center mb-4 shadow-neo-sm">
                  <Code className="h-8 w-8 stroke-[3px]" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Company Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Website profesional untuk memperkenalkan perusahaan dan layanan Anda kepada dunia</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-black shadow-neo-lg hover:-translate-y-2 hover:shadow-neo-xl transition-all duration-200 -rotate-1">
              <CardHeader>
                <div className="w-16 h-16 border-4 border-black bg-neo-muted flex items-center justify-center mb-4 shadow-neo-sm">
                  <Rocket className="h-8 w-8 stroke-[3px]" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">E-Commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Toko online lengkap dengan sistem pembayaran dan manajemen produk yang mudah</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-4 border-black shadow-neo-lg hover:-translate-y-2 hover:shadow-neo-xl transition-all duration-200 rotate-2">
              <CardHeader>
                <div className="w-16 h-16 border-4 border-black bg-neo-secondary flex items-center justify-center mb-4 shadow-neo-sm">
                  <Palette className="h-8 w-8 stroke-[3px]" />
                </div>
                <CardTitle className="text-2xl font-black uppercase">Landing Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Halaman promosi yang menarik dan efektif untuk meningkatkan konversi bisnis Anda</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="keunggulan" className="py-20 md:py-32 bg-neo-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-7xl font-black uppercase mb-4">
              <span className="inline-block -rotate-2">MENGAPA</span>{" "}
              <span className="inline-block bg-neo-accent border-4 border-black px-6 shadow-neo rotate-2">PILIH</span>{" "}
              <span className="inline-block">KAMI?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-4 border-black bg-white p-8 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200">
              <div className="w-20 h-20 border-4 border-black bg-neo-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo-sm">
                <Zap className="h-10 w-10 stroke-[3px]" />
              </div>
              <h4 className="text-xl font-black uppercase mb-3 text-center">Cepat & Responsif</h4>
              <p className="font-bold text-center">Website yang cepat dan optimal di semua perangkat</p>
            </div>

            <div className="border-4 border-black bg-white p-8 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 rotate-1">
              <div className="w-20 h-20 border-4 border-black bg-neo-muted rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo-sm">
                <span className="text-4xl">🎨</span>
              </div>
              <h4 className="text-xl font-black uppercase mb-3 text-center">Design Modern</h4>
              <p className="font-bold text-center">Tampilan menarik dengan UI/UX terkini</p>
            </div>

            <div className="border-4 border-black bg-white p-8 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 -rotate-1">
              <div className="w-20 h-20 border-4 border-black bg-neo-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo-sm">
                <span className="text-4xl">💰</span>
              </div>
              <h4 className="text-xl font-black uppercase mb-3 text-center">Harga Terjangkau</h4>
              <p className="font-bold text-center">Paket harga yang sesuai dengan budget Anda</p>
            </div>

            <div className="border-4 border-black bg-white p-8 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 rotate-2">
              <div className="w-20 h-20 border-4 border-black bg-neo-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo-sm">
                <span className="text-4xl">🛠️</span>
              </div>
              <h4 className="text-xl font-black uppercase mb-3 text-center">Support 24/7</h4>
              <p className="font-bold text-center">Tim support siap membantu kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black border-y-8 border-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)'
        }}></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative">
          <h3 className="text-5xl md:text-7xl font-black uppercase text-white mb-8 leading-tight">
            SIAP MEMULAI PROYEK ANDA?
          </h3>
          <p className="text-xl md:text-2xl font-bold text-white mb-12">
            Hubungi kami sekarang untuk konsultasi gratis dan wujudkan website impian Anda!
          </p>
          <a href="https://wa.me/6289532688077?text=Halo%20saya%20tertarik%20menggunakan%20jasa%20pembuatan%20website%20Tara%20Tech" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="text-lg h-16 px-12">
              MULAI SEKARANG
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 md:py-32 bg-neo-muted">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-7xl font-black uppercase">
              HUBUNGI KAMI
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-4 border-black bg-neo-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">Email</h4>
                    <p className="font-bold text-lg">info@taratech.web.id</p>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 rotate-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-4 border-black bg-neo-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">Telepon</h4>
                    <p className="font-bold text-lg">+62 895-3268-80773</p>
                  </div>
                </div>
              </div>

              <div className="border-4 border-black bg-white p-6 shadow-neo hover:-translate-y-1 hover:shadow-neo-lg transition-all duration-200 -rotate-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-4 border-black bg-neo-muted flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">Alamat</h4>
                    <p className="font-bold text-lg">Bogor, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-4 border-black bg-white p-8 shadow-neo-lg">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="NAMA ANDA"
                    className="w-full h-14 px-4 font-bold text-lg border-4 border-black focus:bg-neo-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100 placeholder:text-black/40 placeholder:font-bold"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL ANDA"
                    className="w-full h-14 px-4 font-bold text-lg border-4 border-black focus:bg-neo-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100 placeholder:text-black/40 placeholder:font-bold"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="PESAN ANDA"
                    rows={5}
                    className="w-full px-4 py-4 font-bold text-lg border-4 border-black focus:bg-neo-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100 placeholder:text-black/40 placeholder:font-bold resize-none"
                  />
                </div>
                <Button variant="primary" className="w-full text-lg h-16">
                  KIRIM PESAN
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-8 border-black py-12">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="inline-block border-4 border-white bg-neo-accent px-6 py-3 shadow-[8px_8px_0px_0px_#fff] mb-6 rotate-2">
            <span className="text-3xl font-black uppercase">TARA TECH</span>
          </div>
          <p className="font-bold text-white text-lg">
            &copy; 2026 Tara Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
