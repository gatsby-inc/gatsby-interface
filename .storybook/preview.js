import * as React from "react"
import { Global, css } from "@emotion/core"
import { addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withConsole } from "@storybook/addon-console"
import { action } from "@storybook/addon-actions"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withTheme, docsMDXComponents, storybookThemeLight } from "./theming"

import fonts from "../src/theme/fonts"
import "@storybook/addon-console"

if (process.env.NODE_ENV === "test") {
  require(`babel-plugin-require-context-hook/register`)()
}

if (process.env.NODE_ENV !== "test") {
  try {
    require("../assets/fonts/inter/stylesheet.css")
  } catch (e) {
    console.warn(e)
  }
}

if (!process.env.STORYBOOK_CHROMATIC && process.env.NODE_ENV !== "test") {
  try {
    require("../assets/fonts/futura-pt/Webfonts/futurapt_book_macroman/stylesheet.css")
    require("../assets/fonts/futura-pt/Webfonts/futurapt_bookitalic_macroman/stylesheet.css")
    require("../assets/fonts/futura-pt/Webfonts/futurapt_demi_macroman/stylesheet.css")
    require("../assets/fonts/futura-pt/Webfonts/futurapt_demiitalic_macroman/stylesheet.css")
    require("../assets/fonts/futura-pt/Webfonts/futurapt_bold/stylesheet.css")
  } catch (e) {
    console.warn(e)
  }
}

global.___loader = {
  enqueue: () => undefined,
  hovering: () => undefined,
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// add decorators

addDecorator(withKnobs)

addDecorator(withTheme)

const withGlobal = storyFn => (
  <React.Fragment>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        html {
          font-size: 1rem;
        }
        body {
          font-family: ${fonts.system};
          height: 100%;
          margin: 0;
          width: 100%;
        }

        #root {
        }

        @media (min-width: 1000px) {
          html {
            font-size: 112.5%;
          }
        }
      `}
    />
    {storyFn()}
  </React.Fragment>
)

addDecorator(withGlobal)

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// Storybook now has first-class support for hooks, but Storyshots for some reason still fails
// so we only transform stories to React elements in test environment
if (process.env.NODE_ENV === `test`) {
  addDecorator(Story => <Story />)
}

const viewports = {
  mobile360x640: {
    name: "Mobile 360 x 640",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  ...INITIAL_VIEWPORTS,
}

export const parameters = {
  layout: `centered`,
  viewport: { viewports: viewports },
  docs: {
    components: docsMDXComponents,
    theme: storybookThemeLight,
  },
}

if (process.env.NODE_ENV === `test`) {
  addDecorator(Story => <Story />)
}

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
