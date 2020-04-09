/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { storiesOf } from "@storybook/react"
import { color, select, withKnobs } from "@storybook/addon-knobs"
import { css } from "@emotion/core"
import * as icons from "./icons"
import { IconSize, IconProps } from "./types"
import { useTheme } from "../ThemeProvider"
import { Theme, ThemeCss } from "../../theme"

const sizes: IconSize[] = [
  `inherit`,
  `xxsmall`,
  `xsmall`,
  `small`,
  `medium`,
  `large`,
]
const customSizes = [`1em`, `16px`, `24px`, `32px`, `40px`, `64px`]
const customIconColors = ["#cc2408", "#046b80"]

const baseCss = css`
  display: flex;
  align-items: center;
  border: 1px dotted #bbb;
  margin-bottom: 1rem;
`

const storyCaseInfoCss: ThemeCss = theme => css`
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  font-family: monospace;
  flex-grow: 1;
  font-size: ${theme.fontSizes[3]};
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
  info: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <div css={baseCss} className={className}>
      <div css={storyCaseInfoCss}>{info}</div>
      <div css={storyCaseDisplayCss}>{children}</div>
    </div>
  )
}

function ThemeColorCase({
  Component,
  getColor,
  colorLabel,
}: {
  Component: React.ComponentType<IconProps>
  colorLabel: string
  getColor: (themeColors: Theme["colors"]) => string
}) {
  const { colors } = useTheme()

  const color = getColor(colors)

  return (
    <StoryCase info={<span style={{ color }}>{colorLabel}</span>}>
      <Component
        css={theme => ({ color: getColor(theme.colors) })}
        height="3em"
      />
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

const rootCss = css`
  max-width: 480px;
  margin: 1rem auto 2rem;
  flex-grow: 1;
`

const iconBlockCss = css`
  margin: 1rem 0;
`

const sortedIconComponentNames = Object.keys(icons)
  // filter out __esModule
  .filter(componentName => typeof (icons as any)[componentName] !== `boolean`)
  .sort()

storiesOf(`Icons`, module)
  .addDecorator(withKnobs)
  .addParameters({
    layout: `padded`,
    options: {
      showRoots: true,
    },
  })
  .add(`All icons`, () => (
    <div css={rootCss}>
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
  ))

sortedIconComponentNames.forEach(componentName => {
  storiesOf(`Icons/Single icons`, module)
    .addParameters({
      layout: `padded`,
      options: {
        showRoots: true,
      },
    })
    .add(componentName, () => {
      const Component = (icons as any)[componentName]

      return (
        <div key={componentName} css={rootCss}>
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
            colorLabel="gatsby"
            getColor={colors => colors.gatsby}
          />
          <ThemeColorCase
            Component={Component}
            colorLabel="green.90"
            getColor={colors => colors.green[90]}
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
      )
    })
})
