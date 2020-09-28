/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { withVariationsContainer } from "../../utils/storybook"
import { Spacer, SpacerProps, SpacerDirection } from "."
import { getTheme, ThemeCss } from "../../theme"
import { Text } from "../Text"

const possibleSpaceValues = Object.keys(getTheme().space)
  .map(Number)
  .sort((a, b) => a - b)

export default {
  title: `Spacer`,
  component: Spacer,
  parameters: {
    layout: `padded`,
  },
  argTypes: {
    size: {
      table: {
        type: {
          summary: `number`,
        },
      },
      control: {
        type: `range`,
        min: possibleSpaceValues[0],
        max: possibleSpaceValues[possibleSpaceValues.length - 1],
        step: 1,
      },
    },
  },
} as Meta

const coloredSpacerCss: ThemeCss = theme => ({
  backgroundColor: theme.colors.purple[30],
  minHeight: `1px`,
  minWidth: `1px`,
})

const Showcase: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      Content before spacer
      {children}
      Content after spacer
    </React.Fragment>
  )
}

const Template: Story<SpacerProps & { description?: React.ReactNode }> = ({
  description,
  ...args
}) => (
  <React.Fragment>
    {description && <Text>{description}</Text>}
    Content before spacer
    <Spacer css={coloredSpacerCss} {...args} />
    Content after spacer
  </React.Fragment>
)

export const Basic = Template.bind({})

Basic.args = {
  size: 15,
}

const DIRECTIONS: SpacerDirection[] = [`horizontal`, `vertical`]

export const Directions = () =>
  DIRECTIONS.map(direction => (
    <div key={direction}>
      <h3>Direction: {direction}</h3>
      <Showcase>
        <Spacer size={8} direction={direction} css={coloredSpacerCss} />
      </Showcase>
    </div>
  ))

Directions.story = {
  decorators: [withVariationsContainer],
}

export const ResponsiveSize = Template.bind({})

ResponsiveSize.args = {
  description:
    "Resize Storybook window (or change viewports in the toolbar) to see spacer changing its size",
  size: 4,
  responsiveSize: {
    mobile: 15,
    phablet: 13,
    tablet: 11,
    desktop: 9,
    hd: 7,
  },
}

export const ResponsiveDirection = Template.bind({})

ResponsiveDirection.args = {
  description:
    "Resize Storybook window (or change viewports in the toolbar) to see spacer changing its direction",
  size: 13,
  responsiveDirection: {
    mobile: `horizontal`,
    phablet: `vertical`,
    tablet: `horizontal`,
    desktop: `vertical`,
    hd: `horizontal`,
  },
}

export const InFlexbox = () => {
  const flexItemCss: ThemeCss = theme => ({
    minHeight: `48px`,
    minWidth: `48px`,
    backgroundColor: theme.colors.orange[30],
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-around`,
    textAlign: `center`,
    padding: theme.space[4],
  })

  return (
    <React.Fragment>
      <h3>Row:</h3>
      <div css={{ display: `flex` }}>
        <div css={flexItemCss}>Item 1</div>
        <Spacer size={12} direction="horizontal" css={coloredSpacerCss} />
        <div css={flexItemCss}>Item 2</div>
      </div>
      <h3>Column:</h3>
      <div css={{ display: `flex`, flexDirection: `column` }}>
        <div css={flexItemCss}>Item 1</div>
        <Spacer size={12} direction="vertical" css={coloredSpacerCss} />
        <div css={flexItemCss}>Item 2</div>
      </div>
    </React.Fragment>
  )
}
