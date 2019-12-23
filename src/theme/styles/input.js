import colors from "../colors"

import radii from "../../theme/radii"
import fontSizes from "../../theme/fontSizes"
import space from "../../theme/space"

const input = {
  border: `1px solid ${colors.grey[30]}`,
  borderRadius: radii[2],
  color: colors.grey[90],
  fontSize: fontSizes[2],
  height: `2.25rem`,
  padding: `0 ${space[4]}`,
  width: `100%`,

  ":focus": {
    borderColor: colors.purple[40],
    boxShadow: `0 0 0 3px ${colors.purple[20]}`,
    outline: `0`,
    transition: `box-shadow 0.15s ease-in-out`,
  },
}

export default input
