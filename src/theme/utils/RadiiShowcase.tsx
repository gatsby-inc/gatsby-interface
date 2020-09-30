/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme } from ".."

const baseTheme = getTheme()

export function RadiiShowcase() {
  return (
    <div
      css={theme => ({
        display: `grid`,
        gridGap: theme.space[5],
        gridTemplateColumns: `repeat(${Math.ceil(
          Math.sqrt(Object.keys(baseTheme.radii).length)
        )}, max-content)`,
        gridAutoRows: `1fr`,
        fontFamily: theme.fonts.body,
      })}
    >
      {baseTheme.radii.map((radius, token) => {
        return (
          <div
            key={radius}
            css={theme => ({
              backgroundColor: theme.colors.purple[50],
              color: theme.colors.white,
              width: `6rem`,
              height: `6rem`,
              textAlign: `center`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-around`,
              borderRadius: radius,
            })}
          >
            <span>
              {token} ({radius})
            </span>
          </div>
        )
      })}
    </div>
  )
}
