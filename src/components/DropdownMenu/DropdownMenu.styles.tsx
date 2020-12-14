import { ThemeCss } from "../../theme"
import { DropdownMenuItemTone, DropdownMenuSize } from "./DropdownMenu"

export const dropdownCss: ThemeCss = theme => ({
  background: theme.colors.primaryBackground,
  border: `1px solid ${theme.colors.grey[10]}`,
  borderRadius: theme.radii[3],
  outline: "none",
  boxShadow: theme.shadows.floating,
  transformOrigin: "50% top",
  overflow: "auto",
  maxHeight: "20rem",
  // @TODO port to `Combobox` — providing this bit of vertical padding
  // aligns the first and last action items' visual size with the rest of the
  // dropdown items
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],

  // @TODO consider reserving purple background for `active` (CSS) and
  // `selected` states only — `hover` background could be light grey instead
  "[data-selected]": {
    background: theme.colors.purple[10],
    color: theme.colors.gatsby,
  },

  [theme.mediaQueries.phablet]: {},
})

export const dropdownSizeCss: Record<DropdownMenuSize, ThemeCss> = {
  AUTO: _theme => ({}),
  MAX_CONTENT: _theme => ({
    width: `max-content`,
  }),
  LEGACY: theme => ({
    width: `max-content`,
    [theme.mediaQueries.phablet]: {
      width: "80vw",
      maxWidth: "20rem",
    },
  }),
}

export const menuItemCss: ThemeCss = theme => ({
  cursor: `pointer`,
  color: theme.colors.grey[90],
  fontSize: theme.fontSizes[1],
  // @TODO consider bumping horizontal, decrease vertical padding;
  // same goes for `Combobox`
  padding: `${theme.space[4]} ${theme.space[5]}`,
  lineHeight: theme.lineHeights.default,
  overflow: "hidden",
  wordWrap: `break-word`,
  overflowWrap: `break-word`,
  hyphens: `auto`,
  display: `block`,
  textDecoration: `none`,
})

export const menuItemToneCss: Record<DropdownMenuItemTone, ThemeCss> = {
  DEFAULT: theme => ({
    color: theme.colors.grey[90],
    "[data-selected] > &": {
      color: theme.colors.purple[50],
    },
  }),
  CRITICAL: theme => ({
    color: theme.colors.red[90],
    "[data-selected] &": {
      color: theme.colors.red[90],
    },
  }),
}

export const menuItemIconCss: ThemeCss = theme => ({
  // Based on suggestion from https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  top: `.125rem`,
  position: `relative`,
  marginRight: theme.space[3],
  width: theme.fontSizes[2],
  height: theme.fontSizes[2],
  transition: `0.5s`,
  "[data-selected] &": {
    transform: "scale(1.2)",
  },
})

export const menuItemIconToneCss: Record<DropdownMenuItemTone, ThemeCss> = {
  DEFAULT: theme => ({
    color: theme.colors.grey[50],
    "[data-selected] &": {
      color: theme.colors.purple[50],
    },
  }),
  CRITICAL: theme => ({
    color: theme.colors.red[30],
    "[data-selected] &": {
      color: theme.colors.red[90],
    },
  }),
}

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

export const dropdownDividerCss: ThemeCss = theme => ({
  // we're applying this to `hr`
  border: 0,
  borderTop: `1px solid ${theme.colors.grey[20]}`,
  marginBottom: theme.space[3],
  marginTop: theme.space[3],
})

export const dropdownHeaderCss: ThemeCss = theme => ({
  color: theme.colors.grey[50],
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.semiBold,
  margin: 0,
  padding: `${theme.space[4]} ${theme.space[5]}`,
})
