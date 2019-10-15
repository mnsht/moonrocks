import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import svg from 'rollup-plugin-svg';
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'sr-components',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'sr-components',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs(),
    svg(),
    cleanup(),
    filesize()
  ]
};
