import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50",
        "hover:scale-105 active:scale-95",
        size === "sm" && "h-10 px-6 text-sm",
        size === "md" && "h-12 px-8 text-base",
        size === "lg" && "h-14 px-10 text-lg",
        variant === "primary" && "bg-primary text-[#FDA481] shadow-soft hover:shadow-lift",
        variant === "outline" && "border-2 border-[#FDA481] text-[#FDA481] bg-transparent hover:bg-[#FDA481]/10",
        variant === "ghost"   && "text-[#FDA481] bg-transparent hover:bg-[#FDA481]/10",
        className
      )}
      {...props}
    />
  )
)
Button.displayName = "Button"
