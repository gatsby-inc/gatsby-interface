/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { styles, palette, spaces, fontSizes } from "../../utils/presets"

const Subheading = ({ className, children, ...rest }) => (
    <h3
      css={{
        ...styles.subheading,
        small: {
          color: palette.grey[500],
          display: `block`,
          fontSize: fontSizes[`2xs`],
          fontWeight: `normal`,
          letterSpacing: `0.03em`,
          marginBottom: spaces.xs,
          textTransform: `uppercase`,
        },
      }}
      {...rest}
    >
      {children}
    </h3>
  )

Subheading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Subheading
