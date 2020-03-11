import { getInputStyles } from "../form/components/FormField.helpers"
import { ThemeCss } from "../../theme"

export const comboboxCss: ThemeCss = () => ({
  position: `relative`,
})

export const popoverCss: ThemeCss = theme => ({
  position: `absolute`,
  zIndex: 1000,
  width: `100%`,
  background: theme.colors.primaryBackground,
  border: `1px solid ${theme.colors.grey[10]}`,
  borderBottomLeftRadius: theme.radii[3],
  borderBottomRightRadius: theme.radii[3],
  boxShadow: `0 5px 10px 3px rgba(0, 0, 0, 0.1)`,
  color: theme.colors.grey[90],
  fontSize: theme.fontSizes[1],
})

export const inputCss: (hasError?: boolean) => ThemeCss = (
  hasError = false
) => theme => [
  getInputStyles(theme, hasError),
  {
    paddingLeft: theme.space[8],
    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CiAgPHBhdGggZmlsbD0iI0I3QjVCRCIgZD0iTTE1LjUgMTRoLS44bC0uMy0uM2MxLTEuMSAxLjYtMi42IDEuNi00LjJhNi41IDYuNSAwIDEgMC0yLjMgNWwuMy4ydi44bDUgNSAxLjUtMS41LTUtNXptLTYgMGE0LjUgNC41IDAgMSAxIDAtOSA0LjUgNC41IDAgMCAxIDAgOXoiLz4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==)`,
    backgroundPosition: `left 0.4rem center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `${theme.space[6]} ${theme.space[6]}`,
  },
]

export const inputWithSelectedValueCss: ThemeCss = theme => ({
  "&:focus + span": {
    fontSize: theme.fontSizes[0],
    transform: `translate3d(0, 0, 0)`,
    backgroundColor: theme.colors.white,
    color: theme.colors.purple[70],
    opacity: 1,
  },
})

export const selectedValueCss: ThemeCss = theme => ({
  fontSize: theme.fontSizes[2],
  lineHeight: theme.lineHeights.solid,
  position: `absolute`,
  zIndex: 2,
  color: theme.colors.grey[90],
  top: `calc(-${theme.fontSizes[0]} / 2)`,
  left: theme.space[5],
  maxWidth: `calc(100% - ${theme.space[5]} - ${theme.space[8]})`,
  overflow: `hidden`,
  textOverflow: `ellipsis`,
  whiteSpace: "nowrap",
  padding: `0 ${theme.space[2]}`,
  opacity: 0,
  transform: `translate3d(0.8rem, 1.1rem, 0)`,
  transition: `all ${theme.transitions.curve.default} ${theme.transitions.speed.default}`,
})

export const listCss: ThemeCss = () => ({
  listStyle: `none`,
  margin: 0,
  padding: 0,
  userSelect: `none`,
  maxHeight: `18rem`,
  height: `auto`,
  overflowY: `scroll`,
})

export const optionCss: (
  highlightMatches: boolean
) => ThemeCss = highlightMatches => theme => [
  {
    cursor: `pointer`,
    padding: `${theme.space[4]} ${theme.space[5]}`,
    margin: 0,
    overflow: `hidden`,
    position: `relative`,
    textDecoration: `none`,
    "&:hover": {
      background: theme.colors.purple[10],
    },
    "&[data-highlighted]": {
      background: theme.colors.purple[10],
      color: theme.colors.purple[50],
      outline: `none`,
    },
  },
  highlightMatches && {
    "[data-suggested-value]": {
      fontWeight: theme.fontWeights.body,
    },
    "[data-user-value]": {
      color: theme.colors.purple[60],
      fontWeight: theme.fontWeights.bold,
      textDecoration: `underline`,
    },
  },
]

export const selectedOptionIconCss: ThemeCss = theme => ({
  transition: `0.5s`,
  marginRight: theme.space[3],
  "[data-reach-combobox-option][data-highlighted] > &": {
    transform: `scale(1.2)`,
  },
})
