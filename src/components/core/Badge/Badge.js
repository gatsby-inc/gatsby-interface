/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { spaces, radius } from "../../../theme"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import { styles, options } from "../../../theme/styles/badge"
import tones from "../../../theme/tones"

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
