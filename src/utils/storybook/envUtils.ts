export function isA11yTest() {
  return Boolean(process.env.STORYBOOK_A11Y_CHECK)
}
