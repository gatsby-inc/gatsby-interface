/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss, Theme } from "../../theme"

const baseCss: ThemeCss = theme => ({
  alignItems: `center`,
  borderRadius: theme.radii[2],
  display: `inline-flex`,
  fontFamily: theme.fonts.body,
  fontWeight: theme.fontWeights.semiBold,
  lineHeight: theme.lineHeights.dense,
})

const variantCss: Record<BadgeVariant, ThemeCss> = {
  PILL: theme => ({
    background: theme.colors.green[50],
    color: theme.colors.white,
    fontSize: theme.fontSizes[0],
    letterSpacing: theme.letterSpacings.tracked,
    padding: `${theme.space[1]} ${theme.space[3]}`,
    minHeight: theme.space[7],
    textTransform: `uppercase`,
  }),
  STATUS: theme => ({
    background: theme.colors.green[5],
    color: theme.colors.green[50],
    fontSize: theme.fontSizes[1],
    minHeight: theme.space[8],
    padding: `${theme.space[1]} ${theme.space[4]}`,
  }),
}

export type BadgeVariant = `PILL` | `STATUS`

export type BadgeProps = Omit<JSX.IntrinsicElements["span"], "ref"> & {
  variant?: BadgeVariant
}

export function Badge({ variant = `STATUS`, ...rest }: BadgeProps) {
  return (
    <span
      css={(theme: Theme) => [baseCss(theme), variantCss[variant](theme)]}
      {...rest}
    />
  )
}
