/* eslint-disable global-require */
import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import svgr from '@svgr/rollup';

import packageJson from './package.json' assert { type: 'json' };
import paths from './config/paths.js';

const external = Object.keys(packageJson.peerDependencies);

export default {
  input: paths.entryPoint,
  output: {
    file: path.join(paths.outputPath, 'ui.esm.js'),
    format: 'esm',
  },
  plugins: [
    svgr(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: /node_modules/,
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.json'],
      preferBuiltins: false,
      moduleDirectories: ['node_modules', 'src'],
    }),
    typescript({
      clean: true,
      typescript: ttypescript,
      tsconfigOverride: {
        exclude: ['node_modules', 'lib', 'stories'],
      },
    }),
    css({
      output: 'styles.css',
    }),
    commonjs(),
    json(),
  ],
  external,
};
