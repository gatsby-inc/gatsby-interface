/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Link, GatsbyLinkProps } from "gatsby"
import { MdArrowForward } from "react-icons/md"

import { LinkButton, LinkButtonProps } from "../LinkButton"
import { AnchorButton, AnchorButtonProps } from "../AnchorButton"
import { BaseAnchor, BaseAnchorProps } from "../BaseAnchor"
import useOnClickOutside from "../../utils/hooks/useOnClickOutside"
import baseStyles from "./BaseNavigation.styles"
import { visuallyHiddenCss } from "../../stylesheets/a11y"

export type BaseNavigationItem = {
  name: string
  linkTo: string
}

export type BaseNavigationItemOptions = BaseNavigationItem & {
  items?: BaseNavigationItem[]
}

export type BaseNavigationComponents = {
  Hamburger: React.ComponentType<any>
  HamburgerIcon: React.ComponentType<any>
  Nav: React.ComponentType<any>
  List: React.ComponentType<any>
  Item: React.ComponentType<any>
  ItemLink: React.ComponentType<any>
  ItemAnchor: React.ComponentType<any>
  Dropdown: React.ComponentType<any>
  DropdownItem: React.ComponentType<any>
  DropdownToggle: React.ComponentType<any>
  LinkButton: React.ComponentType<any>
  AnchorButton: React.ComponentType<any>
}

export type BaseNavigationContextValue = {
  items: BaseNavigationItemOptions[]
  secondaryItems: BaseNavigationItemOptions[]
  rootChildren: React.ReactNode
  isInverted: boolean
  mobileNavMediaQuery: string
  isMobileNavOpen: boolean
  setIsMobileNavOpen: (value: boolean) => void
  components: BaseNavigationComponents
}

const BaseNavigationContext = React.createContext<BaseNavigationContextValue>(
  {} as any
)

export type BaseNavigationProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
  items?: BaseNavigationItemOptions[]
  secondaryItems?: BaseNavigationItemOptions[]
  isInverted?: boolean
  mobileNavMediaQuery?: string
  isMobileNavOpen?: boolean
  setIsMobileNavOpen?: (value: boolean) => void
} & Partial<BaseNavigationComponents>

export const BaseNavigation = ({
  items = [],
  secondaryItems = [],
  children,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  isMobileNavOpen: customIsMobileNavOpen,
  setIsMobileNavOpen: customSetIsMobileNavOpen,
  // override base components
  Hamburger = BaseNavigationHamburger,
  HamburgerIcon = BaseNavigationHamburgerIcon,
  Nav = BaseNavigationNav,
  List = BaseNavigationList,
  Item = BaseNavigationListItem,
  ItemLink = BaseNavigationItemLink,
  ItemAnchor = BaseNavigationItemAnchor,
  Dropdown = BaseNavigationDropdown,
  DropdownItem = BaseNavigationDropdownItem,
  DropdownToggle = BaseNavigationDropdownToggle,
  LinkButton = BaseNavigationLinkButton,
  AnchorButton = BaseNavigationAnchorButton,
  ...rest
}: BaseNavigationProps) => {
  const [internalIsMobileNavOpen, internalSetIsMobileNavOpen] = React.useState(
    false
  )

  let isMobileNavOpen = internalIsMobileNavOpen
  let setIsMobileNavOpen: BaseNavigationContextValue["setIsMobileNavOpen"] = internalSetIsMobileNavOpen

  if (
    customIsMobileNavOpen !== undefined &&
    customSetIsMobileNavOpen !== undefined
  ) {
    isMobileNavOpen = customIsMobileNavOpen
    setIsMobileNavOpen = customSetIsMobileNavOpen
  }

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
      ItemAnchor,
      Dropdown,
      DropdownItem,
      DropdownToggle,
      LinkButton,
      AnchorButton,
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

export type BaseNavigationHamburgerProps = Omit<
  JSX.IntrinsicElements["button"],
  "children"
>
const BaseNavigationHamburger = React.forwardRef<
  HTMLButtonElement,
  BaseNavigationHamburgerProps
>(function BaseNavigationHamburger(props, ref) {
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
      {...props}
      aria-label={`${isMobileNavOpen ? "Close" : "Open"} the menu`}
      ref={ref}
    >
      <HamburgerIcon />
    </button>
  )
})

