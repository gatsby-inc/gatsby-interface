/** @jsx jsx */
import { jsx } from "@emotion/core"
import { BaseNavigation } from "../BaseNavigation"
import styles from "../../theme/styles/navigation"

const Navigation = ({
  items,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  ...delegated
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
    css={styles.Navigation.default}
    {...delegated}
  />
)

Navigation.Hamburger = delegated => <BaseNavigation.Hamburger {...delegated} />

Navigation.HamburgerIcon = delegated => {
  const { isMobileNavOpen } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.HamburgerIcon
      css={styles.HamburgerIcon}
      className={isMobileNavOpen ? `active` : ``}
      {...delegated}
    />
  )
}

Navigation.Nav = delegated => {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
  } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.Nav
      css={{
        ...styles.Nav.default,
        [mobileNavMediaQuery]: styles.Nav.mobile(isMobileNavOpen),
      }}
      {...delegated}
    />
  )
}

Navigation.Spacer = delegated => {
  return <li css={{ flex: 1 }} {...delegated} role="separator" />
}

Navigation.List = delegated => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.List
      css={{
        ...styles.List.default,
        [mobileNavMediaQuery]: styles.List.mobile,
      }}
      {...delegated}
    />
  )
}

Navigation.Item = delegated => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.Item
      css={{
        ...styles.Item.default,
        [mobileNavMediaQuery]: styles.Item.mobile,
      }}
      {...delegated}
    />
  )
}
Navigation.ItemLink = ({ item, ...delegated }) => {
  const {
    isInverted,
    mobileNavMediaQuery,
  } = BaseNavigation.useNavigationContext()

  const isExternal = getIsExternalLink(item.linkTo)

  const Component = isExternal
    ? BaseNavigation.ItemAnchor
    : BaseNavigation.ItemLink

  return (
    <Component
      item={item}
      css={{
        ...styles.ItemLink.default(isInverted),
        [mobileNavMediaQuery]: styles.ItemLink.mobile,
      }}
      {...delegated}
    />
  )
}

Navigation.Dropdown = delegated => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.Dropdown
      css={{
        ...styles.Dropdown.default,
        [mobileNavMediaQuery]: styles.Dropdown.mobile,
      }}
      {...delegated}
    />
  )
}

Navigation.DropdownToggle = delegated => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.DropdownToggle
      css={{
        ...styles.DropdownToggle.default,
        [mobileNavMediaQuery]: styles.DropdownToggle.mobile,
      }}
      {...delegated}
    />
  )
}

Navigation.DropdownItem = delegated => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  return (
    <BaseNavigation.DropdownItem
      css={{
        ...styles.DropdownItem.default,
        [mobileNavMediaQuery]: styles.DropdownItem.mobile,
      }}
      {...delegated}
    />
  )
}

Navigation.Button = ({ linkTo, ...delegated }) => {
  const { mobileNavMediaQuery } = BaseNavigation.useNavigationContext()

  const isExternal = getIsExternalLink(linkTo)

  const cssStyles = {
    ...styles.ButtonItem.default,
    [mobileNavMediaQuery]: styles.ButtonItem.mobile,
  }

  if (isExternal) {
    return (
      <li css={cssStyles}>
        <BaseNavigation.AnchorButton href={linkTo} {...delegated} />
      </li>
    )
  }

  return (
    <li css={cssStyles}>
      <BaseNavigation.LinkButton linkTo={linkTo} {...delegated} />
    </li>
  )
}

const getIsExternalLink = linkTo => {
  return linkTo.match(/(^http|^mailto)/i)
}

export default Navigation
