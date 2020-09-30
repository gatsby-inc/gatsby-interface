/** @jsx jsx */
import { jsx } from "@emotion/core"
import { MdCheck } from "react-icons/md"
import { getTheme, ThemeMediaQuery } from ".."

const baseTheme = getTheme()

export function MediaQueriesShowcase() {
  const colorsByMediaQuery: Record<ThemeMediaQuery, string> = {
    mobile: baseTheme.colors.green[80],
    phablet: baseTheme.colors.orange[90],
    tablet: baseTheme.colors.magenta[50],
    desktop: baseTheme.colors.purple[50],
    hd: baseTheme.colors.blue[90],
  }
  const mediaTokens: ThemeMediaQuery[] = [
    "mobile",
    "phablet",
    "tablet",
    "desktop",
    "hd",
  ]

  return (
    <div css={theme => ({ fontFamily: theme.fonts.body })}>
      <p>Resize the window to see media queries in action</p>
      <ul
        css={{
          listStyle: `none`,
          margin: 0,
          padding: 0,
        }}
      >
        {mediaTokens.reverse().map(mediaToken => (
          <li
            key={mediaToken}
            css={theme => ({
              backgroundColor: colorsByMediaQuery[mediaToken],
              color: theme.colors.white,
              textAlign: `center`,
              padding: theme.space[5],
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              [theme.mediaQueries[mediaToken]]: {
                maxWidth: theme.mediaQueries[mediaToken].match(/(\d+px)/)[0],
              },
            })}
          >
            <MdCheck
              css={theme => ({
                width: `40px`,
                visibility: `hidden`,
                [theme.mediaQueries[mediaToken]]: {
                  visibility: `visible`,
                },
              })}
            />
            <div>
              <strong>{mediaToken}</strong>
              <br />
              <code>{baseTheme.mediaQueries[mediaToken]}</code>
            </div>
            <div css={{ width: `40px` }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
