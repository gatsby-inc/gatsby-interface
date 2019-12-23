import colors from "../colors"
import card from "./card"

import breakpoints from "../../theme/breakpoints"
import space from "../../theme/space"

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
      padding: `${space[5]} ${space[7]} ${space[5]} ${space[5]}`,
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        padding: `${space[5]} ${space[7]} ${space[5]} ${space[5]}`,
      },
    }
  },
  SECONDARY: toneColors => {
    return {
      background: toneColors.superLight,
      padding: `${space[5]} ${space[7]}`,
      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        padding: `${space[7]} ${space[9]}`,
      },
    }
  },
}

const notification = {
  base,
  variants,
}

export default notification
