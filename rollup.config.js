import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

const pkg = require('./package.json');
const libraryName = 'gatsby-interface';

const config = {
  input: './src/index.js',
  external: ['react', 'react-dom'],
  output: {
    file: pkg.module,
    format: 'es'
  },
  plugins: [
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    filesize()
  ]
};
export default config;
