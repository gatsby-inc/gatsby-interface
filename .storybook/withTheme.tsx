import React from "react"
import { StoryDecorator } from "@storybook/react"
import { ThemeProvider } from "../src/components/ThemeProvider"
import { Theme } from "../src/theme"

// Override theme fonts with reasonable defaults for consistent cross-platform image snapshots
const customTheme: Partial<Theme> = process.env.STORYBOOK_CI
  ? {
      fonts: {
        header: `Arial, Helvetica, sans-serif`,
        monospace: `"Courier New", Courier, monospace`,
        serif: `Georgia,Times New Roman,Times,serif`,
        system: `Arial, Helvetica, sans-serif`,
      },
    }
  : {}

const withTheme: StoryDecorator = story => {
  return <ThemeProvider theme={customTheme}>{story()}</ThemeProvider>
}

export default withTheme
