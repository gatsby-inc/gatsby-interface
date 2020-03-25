module.exports = {
  stories: [
    "../src/**/*.stories.(js|jsx|tsx|mdx)",
    "../__stories__/**/*.stories.(js|jsx|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
    "storybook-addon-designs/register",
  ],
  managerWebpack: async baseConfig => {
    baseConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    baseConfig.resolve.extensions.push(".ts", ".tsx")
    baseConfig.module.rules.push({ test: /\.tsx?$/, use: "babel-loader" })
    return baseConfig
  },
  webpackFinal: async config => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    })

    config.module.rules.push({ test: /\.tsx?$/, use: "babel-loader" })

    config.resolve.extensions.push(".mjs", ".ts", ".tsx")

    return config
  },
}
