/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { visuallyHiddenCss } from "../../stylesheets/a11y"
import { AtomTone } from "../../theme/types"
import { Theme } from "../../theme"
import ToggleGutter from "./ToggleGutter"
import { toggleLabelCss } from "./Toggle.styles"

export type ToggleSwitchProps = Omit<
  JSX.IntrinsicElements["input"],
  "id" | "value"
> & {
  id: string
  value: string
  valueOn: string
  valueOff: string
  labelOn: React.ReactNode
  labelOff: React.ReactNode
  tone?: AtomTone
  className?: string
  style?: React.CSSProperties
}

export default function ToggleSwitch({
  id,
  valueOn,
  valueOff,
  labelOn,
  labelOff,
  value = valueOff,
  tone,
  className,
  style,
  ...rest
}: ToggleSwitchProps) {
  const optionOnId = `${id}__on`
  const optionOffId = `${id}__off`
  const isOn = value === valueOn

  return (
    <div
      id={id}
      className={className}
      style={style}
      css={theme => ({
        display: `flex`,
        alignItems: `center`,
        // We can rely on ""> span" here since we have full control over direct children
        [`&:focus-within > ${ToggleGutter.tagName}`]: ToggleGutter.getFocusCss(
          theme
        ),
      })}
    >
      <input
        type="radio"
        id={optionOffId}
        name={id}
        value={valueOff}
        checked={!isOn}
        css={visuallyHiddenCss}
        {...rest}
      />
      <label htmlFor={optionOffId} css={toggleLabelCss}>
        {labelOff}
      </label>
      <ToggleGutter
        css={(theme: Theme) => [
          { marginLeft: theme.space[3], marginRight: theme.space[3] },
          isOn && ToggleGutter.getCheckedCss(theme, tone),
        ]}
      />
      <input
        type="radio"
        id={optionOnId}
        name={id}
        value={valueOn}
        checked={isOn}
        css={visuallyHiddenCss}
        {...rest}
      />
      <label htmlFor={optionOnId} css={toggleLabelCss}>
        {labelOn}
      </label>
    </div>
  )
}
