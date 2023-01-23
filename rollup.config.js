/* eslint-disable global-require */
import svgSprite from '@panenco/rollup-plugin-svg-sprite';
import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';

import packageJson from './package.json';

const paths = require('./config/paths');

const external = Object.keys(packageJson.peerDependencies);

export default {
  input: paths.entryPoint,
  output: {
    file: path.join(paths.outputPath, 'ui.esm.js'),
    format: 'esm',
  },
  plugins: [
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
      moduleDirectories: ['node_modules', paths.nodeModules, paths.src],
    }),
    typescript({
      clean: true,
      typescript: ttypescript,
      tsconfigOverride: {
        exclude: ['node_modules', 'lib', 'stories'],
      },
    }),
    css({
      output: path.join(paths.outputPath, 'styles.css'),
    }),
    commonjs(),
    json(),
    svgSprite({
      outputFolder: paths.outputPath,
      spriteFilename: 'spritesheet.svg',
    }),
  ],
  external,
};
