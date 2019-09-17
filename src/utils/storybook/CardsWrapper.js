/** @jsx jsx */
import { jsx } from "@emotion/core"
import { colors } from "../presets"

const CardsWrapper = ({ children, width = `45rem` }) => (
  <div
    css={{
      alignItems: `center`,
      background: colors.secondaryBackground,
      display: `flex`,
      minHeight: `100vh`,
      justifyContent: `center`,
      width: `100vw`,
    }}
  >
    <div
      css={{
        maxWidth: `70%`,
        width: width,
      }}
    >
      {children}
    </div>
  </div>
)

export default CardsWrapper
