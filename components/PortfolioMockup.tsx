"use client"

const DESKTOP_SS = "https://api.screenshotone.com/take?url=https://dapurardya.my.id&viewport_width=1280&viewport_height=800&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true"
const MOBILE_SS  = "https://api.screenshotone.com/take?url=https://dapurardya.my.id&viewport_width=390&viewport_height=844&format=jpg&image_quality=80&block_ads=true&block_cookie_banners=true"

const FALLBACK_DESKTOP = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180' viewBox='0 0 400 180'%3E%3Crect width='400' height='180' fill='%23242E49'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDA48155' font-size='14' font-family='sans-serif'%3Edapurardya.my.id%3C/text%3E%3C/svg%3E"
const FALLBACK_MOBILE  = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='160' viewBox='0 0 96 160'%3E%3Crect width='96' height='160' fill='%23242E49'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23FDA48155' font-size='8' font-family='sans-serif'%3Emobile%3C/text%3E%3C/svg%3E"

export default function PortfolioMockup() {
  return (
    <div className="relative p-8 flex items-center justify-center" style={{ background: '#1a2040', minHeight: 380 }}>
      {/* Browser mockup */}
      <div className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-2xl border" style={{ borderColor: '#37415C' }}>
        <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: '#0f1428' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
          <div className="flex-1 mx-2 rounded-full px-3 py-0.5 text-xs truncate" style={{ background: '#242E49', color: '#FDA48199' }}>
            dapurardya.my.id
          </div>
        </div>
        <img
          src={DESKTOP_SS}
          alt="Dapur Ardya desktop preview"
          className="w-full object-cover object-top"
          style={{ height: 180 }}
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_DESKTOP }}
        />
      </div>

      {/* Phone mockup */}
      <div className="absolute -bottom-2 right-6 w-24 rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: '#FDA48133' }}>
        <div className="flex justify-center py-1" style={{ background: '#0f1428' }}>
          <span className="w-8 h-1 rounded-full" style={{ background: '#37415C' }} />
        </div>
        <img
          src={MOBILE_SS}
          alt="Dapur Ardya mobile preview"
          className="w-full object-cover object-top"
          style={{ height: 160 }}
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_MOBILE }}
        />
        <div className="flex justify-center py-1" style={{ background: '#0f1428' }}>
          <span className="w-4 h-4 rounded-full border" style={{ borderColor: '#37415C' }} />
        </div>
      </div>
    </div>
  )
}
