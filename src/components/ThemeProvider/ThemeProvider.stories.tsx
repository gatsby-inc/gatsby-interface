/** @jsx jsx */
import { jsx, Interpolation } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { css } from "@emotion/core"
import { Theme, getTheme } from "../../theme"
import { useTheme, ThemeProvider } from "."

const textCss: Interpolation = {
  textTransform: `uppercase`,
}

storiesOf(`Theme/ThemeProvider`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`accessing theme in a css prop`, () => {
    function TestComponent() {
      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>
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
          </StoryUtils.Stack>
        </StoryUtils.Container>
      )
    }

    return (
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
  })
  .add(`useTheme`, () => {
    function TestComponent() {
      const theme = useTheme()
      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>
            <div
              style={{
                backgroundColor: theme.colors.green[80],
                color: theme.colors.white,
                padding: theme.space[5],
              }}
            >
              Lorem ipsum
            </div>
          </StoryUtils.Stack>
        </StoryUtils.Container>
      )
    }

    return (
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
  })
  .add("ThemeProvider custom theme prop of type Theme", () => {
    function TestComponent() {
      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>
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
          </StoryUtils.Stack>
        </StoryUtils.Container>
      )
    }

    const defaultTheme = getTheme()
    const otherTheme = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, gatsby: "red" },
    }

    return (
      <ThemeProvider theme={otherTheme}>
        <TestComponent />
      </ThemeProvider>
    )
  })
  .add("ThemeProvider custom theme prop of type function", () => {
    function TestComponent() {
      return (
        <StoryUtils.Container>
          <StoryUtils.Stack>
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
          </StoryUtils.Stack>
        </StoryUtils.Container>
      )
    }

    const getNewTheme = (defaultTheme: Theme) => ({
      ...defaultTheme,
      colors: { ...defaultTheme.colors, gatsby: "yellow" },
    })

    return (
      <ThemeProvider theme={getNewTheme}>
        <TestComponent />
      </ThemeProvider>
    )
  })
