/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../theme"

const baseCss: ThemeCss = theme => ({
  fontSize: theme.fontSizes[1],
  wordBreak: "break-word",
  padding: `${theme.space[4]} 0`,
  position: `relative`,
  display: `grid`,
  alignItems: `center`,
  gridTemplateColumns: `30px auto minmax(auto, 125px)`,
  [theme.mediaQueries.tablet]: {
    gridTemplateColumns: `30px minmax(auto, 50%) 120px minmax(100px, 28%)`,
  },
})

const iconContainerCss: ThemeCss = theme => ({
  alignSelf: `start`,
  display: `flex`,
  alignItems: `center`,
  paddingTop: theme.space[1],
})

export type BuildLogEntrySkeletonProps = React.ComponentPropsWithoutRef<
  "div"
> & {
  icon: React.ReactNode
}

export function BuildLogEntrySkeleton({
  icon,
  children,
  ...rest
}: BuildLogEntrySkeletonProps) {
  return (
    <div css={baseCss} {...rest}>
      <div css={iconContainerCss}>{icon}</div>
      {children}
    </div>
  )
}
