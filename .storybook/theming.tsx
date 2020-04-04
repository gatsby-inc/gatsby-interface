/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { create, themes } from "@storybook/theming"
import { ThemeProvider, getTheme, Heading, Text } from "../src"
import { CodeOrSourceMdx } from "@storybook/addon-docs/blocks"

const theme = getTheme()

export const storybookThemeLight = create({
  ...themes.light,
  appBg: theme.colors.grey[5],
  appBorderColor: theme.colors.blackFade[10],
  fontBase: theme.fonts.body,
  textColor: theme.colors.grey[90],
  fontCode: theme.fonts.monospace,
  colorSecondary: theme.colors.purple[50],
  brandTitle: `Gatsby Interface`,
  barTextColor: theme.colors.grey[70],
  barSelectedColor: theme.colors.purple[50],
  inputBorder: theme.colors.blackFade[10],
})

export const withTheme: DecoratorFn = story => {
  return <ThemeProvider>{story()}</ThemeProvider>
}

export const docsMDXComponents = {
  p: MDXText,
  code: DocsCodeOrSourceMdx,
  h1: createHeadingComponent(`h1`),
  h2: createHeadingComponent(`h2`),
  h3: createHeadingComponent(`h3`),
  h4: createHeadingComponent(`h4`),
  h5: createHeadingComponent(`h5`),
  h6: createHeadingComponent(`h6`),
}

function DocsCodeOrSourceMdx(props) {
  return (
    <div css={{ code: { fontFamily: storybookThemeLight.fontCode } }}>
      <CodeOrSourceMdx {...props} />
    </div>
  )
}

function MDXText(props) {
  return (
    <ThemeProvider>
      <Text {...props} />
    </ThemeProvider>
  )
}

function createHeadingComponent(level) {
  const HeadingComponent = function(props) {
    return (
      <ThemeProvider>
        <Heading as={level} {...props} />
      </ThemeProvider>
    )
  }
  HeadingComponent.displayName = `Heading${level.toUpperCase()}`

  return HeadingComponent
}
