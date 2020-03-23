import React from "react"
import { DecoratorFn } from "@storybook/react"
import { create, themes } from "@storybook/theming"
import { ThemeProvider, getTheme, Heading, Text } from "../src"
import { Global } from "@emotion/core"

const theme = getTheme()

export const storybookThemeLight = create({
  ...themes.light,
  fontBase: theme.fonts.body,
  fontCode: theme.fonts.monospace,
  colorSecondary: theme.colors.gatsby,
  brandTitle: `Gatsby Interface`,
  barTextColor: theme.colors.grey[70],
  barSelectedColor: theme.colors.purple[50],
})

export const withTheme: DecoratorFn = story => {
  return <ThemeProvider>{story()}</ThemeProvider>
}

/**
 * This is a temporary workaround to make Docs-only MDX stories look more in line with our theming
 *
 * Use it in any *.stories.mdx file that DOES NOT declare a story
 *
 * Related issue: https://github.com/storybookjs/storybook/issues/9968
 */

export const MdxDocsTheme = () => (
  <ThemeProvider>
    <Global
      styles={theme => ({
        body: {
          fontFamily: theme.fonts.body,
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: theme.fonts.heading,
        },
        code: {
          fontFamily: theme.fonts.monospace,
        },
      })}
    />
  </ThemeProvider>
)

export const docsMDXComponents = {
  p: Text,
  h1: createHeadingComponent(`h1`),
  h2: createHeadingComponent(`h2`),
  h3: createHeadingComponent(`h3`),
  h4: createHeadingComponent(`h4`),
  h5: createHeadingComponent(`h5`),
  h6: createHeadingComponent(`h6`),
}

function createHeadingComponent(level) {
  const HeadingComponent = function(props) {
    return <Heading as={level} {...props} />
  }
  HeadingComponent.displayName = `Heading${level.toUpperCase()}`

  return HeadingComponent
}
