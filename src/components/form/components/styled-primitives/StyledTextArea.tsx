/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseInputCss, InputSize, getInputSizeCss } from "../../styles"

export type StyledTextAreaProps = Omit<
  React.ComponentPropsWithRef<"textarea">,
  "size"
> & {
  size?: InputSize
}

export const StyledTextArea = React.forwardRef<
  HTMLTextAreaElement,
  StyledTextAreaProps
>(function StyledTextArea({ size = `M`, ...props }, ref) {
  const placeholder =
    props.placeholder && props.disabled
      ? `The field is disabled`
      : props.placeholder

  const baseCss: ThemeCss = theme => [
    baseInputCss(theme),
    getInputSizeCss(size)(theme),
    {
      display: `block`,
      minHeight: `4.85em`,
      resize: `vertical`,
      padding: `${theme.space[2]} ${theme.space[3]}`,
    },
  ]

  return (
    <textarea ref={ref} css={baseCss} {...props} placeholder={placeholder} />
  )
})
