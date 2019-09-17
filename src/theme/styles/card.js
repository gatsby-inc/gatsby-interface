import colors from "../colors"

import { spaces } from "../../utils/presets"

const card = {
  frame: {
    background: colors.primaryBackground,
    borderRadius: spaces[`2xs`],
    boxShadow: `0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08)`,
  },
  space: {
    header: {
      padding: `${spaces.l} ${spaces[`2xl`]} ${spaces.xl}`,
    },
    row: {
      padding: `${spaces.m} ${spaces[`2xl`]}`,
    },
    activeRow: {
      padding: `${spaces.xl} ${spaces[`2xl`]} ${spaces[`2xl`]}`,
    },
    M: {
      padding: `${spaces.m} ${spaces[`2xl`]}`,
    },
    L: {
      padding: `${spaces.l} ${spaces[`2xl`]} ${spaces.xl}`,
    },
    XL: {
      padding: `${spaces.xl} ${spaces[`2xl`]} ${spaces[`2xl`]}`,
    },
  },
}

export default card
