/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Global } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text } from "@storybook/addon-knobs"
import isChromatic from "storybook-chromatic/isChromatic"
import {
  StyledPanel,
  StyledPanelHeader,
  StyledPanelBodySection,
  StyledPanelActions,
  Modal,
  ModalPanel,
} from "./"
import { Theme } from "../../theme"
import { Button } from "../Button"
import { disableAnimationsDecorator } from "../../utils/storybook"
import { StyledPanelBoilerplate } from "./StyledPanel"

export default {
  title: `Modal/StyledPanel`,
  component: StyledPanel,
  subcomponents: {
    StyledPanelHeader,
    StyledPanelBodySection,
    StyledPanelActions,
  },
  parameters: {
    options: {
      showRoots: true,
    },
  },
  decorators: [
    disableAnimationsDecorator,
    story => (
      <React.Fragment>
        <Global
          styles={(theme: Theme) => [
            {
              body: { background: theme.colors.grey[20] },
            },
          ]}
        />
        {story()}
      </React.Fragment>
    ),
  ] as DecoratorFn[],
}

const fullSizeDecorator: DecoratorFn = story => (
  <div style={{ width: `100vw`, height: `100vh` }}>{story()}</div>
)

const maxWidthDecorator: DecoratorFn = story => (
  <div style={{ maxWidth: `620px` }}>{story()}</div>
)

const LONG_TEXT = Array(15)
  .fill(
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia recusandae nisi magni, dolore laboriosam maiores suscipit perspiciatis. Perspiciatis quod ipsum corporis officia necessitatibus, doloribus fuga culpa. Unde, molestiae repellendus.`
  )
  .join(" ")

export const Basic = () => (
  <StyledPanel>
    <StyledPanelHeader>Header</StyledPanelHeader>
    <StyledPanelBodySection>{LONG_TEXT}</StyledPanelBodySection>
    <StyledPanelActions>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </StyledPanelActions>
  </StyledPanel>
)

Basic.story = {
  decorators: [maxWidthDecorator],
}

export const Sandbox = () => (
  <StyledPanel>
    <StyledPanelHeader
      closeButtonLabel={text("close button label", "Close modal")}
    >
      {text("header text", "Hello World")}
    </StyledPanelHeader>
    <StyledPanelBodySection>
      {text("body text", LONG_TEXT)}
    </StyledPanelBodySection>
    <StyledPanelActions>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </StyledPanelActions>
  </StyledPanel>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
  decorators: [maxWidthDecorator],
}

export const UsageExample = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Open panel in Chromatic to keep track of visual regressions
    if (!isChromatic()) {
      return
    }
    const button = document.querySelector("button")
    if (button) {
      button.click()
    }
  }, [])

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Open panel</Button>
      <Modal aria-label="Some impressive content" isOpen={isOpen}>
        <ModalPanel>
          <StyledPanel>
            <StyledPanelHeader onCloseButtonClick={() => setIsOpen(false)}>
              Header
            </StyledPanelHeader>
            <StyledPanelBodySection>{LONG_TEXT}</StyledPanelBodySection>
            <StyledPanelActions>
              <Button>Action 1</Button>
              <Button>Action 2</Button>
            </StyledPanelActions>
          </StyledPanel>
        </ModalPanel>
      </Modal>
    </React.Fragment>
  )
}

UsageExample.story = {
  decorators: [isChromatic() ? fullSizeDecorator : maxWidthDecorator],
}

export const Boilerplate = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Open panel in Chromatic to keep track of visual regressions
    if (!isChromatic()) {
      return
    }
    const button = document.querySelector("button")
    if (button) {
      button.click()
    }
  }, [])

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Open panel</Button>
      <StyledPanelBoilerplate
        aria-label="Some impressive content"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header="Boilerplate Header"
        actions={
          <React.Fragment>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </React.Fragment>
        }
      >
        <StyledPanelBodySection>{LONG_TEXT}</StyledPanelBodySection>
      </StyledPanelBoilerplate>
    </React.Fragment>
  )
}

UsageExample.story = {
  decorators: [isChromatic() ? fullSizeDecorator : maxWidthDecorator],
}
