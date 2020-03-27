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
  textOverflow: `ellipsis`,
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[1],
  color: theme.tones[`NEUTRAL`].dark,
  width: `100%`,
})

export const concealedValueMenuCss: ThemeCss = () => ({
  /* @reach/menu-button base styles */
  display: `block`,
  position: `absolute`,
})

export const concealedValueMenuButtonCss: ThemeCss = theme => ({
  marginLeft: theme.space[2],
})

export const concealedValueMenuListCss: ThemeCss = theme => ({
  /* @reach/menu-button base styles */
  display: `block`,
  whiteSpace: `nowrap`,
  //   border: `solid 1px hsla(0, 0%, 0%, 0.25)`, // avoid dupe key warning
  background: `hsla(0, 100%, 100%, 0.99)`,
  outline: `none`,
  padding: `1rem 0`,
  //   fontSize: `85%`, // avoid dupe key warning
  // gatsby-interface style
  color: theme.tones[`NEUTRAL`].dark,
  border: `1px solid ${theme.tones[`NEUTRAL`].light}`,
  borderRadius: theme.radii[2],
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes[1],
})

export const concealedValueMenuItemCss: ThemeCss = theme => ({
  /* @reach/menu-button base styles */
  display: `block`,
  userSelect: `none`,
  cursor: `pointer`,
  color: `inherit`,
  font: `inherit`,
  textDecoration: `initial`,
  padding: `5px 20px`,
  "&[data-selected]": {
    // background: `hsl(211, 81%, 36%)`, // avoid dupe key warning
    /* gatsby-interface style */
    background: theme.tones[`NEUTRAL`].dark,
    color: `white`,
    outline: `none`,
  },
})