BaseNavigation.Hamburger = BaseNavigationHamburger

export type BaseNavigationHamburgerIconProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
>

export function BaseNavigationHamburgerIcon(
  props: BaseNavigationHamburgerIconProps
) {
  const { isInverted, isMobileNavOpen } = BaseNavigation.useNavigationContext()

  return (
    <div
      className={isMobileNavOpen ? `active` : ``}
      css={baseStyles.hamburgerIcon(isInverted)}
      {...props}
    />
  )
}

BaseNavigation.HamburgerIcon = BaseNavigationHamburgerIcon

export type BaseNavigationNavProps = Omit<JSX.IntrinsicElements["nav"], "ref">

export function BaseNavigationNav(props: BaseNavigationNavProps) {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
    components: { List },
  } = BaseNavigation.useNavigationContext()

  return (
    <nav
      css={theme => ({
        [mobileNavMediaQuery]: baseStyles.nav.mobile(isMobileNavOpen)(theme),
      })}
      {...props}
    >
      <List />
    </nav>
  )
}

BaseNavigation.Nav = BaseNavigationNav

export type BaseNavigationListProps = Omit<JSX.IntrinsicElements["ul"], "ref">

export function BaseNavigationList(props: BaseNavigationListProps) {
  const {
    items,
    secondaryItems,
    rootChildren,
    components: { Item },
  } = useBaseNavigationContext()

  return (
    <div css={baseStyles.list.wrapper}>
      <ul css={[baseStyles.list.side, baseStyles.list.leftSide]} {...props}>
        {items.length > 0 &&
          items.map(item => <Item key={item.name} item={item} />)}
        <li role="separator" css={baseStyles.list.spacer} />
        {secondaryItems.length > 0 &&
          secondaryItems.map(item => <Item key={item.name} item={item} />)}
        {rootChildren && rootChildren}
      </ul>
    </div>
  )
}

BaseNavigation.List = BaseNavigationList

export type BaseNavigationListItemProps = Omit<
  JSX.IntrinsicElements["li"],
  "ref"
> & {
  item: BaseNavigationItemOptions
}

export function BaseNavigationListItem({
  item,
  children,
  ...rest
}: BaseNavigationListItemProps) {
  const [isDropdownOpen, toggleDropdown] = React.useState(false)
  const dropdownItems = item.items || []
  const dropdownChildren = children || false
  const itemHasDropdown = dropdownItems.length > 0 || dropdownChildren

  const ref = React.useRef<HTMLLIElement>(null)

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
        <React.Fragment>
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
        </React.Fragment>
      )}
    </li>
  )
}

BaseNavigation.Item = BaseNavigationListItem

export type BaseNavigationItemLinkProps = Omit<GatsbyLinkProps<any>, "ref"> & {
  item: BaseNavigationItem
}

export type BaseNavigationItemAnchorProps = Omit<BaseAnchorProps, "ref"> & {
  item: BaseNavigationItem
}

export function BaseNavigationItemAnchor({
  item,
  ...rest
}: BaseNavigationItemAnchorProps) {
  return (
    <BaseAnchor href={item.linkTo} {...rest}>
      {/*
        This span is needed for the styles applied in theme/styles/navigation
      */}
      <span>{item.name}</span>
    </BaseAnchor>
  )
}

BaseNavigation.ItemAnchor = BaseNavigationItemAnchor

export function BaseNavigationItemLink({
  item,
  ...rest
}: BaseNavigationItemLinkProps) {
  return (
    <Link activeClassName="nav-item-active" to={item.linkTo} {...rest}>
      {/*
        This span is needed for the styles applied in theme/styles/navigation
      */}
      <span>{item.name}</span>
    </Link>
  )
}

BaseNavigation.ItemLink = BaseNavigationItemLink

