/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Link } from "gatsby"
import { Theme, ThemeCss } from "../../theme"

export type SidebarNavItem = {
  label: React.ReactNode
  to?: string
  href?: string
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export type SidebarNavOption = SidebarNavItem & {
  Icon?: React.ComponentType<any>
  subItems?: SidebarNavItem[]
}

export type SidebarNavProps = JSX.IntrinsicElements["nav"] & {
  options?: SidebarNavOption[]
}

export default function SidebarNav({ options, ...rest }: SidebarNavProps) {
  return (
    <nav
      aria-label="sidebar navigation"
      css={theme => ({
        paddingLeft: theme.space[8],
      })}
      {...rest}
    >
      {options && (
        <SidebarNavList>
          {options.map(option => {
            return <SidebarNavListItem key={option.to} {...option} />
          })}
        </SidebarNavList>
      )}
    </nav>
  )
}

type SidebarNavListProps = JSX.IntrinsicElements["ul"]

function SidebarNavList(props: SidebarNavListProps) {
  return (
    <ul
      css={[
        {
          listStyle: `none`,
          margin: 0,
          padding: 0,
        },
      ]}
      {...props}
    />
  )
}

const baseNavItemCss: ThemeCss = theme => ({
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes[1],
  fontWeight: theme.fontWeights.body,
  color: theme.colors.grey[60],
  marginBottom: `0`,
  "&:first-of-type": {
    paddingTop: `0`,
  },
  "&:last-of-type": {
    paddingBottom: `0`,
  },
})

const baseNavItemActiveCss: ThemeCss = theme => ({
  color: theme.colors.purple[50],
  fontWeight: theme.fontWeights.semiBold,
})

const navItemIconCss: ThemeCss = theme => ({
  color: theme.colors.grey[40],
  fontSize: theme.fontSizes[4],
  verticalAlign: `middle`,
  position: `absolute`,
  left: `-${theme.space[8]}`,
})

const navItemActiveIconCss: ThemeCss = theme => ({
  color: theme.colors.purple[40],
})

type SidebarNavItemProps = Omit<
  JSX.IntrinsicElements["li"],
  "children" | "onClick"
> &
  SidebarNavOption

function SidebarNavListItem({
  label,
  to,
  active,
  onClick,
  Icon,
  subItems,
  ...rest
}: SidebarNavItemProps) {
  return (
    <SidebarBaseItem
      css={theme => [
        {
          position: `relative`,
          padding: `${theme.space[3]} 0`,
        },
      ]}
      label={
        <React.Fragment>
          {Icon && (
            <Icon
              css={(theme: Theme) => [
                navItemIconCss(theme),
                active && navItemActiveIconCss(theme),
              ]}
              size="inherit"
            />
          )}
          {label}
        </React.Fragment>
      }
      to={to}
      active={active}
      onClick={onClick}
      current={active ? "page" : undefined}
      {...rest}
    >
      {subItems && active && (
        <SidebarNavList
          css={(theme: Theme) => ({
            paddingTop: theme.space[5],
            paddingBottom: theme.space[3],
          })}
        >
          {subItems.map(subItem => (
            <SidebarBaseItem
              key={subItem.to}
              css={(theme: Theme) => [
                {
                  paddingTop: theme.space[3],
                  paddingRight: theme.space[5],
                  paddingBottom: theme.space[3],
                  paddingLeft: `calc(${theme.space[6]} + 1px)`,
                  marginBottom: `0`,
                  marginLeft: `calc(-${theme.space[6]} - 2px)`,
                  borderLeft: `1px solid ${theme.colors.grey[30]}`,
                },
                subItem.active && {
                  borderLeftColor: theme.colors.purple[50],
                },
              ]}
              current={subItem.active ? "location" : undefined}
              {...subItem}
            />
          ))}
        </SidebarNavList>
      )}
    </SidebarBaseItem>
  )
}

const itemLinkCss: ThemeCss = theme => ({
  color: `inherit`,
  lineHeight: theme.lineHeights.dense,
  textDecoration: `none`,
})

type SidebarBaseItemProps = Omit<JSX.IntrinsicElements["li"], "onClick"> &
  SidebarNavItem & {
    current?: "page" | "location"
  }

function SidebarBaseItem({
  children,
  label,
  to,
  active,
  onClick,
  current,
  href,
  ...rest
}: SidebarBaseItemProps) {
  const isOverwritten = to && href
  const isText = (!to && !href) || isOverwritten

  if (isOverwritten) {
    console.warn(
      `You can't set both 'to' and 'href' props on SidebarBaseItem at the same time! Check the '${label}' link.`
    )
  }

  return (
    <li
      css={theme => [
        baseNavItemCss(theme),
        active && baseNavItemActiveCss(theme),
      ]}
      {...rest}
    >
      {to && !href && (
        <Link
          to={to}
          onClick={onClick}
          css={itemLinkCss}
          aria-current={current}
        >
          {label}
        </Link>
      )}

      {!to && href && (
        <a
          href={href}
          onClick={onClick}
          css={itemLinkCss}
          aria-current={current}
        >
          {label}
        </a>
      )}

      {isText && label}
      {children}
    </li>
  )
}
