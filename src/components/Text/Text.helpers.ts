import { TextTone, TextSize, TextVariant } from "./types"
import { ThemeCss } from "../../theme"

export const baseStyle = (tone: TextTone): ThemeCss => {
  return theme => ({
    color: theme.tones[tone].darker,
    fontFamily: theme.fonts.system,
    fontWeight: `normal`,
  })
}

export const sizeStyles: Record<TextSize, ThemeCss> = {
  S: theme => ({
    fontSize: theme.fontSizes[1],
    lineHeight: theme.lineHeights.default,
  }),
  M: theme => ({
    fontSize: theme.fontSizes[2],
    lineHeight: theme.lineHeights.default,
  }),
  L: theme => ({
    fontSize: theme.fontSizes[3],
    lineHeight: theme.lineHeights.default,
  }),
  XL: theme => ({
    fontSize: theme.fontSizes[4],
    lineHeight: theme.lineHeights.default,
  }),
  "2XL": theme => ({
    fontSize: theme.fontSizes[5],
    lineHeight: theme.lineHeights.default,
  }),
}

export const variantStyles: Record<TextVariant, ThemeCss> = {
  PRIMARY: () => ({}),
  EMPHASIZED: () => ({
    fontWeight: `bold`,
  }),
  LEDE: theme => [
    sizeStyles[`L`](theme),
    {
      margin: `${theme.space[3]} 0 0`,
    },
  ],
  EMPHASIZED_LEDE: theme => [
    sizeStyles[`2XL`](theme),
    {
      fontFamily: theme.fonts.heading,
      lineHeight: theme.lineHeights.dense,
      margin: `${theme.space[5]} 0 0`,
    },
  ],
  ERROR: () => ({}),
}
