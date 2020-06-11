/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseInputCss } from "../../styles"

export type StyledInputProps = React.ComponentPropsWithRef<"input">

export const StyledInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input">
>(function InputFieldControl(props, ref) {
  const placeholder =
    props.placeholder && props.disabled
      ? `The field is disabled`
      : props.placeholder

  const baseCss: ThemeCss = theme => [baseInputCss(theme), { width: `auto` }]

  return <input ref={ref} css={baseCss} {...props} placeholder={placeholder} />
})
