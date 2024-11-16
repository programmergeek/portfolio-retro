import { cva, VariantProps } from 'class-variance-authority'
import { Slot } from "@radix-ui/react-slot"
import React from 'react'

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center relative justify-center transition-all font-dm-mono rounded-md active:-translate-y-0 hover:-translate-y-2 after:absolute after:h-full after:w-full after:top-1/3 after:-z-50 hover:after:top-1/2 after:transition-all after:rounded-md active:after:-translate-y-2 hover:after:-z-50 before:absolute before:w-full before:h-full before:rounded-md before:-z-10 before:border",
  {
    variants: {
      variant: {
        primary: "before:bg-rouge-300 before:border-rouge-400 text-rouge-800 z-50 hover:z-50 active:bg-rouge-400 after:bg-rouge-400",
        secondary: "before:bg-rouge-200 before:border-rouge-300 text-rouge-600 z-50 active:bg-rouge-300 after:bg-rouge-300"
      },
      size: {
        default: 'px-4 py-2'
      }
    }
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
