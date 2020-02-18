import initStoryshots from "@storybook/addon-storyshots"
import { axeTest } from "@storybook/addon-storyshots-puppeteer"
import { render } from "@testing-library/react"
import { getDefaultPuppeteerConfig } from "../.storybook/storyshotsConfig"

initStoryshots({
  configPath: `.storybook`,
  suite: "A11Y checks",
  test: axeTest(getDefaultPuppeteerConfig()),
  renderer: (storyElement, rendererOptions) => {
    const { container } = render(storyElement, rendererOptions)
    return container
  },
})
