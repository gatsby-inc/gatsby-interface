/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss, Theme } from "../../theme"

const baseCss: ThemeCss = theme => ({
  display: `inline-block`,
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights.solid,
  fontWeight: theme.fontWeights.semiBold,
  backgroundColor: theme.colors.grey[20],
  color: theme.colors.grey[60],
  paddingLeft: `calc(3 * ${theme.space[1]})`,
  paddingRight: `calc(3 * ${theme.space[1]})`,
  paddingTop: theme.space[1],
  paddingBottom: theme.space[1],
  borderRadius: `10px`,
})

export type NumberBadgeVariant = `PRIMARY` | `SECONDARY`

export type NumberBadgeProps = React.ComponentPropsWithoutRef<"span">

export function NumberBadge(props: NumberBadgeProps) {
  return <span css={(theme: Theme) => [baseCss(theme)]} {...props} />
}
