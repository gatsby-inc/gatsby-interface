/** @jsx jsx */
import { jsx } from "@emotion/core"
import { BuildLogItem, StructuredLogLevel } from "./types"
import { ThemeCss, Theme } from "../../theme"
import { FormattedMessage } from "./FormattedMessage"

export type FormattedLogMessageProps = Pick<
  BuildLogItem,
  "level" | "message"
> & {
  className?: string
}

export function FormattedLogMessage({
  level,
  message,
  className,
}: FormattedLogMessageProps) {
  return (
    <div css={getMessageCss(level)} className={className}>
      <FormattedMessage rawMessage={message || ""} />
    </div>
  )
}

function getMessageCss(level: StructuredLogLevel | null | undefined): ThemeCss {
  return theme => {
    const spaceMixin = {
      margin: 0,

      "&:not(:last-child)": {
        marginBottom: theme.space[3],
      },
    }

    return {
      whiteSpace: `pre-wrap`,
      display: `block`,

      ul: [
        spaceMixin,
        {
          marginBottom: theme.space[3],
          marginLeft: theme.space[5],
          color: theme.colors.grey[50],
          listStyle: `disc`,
          fontSize: theme.fontSizes[0],

          li: {
            marginBottom: theme.space[2],
          },
        },
      ],

      pre: [
        spaceMixin,
        {
          padding: `${theme.space[5]} ${theme.space[4]}`,
          fontSize: theme.fontSizes[1],
          lineHeight: theme.lineHeights.solid,
          color: theme.colors.grey[60],
          borderRadius: theme.radii[2],
          background: theme.colors.grey[5],
          overflowY: "auto",

          code: {
            lineHeight: theme.lineHeights.default,
          },

          em: {
            color: getLogLevelColor(level)(theme),
            fontStyle: `normal`,
            fontWeight: `bold`,
          },

          span: {
            color: theme.colors.grey[60],
          },
        },
      ],

      p: [
        spaceMixin,
        {
          color: theme.colors.grey[50],
          fontSize: theme.fontSizes[0],
          lineHeight: theme.lineHeights.loose,

          "&:first-of-type": {
            color: getLogLevelColor(level)(theme),
            fontSize: theme.fontSizes[1],
          },

          a: {
            textDecoration: `none`,
          },
        },
      ],
    }
  }
}

function getLogLevelColor(logLevel: StructuredLogLevel | null | undefined) {
  return (theme: Theme) => {
    switch (logLevel) {
      case StructuredLogLevel.Error:
        return theme.colors.red[70]
      case StructuredLogLevel.Warning:
        return theme.colors.yellow[90]
      default:
        return theme.colors.grey[80]
    }
  }
}
