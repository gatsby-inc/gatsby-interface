/** @jsx jsx */
import { jsx } from "@emotion/core"

export function TextShowCase({ children }: { children: React.ReactNode }) {
  return (
    <ul
      css={theme => ({
        listStyle: `none`,
        margin: 0,
        padding: 0,
        fontFamily: theme.fonts.body,
      })}
    >
      {children}
    </ul>
  )
}

export function TextShowCaseItem({
  token,
  rawValues,
  children = `The quick brown fox jumps over the lazy dog`,
  className,
}: {
  token: string | number
  rawValues: (string | number)[]
  children?: React.ReactNode
  className?: string
}) {
  const rawValueElements = []

  for (let i = 0; i < rawValues.length; i++) {
    rawValueElements.push(<code>{rawValues}</code>)
    if (i === rawValues.length - 1 && i !== 0) {
      rawValueElements.push(", ")
    }
  }

  return (
    <li
      css={theme => ({
        padding: theme.space[3],
        marginBottom: theme.space[5],
        display: `flex`,
        alignItems: `baseline`,
      })}
    >
      <span
        css={theme => ({
          color: theme.colors.gatsby,
          fontWeight: theme.fontWeights.semiBold,
          paddingRight: theme.space[8],
          flexBasis: `100px`,
          flexShrink: 0,
        })}
      >
        {token}
      </span>{" "}
      <div>
        <div
          css={theme => ({
            marginBottom: theme.space[3],
            code: {
              backgroundColor: theme.colors.grey[10],
              padding: theme.space[2],
              margin: theme.space[1],
              borderRadius: theme.radii[1],
              borderStyle: `solid`,
              borderWidth: 1,
              borderColor: theme.colors.grey[30],
              boxShadow: theme.shadows.raised,
            },
          })}
        >
          {rawValueElements}
        </div>
        <p css={{ margin: 0 }} className={className}>
          {children}
        </p>
      </div>
    </li>
  )
}
