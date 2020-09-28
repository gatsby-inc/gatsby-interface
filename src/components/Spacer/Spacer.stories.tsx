/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { radios, select } from "@storybook/addon-knobs"
import {
  radioKnobOptions,
  withVariationsContainer,
} from "../../utils/storybook"
import { Spacer, SpacerDirection, SpacerSize } from "."
import { getTheme, ThemeCss } from "../../theme"

export default {
  title: `Spacer`,
  component: Spacer,
  parameters: {
    layout: `padded`,
  },
}

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

export const Basic = () => (
  <Showcase>
    <Spacer size={15} css={coloredSpacerCss} />
  </Showcase>
)

const DIRECTIONS: SpacerDirection[] = [`horizontal`, `vertical`]

const { space } = getTheme()

const spacerSize = (label: string, defaultValue = "5") =>
  parseInt(select(label, Object.keys(space), defaultValue)) as SpacerSize

const spacerDirection = (
  label: string,
  defaultValue: SpacerDirection = "vertical"
): SpacerDirection =>
  radios(label, radioKnobOptions<SpacerDirection>(DIRECTIONS), defaultValue)

export const Sandbox = () => (
  <Showcase>
    <Spacer
      size={spacerSize("size")}
      direction={spacerDirection(`direction`)}
      responsiveSize={{
        mobile: spacerSize("responsiveSize.mobile"),
        phablet: spacerSize("responsiveSize.phablet"),
        tablet: spacerSize("responsiveSize.tablet"),
        desktop: spacerSize("responsiveSize.desktop"),
        hd: spacerSize("responsiveSize.hd"),
      }}
      responsiveDirection={{
        mobile: spacerDirection("responsiveDirection.mobile"),
        phablet: spacerDirection("responsiveDirection.phablet"),
        tablet: spacerDirection("responsiveDirection.tablet"),
        desktop: spacerDirection("responsiveDirection.desktop"),
        hd: spacerDirection("responsiveDirection.hd"),
      }}
      css={coloredSpacerCss}
    />
  </Showcase>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

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

export const ResponsiveSize = () => (
  <React.Fragment>
    <h3>
      Resize Storybook window (or change viewports in the toolbar) to see spacer
      changing its size
    </h3>
    <Showcase>
      <Spacer
        size={4}
        responsiveSize={{
          mobile: 15,
          phablet: 13,
          tablet: 11,
          desktop: 9,
          hd: 7,
        }}
        css={coloredSpacerCss}
      />
    </Showcase>
  </React.Fragment>
)

export const ResponsiveDirection = () => (
  <React.Fragment>
    <h3>
      Resize Storybook window (or change viewports in the toolbar) to see spacer
      changing its direction
    </h3>
    <Showcase>
      <Spacer
        size={13}
        responsiveDirection={{
          mobile: `horizontal`,
          phablet: `vertical`,
          tablet: `horizontal`,
          desktop: `vertical`,
          hd: `horizontal`,
        }}
        css={coloredSpacerCss}
      />
    </Showcase>
  </React.Fragment>
)

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
