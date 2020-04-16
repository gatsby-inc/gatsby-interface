/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { MdClose } from "react-icons/md"
import { Heading } from "../Heading"
import {
  headerCss,
  titleCss,
  closeButtonCss,
  closeIconCss,
  bodyCss,
  bodyVariantCss,
  actionsCss,
} from "./StyledModal.styles"

export type StyledModalVariant =
  | `DEFAULT`
  | `SUCCESS`
  | `WARNING`
  | `ERROR`
  | `ACTION`
  | `RETAKE`

export type StyledModalContextValue = {
  variant: StyledModalVariant
}

const StyledModalContext = React.createContext<StyledModalContextValue>({
  variant: `DEFAULT`,
})

export function useStyledModalContext() {
  return React.useContext(StyledModalContext)
}

export type StyledModalProps = {
  children: React.ReactNode
  variant?: StyledModalVariant
}

export function StyledModal({
  children,
  variant = `DEFAULT`,
}: StyledModalProps) {
  return (
    <StyledModalContext.Provider value={{ variant }}>
      {children}
    </StyledModalContext.Provider>
  )
}

export type StyledModalHeaderProps = {
  children: React.ReactNode
  onCloseButtonClick?: () => void
  closeButtonLabel?: string
}

export function StyledModalHeader({
  children,
  onCloseButtonClick,
  closeButtonLabel = `Close modal`,
}: StyledModalHeaderProps) {
  return (
    <div css={headerCss}>
      <Heading css={titleCss}>{children}</Heading>

      <StyledModalCloseButton
        onClick={onCloseButtonClick}
        aria-label={closeButtonLabel}
      />
    </div>
  )
}

export type StyledModalCloseButtonProps = Omit<
  JSX.IntrinsicElements["button"],
  "ref"
>

export function StyledModalCloseButton(props: StyledModalCloseButtonProps) {
  return (
    <button css={closeButtonCss} {...props}>
      <MdClose css={closeIconCss} />
    </button>
  )
}

export type StyledModalBodyProps = {
  children: React.ReactNode
}

export function StyledModalBody({ children }: StyledModalBodyProps) {
  const { variant } = useStyledModalContext()

  return (
    <div css={theme => [bodyCss(theme), bodyVariantCss[variant](theme)]}>
      {children}
    </div>
  )
}

export type StyledModalActionsProps = {
  children: React.ReactNode
}

export function StyledModalActions({ children }: StyledModalActionsProps) {
  return <div css={actionsCss}>{children}</div>
}
