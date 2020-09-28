/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  BuildLogItem,
  BuildActivity,
  BuildActivityStatus,
  BuildActivityType,
} from "./types"
import { ProgressBar } from "../ProgressBar"
import { MdCheck, MdClose } from "react-icons/md"
import { InProgressIcon, IconProps } from "../icons"
import { ThemeCss, Theme } from "../../theme"
import { BuildLogEntrySkeleton } from "./BuildLogEntrySkeleton"

const durationCellCss: ThemeCss = theme => ({
  display: `grid`,
  alignItems: `center`,
  fontSize: theme.fontSizes[1],
  [theme.mediaQueries.tablet]: {
    gridTemplateColumns: `50% 50%`,
  },
})

const durationCss: ThemeCss = theme => ({
  textAlign: `end`,
  fontSize: theme.fontSizes[0],
})

const hiddenOnMobileCss: ThemeCss = theme => ({
  display: `none`,
  padding: `0 ${theme.space[4]}`,
  [theme.mediaQueries.tablet]: {
    display: `block`,
  },
})

const statusColorLookup = (
  theme: Theme
): Record<BuildActivityStatus, string> => ({
  [BuildActivityStatus.Failed]: theme.colors.red[70],
  [BuildActivityStatus.InProgress]: theme.colors.blue[80],
  [BuildActivityStatus.NotStarted]: theme.colors.grey[50],
  [BuildActivityStatus.Success]: theme.colors.grey[50],
  [BuildActivityStatus.Interrupted]: theme.colors.red[70],
})

export type BuildActivityEntryProps = Omit<BuildLogItem, "activity"> & {
  // Require "activity"
  activity: BuildActivity
}

export function BuildActivityEntry({
  activity,
  ...standardLogData
}: BuildActivityEntryProps) {
  const { duration, current, total, type, status } = activity

  const isSuccessfulActivity = status === BuildActivityStatus.Success
  const isFailedActivity = [
    BuildActivityStatus.Interrupted,
    BuildActivityStatus.Failed,
  ].includes(status)

  /*
   * Normalize total in case it's not updated properly when activity succeeds
   */
  const normalizedTotal = isSuccessfulActivity ? current : total

  const showProgressBar =
    type === BuildActivityType.Progress &&
    !isSuccessfulActivity &&
    !isFailedActivity

  const baseCss: ThemeCss = theme => ({
    color: statusColorLookup(theme)[status],
  })

  const progressCss: ThemeCss = theme => [
    hiddenOnMobileCss(theme),
    {
      textAlign: `right`,
      fontSize: theme.fontSizes[0],
      visibility: isFailedActivity ? `hidden` : `visible`,
    },
  ]

  return (
    <BuildLogEntrySkeleton
      icon={<ActivityStatusIcon activityId={activity.id} status={status} />}
      css={baseCss}
    >
      <div id={`activity__message--${activity.id}`}>
        {activity.message || activity.name || standardLogData.message}
      </div>
      <div css={hiddenOnMobileCss}>
        {showProgressBar && (
          <ProgressBar
            value={current || 0}
            max={normalizedTotal || 0}
            getProgressColor={theme => theme.colors.blue[50]}
            aria-describedby={`activity__message--${activity.id}`}
          />
        )}
      </div>
      <div css={durationCellCss}>
        <span css={progressCss}>
          {formatProgress(current, normalizedTotal)}
        </span>
        {typeof duration === `number` && (
          <span css={durationCss}>{formatDuration(duration)}</span>
        )}
      </div>
    </BuildLogEntrySkeleton>
  )
}

const formatDuration = (duration: number) => `${duration.toFixed(2)}s`

const formatProgress = (
  current: number | null | undefined,
  total: number | null | undefined
) =>
  [
    current,
    typeof total === "number" && typeof current === "number" && total < current
      ? current
      : total,
  ]
    .filter(part => typeof part === `number`)
    .join(` / `)

type ActivityStatusIconProps = {
  activityId: string
  status: BuildActivityStatus
}

function ActivityStatusIcon({ activityId, status }: ActivityStatusIconProps) {
  const statusVariant = status ? activityEntryStatusVariants[status] : null

  if (!statusVariant) {
    return null
  }

  return (
    <statusVariant.Icon
      aria-label={statusVariant.label}
      css={statusVariant.styles}
      id={`statusIcon--${activityId}`}
    />
  )
}

const activityEntryStatusVariants: Partial<Record<
  BuildActivityStatus,
  {
    label: string
    Icon: React.ComponentType<any>
    styles: ThemeCss
  }
>> = {
  [BuildActivityStatus.Success]: {
    label: `Completed`,
    Icon: MdCheck,
    styles: theme => ({
      color: theme.colors.grey[40],
    }),
  },
  [BuildActivityStatus.Interrupted]: {
    label: `Failed`,
    Icon: MdClose,
    styles: theme => ({
      color: theme.colors.red[60],
    }),
  },
  [BuildActivityStatus.Failed]: {
    label: `Failed`,
    Icon: MdClose,
    styles: theme => ({
      color: theme.colors.red[60],
    }),
  },
  [BuildActivityStatus.InProgress]: {
    label: `In Progress`,
    Icon: ActivityInProgressIcon,
    styles: theme => ({
      color: theme.colors.blue[80],
    }),
  },
}

function ActivityInProgressIcon(props: IconProps) {
  return <InProgressIcon {...props} size="inherit" />
}
