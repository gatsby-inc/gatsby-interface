/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Button } from "../Button"
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button"
import copyToClipboard from "../../utils/helpers/copyToClipboard"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { visuallyHiddenCss } from "../../stylesheets/a11y"
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
function ConcealedValue({ value = `default`, concealed = true, delay = 5000 }) {
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
            value="&bull; &bull; &bull; &bull; &bull; &bull;"
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
        <Menu css={ConcealedValueMenuCss}>
          <Button
            css={ConcealedValueMenuButtonCss}
            ButtonComponent={MenuButton}
            size="S"
            tone="NEUTRAL"
            variant="SECONDARY"
          >
            <span css={visuallyHiddenCss}>Actions</span>{" "}
            <span aria-hidden>▾</span>
          </Button>
          <MenuList css={ConcealedValueMenuListCss}>
            <MenuItem css={ConcealedValueMenuItemCss} onClick={copyHandler}>
              Copy
            </MenuItem>
            {isConcealed ? (
              <MenuItem
                css={ConcealedValueMenuItemCss}
                onSelect={() => setIsConcealed(false)}
              >
                Reveal
              </MenuItem>
            ) : (
              <MenuItem
                css={ConcealedValueMenuItemCss}
                onSelect={() => setIsConcealed(true)}
              >
                Conceal
              </MenuItem>
            )}
          </MenuList>
        </Menu>
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
