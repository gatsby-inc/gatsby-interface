/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"
import { useTransition, animated } from "react-spring"
import {
  Notification,
  NotificationTone,
  NotificationProps,
  NotificationVariant,
} from "."
import { StoryUtils } from "../../utils/storybook"
import { Button } from "../Button"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { MdSignalWifi1BarLock } from "react-icons/md"
import isChromatic from "storybook-chromatic/isChromatic"
import { withDesign } from "storybook-addon-designs"
import README from "./README.md"

const NOTIFICATION_VARIANTS = radioKnobOptions<NotificationVariant>([
  `PRIMARY`,
  `SECONDARY`,
])

const NOTIFICATION_TONES = radioKnobOptions<NotificationTone>([
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
])

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

storiesOf(`Notification`, module)
  .addDecorator(withDesign)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/h4ixUmOo781r3sDeBAbmDc/Notifications?node-id=1%3A152",
    },
  })
  .add(`default`, () => (
    <StoryUtils.Container>
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          width: `500px`,
          "& > button": { margin: `20px` },
        }}
      >
        <Notification
          tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
          content={`Notification variant 'PRIMARY'`}
          linkUrl="/"
          linkText="Link"
        />
        <Notification
          css={{ marginTop: `1rem` }}
          as="section"
          variant="SECONDARY"
          tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
          content={`Notification variant 'SECONDARY'`}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`dismissable`, () => (
    <StoryUtils.Container>
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
          css={{ marginTop: `1rem` }}
          tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
          content={`Notification variant 'PRIMARY' with close`}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`custom icon`, () => (
    <StoryUtils.Container>
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          width: `500px`,
          "& > button": { margin: `20px` },
        }}
      >
        <Notification
          variant={radios(`variant`, NOTIFICATION_VARIANTS, `PRIMARY`)}
          tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
          content={`Notification with custom icon`}
          Icon={MdSignalWifi1BarLock}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`animated with react-spring`, () => {
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

    return (
      <StoryUtils.Container>
        <div css={{ maxWidth: "400px", width: "100%", minHeight: "300px" }}>
          <AnimatedNotification
            css={{ marginTop: `1rem` }}
            tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
            content={`Notification variant 'PRIMARY' with close`}
          />
        </div>
      </StoryUtils.Container>
    )
  })
  .add(`Tones & variants`, () => (
    <StoryUtils.Container>
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          width: `500px`,
        }}
      >
        {NOTIFICATION_TONES.map(tone => (
          <div key={tone} css={{ marginTop: `1rem`, width: "100%" }}>
            <Notification
              tone={tone}
              variant={radios(`variant`, NOTIFICATION_VARIANTS, `PRIMARY`)}
              content={`Notification tone '${tone}'`}
            />
          </div>
        ))}
      </div>
    </StoryUtils.Container>
  ))
