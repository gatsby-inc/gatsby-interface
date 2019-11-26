import initStoryshots from "@storybook/addon-storyshots"
import { render } from "@testing-library/react"

initStoryshots({
  configPath: `.storybook`,
  renderer: (storyElement, rendererOptions) => {
    const { container } = render(storyElement, rendererOptions)
    return container
  },
})
