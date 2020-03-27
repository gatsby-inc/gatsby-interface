/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import {
  Menu as ReachMenu,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
} from "@reach/menu-button"
import { Button } from "../Button"
import copyToClipboard from "../../utils/helpers/copyToClipboard"
import {
  concealedValueContainerCss,
  concealedValueContentCss,
  concealedValueActionsCss,
  concealedValueInputCss,
  concealedValueMenuCss,
  concealedValueMenuButtonCss,
  concealedValueMenuListCss,
  concealedValueMenuItemCss,
} from "./ConcealedValue.styles"
import { visuallyHiddenCss } from "../../stylesheets/a11y"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

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

  return (
    <div css={concealedValueContainerCss}>
      <div css={concealedValueContentCss}>
        {isConcealed ? (
          // classic password dots
          <input
            css={concealedValueInputCss}
            type="text"
            value="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            aria-hidden={true}
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
          onClick={copyHandler}
        >
          {isCopied ? `Copied` : `Copy`}
        </Button>
        <DisableReachStyleCheck reachComponent="menu-button" />
        <ReachMenu css={concealedValueMenuCss}>
          <Button
            css={concealedValueMenuButtonCss}
            ButtonComponent={ReachMenuButton as any}
            size="S"
            tone="NEUTRAL"
            variant="SECONDARY"
          >
            <span css={visuallyHiddenCss}>Actions</span>{" "}
            <span aria-hidden>▾</span>
          </Button>
          <ReachMenuList css={concealedValueMenuListCss}>
            <ReachMenuItem
              css={concealedValueMenuItemCss}
              onSelect={copyHandler}
            >
              Copy
            </ReachMenuItem>
            {isConcealed ? (
              <ReachMenuItem
                css={concealedValueMenuItemCss}
                onSelect={() => setIsConcealed(false)}
              >
                Reveal
              </ReachMenuItem>
            ) : (
              <ReachMenuItem
                css={concealedValueMenuItemCss}
                onSelect={() => setIsConcealed(true)}
              >
                Conceal
              </ReachMenuItem>
            )}
          </ReachMenuList>
        </ReachMenu>
      </div>
    </div>
  )
}
