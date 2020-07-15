/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import { baseInputCss } from "../../styles"

const leftIconCss: ThemeCss = theme => ({
  position: `absolute`,
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[3],
  top: `calc((100% - ${theme.fontSizes[3]}) / 2)`,
  margin: `0 ${theme.space[3]}`,
  zIndex: 2,
})

const inputWithLeftIconCss: ThemeCss = theme => ({
  // offset padding based on left icon spacing and size
  paddingLeft: `calc(${theme.fontSizes[3]} + 2 * ${theme.space[3]})`,
})

export type StyledInputProps = React.ComponentPropsWithRef<"input"> & {
  LeftIcon?: React.ComponentType<any>
}

export const StyledInput = React.forwardRef<HTMLInputElement, StyledInputProps>(
  function InputFieldControl({ LeftIcon, className, ...props }, ref) {
    const placeholder =
      props.placeholder && props.disabled
        ? `The field is disabled`
        : props.placeholder

    const baseCss: ThemeCss = theme => [
      baseInputCss(theme),
      { width: `100%` },
      LeftIcon && inputWithLeftIconCss(theme),
    ]

    return (
      <div className={className} css={{ position: `relative` }}>
        {LeftIcon && <LeftIcon css={leftIconCss} size="inherit" aria-hidden />}
        <input ref={ref} css={baseCss} {...props} placeholder={placeholder} />
      </div>
    )
  }
)
