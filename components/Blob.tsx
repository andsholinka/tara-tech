import { cn } from "@/lib/utils"

const shapes = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "40% 60% 70% 30% / 40% 70% 30% 60%",
  "50% 50% 30% 70% / 30% 60% 40% 70%",
  "70% 30% 50% 50% / 50% 40% 60% 50%",
]

interface BlobProps {
  shape?: 0 | 1 | 2 | 3
  color?: string
  className?: string
}

export default function Blob({ shape = 0, color = "bg-primary/10", className }: BlobProps) {
  return (
    <div
      className={cn("absolute blur-3xl pointer-events-none", color, className)}
      style={{ borderRadius: shapes[shape] }}
    />
  )
}
