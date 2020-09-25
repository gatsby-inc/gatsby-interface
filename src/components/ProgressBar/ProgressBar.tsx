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

const progressCss = (
  theme: Theme,
  progression: number,
  getProgressColor: GetProgressColor
): CSSObject => ({
  display: "block",
  width: "100%",
  height: "6px",
  borderRadius: theme.radii[2],
  position: "relative",

  "&:before": {
    content: "''",
    width: `${progression}%`,
    height: "6px",
    position: "absolute",
    backgroundColor: getProgressColor(theme, progression),
    borderRadius: theme.radii[2],
  },

  background: theme.colors.grey[20],
})

export interface ProgressBarProps {
  max: number
  min?: number
  value: number
  "aria-describedby": string
  getProgressColor?: GetProgressColor
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  max,
  min = 0,
  value,
  getProgressColor = defaultGetProgressColor,
  ...props
}) => {
  const normalizedValue = value > max ? max : value < min ? min : value
  const progression = (normalizedValue / max) * 100

  return (
    <div
      aria-describedby={props["aria-describedby"]}
      role="progressbar"
      aria-valuenow={normalizedValue}
      aria-valuemin={min}
      aria-valuemax={max}
      css={theme => progressCss(theme, progression, getProgressColor)}
    >
      <span css={visuallyHiddenCss}>
        {normalizedValue}/{max}
      </span>
    </div>
  )
}
