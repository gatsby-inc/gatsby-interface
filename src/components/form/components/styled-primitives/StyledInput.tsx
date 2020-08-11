/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseInputCss, InputSize, getInputSizeCss } from "../../styles"

export type StyledInputProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "size"
> & {
  size?: InputSize
}

export const StyledInput = React.forwardRef<HTMLInputElement, StyledInputProps>(
  function InputFieldControl({ size = `M`, ...props }, ref) {
    const placeholder =
      props.placeholder && props.disabled
        ? `The field is disabled`
        : props.placeholder

    const baseCss: ThemeCss = theme => [
      baseInputCss(theme),
      getInputSizeCss(size)(theme),
      { width: `auto` },
    ]

    return (
      <input ref={ref} css={baseCss} {...props} placeholder={placeholder} />
    )
  }
)
