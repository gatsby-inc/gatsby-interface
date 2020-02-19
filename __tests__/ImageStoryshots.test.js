import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
import { getDefaultPuppeteerConfig } from "../.storybook/storyshotsConfig"

const baseMatchOptions = {
  // dumpDiffToConsole: true,
  failureThreshold: 0.2,
  failureThresholdType: "percent",
}

/**
 * Use this function to customize jest-image-snapshot options for a story
 * E.g. you can set a failure threshold for a specific story
 */
const getMatchOptions = ({ context: { kind, story } }) => {
  if (kind.startsWith(`buttons`) && story === `in 'loading' state`) {
    // Loading states stories feature animated content, so we have to adjust for that
    return {
      ...baseMatchOptions,
      failureThreshold: 0.2,
      failureThresholdType: "percent",
    }
  }
  return baseMatchOptions
}

/**
 * If some story is animated on mount, we have to wait for the animation to finish
 */
const storiesWithWaitTime = {
  Modal: ["Card", "Panel", "Fullscreen"],
  Notification: ["animated with react-spring"],
  "form/RadioButtonField": ["Hint and Error placement"],
  "form/FormField": [`Error & Hint`, "Shared components"],
}

function getScreenshotWaitTime({ kind, story }) {
  if (storiesWithWaitTime[kind] && storiesWithWaitTime[kind].includes(story)) {
    return 4500
  }

  return 0
}

const beforeScreenshot = (_page, { context }) => {
  const waitTime = getScreenshotWaitTime(context)

  if (waitTime) {
    // Postpone screenshot if needed
    return new Promise(resolve =>
      setTimeout(() => {
        resolve()
      }, waitTime)
    )
  }
}

initStoryshots({
  configPath: `.storybook`,
  suite: "Image storyshots",
  test: imageSnapshot({
    ...getDefaultPuppeteerConfig(),
    beforeScreenshot,
    getMatchOptions,
  }),
  // This beast of a regex allows to ignore DecorativeDots story kind
  // based on official Storyshots docs (https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core#storykindregex)
  storyKindRegex: /^((?!.*?DecorativeDots).)*$/,
})
