/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import { Link } from "gatsby"
import { PropsOf } from "../../utils/types"
import { ThemeCss } from "../../theme"

export type BreadcrumbProps = Omit<JSX.IntrinsicElements["nav"], "ref">

export default function Breadcrumb({ children, ...rest }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" {...rest}>
      <ol
        css={{
          listStyle: `none`,
          margin: 0,
          padding: 0,
          display: `flex`,
          flexWrap: `wrap`,
        }}
      >
        {children}
      </ol>
    </nav>
  )
}

Breadcrumb.Item = BreadcrumbItem

const breadcrumbItemCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  color: theme.colors.purple[50],
  fontFamily: theme.fonts.header,
  fontSize: theme.fontSizes[3],
})

export type BreadcrumbItemProps = PropsOf<"li"> & {
  to?: string
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

function BreadcrumbItem({
  to,
  active,
  onClick,
  children,
  ...rest
}: BreadcrumbItemProps) {
  return (
    <li
      css={theme => [
        breadcrumbItemCss(theme),
        active && {
          color: theme.colors.grey[90],
        },
      ]}
      {...rest}
    >
      {to ? (
        <Fragment>
          <Link
            to={to}
            onClick={onClick}
            css={{
              textDecoration: `none`,
              color: `inherit`,
            }}
          >
            {children}
          </Link>
          <BreadcrumbArrow />
        </Fragment>
      ) : (
        children
      )}
    </li>
  )
}

BreadcrumbItem.displayName = `Breadcrumb.Item`

const breadcrumbArrowCss: ThemeCss = theme => ({
  color: theme.colors.grey[90],
  marginRight: theme.space[4],
  marginLeft: theme.space[4],
  verticalAlign: `middle`,
})

function BreadcrumbArrow(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      css={breadcrumbArrowCss}
      {...props}
    >
      <path d="M6 4.5L1.5 8.39711L1.5 0.602886L6 4.5Z" fill="#7F7C82" />
    </svg>
  )
}
