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
} from "@reach/menu-button"
import { MdCheck, MdKeyboardArrowDown } from "react-icons/md"
import { dropdownCss, dropdownLabelCss } from "./styles"

export const Dropdown: React.FC = ({ children }) => <Menu>{children}</Menu>

// Dropdown Label
export interface DropdownLabelProps extends Omit<MenuButtonProps, "children"> {
  children?: string
  placeholder: string
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

export interface DropdownItemProps extends MenuItemProps {
  selected?: boolean
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  selected,
  children,
  ...props
}) => (
  <MenuItem
    {...props}
    className={selected ? "gatsby-dropdown-item-selected" : undefined}
  >
    <span>{children}</span>

    {selected ? <MdCheck /> : undefined}
  </MenuItem>
)
