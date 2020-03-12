// prettier-ignore
module.exports = async ({ config }) => {
  // console.dir(config.plugins, { depth: null }) || config;

  // Transpile Gatsby module because Gastby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  // defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader")

  // The next two lines should always reflect the config in jest-preprocess.js until there is a way for Gatsby to expose an internal webpack.config
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ]

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('babel-plugin-react-docgen'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('babel-plugin-emotion'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
  ]

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
  })

  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  config.resolve.extensions = [
    '.mjs',
    '.ts',
    '.tsx',
    ...config.resolve.extensions,
  ]

  return config
}