export type BaseNavigationDropdownToggleProps = JSX.IntrinsicElements["button"] & {
  item: BaseNavigationItem
  isDropdownOpen: boolean
  toggleDropdown: (value: boolean) => void
}

export const BaseNavigationDropdownToggle = React.forwardRef<
  HTMLButtonElement,
  BaseNavigationDropdownToggleProps
>(function BaseNavigationDropdownToggle(
  { item, isDropdownOpen, toggleDropdown, ...rest },
  ref
) {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <button
      ref={ref}
      aria-expanded={!!isDropdownOpen}
      aria-controls={getDropdownId(item.name)}
      onClick={() => {
        toggleDropdown(!isDropdownOpen)
      }}
      css={baseStyles.dropdownToggle(isInverted)}
      {...rest}
    >
      <span aria-hidden="true">&or;</span>
      <span css={visuallyHiddenCss}>{`${item.name} Menu`}</span>
    </button>
  )
})

BaseNavigation.DropdownToggle = BaseNavigationDropdownToggle

export type BaseNavigationDropdownProps = Omit<
  JSX.IntrinsicElements["ul"],
  "ref"
> & {
  item: BaseNavigationItem
  isDropdownOpen: boolean
  toggleDropdown: (value: boolean) => void
  dropdownItems?: BaseNavigationItem[]
  dropdownChildren?: React.ReactNode
}

export function BaseNavigationDropdown({
  item,
  isDropdownOpen,
  toggleDropdown,
  dropdownItems = [],
  dropdownChildren = false,
  ...rest
}: BaseNavigationDropdownProps) {
  const {
    components: { DropdownItem },
  } = useBaseNavigationContext()

  return (
    <ul
      css={baseStyles.dropdown(isDropdownOpen)}
      // id to associate with aria-controls on BaseNavigation.Item
      id={getDropdownId(item.name)}
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

BaseNavigation.Dropdown = BaseNavigationDropdown

export type BaseNavigationDropdownItemProps = Omit<
  JSX.IntrinsicElements["li"],
  "ref"
> & {
  item: BaseNavigationItem
}

export function BaseNavigationDropdownItem({
  item: { name, linkTo },
  ...rest
}: BaseNavigationDropdownItemProps) {
  return (
    <li {...rest}>
      <Link activeClassName="nav-item-active" to={linkTo}>
        {name}
      </Link>
    </li>
  )
}

BaseNavigation.DropdownItem = BaseNavigationDropdownItem

export type BaseNavigationLinkButtonProps = LinkButtonProps & {
  icon?: boolean
  linkTo?: string
}

export function BaseNavigationLinkButton({
  linkTo,
  icon = true,
  size = `M`,
  children,
  ...rest
}: BaseNavigationLinkButtonProps) {
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

BaseNavigation.LinkButton = BaseNavigationLinkButton

export type BaseNavigationAnchorButtonProps = AnchorButtonProps & {
  icon?: boolean
  linkTo?: string
}

export const BaseNavigationAnchorButton = React.forwardRef<
  HTMLAnchorElement,
  BaseNavigationAnchorButtonProps
>(function BaseNavigationAnchorButton(
  { linkTo, icon = true, size = `M`, children, ...rest },
  ref
) {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <AnchorButton
      ref={ref}
      href={linkTo}
      size={size}
      css={baseStyles.button(isInverted)}
      rightIcon={icon ? <MdArrowForward /> : undefined}
      {...rest}
    >
      {children}
    </AnchorButton>
  )
})

BaseNavigation.AnchorButton = BaseNavigationAnchorButton

export function useBaseNavigationContext() {
  const context = React.useContext(BaseNavigationContext)
  if (!context) {
    throw new Error(
      `BaseNavigation compound components cannot be rendered outside the BaseNavigation component`
    )
  }
  return context
}

BaseNavigation.useNavigationContext = useBaseNavigationContext

function getDropdownId(itemName: string) {
  // Strip item name (i.e. label) from special characters
  return `${itemName.replace(/[^\w]/gi, "-")}-dropdown`
}
