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
import { CustomCss } from "../../theme"

export type NotificationContextValue = {
  onDismiss?: () => void
}

const NotificationContext = React.createContext<NotificationContextValue>({
  onDismiss: () => undefined,
})

const baseCss: CustomCss = theme => ({
  display: `flex`,
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
  ...rest
}: NotificationProps) {
  if (!isOpened) {
    return null
  }
  const Icon = content && iconByTone[tone]

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
            {Icon && <Icon css={theme => ({ marginRight: theme.space[3] })} />}
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

        {showDismissButton && <Notification.DismissButton />}
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
      css={theme => ({
        display: `flex`,
        alignItems: `center`,
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

function NotificationDismissButton() {
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
