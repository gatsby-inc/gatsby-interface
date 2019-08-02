/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { styles, fontSizes } from "../../utils/presets"

const Lede = ({ className, children, variant = `DEFAULT`, ...rest }) => {
  if (variant === `EMPHATIC`) {
    return (
      <p
        css={{
          ...styles.lede,
          fontSize: fontSizes.xl,
          lineHeight: `1.3`,
          margin: `1em 0 0`,
        }}
        {...rest}
      >
        {children}
      </p>
    )
  }

  return (
    <p
      css={{
        ...styles.lede,
      }}
      {...rest}
    >
      {children}
    </p>
  )
}

Lede.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `EMPHATIC`]),
}

export default Lede
