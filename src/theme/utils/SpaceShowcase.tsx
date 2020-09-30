/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { getTheme, ThemeCss } from ".."

const baseTheme = getTheme()

const labelCss: ThemeCss = theme => ({
  color: theme.colors.grey[50],
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSizes[1],
  marginBottom: theme.space[4],
  fontWeight: theme.fontWeights.body,
  textAlign: `end`,
})

export function SpaceShowcase() {
  return (
    <div
      css={theme => ({
        display: `grid`,
        gridTemplateColumns: `repeat(4, auto)`,
        columnGap: theme.space[10],
        rowGap: theme.space[3],
        maxWidth: 640,
        fontFamily: theme.fonts.monospace,
      })}
    >
      <div css={labelCss}>Token</div>
      <div css={labelCss}>Value</div>
      <div css={theme => [labelCss(theme), { textAlign: `start` }]}>
        Visual size
      </div>
      <div css={labelCss}>Pixels</div>
      {baseTheme.space.map((space, token) => {
        return (
          <React.Fragment key={space}>
            <div css={{ textAlign: `right` }}>{token}</div>
            <div css={{ textAlign: `right` }}>{space}</div>
            <div
              css={theme => ({
                boxSizing: `border-box`,
                borderLeft: `2px solid ${theme.colors.red[20]}`,
                borderRight: `2px solid ${theme.colors.red[20]}`,
                width: space,
                height: "1em",
                position: `relative`,
                [`:before`]: {
                  content: `" "`,
                  position: `absolute`,
                  top: `0.5em`,
                  width: `100%`,
                  height: `1px`,
                  background: theme.colors.red[30],
                },
              })}
            ></div>
            <div css={{ textAlign: `right` }}>{parseFloat(space) * 16}px</div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
