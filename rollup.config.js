import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"
import svg from "rollup-plugin-svg"
import postcss from "rollup-plugin-postcss"

import pkg from "./package.json"

const extensions = [`.js`, `.jsx`, `.ts`, `.tsx`]

const plugins = [
  external(),
  svg({
    base64: true,
  }),
  babel({
    exclude: `node_modules/**`,
    extensions,
  }),
  resolve({ extensions }),
  commonjs({
    namedExports: {
      "highlight-words-core": ["findAll"],
    },
  }),
  postcss({
    extensions: [`.css`],
  }),
]

export default [
  {
    input: pkg.source,
    preserveModules: true,
    output: {
      dir: pkg.files[0],
      format: "esm",
      entryFileNames: `[name].[format].js`,
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
    },
    plugins,
  },
]
