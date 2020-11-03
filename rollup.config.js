import { getBabelInputPlugin, getBabelOutputPlugin } from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"
import commonjs from "@rollup/plugin-commonjs"
import autoExternal from "rollup-plugin-auto-external"
import resolve from "@rollup/plugin-node-resolve"
import svg from "rollup-plugin-svg"
import postcss from "rollup-plugin-postcss"

import pkg from "./package.json"

const extensions = [`.js`, `.jsx`, `.ts`, `.tsx`]

const plugins = [
  autoExternal(),
  svg({
    base64: true,
  }),
  getBabelInputPlugin({
    extensions,
    babelrc: false,
    skipPreflightCheck: true,
    exclude: `node_modules/**`,
    presets: [
      "@babel/typescript",
      [
        "@babel/react",
        {
          useSpread: true,
        },
      ],
    ],
    plugins: [
      ["babel-plugin-typescript-to-proptypes", { typeCheck: true }],
      "@babel/plugin-proposal-class-properties",
    ],
    babelHelpers: "bundled",
  }),
  resolve({ extensions }),
  commonjs({
    namedExports: {
      "highlight-words-core": ["findAll"],
    },
  }),
  postcss({
    extensions: [`.css`],
    minimize: true,
  }),
]

export default [
  {
    input: pkg.source,
    output: {
      dir: pkg.files[0],
      format: "esm",
      entryFileNames: "[name].esm.js",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    plugins,
  },
  {
    input: pkg.source,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false,
                loose: true,
                targets: {
                  node: "10.13.0",
                },
              },
            ],
          ],
        }),
        terser(),
      ],
    },
    plugins,
  },
]
