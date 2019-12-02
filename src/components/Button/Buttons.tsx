import React from "react"
import { Button, ButtonProps } from "./Button"

function createButtonVariant(defaultProps: Partial<ButtonProps> = {}) {
  return React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <Button {...defaultProps} {...props} ref={ref} />
  ))
}

export const PrimaryButton = createButtonVariant()

export const SecondaryButton = createButtonVariant({ variant: `SECONDARY` })

export const CancelButton = createButtonVariant({
  variant: `SECONDARY`,
  tone: `NEUTRAL`,
})

export const SuccessButton = createButtonVariant({ tone: `SUCCESS` })

export const TextButton = createButtonVariant({ variant: `GHOST` })

export const PrimaryDeleteButton = createButtonVariant({
  variant: `PRIMARY`,
  tone: `DANGER`,
})

export const SecondaryDeleteButton = createButtonVariant({
  variant: `SECONDARY`,
  tone: `DANGER`,
})
