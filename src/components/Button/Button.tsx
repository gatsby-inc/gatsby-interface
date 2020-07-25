/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { MdRefresh } from "react-icons/md"

import { BaseButton, BaseButtonProps } from "../BaseButton"
import {
  getButtonCss,
  ButtonVariant,
  ButtonTone,
  ButtonSize,
  ButtonTextVariant,
} from "../../theme/styles/button"
import { ThemeCss } from "../../theme"

export type ButtonStyleProps = {
  size?: ButtonSize
  tone?: ButtonTone
  variant?: ButtonVariant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  textVariant?: ButtonTextVariant
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
  textVariant = `DEFAULT`,
}: {
  children: React.ReactNode
  loading?: boolean
} & ButtonStyleProps): {
  css: ThemeCss
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
      textVariant,
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
      textVariant,
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
          textVariant,
        })}
        loading={loading}
        LoadingIcon={LoadingIcon}
        {...rest}
        ref={ref}
      />
    )
  }
)
