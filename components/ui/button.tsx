import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center h-14 px-8 font-bold text-sm uppercase tracking-wide border-4 border-black transition-all duration-100",
          "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
          variant === "primary" && "bg-neo-accent shadow-neo hover:bg-neo-accent/90",
          variant === "secondary" && "bg-neo-secondary shadow-neo hover:bg-neo-secondary/90",
          variant === "outline" && "bg-white shadow-neo hover:bg-neo-bg",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
