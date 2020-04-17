/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss, Theme } from "../../theme"
import { getBadgeVariantStyles } from "./Badge.helpers"
import { BadgeText, BadgeTone, BadgeVariant, BadgeSize } from "./types"

const baseCss: ThemeCss = theme => ({
  alignItems: `center`,
  borderRadius: theme.radii[1],
  display: `inline-flex`,
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights.dense,
  padding: `${theme.space[1]} ${theme.space[3]}`,
  minHeight: theme.space[7],
})

export type BadgeProps = Omit<JSX.IntrinsicElements["span"], "ref"> & {
  variant?: BadgeVariant
  text?: BadgeText
  tone?: BadgeTone
  size?: BadgeSize
}

export function Badge({
  variant = `STATUS`,
  text = `CAPS`,
  tone = `BRAND`,
  size = `SMALL`,
  ...rest
}: BadgeProps) {
  return (
    <span
      css={(theme: Theme) => [
        baseCss(theme),
        text === "CAPS" && {
          textTransform: `uppercase`,
          fontWeight: 500,
          letterSpacing: theme.letterSpacings.tracked,
        },
        size === "MEDIUM" && {
          borderRadius: theme.radii[2],
          fontSize: theme.fontSizes[1],
          minHeight: `calc(${theme.space[2]} * 7)`,
          padding: `${theme.space[1]} ${theme.space[4]}`,
        },
        size === "MEDIUM" &&
          text === "CAPS" && {
            fontSize: theme.fontSizes[0],
          },
        getBadgeVariantStyles(variant, tone)(theme),
      ]}
      {...rest}
    />
  )
}
