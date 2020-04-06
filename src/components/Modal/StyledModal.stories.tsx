/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Global } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"
import isChromatic from "storybook-chromatic/isChromatic"
import { StoryUtils, radioKnobOptions } from "../../utils/storybook"
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalVariant,
} from "./"
import { Theme } from "../../theme"

export default {
  title: `Modal/StyledModal`,
  component: StyledModal,
  subcomponents: [StyledModalHeader, StyledModalBody],
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
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

const LONG_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia recusandae nisi magni, dolore laboriosam maiores suscipit perspiciatis. Perspiciatis quod ipsum corporis officia necessitatibus, doloribus fuga culpa. Unde, molestiae repellendus.`

export const Basic = () => (
  <StyledModal>
    <StyledModalHeader>Header</StyledModalHeader>
    <StyledModalBody>{LONG_TEXT}</StyledModalBody>
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
    <StyledModalBody>{text("body text", LONG_TEXT)}</StyledModalBody>
  </StyledModal>
)

export const Variants = () =>
  VARIANTS.map(variant => (
    <div css={(theme: Theme) => ({ marginBottom: theme.space[6] })}>
      <StyledModal key={variant} variant={variant}>
        <StyledModalHeader>Variant: {variant}</StyledModalHeader>
        <StyledModalBody>{LONG_TEXT}</StyledModalBody>
      </StyledModal>
    </div>
  ))
