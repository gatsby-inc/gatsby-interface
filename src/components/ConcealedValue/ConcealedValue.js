/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { Button } from "../Button"
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button"
import { copyToClipboard } from "./utils"
import { ReachMenuCss, ReachMenuListCss, ReachMenuItemCss } from "./utils"
// import "@reach/menu-button/styles.css"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

const ConcealedValueContainerCss = theme => ({
  alignItems: `center`,
  display: `flex`,
  justifyContent: `space-between`,
  padding: theme.space[2],
})

const ConcealedValueContentCss = css({
  //   border: `thin solid green`,
  //   backgroundColor: `green`,
  overflow: `hidden`,
  flexBasis: `100%`,
  flexGrow: 0,
})

const ConcealedValueActionsCss = css({
  //   border: `thin solid purple`,
  flexBasis: `100%`,
})

const ConcealedValueMenuCss = {
  ...ReachMenuCss,
}

const ConcealedValueMenuButtonCss = theme => ({
  marginLeft: theme.space[4],
})

const ConcealedValueMenuListCss = {
  ...ReachMenuListCss,
}

const ConcealedValueMenuItemCss = {
  ...ReachMenuItemCss,
}

// X 1. show a value
// X 2. show or hide a value based on state
// 3. show or hide a value based on state managed via dropdown
// 4. copy the value (accessible whether concealed or revealed)

// whether concealed or revealed, copy option should be
// shown on hover

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
          // return dots
          <span>&bull; &bull; &bull; &bull; &bull; &bull;</span>
        ) : (
          // return unmasked value
          <span>{value}</span>
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
            Actions <span aria-hidden>▾</span>
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
  // children: PropTypes.any.isRequired,
  delay: PropTypes.number,
  concealed: PropTypes.bool,
  value: PropTypes.string,
}

export default ConcealedValue
