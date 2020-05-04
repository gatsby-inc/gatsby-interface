import { ThemeCss } from "../../theme"

const reachUIDefaultStyles: Record<string, ThemeCss> = {
  tabs: _theme => ({
    '[data-orientation="vertical"]': {
      display: `flex`,
    },
  }),
  tabList: _theme => ({
    display: `flex`,
    '[aria-orientation="vertical"]': {
      flexDirection: `column`,
    },
  }),
  tab: _theme => ({
    display: "inline-block",
    border: "none",
    background: "none",
    color: "inherit",
    font: "inherit",
    cursor: "pointer",
    WebkitAppearance: "none",
    MozAppearance: "none",
  }),
}

const tabsCss: ThemeCss = theme => [reachUIDefaultStyles.tabs(theme)]

const tabsListCss: ThemeCss = theme => [
  reachUIDefaultStyles.tabList(theme),
  {
    display: `flex`,
    flexGrow: 1,
    flexShrink: 0,
    listStyleType: `none`,
    margin: 0,
    position: `relative`,

    "&:after": {
      background: theme.colors.blackFade[10],
      bottom: `-1px`,
      content: `""`,
      height: `1px`,
      position: `absolute`,
      left: 0,
      width: `100%`,
    },
  },
]

const tabCss: ThemeCss = theme => [
  reachUIDefaultStyles.tab(theme),
  {
    flexShrink: 0,
    margin: 0,
    padding: 0,
    position: `relative`,

    "&:not(:last-of-type)": {
      marginRight: theme.space[5],
    },
  },
]

const tabButtonCss: ThemeCss = theme => ({
  alignItems: `center`,
  display: `flex`,
  margin: 0,
  padding: `${theme.space[4]} ${theme.space[3]}`,
  position: `relative`,
  overflowY: `hidden`,
  color: theme.colors.grey[60],
  fontFamily: theme.fonts.system,
  fontSize: theme.fontSizes[2],
  background: `none`,
  border: `none`,
  cursor: `pointer`,

  "&:after": {
    borderTopLeftRadius: theme.radii[1],
    borderTopRightRadius: theme.radii[1],
    bottom: 0,
    content: `""`,
    left: 0,
    height: `4px`,
    position: `absolute`,
    transition: `transform ${theme.transitions.speed.default}`,
    width: `100%`,
    background: theme.colors.purple[30],
    transform: `translateY(100%)`,
  },

  "&:hover": {
    "&:after": {
      transform: `translateY(40%)`,
    },
  },
})

const tabButtonSelectedCss: ThemeCss = theme => ({
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.grey[70],
  "&:after": {
    background: theme.colors.purple[60],
    transform: `translateY(40%)`,
  },
})

export const tabsStyles = {
  tabs: tabsCss,
  tabList: tabsListCss,
  tab: tabCss,
  tabButton: tabButtonCss,
  tabButtonSelected: tabButtonSelectedCss,
}
