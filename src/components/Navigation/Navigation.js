/** @jsx jsx */
import { jsx } from "@emotion/core"
import { BaseNavigation } from "../skeletons/BaseNavigation"
import styles from "../../theme/styles/navigation"

const Navigation = ({
  items,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  ...rest
}) => (
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
    Button={Navigation.Button}
    css={{
      ...styles.Navigation.default,
    }}
    {...rest}
  />
)

Navigation.Hamburger = ({ ...rest }) => (
  <BaseNavigation.Hamburger {...rest}></BaseNavigation.Hamburger>
)

Navigation.HamburgerIcon = ({ ...rest }) => {
  const { isMobileNavOpen } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.HamburgerIcon
      css={{
        ...styles.HamburgerIcon,
      }}
      className={isMobileNavOpen ? `active` : ``}
      {...rest}
    ></BaseNavigation.HamburgerIcon>
  )
}

Navigation.Nav = ({ ...rest }) => {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
  } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.Nav
      css={{
        ...styles.Nav.default,
        [mobileNavMediaQuery]: {
          ...styles.Nav.mobile(isMobileNavOpen),
        },
      }}
      {...rest}
    ></BaseNavigation.Nav>
  )
}

Navigation.List = ({ ...rest }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.List
      css={{
        ...styles.List.default,
        [mobileNavMediaQuery]: {
          ...styles.List.mobile,
        },
      }}
      {...rest}
    />
  )
}

Navigation.Item = ({ ...rest }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.Item
      css={{
        ...styles.Item.default,
        [mobileNavMediaQuery]: {
          ...styles.Item.mobile,
        },
      }}
      {...rest}
    ></BaseNavigation.Item>
  )
}
Navigation.ItemLink = ({ ...rest }) => {
  const {
    isInverted,
    mobileNavMediaQuery,
  } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.ItemLink
      css={{
        ...styles.ItemLink.default(isInverted),
        [mobileNavMediaQuery]: {
          ...styles.ItemLink.mobile,
        },
      }}
      {...rest}
    ></BaseNavigation.ItemLink>
  )
}

Navigation.Dropdown = ({ ...rest }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.Dropdown
      css={{
        ...styles.Dropdown.default,
        [mobileNavMediaQuery]: {
          ...styles.Dropdown.mobile,
        },
      }}
      {...rest}
    ></BaseNavigation.Dropdown>
  )
}

Navigation.DropdownToggle = ({ ...rest }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.DropdownToggle
      css={{
        ...styles.DropdownToggle.default,
        [mobileNavMediaQuery]: {
          ...styles.DropdownToggle.mobile,
        },
      }}
      {...rest}
    ></BaseNavigation.DropdownToggle>
  )
}

Navigation.DropdownItem = ({ ...rest }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.DropdownItem
      css={{
        ...styles.DropdownItem.default,
        [mobileNavMediaQuery]: {
          ...styles.DropdownItem.mobile,
        },
      }}
      {...rest}
    ></BaseNavigation.DropdownItem>
  )
}

Navigation.Button = ({ ...rest }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.LinkButton
      css={{
        ...styles.Button.default,
        [mobileNavMediaQuery]: {
          ...styles.Button.mobile,
        },
      }}
      {...rest}
    ></BaseNavigation.LinkButton>
  )
}

export default Navigation
