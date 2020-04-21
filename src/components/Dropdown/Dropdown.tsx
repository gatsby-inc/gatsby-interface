/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  Menu,
  MenuProps,
  MenuPopover,
  MenuPopoverProps,
  MenuList,
  MenuListProps,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuItemProps,
  MenuLink,
  MenuLinkProps,
  useMenuButtonContext,
} from "@reach/menu-button"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  dropdownCss,
  dropdownButtonCss,
  menuItemCss,
  dropdownButtonIconCss,
} from "./Dropdown.styles"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

export const Dropdown: React.FC<MenuProps> = props => (
  <React.Fragment>
    <DisableReachStyleCheck reachComponent="menu-button" />
    <Menu {...props} />
  </React.Fragment>
)

export type DropdownButtonProps = MenuButtonProps

export const DropdownButton: React.FC<DropdownButtonProps> = props => (
  <MenuButton {...props} />
)

export type DropdownButtonStyledProps = DropdownButtonProps

export const DropdownButtonStyled: React.FC<DropdownButtonProps> = ({
  children,
  ...props
}) => (
  <DropdownButton {...props} css={dropdownButtonCss}>
    {children}
    <MdKeyboardArrowDown css={dropdownButtonIconCss} />
  </DropdownButton>
)

export type DropdownItemsProps = MenuListProps

export const DropdownItems: React.FC<DropdownItemsProps> = props => (
  <MenuList {...props} css={dropdownCss}></MenuList>
)

export type DropdownItemProps = MenuItemProps

export const DropdownItem: React.FC<DropdownItemProps> = props => (
  <MenuItem {...props} css={menuItemCss} />
)

export type DropdownLinkProps = MenuLinkProps

export function DropdownLink(props: DropdownLinkProps) {
  return <MenuLink {...props} />
}

export type DropdownPopoverProps = MenuPopoverProps

export function DropdownPopover(props: DropdownPopoverProps) {
  return <MenuPopover {...props} />
}

export function useDropdownContext() {
  return useMenuButtonContext()
}
