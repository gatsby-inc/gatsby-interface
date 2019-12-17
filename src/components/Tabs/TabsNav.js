/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import breakpoints from "../../theme/breakpoints"
import dimensions from "../../theme/dimensions"

const TabsNav = ({ children }) => (
  <nav
    css={{
      display: `flex`,
      flexDirection: `column`,
      margin: `0 auto -1px auto`,
      padding: `0 ${dimensions.pagePadding.mobile}`,
      width: `100%`,
      [`@media (min-width: ${breakpoints.tablet}px)`]: {
        flexDirection: `row`,
        padding: `0 ${dimensions.pagePadding.tablet}`,
      },
    }}
  >
    {children}
  </nav>
)

TabsNav.propTypes = {
  children: PropTypes.node,
}

export default TabsNav
