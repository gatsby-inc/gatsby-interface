/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import { MdClose, MdArrowForward } from "react-icons/md"

import styles from "../../theme/styles/notification"
import tones from "../../theme/tones"
import space from "../../theme/space"
import colors from "../../theme/colors"
import { Link } from "../Link"
import { Button } from "../Button"

import {
  NOTIFICATION_TONES,
  NOTIFICATION_VARIANTS,
  NOTIFICATION_ICONS,
} from "../../utils/options"
import { showCustomCssDeprecationMessage } from "../../utils/maintenance/deprecationMessages"

const NotificationContext = React.createContext()

const asOptions = {
  div: `div`,
  section: `section`,
}
function Notification({
  customCss,
  children,
  as = `div`,
  tone = `BRAND`,
  variant = `PRIMARY`,
  content,
  contentAs = `span`,
  linkUrl,
  linkText,
  showNotification = true,
  closeNotificationButton,
  ...rest
}) {
  showCustomCssDeprecationMessage(customCss)
  const [showNotificationState, setNotificationState] = useState(
    showNotification
  )
  const Component = asOptions[as]

  const Icon = content && NOTIFICATION_ICONS[tone]

  if (!showNotificationState) return null

  return (
    <NotificationContext.Provider
      value={{ showNotificationState, setNotificationState }}
    >
      <Component
        css={[
          {
            ...styles.base,
            ...styles.variants[variant](tones[tone]),
          },
          customCss,
        ]}
        {...rest}
      >
        {content && (
          <Notification.Content tone={tone} as={contentAs}>
            {Icon && <Icon />}
            {content}
          </Notification.Content>
        )}

        {linkUrl && (
          <Notification.Link to={linkUrl}>
            {linkText && (
              <Fragment>
                {linkText} <MdArrowForward />
              </Fragment>
            )}
          </Notification.Link>
        )}

        {closeNotificationButton && (
          <Button
            css={{
              padding: `0`,
              minHeight: `auto`,
              svg: { fill: colors.grey[40] },
              width: space[5],
            }}
            type="button"
            onClick={() => setNotificationState(!showNotificationState)}
            variant="GHOST"
          >
            <MdClose />
          </Button>
        )}
        {children}
      </Component>
    </NotificationContext.Provider>
  )
}

Notification.propTypes = {
  children: PropTypes.any,
  as: PropTypes.oneOf([`div`, `section`]),
  variant: PropTypes.oneOf(NOTIFICATION_VARIANTS),
  tone: PropTypes.oneOf(NOTIFICATION_TONES),
  content: PropTypes.string,
  contentAs: PropTypes.string,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
  closeNotificationButton: PropTypes.bool,
  showNotification: PropTypes.bool,
}

const contentAsOption = {
  div: `div`,
  span: `span`,
}

Notification.Content = ({
  children,
  css,
  as = `span`,
  tone = `BRAND`,
  ...rest
}) => {
  const Component = contentAsOption[as]
  return (
    <Component
      css={{
        display: `flex`,
        alignItems: `center`,
        ...css,
        svg: {
          fill: tones[tone].dark,
          marginRight: space[3],
        },
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

Notification.Content.propTypes = {
  children: PropTypes.any,
  as: PropTypes.oneOf([`div`, `span`]),
  tone: PropTypes.oneOf(NOTIFICATION_TONES),
}

Notification.Link = props => <Link {...props} />

Notification.CloseButton = () => {
  const {
    showNotificationState,
    setNotificationState,
  } = Notification.useNotificationContext()
  return (
    <Button
      css={{
        padding: `0`,
        minHeight: `auto`,
        svg: { fill: colors.grey[40] },
        width: space[5],
      }}
      type="button"
      onClick={() => setNotificationState(!showNotificationState)}
      variant="GHOST"
    >
      <MdClose />
    </Button>
  )
}

Notification.useNotificationContext = () => {
  const context = React.useContext(NotificationContext)
  if (!context) {
    throw new Error(
      `Notification compound components cannot be rendered outside the main component`
    )
  }
  return context
}

export default Notification
