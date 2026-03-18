"use client"
import { useRef, useState, useCallback, useEffect } from "react"
import { Settings, X } from "lucide-react"

// ─── Config ───────────────────────────────────────────────────────────────────
const ALL_NOMINALS = [
  { label: "2K",   value: 2000,   color: "#C0392B", textColor: "#fff" },
  { label: "5K",   value: 5000,   color: "#E67E22", textColor: "#fff" },
  { label: "10K",  value: 10000,  color: "#8E44AD", textColor: "#fff" },
  { label: "20K",  value: 20000,  color: "#27AE60", textColor: "#fff" },
  { label: "50K",  value: 50000,  color: "#2980B9", textColor: "#fff" },
  { label: "100K", value: 100000, color: "#D4AC0D", textColor: "#1a1a1a" },
]

// 1x=slow, 2x=medium, 3x=fast (rotations before stopping)
const ROTATIONS_MAP = { "1x": 4, "2x": 7, "3x": 12 }
const DURATION_MAP  = { "1x": 4000, "2x": 5000, "3x": 6000 }

function buildSegments(activeValues: number[], hard: boolean) {
  const base = ALL_NOMINALS.filter(n => activeValues.includes(n.value))
  const safe = base.length >= 2 ? base : ALL_NOMINALS
  return hard ? [...safe, ...safe] : safe
}

function formatRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "idle" | "spinning"
type SpeedKey = "1x" | "2x" | "3x"
interface AppSettings { speed: SpeedKey; hard: boolean; activeValues: number[] }
type Segment = (typeof ALL_NOMINALS)[0]

