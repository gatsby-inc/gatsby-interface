import { hexToRGBA } from "../../utils/helpers/hexToRgb"
import { ThemeCss, Theme } from "../../theme"

const liReset = {
  margin: 0,
  padding: 0,
}

export const navigationBaseCss: ThemeCss = _theme => ({
  display: `flex`,
})

export const hamburgerIconCss: ThemeCss = theme => ({
  "&.active": {
    background: `0 0`,
    "&:after": {
      background: theme.colors.white,
      top: 0,
      width: 24,
      transform: `rotate(-45deg)`,
    },
    "&:before": {
      background: theme.colors.white,
      top: 0,
      width: 24,
      transform: `rotate(45deg)`,
    },
    "&:hover": {
      transform: `scale(1.2)`,
    },
  },
})

export const navCss = (
  mobileNavMediaQuery: string,
  isMobileNavOpen: boolean
): ThemeCss => {
  return theme => [
    {
      display: `flex`,
      justifyContent: `space-between`,
      padding: `0 ${theme.space[5]}`,
      width: "100%",
      [mobileNavMediaQuery]: {
        display: isMobileNavOpen ? `block` : `none`,
        position: `fixed`,
        overflowY: `auto`,
        WebkitOverflowScrolling: `touch`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        background: hexToRGBA(theme.colors.purple[90], 0.975, true),
        padding: `5rem 3.5rem 5rem`,
        alignItems: `center`,
        textAlign: `right`,
      },
    },
  ]
}

export const listCss = (mobileNavMediaQuery: string): ThemeCss => {
  return theme => [
    {
      display: `flex`,
      listStyle: `none`,
      width: `100%`,
      alignItems: "center",
      [mobileNavMediaQuery]: {
        flexDirection: "column",
        alignItems: "flex-end",
        listStyle: `none`,
        margin: `0 auto`,
        padding: `0 ${theme.space[5]}`,
        position: `relative`,
        zIndex: 1,
        width: `100%`,
        maxWidth: `90rem`,
        paddingLeft: theme.space[8],
        paddingRight: theme.space[8],
      },
    },
  ]
}

const dropdownOpenCss: ThemeCss = theme => ({
  fontSize: theme.fontSizes[1],
  fontFamily: theme.fonts.system,
  boxShadow: theme.shadows.dialog,
  background: theme.colors.white,
  borderRadius: theme.radii[1],

  ":after": {
    position: `absolute`,
    top: -6,
    left: `50%`,
    width: 12,
    height: 12,
    content: `" "`,
    borderRadius: `2px 0 0 0`,
    background: theme.colors.white,
    boxShadow: `-3px -3px 10px ${hexToRGBA(theme.colors.lilac, 0.1, true)}`,
    willChange: `transform`,
    transitionProperty: `transform`,
    transitionDuration: theme.transitions.speed.default,
  },
})

export const dropdownListCss = (theme: Theme, mobileNavMediaQuery: string) => ({
  display: `grid`,
  gridTemplateColumns: `max-content`,

  // regretably our mobileNavMediaQuery is NOT 'mobile-first' styling
  // so we have to 'remove' default style for mobile version
  [mobileNavMediaQuery]: {
    display: `block`,
    gridTemplateColumns: `none`,
    padding: `0 0 ${theme.space[4]}`,
  },
})

const dropdownMobileCss: ThemeCss = theme => ({
  width: `100%`,
  color: theme.colors.white,
  position: `relative`,
  background: 0,
  padding: 0,
  marginBottom: theme.space[4],
  ":after": {
    content: `none`,
  },
})

export const itemCss = (mobileNavMediaQuery: string): ThemeCss => {
  return theme => [
    liReset,
    {
      marginBottom: 0,
      padding: `0 ${theme.space[4]}`,
      "&:hover > ul": dropdownOpenCss(theme),
      [mobileNavMediaQuery]: {
        display: `block`,
        color: theme.colors.white,
        "&:hover > ul": dropdownMobileCss(theme),
      },
    },
  ]
}

