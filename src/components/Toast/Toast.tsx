/** @jsx jsx */
import * as React from "react"
import Alert from "@reach/alert"
import { jsx } from "@emotion/core"
import { MdDone, MdClose } from "react-icons/md"

import { ToastTone } from "./types"
import { Theme, ThemeCss } from "../../theme"
import { ThemeProvider } from "../ThemeProvider"

const MIN_HEIGHT = `3rem`

const toastCss: ThemeCss = theme => ({
  display: "flex",
  alignItems: "center",
  background: theme.colors.grey[90],
  borderLeft: `${theme.space[3]} solid ${theme.colors.green[50]}`,
  borderRadius: theme.radii[2],
  color: theme.colors.green[5],
  fontSize: theme.fontSizes[1],
  minHeight: MIN_HEIGHT,
  paddingLeft: theme.space[4],
})

const iconCss: ThemeCss = theme => ({
  fontSize: theme.fontSizes[4],
})

const messageCss: ThemeCss = theme => ({
  lineHeight: theme.lineHeights.solid,
  marginTop: 0,
  marginBottom: 0,
  marginRight: theme.space[2],
  marginLeft: theme.space[3],
})

const statusCss: ThemeCss = theme => ({
  display: "flex",
  alignItems: "center",
  color: theme.colors.green[50],
})

const closeButtonCss: ThemeCss = theme => ({
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
  color: theme.colors.grey[40],
  cursor: "pointer",
  height: MIN_HEIGHT,
  justifyContent: "center",
  width: MIN_HEIGHT,
  marginLeft: `auto`,
})

function getToastColorByTone(theme: Theme, tone: ToastTone): string {
  if (tone === `SUCCESS`) {
    return theme.colors.green[50]
  }
  throw new Error(`Unknown "tone" for Toast component: ${tone}`)
}

const ToastIconByTone: Record<ToastTone, React.ComponentType> = {
  SUCCESS: MdDone,
}

export interface ToastProps {
  message: React.ReactNode
  onClose: () => void
  closeButtonLabel: string
  tone: ToastTone
  className?: string
  style?: React.CSSProperties
}

export function Toast({
  message,
  tone,
  closeButtonLabel,
  onClose,
  className,
  style,
}: ToastProps) {
  const IconComponent = ToastIconByTone[tone]

  const finalToastCss: ThemeCss = theme => [
    toastCss(theme),
    {
      borderLeftColor: getToastColorByTone(theme, tone),
    },
  ]

  const finalStatusCss: ThemeCss = theme => [
    statusCss(theme),
    {
      color: getToastColorByTone(theme, tone),
    },
  ]

  return (
    <Alert
      css={finalToastCss}
      data-testid="toast"
      type="polite"
      className={className}
      style={style}
    >
      {/**
       * We have to wrap Alert content in ThemeProvider, since ReachUI's Alert does not allow to use context that is defined outside of Alert
       *
       * See this issue: https://github.com/reach/reach-ui/issues/540
       * Source code: https://github.com/reach/reach-ui/blob/develop/packages/alert/src/index.tsx
       * */}
      <ThemeProvider>
        <span css={finalStatusCss}>
          <IconComponent css={iconCss} />
        </span>
        <div css={messageCss}>{message}</div>
        <button
          css={closeButtonCss}
          type="button"
          onClick={onClose}
          aria-label={closeButtonLabel}
        >
          <MdClose css={iconCss} />
        </button>
      </ThemeProvider>
    </Alert>
  )
}
