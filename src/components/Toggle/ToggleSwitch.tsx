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
  const inputOnRef = React.useRef<HTMLInputElement>(null)
  const inputOffRef = React.useRef<HTMLInputElement>(null)
  const optionOnId = `${id}__on`
  const optionOffId = `${id}__off`
  const isOn = value === valueOn

  const toggle = () => {
    const inputOn = inputOnRef.current
    const inputOff = inputOffRef.current

    if (!inputOn || !inputOff) {
      return
    }

    if (isOn) {
      inputOff.focus()
      inputOff.click()
    } else {
      inputOn.focus()
      inputOn.click()
    }
  }

  return (
    <div
      id={id}
      className={className}
      style={style}
      css={theme => [
        {
          display: `flex`,
          alignItems: `center`,
          // We can rely on "> ToggleGutterTagName" here since we have full control over direct children
          [`&:focus-within > ${ToggleGutterTagName}`]: toggleGutterFocusCss(
            theme
          ),
        },
        toggleLabelCss(theme),
      ]}
      onClick={e => {
        if (!inputOnRef.current || !inputOffRef.current) {
          return
        }
        const target = e.target as HTMLElement

        if (target.tagName === `LABEL`) {
          const inputOn = inputOnRef.current
          const inputOff = inputOffRef.current
          const labelFor = (target as HTMLLabelElement).htmlFor

          if (labelFor === optionOnId && isOn) {
            e.preventDefault()
            inputOff.focus()
            inputOff.click()
          }
          if (labelFor === optionOffId && !isOn) {
            e.preventDefault()
            inputOn.focus()
            inputOn.click()
          }
        } else if (target.tagName === ToggleGutterTagName.toUpperCase()) {
          toggle()
        }
      }}
      onKeyPress={e => {
        if (e.key !== " ") {
          return
        }
        toggle()
      }}
    >
      <input
        type="radio"
        id={optionOffId}
        name={id}
        value={valueOff}
        checked={!isOn}
        css={visuallyHiddenCss}
        ref={inputOffRef}
        {...rest}
      />
      <label htmlFor={optionOffId}>{labelOff}</label>
      <ToggleGutter
        css={(theme: Theme) => [
          { marginLeft: theme.space[3], marginRight: theme.space[3] },
          isOn && toggleGutterCheckedCss(tone)(theme),
        ]}
      />
      <input
        type="radio"
        id={optionOnId}
        name={id}
        value={valueOn}
        checked={isOn}
        css={visuallyHiddenCss}
        ref={inputOnRef}
        {...rest}
      />
      <label htmlFor={optionOnId}>{labelOn}</label>
    </div>
  )
}
