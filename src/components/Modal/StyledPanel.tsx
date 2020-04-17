/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Heading } from "../Heading"
import {
  StyledModalCloseButton,
  StyledModalCloseButtonProps,
} from "./StyledModal"
import { ThemeCss } from "../../theme"
import { StickyObserver } from "../StickyObserver"

export type StyledPanelProps = {
  children: React.ReactNode
}

export function StyledPanel({ children }: StyledPanelProps) {
  return <React.Fragment>{children}</React.Fragment>
}

const headerContainerCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.white,
  borderBottom: `1px solid ${theme.colors.grey[20]}`,
})

const headerCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  paddingTop: theme.space[7],
  paddingRight: theme.space[7],
  paddingBottom: theme.space[7],
  paddingLeft: theme.space[7],
})

export type StyledPanelHeaderProps = {
  children: React.ReactNode
  onCloseButtonClick?: () => void
  closeButtonLabel?: string
}
export function StyledPanelHeader({
  children,
  onCloseButtonClick,
  closeButtonLabel = `Close panel`,
}: StyledPanelHeaderProps) {
  return (
    <StickyObserver lipShadowPosition="bottom" css={headerContainerCss}>
      <div css={headerCss}>
        <Heading variant="PRIMARY">{children}</Heading>

        <StyledPanelCloseButton
          onClick={onCloseButtonClick}
          aria-label={closeButtonLabel}
        />
      </div>
    </StickyObserver>
  )
}

export type StyledPanelCloseButtonProps = StyledModalCloseButtonProps

export function StyledPanelCloseButton(props: StyledPanelCloseButtonProps) {
  return <StyledModalCloseButton {...props} />
}

const bodySectionCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.white,
  paddingTop: theme.space[5],
  paddingRight: theme.space[7],
  paddingBottom: theme.space[7],
  paddingLeft: theme.space[7],
})

export type StyledPanelBodySectionProps = {
  children: React.ReactNode
}

export function StyledPanelBodySection({
  children,
}: StyledPanelBodySectionProps) {
  return <div css={bodySectionCss}>{children}</div>
}

const actionsContainerCss: ThemeCss = theme => ({
  width: `100%`,
  backgroundColor: theme.colors.white,
  borderTop: `1px solid ${theme.colors.grey[20]}`,
})

const actionsCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  paddingTop: theme.space[7],
  paddingRight: theme.space[7],
  paddingBottom: theme.space[7],
  paddingLeft: theme.space[7],
})

export type StyledPanelActionsProps = {
  children: React.ReactNode
}

export function StyledPanelActions({ children }: StyledPanelActionsProps) {
  return (
    <StickyObserver lipShadowPosition="top" css={actionsContainerCss}>
      <div css={actionsCss}>{children}</div>
    </StickyObserver>
  )
}
