import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "border border-red-500 bg-transparent text-destructive-foreground hover:bg-destructive hover:text-white transition duration-300 ease-in-out focus:outline-none",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary text-base hover:font-semibold focus:outline-none",
        share: "border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out focus:outline-none",
      },
      size: {
        default: "h-10 rounded px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "text-base px-2 py-2 text-neutral-400 rounded hover:bg-accent hover:font-semibold",
        pill: "rounded-full text-xs py-0.5 px-2.5",
        pillIcon: "inline-block rounded-full text-xs pb-0 pt-0.5 pl-2.5 pr-1 leading-none",
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
    const Comp = asChild ? Slot : "button"
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
