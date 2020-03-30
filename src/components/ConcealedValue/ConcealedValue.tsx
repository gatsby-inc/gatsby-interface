/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import { Button } from "../Button"
import copyToClipboard from "../../utils/helpers/copyToClipboard"
import {
  concealedValueContainerCss,
  concealedValueContentCss,
  concealedValueActionsCss,
  concealedValueInputCss,
  concealedValueButtonCss,
} from "./ConcealedValue.styles"

export type ConcealedValueProps = {
  value: string
  ariaLabel: string
  delay?: number
  concealed?: boolean
}
export function ConcealedValue({
  value,
  ariaLabel,
  concealed = true,
  delay = 5000,
}: ConcealedValueProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [isConcealed, setIsConcealed] = useState(concealed)

  const copyHandler = async () => {
    await copyToClipboard(value)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, delay)
  }

  const revealHandler = () => {
    setIsConcealed(!isConcealed)
  }

  return (
    <div css={concealedValueContainerCss}>
      <div css={concealedValueContentCss}>
        {isConcealed ? (
          // classic password dots
          <input
            css={concealedValueInputCss}
            type="text"
            value="&bull; &bull; &bull; &bull; &bull; &bull;"
            aria-label={`Hidden value of ${ariaLabel}`}
            readOnly
          />
        ) : (
          // unmasked value
          <input
            css={concealedValueInputCss}
            type="text"
            value={value}
            aria-label={ariaLabel}
            readOnly
          />
        )}
      </div>
      <div css={concealedValueActionsCss}>
        <Button
          size="S"
          tone="NEUTRAL"
          variant="SECONDARY"
          css={concealedValueButtonCss}
          onClick={copyHandler}
        >
          {isCopied ? `Copied` : `Copy`}
        </Button>
        <Button
          size="S"
          tone="NEUTRAL"
          variant="SECONDARY"
          css={concealedValueButtonCss}
          onClick={revealHandler}
        >
          {isConcealed ? `Reveal` : `Conceal`}
        </Button>
      </div>
    </div>
  )
}
