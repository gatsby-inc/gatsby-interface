import React from "react"
import { DecoratorFn } from "@storybook/react"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { Button } from "../Button"
import {
  ToastProvider,
  ToastConsumer,
  useShowErrorToast,
  useShowSuccessToast,
  useShowErrorAlert,
  ToastTone,
} from "."
import README from "./README.md"
import { Toast } from "./Toast"
import { action } from "@storybook/addon-actions"
import { text, radios } from "@storybook/addon-knobs"
import { Global } from "@emotion/core"
import isChromatic from "storybook-chromatic/isChromatic"

export default {
  title: `Toast`,
  component: Toast,
  subcomponents: {
    ToastProvider,
    ToastConsumer,
  },
  parameters: {
    componentSubtitle:
      "Toasts provide brief messages about app processes at the bottom of the screen, usually to give feedback after an action has taken place.",
    readme: {
      sidebar: README,
    },
  },
  decorators: [
    story => (
      <React.Fragment>
        <Global
          styles={() => [
            isChromatic() && {
              // Make animations instant so that Chromatic can take proper snapshots
              "*, :before, :after": {
                animationDuration: `0s !important`,
                animationDelay: `0s !important`,
              },
            },
          ]}
        />
        {story()}
      </React.Fragment>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => (
  <Toast
    message="Lorem ipsum dolor sit amet consectetur adipisicing elit"
    onClose={action("onClose")}
    closeButtonLabel="Close"
    tone="SUCCESS"
  />
)

const TONES: ToastTone[] = ["SUCCESS", "DANGER"]

export const Sandbox = () => (
  <Toast
    message={text(
      "message",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    )}
    tone={radios(`tone`, radioKnobOptions(TONES), `SUCCESS`)}
    closeButtonLabel={text("closeButtonLabel", "Close")}
    onClose={action("onClose")}
  />
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Tones = () =>
  TONES.map(tone => (
    <Toast
      key={tone}
      message="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      tone={tone}
      onClose={action("onClose")}
      closeButtonLabel="Close"
    />
  ))

Tones.story = {
  decorators: [withVariationsContainer],
}

export const UsageWithHooks = () => {
  function ToastTriggersExample() {
    const showErrorToast = useShowErrorToast()
    const showErrorAlert = useShowErrorAlert()
    const showSuccessToast = useShowSuccessToast()

    return (
      <React.Fragment>
        <Button onClick={() => showErrorToast(`An error occured`)}>
          Show error toast
        </Button>
        <Button
          onClick={() =>
            showErrorAlert(`An error occured`, {
              href: `https://google.com`,
              linkLabel: `See details`,
              target: `_blank`,
            })
          }
        >
          Show error alert
        </Button>
        <Button
          onClick={() =>
            showSuccessToast(`This message will stay on screen until closed`, {
              timeout: 0,
            })
          }
        >
          Show toast without auto hide
        </Button>
      </React.Fragment>
    )
  }

  // Trigger all toasts for visual regression testing
  React.useEffect(() => {
    if (!isChromatic()) {
      return
    }
    document.querySelectorAll("button").forEach(button => button.click())
  }, [])

  return (
    <ToastProvider>
      <ToastTriggersExample />
    </ToastProvider>
  )
}

UsageWithHooks.story = {
  decorators: [
    withVariationsContainer,
    story => (
      <div style={isChromatic() ? { width: `100vw`, height: `100vh` } : {}}>
        {story()}
      </div>
    ),
  ] as DecoratorFn[],
}
