/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ClassNames } from "@emotion/core"
import {
  BaseNavigation,
  BaseNavigationProps,
  BaseNavigationHamburgerProps,
  BaseNavigationHamburgerIconProps,
  BaseNavigationContextValue,
  BaseNavigationNavProps,
  BaseNavigationListProps,
  BaseNavigationListItemProps,
  BaseNavigationItemAnchorProps,
  BaseNavigationItemLinkProps,
  BaseNavigationDropdownProps,
  BaseNavigationDropdownToggleProps,
  BaseNavigationAnchorButtonProps,
  BaseNavigationLinkButtonProps,
  BaseNavigationDropdownItemProps,
} from "../BaseNavigation"
import {
  navigationBaseCss,
  hamburgerIconCss,
  navCss,
  listCss,
  itemCss,
  itemLinkCss,
  dropdownCss,
  dropdownListCss,
  dropdownToggleCss,
  dropdownItemCss,
  buttonItemCss,
} from "./Navigation.styles"

export type NavigationItem = {
  name: string
  linkTo: string
}

export type NavigationItemOptions = NavigationItem & {
  items?: NavigationItem[]
}

export type NavigationProps = BaseNavigationProps

export function Navigation({
  items,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  ...delegated
}: NavigationProps) {
  return (
    <BaseNavigation
      items={items}
      isInverted={isInverted}
      mobileNavMediaQuery={mobileNavMediaQuery}
      // override base components
      Hamburger={Navigation.Hamburger}
      HamburgerIcon={Navigation.HamburgerIcon}
      Nav={Navigation.Nav}
      List={Navigation.List}
      Item={Navigation.Item}
      ItemLink={Navigation.ItemLink}
      Dropdown={Navigation.Dropdown}
      DropdownItem={Navigation.DropdownItem}
      DropdownToggle={Navigation.DropdownToggle}
      css={navigationBaseCss}
      {...delegated}
    />
  )
}

export type NavigartionContextValue = BaseNavigationContextValue

function useNavigationContext(): NavigartionContextValue {
  return BaseNavigation.useNavigationContext()
}

Navigation.useNavigationContext = useNavigationContext

export type NavigationHamburgerProps = BaseNavigationHamburgerProps

const NavigationHamburger = React.forwardRef<
  HTMLButtonElement,
  NavigationHamburgerProps
>(function NavigationHamburger(delegated, ref) {
  return <BaseNavigation.Hamburger {...delegated} ref={ref} />
})

Navigation.Hamburger = NavigationHamburger

export type NavigationHamburgerIconProps = BaseNavigationHamburgerIconProps

function NavigationHamburgerIcon(delegated: NavigationHamburgerIconProps) {
  const { isMobileNavOpen } = Navigation.useNavigationContext()

  return (
    <BaseNavigation.HamburgerIcon
      css={hamburgerIconCss}
      className={isMobileNavOpen ? `active` : ``}
      {...delegated}
    />
  )
}

Navigation.HamburgerIcon = NavigationHamburgerIcon

export type NavigationNavProps = BaseNavigationNavProps

function NavigationNav(delegated: NavigationNavProps) {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
  } = Navigation.useNavigationContext()

  return (
    <BaseNavigation.Nav
      css={navCss(mobileNavMediaQuery, isMobileNavOpen)}
      {...delegated}
    />
  )
}

Navigation.Nav = NavigationNav

export type NavigationListProps = BaseNavigationListProps

function NavigationList(delegated: NavigationListProps) {
  const { mobileNavMediaQuery } = Navigation.useNavigationContext()

  return (
    <BaseNavigation.List css={listCss(mobileNavMediaQuery)} {...delegated} />
  )
}

Navigation.List = NavigationList

export type NavigationSpacerProps = Omit<
  JSX.IntrinsicElements["li"],
  "ref" | "role"
>

function NavigationSpacer(delegated: NavigationSpacerProps) {
  return <li css={{ flex: 1 }} {...delegated} role="separator" />
}

Navigation.Spacer = NavigationSpacer

export type NavigationItemProps = BaseNavigationListItemProps

