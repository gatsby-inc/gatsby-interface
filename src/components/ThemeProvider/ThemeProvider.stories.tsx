/** @jsx jsx */
import { jsx, Interpolation } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { css } from "@emotion/core"
import { Theme } from "../../theme"
import { useTheme, ThemeProvider } from "."

const textCss: Interpolation = {
  textTransform: `uppercase`,
}

storiesOf(`ThemeProvider`, module)
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
                backgroundColor: theme.colors.green[40],
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
