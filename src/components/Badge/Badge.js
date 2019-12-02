/** @jsx jsx */
import { jsx } from "@emotion/core"

import PropTypes from "prop-types"

import { styles, options } from "../../theme/styles/badge"

const { baseStyle, variantStyles } = styles
const { VARIANTS, TONES } = options

function Badge({
  children,
  label,
  variant = `STATUS`,
  tone = `SUCCESS`,
  ...rest
}) {
  return (
    <span
      css={{
        ...baseStyle({ tone }),
        ...variantStyles[variant],
      }}
      {...rest}
    >
      {label ? label : children}
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(VARIANTS),
  tone: PropTypes.oneOf(TONES),
}

export default Badge
