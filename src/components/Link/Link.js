/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

import { palette, styles } from "../../utils/presets"

const Link = ({ children, href, target, to, variant = `DEFAULT` }) => {
  const baseStyles = {
    ...styles.link,
    alignItems: `center`,
    display: `inline-flex`,
  }

  const linkStyles = {
    SIMPLE: {
      textDecoration: `none`,
      ":focus, :hover": {
        color: palette.purple[400],
        textDecoration: `underline`,
      },
    },
    DEFAULT: {
      textDecoration: `underline`,
      ":focus, :hover": {
        color: palette.purple[600],
        textDecoration: `underline`,
      },
    },
  }

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === `_blank` ? `noopener noreferrer` : ``}
      css={{
        ...baseStyles,
        ...linkStyles[variant],
      }}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      to={to}
      css={{
        ...baseStyles,
        ...linkStyles[variant],
      }}
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `SIMPLE`]),
}

export default Link
