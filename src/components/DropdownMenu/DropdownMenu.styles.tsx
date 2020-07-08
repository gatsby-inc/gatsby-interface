import { ThemeCss } from "../../theme"
import { keyframes } from "@emotion/core"

const enter = keyframes`
to {
  transform: translate(0, 0) perspective(1000px) rotateX(0);
}
`

export const dropdownCss: ThemeCss = theme => ({
  background: theme.colors.primaryBackground,
  border: `1px solid ${theme.colors.grey[10]}`,
  borderRadius: theme.radii[3],
  outline: "none",
  boxShadow: theme.shadows.floating,
  width: "80vw",
  transform: `translate(0, 0) perspective(1000px) rotateX(-35deg)`,
  animation: `${enter} 0.5s ease forwards`,
  transformOrigin: "top center",
  overflow: "auto",
  maxHeight: "20rem",

  "[data-selected]": {
    background: theme.colors.purple[10],
    color: theme.colors.gatsby,
  },

  [theme.mediaQueries.phablet]: {
    maxWidth: "20rem",
  },
})

export const menuItemCss: ThemeCss = theme => ({
  cursor: `pointer`,
  color: theme.colors.grey[90],
  fontSize: theme.fontSizes[1],
  padding: `${theme.space[4]} ${theme.space[5]}`,
  lineHeight: theme.lineHeights.default,
  overflow: "hidden",
  wordWrap: `break-word`,
  overflowWrap: `break-word`,
  hyphens: `auto`,
  display: `block`,
  textDecoration: `none`,
})

export const dropdownButtonCss: ThemeCss = theme => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.colors.grey[30]}`,
  borderRadius: theme.radii[2],
  color: theme.colors.grey[90],
  fontSize: theme.fontSizes[2],
  padding: `${theme.space[2]} ${theme.space[4]}`,
  width: "100%",

  "&:focus": {
    borderColor: theme.colors.purple[40],
    boxShadow: `0 0 0 3px ${theme.colors.purple[20]}`,
    outline: 0,
    transition: `box-shadow 0.15s ease-in-out`,
  },
})

export const dropdownButtonIconCss: ThemeCss = _theme => ({
  marginInlineStart: `auto`,
  transition: "transform .3s",
  "[aria-expanded] > &": {
    transform: "rotate(180deg)",
  },
})
