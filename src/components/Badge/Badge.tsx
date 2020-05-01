/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss, Theme } from "../../theme"
import { getBadgeVariantStyles, getBadgeSizeStyles } from "./Badge.helpers"
import {
  BadgeTextVariant,
  BadgeTone,
  BadgeVariant,
  BadgeSize,
  BadgeShape,
} from "./types"
import { iconHeightBySize } from "../icons/IconSkeleton"

const iconSizeValues: Record<BadgeSize, string> = {
  XXS: iconHeightBySize.inherit,
  XS: iconHeightBySize.xxsmall,
  S: iconHeightBySize.xxsmall,
  M: iconHeightBySize.xsmall,
}

const baseCss: ThemeCss = theme => ({
  alignItems: `center`,
  borderRadius: theme.radii[1],
  display: `inline-flex`,
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights.solid,
  padding: `${theme.space[1]} ${theme.space[2]}`,
  minHeight: theme.space[5],
})

export type BadgeProps = Omit<JSX.IntrinsicElements["span"], "ref"> & {
  children?: React.ReactNode
  Icon?: React.ComponentType<any>
  variant?: BadgeVariant
  textVariant?: BadgeTextVariant
  tone?: BadgeTone
  size?: BadgeSize
  shape?: BadgeShape
}

export function Badge({
  children,
  Icon,
  variant = `STATUS`,
  textVariant = `CAPS`,
  tone = `BRAND`,
  size = `S`,
  shape = `DEFAULT`,
  ...rest
}: BadgeProps) {
  return (
    <span
      css={(theme: Theme) => [
        baseCss(theme),
        textVariant === "CAPS" && {
          textTransform: `uppercase`,
          fontWeight: 500,
          letterSpacing: theme.letterSpacings.tracked,
        },
        textVariant === "EMPHASIZED" && {
          fontWeight: theme.fontWeights.semiBold,
        },
        getBadgeSizeStyles(size, shape, textVariant)(theme),
        getBadgeVariantStyles(variant, tone)(theme),
      ]}
      {...rest}
    >
      {Icon && (
        <Icon
          css={(theme: Theme) => [
            {
              marginRight: size === "M" ? theme.space[3] : theme.space[2],
              color: theme.tones[tone].medium,
              flexShrink: 0,
              width: iconSizeValues[size],
              height: iconSizeValues[size],
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
