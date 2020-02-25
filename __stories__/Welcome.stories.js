import { storiesOf } from "@storybook/react"
import Readme from "./README.md"

storiesOf(`- Introduction`, module)
  .addParameters({
    options: {
      showPanel: false,
    },
    readme: {
      content: Readme,
    },
  })
  .add(`Welcome to Gatsby Inteface`, () => null)
