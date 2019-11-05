import colors from "../colors"
import tones from "../tones"
import fontSizes from "../fontSizes"
import fonts from "../fonts"

import { breakpoints, radius, spaces } from "../"

const VARIANTS = [`PRIMARY`, `EMPHASIZED`, `LIGHT`]
const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `NEUTRAL`]

const baseStyle = ({ tone }) => {
  return {
    fontFamily: fonts.header.join(`,`),
    margin: `0`,
    color: tones[tone].superDark,
    lineHeight: 1.125,
  }
}

const variantStyles = ({ tone }) => {
  return {
    PRIMARY: {
      fontWeight: `bold`,
    },

    EMPHASIZED: {
      fontWeight: 800,
    },

    LIGHT: {
      fontWeight: 100,
      textTransform: `uppercase`,
      color: tones[tone].dark,
    },
  }
}

export const styles = {
  baseStyle,
  variantStyles,
  // sizes,
}

export const options = {
  VARIANTS,
  TONES,
}
