/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuButtonProps,
  MenuListProps,
  MenuItemProps,
  MenuProps,
} from "@reach/menu-button"
import { MdKeyboardArrowDown } from "react-icons/md"
import { dropdownCss, dropdownLabelCss, menuItemCss } from "./Dropdown.styles"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"

export const Dropdown: React.FC<MenuProps> = props => (
  <div>
    <DisableReachStyleCheck reachComponent="menu-button" />
    <Menu {...props} />
  </div>
)

export interface DropdownLabelProps
  extends Omit<MenuButtonProps, "placeholder"> {
  placeholder: React.ReactNode
}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({
  children,
  placeholder,
  ...props
}) => (
  <MenuButton {...props} css={dropdownLabelCss}>
    <span>{children ? children : placeholder}</span> <MdKeyboardArrowDown />
  </MenuButton>
)

export type DropdownItemsProps = MenuListProps

export const DropdownItems: React.FC<DropdownItemsProps> = props => (
  <MenuList {...props} css={dropdownCss}></MenuList>
)

export type DropdownItemProps = MenuItemProps

export const DropdownItem: React.FC<DropdownItemProps> = props => (
  <MenuItem {...props} css={menuItemCss} />
)
