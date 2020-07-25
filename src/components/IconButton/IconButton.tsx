/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../theme"
import { ButtonStyleProps, getButtonStyles } from "../Button"
import { BaseButton, BaseButtonProps } from "../BaseButton"
import { visuallyHiddenCss } from "../../stylesheets/a11y"
import { ButtonSize } from "../../theme/styles/button"
import { BaseAnchor, BaseAnchorProps } from "../BaseAnchor"
import { BaseLinkProps, BaseLink } from "../BaseLink"

const baseCss: ThemeCss = _theme => ({
  paddingLeft: 0,
  paddingRight: 0,
})

const iconSizeStyles: Record<IconButtonSize, ThemeCss> = {
  S: theme => ({
    fontSize: theme.fontSizes[4],
  }),
  M: theme => ({
    fontSize: theme.fontSizes[5],
    paddingLeft: 1,
    paddingRight: 1,
  }),
  L: theme => ({
    fontSize: theme.fontSizes[6],
    paddingLeft: 1,
    paddingRight: 1,
  }),
}

export type IconButtonSize = Exclude<ButtonSize, "XL">

type IconButtonCommonProps = Omit<
  ButtonStyleProps,
  "rightIcon" | "leftIcon" | "textVariant" | "size"
> & {
  icon: React.ReactNode
  children: React.ReactNode
  size?: IconButtonSize
}

type WithIconButtonProps<T> = Omit<T, "children"> & IconButtonCommonProps

type IconButtonLabelProps = {
  icon: React.ReactNode
  children: React.ReactNode
}

function IconButtonLabel({ icon, children }: IconButtonLabelProps) {
  return (
    <React.Fragment>
      <span css={visuallyHiddenCss}>{children}</span>
      {icon}
    </React.Fragment>
  )
}

export type IconButtonProps = WithIconButtonProps<
  Omit<BaseButtonProps, "loading" | "LoadingIcon" | "loadingLabel">
>

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const { icon, children, size, tone, variant, ...rest } = props

    const iconButtonProps = useIconButton({
      icon,
      children,
      size,
      tone,
      variant,
    })

    return <BaseButton {...iconButtonProps} {...rest} ref={ref} />
  }
)

export type IconAnchorButtonProps = WithIconButtonProps<BaseAnchorProps>

export const IconAnchorButton = React.forwardRef<
  HTMLAnchorElement,
  IconAnchorButtonProps
>(function IconAnchorButton(props, ref) {
  const { icon, children, size, tone, variant, ...rest } = props

  const iconButtonProps = useIconButton({
    icon,
    children,
    size,
    tone,
    variant,
  })

  return <BaseAnchor {...iconButtonProps} {...rest} ref={ref} />
})

export type IconLinkButtonProps = WithIconButtonProps<BaseLinkProps<any>>

export function IconLinkButton(props: IconLinkButtonProps) {
  const { icon, children, size, tone, variant, ...rest } = props

  const iconButtonProps = useIconButton({
    icon,
    children,
    size,
    tone,
    variant,
  })

  return <BaseLink {...iconButtonProps} {...rest} />
}

function useIconButton({
  icon,
  children,
  size = `L`,
  tone,
  variant,
}: IconButtonCommonProps) {
  const { css, ...styledButtonProps } = getButtonStyles({
    children: <IconButtonLabel icon={icon}>{children}</IconButtonLabel>,
    loading: false,
    size,
    tone,
    variant,
    leftIcon: null,
    rightIcon: null,
    textVariant: `DEFAULT`,
  })

  const finalCss: ThemeCss = theme => [
    css(theme),
    baseCss(theme),
    iconSizeStyles[size](theme),
  ]

  return {
    ...styledButtonProps,
    css: finalCss,
  }
}
