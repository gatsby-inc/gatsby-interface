/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Global } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"
import isChromatic from "storybook-chromatic/isChromatic"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalActions,
  StyledModalVariant,
} from "./"
import { Theme } from "../../theme"
import { Button } from "../Button"

export default {
  title: `Modal/StyledModal`,
  component: StyledModal,
  subcomponents: { StyledModalHeader, StyledModalBody, StyledModalActions },
  parameters: {
    options: {
      showRoots: true,
    },
  },
  decorators: [
    story => (
      <React.Fragment>
        <Global
          styles={(theme: Theme) => [
            {
              body: { background: theme.colors.grey[20] },
            },
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

Variants.story = {
  parameters: { layout: `padded` },
  decorators: [withVariationsContainer],
}
