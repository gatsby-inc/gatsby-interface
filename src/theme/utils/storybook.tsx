/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Theme } from ".."
import { ThemeProvider } from "../../components/ThemeProvider"
import styled from "@emotion/styled"

export function ThemeDocs({
  theme,
  scale,
}: {
  theme: Theme
  scale?: keyof Theme
}) {
  return (
    <ThemeProvider>
      <div css={{ fontFamily: theme.fonts.monospace }}>
        <h1>{scale || "Theme values"}</h1>
        <p>Token names are sorted alphabetically</p>
        {scale ? (
          <ScaleGrid>{renderScale(scale, theme[scale])}</ScaleGrid>
        ) : (
          Object.entries(theme).map(([scaleName, scaleTokens]) => {
            return (
              <React.Fragment>
                <h2>{scaleName}</h2>
                <ScaleGrid>{renderScale(scaleName, scaleTokens)}</ScaleGrid>
              </React.Fragment>
            )
          })
        )}
      </div>
    </ThemeProvider>
  )
}

const ScaleGrid = styled.div(props => ({
  display: `grid`,
  gridTemplateColumns: `1fr 2fr`,
  rowGap: (props.theme as Theme).space[4],
}))

/**
 * A recursive function that renders a flattened theme scale
 * For example, a scale like this:
 * {
 *   ui: {
 *     background: "#fbfbfb",
 *     border: {
 *       subtle: "#f0f0f2"
 *     }
 *   },
 *   white: "#ffffff",
 * }
 * would be displayed like this:
 *
 * ui.background #fbfbfb
 * ui.border.subtle #f0f0f2
 * white #ffffff
 */
const renderScale = (
  scaleName: string,
  scaleTokens: object,
  tokenPath: string | null = null
): React.ReactNode => {
  return Object.entries(scaleTokens)
    .sort(sortTokens)
    .map(([token, value]) => {
      const currentPath = tokenPath
        ? `${tokenPath}${isNumberKey(token) ? `[${token}]` : `.${token}`}`
        : token

      return typeof value === "object" && value !== null ? (
        renderScale(scaleName, value as Record<string, unknown>, currentPath)
      ) : (
        <TokenDisplay scaleName={scaleName} label={currentPath} value={value} />
      )
    })
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <span
      css={(theme: Theme) => ({
        color: theme.colors.grey[90],
        backgroundColor: theme.colors.white,
        padding: `${theme.space[1]} ${theme.space[2]}`,
        borderRadius: theme.radii[1],
      })}
    >
      {children}
    </span>
  )
}

function ColorDisplay({ color }: { color: string }) {
  return (
    <span
      css={theme => ({
        display: `inline-block`,
        verticalAlign: `middle`,
        width: theme.fontSizes[1],
        height: theme.fontSizes[1],
        border: `1px solid ${theme.colors.grey[40]}`,
        backgroundColor: color,
        marginRight: theme.space[2],
        borderRadius: theme.radii[1],
      })}
    />
  )
}

function TokenValue({
  scaleName,
  value,
}: {
  scaleName: string
  value: unknown
}) {
  return (
    <React.Fragment>
      {[`colors`, `tones`].includes(scaleName) && typeof value === `string` && (
        <ColorDisplay color={value} />
      )}
      <Code>{typeof value === `string` ? value : JSON.stringify(value)}</Code>
    </React.Fragment>
  )
}

function TokenDisplay({
  scaleName,
  label,
  value,
}: {
  scaleName: string
  label: string
  value: unknown
}) {
  return (
    <React.Fragment>
      <div>
        <Code>{label}</Code>
      </div>
      <div>
        <TokenValue scaleName={scaleName} value={value} />
      </div>
    </React.Fragment>
  )
}

function isNumberKey(value: string) {
  return !isNaN(Number(value))
}

function sortTokens([token1]: [string, unknown], [token2]: [string, unknown]) {
  if (isNumberKey(token1) && isNumberKey(token2)) {
    return Number(token1) - Number(token2)
  }
  if (token1 > token2) {
    return 1
  } else if (token1 < token2) {
    return -1
  }
  return 0
}
