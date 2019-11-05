/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import colors from "../../theme/colors"

import { spaces, fontSizes } from "../../theme"

const InputError = ({ children }) => (
  <p
    css={{
      color: colors.red[60],
      fontSize: fontSizes.xs,
      lineHeight: `1`,
      padding: `0`,
      margin: `${spaces.xs} ${spaces[`2xs`]} 0`,
      svg: {
        color: `current-color`,
        marginRight: spaces[`2xs`],
        verticalAlign: `text-top`,
      },
    }}
  >
    {children}
  </p>
)

InputError.propTypes = {
  children: PropTypes.node,
}

export default InputError
