/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import { MdClose, MdArrowForward } from "react-icons/md"

import { Button } from "../Button"
import { NotificationVariant, NotificationTone } from "./types"
import {
  getNotificationVariantStyles,
  iconByTone,
} from "./Notification.helpers"
import { PropsOf } from "../../utils/types"
import { Link } from "../Link"
import { ThemeCss, Theme } from "../../theme"

export type NotificationContextValue = {
  onDismiss?: () => void
}

const NotificationContext = React.createContext<NotificationContextValue>({
  onDismiss: () => undefined,
})

const baseCss: ThemeCss = theme => ({
  display: `flex`,
  alignItems: `flex-start`,
  justifyContent: `space-between`,
  flexWrap: `nowrap`,
  width: `100%`,
  fontSize: theme.fontSizes[1],
})

type AllowedAs = "section" | "div"

export type NotificationProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  children?: React.ReactNode
  as?: AllowedAs
  variant?: NotificationVariant
  tone?: NotificationTone
  content?: React.ReactNode
  contentAs?: NotificationContentProps["as"]
  linkUrl?: string
  linkText?: React.ReactNode
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
  isOpened?: boolean
  onDismissButtonClick?: () => void
  showDismissButton?: boolean
  dismissButtonLabel?: string
  Icon?: React.ComponentType<any>
}

export default function Notification({
  children,
  as: Component = `div`,
  tone = `BRAND`,
  variant = `PRIMARY`,
  content,
  contentAs = `span`,
  linkUrl,
  linkText,
  onLinkClick,
  isOpened = true,
  onDismissButtonClick,
  showDismissButton = !!onDismissButtonClick,
  dismissButtonLabel,
  Icon: CustomIcon,
  ...rest
}: NotificationProps) {
  if (!isOpened) {
    return null
  }
  const PresetIcon = content && iconByTone[tone]
  // TODO apply icon color based on tone
  const Icon = CustomIcon || PresetIcon

  return (
    <NotificationContext.Provider value={{ onDismiss: onDismissButtonClick }}>
      <Component
        css={theme => [
          baseCss(theme),
          getNotificationVariantStyles(variant, tone)(theme),
        ]}
        {...rest}
      >
        {content && (
          <Notification.Content tone={tone} as={contentAs}>
            {Icon && (
              <Icon
                css={theme => ({
                  marginRight: theme.space[3],
                  fontSize: theme.fontSizes[4],
                  color: theme.tones[tone].dark,
                  flexShrink: 0,
                })}
              />
            )}
            {content}
          </Notification.Content>
        )}

        {linkUrl && linkText && (
          <Notification.Link to={linkUrl} onClick={onLinkClick}>
            {linkText && (
              <Fragment>
                {linkText} <MdArrowForward />
              </Fragment>
            )}
          </Notification.Link>
        )}

        {showDismissButton && (
          <Notification.DismissButton label={dismissButtonLabel} />
        )}
        {children}
      </Component>
    </NotificationContext.Provider>
  )
}

type AllowedContentAs = "span" | "div"

export type NotificationContentProps = Omit<
  PropsOf<AllowedContentAs>,
  "ref"
> & {
  as?: AllowedContentAs
  tone?: NotificationTone
}

function NotificationContent({
  as: Component = `span`,
  tone = `BRAND`,
  ...rest
}: NotificationContentProps) {
  return (
    <Component
      css={(theme: Theme) => ({
        display: `flex`,
        alignItems: `flex-start`,
        lineHeight: theme.lineHeights.default,
        color:
          tone === `WARNING`
            ? theme.tones[`NEUTRAL`].superDark
            : theme.tones[tone].dark,
      })}
      {...rest}
    />
  )
}
NotificationContent.displayName = `Notification.Content`

function NotificationDismissButton({ label = `Close` }: { label?: string }) {
  const { onDismiss } = Notification.useNotificationContext()

  return (
    <Button
      css={theme => ({
        padding: `0`,
        minHeight: `auto`,
        color: theme.colors.grey[40],
        width: theme.space[5],
        marginLeft: theme.space[5],
      })}
      type="button"
      onClick={onDismiss}
      variant="GHOST"
      aria-label={label}
    >
      <MdClose />
    </Button>
  )
}
NotificationDismissButton.displayName = `Notification.DismissButton`

Notification.Content = NotificationContent
Notification.Link = Link
Notification.DismissButton = NotificationDismissButton

Notification.useNotificationContext = () => {
  const context = React.useContext(NotificationContext)
  if (!context) {
    throw new Error(
      `Notification compound components cannot be rendered outside the main component`
    )
  }
  return context
}
