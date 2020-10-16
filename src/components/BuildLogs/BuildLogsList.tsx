/** @jsx jsx */
import { jsx } from "@emotion/core"
import { ThemeCss } from "../../theme"
import { BuildLogItem } from "./types"
import { BuildStandardLogEntry } from "./BuildStandardLogEntry"
import { BuildActivityEntry } from "./BuildActivityEntry"

const baseCss: ThemeCss = _theme => ({
  listStyle: `none`,
  margin: 0,
  padding: 0,
})

export type BuildLogsListProps = {
  logItems: BuildLogItem[]
  // require aria-label for a11y
  "aria-label": string
  className?: string
}

export function BuildLogsList({
  logItems,
  "aria-label": ariaLabel,
  className,
}: BuildLogsListProps) {
  return (
    <div role="log" className={className}>
      <ol css={baseCss} aria-label={ariaLabel}>
        {logItems.map(logItem => {
          return (
            <li css={{ margin: 0 }} key={logItem.id}>
              {logItem.activity ? (
                <BuildActivityEntry {...logItem} activity={logItem.activity} />
              ) : (
                <BuildStandardLogEntry
                  level={logItem.level}
                  message={logItem.message}
                  context={logItem.context}
                  filePath={logItem.filePath}
                  location={logItem.location}
                  docsUrl={logItem.docsUrl}
                  errorUrl={logItem.errorUrl}
                />
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
