import React from "react"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { Button } from "../Button"
import {
  ToastProvider,
  ToastConsumer,
  useShowErrorToast,
  useShowSuccessToast,
  useShowErrorAlert,
} from "."
import README from "./README.md"

storiesOf(`Toast`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Default`, () => {
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
      <StoryUtils.Container>
        <StoryUtils.Stack>
          <ToastProvider>
            <ToastConsumer>
              {({ showToast }) => (
                <React.Fragment>
                  <Button
                    onClick={() => showToast(`Your action was successful`)}
                  >
                    Show toast
                  </Button>
                </React.Fragment>
              )}
            </ToastConsumer>
            <NoTimeoutExample />
            <ErrorToastExample />
            <ErrorAlertExample />
          </ToastProvider>
        </StoryUtils.Stack>
      </StoryUtils.Container>
    )
  })
