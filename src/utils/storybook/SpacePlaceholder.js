/** @jsx jsx */
import { jsx } from "@emotion/core"

import colors from "../../theme/colors"

const SpacePlaceholder = ({
  hint = `content placeholder`,
  width = `100%`,
  height = `6rem`,
}) => (
  <div
    css={{
      alignItems: `center`,
      background: colors.grey[5],
      color: colors.grey[50],
      display: `flex`,
      height: height,
      justifyContent: `center`,
      width: width,
    }}
  >
    {hint}
  </div>
)

export default SpacePlaceholder
