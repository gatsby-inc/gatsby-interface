import { Theme } from "../.."
import { keyframes, CSSObject } from "@emotion/core"

const enter = keyframes`
to {
  transform: translate(0, 0) perspective(1000px) rotateX(0);
}
`

export const dropdownCss = (theme: Theme) => ({
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
    width: "20rem",
  },
})

export const menuItemCss = (theme: Theme) => ({
  cursor: `pointer`,
  color: theme.colors.grey[90],
  fontSize: theme.fontSizes[1],
  padding: `${theme.space[4]} ${theme.space[5]}`,
  overflow: "hidden",
})

export const dropdownLabelCss = (theme: Theme): CSSObject => ({
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

  /* everything behind is hard coupling between span, SVG and the label */
  span: {
    textAlign: "left",
    flex: 1,
  },
  svg: {
    transition: "transform .3s",
  },

  "&[aria-expanded]": {
    svg: {
      transform: "rotate(180deg)",
    },
  },
})
