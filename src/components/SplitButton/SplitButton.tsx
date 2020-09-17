/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss } from "../../theme"
import { ButtonVariant } from "../../theme/styles/button"
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuItemsLowLevel,
  DropdownMenuPopover,
} from "../DropdownMenu"
import { Position, positionRight } from "@reach/popover"
import { useIconButton } from "../IconButton"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Button, ButtonProps } from "../Button"

const baseCss: ThemeCss = _theme => ({
  display: `inline-flex`,
  alignItems: `center`,
})

const primaryButtonCss: ThemeCss = _theme => ({
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRightColor: `transparent`,
})

const separatorCss: ThemeCss = _theme => ({
  display: `inline-block`,
  width: 1,
  alignSelf: `stretch`,
})

export type SplitButtonVariant = Exclude<ButtonVariant, "GHOST">

export type SplitButtonProps = Omit<
  ButtonProps,
  | "variant"
  | "leftIcon"
  | "rightIcon"
  | "loading"
  | "loadingLabel"
  | "LoadingIcon"
> & {
  buttonLabel: React.ReactNode
  dropdownButtonLabel: React.ReactNode
  children?: React.ReactNode
  variant?: SplitButtonVariant
}

export function SplitButton({
  buttonLabel,
  dropdownButtonLabel,
  children,
  variant,
  size,
  tone = `BRAND`,
  disabled,
  ...rest
}: SplitButtonProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const iconButtonProps = useIconButton({
    icon: <MdKeyboardArrowDown />,
    children: dropdownButtonLabel,
    variant,
    size,
    tone,
  })

  const finalIconButtonCss: ThemeCss = theme => [
    iconButtonProps.css(theme),
    {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      flexShrink: 0,
    },
  ]

  const finalSeparatorCss: ThemeCss = theme => [
    separatorCss(theme),
    variant === `PRIMARY` && {
      background: `
        linear-gradient(${theme.colors.whiteFade[30]} 0%, ${theme.colors.whiteFade[30]} 100%),
        linear-gradient(${theme.tones[tone].dark} 0%, ${theme.tones[tone].dark} 100%)`,
    },
    variant === `SECONDARY` && {
      backgroundColor: `transparent`,
      borderTop: `1px solid ${theme.tones[tone].light}`,
      borderBottom: `1px solid ${theme.tones[tone].light}`,
    },
  ]

  const positionMenuPopover: Position = (targetRect, popoverRect) => {
    return {
      ...positionRight(targetRect, popoverRect),
      minWidth: containerRef.current
        ? containerRef.current.clientWidth
        : `auto`,
    }
  }

  return (
    <div ref={containerRef} css={baseCss}>
      <Button
        variant={variant}
        size={size}
        tone={tone}
        disabled={disabled}
        css={primaryButtonCss}
        {...rest}
      >
        {buttonLabel}
      </Button>
      <span css={finalSeparatorCss} aria-hidden />
      <DropdownMenu>
        <DropdownMenuButton
          {...iconButtonProps}
          css={finalIconButtonCss}
          disabled={disabled}
        />
        <DropdownMenuPopover position={positionMenuPopover}>
          <DropdownMenuItemsLowLevel size="AUTO">
            {children}
          </DropdownMenuItemsLowLevel>
        </DropdownMenuPopover>
      </DropdownMenu>
    </div>
  )
}
