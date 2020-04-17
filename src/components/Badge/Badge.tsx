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
  children?: React.ReactNode
  Icon?: React.ComponentType<any>
  variant?: BadgeVariant
  text?: BadgeText
  tone?: BadgeTone
  size?: BadgeSize
}

export function Badge({
  children,
  Icon,
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
    >
      {Icon && (
        <Icon
          css={(theme: Theme) => [
            {
              marginRight: size === "SMALL" ? theme.space[2] : theme.space[3],
              fontSize: theme.fontSizes[2],
              color: theme.tones[tone].medium,
              flexShrink: 0,
              width: "auto",
              height: "1em",
            },
            variant === `PILL` && {
              color: theme.colors.whiteFade[90],
            },
            variant === `PILL` &&
              tone === `WARNING` && {
                color: theme.colors.blackFade[90],
              },
          ]}
        />
      )}
      {children}
    </span>
  )
}
