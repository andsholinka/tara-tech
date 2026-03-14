import * as React from "react"
import { cn } from "@/lib/utils"

// Asymmetric radius patterns — cycles through 6 variants for organic feel
const radiusVariants = [
  "rounded-tl-[4rem] rounded-tr-[2rem] rounded-br-[4rem] rounded-bl-[2rem]",
  "rounded-tl-[2rem] rounded-tr-[4rem] rounded-br-[2rem] rounded-bl-[4rem]",
  "rounded-tl-[3rem] rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[3rem]",
  "rounded-tl-[2rem] rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-[2rem]",
  "rounded-tl-[4rem] rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[2rem]",
  "rounded-[2rem]",
]

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Card({ className, variant = 5, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "border shadow-soft",
        "hover:-translate-y-1 hover:shadow-lift transition-all duration-300",
        radiusVariants[variant],
        className
      )}
      style={{ background: '#181A2F', borderColor: '#37415C' }}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-8 pb-4", className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-heading text-xl font-bold text-fg leading-snug", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-8 pb-8", className)} {...props} />
}
