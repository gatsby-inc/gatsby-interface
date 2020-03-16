/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import colors from "../../theme/colors"
import space from "../../theme/space"
import breakpoints from "../../theme/breakpoints"
import fontSizes from "../../theme/fontSizes"
import radii from "../../theme/radii"
import fonts from "../../theme/fonts"

export const baseStyles = {
  alignItems: `center`,
  borderRadius: `${radii[2]} ${radii[2]} 0 0`,
  color: colors.purple[50],
  display: `inline-flex`,
  fontFamily: fonts.heading,
  fontSize: fontSizes[3],
  fontWeight: `bold`,
  height: `3.5rem`,
  margin: `0 ${space[2]}`,
  padding: `${space[1]} ${space[5]} 0`,
  position: `relative`,
  zIndex: `0`,
  a: {
    alignItems: `center`,
    display: `flex`,
    textDecoration: `none`,
    "&:active": {
      color: `inherit`,
    },
  },
  "&.active": {
    zIndex: `2`,
    ":before, :after": {
      border: `1px solid ${colors.standardLine}`,
      bottom: `-1px`,
      content: `""`,
      height: `6px`,
      position: `absolute`,
      width: `6px`,
    },
    ":before": {
      borderBottomRightRadius: `6px`,
      borderWidth: `0 1px 1px 0`,
      boxShadow: `2px 2px 0 #fff`,
      left: `-6px`,
    },
    ":after": {
      borderBottomLeftRadius: `6px`,
      borderWidth: `0 0 1px 1px`,
      boxShadow: `-2px 2px 0 #fff`,
      right: `-6px`,
    },
  },
  [`@media (min-width: ${breakpoints.phablet}px)`]: {
    padding: `${space[1]} ${space[7]} 0`,
  },
}

const Tab = ({ className, to, onClick, children, variant = `DEFAULT` }) => {
  const tabStyles = {
    DEFAULT: {
      border: `1px solid ${colors.standardLine}`,
      color: colors.purple[50],
      "&.active": {
        background: colors.secondaryBackground,
        borderBottomColor: colors.secondaryBackground,
        color: colors.grey[90],
      },
    },
    NUMBERED: {
      background: colors.secondaryBackground,
      border: `1px solid ${colors.standardLine}`,
      color: colors.grey[40],
      a: {
        color: colors.purple[40],
        textDecoration: `none`,
        alignItems: `center`,
        display: `flex`,
      },
      "&.active": {
        background: colors.primaryBackground,
        borderBottomColor: colors.secondaryBackground,
        color: colors.grey[90],
        zIndex: `2`,
      },
    },
  }
  return (
    <li
      className={className}
      css={{
        ...baseStyles,
        ...tabStyles[variant],
      }}
    >
      {to ? (
        <Link to={to} onClick={onClick}>
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  )
}

Tab.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.oneOf([`DEFAULT`, `NUMBERED`]),
}

export default Tab
