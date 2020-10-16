/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { ThemeCss } from "../../theme"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

const triggerCss: ThemeCss = theme => [
  visuallyHiddenCss,
  {
    position: `fixed`,
    zIndex: 9999999,
    top: theme.space[7],
    left: theme.space[7],
    padding: theme.space[5],
    borderRadius: theme.radii[2],
    background: theme.colors.white,
    color: theme.colors.blue[80],
    textDecoration: `none`,

    "&:focus": {
      width: `auto`,
      height: `auto`,
      clip: `auto`,
    },
  },
]

export type SkipNavProps = {
  children?: React.ReactNode
  targetId?: string
}

const SKIP_TARGET_ID = `gatsby-skip-here`

export function SkipNavTrigger({
  children = `Skip to content`,
  targetId = SKIP_TARGET_ID,
}: SkipNavProps) {
  const [hasAValidTarget, setHasAValidTarget] = React.useState<boolean>(false)

  React.useLayoutEffect(() => {
    const target = document.getElementById(targetId)

    if (!!target !== hasAValidTarget) {
      setHasAValidTarget(!!target)
    }
  })

  // If we've rendered the trigger, but there is no target available, we don't
  // want to show the trigger. Doing so would just be frustrating, since it
  // wouldn't skip anything.
  if (!hasAValidTarget) {
    return null
  }

  return (
    <a href={`#${targetId}`} css={triggerCss}>
      {children}
    </a>
  )
}

export type SkipNavTargetProps = {
  targetId?: string
}

export function SkipNavTarget({
  targetId = SKIP_TARGET_ID,
}: SkipNavTargetProps) {
  return <div id={targetId} style={{ contain: `none` }} />
}
