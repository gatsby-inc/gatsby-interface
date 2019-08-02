/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { spaces, palette, fontSizes, styles } from "../../utils/presets"

const baseStyles = {
  ...styles.label,
  display: `block`,
}

const Label = ({ children, id, variant = `DEFAULT` }) => {
  const labelStyles = {
    BIG: {
      fontSize: fontSizes.s,
    },
    SMALL: {
      color: palette.grey[500],
      display: `block`,
      fontSize: fontSizes.xs,
      svg: {
        color: palette.grey[400],
        marginRight: spaces[`2xs`],
        verticalAlign: `text-top`,
      },
    },
  }
  return (
    <label
      htmlFor={id}
      css={{
        ...baseStyles,
        ...labelStyles[variant],
      }}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `SMALL`, `BIG`]),
  children: PropTypes.node,
}

export default Label
