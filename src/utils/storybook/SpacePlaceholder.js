/** @jsx jsx */
import { jsx } from "@emotion/core"
import { palette } from "../presets"

const SpacePlaceholder = ({
  hint = `content placeholder`,
  width = `100%`,
  height = `6rem`,
}) => (
  <div
    css={{
      alignItems: `center`,
      background: palette.grey[50],
      color: palette.grey[500],
      display: `flex`,
      height: height,
      justifyContent: `center`,
      width: width,
    }}
  >
    {hint}
  </div>
)

export default SpacePlaceholder
