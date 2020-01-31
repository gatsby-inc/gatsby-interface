import { ThemeCss } from "../theme"

export const cardFrameCss: ThemeCss = theme => ({
  background: theme.colors.primaryBackground,
  borderRadius: theme.space[2],
  boxShadow: theme.shadows.raised,
})
