/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss, Theme } from "../../theme"

const baseCss: ThemeCss = theme => ({
  listStyle: `none`,
  margin: 0,
  padding: 0,
  position: `relative`,
  display: `flex`,
  justifyContent: `center`,
  textAlign: `center`,
  paddingTop: theme.space[9],
  counterReset: `section`,
  ":after": {
    borderBottom: `1px solid ${theme.colors.standardLine}`,
    bottom: 0,
    content: `""`,
    left: 0,
    position: `absolute`,
    width: `100%`,
    zIndex: 1,
  },
})

export type StepIndicatorProps = {
  children?: React.ReactNode
}

export function StepIndicator({ children }: StepIndicatorProps) {
  return <ul css={(theme: Theme) => [baseCss(theme)]}>{children}</ul>
}
