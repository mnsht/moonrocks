import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: 'index.js',
  external: ['react'],
  output: [
    {
      name: 'sr-components',
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    external({
      includeDependencies: true
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    resolve(),
    url(),
    uglify()
  ]
};
