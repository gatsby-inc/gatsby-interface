/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import { storiesOf } from "@storybook/react"
import { color, select, withKnobs } from "@storybook/addon-knobs"
import { css } from "@emotion/core"
import { StoryUtils } from "../../utils/storybook"
import * as icons from "./icons"
import { IconSize, IconProps } from "./types"
import { useTheme } from "../ThemeProvider"
import { Theme } from "../../theme"

const sizes: IconSize[] = [`xxsmall`, `xsmall`, `small`, `medium`, `large`]
const customSizes = [`1em`, `16px`, `24px`, `32px`, `40px`, `64px`]
const customIconColors = [
  "#F2583E",
  '#21BEDE'
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

function StoryCase({
  info,
  children,
  className,
}: {
  info: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div css={baseCss} className={className}>
      <div css={storyCaseInfoCss}>{info}</div>
      <div css={storyCaseDisplayCss}>{children}</div>
    </div>
  )
}

function ThemeColorCase({ Component, getColor, colorPath }: { Component: React.ComponentType<IconProps>; colorPath: string; getColor: (themeColors: Theme['colors']) => string }) {
  const { colors } = useTheme()

  const color = getColor(colors)

  return (
    <StoryCase
      info={<span style={{ color }}>{colorPath}</span>}
    >
      <Component sx={{ color: colorPath }} height="3em" />
    </StoryCase>
  )
}

function CustomSizeInfo({ size }: { size: string }) {
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
  .filter(componentName => typeof (icons as any)[componentName] !== `boolean`)
  .sort()

storiesOf(`icons`, module)
  .addDecorator(withKnobs)
  .add(`All icons`, () => (
    <StoryUtils.Container>
      <div css={allIconsCss}>
        <h2>{sortedIconComponentNames.length} icon(s):</h2>
        <div css={iconBlockCss}>
          {sortedIconComponentNames.map(componentName => {
            const Component: React.ComponentType<IconProps> = (icons as any)[
              componentName
            ]

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
    const Component = (icons as any)[componentName]

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
          <h2>Theme color:</h2>
          <ThemeColorCase
            Component={Component}
            colorPath="gatsby"
            getColor={(colors) => colors.gatsby}
          />
          <ThemeColorCase
            Component={Component}
            colorPath="green.50"
            getColor={(colors) => colors.green[50]}
          />
          <h2>Custom colors:</h2>
          {customIconColors.map(colorCase => (
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
