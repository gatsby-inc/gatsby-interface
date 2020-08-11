export function isA11yTest() {
  return process.env.STORYBOOK_A11Y_CHECK === "1"
}
