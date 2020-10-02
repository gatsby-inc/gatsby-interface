import * as React from "react"
import { Meta } from "@storybook/react"
import { Button } from "../Button"
import {
  ToastProvider,
  ToastConsumer,
  useShowErrorToast,
  useShowSuccessToast,
  useShowErrorAlert,
} from "."

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

export const Basic = () => {
  function ErrorToastExample() {
    const showErrorToast = useShowErrorToast()

    return (
      <Button onClick={() => showErrorToast(`An error occured`)}>
        Show error toast
      </Button>
    )
  }
  function ErrorAlertExample() {
    const showErrorAlert = useShowErrorAlert()

    return (
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
    )
  }
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
      <ErrorToastExample />
      <ErrorAlertExample />
    </ToastProvider>
  )
}
