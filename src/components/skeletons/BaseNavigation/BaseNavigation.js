/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"
import { MdArrowForward } from "react-icons/md"

import { LinkButton } from "../../LinkButton"
import { AnchorButton } from "../../AnchorButton"
import { visuallyHidden } from "../../../utils/helpers"
import useOnClickOutside from "../../../utils/hooks/useOnClickOutside"

import baseStyles from "./BaseNavigationStyles"

const BaseNavigationContext = React.createContext()

const BaseNavigation = ({
  items = [],
  secondaryItems = [],
  children,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  isMobileNavOpen: customIsMobileNavOpen,
  setIsMobileNavOpen: customSetIsMobileNavOpen,
  // override base components
  Hamburger = BaseNavigation.Hamburger,
  HamburgerIcon = BaseNavigation.HamburgerIcon,
  Nav = BaseNavigation.Nav,
  List = BaseNavigation.List,
  Item = BaseNavigation.Item,
  ItemLink = BaseNavigation.ItemLink,
  Dropdown = BaseNavigation.Dropdown,
  DropdownItem = BaseNavigation.DropdownItem,
  DropdownToggle = BaseNavigation.DropdownToggle,
  Button = BaseNavigation.LinkButton,
  ...rest
}) => {
  const [internalIsMobileNavOpen, internalSetIsMobileNavOpen] = React.useState(
    false
  )

  const shouldManageMobileNavState =
    typeof customIsMobileNavOpen === `undefined` &&
    typeof customSetIsMobileNavOpen === `undefined`

  const isMobileNavOpen = shouldManageMobileNavState
    ? internalIsMobileNavOpen
    : customIsMobileNavOpen
  const setIsMobileNavOpen = shouldManageMobileNavState
    ? internalSetIsMobileNavOpen
    : customSetIsMobileNavOpen

  const value = {
    items,
    secondaryItems,
    rootChildren: children,
    isInverted,
    mobileNavMediaQuery,
    isMobileNavOpen,
    setIsMobileNavOpen,
    components: {
      Hamburger,
      HamburgerIcon,
      Nav,
      List,
      Item,
      ItemLink,
      Dropdown,
      DropdownItem,
      DropdownToggle,
      Button,
    },
  }

  return (
    <BaseNavigationContext.Provider value={value}>
      <div css={baseStyles.navigation.default} {...rest}>
        <Hamburger />
        <Nav />
      </div>
    </BaseNavigationContext.Provider>
  )
}

BaseNavigation.Hamburger = ({ ...rest }) => {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
    setIsMobileNavOpen,

    components: { HamburgerIcon },
  } = BaseNavigation.useNavigationContext()

  return (
    <button
      onClick={() => {
        setIsMobileNavOpen(!isMobileNavOpen)
      }}
      aria-expanded={isMobileNavOpen}
      css={{
        ...baseStyles.hamburger.default,
        [mobileNavMediaQuery]: baseStyles.hamburger.mobile,
      }}
      {...rest}
      aria-label={`${isMobileNavOpen ? "Close" : "Open"} the menu`}
    >
      <HamburgerIcon />
    </button>
  )
}

BaseNavigation.HamburgerIcon = ({ ...rest }) => {
  const { isInverted, isMobileNavOpen } = BaseNavigation.useNavigationContext()

  return (
    <div
      className={isMobileNavOpen ? `active` : ``}
      css={baseStyles.hamburgerIcon(isInverted)}
      {...rest}
    ></div>
  )
}

BaseNavigation.Nav = ({ ...rest }) => {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
    components: { List },
  } = BaseNavigation.useNavigationContext()

  return (
    <nav
      css={{
        [mobileNavMediaQuery]: baseStyles.nav.mobile(isMobileNavOpen),
      }}
      {...rest}
    >
      <List />
    </nav>
  )
}

BaseNavigation.List = ({ ...rest }) => {
  const {
    items,
    secondaryItems,
    rootChildren,
    components: { Item },
  } = BaseNavigation.useNavigationContext()

  return (
    <div css={baseStyles.list.wrapper}>
      <ul css={[baseStyles.list.side, baseStyles.list.leftSide]} {...rest}>
        {items.length > 0 &&
          items.map(item => <Item key={item.name} item={item} />)}
        <div css={baseStyles.list.spacer} />
        {secondaryItems.length > 0 &&
          secondaryItems.map(item => <Item key={item.name} item={item} />)}
        {rootChildren && rootChildren}
      </ul>
    </div>
  )
}

