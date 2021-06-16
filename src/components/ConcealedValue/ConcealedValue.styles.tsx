import { ThemeCss } from "../../theme"

export const concealedValueContainerCss: ThemeCss = theme => ({
  display: `flex`,
  justifyContent: `space-between`,
  backgroundColor: theme.colors.grey[10],
  border: `1px solid ${theme.colors.grey[30]}`,
  borderRadius: theme.radii[2],
  width: `100%`,
})

export const concealedValueContentCss = {
  overflow: `hidden`,
  flexGrow: 1,
}

export const concealedValueActionsCss: ThemeCss = theme => ({
  display: `flex`,
  padding: theme.space[2],
})

export const concealedValueInputCss: ThemeCss = theme => ({
  background: `transparent`,
  border: `none`,
  overflow: `hidden`,
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes[2],
  color: theme.tones[`NEUTRAL`].text,
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  height: `100%`,
  width: `100%`,
})

export const concealedValueButtonCss: ThemeCss = theme => ({
  background: theme.colors.white,
  marginLeft: theme.space[2],
})
