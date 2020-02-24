import initStoryshots from "@storybook/addon-storyshots"
import { axeTest } from "@storybook/addon-storyshots-puppeteer"
import { render } from "@testing-library/react"
import * as path from "path"

initStoryshots({
  configPath: `.storybook`,
  suite: "A11Y checks",
  test: axeTest(getDefaultPuppeteerConfig()),
  renderer: (storyElement, rendererOptions) => {
    const { container } = render(storyElement, rendererOptions)
    return container
  },
})

function getDefaultPuppeteerConfig() {
  const config = {}

  if (process.env.CI) {
    const staticBuildPath = path.join(process.cwd(), "/storybook-static")
    config.storybookUrl = `file:///${staticBuildPath}`
  }
  return config
}
