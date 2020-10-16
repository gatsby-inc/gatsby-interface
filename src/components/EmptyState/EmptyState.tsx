/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { ThemeCss, Theme } from "../../theme"
import { HeadingProps, Heading } from "../Heading"
import { Text } from "../Text"
import { ButtonProps, ButtonStyleProps, Button } from "../Button"
import { LinkButtonProps, LinkButton } from "../LinkButton"
import { AnchorButtonProps, AnchorButton } from "../AnchorButton"
import { LinkProps, Link } from "../Link"

const baseCss: ThemeCss = _theme => ({})

const innerCss: ThemeCss = _theme => ({
  boxSizing: `content-box`,
  maxWidth: 480,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  textAlign: `center`,
  margin: `0 auto`,
})

const graphicCss: ThemeCss = theme => ({
  maxWidth: 360,
  maxHeight: 120,
  marginBottom: theme.space[7],
  /* Begin icon graphics styles */
  fontSize: theme.fontSizes[10],
  color: theme.colors.grey[40],
  /* End icon graphics styles */
})

const headingCss: ThemeCss = theme => ({
  fontSize: theme.fontSizes[5],
  marginTop: 0,
  marginBottom: theme.space[5],
})

const textCss: ThemeCss = theme => ({
  marginTop: 0,
  marginBottom: 0,
  "&:not(:last-child)": {
    marginBottom: theme.space[7],
  },
})

const primaryCtaCss: ThemeCss = theme => ({
  "&:not(:last-child)": {
    marginBottom: theme.space[5],
  },
})

const secondaryCtaCss: ThemeCss = theme => ({
  lineHeight: theme.lineHeights.default,
  fontSize: theme.fontSizes[1],
  textDecoration: `none`,
})

const paddedCss: ThemeCss = theme => ({
  borderWidth: 1,
  borderStyle: `solid`,
  borderColor: `transparent`,
  paddingTop: theme.space[10],
  paddingBottom: theme.space[10],
  paddingLeft: theme.space[7],
  paddingRight: theme.space[7],
})

const variantDefaultCss: ThemeCss = _theme => ({})

const variantBorderedCss: ThemeCss = theme => [
  paddedCss(theme),
  {
    borderColor: theme.colors.grey[30],
    borderRadius: theme.radii[2],
    backgroundColor: theme.colors.white,
  },
]

const variantWithBackgroundCss: ThemeCss = theme => [
  paddedCss(theme),
  {
    borderColor: theme.colors.grey[5],
    borderRadius: theme.radii[2],
    backgroundColor: theme.colors.grey[5],
  },
]

const variantCss: Record<EmptyStateVariant, ThemeCss> = {
  DEFAULT: variantDefaultCss,
  BORDERED: variantBorderedCss,
  WITH_BACKGROUND: variantWithBackgroundCss,
}

export type EmptyStateVariant = `DEFAULT` | `BORDERED` | `WITH_BACKGROUND`

export type EmptyStateProps = {
  heading: React.ReactNode
  headingAs?: HeadingProps["as"]
  text: React.ReactNode
  graphic?: React.ReactNode
  variant?: EmptyStateVariant
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
}

export function EmptyState({
  heading,
  headingAs = `h3`,
  text,
  graphic,
  variant = `DEFAULT`,
  primaryAction,
  secondaryAction,
}: EmptyStateProps) {
  return (
    <div css={(theme: Theme) => [baseCss(theme), variantCss[variant](theme)]}>
      <div css={innerCss}>
        {graphic && <div css={graphicCss}>{graphic}</div>}
        <Heading
          as={headingAs}
          css={headingCss}
          variant="PRIMARY"
          tone="NEUTRAL"
        >
          {heading}
        </Heading>
        <Text size="M" css={textCss}>
          {text}
        </Text>
        {primaryAction}
        {secondaryAction}
      </div>
    </div>
  )
}

export type EmptyStatePrimaryActionProps =
  | Omit<ButtonProps, "variant" | "size" | "tone">
  | Omit<LinkButtonProps, "variant" | "size" | "tone">
  | Omit<AnchorButtonProps, "variant" | "size" | "tone">

export function EmptyStatePrimaryAction(props: EmptyStatePrimaryActionProps) {
  const sharedProps: ButtonStyleProps = {
    variant: `PRIMARY`,
    size: `L`,
    tone: `BRAND`,
  }

  if (isLink(props)) {
    return <LinkButton css={primaryCtaCss} {...props} {...sharedProps} />
  }
  if (isAnchor(props)) {
    return <AnchorButton css={primaryCtaCss} {...props} {...sharedProps} />
  }
  return (
    <Button css={primaryCtaCss} {...(props as ButtonProps)} {...sharedProps} />
  )
}

function isLink(props: EmptyStatePrimaryActionProps): props is LinkButtonProps {
  return "to" in props
}

function isAnchor(
  props: EmptyStatePrimaryActionProps
): props is AnchorButtonProps {
  return "href" in props
}

export type EmptyStateSecondaryActionProps = LinkProps

export function EmptyStateSecondaryAction(
  props: EmptyStateSecondaryActionProps
) {
  return <Link css={secondaryCtaCss} {...props} />
}
