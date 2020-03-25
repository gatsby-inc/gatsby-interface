/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { Button } from "../Button"

import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button"
import "@reach/menu-button/styles.css"

const tempContainerCss = css({
  border: `thin solid red`,
})

// X 1. show a value
// X 2. show or hide a value based on state
// 3. show or hide a value based on state managed via dropdown
// 4. copy the value (accessible whether concealed or revealed)

// whether concealed or revealed, copy option should be
// shown on hover
function ConcealedValue({ value = `default`, concealed = true }) {
  //   const [isCopied, setIsCopied] = useState(false)
  const [isConcealed, setIsConcealed] = useState(concealed)
  console.log({ isConcealed })
  return (
    <div css={tempContainerCss}>
      {isConcealed ? (
        // return dots
        <span>&bull; &bull; &bull; &bull; &bull; &bull;</span>
      ) : (
        // return unmasked value
        <span>{value}</span>
      )}
      <Button
        size="S"
        tone="NEUTRAL"
        variant="SECONDARY"
        onClick={() => {
          // implement copy function
          //   setIsCopied(true)
          //   setTimeout(() => {
          //     setIsCopied(false)
          //   }, delay)
        }}
      >
        Copy
      </Button>
      <Menu>
        <MenuButton>
          Actions <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={() => alert("Copy")}>Copy</MenuItem>
          {isConcealed ? (
            <MenuItem onSelect={() => setIsConcealed(false)}>Reveal</MenuItem>
          ) : (
            <MenuItem onSelect={() => setIsConcealed(true)}>Conceal</MenuItem>
          )}
        </MenuList>
      </Menu>
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
