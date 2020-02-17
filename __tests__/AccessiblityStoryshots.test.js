import initStoryshots from "@storybook/addon-storyshots"
import { axeTest } from "@storybook/addon-storyshots-puppeteer"
import { render } from "@testing-library/react"
import { getDefaultStoryshotsConfig } from "../.storybook/storyshotsConfig"

initStoryshots({
  configPath: `.storybook`,
  suite: "A11Y checks",
  test: axeTest(getDefaultStoryshotsConfig()),
  renderer: (storyElement, rendererOptions) => {
    const { container } = render(storyElement, rendererOptions)
    return container
  },
})
