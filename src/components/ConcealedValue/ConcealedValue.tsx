/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import {
  Menu as ReachMenu,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
} from "@reach/menu-button"
import { Button } from "../Button"
import copyToClipboard from "../../utils/helpers/copyToClipboard"
import {
  ConcealedValueContainerCss,
  ConcealedValueContentCss,
  ConcealedValueActionsCss,
  ConcealedValueInputCss,
  ConcealedValueMenuCss,
  ConcealedValueMenuButtonCss,
  ConcealedValueMenuListCss,
  ConcealedValueMenuItemCss,
} from "./ConcealedValue.styles"
import { visuallyHiddenCss } from "../../stylesheets/a11y"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

function ConcealedValue({ value = ``, concealed = true, delay = 5000 }) {
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
    <div css={ConcealedValueContainerCss}>
      <div css={ConcealedValueContentCss}>
        {isConcealed ? (
          // classic password dots
          <input
            css={ConcealedValueInputCss}
            type="text"
            value="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"
            readonly
          />
        ) : (
          // unmasked value
          <input
            css={ConcealedValueInputCss}
            type="text"
            value={value}
            readonly
          />
        )}
      </div>
      <div css={ConcealedValueActionsCss}>
        <Button
          size="S"
          tone="NEUTRAL"
          variant="SECONDARY"
          onClick={copyHandler}
        >
          {isCopied ? `Copied` : `Copy`}
        </Button>
        <DisableReachStyleCheck reachComponent="menu-button" />
        <ReachMenu css={ConcealedValueMenuCss}>
          <Button
            css={ConcealedValueMenuButtonCss}
            ButtonComponent={ReachMenuButton}
            size="S"
            tone="NEUTRAL"
            variant="SECONDARY"
          >
            <span css={visuallyHiddenCss}>Actions</span>{" "}
            <span aria-hidden>▾</span>
          </Button>
          <ReachMenuList css={ConcealedValueMenuListCss}>
            <ReachMenuItem
              css={ConcealedValueMenuItemCss}
              onClick={copyHandler}
            >
              Copy
            </ReachMenuItem>
            {isConcealed ? (
              <ReachMenuItem
                css={ConcealedValueMenuItemCss}
                onSelect={() => setIsConcealed(false)}
              >
                Reveal
              </ReachMenuItem>
            ) : (
              <ReachMenuItem
                css={ConcealedValueMenuItemCss}
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

ConcealedValue.propTypes = {
  delay: PropTypes.number,
  concealed: PropTypes.bool,
  value: PropTypes.string,
}

export default ConcealedValue
