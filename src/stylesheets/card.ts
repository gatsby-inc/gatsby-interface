import { CustomCss } from "../theme"

export const cardFrameCss: CustomCss = theme => ({
  background: theme.colors.primaryBackground,
  borderRadius: theme.space[2],
  boxShadow: theme.shadows.raised,
})
