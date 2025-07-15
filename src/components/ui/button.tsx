import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-starken-blue text-white hover:bg-starken-blue-dark shadow-lg hover:shadow-xl border-0",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-lg border-0",
        outline: "border-2 border-starken-blue text-starken-blue bg-transparent hover:bg-starken-blue hover:text-white",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm border-0",
        ghost: "text-starken-blue hover:bg-starken-blue/10 border-0",
        link: "text-starken-blue underline-offset-4 hover:underline border-0",
        starken: "bg-gradient-to-r from-starken-blue to-starken-orange text-white hover:from-starken-blue-dark hover:to-starken-orange-dark shadow-xl hover:shadow-2xl border-0",
        luxury: "bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-600 text-white hover:from-luxury-gold-600 hover:to-luxury-gold-700 shadow-xl hover:shadow-2xl border-0",
        premium: "bg-gradient-to-r from-premium-blue-500 to-premium-blue-600 text-white hover:from-premium-blue-600 hover:to-premium-blue-700 shadow-xl hover:shadow-2xl border-0",
        property: "bg-gradient-to-r from-property-green-500 to-property-green-600 text-white hover:from-property-green-600 hover:to-property-green-700 shadow-xl hover:shadow-2xl border-0",
        construction: "bg-starken-orange text-white hover:bg-starken-orange-dark shadow-lg hover:shadow-xl border-0",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-2xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 