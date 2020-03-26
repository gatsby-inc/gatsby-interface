/** @jsx jsx */
import { useState } from "react"
import { jsx } from "@emotion/core"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { Button } from "../Button"
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button"
import { copyToClipboard } from "./utils"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

const ConcealedValueContainerCss = theme => ({
  alignItems: `center`,
  display: `flex`,
  justifyContent: `space-between`,
  padding: theme.space[2],
})

const ConcealedValueContentCss = {
  overflow: `hidden`,
  flexBasis: `100%`,
  flexGrow: 0,
}

const ConcealedValueInputCss = theme => ({
  border: `none`,
  marginRight: theme.space[1],
  textOverflow: `ellipsis`,
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[1],
  color: theme.tones[`NEUTRAL`].dark,
  width: `100%`,
})

const ConcealedValueActionsCss = css({
  flexBasis: `100%`,
})

const ConcealedValueMenuCss = {
  // @reach/menu-button base styles
  display: `block`,
  position: `absolute`,
}

const ConcealedValueMenuButtonCss = theme => ({
  marginLeft: theme.space[2],
})

const ConcealedValueMenuListCss = theme => ({
  // @reach/menu-button base styles
  display: `block`,
  whiteSpace: `nowrap`,
  //   border: `solid 1px hsla(0, 0%, 0%, 0.25)`, // avoid dupe key warning
  background: `hsla(0, 100%, 100%, 0.99)`,
  outline: `none`,
  padding: `1rem 0`,
  //   fontSize: `85%`, // avoid dupe key warning
  // gatsby-interface style
  color: theme.tones[`NEUTRAL`].dark,
  border: `1px solid ${theme.tones[`NEUTRAL`].light}`,
  borderRadius: theme.radii[2],
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[1],
})

const ConcealedValueMenuItemCss = theme => ({
  // @reach/menu-button base styles
  display: `block`,
  userSelect: `none`,
  cursor: `pointer`,
  color: `inherit`,
  font: `inherit`,
  textDecoration: `initial`,
  padding: `5px 20px`,
  "&[data-selected]": {
    // background: `hsl(211, 81%, 36%)`, // avoid dupe key warning
    // gatsby-interface style
    background: theme.tones[`NEUTRAL`].dark,
    color: `white`,
    outline: `none`,
  },
})

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
