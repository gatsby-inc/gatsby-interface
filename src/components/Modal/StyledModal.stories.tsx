/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Global } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"
import {
  radioKnobOptions,
  withVariationsContainer,
  disableAnimationsDecorator,
} from "../../utils/storybook"
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalActions,
  StyledModalVariant,
  StyledModalHeaderLayout,
} from "./"
import { Theme } from "../../theme"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Text } from "../Text"

export default {
  title: `Modal/StyledModal`,
  component: StyledModal,
  subcomponents: { StyledModalHeader, StyledModalBody, StyledModalActions },
  parameters: {
    componentSubtitle:
      "Modals inform users about a task and can contain critical information, require decisions, or involve multiple tasks. They are purposefully interruptive, so they should be used sparingly.",
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
    story => <div style={{ maxWidth: `620px` }}>{story()}</div>,
  ] as DecoratorFn[],
}

const LONG_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia recusandae nisi magni, dolore laboriosam maiores suscipit perspiciatis. Perspiciatis quod ipsum corporis officia necessitatibus, doloribus fuga culpa. Unde, molestiae repellendus.`

export const Basic = () => (
  <StyledModal>
    <StyledModalHeader>Header</StyledModalHeader>
    <StyledModalBody>
      {LONG_TEXT}
      <StyledModalActions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </StyledModalActions>
    </StyledModalBody>
  </StyledModal>
)

const VARIANTS: StyledModalVariant[] = [
  `DEFAULT`,
  `SUCCESS`,
  `WARNING`,
  `ERROR`,
  `ACTION`,
  `RETAKE`,
]

export const Sandbox = () => (
  <StyledModal
    variant={radios(
      `variant`,
      radioKnobOptions<StyledModalVariant>(VARIANTS),
      `DEFAULT`
    )}
  >
    <StyledModalHeader
      closeButtonLabel={text("close button label", "Close modal")}
    >
      {text("header text", "Hello World")}
    </StyledModalHeader>
    <StyledModalBody>
      {text("body text", LONG_TEXT)}
      <StyledModalActions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </StyledModalActions>
    </StyledModalBody>
  </StyledModal>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Variants = () =>
  VARIANTS.map(variant => (
    <div key={variant}>
      <StyledModal key={variant} variant={variant}>
        <StyledModalHeader>Variant: {variant}</StyledModalHeader>
        <StyledModalBody>
          {LONG_TEXT}
          <StyledModalActions>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </StyledModalActions>
        </StyledModalBody>
      </StyledModal>
    </div>
  ))

export const ComposableHeader = () => (
  <StyledModal
    variant={radios(
      `variant`,
      radioKnobOptions<StyledModalVariant>(VARIANTS),
      `DEFAULT`
    )}
  >
    <StyledModalHeaderLayout
      closeButtonLabel={text("close button label", "Close modal")}
    >
      <Text css={{ margin: 0, padding: 0 }}>
        {text("subheader text", "New announcement")}
      </Text>
      <Heading>{text("header text", "Hello World")}</Heading>
    </StyledModalHeaderLayout>
    <StyledModalBody>
      {text("body text", LONG_TEXT)}
      <StyledModalActions>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </StyledModalActions>
    </StyledModalBody>
  </StyledModal>
)

Variants.story = {
  parameters: { layout: `padded` },
  decorators: [withVariationsContainer],
}
