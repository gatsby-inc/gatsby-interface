import { ThemeCss } from "../../theme"
import {
  BadgeTone,
  BadgeVariant,
  BadgeShape,
  BadgeSize,
  BadgeTextVariant,
} from "./types"

type GetVariantStylesFn = (tone: BadgeTone) => ThemeCss
type GetSizeStylesFn = (
  shape: BadgeShape,
  textVariant: BadgeTextVariant
) => ThemeCss

const variants: Record<BadgeVariant, GetVariantStylesFn> = {
  STATUS: tone => {
    return theme => [
      {
        background: theme.tones[tone].superLight,
        border: `1px solid ${theme.tones[tone].lighter}`,
        color: theme.tones[tone].darker,
      },
      (tone === "WARNING" || tone === "SUCCESS") && {
        color: theme.tones[tone].superDark,
      },
    ]
  },
  PILL: tone => {
    return theme => [
      {
        background: theme.tones[tone].dark,
        color: theme.colors.white,
      },
      tone === `WARNING` && {
        background: theme.colors.yellow[50],
        color: theme.colors.blackFade[70],
      },
      tone === `SUCCESS` && {
        background: theme.colors.green[80],
      },
    ]
  },
}

const sizes: Record<BadgeSize, GetSizeStylesFn> = {
  XXS: (shape, textVariant) => {
    return theme => [
      shape === "PILL" && {
        padding: `${theme.space[1]} calc(${theme.space[1]} * 3)`,
        borderRadius: theme.radii[5],
      },
      textVariant === "CAPS" && {
        fontSize: "0.625rem",
      },
    ]
  },
  XS: (shape, textVariant) => {
    return theme => [
      {
        padding: `0 ${theme.space[3]}`,
        minHeight: theme.space[6],
      },
      shape === "PILL" && {
        borderRadius: theme.radii[5],
      },
      textVariant === "CAPS" && {
        fontSize: "0.625rem",
      },
    ]
  },
  S: shape => {
    return theme => [
      {
        padding: `${theme.space[1]} ${theme.space[3]}`,
        minHeight: theme.space[7],
      },
      shape === `PILL` && {
        borderRadius: theme.radii[5],
      },
    ]
  },
  M: (shape, textVariant) => {
    return theme => [
      {
        borderRadius: theme.radii[2],
        fontSize: theme.fontSizes[1],
        minHeight: `calc(${theme.space[2]} * 7)`,
        padding: `${theme.space[1]} ${theme.space[4]}`,
      },
      shape === "PILL" && {
        borderRadius: theme.radii[5],
      },
      textVariant === "CAPS" && {
        fontSize: theme.fontSizes[0],
      },
    ]
  },
}

export function getBadgeVariantStyles(variant: BadgeVariant, tone: BadgeTone) {
  return variants[variant](tone)
}

export function getBadgeSizeStyles(
  size: BadgeSize,
  shape: BadgeShape,
  textVariant: BadgeTextVariant
) {
  return sizes[size](shape, textVariant)
}
