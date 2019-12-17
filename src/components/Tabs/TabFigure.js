/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import colors from "../../theme/colors"
import space from "../../theme/space"
import { fontFamilies } from "../../utils/presets"
import breakpoints from "../../theme/breakpoints"
import fontSizes from "../../theme/fontSizes"

const TabFigure = ({ children }) => (
  <span
    css={{
      alignItems: `center`,
      background: colors.grey[30],
      borderRadius: `50%`,
      color: colors.white,
      display: `flex`,
      fontFamily: fontFamilies.bodyFontFamily,
      fontSize: fontSizes[`3xs`],
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
