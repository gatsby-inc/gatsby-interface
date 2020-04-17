const { defaults } = require(`jest-config`)

module.exports = {
  roots: [`<rootDir>/__tests__`, `<rootDir>/src`],
  testMatch: [...defaults.testMatch, `**/__tests__/*.test.(ts|js)?(x)`],
  moduleFileExtensions: [`ts`, `tsx`, `js`, `json`],
  transform: {
    "^.+\\.(j|t)sx?$": `<rootDir>/jest-preprocess.js`,
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  moduleNameMapper: {
    ".+(prismCodeThemes|reach\\/(dialog|tooltip)).+\\.(css|styl|less|sass|scss)$": `<rootDir>/__mocks__/styleMock.js`,
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$": `<rootDir>/__mocks__/fileMock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    // We're ignoring a11y storyshots since those require storybook to be built/opened
    // use "yarn test:a11y" to run these
    `AccessiblityStoryshots.test.js`,
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby|storybook-addon-designs)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/jest-setup.js`],
  setupFilesAfterEnv: [`<rootDir>/setup-test-env.js`],
}
