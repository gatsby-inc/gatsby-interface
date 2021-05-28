/** @jsx jsx */
import { jsx } from "@emotion/core"
import { MdCheck, MdClose, MdWarning } from "react-icons/md"
import { BuildLogItem, StructuredLogLevel } from "./types"
import { ThemeCss } from "../../theme"
import { FormattedLogMessage } from "./FormattedLogMessage"
import { BuildLogEntrySkeleton } from "./BuildLogEntrySkeleton"

const baseCss: ThemeCss = theme => ({
  [theme.mediaQueries.tablet]: {
    paddingRight: theme.space[10],
  },
})

const messageCss: ThemeCss = theme => ({
  // Necessary to set min-width to 0 so that the message does not overflow the row
  minWidth: 0,
  gridColumn: `2 span`,

  [theme.mediaQueries.tablet]: {
    gridColumn: `3 span`,
  },
})

export type BuildStandardLogEntryProps = Pick<
  BuildLogItem,
  | "level"
  | "message"
  | "context"
  | "filePath"
  | "docsUrl"
  | "location"
  | "errorUrl"
> & {}

export function BuildStandardLogEntry({
  level,
  message,
  context,
  location,
  filePath,
  docsUrl,
  errorUrl,
}: BuildStandardLogEntryProps) {
  const displayMessage =
    context && context.stageLabel
      ? `${context.stageLabel} failed at ${filePath} ${message?.replace(
          `${context.stageLabel} failed`,
          ``
        )}`
      : message

  return (
    <BuildLogEntrySkeleton
      icon={<LogEntryStatusIcon logLevel={level} />}
      css={baseCss}
    >
      <FormattedLogMessage
        message={displayMessage}
        level={level}
        location={location}
        filePath={filePath}
        docsUrl={docsUrl}
        errorUrl={errorUrl}
        css={messageCss}
      />
    </BuildLogEntrySkeleton>
  )
}

type LogEntryStatusIconProps = {
  logLevel?: StructuredLogLevel | null
}

function LogEntryStatusIcon({ logLevel }: LogEntryStatusIconProps) {
  const statusVariant = logLevel ? logEntryStatusVariants[logLevel] : null

  if (!statusVariant) {
    return null
  }

  return (
    <statusVariant.Icon
      aria-label={statusVariant && statusVariant.label}
      css={statusVariant.styles}
    />
  )
}

const logEntryStatusVariants: Partial<Record<
  StructuredLogLevel,
  {
    label: string
    Icon: React.ComponentType
    styles: ThemeCss
  }
>> = {
  [StructuredLogLevel.Success]: {
    label: `Completed`,
    Icon: MdCheck,
    styles: theme => ({
      color: theme.colors.grey[40],
    }),
  },
  [StructuredLogLevel.Error]: {
    label: `Failed`,
    Icon: MdClose,
    styles: theme => ({
      color: theme.colors.red[60],
    }),
  },
  [StructuredLogLevel.Warning]: {
    label: `Warning`,
    Icon: MdWarning,
    styles: theme => ({
      color: theme.colors.yellow[90],
    }),
  },
}
