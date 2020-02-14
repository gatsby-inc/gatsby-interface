import { Theme } from "../../theme"

export const toggleLabelCss = (theme: Theme) => ({
  alignItems: `center`,
  display: `flex`,
  color: theme.colors.grey[90],
  cursor: `pointer`,
  fontFamily: theme.fonts.system,
})
