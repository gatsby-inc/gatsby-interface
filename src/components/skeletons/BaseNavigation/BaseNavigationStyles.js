import colors from "../../../theme/colors"

const HamburgerIconStylesActiveShared = isInverted => {
  return {
    background: isInverted ? colors.white : colors.black,
    top: 0,
    width: 24,
    transform: `rotate(45deg)`,
  }
}

const HamburgerIconStylesShared = isInverted => {
  return {
    borderRadius: 2,
    height: `3px`,
    background: isInverted ? colors.white : colors.black,
    content: `" "`,
    position: `absolute`,
    transition: `transform 250ms cubic-bezier(.68,-.55,.265,1.55)`,
  }
}

const BaseNavigationDropdownOpenStyles = {
  display: `inline-block`,
  position: `absolute`,
  top: `95%`,
  left: 0,
  margin: 0,
  padding: `0.75rem 0`,
}

const BaseNavigationDropdownClosedStyles = {
  display: `none`,
  listStyle: `none`,
  margin: 0,
  padding: 0,
}

const baseStyles = {
  navigation: {
    default: {
      width: `100%`,
    },
  },
  hamburger: {
    default: {
      display: `none`,
    },
    mobile: {
      background: `none`,
      border: 0,
      display: `block`,
      marginLeft: `auto`,
      marginTop: -6,
      padding: 0,
      position: `relative`,
      zIndex: 22,
      cursor: `pointer`,
      transition: `all 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  },
  hamburgerIcon: isInverted => {
    return {
      width: 24,
      height: `3px`,
      borderRadius: 2,
      background: isInverted ? colors.white : colors.black,
      margin: `10px 0`,
      position: `relative`,
      zIndex: 1000,
      ":before": {
        content: JSON.stringify(``),
        top: -7,
        width: 20,
        right: 0,
        ...HamburgerIconStylesShared(isInverted),
      },
      ":after": {
        content: JSON.stringify(``),
        top: 7,
        width: 16,
        right: 0,
        ...HamburgerIconStylesShared(isInverted),
      },
      "&.active": {
        background: `0 0`,
        "&:after": {
          ...HamburgerIconStylesActiveShared(isInverted),
          transform: `rotate(-45deg)`,
        },
        "&:before": { ...HamburgerIconStylesActiveShared(isInverted) },
        "&:hover": {
          transform: `scale(1.2)`,
        },
      },
    }
  },
  nav: {
    default: {},
    mobile: isMobileNavOpen => {
      return {
        display: isMobileNavOpen ? `block ` : `none`,
      }
    },
  },
  list: {
    wrapper: {
      width: `100%`,
      display: `flex`,
      justifyContent: `space-between`,
    },
    spacer: {
      flex: 1,
    },
    side: {
      listStyle: `none`,
      margin: 0,
      padding: 0,
    },
    leftSide: {
      display: `flex`,
      justifyContent: `flex-start`,
      flex: 1,
    },
    rightSide: {
      display: `flex`,
      justifyContent: `flex-end`,
    },
  },
  item: isInverted => {
    return {
      display: `inline-flex`,
      position: `relative`,
      color: isInverted ? colors.white : colors.black,
      // Show dropdown menu on hover, if exists
      "&:hover > ul": {
        ...BaseNavigationDropdownOpenStyles,
      },
    }
  },
  dropdown: isDropdownOpen => {
    return {
      ...BaseNavigationDropdownClosedStyles,
      ...(isDropdownOpen && BaseNavigationDropdownOpenStyles),
    }
  },
  dropdownToggle: isInverted => {
    return {
      color: isInverted ? colors.white : colors.black,
      background: isInverted ? 0 : `inherit`,
    }
  },
  button: isInverted => {
    return {
      background: isInverted ? colors.white : colors.gatsby,
      border: isInverted ? `1px solid ${colors.purple[20]}` : `0`,
      color: isInverted ? colors.purple[50] : colors.white,
      fontSize: `1rem`,
      fontWeight: `bold`,
      ":focus": {
        background: isInverted ? colors.white : colors.purple[70],
        border: isInverted ? `1px solid ${colors.purple[60]}` : `0`,
        color: isInverted ? colors.purple[60] : colors.white,
      },
      "&:hover:not([disabled])": {
        background: isInverted ? colors.white : colors.purple[70],
        border: isInverted ? `1px solid ${colors.purple[60]}` : `0`,
        color: isInverted ? colors.purple[60] : colors.white,
      },
    }
  },
}

export default baseStyles