BaseNavigation.Item = ({ item, children, ...rest }) => {
  const [isDropdownOpen, toggleDropdown] = React.useState(false)
  const dropdownItems = item.items || []
  const dropdownChildren = children || false
  const itemHasDropdown = dropdownItems.length > 0 || dropdownChildren

  const ref = React.useRef()

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => {
    if (itemHasDropdown) {
      toggleDropdown(false)
    }
  })

  const {
    isInverted,
    components: { ItemLink, DropdownToggle, Dropdown },
  } = BaseNavigation.useNavigationContext()

  return (
    <li ref={ref} css={baseStyles.item(isInverted)} {...rest}>
      <ItemLink item={item} />
      {itemHasDropdown && (
        <>
          <DropdownToggle
            item={item}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <Dropdown
            item={item}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            dropdownItems={item.items}
            dropdownChildren={dropdownChildren}
          />
        </>
      )}
    </li>
  )
}

BaseNavigation.ItemLink = ({ item, ...rest }) => (
  <Link activeClassName="nav-item-active" to={item.linkTo} {...rest}>
    {/* 
      This span is needed for the styles applied in theme/styles/navigation 
    */}
    <span>{item.name}</span>
  </Link>
)

BaseNavigation.DropdownToggle = ({
  item,
  isDropdownOpen,
  toggleDropdown,
  ...rest
}) => {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <button
      aria-expanded={!!isDropdownOpen}
      aria-controls={`${item.name}-dropdown`}
      onClick={() => {
        toggleDropdown(!isDropdownOpen)
      }}
      css={baseStyles.dropdownToggle(isInverted)}
      {...rest}
    >
      <span aria-hidden="true">&or;</span>
      <span css={visuallyHidden}>{`${item.name} Menu`}</span>
    </button>
  )
}

BaseNavigation.Dropdown = ({
  item,
  isDropdownOpen,
  toggleDropdown,
  dropdownItems = [],
  dropdownChildren = false,
  ...rest
}) => {
  const {
    components: { DropdownItem },
  } = BaseNavigation.useNavigationContext()

  return (
    <ul
      css={baseStyles.dropdown(isDropdownOpen)}
      // id to associate with aria-controls on BaseNavigation.Item
      id={`${item.name}-dropdown`}
      onKeyDown={e => {
        // handle closing dropdown on `esc`
        if (e.keyCode === 27) {
          toggleDropdown(false)
        }
        return
      }}
      {...rest}
    >
      {dropdownItems.length > 0 &&
        dropdownItems.map((item, index) => (
          <DropdownItem key={`${index}-${item.name}`} item={item} />
        ))}
      {dropdownChildren && dropdownChildren}
    </ul>
  )
}

BaseNavigation.DropdownItem = ({ item: { name, linkTo }, ...rest }) => (
  <li {...rest}>
    <Link activeClassName="nav-item-active" to={linkTo}>
      {name}
    </Link>
  </li>
)

BaseNavigation.LinkButton = ({
  linkTo,
  icon = true,
  size = `M`,
  children,
  ...rest
}) => {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <LinkButton
      to={linkTo}
      size={size}
      css={baseStyles.button(isInverted)}
      rightIcon={icon ? <MdArrowForward /> : undefined}
      {...rest}
    >
      {children}
    </LinkButton>
  )
}

BaseNavigation.AnchorButton = ({
  linkTo,
  icon = true,
  size = `M`,
  children,
  ...rest
}) => {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <AnchorButton
      to={linkTo}
      size={size}
      css={baseStyles.button(isInverted)}
      rightIcon={icon ? <MdArrowForward /> : undefined}
      {...rest}
    >
      {children}
    </AnchorButton>
  )
}

BaseNavigation.useNavigationContext = () => {
  const context = React.useContext(BaseNavigationContext)
  if (!context) {
    throw new Error(
      `BaseNavigation compound components cannot be rendered outside the BaseNavigation component`
    )
  }
  return context
}

export default BaseNavigation
