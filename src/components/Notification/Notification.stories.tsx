/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { useTransition, animated } from "react-spring"
import { withVariationsContainer, isA11yTest } from "../../utils/storybook"
import { Button } from "../Button"
import { MdSignalWifi1BarLock } from "react-icons/md"
import isChromatic from "storybook-chromatic/isChromatic"
import { withDesign } from "storybook-addon-designs"
import { Text } from "../Text"
import {
  Notification,
  NotificationProps,
  NotificationVariant,
  NotificationTone,
} from "."

const VARIANTS: NotificationVariant[] = [`PRIMARY`, `SECONDARY`, `SOLID`]

const TONES: NotificationTone[] = [
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
]

export default {
  title: `Notification`,
  component: Notification,
  decorators: [withDesign],
  parameters: {
    componentSubtitle:
      "Notifications, or flash messages, inform users of successful or pending actions, or contain other important information. Use them sparingly, and ideally don't show more than one at a time.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/h4ixUmOo781r3sDeBAbmDc/Notifications?node-id=1%3A152",
    },
  },
} as Meta

const Template: Story<NotificationProps> = args => <Notification {...args} />

export const Basic = Template.bind({})

Basic.args = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <Notification
      key={variant}
      variant={variant}
      content={`Notification variant "${variant}"`}
    />
  ))

Variants.story = {
  decorators: [withVariationsContainer],
}

export const Tones = () =>
  TONES.map(tone => (
    <Notification
      key={tone}
      tone={tone}
      content={`Notification tone "${tone}"`}
    />
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

function ControlledNotification(props: NotificationProps) {
  const [isOpened, setIsOpened] = React.useState<boolean>(true)

  return (
    <div>
      <Button
        onClick={() => setIsOpened(true)}
        disabled={isOpened}
        variant="SECONDARY"
        tone="NEUTRAL"
        size="M"
      >
        Show notification
      </Button>
      <Notification
        {...props}
        isOpened={isOpened}
        showDismissButton
        onDismissButtonClick={() => setIsOpened(false)}
      />
    </div>
  )
}

export const Dismissable = () => (
  <div
    css={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `flex-start`,
      width: `500px`,
      "& > button": { margin: `20px` },
    }}
  >
    <ControlledNotification
      css={theme => ({ marginTop: theme.space[3] })}
      content={`Notification with dismiss button`}
    />
  </div>
)

export const CustomIcon = Template.bind({})

CustomIcon.args = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  Icon: MdSignalWifi1BarLock,
}

const ReactSpringNotification = animated(Notification)

function AnimatedNotification(props: NotificationProps) {
  const [isOpened, setIsOpened] = React.useState<boolean>(true)

  // disable animations for Chromatic
  const transitions = useTransition(
    isOpened,
    null,
    isChromatic() || isA11yTest()
      ? {}
      : {
          from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
          enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
          leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
        }
  )

  return (
    <React.Fragment>
      <Button
        css={{ marginBottom: `1rem` }}
        onClick={() => setIsOpened(!isOpened)}
        variant="SECONDARY"
        tone="NEUTRAL"
        size="M"
      >
        Toggle notification
      </Button>

      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <ReactSpringNotification
              key={key}
              style={style}
              isOpened={true}
              onDismissButtonClick={() => setIsOpened(false)}
              {...props}
            />
          )
      )}
    </React.Fragment>
  )
}

export const Animated = () => (
  <React.Fragment>
    <div css={{ maxWidth: "400px", width: "100%", minHeight: "300px" }}>
      <Text>Animated with react-spring</Text>
      <AnimatedNotification content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
    </div>
  </React.Fragment>
)
