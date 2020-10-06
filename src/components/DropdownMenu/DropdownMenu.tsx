/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  Menu,
  MenuProps,
  MenuPopover,
  MenuPopoverProps,
  MenuList,
  MenuListProps,
  MenuButton,
  MenuButtonProps,
  MenuItems,
  MenuItemsProps,
  MenuItem,
  MenuItemProps,
  MenuLink,
  MenuLinkProps,
  useMenuButtonContext,
} from "@reach/menu-button"
import { forwardRefWithAs } from "@reach/utils"
import { animated, useSpring } from "react-spring"
import { MdKeyboardArrowDown } from "react-icons/md"
import {
  dropdownCss,
  dropdownButtonCss,
  menuItemCss,
  dropdownButtonIconCss,
  dropdownSizeCss,
  dropdownDividerCss,
  dropdownHeaderCss,
} from "./DropdownMenu.styles"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { ThemeCss } from "../../theme"
import { Heading, HeadingProps } from "../Heading"

export type DropdownMenuProps = MenuProps

export const DropdownMenu: React.FC<DropdownMenuProps> = props => (
  <React.Fragment>
    <DisableReachStyleCheck reachComponent="menu-button" />
    <Menu {...props} />
  </React.Fragment>
)

export type DropdownMenuButtonProps = MenuButtonProps

export const DropdownMenuButton: React.FC<DropdownMenuButtonProps> = props => (
  <MenuButton {...props} />
)

export type DropdownMenuButtonStyledProps = DropdownMenuButtonProps

export const DropdownMenuButtonStyled: React.FC<DropdownMenuButtonProps> = ({
  children,
  ...props
}) => (
  <DropdownMenuButton {...props} css={dropdownButtonCss}>
    {children}
    <MdKeyboardArrowDown css={dropdownButtonIconCss} />
  </DropdownMenuButton>
)

export type DropdownMenuSize = `AUTO` | `MAX_CONTENT` | `LEGACY`

const AnimatedMenuList = animated(MenuList)

export type DropdownMenuItemsProps = MenuListProps & {
  size?: DropdownMenuSize
}

export const DropdownMenuItems: React.FC<DropdownMenuItemsProps> = ({
  size = `LEGACY`,
  ...rest
}) => {
  const styleProps = useAnimatedMenuItems()

  const finalCss: ThemeCss = theme => [
    dropdownCss(theme),
    dropdownSizeCss[size](theme),
  ]

  return <AnimatedMenuList style={styleProps} {...rest} css={finalCss} />
}

const AnimatedMenuItems = animated(MenuItems)

export type DropdownMenuItemsLowLevelProps = MenuItemsProps & {
  size?: DropdownMenuSize
}

export const DropdownMenuItemsLowLevel: React.FC<DropdownMenuItemsLowLevelProps> = ({
  size = `LEGACY`,
  ...rest
}) => {
  const styleProps = useAnimatedMenuItems()

  const finalCss: ThemeCss = theme => [
    dropdownCss(theme),
    dropdownSizeCss[size](theme),
  ]

  return <AnimatedMenuItems style={styleProps} {...rest} css={finalCss} />
}

export type DropdownMenuItemProps = MenuItemProps

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = props => (
  <MenuItem {...props} css={menuItemCss} />
)

export type DropdownMenuLinkProps = MenuLinkProps

export const DropdownMenuLink = forwardRefWithAs<DropdownMenuLinkProps, "a">(
  function DropdownMenuLink(props, ref) {
    return <MenuLink ref={ref} {...props} css={menuItemCss} />
  }
)

export type DropdownMenuPopoverProps = MenuPopoverProps

export function DropdownMenuPopover(props: DropdownMenuPopoverProps) {
  return <MenuPopover {...props} />
}

export function useDropdownMenuContext() {
  return useMenuButtonContext()
}

export type DropdownDividerProps = React.ComponentPropsWithoutRef<"hr">

export function DropdownDivider(props: DropdownDividerProps) {
  return <hr {...props} css={dropdownDividerCss} />
}

export type DropdownHeaderProps = HeadingProps

export const DropdownHeader = ({ children, ...props }: DropdownHeaderProps) => (
  <Heading {...props} css={dropdownHeaderCss}>
    {children}
  </Heading>
)

function useAnimatedMenuItems() {
  const { isExpanded } = useDropdownMenuContext()

  return useSpring({
    opacity: isExpanded ? 1 : 0,
    transform: isExpanded ? "scale(1)" : "scale(0.95)",
    config: {
      tension: 400,
    },
  })
}
