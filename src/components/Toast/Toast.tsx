/** @jsx jsx */
import React from "react"
import Alert from "@reach/alert"
import { keyframes, css, jsx } from "@emotion/core"
import { MdDone, MdClose, MdWarning } from "react-icons/md"

import { ToastTone } from "./types"
import fontSizes from "../../theme/fontSizes"
import dimensions from "../../theme/dimensions"
import space from "../../theme/space"
import colors from "../../theme/colors"
import radii from "../../theme/radii"

const toastEntryAnimation = keyframes`
  100% {
     transform: perspective(1000px) rotateX(0);
  }
`

const toastCss = css`
  align-items: center;
  animation: ${toastEntryAnimation} 0.5s 0.25s ease forwards;
  background: ${colors.grey[90]};
  border-left: 8px solid ${colors.green[50]};
  border-radius: ${radii[2]} ${radii[2]} 0 0;
  color: ${colors.green[5]};
  display: flex;
  font-size: ${fontSizes[1]};
  min-height: ${dimensions.toast.minHeight};
  max-width: calc(100% - (${space[7]} * 2));
  padding-left: ${space[4]};
  transform: perspective(1000px) rotateX(90deg);
  transform-origin: bottom center;

  svg {
    height: auto;
    width: calc(${dimensions.toast.minHeight} * 0.4);
  }

  &:not(:first-of-type) {
    border-radius: ${radii[2]};
    margin-bottom: ${space[1]};
  }
`

const messageCss = css`
  line-height: 1;
  margin: 0 ${space[2]} 0 ${space[3]};
`

const statusCss = css`
  align-items: center;
  color: ${colors.green[50]};
  display: flex;
`

const closeButtonCss = css`
  align-items: center;
  background: none;
  border: none;
  color: ${colors.grey[40]};
  cursor: pointer;
  display: flex;
  height: ${dimensions.toast.minHeight};
  justify-content: center;
  width: ${dimensions.toast.minHeight};
`

const toastColorByTone = {
  SUCCESS: colors.green[50],
  DANGER: colors.red[60],
}

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

export const Toast: React.FC<ToastProps> = ({
  message,
  tone,
  closeButtonLabel,
  onClose,
}) => {
  const IconComponent = ToastIconByTone[tone]

  return (
    <Alert
      css={[
        toastCss,
        css({
          borderLeftColor: toastColorByTone[tone],
        }),
      ]}
      data-testid="toast"
      type={tone === `DANGER` ? `assertive` : `polite`}
    >
      <span
        css={[
          statusCss,
          css({
            color: toastColorByTone[tone],
          }),
        ]}
      >
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