// ─── Confetti ─────────────────────────────────────────────────────────────────
function Confetti({ active }: { active: boolean }) {
  if (!active) return null
  const pieces = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 0.6}s`,
    color: ["#FFD700", "#C0392B", "#27AE60", "#8E44AD", "#E67E22", "#2980B9"][i % 6],
    size: `${5 + Math.random() * 9}px`,
    dur: `${1.2 + Math.random() * 0.8}s`,
  }))
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map(p => (
        <div key={p.id} className="absolute top-0 rounded-sm" style={{
          left: p.left, width: p.size, height: p.size, background: p.color,
          animation: `cFall ${p.dur} ${p.delay} ease-in forwards`,
        }} />
      ))}
      <style>{`@keyframes cFall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}`}</style>
    </div>
  )
}

// ─── Wheel ────────────────────────────────────────────────────────────────────
function Wheel({ rotation, segments }: { rotation: number; segments: Segment[] }) {
  const size = 300, cx = 150, cy = 150, r = 142
  const count = segments.length
  const arc = (2 * Math.PI) / count
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full" style={{
        boxShadow: "0 0 40px 12px rgba(255,215,0,0.4), 0 0 80px 24px rgba(255,215,0,0.15)",
      }} />
      <svg width={size} height={size} style={{ transform: `rotate(${rotation}deg)`, transition: "none" }}>
        <circle cx={cx} cy={cy} r={r + 6} fill="#FFD700" />
        <circle cx={cx} cy={cy} r={r + 2} fill="#B8860B" />
        {segments.map((seg, i) => {
          // Offset by -arc/2 so segment i CENTER is at: i*arc - π/2
          // → segment 0 center is exactly at top (pointer) when rotation=0
          const a0 = i * arc - Math.PI / 2 - arc / 2
          const a1 = a0 + arc
          const x1 = cx + r * Math.cos(a0), y1 = cy + r * Math.sin(a0)
          const x2 = cx + r * Math.cos(a1), y2 = cy + r * Math.sin(a1)
          const mid = a0 + arc / 2
          const tx = cx + r * 0.65 * Math.cos(mid)
          const ty = cy + r * 0.65 * Math.sin(mid)
          return (
            <g key={i}>
              <path d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
                fill={seg.color} stroke="#00000022" strokeWidth={1} />
              <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle"
                fill={seg.textColor} fontSize={count > 8 ? 11 : 15} fontWeight="800"
                fontFamily="Nunito,sans-serif"
                transform={`rotate(${(mid * 180) / Math.PI + 90},${tx},${ty})`}>
                {seg.label}
              </text>
            </g>
          )
        })}
        <circle cx={cx} cy={cy} r={22} fill="#FFD700" />
        <circle cx={cx} cy={cy} r={16} fill="#B8860B" />
        <circle cx={cx} cy={cy} r={10} fill="#FFD700" />
      </svg>
      {/* Pointer */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10"
        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))" }}>
        <svg width="28" height="36" viewBox="0 0 28 36">
          <polygon points="14,36 0,0 28,0" fill="#FF3B30" />
          <polygon points="14,36 2,4 26,4" fill="#FF6B6B" opacity="0.4" />
        </svg>
      </div>
    </div>
  )
}

// ─── Result comments per value ───────────────────────────────────────────────
const COMMENTS: Record<number, string[]> = {
  2000: [
    "Wkwkwk... mayan buat bayar parkir motor! 🛵",
    "Haha, cukup buat beli es teh satu gelas! 🧋",
    "Wkwk jangan sedih, rejeki tetap rejeki! 😂",
    "Lumayan... buat nambah receh di dompet! 🪙",
    "Wkwkwk 2K? Nabung dulu ya bestie! 😭",
  ],
  5000: [
    "Yaa... cukup buat jajan gorengan 2 biji! 🧆",
    "Hmm, lumayan buat ongkos angkot! 🚌",
    "5K? Masih bisa beli kopi sachet kok! ☕",
    "Rezeki jangan ditolak, walaupun... ya gitu deh 😅",
    "Tenang, yang penting halal! Wkwk 😄",
  ],
  10000: [
    "Oke oke, cukup buat makan siang warteg! 🍛",
    "Lumayan! Bisa beli mie instan 3 bungkus 🍜",
    "Alhamdulillah, bisa buat jajan seharian! 😊",
    "10K? Masih bisa senyum lah! 😁",
    "Nggak jelek-jelek amat kok, gas spin lagi! 🔄",
  ],
  20000: [
    "Nah ini baru lumayan! Bisa traktir teman es krim 🍦",
    "20K! Cukup buat makan + minum di warteg 🍽️",
    "Alhamdulillah, rejeki anak soleh! 😇",
    "Mantap! Bisa buat bensin motor setengah liter ⛽",
    "Yesss! Lumayan buat nambah-nambah! 🙌",
  ],
  50000: [
    "Wih, 50K! Bisa traktir gebetan makan siang nih 😏",
    "Alhamdulillah! Lumayan buat belanja bulanan dikit 🛒",
    "Mantap jiwa! Langsung nabung atau jajan? 😄",
    "50K cuy! Rezeki nomplok hari ini! 🎉",
    "Nah ini baru namanya THR! Selamat ya! 🥳",
  ],
  100000: [
    "WIDIHH 100K?! SELAMAT BANGET YAAA!! 🎊🎊🎊",
    "JACKPOT! Kamu emang yang paling beruntung hari ini! 🏆",
    "ALHAMDULILLAH BANGET! Rezeki nggak kemana! 🌟",
    "WOW! 100K! Traktir kita semua dong! 😂🎉",
  ],
}

function getComment(value: number): string {
  const list = COMMENTS[value] ?? ["Selamat! Semoga berkah ya! 🌙"]
  return list[Math.floor(Math.random() * list.length)]
}


function FloatingDeco() {
  const items = [
    { e: "🌙", t: "8%",  l: "5%",  s: 40, d: "0s" },
    { e: "⭐", t: "15%", l: "88%", s: 28, d: "0.5s" },
    { e: "🕌", t: "75%", l: "4%",  s: 36, d: "1s" },
    { e: "✨", t: "80%", l: "90%", s: 24, d: "0.3s" },
    { e: "🌙", t: "45%", l: "92%", s: 22, d: "0.8s" },
    { e: "⭐", t: "60%", l: "3%",  s: 20, d: "1.2s" },
  ]
  return (
    <>
      <style>{`@keyframes fDeco{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(8deg)}}`}</style>
      {items.map((it, i) => (
        <div key={i} className="absolute select-none pointer-events-none opacity-25"
          style={{ top: it.t, left: it.l, fontSize: it.s, animation: `fDeco 4s ${it.d} ease-in-out infinite` }}>
          {it.e}
        </div>
      ))}
    </>
  )
}

// ─── Settings Modal ───────────────────────────────────────────────────────────
function SettingsModal({ settings, onSave, onClose }: {
  settings: AppSettings; onSave: (s: AppSettings) => void; onClose: () => void
}) {
  const [draft, setDraft] = useState<AppSettings>({ ...settings, activeValues: [...settings.activeValues] })

  const toggleNominal = (v: number) => setDraft(d => {
    const has = d.activeValues.includes(v)
    if (has && d.activeValues.length <= 2) return d
    return { ...d, activeValues: has ? d.activeValues.filter(x => x !== v) : [...d.activeValues, v] }
  })

  const chip = (active: boolean): React.CSSProperties => ({
    borderRadius: 12, padding: "10px 0", fontWeight: 700, fontSize: 13, cursor: "pointer",
    border: "2px solid", transition: "all 0.15s",
    background: active ? "#FFD70020" : "transparent",
    borderColor: active ? "#FFD700" : "#ffffff22",
    color: active ? "#FFD700" : "#ffffff55",
  })

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)" }}>
      <div className="rounded-3xl p-6 w-full max-w-sm shadow-2xl border-2" style={{ background: "#0f2010", borderColor: "#FFD70040" }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Settings size={18} color="#FFD700" />
            <span className="font-heading font-bold text-lg" style={{ color: "#FFD700" }}>Pengaturan</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <X size={16} color="#ffffff88" />
          </button>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#ffffff55" }}>Kecepatan Putaran</p>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {(["1x", "2x", "3x"] as SpeedKey[]).map(s => (
            <button key={s} onClick={() => setDraft(d => ({ ...d, speed: s }))} style={chip(draft.speed === s)}>
              <div>{s}</div>
              <div className="text-xs font-normal opacity-60">{s === "1x" ? "Lambat" : s === "2x" ? "Sedang" : "Cepat"}</div>
            </button>
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#ffffff55" }}>Tingkat Kesulitan</p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {[{ label: "Mudah", hard: false }, { label: "Sulit", hard: true }].map(opt => (
            <button key={opt.label} onClick={() => setDraft(d => ({ ...d, hard: opt.hard }))} style={chip(draft.hard === opt.hard)}>
              <div className="text-sm">{opt.label}</div>
              <div className="text-xs font-normal opacity-60">
                {opt.hard ? `${draft.activeValues.length * 2} potongan` : `${draft.activeValues.length} potongan`}
              </div>
            </button>
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#ffffff55" }}>
          Nominal Aktif <span className="normal-case font-normal">(Min. 2)</span>
        </p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {ALL_NOMINALS.map(n => (
            <button key={n.value} onClick={() => toggleNominal(n.value)} style={chip(draft.activeValues.includes(n.value))}>
              {n.label}
            </button>
          ))}
        </div>

        <button onClick={() => { onSave(draft); onClose() }}
          className="w-full h-12 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
          style={{ background: "#FFD700", color: "#1a1a1a" }}>
          Simpan & Tutup
        </button>
      </div>
    </div>
  )
}

// ─── Floating Menu ────────────────────────────────────────────────────────────
function FloatingMenu() {
  const [open, setOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", handler)
    return () => document.removeEventListener("fullscreenchange", handler)
  }, [])

  const handleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen()
    else document.exitFullscreen()
    setOpen(false)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: "Spin THR", url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link disalin!")
    }
    setOpen(false)
  }

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2">
      {open && (
        <div className="rounded-2xl p-4 shadow-2xl border w-52"
          style={{ background: "#fff", borderColor: "#e5e7eb" }}>
          <p className="text-xs mb-0.5" style={{ color: "#9ca3af" }}>Currently viewing</p>
          <p className="font-bold text-sm mb-3" style={{ color: "#111827" }}>Spin THR</p>
          <div className="flex flex-col gap-1">
            {[
              { icon: "🏠", label: "Back to Home", action: () => { window.location.href = "/" } },
              { icon: "⛶",  label: isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode", action: handleFullscreen },
              { icon: "↗",  label: "Share This Tool", action: handleShare },
            ].map(item => (
              <button key={item.label} onClick={item.action}
                className="flex items-center gap-2 px-2 py-2 rounded-xl text-sm font-medium text-left transition-colors hover:bg-gray-100 w-full"
                style={{ color: "#374151" }}>
                <span className="text-base w-5 text-center">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{ background: open ? "#374151" : "#4b5563" }}>
        <span className="text-white font-bold text-lg leading-none">{open ? "×" : "≡"}</span>
      </button>
    </div>
  )
}

// ─── Result Modal ─────────────────────────────────────────────────────────────
function ResultModal({ result, onClose }: { result: Segment; onClose: () => void }) {
  // Lock comment on first render — useRef prevents re-pick on re-renders
  const commentRef = useRef(getComment(result.value))
  const comment = commentRef.current
  const isBig = result.value >= 50000
  const is2K  = result.value === 2000

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center p-6"
      style={{ background: isBig ? "linear-gradient(135deg,#0d2e0d,#1a4a1a)" : is2K ? "linear-gradient(135deg,#1a0a0a,#2e1010)" : "linear-gradient(135deg,#0d1f2e,#0d2e1a)" }}>

      {/* Big emoji */}
      <div className="text-8xl mb-6 animate-bounce">
        {is2K ? "😂" : isBig ? "🤑" : "😊"}
      </div>

      {/* Nominal */}
      <p className="text-lg font-semibold mb-2" style={{ color: "#ffffff66" }}>Kamu dapat THR sebesar:</p>
      <p className="font-heading font-extrabold mb-6"
        style={{ color: "#FFD700", fontSize: "clamp(3rem, 15vw, 6rem)", lineHeight: 1 }}>
        {formatRupiah(result.value)}
      </p>

      {/* Comment — big and centered */}
      <p className="font-heading font-bold text-center mb-10 max-w-sm leading-snug"
        style={{ color: "#fff", fontSize: "clamp(1.1rem, 5vw, 1.6rem)" }}>
        {comment}
      </p>

      <button onClick={onClose}
        className="w-full max-w-xs py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
        style={{ background: isBig ? "linear-gradient(135deg,#FFD700,#FFA500)" : "linear-gradient(135deg,#27AE60,#1e8449)", color: isBig ? "#1a1a1a" : "#fff" }}>
        Spin Lagi
      </button>
    </div>
  )
}

export default function SpinTHRPage() {
  const [rotation, setRotation] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")
  const [result, setResult] = useState<Segment | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [settings, setSettings] = useState<AppSettings>({
    speed: "3x", hard: false,
    activeValues: [2000, 5000, 10000, 20000, 50000, 100000],
  })

  const rotRef   = useRef(0)
  const rafRef   = useRef<number | null>(null)
  const segsRef  = useRef<Segment[]>([])
  const settingsRef = useRef(settings)

  const segments = buildSegments(settings.activeValues, settings.hard)
  segsRef.current   = segments
  settingsRef.current = settings

  const cancelRaf = () => {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
  }

  // easeOut cubic
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

  const handleSpin = useCallback(() => {
    cancelRaf()
    const segs = segsRef.current
    const cfg  = settingsRef.current
    const segAngle = 360 / segs.length

    // Pick random target segment
    const targetIndex = Math.floor(Math.random() * segs.length)

    // Compute final rotation so that target segment center lands at pointer (top)
    // With our SVG offset, segment i center is at wheel-angle: i * segAngle - 90°
    // Pointer at top = -90° in wheel-space when rotation = 0
    // After rotating R degrees CW, pointer points to wheel-angle = -90 - R
    // We want: -90 - R ≡ targetIndex * segAngle - 90  (mod 360)
    // → R ≡ -targetIndex * segAngle  (mod 360)
    // → R = -targetIndex * segAngle + 360 * n  (choose n so R > current + minRotations*360)
    const targetWheelAngle = targetIndex * segAngle  // relative to -90° offset cancels
    const minExtraRot = ROTATIONS_MAP[cfg.speed] * 360
    const curMod = ((rotRef.current % 360) + 360) % 360
    let targetMod = ((-targetWheelAngle) % 360 + 360) % 360
    let delta = targetMod - curMod
    if (delta < 0) delta += 360
    // ensure minimum rotations
    delta += Math.ceil((minExtraRot - delta) / 360) * 360

    const startRot  = rotRef.current
    const finalRot  = startRot + delta
    const duration  = DURATION_MAP[cfg.speed]
    const startTime = performance.now()

    setPhase("spinning")
    setShowModal(false)
    setConfetti(false)

    function frame(now: number) {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = easeOut(t)
      const cur = startRot + delta * eased
      rotRef.current = cur
      setRotation(cur)

      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame)
      } else {
        rotRef.current = finalRot
        setRotation(finalRot)
        setPhase("idle")
        const seg = segs[targetIndex]
        setResult(seg)
        setShowModal(true)
        setConfetti(true)
        setTimeout(() => setConfetti(false), 3000)
      }
    }

    rafRef.current = requestAnimationFrame(frame)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => { setShowModal(false); setResult(null) }

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(135deg,#0d1f0d 0%,#1a3a1a 50%,#0d1f0d 100%)" }}>
      <FloatingDeco />
      <Confetti active={confetti} />

      {/* Settings btn */}
      <button
        onClick={() => { if (phase === "idle") setShowSettings(true) }}
        disabled={phase !== "idle"}
        className="fixed top-5 right-5 z-30 w-11 h-11 flex items-center justify-center rounded-full border transition-all hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ background: "#0f2010", borderColor: "#FFD70040" }}>
        <Settings size={18} color="#FFD700" />
      </button>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border text-xs font-semibold uppercase tracking-widest"
          style={{ background: "#FFD70015", borderColor: "#FFD70040", color: "#FFD700" }}>
          🌙 Idul Fitri 1446 H
        </div>
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl mb-2" style={{ color: "#FFD700" }}>Spin THR</h1>
      </div>

      {/* Wheel */}
      <div className="relative z-10 mb-8">
        <Wheel rotation={rotation} segments={segments} />
      </div>

      {/* Button */}
      <div className="relative z-10">
        <button
          onClick={handleSpin}
          disabled={phase !== "idle"}
          className="h-14 px-12 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          style={{ background: "linear-gradient(135deg,#FFD700,#FFA500)", color: "#1a1a1a", boxShadow: "0 4px 24px rgba(255,215,0,0.45)" }}>
          {phase === "spinning" ? "⏳ Berputar..." : "🎁 Mulai Putar!"}
        </button>
      </div>

      {showSettings && (
        <SettingsModal settings={settings} onSave={setSettings} onClose={() => setShowSettings(false)} />
      )}
      {showModal && result && (
        <ResultModal result={result} onClose={handleClose} />
      )}
      <FloatingMenu />
    </div>
  )
}
