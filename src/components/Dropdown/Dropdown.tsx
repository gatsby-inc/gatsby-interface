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
import { dropdownCss, dropdownLabelCss } from "./styles"

export const Dropdown: React.FC<MenuProps> = props => <Menu {...props} />

// Dropdown Label
export type DropdownLabelProps = MenuButtonProps & {
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

// DropdownItems
export const DropdownItems: React.FC<MenuListProps> = props => {
  return <MenuList {...props} css={dropdownCss}></MenuList>
}

export const DropdownItem: React.FC<MenuItemProps> = props => (
  <MenuItem {...props} />
)
