/** @jsx jsx */
import { jsx } from "@emotion/core"
import { BuildLogItem, StructuredLogLevel } from "./types"
import { ThemeCss, Theme } from "../../theme"
import { FormattedMessage } from "./FormattedMessage"
import { Link } from "../Link"
import { Text } from "../Text"

export type FormattedLogMessageProps = Pick<
  BuildLogItem,
  "level" | "message" | "docsUrl" | "location" | "filePath" | "errorUrl"
> & {
  className?: string
}

export function FormattedLogMessage({
  level,
  message,
  docsUrl,
  location,
  filePath,
  errorUrl,
  className,
}: FormattedLogMessageProps) {
  return (
    <div css={getMessageCss(level)} className={className}>
      <FormattedMessage rawMessage={message || ""} />
      {docsUrl && (
        <Text>
          For more details see <Link href={docsUrl}>{docsUrl}</Link>
        </Text>
      )}
      {location && location.start && errorUrl && (
        <Text>
          The error occured in{" "}
          <Link href={errorUrl}>
            {filePath}@{location.start.line},{location.start.column}
          </Link>
        </Text>
      )}
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
      div: {
        // The first div > p is the title of the message.
        p: {
          "&:first-of-type": {
            color: getLogLevelColor(level)(theme),
            fontSize: theme.fontSizes[1],
            marginBottom: theme.space[3],
          },
        },
        // If we only have a single p in a single div, we don't want the margin.
        "&:only-child": {
          p: {
            "&:only-child": {
              marginBottom: 0,
            },
          },
        },
      },

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

      code: {
        lineHeight: theme.lineHeights.default,
        fontSize: theme.fontSizes[1],
      },

      p: [
        spaceMixin,

        {
          color: theme.colors.grey[50],
          fontSize: theme.fontSizes[0],
          lineHeight: theme.lineHeights.loose,

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
