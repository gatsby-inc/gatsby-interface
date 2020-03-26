import colors from "../colors"
import fontSizes from "../fontSizes"
import fonts from "../fonts"
import { hexToRGBA } from "../../utils/helpers/hexToRgb"

import space from "../../theme/space"
import transition from "../../theme/transition"

const liReset = {
  margin: 0,
  padding: 0,
}

const styles = {}

styles.Navigation = {
  default: { display: `flex` },
  hamburger: {},
}

styles.Hamburger = {}

styles.HamburgerIcon = {
  "&.active": {
    background: `0 0`,
    "&:after": {
      background: colors.white,
      top: 0,
      width: 24,
      transform: `rotate(-45deg)`,
    },
    "&:before": {
      background: colors.white,
      top: 0,
      width: 24,
      transform: `rotate(45deg)`,
    },
    "&:hover": {
      transform: `scale(1.2)`,
    },
  },
}

styles.Nav = {
  default: {
    display: `flex`,
    justifyContent: `space-between`,
    padding: `0 ${space[5]}`,
    width: "100%",
  },
  mobile: isMobileNavOpen => {
    return {
      display: isMobileNavOpen ? `block` : `none`,
      position: `fixed`,
      overflowY: `auto`,
      WebkitOverflowScrolling: `touch`,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      background: hexToRGBA(colors.purple[90], 0.975),
      padding: `5rem 3.5rem 5rem`,
      alignItems: `center`,
      textAlign: `right`,
    }
  },
}

styles.List = {
  default: {
    display: `flex`,
    listStyle: `none`,
    width: `100%`,
    alignItems: "center",
  },
  mobile: {
    flexDirection: "column",
    alignItems: "flex-end",
    listStyle: `none`,
    margin: `0 auto`,
    padding: `0 1rem`,
    position: `relative`,
    zIndex: 1,
    width: `100%`,
    maxWidth: `90rem`,
    paddingLeft: `2rem`,
    paddingRight: `2rem`,
  },
}

const DropdownOpenStyles = {
  fontSize: fontSizes[1],
  fontFamily: fonts.system,
  right: 0,
  boxShadow: `0px 4px 16px rgba(46, 41, 51, 0.08), 0px 8px 24px rgba(71, 63, 79, 0.16)`,
  background: colors.white,
  width: 450,
  borderRadius: 2,

  ":after": {
    position: `absolute`,
    top: -6,
    left: 30,
    width: 12,
    height: 12,
    content: `" "`,
    transform: `rotate(45deg)`,
    borderRadius: `2 0 0 0`,
    background: colors.white,
    boxShadow: `-3px -3px 10px ${hexToRGBA(colors.lilac, 0.1)}`,
    willChange: `transform`,
    transitionProperty: `transform`,
    transitionDuration: transition.speed.default,
  },
}

const DropdownMobileStyles = {
  width: `100%`,
  color: colors.white,
  position: `relative`,
  background: 0,
  padding: 0,
  marginBottom: `0.75rem`,
  ":after": {
    content: `none`,
  },
}

styles.Item = {
  default: {
    ...liReset,
    marginBottom: 0,
    padding: `0 ${space[4]}`,
    "&:hover > ul": {
      ...DropdownOpenStyles,
    },
  },
  mobile: {
    display: `block`,
    color: colors.white,
    "&:hover > ul": {
      ...DropdownMobileStyles,
    },
  },
}

styles.ItemLink = {
  default: isInverted => {
    return {
      display: `block`,
      textDecoration: `none`,
      color: `inherit`,
      fontSize: fontSizes[1],
      fontFamily: fonts.system,
      fontWeight: `normal`,
      transition: `opacity ${transition.speed.default}`,
      WebkitFontSmoothing: `antialiased`,
      lineHeight: `calc(3.33rem)`,
      position: `relative`,
      "& span": {
        position: `relative`,
      },
      "&.nav-item-active": {
        color: isInverted ? colors.accent : colors.gatsby,
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
          ? `linear-gradient(45deg, ${colors.orange[40]}, ${colors.accent})`
          : `linear-gradient(45deg, ${colors.lilac}, ${colors.gatsby})`,
        transition: `all ${transition.speed.default}`,
      },
      "&:hover": {
        opacity: 0.8,
      },
    }
  },
  mobile: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontWeight: `normal`,
    transition: `opacity ${transition.speed.default}`,
    WebkitFontSmoothing: `antialiased`,
    fontSize: fontSizes[6],
    "&:focus, &:hover": {
      color: colors.accent,
      background: `none`,
      opacity: 1,
    },
  },
}

styles.Dropdown = {
  default: {
    ...DropdownOpenStyles,
  },
  mobile: {
    display: `inline-block`,
    background: 0,
    ...DropdownMobileStyles,
  },
}

styles.DropdownToggle = {
  default: {
    marginLeft: space[1],
    border: `none`,
  },
  mobile: {
    display: `none`,
  },
}

styles.DropdownItem = {
  default: {
    a: {
      color: colors.grey[50],
      textDecoration: `none`,
      padding: `${space[4]} ${space[7]}`,
      display: `block`,
      transition: `all ${transition.speed.default}`,
      "&:hover": {
        color: colors.grey[90],
        background: hexToRGBA(colors.accent, 0.1),
      },
      "&:focus-within": {
        color: colors.grey[90],
        background: hexToRGBA(colors.accent, 0.1),
      },
    },
  },
  mobile: {
    a: {
      color: colors.white,
      textDecoration: `none`,
      padding: 0,
      margin: `${space[3]} 0 0 0`,
      fontSize: fontSizes[1],
      "&:hover, &:focus-within": {
        opacity: 1,
        color: colors.accent,
        background: `none`,
      },
    },
  },
}

styles.ButtonItem = {
  default: {
    ...liReset,
    marginLeft: `.5rem`,
  },
  mobile: {
    marginTop: `.5rem`,
  },
}

export default styles
