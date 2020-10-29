import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Button } from "../Button"
import { ToastProvider, ToastConsumer, useShowSuccessToast } from "."
import { Toast, ToastProps } from "./Toast"

export default {
  title: `Toast`,
  component: ToastProvider,
  subcomponents: {
    ToastConsumer,
  },
  parameters: {
    componentSubtitle:
      "Toasts provide brief messages about app processes at the bottom of the screen, usually to give feedback after an action has taken place.",
  },
} as Meta

const Template: Story<ToastProps> = args => <Toast {...args} />

export const Basic = Template.bind({})

Basic.args = {
  message: `Some short toast message`,
  closeButtonLabel: `Close`,
  onClose: () => undefined,
  tone: `SUCCESS`,
}

export const TriggerToast = () => {
  function NoTimeoutExample() {
    const showSuccessToast = useShowSuccessToast()

    return (
      <Button
        onClick={() =>
          showSuccessToast(`This message will stay on screen until closed`, {
            timeout: 0,
          })
        }
      >
        Show toast without auto hide
      </Button>
    )
  }
  return (
    <ToastProvider>
      <ToastConsumer>
        {({ showToast }) => (
          <React.Fragment>
            <Button onClick={() => showToast(`Your action was successful`)}>
              Show toast
            </Button>
          </React.Fragment>
        )}
      </ToastConsumer>
      <NoTimeoutExample />
    </ToastProvider>
  )
}
