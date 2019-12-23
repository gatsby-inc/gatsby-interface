import colors from "../colors"

import space from "../../theme/space"

const card = {
  frame: {
    background: colors.primaryBackground,
    borderRadius: space[2],
    boxShadow: `0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08)`,
  },
  space: {
    header: {
      padding: `${space[7]} ${space[9]} ${space[8]}`,
    },
    row: {
      padding: `${space[5]} ${space[9]}`,
    },
    activeRow: {
      padding: `${space[8]} ${space[9]} ${space[9]}`,
    },
    M: {
      padding: `${space[5]} ${space[9]}`,
    },
    L: {
      padding: `${space[7]} ${space[9]} ${space[8]}`,
    },
    XL: {
      padding: `${space[8]} ${space[9]} ${space[9]}`,
    },
  },
}

export default card
