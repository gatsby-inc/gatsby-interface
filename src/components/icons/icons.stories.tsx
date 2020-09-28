/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"

import { storiesOf } from "@storybook/react"
import { color, select, withKnobs } from "@storybook/addon-knobs"
import * as icons from "./icons"
import { IconSize, IconProps } from "./types"
import { useTheme } from "../ThemeProvider"
import { Theme, ThemeCss } from "../../theme"
import { disableAnimationsDecorator } from "../../utils/storybook"

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

const baseCss: ThemeCss = theme => ({
  display: "flex",
  alignItems: "center",
  border: "1px dotted #bbb",
  marginBottom: theme.space[5],
})

const storyCaseInfoCss: ThemeCss = theme => ({
  lineHeight: theme.lineHeights.body,
  padding: `${theme.space[3]} ${theme.space[4]}`,
  fontFamily: "monospace",
  flexGrow: 1,
  fontSize: theme.fontSizes[3],
})

const storyCaseDisplayCss: ThemeCss = _theme => ({
  borderLeft: "1px dotted #bbb",
  flex: "0 0 72px",
  height: "72px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
})

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
        id={`customColor-${colorLabel}`}
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

const rootCss: ThemeCss = theme => ({
  maxWidth: "480px",
  margin: `${theme.space[5]} auto ${theme.space[8]}`,
  flexGrow: 1,
})

const iconBlockCss: ThemeCss = theme => ({
  margin: `${theme.space[1]} 0`,
})

const sortedIconComponentNames = Object.keys(icons)
  // filter out __esModule
  .filter(componentName => typeof (icons as any)[componentName] !== `boolean`)
  .sort()

storiesOf(`Icons`, module)
  .addDecorator(withKnobs)
  .addDecorator(disableAnimationsDecorator)
  .addParameters({
    componentSubtitle:
      "Icons provide visual context, communicate meaning, and enhance usability.",
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
    .addDecorator(disableAnimationsDecorator)
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
              <Component size={size} id={`size-${size}`} />
            </StoryCase>
          ))}
          <h2>Custom size:</h2>
          {customSizes.map(size => (
            <StoryCase info={<CustomSizeInfo size={size} />} key={size}>
              <Component height={size} width={size} id={`customSize-${size}`} />
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
              <Component
                color={colorCase}
                height="3em"
                id={`customColor-${colorCase}`}
              />
            </StoryCase>
          ))}
          <h2>Inline</h2>
          <p>
            Lorem ipsum <Component height="1em" id="inline" /> foo bar
          </p>
        </div>
      )
    })
})
