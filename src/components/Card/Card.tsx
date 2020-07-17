/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../theme"
import { Heading, HeadingProps } from "../Heading"

const baseCss: ThemeCss = theme => theme.cardStyles.frame

export type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  as?: "article" | "div"
}

export function Card({ as: Component = `article`, ...rest }: CardProps) {
  return <Component css={baseCss} {...rest} />
}

export type CardSectionProps = React.ComponentPropsWithoutRef<"div"> & {
  as?: `div` | `p` | `section` | `header`
  applyPaddingTop?: boolean
  applyPaddingBottom?: boolean
  applyPaddingLeft?: boolean
  applyPaddingRight?: boolean
}

export function CardSection({
  as: Component = `div`,
  applyPaddingTop = true,
  applyPaddingBottom = true,
  applyPaddingLeft = true,
  applyPaddingRight = true,
  ...rest
}: CardSectionProps) {
  const baseSectionCss: ThemeCss = theme => [
    applyPaddingTop && {
      paddingTop: theme.space[7],
      [theme.mediaQueries.desktop]: {
        paddingTop: theme.cardStyles.space.L.paddingTop,
      },
    },
    applyPaddingBottom && {
      paddingBottom: theme.space[7],
      [theme.mediaQueries.desktop]: {
        paddingBottom: theme.cardStyles.space.L.paddingBottom,
      },
    },
    applyPaddingLeft && {
      paddingLeft: theme.space[7],
      [theme.mediaQueries.desktop]: {
        paddingLeft: theme.cardStyles.space.L.paddingLeft,
      },
    },
    applyPaddingRight && {
      paddingRight: theme.space[7],
      [theme.mediaQueries.desktop]: {
        paddingRight: theme.cardStyles.space.L.paddingRight,
      },
    },
  ]

  return <Component css={baseSectionCss} {...rest} />
}

const headerCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  fontSize: theme.fontSizes[4],
  lineHeight: 1,
})

export type CardHeaderProps = Omit<CardSectionProps, "as"> & {
  as?: "header" | "div"
  title: React.ReactNode
  titleAs?: HeadingProps["as"]
}

export function CardHeader({
  as = `header`,
  title,
  titleAs = `h3`,
  children,
  ...rest
}: CardHeaderProps) {
  return (
    <CardSection as={as} css={headerCss} {...rest}>
      <Heading as={titleAs}>{title}</Heading>
      {children}
    </CardSection>
  )
}

const footerCss: ThemeCss = theme => ({
  background: theme.colors.purple[5],
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  borderBottomLeftRadius: theme.cardStyles.frame.borderRadius,
  borderBottomRightRadius: theme.cardStyles.frame.borderRadius,
})

export type CardFooterProps = CardSectionProps

export function CardFooter(props: CardFooterProps) {
  return <CardSection css={footerCss} {...props} />
}

const dividerCss: ThemeCss = theme => ({
  border: 0,
  borderTop: `1px solid ${theme.colors.standardLine}`,
  margin: 0,
})

export type CardDividerProps = React.ComponentPropsWithoutRef<"hr">

export function CardDivider(props: CardDividerProps) {
  return <hr css={dividerCss} {...props} />
}
