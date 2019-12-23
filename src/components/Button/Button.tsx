/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { MdRefresh } from "react-icons/md"

import { BaseButton, BaseButtonProps } from "../BaseButton"
import styles from "../../theme/styles/button"

export type ButtonSize = "XL" | "L" | "M" | "S"
export type ButtonTone = "BRAND" | "SUCCESS" | "DANGER" | "NEUTRAL"
export type ButtonVariant = "PRIMARY" | "SECONDARY" | "GHOST"

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
  css: ReturnType<typeof css>
  children: React.ReactNode
} {
  return {
    css: [
      styles.base({ loading, leftIcon, rightIcon }),
      styles.sizes[size],
      styles.variants[variant]({ tone }),
    ] as any,
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
