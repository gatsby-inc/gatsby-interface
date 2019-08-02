/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import {
  styles,
  fontSizes,
  breakpoints,
  palette,
  colors,
} from "../../utils/presets"

const Heading = ({ className, variant = `DEFAULT`, children, ...rest }) => {
  if (variant === `EMPHATIC`) {
    return (
      <h2
        css={{
          ...styles.heading,
          fontSize: fontSizes[`3xl`],
          fontWeight: `800`,
          letterSpacing: `-0.02em`,
          lineHeight: `1`,
          [`@media (min-width: ${breakpoints.desktop}px)`]: {
            fontSize: fontSizes[`4xl`],
          },
        }}
        {...rest}
      >
        {children}
      </h2>
    )
  }

  if (variant === `SITE`) {
    return (
      <h1
        css={{
          ...styles.heading,
          strong: {
            color: colors.lilac,
          },
        }}
        {...rest}
      >
        {children}
      </h1>
    )
  }

  return (
    <h2
      css={{
        ...styles.heading,
        strong: {
          color: colors.lilac,
        },
        small: {
          color: palette.grey[500],
          display: `block`,
          fontSize: fontSizes.xs,
          fontWeight: `normal`,
          letterSpacing: `0.03em`,
          margin: `0`,
          textTransform: `uppercase`,
        },
      }}
      {...rest}
    >
      {children}
    </h2>
  )
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `EMPHATIC`, `SITE`]),
}

export default Heading
