import { ThemeCss } from "../../theme"

export const baseCss: ThemeCss = theme => ({
  display: `inline-flex`,
  alignItems: `center`,
  borderRadius: `${theme.radii[2]} ${theme.radii[2]} 0 0`,
  background: theme.colors.secondaryBackground,
  border: `1px solid ${theme.colors.standardLine}`,
  color: theme.colors.grey[40],
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
  height: `3.5rem`,
  margin: `0 ${theme.space[2]}`,
  padding: `${theme.space[1]} ${theme.space[5]} 0`,
  position: `relative`,
  zIndex: 0,
  [theme.mediaQueries.phablet]: {
    padding: `${theme.space[1]} ${theme.space[7]} 0`,
  },
})

export const activeCss: ThemeCss = theme => ({
  background: theme.colors.primaryBackground,
  borderBottomColor: theme.colors.secondaryBackground,
  color: theme.colors.grey[90],
  zIndex: 2,
  ":before, :after": {
    border: `1px solid ${theme.colors.standardLine}`,
    bottom: `-1px`,
    content: `""`,
    height: `6px`,
    position: `absolute`,
    width: `6px`,
  },
  ":before": {
    borderBottomRightRadius: `6px`,
    borderWidth: `0 1px 1px 0`,
    boxShadow: `2px 2px 0 #fff`,
    left: `-6px`,
  },
  ":after": {
    borderBottomLeftRadius: `6px`,
    borderWidth: `0 0 1px 1px`,
    boxShadow: `-2px 2px 0 #fff`,
    right: `-6px`,
  },
})

export const linkCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  textDecoration: `none`,
  color: theme.colors.purple[40],
  "&:active": {
    color: `inherit`,
  },
})

export const labelCss: ThemeCss = theme => ({
  display: `none`,
  [theme.mediaQueries.tablet]: {
    display: `inline`,
  },
})

export const labelActiveCss: ThemeCss = _theme => ({
  display: `inline`,
})

export const stepNumberCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  flexShrink: 0,
  background: theme.colors.grey[30],
  color: theme.colors.white,
  fontFamily: theme.fonts.system,
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.solid,
  height: `20px`,
  width: `20px`,
  borderRadius: theme.radii[6],
  [theme.mediaQueries.tablet]: {
    marginRight: theme.space[4],
  },
  ":before": {
    counterIncrement: `section`,
    content: `counters(section,".") " "`,
  },
})

export const stepNumberActiveCss: ThemeCss = theme => ({
  background: theme.colors.purple[40],
  marginRight: theme.space[4],
})

export const stepNumberDoneCss: ThemeCss = theme => ({
  background: theme.colors.purple[30],
})
