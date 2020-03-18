import React from "react"
import { DecoratorFn } from "@storybook/react"
import { ThemeProvider } from "../src/components/ThemeProvider"

const withTheme: DecoratorFn = story => {
  return <ThemeProvider>{story()}</ThemeProvider>
}

export default withTheme
