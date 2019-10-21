import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"
import svg from "rollup-plugin-svg"
import copy from "rollup-plugin-copy"
import del from "rollup-plugin-delete"

import pkg from "./package.json"

const extensions = [`.js`, `.jsx`, `.ts`, `.tsx`]

export default {
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      format: `cjs`,
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: `es`,
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    svg({
      base64: true,
    }),
    babel({
      exclude: `node_modules/**`,
      plugins: [`@babel/external-helpers`],
      extensions,
      runtimeHelpers: true,
    }),
    resolve({ extensions }),
    commonjs(),
    // TODO The following two plugins should be removed once all src is using TypeScript
    copy({
      targets: [
        { src: `dist/index-ts-only.d.ts`, dest: `dist/`, rename: `index.d.ts` },
      ],
      hook: `buildStart`,
    }),
    del({
      targets: `dist/index-ts-only.d.ts`,
      hook: `buildEnd`,
    }),
  ],
}
