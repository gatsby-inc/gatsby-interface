/** @jsx jsx */
import { jsx, Interpolation } from "@emotion/core"
import { css } from "@emotion/core"
import { Theme, getTheme } from "../../theme"
import { useTheme, ThemeProvider } from "."

const textCss: Interpolation = {
  textTransform: `uppercase`,
}

export default {
  title: `Theme/ThemeProvider`,
  component: ThemeProvider,
}

export const CssProp = () => {
  function TestComponent() {
    return (
      <div
        css={(theme: Theme) =>
          css(textCss, {
            backgroundColor: theme.colors.gatsby,
            color: theme.colors.white,
            padding: theme.space[5],
          })
        }
      >
        Lorem ipsum
      </div>
    )
  }

  return (
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  )
}

CssProp.story = {
  name: `Accessing theme in a css prop`,
}

export const UseTheme = () => {
  function TestComponent() {
    const theme = useTheme()

    return (
      <div
        style={{
          backgroundColor: theme.colors.green[80],
          color: theme.colors.white,
          padding: theme.space[5],
        }}
      >
        Lorem ipsum
      </div>
    )
  }

  return (
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  )
}

UseTheme.story = {
  name: `useTheme`,
}

export const CustomThemeObject = () => {
  function TestComponent() {
    return (
      <div
        css={(theme: Theme) =>
          css(textCss, {
            backgroundColor: theme.colors.gatsby,
            color: theme.colors.white,
            padding: theme.space[5],
          })
        }
      >
        Lorem ipsum
      </div>
    )
  }

  const defaultTheme = getTheme()
  const otherTheme = {
    ...defaultTheme,
    colors: { ...defaultTheme.colors, gatsby: "#b22222" },
  }

  return (
    <ThemeProvider theme={otherTheme}>
      <TestComponent />
    </ThemeProvider>
  )
}

CustomThemeObject.story = {
  name: `Custom theme object`,
}

export const CustomThemeFunction = () => {
  function TestComponent() {
    return (
      <div
        css={(theme: Theme) =>
          css(textCss, {
            backgroundColor: theme.colors.gatsby,
            color: theme.colors.white,
            padding: theme.space[5],
          })
        }
      >
        Lorem ipsum
      </div>
    )
  }

  const getNewTheme = (defaultTheme: Theme) => ({
    ...defaultTheme,
    colors: { ...defaultTheme.colors, gatsby: "#483d8b" },
  })

  return (
    <ThemeProvider theme={getNewTheme}>
      <TestComponent />
    </ThemeProvider>
  )
}

CustomThemeFunction.story = {
  name: `Custom theme function`,
}
