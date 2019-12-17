/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import colors from "../../theme/colors"
import { fontFamilies } from "../../utils/presets"
import fontSizes from "../../theme/fontSizes"
import space from "../../theme/space"
import ArrowRight from "../assets/ArrowRight"

const Breadcrumb = ({ children, ...rest }) => (
  <nav
    aria-label="breadcrumb"
    css={{
      display: `flex`,
      flexWrap: `wrap`,
    }}
    {...rest}
  >
    {children}
  </nav>
)

Breadcrumb.propTypes = {
  children: PropTypes.node,
}

Breadcrumb.Item = ({ active, to, children, onClick, ...rest }) => (
  <div
    css={{
      alignItems: `center`,
      color: active ? colors.grey[90] : colors.purple[50],
      display: `flex`,
      fontFamily: fontFamilies.headerFontFamily,
      fontSize: fontSizes[3],
      marginRight: space[4],
      "&:last-of-type": {
        marginRight: `0`,
        svg: {
          display: `none`,
        },
      },
      svg: {
        fill: active ? colors.grey[90] : colors.purple[50],
        marginLeft: space[4],
        verticalAlign: `middle`,
      },
    }}
    {...rest}
  >
    {to ? (
      <Fragment>
        <Link
          to={to}
          onClick={onClick}
          css={{
            textDecoration: `none`,
            color: `inherit`,
          }}
        >
          {children}
        </Link>
        <ArrowRight />
      </Fragment>
    ) : (
      <Fragment>
        {children} <ArrowRight />
      </Fragment>
    )}
  </div>
)

Breadcrumb.Item.propTypes = {
  active: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.node,
}

export default Breadcrumb
