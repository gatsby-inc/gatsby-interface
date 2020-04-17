import { keyframes } from "@emotion/core"
import { ThemeCss } from "../../theme"
import { hexToRGBA } from "../../utils/helpers"
import { StyledModalVariant } from "./StyledModal"

const entry = keyframes`
  100% {
     opacity: 1
  }
`

export const headerCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  padding: `${theme.space[7]} ${theme.space[8]}`,
  borderRadius: `${theme.radii[3]} ${theme.radii[3]} 0 0`,
  background: theme.colors.white,

  [theme.mediaQueries.mobile]: {
    paddingLeft: theme.space[8],
    paddingRight: theme.space[8],
  },

  [theme.mediaQueries.phablet]: {
    paddingLeft: theme.space[9],
    paddingRight: theme.space[9],
  },
})

export const titleCss: ThemeCss = theme => ({
  animation: `${entry} 0.75s 0.7s ease forwards`,
  fontSize: theme.fontSizes[4],
  opacity: 0,
})

const CLOSE_BUTTON_SIZE = 40
const CLOSE_ICON_SIZE = 20

export const closeButtonCss: ThemeCss = _theme => ({
  display: `inline-flex`,
  alignItems: `center`,
  justifyContent: `center`,
  flexShrink: 0,
  border: `none`,
  background: `none`,
  padding: 0,
  cursor: `pointer`,
  width: CLOSE_BUTTON_SIZE,
  height: CLOSE_BUTTON_SIZE,
  transform: `translateX(${CLOSE_BUTTON_SIZE - CLOSE_ICON_SIZE / 2})`,
})

export const closeIconCss: ThemeCss = _theme => ({
  width: CLOSE_ICON_SIZE,
  height: CLOSE_ICON_SIZE,
})

export const bodyCss: ThemeCss = theme => ({
  display: `flex`,
  flexDirection: `column`,
  background: theme.colors.white,
  padding: `${theme.space[5]} ${theme.space[8]} ${theme.space[7]}`,
  borderRadius: `0 0 ${theme.radii[3]} ${theme.radii[3]}`,
  animation: `${entry} 0.75s 0.8s ease forwards`,
  opacity: 0,

  [theme.mediaQueries.mobile]: {
    paddingTop: theme.space[7],
    paddingBottom: theme.space[7],
    paddingRight: theme.space[7],
    paddingLeft: theme.space[7],
  },

  [theme.mediaQueries.phablet]: {
    paddingTop: theme.space[8],
    paddingBottom: theme.space[8],
    paddingRight: theme.space[8],
    paddingLeft: theme.space[8],
  },
})

const bodyGradientBaseCss: ThemeCss = theme => ({
  position: `relative`,

  ":before": {
    position: "absolute",
    content: '""',
    top: "0",
    left: "0",
    width: "100%",
    height: "5px",
    backgroundSize: "50px 50px",
    backgroundImage: `linear-gradient(
        130deg,
        ${hexToRGBA(theme.colors.white, 0.5, true)} 25%,
        transparent 25%,
        transparent 50%,
        ${hexToRGBA(theme.colors.white, 0.5, true)} 50%,
        ${hexToRGBA(theme.colors.white, 0.5, true)} 75%,
        transparent 75%,
        transparent
      )`,
  },
})

export const bodyVariantCss: Record<StyledModalVariant, ThemeCss> = {
  DEFAULT: _theme => ({}),
  SUCCESS: theme => ({
    backgroundColor: theme.colors.green[5],
    borderTop: `1px solid ${theme.colors.green[10]}`,
  }),
  WARNING: theme => [
    bodyGradientBaseCss(theme),
    {
      backgroundColor: theme.colors.red[5],
      ":before": {
        backgroundColor: hexToRGBA(theme.colors.red[50], 0.8, true),
      },
    },
  ],
  ERROR: theme => ({
    backgroundColor: theme.colors.red[5],
    borderTop: `1px solid ${theme.colors.red[10]}`,
  }),
  ACTION: theme => ({
    backgroundColor: theme.colors.purple[5],
    borderTop: `1px solid ${theme.colors.purple[10]}`,
  }),
  RETAKE: theme => [
    bodyGradientBaseCss(theme),
    {
      backgroundColor: theme.colors.purple[5],
      ":before": {
        backgroundColor: hexToRGBA(theme.colors.purple[50], 0.8, true),
      },
    },
  ],
}

export const actionsCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  width: `100%`,
  marginTop: theme.space[7],
  [theme.mediaQueries.desktop]: {
    marginTop: theme.space[8],
  },
})
