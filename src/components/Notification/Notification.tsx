/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React, { Fragment } from "react"
import { MdClose, MdArrowForward } from "react-icons/md"

import tones from "../../theme/tones"
import space from "../../theme/space"
import colors from "../../theme/colors"
import { Button } from "../Button"
import { NotificationVariant, NotificationTone } from "./types"
import {
  getNotificationVariantStyles,
  iconByTone,
} from "./Notification.helpers"
import { PropsOf } from "../../utils/types"
import { Link } from "../Link"

export type NotificationContextValue = {
  onDismiss?: () => void
}

const NotificationContext = React.createContext<NotificationContextValue>({
  onDismiss: () => undefined,
})

const baseCss = css({
  display: `flex`,
  justifyContent: `space-between`,
  flexWrap: `wrap`,
  width: `100%`,
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
        css={[baseCss, getNotificationVariantStyles(variant, tone)]}
        {...rest}
      >
        {content && (
          <Notification.Content tone={tone} as={contentAs}>
            {Icon && <Icon css={{ marginRight: space[3] }} />}
            {content}
          </Notification.Content>
        )}

        {linkUrl && linkText && (
          <Notification.Link to={linkUrl}>
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
      css={{
        display: `flex`,
        alignItems: `center`,
        color: tones[tone].dark,
      }}
      {...rest}
    />
  )
}
NotificationContent.displayName = `Notification.Content`

function NotificationDismissButton() {
  const { onDismiss } = Notification.useNotificationContext()

  return (
    <Button
      css={{
        padding: `0`,
        minHeight: `auto`,
        color: colors.grey[40],
        width: space[5],
      }}
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
