/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import colors from "../../theme/colors"
import space from "../../theme/space"
import fonts from "../../theme/fonts"
import breakpoints from "../../theme/breakpoints"

const TabFigure = ({ children }) => (
  <span
    css={{
      alignItems: `center`,
      background: colors.grey[30],
      borderRadius: `50%`,
      color: colors.white,
      display: `flex`,
      fontFamily: fonts.system,
      fontSize: `0.6875rem`,
      fontWeight: `bold`,
      height: `20px`,
      justifyContent: `center`,
      lineHeight: `1`,
      width: `20px`,
      ".active &": {
        background: colors.purple[40],
        marginRight: space[4],
      },
      ".done &": {
        background: colors.purple[30],
      },
      [`@media (min-width: ${breakpoints.tablet}px)`]: {
        marginRight: space[4],
      },
    }}
  >
    {children}
  </span>
)

TabFigure.propTypes = {
  children: PropTypes.node,
}

export default TabFigure
