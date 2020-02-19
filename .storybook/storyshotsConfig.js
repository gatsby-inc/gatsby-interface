import * as path from "path"

const staticBuildPath = path.join(process.cwd(), "/storybook-static")

export function getDefaultPuppeteerConfig() {
  const config = {}
  if (process.env.CI || process.env.STORYBOOK_CI) {
    config.storybookUrl = `file:///${staticBuildPath}`
  }
  return config
}
