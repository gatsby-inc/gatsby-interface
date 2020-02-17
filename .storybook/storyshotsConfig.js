import * as path from "path"

const staticBuildPath = path.join(process.cwd(), '/storybook-static');

export function getDefaultPuppeteerConfig() {
    let config = {
    }
    if (process.env.CI) {
        config.storybookUrl = `file:///${staticBuildPath}`
    }
    return config
}
