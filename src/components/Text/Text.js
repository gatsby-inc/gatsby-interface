/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { styles, spaces, palette } from "../../utils/presets"

const Text = ({ className, children, variant = `DEFAULT`, ...rest }) => {
  if (variant === `DANGER`) {
    return (
      <p
        css={{
          ...styles.text,
          fontWeight: `bold`,
          svg: {
            marginRight: spaces.xs,
            verticalAlign: `middle`,
            marginTop: `-0.1rem`,
            fill: palette.red[500],
          },
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
        ...styles.text,
        strong: {
          fontWeight: `bold`,
        },
      }}
      {...rest}
    >
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([`DEFAULT`, `DANGER`]),
}

export default Text
