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
  borderRadius: theme.radii[5],
})

const borderStyle: ThemeCss = _ => ({
  borderWidth: `1px`,
  borderStyle: `solid`,
})

const colorsCss: Record<NumberBadgeTone, ThemeCss> = {
  SUCCESS: theme => ({
    backgroundColor: theme.tones.SUCCESS.lighter,
    color: theme.tones.SUCCESS.superDark,
  }),
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

const borderCss: Record<NumberBadgeTone, ThemeCss> = {
  SUCCESS: theme => ({
    borderColor: theme.tones.SUCCESS.darker,
  }),
  DANGER: theme => ({
    borderColor: theme.tones.DANGER.darker,
  }),
  WARNING: theme => ({
    borderColor: theme.tones.WARNING.darker,
  }),
  NEUTRAL: theme => ({
    borderColor: theme.tones.NEUTRAL.darker,
  }),
}

export type NumberBadgeTone = `SUCCESS` | `DANGER` | `WARNING` | `NEUTRAL`

export type NumberBadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  tone?: NumberBadgeTone
  withBorder?: boolean
}

export function NumberBadge({
  tone = `NEUTRAL`,
  withBorder = false,
  ...rest
}: NumberBadgeProps) {
  return (
    <span
      css={(theme: Theme) => [
        baseCss(theme),
        colorsCss[tone](theme),
        withBorder && [borderStyle(theme), borderCss[tone](theme)],
      ]}
      {...rest}
    />
  )
}
