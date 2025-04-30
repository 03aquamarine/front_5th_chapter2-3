import { forwardRef } from "react"
import { ButtonProps, buttonVariants } from "../model/type"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={buttonVariants({ variant, size, className })} ref={ref} {...props} />
})

Button.displayName = "Button"
