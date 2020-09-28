/** @jsx jsx */
import * as React from "react"
import Alert from "@reach/alert"
import { keyframes, jsx } from "@emotion/core"
import { MdDone, MdClose, MdWarning } from "react-icons/md"

import { ToastTone } from "./types"
import { Theme, ThemeCss } from "../../theme"

const toastEntryAnimation = keyframes`
  100% {
     transform: perspective(1000px) rotateX(0);
  }
`

const MIN_HEIGHT = `3rem`

const toastCss: ThemeCss = theme => ({
  alignItems: "center",
  animation: `${toastEntryAnimation} 0.5s 0.25s ease forwards`,
  background: theme.colors.grey[90],
  borderLeft: `8px solid ${theme.colors.green[50]}`,
  borderRadius: `${theme.radii[2]} ${theme.radii[2]} 0 0`,
  color: theme.colors.green[5],
  display: "flex",
  fontSize: theme.fontSizes[1],
  minHeight: MIN_HEIGHT,
  maxWidth: `calc(100% - (${theme.space[7]} * 2))`,
  paddingLeft: theme.space[4],
  transform: "perspective(1000px) rotateX(90deg)",
  transformOrigin: "bottom center",

  svg: {
    height: "auto",
    width: `calc(${MIN_HEIGHT} * 0.4)`,
  },

  "&:not(:first-of-type)": {
    borderRadius: theme.radii[2],
    marginBottom: theme.space[1],
  },
})

const messageCss: ThemeCss = theme => ({
  lineHeight: theme.lineHeights.solid,
  margin: `0 ${theme.space[2]} 0 ${theme.space[3]}`,
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
})

function getToastColorByTone(theme: Theme, tone: ToastTone): string {
  if (tone === `SUCCESS`) {
    return theme.colors.green[50]
  }
  if (tone === `DANGER`) {
    return theme.colors.red[60]
  }
  throw new Error(`Unknown "tone" for Toast component: ${tone}`)
}

const ToastIconByTone: Record<ToastTone, React.ComponentType> = {
  SUCCESS: MdDone,
  DANGER: MdWarning,
}

export interface ToastProps {
  message: React.ReactNode
  onClose: () => void
  closeButtonLabel: string
  tone: ToastTone
}

export const Toast: React.FC<ToastProps> = ({
  message,
  tone,
  closeButtonLabel,
  onClose,
}) => {
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
      type={tone === `DANGER` ? `assertive` : `polite`}
    >
      <span css={finalStatusCss}>
        <IconComponent />
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
