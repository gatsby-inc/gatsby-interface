/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import colors from "../../theme/colors"

import fontSizes from "../../theme/fontSizes"
import space from "../../theme/space"

const InputError = ({ children }) => (
  <p
    css={{
      color: colors.red[60],
      fontSize: fontSizes[1],
      lineHeight: `1`,
      padding: `0`,
      margin: `${space[3]} ${space[2]} 0`,
      svg: {
        color: `current-color`,
        marginRight: space[2],
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
