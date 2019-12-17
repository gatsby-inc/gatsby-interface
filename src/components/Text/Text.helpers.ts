import tones from "../../theme/tones"
import fontSizes from "../../theme/fontSizes"
import fonts from "../../theme/fonts"
import { Interpolation } from "@emotion/css"
import { TextTone, TextSize, TextVariant } from "./types"

export const baseStyle = (tone: TextTone): Interpolation => {
  return {
    color: tones[tone].darker,
    fontFamily: fonts.system.join(`,`),
    fontWeight: `normal`,
  }
}

export const sizeStyles = (): Record<TextSize, Interpolation> => {
  return {
    S: {
      fontSize: fontSizes[1],
      lineHeight: 1.5,
    },
    M: {
      fontSize: fontSizes[2],
      lineHeight: 1.5,
    },
    L: {
      fontSize: fontSizes[3],
      lineHeight: 1.5,
    },
    XL: {
      fontSize: fontSizes[4],
      lineHeight: 1.5,
    },
    "2XL": {
      fontSize: fontSizes[5],
      lineHeight: 1.5,
    },
  }
}

export const variantStyles = (): Record<TextVariant, Interpolation> => {
  return {
    PRIMARY: {},

    EMPHASIZED: {
      fontWeight: `bold`,
    },
    LEDE: [
      sizeStyles()[`L`],
      {
        margin: `0.5rem 0 0`,
      },
    ],
    EMPHASIZED_LEDE: [
      sizeStyles()[`2XL`],
      {
        fontFamily: fonts.header.join(`,`),
        lineHeight: 1.3,
        margin: `1em 0 0`,
      },
    ],
    ERROR: {},
  }
}