function NavigationItem(delegated: NavigationItemProps) {
  const { mobileNavMediaQuery } = Navigation.useNavigationContext()

  return (
    <BaseNavigation.Item css={itemCss(mobileNavMediaQuery)} {...delegated} />
  )
}

Navigation.Item = NavigationItem

export type NavigationItemLinkProps =
  | BaseNavigationItemAnchorProps
  | BaseNavigationItemLinkProps

function NavigationItemLink(delegated: NavigationItemLinkProps) {
  const { isInverted, mobileNavMediaQuery } = Navigation.useNavigationContext()

  const commonCss = itemLinkCss(mobileNavMediaQuery, isInverted)

  if (isExternalLinkItem(delegated)) {
    return <BaseNavigation.ItemAnchor css={commonCss} {...delegated} />
  }

  return <BaseNavigation.ItemLink css={commonCss} {...delegated} />
}

Navigation.ItemLink = NavigationItemLink

function isExternalLinkItem(
  props: NavigationItemLinkProps
): props is BaseNavigationItemAnchorProps {
  return isExternalLink(props.item.linkTo)
}

export type NavigationDropdownProps = BaseNavigationDropdownProps

function NavigationDropdown(delegated: NavigationDropdownProps) {
  const {
    mobileNavMediaQuery,
    dropdownOffsets,
  } = Navigation.useNavigationContext()

  const itemOffset = dropdownOffsets[delegated.item.name]
  const offset = itemOffset ? `${itemOffset}px` : `0px`

  return (
    <ClassNames>
      {({ css }) => (
        <BaseNavigation.Dropdown
          css={dropdownCss(mobileNavMediaQuery, offset)}
          dropdownListClassName={css(dropdownListCss(mobileNavMediaQuery))}
          {...delegated}
        />
      )}
    </ClassNames>
  )
}

Navigation.Dropdown = NavigationDropdown

export type NavigationDropdownToggleProps = BaseNavigationDropdownToggleProps

const NavigationDropdownToggle = React.forwardRef<
  HTMLButtonElement,
  NavigationDropdownToggleProps
>(function NavigationDropdownToggle(delegated, ref) {
  const { mobileNavMediaQuery } = Navigation.useNavigationContext()

  return (
    <BaseNavigation.DropdownToggle
      css={dropdownToggleCss(mobileNavMediaQuery)}
      {...delegated}
      ref={ref}
    />
  )
})

Navigation.DropdownToggle = NavigationDropdownToggle

export type NavigationDropdownItemProps = BaseNavigationDropdownItemProps

function NavigationDropdownItem(delegated: NavigationDropdownItemProps) {
  const { mobileNavMediaQuery } = Navigation.useNavigationContext()

  return (
    <BaseNavigation.DropdownItem
      css={dropdownItemCss(mobileNavMediaQuery)}
      {...delegated}
    />
  )
}

Navigation.DropdownItem = NavigationDropdownItem

export type NavigationButtonProps =
  | BaseNavigationAnchorButtonProps
  | BaseNavigationLinkButtonProps

function NavigationButton({ linkTo, ...delegated }: NavigationButtonProps) {
  const { mobileNavMediaQuery } = Navigation.useNavigationContext()

  const commonCss = buttonItemCss(mobileNavMediaQuery)

  if (isExternalButtonLink(linkTo, delegated)) {
    return (
      <li css={commonCss}>
        <BaseNavigation.AnchorButton href={linkTo} {...delegated} />
      </li>
    )
  }

  return (
    <li css={commonCss}>
      <BaseNavigation.LinkButton
        linkTo={linkTo}
        {...(delegated as BaseNavigationLinkButtonProps)}
      />
    </li>
  )
}

Navigation.Button = NavigationButton

function isExternalButtonLink(
  linkTo: string | undefined | null,
  _props: NavigationButtonProps
): _props is BaseNavigationAnchorButtonProps {
  return !linkTo || isExternalLink(linkTo)
}

const isExternalLink = (linkTo: string) => {
  return Boolean(linkTo.match(/(^http|^mailto)/i))
}
