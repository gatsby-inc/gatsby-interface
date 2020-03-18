module.exports = {
  stories: [
    "../src/**/*.stories.(js|jsx|tsx|mdx)",
    "../__stories__/**/*.stories.(js|jsx|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "storybook-readme/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async config => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
    })

    config.resolve.extensions.push(".mjs", ".ts", ".tsx")

    return config
  },
}
