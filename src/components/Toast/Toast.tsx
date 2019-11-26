/** @jsx jsx */
import React from "react"
import Alert from "@reach/alert"
import { keyframes, css, jsx } from "@emotion/core"
import { MdDone, MdClose, MdWarning } from "react-icons/md"
import {
  fontSizes,
  dimensions,
  palette,
  radius,
  spaces,
} from "../../utils/presets"
import { ToastTone } from "./types"

const toastEntryAnimation = keyframes`
  100% {
     transform: perspective(1000px) rotateX(0);
  }
`

const toastCss = css`
  align-items: center;
  animation: ${toastEntryAnimation} 0.5s 0.25s ease forwards;
  background: ${palette.grey[900]};
  border-left: 8px solid ${palette.green[500]};
  border-radius: ${radius.default} ${radius.default} 0 0;
  color: ${palette.green[50]};
  display: flex;
  font-size: ${fontSizes.xs};
  min-height: ${dimensions.toast.minHeight};
  max-width: calc(100% - (${spaces.l} * 2));
  padding-left: ${spaces.s};
  transform: perspective(1000px) rotateX(90deg);
  transform-origin: bottom center;

  svg {
    height: auto;
    width: calc(${dimensions.toast.minHeight} * 0.4);
  }

  &:not(:first-of-type) {
    border-radius: ${radius.default};
    margin-bottom: ${spaces[`3xs`]};
  }
`

const messageCss = css`
  line-height: 1;
  margin: 0 ${spaces[`2xs`]} 0 ${spaces.xs};
`

const statusCss = css`
  align-items: center;
  color: ${palette.green[500]};
  display: flex;
`

const closeButtonCss = css`
  align-items: center;
  background: none;
  border: none;
  color: ${palette.grey[400]};
  cursor: pointer;
  display: flex;
  height: ${dimensions.toast.minHeight};
  justify-content: center;
  width: ${dimensions.toast.minHeight};
`

const toastColorByTone = {
  SUCCESS: palette.green[500],
  DANGER: palette.red[600],
}

const ToastIconByTone = {
  SUCCESS: MdDone,
  DANGER: MdWarning,
}

export interface ToastProps {
  message: React.ReactNode;
  onClose: () => void;
  closeButtonLabel: string;
  tone: ToastTone;
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
