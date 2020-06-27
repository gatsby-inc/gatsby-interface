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

export const searchIconCss: ThemeCss = theme => ({
  position: `absolute`,
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[3],
  top: `calc((100% - ${theme.fontSizes[3]}) / 2)`,
  margin: `0 ${theme.space[3]}`,
  zIndex: 2,
})

export const inputCss: (hasError?: boolean) => ThemeCss = (
  hasError = false
) => theme => [
  getInputStyles(theme, hasError),
  {
    // offset padding based on search icon spacing and size
    paddingLeft: `calc(${theme.fontSizes[3]} + 2 * ${theme.space[3]})`,
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
  pointerEvents: `none`,
})

export const inputWithToggleButtonCss: ThemeCss = theme => ({
  // offset padding based on toggle button padding and size
  paddingRight: `calc(${theme.fontSizes[5]} + 2 * ${theme.space[3]})`,
})

export const toggleButtonCss: ThemeCss = theme => ({
  position: `absolute`,
  top: 1,
  right: 1,
  zIndex: 1,
  background: theme.colors.white,
  border: `none`,
  margin: 0,
  padding: `0 ${theme.space[3]}`,
  display: `flex`,
  alignItems: `center`,
  color: theme.colors.grey[70],
  fontSize: theme.fontSizes[5],
  height: `calc(100% - 2px)`,
  borderRadius: theme.radii[2],
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
