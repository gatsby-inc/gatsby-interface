/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss, Theme } from "../../theme"

const baseCss: ThemeCss = theme => ({
  borderRadius: theme.radii[2],
  fontFamily: theme.fonts.heading,
  fontWeight: `bold`,
  lineHeight: 1,
})

const variantCss: Record<BadgeVariant, ThemeCss> = {
  PILL: theme => ({
    background: theme.colors.green[50],
    color: theme.colors.white,
    fontSize: theme.fontSizes[1],
    letterSpacing: `0.05em`,
    padding: `${theme.space[3]} ${theme.space[3]} ${theme.space[2]}`,
    textTransform: `uppercase`,
  }),

  STATUS: theme => ({
    alignItems: `center`,
    background: theme.colors.green[5],
    color: theme.colors.green[50],
    display: `inline-flex`,
    fontSize: theme.fontSizes[2],
    padding: `${theme.space[3]} ${theme.space[4]}`,
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
