/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { visuallyHiddenCss } from "../../stylesheets/a11y"
import { AtomTone } from "../../theme/types"
import { Theme } from "../../theme"
import ToggleGutter, {
  ToggleGutterTagName,
  toggleGutterCheckedCss,
  toggleGutterFocusCss,
} from "./ToggleGutter"
import { toggleLabelCss } from "./Toggle.styles"

type BaseToggleProps = Omit<JSX.IntrinsicElements["input"], "ref" | "type"> & {
  tone?: AtomTone
}

const BaseToggle = React.forwardRef<HTMLInputElement, BaseToggleProps>(
  function BaseToggle({ tone, className, style, ...rest }, ref) {
    return (
      <React.Fragment>
        <input
          ref={ref}
          type="checkbox"
          value="true"
          css={(theme: Theme) => [
            visuallyHiddenCss,
            {
              [`&:checked + ${ToggleGutterTagName}`]: toggleGutterCheckedCss(
                tone
              )(theme),
              [`&:focus + ${ToggleGutterTagName}`]: toggleGutterFocusCss(theme),
            },
          ]}
          {...rest}
        />
        <ToggleGutter className={className} style={style} />
      </React.Fragment>
    )
  }
)

export type ToggleCheckboxProps = Omit<
  BaseToggleProps,
  "label" | "ref" | "id"
> & {
  id: string
  label: React.ReactNode
  labelPosition?: "start" | "end"
}

export default React.forwardRef<HTMLInputElement, ToggleCheckboxProps>(
  function ToggleCheckbox(
    { id, label, labelPosition = "end", className, style, ...rest },
    ref
  ) {
    return (
      <label
        className={className}
        style={style}
        htmlFor={id}
        css={theme => [
          {
            display: `flex`,
            alignItems: `center`,
          },
          toggleLabelCss(theme),
        ]}
      >
        <BaseToggle
          ref={ref}
          id={id}
          {...rest}
          css={theme =>
            labelPosition === `end`
              ? {
                  marginRight: theme.space[3],
                }
              : {
                  marginLeft: theme.space[3],
                  order: 1,
                }
          }
        />
        {label}
      </label>
    )
  }
)
