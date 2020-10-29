/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import format from "date-fns/format"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  padding: theme.space[5],
  backgroundColor: theme.colors.grey[80],
  color: theme.colors.white,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSizes[1],
  lineHeight: theme.lineHeights.default,

  [theme.mediaQueries.desktop]: {
    padding: theme.space[7],
  },
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

const itemCss: ThemeCss = theme => [
  {
    margin: 0,
    lineHeight: 1.8,
    color: theme.colors.grey[30],

    time: {
      whiteSpace: `nowrap`,
      marginRight: theme.space[3],
      color: theme.colors.grey[40],
      fontStyle: `italic`,
    },

    p: {
      margin: 0,
      whiteSpace: `pre-wrap`,
      marginLeft: theme.space[5],

      span: {
        fontWeight: `bold`,

        "&.success": {
          color: theme.colors.green[40],
        },
        "&.info": {
          color: theme.colors.blue[40],
        },
        "&.warning": {
          color: theme.colors.orange[50],
        },
        "&.error": {
          color: theme.colors.red[10],
          background: theme.colors.red[90],
          padding: `${theme.space[1]} ${theme.space[2]}`,
          borderRadius: theme.radii[2],
          textTransform: `uppercase`,

          "&:after, &:before": {
            content: `"!"`,
          },
        },
      },
    },

    [theme.mediaQueries.desktop]: {
      display: `flex`,

      p: {
        marginLeft: 0,
      },
    },
  },
]

function formatMessage(message: string): React.ReactNode {
  if (!message) {
    return
  }

  const formated = message.replace(
    /(^|\n)(success|info|warning|error) /gi,
    (_: string, match1: string, match2: string) => {
      return `${match1}<span class="${match2.toLowerCase()}">${match2}</span> `
    }
  )

  return <p dangerouslySetInnerHTML={{ __html: formated }} />
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
        {logItems.map(({ id, timestamp, message }, idx) => {
          let key: React.Key = idx

          if (id) {
            key = id
          } else if (message && timestamp) {
            key = `${message}--${timestamp}`
          }

          const timestampDate = timestamp ? new Date(timestamp) : null

          return (
            <li key={key} css={itemCss}>
              {timestampDate && (
                <React.Fragment>
                  <time dateTime={timestampDate.toString()}>
                    {format(timestampDate, timeFormat)}
                  </time>
                </React.Fragment>
              )}
              {formatMessage(message as string)}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
