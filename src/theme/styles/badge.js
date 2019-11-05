import colors from "../colors"
import tones from "../tones"
import fontSizes from "../fontSizes"
import fonts from "../fonts"

import { breakpoints, radius, spaces } from "../"

const VARIANTS = [`PILL`, `STATUS`]
const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `NEUTRAL`]

const baseStyle = ({ tone }) => {
  return {
    borderRadius: radius.default,
    fontFamily: fonts.header.join(`,`),
    fontWeight: `bold`,
    lineHeight: 1,
  }
}

const variantStyles = {
  PILL: {
    background: colors.green[50],
    color: colors.white,
    fontSize: `13px`,
    letterSpacing: `0.05em`,
    padding: `4px 5px 2px`,
    textTransform: `uppercase`,
  },

  STATUS: {
    alignItems: `center`,
    background: colors.green[5],
    color: colors.green[50],
    display: `inline-flex`,
    fontSize: fontSizes[2],
    padding: `${spaces.xs} ${spaces.s}`,

    [`svg:last-child`]: {
      marginLeft: spaces[`2xs`],
    },
  },
}

export const styles = {
  baseStyle,
  variantStyles,
}

export const options = {
  VARIANTS,
  TONES,
}
