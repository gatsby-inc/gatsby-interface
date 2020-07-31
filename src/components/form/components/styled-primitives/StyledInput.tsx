/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../../../theme"
import {
  baseInputCss,
  inputWithLeftIconCss,
  inputLeftIconCss,
} from "../../styles"

export type StyledInputProps = import("@reach/utils").PropsWithAs<
  "input",
  {
    LeftIcon?: React.ComponentType<any>
  }
>

export const StyledInput = React.forwardRef<HTMLInputElement, StyledInputProps>(
  function InputFieldControl(
    { as: Component = `input`, LeftIcon, className, ...props },
    ref
  ) {
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
        {LeftIcon && (
          <LeftIcon css={inputLeftIconCss} size="inherit" aria-hidden />
        )}
        <Component
          ref={ref}
          css={baseCss}
          {...props}
          placeholder={placeholder}
        />
      </div>
    )
  }
)
