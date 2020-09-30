/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { getTheme } from ".."
import { Heading } from "../../components/Heading"
import { Spacer } from "../../components/Spacer"

const baseTheme = getTheme()

export function ShadowsShowcase() {
  return (
    <React.Fragment>
      <div
        css={theme => ({
          display: `grid`,
          gridGap: theme.space[5],
          gridTemplateColumns: `repeat(${Math.ceil(
            Math.sqrt(Object.keys(baseTheme.shadows).length)
          )}, 140px)`,
          gridAutoRows: `140px`,
          fontFamily: theme.fonts.body,
        })}
      >
        {Object.entries(baseTheme.shadows).map(([token, shadow]) => {
          return (
            <div
              key={token}
              css={_theme => ({
                boxShadow: shadow,
                textAlign: `center`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `space-around`,
              })}
            >
              <span>{token}</span>
            </div>
          )
        })}
      </div>
      <Spacer size={8} />
      <Heading as="h2">Shadow CSS values</Heading>
      <table
        css={theme => ({
          fontSize: theme.fontSizes[2],
          fontFamily: theme.fonts.body,
          lineHeight: `40px`,
          "th, td": { textAlign: `start` },
          code: {
            fontSize: theme.fontSizes[1],
            fontFamily: theme.fonts.monospace,
          },
        })}
      >
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(baseTheme.shadows).map(([token, shadow]) => (
            <tr key={token}>
              <td css={theme => ({ paddingRight: theme.space[7] })}>{token}</td>
              <td>
                <code>{shadow}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}
