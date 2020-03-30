import { ThemeCss } from "../../theme"

export const concealedValueContainerCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  padding: theme.space[2],
  width: `100%`,
})

export const concealedValueContentCss: ThemeCss = theme => ({
  overflow: `hidden`,
  flexGrow: 1,
  marginRight: theme.space[4],
})

export const concealedValueActionsCss = {}

export const concealedValueInputCss: ThemeCss = theme => ({
  border: `none`,
  overflow: `hidden`,
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[1],
  color: theme.tones[`NEUTRAL`].dark,
  width: `100%`,
})

export const concealedValueButtonCss: ThemeCss = theme => ({
  marginLeft: theme.space[2],
})
