import colors from "../colors"
import animations from "../animations"
import fontSizes from "../fontSizes"
import fonts from "../fonts"
import tones from "../tones"

import radii from "../../theme/radii"
import space from "../../theme/space"

const base = props => {
  const { loading = false, leftIcon, rightIcon } = props || {}

  return {
    alignItems: `center`,
    border: colors.grey[60],
    borderRadius: radii[2],
    boxSizing: `border-box`,
    cursor: `pointer`,
    display: `inline-flex`,
    fontFamily: fonts.header,
    justifyContent: `center`,
    transition: `background 0.5s, border 0.5s, color 0.5s`,
    lineHeight: `1`,
    textDecoration: `none`,

    "&[disabled], &[disabled]:hover": {
      cursor: `not-allowed`,
      opacity: !loading ? 0.5 : 0.9,
    },
    svg: {
      animation: loading
        ? `${animations.iconLoadingAnim} 1s linear infinite`
        : ``,
      flexShrink: `0`,
      margin: `0 ${space[2]}`,
      transform: `scale(1)`,
      marginRight: rightIcon || loading ? `-0.25em` : undefined,
      marginLeft: leftIcon ? `-0.30em` : undefined,
    },
    "&:hover:not([disabled])": {
      svg: {
        animation: !loading
          ? `${animations.iconHoverAnim} 1s linear infinite`
          : ``,
      },
    },
  }
}

const sizes = {
  S: {
    fontSize: fontSizes[1],
    minHeight: `1.6rem`,
    padding: `0.3rem 0.5rem`,
  },
  M: {
    fontSize: fontSizes[2],
    minHeight: `2rem`,
    padding: `0.45rem 0.75rem`,
  },
  L: {
    fontSize: fontSizes[3],
    minHeight: `2.4rem`,
    padding: `0.55rem 1rem`,
  },
  XL: {
    fontSize: fontSizes[5],
    minHeight: `3.25rem`,
    padding: `0.65rem 1.25rem`,
  },
}

const variants = {
  PRIMARY: ({ tone }) => {
    return {
      background: tones[tone].dark,
      border: `1px solid ${tones[tone].dark}`,
      color: colors.white,
      fontWeight: `bold`,
      ":hover": {
        background: tones[tone].darker,
        border: `1px solid ${tones[tone].darker}`,
      },
    }
  },
  SECONDARY: ({ tone }) => {
    return {
      background: `transparent`,
      border: `1px solid ${tones[tone].light}`,
      color: tones[tone].dark,
      ":hover": {
        borderColor: tones[tone].dark,
        color: tones[tone].dark,
      },
    }
  },
  GHOST: ({ tone }) => {
    return {
      background: `transparent`,
      border: `1px solid transparent`,
      color: tones[tone].dark,
      ":hover": {
        background: tones[tone].superLight,
        color: tones[tone].dark,
      },
    }
  },
}

const button = {
  base,
  sizes,
  variants,
}

export default button
