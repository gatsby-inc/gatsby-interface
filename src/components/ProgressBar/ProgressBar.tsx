/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Theme } from "../../theme"
import { CSSObject } from "@emotion/core"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

export type GetProgressColor = (theme: Theme, progression: number) => string

const defaultGetProgressColor: GetProgressColor = (
  theme: Theme,
  progression: number
) => {
  if (progression < 33) {
    return theme.colors.red[50]
  }

  if (progression < 66) {
    return theme.colors.orange[50]
  }

  return theme.colors.green[50]
}

const sharedPseudoCss = (
  theme: Theme,
  progression: number,
  getProgressColor: GetProgressColor
): CSSObject => ({
  content: "''",
  width: `${progression}%`,
  height: "6px",
  position: "absolute",
  backgroundColor: getProgressColor(theme, progression),
  borderRadius: theme.radii[5],
})

const progressCss = (
  theme: Theme,
  progression: number,
  getProgressColor: GetProgressColor
): CSSObject => ({
  display: "block",
  width: "100%",
  height: "6px",
  borderRadius: theme.radii[5],
  position: "relative",
  background: theme.colors.grey[20],

  "&:after": sharedPseudoCss(theme, progression, getProgressColor),
})

const secondProgressCss = (
  theme: Theme,
  progression: number,
  getProgressColor: GetProgressColor
): CSSObject => ({
  "&:before": sharedPseudoCss(theme, progression, getProgressColor),
})

export interface ProgressBarProps {
  max: number
  min?: number
  value: number
  "aria-describedby": string
  secondValue?: number
  getProgressColor?: GetProgressColor
  getSecondProgressColor?: GetProgressColor
  height?: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  max,
  min = 0,
  value,
  secondValue,
  getProgressColor = defaultGetProgressColor,
  getSecondProgressColor = defaultGetProgressColor,
  height = 6,
  ...props
}) => {
  const normalizedValue = value > max ? max : value < min ? min : value
  const progression = (normalizedValue / max) * 100

  let normalizedSecondValue: null | number = null
  let secondProgression: null | number = null

  if (secondValue) {
    normalizedSecondValue =
      secondValue > max ? max : secondValue < min ? min : secondValue
    secondProgression = (normalizedSecondValue / max) * 100
  }

  return (
    <div
      aria-describedby={props["aria-describedby"]}
      role="progressbar"
      aria-valuenow={normalizedValue}
      aria-valuemin={min}
      aria-valuemax={max}
      css={theme => [
        progressCss(theme, progression, getProgressColor),
        secondProgression &&
          secondProgressCss(theme, secondProgression, getSecondProgressColor),
        height && {
          height: `${height}px`,
          "&:before, &:after": {
            height: `${height}px`,
          },
        },
      ]}
    >
      <span css={visuallyHiddenCss}>
        {`${normalizedValue}/${max}${
          secondProgression ? `, ${normalizedSecondValue}/${max}` : ``
        }`}
      </span>
    </div>
  )
}
