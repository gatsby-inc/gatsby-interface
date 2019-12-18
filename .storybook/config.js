import React, { Fragment } from "react"
import { Global, css } from "@emotion/core"
import {
  configure,
  addDecorator,
  addParameters,
  setAddon,
} from "@storybook/react"
import { addReadme } from "storybook-readme"
import { withKnobs } from "@storybook/addon-knobs"
import { withConsole } from "@storybook/addon-console"
import { withA11y } from "@storybook/addon-a11y"
import { action } from "@storybook/addon-actions"

import fonts from "../src/theme/fonts"
import "@storybook/addon-console"
import "storybook-chromatic"

if (process.env.NODE_ENV === "test") {
  require(`babel-plugin-require-context-hook/register`)()
} else {
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
  enqueue: () => {},
  hovering: () => {},
}

const viewports = {
  mobile360x640: {
    name: "Mobile 360 x 640",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// add decorators

addDecorator(addReadme)

addDecorator(withKnobs)

const withGlobal = storyFn => (
  <Fragment>
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
          height: 100vh;
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
  </Fragment>
)

addDecorator(withGlobal)

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addDecorator(withA11y)

addDecorator(Story => <Story />)

addParameters({
  options: {
    addonPanelInRight: true,
  },
  readme: {},
  viewport: { viewports: viewports },
})

//const req = require.context("../__stories__", true, /\.stories\.js$/)
const req = require.context(
  "../src/components/../",
  true,
  /\.stories\.(js|tsx)$/
)

require("../__stories__/Welcome.stories")

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

configure(loadStories, module)
