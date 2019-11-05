import colors from "../colors"
import card from "./card"

import { breakpoints, spaces } from "../"

const base = {
  display: `flex`,
  justifyContent: `space-between`,
  flexWrap: `wrap`,
  width: `100%`,
}

const variants = {
  PRIMARY: toneColors => {
    return {
      ...card.frame,
      alignItems: `center`,
      background: colors.white,
      borderLeft: `10px solid ${toneColors.dark}`,
      padding: `${spaces.m} ${spaces.l} ${spaces.m} ${spaces.m}`,
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        padding: `${spaces.m} ${spaces.l} ${spaces.m} ${spaces.m}`,
      },
    }
  },
  SECONDARY: toneColors => {
    return {
      background: toneColors.superLight,
      padding: `${spaces.m} ${spaces.l}`,
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        padding: `${spaces.l} ${spaces[`2xl`]}`,
      },
    }
  },
}

const notification = {
  base,
  variants,
}

export default notification
