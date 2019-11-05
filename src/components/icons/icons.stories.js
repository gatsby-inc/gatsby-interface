/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { color, select, withKnobs } from "@storybook/addon-knobs"
import { css } from "@emotion/core"
import { StoryUtils } from "../../utils/storybook"
import * as icons from "./icons"
import { colors as presetColors, palette } from "../../theme"

const sizes = [`xsmall`, `small`, `medium`, `large`]
const customSizes = [`1em`, `16px`, `24px`, `32px`, `40px`, `64px`]
const colors = [
  presetColors.gatsby,
  presetColors.accent,
  palette.magenta[`300`],
  palette.red[`900`],
]

const baseCss = css`
  display: flex;
  align-items: center;
  border: 1px dotted #bbb;
  margin-bottom: 1rem;
`

const storyCaseInfoCss = css`
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  font-family: monospace;
  flex-grow: 1;
`

const storyCaseDisplayCss = css`
  border-left: 1px dotted #bbb;
  flex: 0 0 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

function StoryCase({ info, children, className }) {
  return (
    <div css={baseCss} className={className}>
      <div css={storyCaseInfoCss}>{info}</div>
      <div css={storyCaseDisplayCss}>{children}</div>
    </div>
  )
}

function CustomSizeInfo({ size }) {
  return (
    <React.Fragment>
      {`height=${size}`}
      <br />
      {`width=${size}`}
    </React.Fragment>
  )
}

const allIconsCss = css`
  max-width: 640px;
  margin: 0 auto;
  flex-grow: 1;
`

const iconBlockCss = css`
  margin: 1rem 0;
`

const sortedIconComponentNames = Object.keys(icons)
  // filter out __esModule
  .filter(componentName => typeof icons[componentName] !== `boolean`)
  .sort()

storiesOf(`icons`, module)
  .addDecorator(withKnobs)
  .add(`All icons`, () => (
    <StoryUtils.Container>
      <div css={allIconsCss}>
        <h2>{sortedIconComponentNames.length} icon(s):</h2>
        <div css={iconBlockCss}>
          {sortedIconComponentNames.map(componentName => {
            const Component = icons[componentName]

            return (
              <StoryCase info={componentName} key={componentName}>
                <Component
                  size={select(`size`, sizes, `small`)}
                  color={color(`color`, `#000`)}
                />
              </StoryCase>
            )
          })}
        </div>
      </div>
    </StoryUtils.Container>
  ))

sortedIconComponentNames.forEach(componentName => {
  storiesOf(`icons/Single icons`, module).add(componentName, () => {
    const Component = icons[componentName]

    return (
      <StoryUtils.Container>
        <div key={componentName} css={iconBlockCss}>
          <h1>{`<${componentName} />`}</h1>
          <h2>Size:</h2>
          {sizes.map(size => (
            <StoryCase info={size} key={size}>
              <Component size={size} />
            </StoryCase>
          ))}
          <h2>Custom size:</h2>
          {customSizes.map(size => (
            <StoryCase info={<CustomSizeInfo size={size} />} key={size}>
              <Component height={size} width={size} />
            </StoryCase>
          ))}
          <h2>Color:</h2>
          {colors.map(colorCase => (
            <StoryCase
              info={<span style={{ color: colorCase }}>{colorCase}</span>}
              key={colorCase}
            >
              <Component color={colorCase} height="3em" />
            </StoryCase>
          ))}
          <h2>Inline</h2>
          <p>
            Lorem ipsum <Component height="1em" /> foo bar
          </p>
        </div>
      </StoryUtils.Container>
    )
  })
})
