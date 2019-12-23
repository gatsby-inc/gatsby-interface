import colors from "../colors"

import fontSizes from "../fontSizes"
import fonts from "../fonts"

import radii from "../../theme/radii"
import space from "../../theme/space"

const VARIANTS = [`PILL`, `STATUS`]
const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `NEUTRAL`]

const baseStyle = () => {
  return {
    borderRadius: radii[2],
    fontFamily: fonts.header,
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
    padding: `${space[3]} ${space[4]}`,

    [`svg:last-child`]: {
      marginLeft: space[2],
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
