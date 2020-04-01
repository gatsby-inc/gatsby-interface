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
  lineHeight: theme.lineHeights.default,
})

export type NotificationProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
  children?: React.ReactNode
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
  const Icon = CustomIcon || PresetIcon

  return (
    <NotificationContext.Provider value={{ onDismiss: onDismissButtonClick }}>
      <div
        css={(theme: Theme) => [
          variant === `PRIMARY` && theme.cardStyles.frame,
          baseCss(theme),
          getNotificationVariantStyles(variant, tone)(theme),
        ]}
        {...rest}
      >
        {content && (
          <NotificationContent as={contentAs}>
            {Icon && (
              <Icon
                css={theme => ({
                  marginRight: theme.space[4],
                  fontSize: theme.fontSizes[4],
                  color: theme.tones[tone].medium,
                  flexShrink: 0,
                  width: "auto",
                  height: "1em",
                })}
              />
            )}
            {content}
          </NotificationContent>
        )}

        {linkUrl && linkText && (
          <Link to={linkUrl} onClick={onLinkClick}>
            {linkText && (
              <Fragment>
                {linkText} <MdArrowForward />
              </Fragment>
            )}
          </Link>
        )}

        {showDismissButton && (
          <NotificationDismissButton label={dismissButtonLabel} />
        )}
        {children}
      </div>
    </NotificationContext.Provider>
  )
}

type AllowedContentAs = "span" | "div"

export type NotificationContentProps = Omit<
  PropsOf<AllowedContentAs>,
  "ref"
> & {
  as?: AllowedContentAs
}

function NotificationContent({
  as: Component = `span`,
  ...rest
}: NotificationContentProps) {
  return (
    <Component
      css={(theme: Theme) => ({
        display: `flex`,
        alignItems: `flex-start`,
        color: theme.tones[`NEUTRAL`].superDark,
      })}
      {...rest}
    />
  )
}

function NotificationDismissButton({ label = `Close` }: { label?: string }) {
  const { onDismiss } = useNotificationContext()

  return (
    <Button
      css={theme => ({
        padding: `0`,
        minHeight: `auto`,
        color: theme.colors.grey[40],
        width: theme.space[5],
        marginLeft: theme.space[5],
        fontSize: theme.fontSizes[4],
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

function useNotificationContext() {
  const context = React.useContext(NotificationContext)
  if (!context) {
    throw new Error(
      `Notification compound components cannot be rendered outside the main component`
    )
  }
  return context
}
