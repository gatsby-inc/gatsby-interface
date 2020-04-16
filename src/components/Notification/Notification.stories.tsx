/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { DecoratorFn } from "@storybook/react"
import { radios, text, select, boolean } from "@storybook/addon-knobs"
import { useTransition, animated } from "react-spring"
import {
  Notification,
  NotificationProps,
  NotificationVariant,
  NotificationTone,
} from "."
import {
  sandboxWithPropVariations,
  withVariationsContainer,
} from "../../utils/storybook"
import { Button } from "../Button"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { MdSignalWifi1BarLock } from "react-icons/md"
import isChromatic from "storybook-chromatic/isChromatic"
import { withDesign } from "storybook-addon-designs"
import { Text } from "../Text"

const VARIANTS: NotificationVariant[] = [`PRIMARY`, `SECONDARY`]

const TONES: NotificationTone[] = [
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
]

const variantOptions = radioKnobOptions(VARIANTS)
const toneOptions = radioKnobOptions(TONES)

export default {
  title: `Notification`,
  component: Notification,
  decorators: [withDesign] as DecoratorFn[],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/h4ixUmOo781r3sDeBAbmDc/Notifications?node-id=1%3A152",
    },
  },
}

export const Basic = () => (
  <Notification content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
)

export const Sandbox = () =>
  sandboxWithPropVariations(
    propVariations => (
      <Notification
        content={text(
          "content",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        )}
        variant={radios("variant", variantOptions, `PRIMARY`)}
        tone={radios("tone", toneOptions, `BRAND`)}
        contentAs={select("content element", ["div", "span"], "div")}
        linkUrl={text("linkUrl", "")}
        linkText={text("linkText", "")}
        isOpened={boolean("isOpened", true)}
        showDismissButton={boolean("show dismiss button", false)}
        dismissButtonLabel={text("dismiss button label", "Close")}
        {...propVariations}
      />
    ),
    {
      variant: VARIANTS,
      tone: TONES,
    }
  )

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
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

export const CustomIcon = () => (
  <Notification
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    Icon={MdSignalWifi1BarLock}
  />
)

const ReactSpringNotification = animated(Notification)

function AnimatedNotification(props: NotificationProps) {
  const [isOpened, setIsOpened] = React.useState<boolean>(true)

  // disable animations for Chromatic
  const transitions = useTransition(
    isOpened,
    null,
    isChromatic()
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
