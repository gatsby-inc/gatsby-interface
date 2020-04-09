/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Global } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text } from "@storybook/addon-knobs"
import isChromatic from "storybook-chromatic/isChromatic"
import {
  StyledPanel,
  StyledPanelHeader,
  StyledPanelBodySection,
  StyledPanelActions,
} from "./"
import { Theme } from "../../theme"
import { Button } from "../Button"

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
}
