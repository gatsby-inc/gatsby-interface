/** @jsx jsx */
import { jsx, InterpolationWithTheme } from "@emotion/core"
import React from "react"
import { MdRefresh } from "react-icons/md"

import { BaseButton, BaseButtonProps } from "../BaseButton"
import {
  getButtonCss,
  ButtonVariant,
  ButtonTone,
  ButtonSize,
} from "../../theme/styles/button"
import { Theme } from "../../theme"

export type ButtonStyleProps = {
  size?: ButtonSize
  tone?: ButtonTone
  variant?: ButtonVariant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export type ButtonProps = BaseButtonProps & ButtonStyleProps

export function getButtonStyles({
  children,
  size = `L`,
  tone = `BRAND`,
  variant = `PRIMARY`,
  loading,
  leftIcon,
  rightIcon,
}: {
  children: React.ReactNode
  loading?: boolean
} & ButtonStyleProps): {
  css: InterpolationWithTheme<Theme>
  children: React.ReactNode
} {
  return {
    css: getButtonCss({
      size,
      variant,
      tone,
      loading,
      leftIcon,
      rightIcon,
    }),
    children:
      leftIcon || rightIcon ? (
        <React.Fragment>
          {leftIcon}
          {children}
          {rightIcon}
        </React.Fragment>
      ) : (
        children
      ),
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      loading,
      LoadingIcon = MdRefresh,
      size,
      tone,
      variant,
      leftIcon,
      rightIcon,
      ...rest
    } = props

    return (
      <BaseButton
        {...getButtonStyles({
          children,
          loading,
          size,
          tone,
          variant,
          leftIcon,
          rightIcon,
        })}
        loading={loading}
        LoadingIcon={LoadingIcon}
        {...rest}
        ref={ref}
      />
    )
  }
)
