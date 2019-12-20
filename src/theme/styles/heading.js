import tones from "../tones"

import fonts from "../fonts"

const VARIANTS = [`PRIMARY`, `EMPHASIZED`, `LIGHT`]
const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `NEUTRAL`]

const baseStyle = ({ tone }) => {
  return {
    fontFamily: fonts.header,
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
