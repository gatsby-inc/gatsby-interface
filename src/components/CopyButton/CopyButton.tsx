/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import copyToClipboard from "../../utils/helpers/copyToClipboard"
import { ButtonProps, Button } from "../Button/Button"

const baseCss = css`
  html:not([dir="rtl"]) & {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  html[dir="rtl"] & {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export type GetLabelFn = (copied: boolean) => string

export type CopyButtonProps = ButtonProps & {
  content: string
  getButtonLabel?: GetLabelFn
  getButtonTitle?: GetLabelFn
  delay?: number
}

function CopyButton({
  onClick,
  content,
  getButtonLabel = copied => (copied ? `Copied` : `Copy`),
  getButtonTitle = copied =>
    copied ? `Copied to clipboard` : `Copy to clipboard`,
  delay = 5000,
  children,
  ...props
}: CopyButtonProps) {
  const timeoutRef = React.useRef<number | undefined>(undefined)
  const [copied, setCopied] = React.useState<boolean>(false)

  const copyOnClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (onClick) {
      onClick(e)
    }

    copyToClipboard(content).then(() => {
      setCopied(true)

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
      }, delay)
    })
  }

  React.useEffect(
    () => () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    },
    []
  )

  return (
    <Button
      css={baseCss}
      title={getButtonTitle(copied)}
      onClick={copyOnClick}
      size={`S`}
      type="button"
      variant={`SECONDARY`}
      {...props}
    >
      {getButtonLabel(copied)}
      {children}
    </Button>
  )
}

CopyButton.propTypes = {
  content: PropTypes.string.isRequired,
  delay: PropTypes.number,
  onClick: PropTypes.func,
  getButtonLabel: PropTypes.func,
  type: PropTypes.oneOf([`button`, `submit`]),
}

export default CopyButton