export const itemLinkCss = (
  mobileNavMediaQuery: string,
  isInverted: boolean
): ThemeCss => {
  return theme => [
    {
      display: `block`,
      textDecoration: `none`,
      color: `inherit`,
      fontSize: theme.fontSizes[1],
      fontFamily: theme.fonts.system,
      fontWeight: theme.fontWeights.body,
      transition: `opacity ${theme.transitions.speed.default}`,
      WebkitFontSmoothing: `antialiased`,
      lineHeight: `calc(3.33rem)`,
      position: `relative`,
      "& span": {
        position: `relative`,
      },
      "&.nav-item-active": {
        color: isInverted ? theme.colors.accent : theme.colors.gatsby,
      },
      "&.nav-item-active span:after": {
        width: `100%`,
      },
      "& span:after": {
        position: `absolute`,
        content: `" "`,
        display: `block`,
        width: 0,
        height: 1,
        bottom: -4,
        opacity: 0.2,
        background: isInverted
          ? `linear-gradient(45deg, ${theme.colors.orange[40]}, ${theme.colors.accent})`
          : `linear-gradient(45deg, ${theme.colors.lilac}, ${theme.colors.gatsby})`,
        transition: `all ${theme.transitions.speed.default}`,
      },
      "&:hover": {
        opacity: 0.8,
      },
    },
    {
      [mobileNavMediaQuery]: {
        color: theme.colors.white,
        fontFamily: theme.fonts.heading,
        fontWeight: theme.fontWeights.body,
        transition: `opacity ${theme.transitions.speed.default}`,
        WebkitFontSmoothing: `antialiased`,
        fontSize: theme.fontSizes[6],
        "&:focus, &:hover": {
          color: theme.colors.accent,
          background: `none`,
          opacity: 1,
        },
      },
    },
  ]
}

export const dropdownCss = (
  mobileNavMediaQuery: string,
  offset: string
): ThemeCss => {
  return theme => [
    dropdownOpenCss(theme),
    {
      // offset is set when dropdown in default positioning hits left or right edge of he viewport
      // if so the dropdown is shifted to the position when it fits into the viewport
      transform: `translate(calc(-50% + ${offset}), -${theme.space[2]})`,
      ":after": {
        // to make the spout centered to parent menu item we shift it into the opposite direction
        transform: `translateX(calc(-50% + (${offset} * -1))) rotate(45deg)`,
      },
    },
    {
      [mobileNavMediaQuery]: [
        {
          display: `inline-block`,
          background: 0,
        },
        dropdownMobileCss(theme),
      ],
    },
    {},
  ]
}

export const dropdownToggleCss = (mobileNavMediaQuery: string): ThemeCss => {
  return theme => ({
    marginLeft: theme.space[1],
    border: `none`,
    [mobileNavMediaQuery]: {
      display: `none`,
    },
  })
}

export const dropdownItemCss = (mobileNavMediaQuery: string): ThemeCss => {
  return theme => ({
    "&:first-of-type > a": {
      margin: 0,
    },

    a: {
      color: theme.colors.grey[50],
      textDecoration: `none`,
      padding: `${theme.space[4]} ${theme.space[7]}`,
      display: `block`,
      transition: `all ${theme.transitions.speed.default}`,
      "&:hover": {
        color: theme.colors.grey[90],
        background: hexToRGBA(theme.colors.accent, 0.1, true),
      },
      "&:focus-within": {
        color: theme.colors.grey[90],
        background: hexToRGBA(theme.colors.accent, 0.1, true),
      },
      [mobileNavMediaQuery]: {
        color: theme.colors.white,
        textDecoration: `none`,
        padding: 0,
        margin: `${theme.space[3]} 0 0 0`,
        fontSize: theme.fontSizes[1],

        "&:hover, &:focus-within": {
          opacity: 1,
          color: theme.colors.accent,
          background: `none`,
        },
      },
    },
  })
}

export const buttonItemCss = (mobileNavMediaQuery: string): ThemeCss => {
  return theme => [
    liReset,
    {
      marginLeft: theme.space[3],
      [mobileNavMediaQuery]: {
        marginTop: theme.space[3],
      },
    },
  ]
}
