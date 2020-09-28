/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { ThemeCss, Theme } from "../../theme"

const baseCss: ThemeCss = theme => ({
  display: `inline-block`,
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights.solid,
  fontWeight: theme.fontWeights.semiBold,
  backgroundColor: theme.colors.grey[20],
  color: theme.colors.grey[60],
  paddingLeft: `calc(3 * ${theme.space[1]})`,
  paddingRight: `calc(3 * ${theme.space[1]})`,
  paddingTop: theme.space[1],
  paddingBottom: theme.space[1],
  borderRadius: `10px`,
})

const toneCss: Record<NumberBadgeTone, ThemeCss> = {
  DANGER: theme => ({
    backgroundColor: theme.tones.DANGER.lighter,
    color: theme.tones.DANGER.superDark,
  }),
  WARNING: theme => ({
    backgroundColor: theme.tones.WARNING.light,
    color: theme.tones.WARNING.textInverted,
  }),
  NEUTRAL: theme => ({
    backgroundColor: theme.tones.NEUTRAL.light,
    color: theme.tones.NEUTRAL.dark,
  }),
}

export type NumberBadgeTone = `DANGER` | `WARNING` | `NEUTRAL`

export type NumberBadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  tone?: NumberBadgeTone
}

export function NumberBadge({ tone = `NEUTRAL`, ...rest }: NumberBadgeProps) {
  return (
    <span
      css={(theme: Theme) => [baseCss(theme), toneCss[tone](theme)]}
      {...rest}
    />
  )
}
