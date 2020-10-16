/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTheme, ThemeZIndex } from ".."

const baseTheme = getTheme()

export function ZIndicesShowcase() {
  const offset = 3
  const labelWidth = 12
  const zIndicesCount = Object.keys(baseTheme.zIndices).length
  const maxWidth = `calc(${zIndicesCount} * ${offset}rem + ${labelWidth}rem)`
  const maxHeight = `calc(${zIndicesCount} * ${offset}rem + 2rem)`

  const colorsByToken: Record<ThemeZIndex, string> = {
    base: baseTheme.colors.white,
    background: baseTheme.colors.grey[10],
    dropdowns: baseTheme.colors.yellow[10],
    toasts: baseTheme.colors.orange[30],
    modals: baseTheme.colors.red[20],
    a11yIndicators: baseTheme.colors.purple[30],
  }

  return (
    <div css={{ width: maxWidth, height: maxHeight }}>
      {Object.entries(baseTheme.zIndices).map(([token, zIndex], idx) => {
        const space = `calc(${zIndicesCount - idx} * ${offset}rem)`

        return (
          <div
            key={token}
            css={theme => ({
              zIndex,
              background: colorsByToken[token as ThemeZIndex],
              position: `fixed`,
              padding: `${space} 1rem 1rem`,
              borderRadius: theme.radii[2],
              border: `1px solid ${theme.colors.blackFade[10]}`,
              width: `${(zIndicesCount - idx) * offset + labelWidth}rem`,
            })}
          >
            <div
              css={theme => ({
                display: "flex",
                alignItems: "baseline",
                fontFamily: theme.fonts.monospace,
                fontSize: theme.fontSizes[1],
                lineHeight: theme.lineHeights.solid,
              })}
            >
              {token}{" "}
              <span
                css={theme => ({
                  fontSize: theme.fontSizes[0],
                  color: theme.colors.blackFade[80],
                  marginLeft: "auto",
                })}
              >
                {zIndex}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
