/** @jsx jsx */
import React from "react"
import Alert from "@reach/alert"
import { keyframes, jsx } from "@emotion/core"
import { MdDone, MdClose, MdWarning } from "react-icons/md"
import { ToastTone } from "./types"
import { ThemeCss } from "../../theme"

const toastEntryAnimation = keyframes`
  100% {
     transform: perspective(1000px) rotateX(0);
  }
`

const TOAST_MIN_HEIGHT = `3rem`

const baseCss: ThemeCss = theme => ({
  alignItems: "center",
  animation: `${toastEntryAnimation} 0.5s 0.25s ease forwards`,
  background: theme.colors.grey[90],
  borderLeft: `${theme.space[3]} solid ${theme.colors.green[50]}`,
  borderRadius: `${theme.radii[2]} ${theme.radii[2]} 0 0`,
  color: theme.colors.green[5],
  display: "flex",
  fontSize: theme.fontSizes[1],
  minHeight: TOAST_MIN_HEIGHT,
  maxWidth: `calc(100% - (${theme.space[7]} * 2))`,
  paddingLeft: theme.space[4],
  transform: "perspective(1000px) rotateX(90deg)",
  transformOrigin: "bottom center",

  "&:not(:first-of-type)": {
    borderRadius: theme.radii[2],
    marginBottom: theme.space[1],
  },
})

const baseToneStyles: Record<ToastTone, ThemeCss> = {
  SUCCESS: theme => ({
    borderLeftColor: theme.colors.green[50],
  }),
  DANGER: theme => ({
    borderLeftColor: theme.colors.red[60],
  }),
}

const iconCss: ThemeCss = _theme => ({
  height: `auto`,
  width: `calc(${TOAST_MIN_HEIGHT} * 0.4)`,
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

const statusToneStyles: Record<ToastTone, ThemeCss> = {
  SUCCESS: theme => ({
    color: theme.colors.green[50],
  }),
  DANGER: theme => ({
    color: theme.colors.red[60],
  }),
}

const closeButtonCss: ThemeCss = theme => ({
  background: "none",
  border: "none",
  color: theme.colors.grey[40],
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: TOAST_MIN_HEIGHT,
  width: TOAST_MIN_HEIGHT,
})

const ToastIconByTone = {
  SUCCESS: MdDone,
  DANGER: MdWarning,
}

export interface ToastProps {
  message: React.ReactNode
  onClose: () => void
  closeButtonLabel: string
  tone: ToastTone
}

export function Toast({
  message,
  tone,
  closeButtonLabel,
  onClose,
}: ToastProps) {
  const IconComponent = ToastIconByTone[tone]

  const toastCss: ThemeCss = theme => [
    baseCss(theme),
    baseToneStyles[tone](theme),
  ]

  const statusFinalCss: ThemeCss = theme => [
    statusCss(theme),
    statusToneStyles[tone](theme),
  ]

  return (
    <Alert
      css={toastCss}
      data-testid="toast"
      type={tone === `DANGER` ? `assertive` : `polite`}
    >
      <span css={statusFinalCss}>
        <IconComponent css={iconCss} />
      </span>
      <div css={messageCss}>{message}</div>
      <button
        css={closeButtonCss}
        type="button"
        onClick={onClose}
        aria-label={closeButtonLabel}
      >
        <MdClose />
      </button>
    </Alert>
  )
}
