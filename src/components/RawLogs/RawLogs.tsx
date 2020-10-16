/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import format from "date-fns/format"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  padding: theme.space[7],
  backgroundColor: theme.colors.grey[90],
  color: theme.colors.white,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSizes[1],
  lineHeight: theme.lineHeights.default,
})

const listCss: ThemeCss = _theme => ({
  listStyle: `none`,
  margin: 0,
  padding: 0,
  height: `100%`,
  overflowY: `auto`,
})

export type RawLogItem = {
  id?: string | null
  message?: React.ReactNode
  timestamp?: number | string
  sourceStream?: "STDERR" | "STDOUT" | null
  [k: string]: unknown
}

export type RawLogsProps = {
  logItems: RawLogItem[]
  // require aria-label for a11y
  "aria-label": string
  timeFormat?: string
  className?: string
}

export function RawLogs({
  logItems,
  "aria-label": ariaLabel,
  timeFormat = "HH:mm:ss aa:",
  className,
}: RawLogsProps) {
  const listRef = React.useRef<HTMLOListElement>(null)
  const [autoScroll, setAutoScroll] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!autoScroll || !listRef.current) {
      return
    }

    if (listRef.current.scrollHeight > listRef.current.clientHeight) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    } else {
      ;(listRef.current.lastChild as HTMLLIElement).scrollIntoView()
    }
  })

  const handleScroll = (e: React.UIEvent<HTMLOListElement>) => {
    const list = e.target as HTMLOListElement
    const isAtEnd = list.scrollHeight - list.scrollTop === list.clientHeight

    if (isAtEnd) {
      setAutoScroll(true)
    } else if (autoScroll && !isAtEnd) {
      setAutoScroll(false)
    }
  }

  return (
    <div role="log" css={baseCss} className={className}>
      <ol
        tabIndex={0}
        ref={listRef}
        aria-label={ariaLabel}
        css={listCss}
        onScroll={handleScroll}
      >
        {logItems.map(({ id, timestamp, message, sourceStream }, idx) => {
          let key: React.Key = idx

          if (id) {
            key = id
          } else if (message && timestamp) {
            key = `${message}--${timestamp}`
          }

          const timestampDate = timestamp ? new Date(timestamp) : null

          const itemCss: ThemeCss = theme => ({
            margin: 0,

            color:
              sourceStream === "STDERR"
                ? theme.colors.red[40]
                : theme.colors.white,

            time: {
              whiteSpace: `nowrap`,
              marginRight: theme.space[2],
            },

            p: {
              margin: 0,
              whiteSpace: `pre-wrap`,
              marginLeft: theme.space[5],
            },

            [theme.mediaQueries.desktop]: {
              display: `flex`,

              p: {
                marginLeft: 0,
              },
            },
          })

          return (
            <li key={key} css={itemCss}>
              {timestampDate && (
                <React.Fragment>
                  <time dateTime={timestampDate.toString()}>
                    {format(timestampDate, timeFormat)}
                  </time>
                </React.Fragment>
              )}
              <p>{message}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
